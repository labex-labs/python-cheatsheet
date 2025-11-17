---
title: '开发者必知的十大文件系统操作'
description: '本指南全面概述了 Python 中必要的文件系统操作，包含示例和最佳实践。'
date: 'Aug 03, 2025'
updated: 'Aug 03, 2025'
tags: 'python, intermediate, file system'
socialImage: '/blog/path-lib-essentials.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "开发者必知的十大文件系统操作"
    description: "本指南全面概述了 Python 中必要的文件系统操作，包含示例和最佳实践。"
    date: "Aug 03, 2025"
    updated: "Aug 03, 2025"
    tags: "python, intermediate, file system"
    socialImage: "/blog/path-lib-essentials.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="开发者必知的十大文件系统操作" />

处理文件和目录是 Python 开发的基础部分，但许多开发人员只停留在基本操作，而没有探索 Python 路径处理能力的全部威力。无论您是构建 Web 应用程序、数据处理管道还是自动化脚本，掌握这些基本的​​文件系统模式将使您的代码更健壮、更高效、更易于维护。

## 1. 使用 Glob 模式进行智能文件发现

您通常需要根据模式而不是仅仅是确切的名称来查找文件。 <router-link to="/modules/pathlib-module">Path</router-link> 对象的 `glob` 方法是一个强大且直观的工具。

### 基本和递归搜索

假设您的项目在 `src/` 文件夹中。以下是如何找到所有 Python 文件。

```python
from pathlib import Path

# Path 对象是您进行文件系统操作的主要工具。
project_dir = Path("src/")

# 1. 查找 'src' 目录顶层的所有 Python 文件。
# 星号 (*) 是“匹配任何内容”的通配符。
print("--- 顶层 .py 文件 ---")
for f in project_dir.glob("*.py"):
    print(f)

# 2. 递归地查找项目中的所有 Python 文件。
# 'rglob' 方法是深度搜索的最佳选择。
print("\n--- 项目中的所有 .py 文件 ---")
for f in project_dir.rglob("*.py"):
    print(f)

# 示例输出：
# --- 顶层 .py 文件 ---
# src/main.py
# --- 项目中的所有 .py 文件 ---
# src/main.py
# src/utils/helpers.py
# src/api/models.py
```

### 高级模式匹配

`glob` 支持的不仅仅是 `*`。您可以使用 `?` 来匹配任何单个字符，使用 `[]` 来匹配字符范围，就像在 shell 中一样。

```python
from pathlib import Path

# 要运行此代码，请创建一个包含示例文件的 'logs' 目录。
logs_dir = Path("logs/")
logs_dir.mkdir(exist_ok=True)
Path("logs/app1.log").touch()
Path("logs/app2.log").touch()
Path("logs/app_extra.log").touch()
Path("logs/2023-10-01.log").touch()
Path("logs/2023-11-01.log").touch()


# 查找类似 'app1.log', 'app2.log' 的日志，但不包括 'app_extra.log'
print("--- 单字符通配符 ---")
for f in logs_dir.glob("app?.log"):
    print(f)

# 查找 2023 年 10 月或 11 月的日志
print("\n--- 字符范围 ---")
for f in logs_dir.glob("2023-[10-11]-*.log"):
    print(f)

# 示例输出：
# --- 单字符通配符 ---
# logs/app1.log
# logs/app2.log
#
# --- 字符范围 ---
# logs/2023-10-01.log
# logs/2023-11-01.log
```

## 2. 精确导航目录

有时您需要的控制比 `rglob` 提供的更精细，例如当您需要跳过特定目录时。与其退回到 <router-link to="/modules/os-module#walking-a-directory-tree">os.walk</router-link>，不如使用 `pathlib` 自己的方法编写一个干净的递归函数。

```python
from pathlib import Path

def smart_directory_walk(root_path, skip_dirs=None, file_patterns=None):
    """
    使用 pathlib 遍历目录树，允许您跳过整个子树并仅生成匹配特定模式的文件。
    """
    if skip_dirs is None:
        # 使用集合以实现快速查找。
        skip_dirs = {'.git', '__pycache__', 'node_modules', '.venv'}
    if file_patterns is None:
        file_patterns = ["*"]

    root = Path(root_path)
    for item in root.iterdir():
        # 如果该项是目录，则决定是否递归进入。
        if item.is_dir() and item.name not in skip_dirs:
            # yield from 是从递归调用中传递结果的一种简洁方式。
            yield from smart_directory_walk(item, skip_dirs, file_patterns)
        # 如果是文件，则检查它是否匹配我们的模式。
        elif item.is_file():
            if any(item.match(p) for p in file_patterns):
                yield item

if __name__ == "__main__":
    print("正在搜索 Python 和文本文件，跳过标准的虚拟环境：")
    # 要运行此代码，请创建一些虚拟文件和文件夹。
    project_root = Path(".")
    (project_root / "src").mkdir(exist_ok=True)
    (project_root / "src" / "main.py").touch()
    (project_root / ".venv").mkdir(exist_ok=True)
    (project_root / ".venv" / "ignored.py").touch()

    for f in smart_directory_walk(project_root, file_patterns=["*.py", "*.txt"]):
        print(f"找到：{f}")
```

## 3. 原子写入文件以确保数据安全

如果您的脚本在写入 <router-link to="/cheatsheet/json-yaml#json">config.json</router-link> 的过程中崩溃了怎么办？您会得到一个损坏的文件。**原子操作**可以防止这种情况：它是一个全有或全无的操作。标准做法是写入一个临时文件，然后执行一个原子的 `move` 操作。

```python
import tempfile
import shutil
import os
from pathlib import Path

def atomic_write(file_path, content, encoding='utf-8'):
    """
    以原子方式将内容写入文件，以防止数据损坏。
    """
    target_path = Path(file_path)
    target_path.parent.mkdir(parents=True, exist_ok=True)

    # 在目标文件所在的同一目录中创建一个临时文件。
    # 这至关重要，因为在同一文件系统上移动文件是原子的。
    with tempfile.NamedTemporaryFile(
        mode='w',
        encoding=encoding,
        dir=target_path.parent,
        delete=False,
        suffix='.tmp'
    ) as tmp_file:
        tmp_file.write(content)
        # 对于关键数据，os.fsync() 确保数据已物理写入磁盘。
        # 这是少数仍需要 os 模块进行底层控制的情况之一。
        tmp_file.flush()
        os.fsync(tmp_file.fileno())
        temp_path = tmp_file.name

    # 原子操作：将临时文件重命名为最终目标。
    # shutil.move 很智能，可以在不同文件系统上工作。
    shutil.move(temp_path, target_path)
    print(f"已原子写入 {target_path}")

if __name__ == "__main__":
    # 这将安全地创建 'config/settings.json'。
    atomic_write("config/settings.json", '{"theme": "dark", "retries": 3}')
```

## 4. 掌握临时文件和目录

临时文件对于中间处理至关重要。Python 的 `tempfile` 模块与 `pathlib` 完美集成，创建安全的文件和目录，它们会自动清理自己。

```python
import tempfile
import json
from pathlib import Path

# 模拟工作的虚拟函数
def process_file(file_path):
    print(f"正在处理 {file_path}...")
    return f"processed_{file_path.name}"

def batch_process_data(list_of_data):
    """
    使用临时目录处理一批数据，确保所有中间文件自动清理。
    """
    # TemporaryDirectory 在 'with' 块退出时创建并删除一个目录。
    with tempfile.TemporaryDirectory() as tmp_dir_str:
        tmp_dir = Path(tmp_dir_str)
        print(f"创建了临时目录：{tmp_dir}")
        results = []

        for i, data_item in enumerate(list_of_data):
            # 在我们的临时目录中创建一个临时的 Path 对象
            temp_file = tmp_dir / f"input_{i}.json"
            temp_file.write_text(json.dumps(data_item))

            result = process_file(temp_file)
            results.append(result)

        # 'tmp_dir' 及其所有内容在此处自动删除。
        return results

if __name__ == "__main__":
    data_to_process = [{"id": 1, "value": "A"}, {"id": 2, "value": "B"}]
    final_results = batch_process_data(data_to_process)
    print(f"\n最终结果：{final_results}")
    print("临时目录已删除。")
```

## 5. 验证和清理用户提供的路径

永远不要相信来自外部源的路径。恶意用户可能会提供 `../../etc/passwd` 来尝试读取敏感文件。您必须使用 `pathlib` 的内置安全功能来验证和清理任何外部路径输入。

```python
import re
from pathlib import Path

def sanitize_filename(filename, replacement='_'):
    """
    清理一个字符串，使其成为任何操作系统上有效且安全的文件名。
    """
    invalid_chars = r'[<>:"/\\|?*\x00-\x1f]'
    sanitized = re.sub(invalid_chars, replacement, filename)
    # 可以在此处添加其他检查（例如，针对 Windows 保留名称）
    return sanitized.strip(' .')

def validate_and_resolve_path(base_dir, user_path_str):
    """
    安全地解析用户提供的路径，确保它保留在基本目录内。
    这对于防止目录遍历攻击至关重要。
    """
    base_dir = Path(base_dir).resolve()

    # resolve() 创建一个规范的绝对路径，清理 '..' 段。
    resolved_path = (base_dir / user_path_str).resolve()

    # 关键的安全检查：最终路径是否仍在我们的安全 base_dir 内？
    # Path.is_relative_to() 在 Python 3.9 中添加，非常适合此目的。
    if resolved_path.is_relative_to(base_dir):
        return resolved_path
    else:
        raise PermissionError("检测到路径遍历尝试。")

if __name__ == "__main__":
    # 1. 清理一个可能有问题的​​文件名
    dirty_name = "My Report: Part 1/2 <Final?>.docx"
    clean_name = sanitize_filename(dirty_name)
    print(f"已清理 '{dirty_name}' 为 '{clean_name}'")

    # 2. 验证用户路径
    upload_dir = "uploads"
    Path(upload_dir).mkdir(exist_ok=True)
    try:
        # 安全路径
        safe_path = validate_and_resolve_path(upload_dir, "images/profile.jpg")
        print(f"OK: 路径安全：{safe_path}")

        # 恶意路径
        malicious_path_str = "../../../etc/hosts"
        print(f"\n正在测试恶意路径：'{malicious_path_str}'")
        validate_and_resolve_path(upload_dir, malicious_path_str)
    except PermissionError as e:
        print(f"错误：{e}")
```

## 6. 使用 `pathlib` 计算目录大小

计算目录大小是一个经典任务。虽然 `os.scandir` 以速度著称，但在超大型文件系统上，纯 `pathlib` 方法（使用 `rglob`）通常更具可读性和便利性，除非是性能要求极高的应用程序。

```python
from pathlib import Path

def calculate_directory_size(directory):
    """
    使用可读的纯 pathlib 方法计算目录及其所有子目录的总大小。
    """
    dir_path = Path(directory)
    total_size = 0
    # rglob('*') 是一个生成器，因此它不会一次将所有路径加载到内存中。
    for path in dir_path.rglob('*'):
        # 我们只对文件大小求和。
        if path.is_file():
            try:
                # path.stat().st_size 以字节为单位给出大小。
                total_size += path.stat().st_size
            except (PermissionError, FileNotFoundError):
                # 忽略我们无法访问的文件。
                continue
    return total_size

def format_size(size_bytes):
    """将字节格式化为人类可读的字符串（KB、MB、GB）。"""
    if size_bytes == 0:
        return "0B"
    units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']
    i = 0
    while size_bytes >= 1024 and i < len(units) - 1:
        size_bytes /= 1024
        i += 1
    return f"{size_bytes:.2f} {units[i]}"

if __name__ == "__main__":
    target_directory = "."
    print(f"正在计算 '{Path(target_directory).resolve()}' 的大小...")
    total_bytes = calculate_directory_size(target_directory)
    print(f"总大小：{format_size(total_bytes)} ({total_bytes:,} 字节)")
```

## 7. 带有进度和验证的大文件复制

复制大文件时，您希望向用户提供反馈并确保复制的文件没有损坏。此模式结合了 `shutil` 用于复制、`hashlib` 用于数据完整性以及 `tqdm` 库用于漂亮的进度条。

**注意：** 您需要安装 `tqdm`：`pip install tqdm`

```python
import shutil
import hashlib
import os
from pathlib import Path
from tqdm import tqdm

def calculate_file_hash(file_path, algorithm='sha256', chunk_size=65536):
    """计算文件的哈希值。"""
    hash_obj = hashlib.new(algorithm)
    with Path(file_path).open('rb') as f:
        for chunk in iter(lambda: f.read(chunk_size), b""):
            hash_obj.update(chunk)
    return hash_obj.hexdigest()

def copy_with_verification(src, dst):
    """
    带进度条复制文件并验证副本的完整性。
    """
    src_path, dst_path = Path(src), Path(dst)
    dst_path.parent.mkdir(parents=True, exist_ok=True)

    src_size = src_path.stat().st_size
    print(f"正在计算 {src_path.name} 的哈希值...")
    src_hash = calculate_file_hash(src_path)

    print(f"正在将 {src_path.name} 复制到 {dst_path}...")
    with src_path.open('rb') as fsrc, \
         dst_path.open('wb') as fdst, \
         tqdm(total=src_size, unit='B', unit_scale=True, desc=src_path.name) as pbar: \
        shutil.copyfileobj(fsrc, fdst, length=16*1024*1024)
        # 如果 copyfileobj 在 tqdm 更新之前完成，请手动更新进度条
        pbar.n = src_size
        pbar.refresh()


    print("正在验证副本...")
    dst_hash = calculate_file_hash(dst_path)

    if src_hash != dst_hash:
        dst_path.unlink() # 删除损坏的副本
        raise IOError(f"验证失败！{dst_path} 的哈希值不匹配")

    print(f"成功！{dst_path.name} 已复制并验证。")
    return dst_path

if __name__ == "__main__":
    source_file = Path("large_file.dat")
    if not source_file.exists():
        print(f"正在创建虚拟文件 '{source_file}'...")
        # os.urandom 在这里仅用于获取随机字节以创建虚拟文件。
        source_file.write_bytes(os.urandom(50 * 1024 * 1024)) # 50 MB

    try:
        copy_with_verification(source_file, Path("backup/large_file.dat"))
    except (IOError, FileNotFoundError) as e:
        print(f"发生错误：{e}")
```

## 8. 监控目录变化

想自动处理放入文件夹的文件吗？您需要一个文件系统监视器。虽然 `watchdog` 库最适合生产环境，但了解如何使用 `pathlib` 和轮询构建一个简单的监视器也很有用。

```python
import time
from pathlib import Path
from collections import defaultdict

class SimpleFileWatcher:
    """一个通过轮询目录变化的基本文件监视器。"""
    def __init__(self, watch_directory, patterns=None):
        self.watch_dir = Path(watch_directory)
        self.patterns = patterns or ["*"]
        self._file_states = {} # 存储 {path: mtime}
        self.callbacks = defaultdict(list)

    def on(self, event_type, callback):
        self.callbacks[event_type].append(callback)

    def _trigger(self, event_type, file_path):
        for callback in self.callbacks[event_type]:
            try:
                callback(file_path)
            except Exception as e:
                print(f"回调中发生错误：{e}")

    def watch(self, poll_interval=1.0):
        print(f"正在监视 {self.watch_dir.resolve()}... (按 Ctrl+C 停止)")
        try:
            while True:
                self._scan()
                time.sleep(poll_interval)
        except KeyboardInterrupt:
            print("\n正在停止监视器。")

    def _scan(self):
        current_files = set()
        for pattern in self.patterns:
            for path in self.watch_dir.rglob(pattern):
                if path.is_file():
                    current_files.add(path)
                    try:
                        mtime = path.stat().st_mtime
                        if path not in self._file_states:
                            self._file_states[path] = mtime
                            self._trigger('created', path)
                        elif self._file_states[path] != mtime:
                            self._file_states[path] = mtime
                            self._trigger('modified', path)
                    except FileNotFoundError:
                        continue

        deleted_files = set(self._file_states.keys()) - current_files
        for path in deleted_files:
            del self._file_states[path]
            self._trigger('deleted', path)

def log_change(event):
    def handler(path):
        print(f"[{event.upper()}] - {path.name} 在 {time.ctime()}")
    return handler

if __name__ == "__main__":
    watch_folder = Path("watched_folder")
    watch_folder.mkdir(exist_ok=True)

    watcher = SimpleFileWatcher(watch_folder, patterns=["*.txt", "*.csv"])
    watcher.on('created', log_change('created'))
    watcher.on('modified', log_change('modified'))

    print("监视器已启动。尝试在 'watched_folder' 中创建/编辑文件。")
    watcher.watch()
```

## 9. 灵活管理配置文件

应用程序需要来自文件的配置（<router-link to="/cheatsheet/json-yaml#json">JSON</router-link>、<router-link to="/cheatsheet/json-yaml#yaml">YAML</router-link>、INI）。这个 `ConfigManager` 优雅地处理不同格式，使用 `pathlib` 管理路径，并使用我们的 `atomic_write` 函数安全地保存设置。

**注意：** 您需要安装 `PyYAML`：`pip install pyyaml`

```python
import json
import yaml
import configparser
from pathlib import Path
from typing import Any, Dict

# 在实际项目中，来自模式 3 的 'atomic_write' 函数将位于共享的 utils.py 文件中。
# 我们假设它在这里可用。

class ConfigManager:
    """用于以各种格式加载和保存配置文件的管理器。"""
    def __init__(self, config_path: str):
        self.path = Path(config_path)
        self.type = self.path.suffix.lower().strip('.')

    def load(self) -> Dict[str, Any]:
        if not self.path.exists():
            return {}
        try:
            with self.path.open('r', encoding='utf-8') as f:
                if self.type == 'json':
                    return json.load(f)
                elif self.type in ['yaml', 'yml']:
                    return yaml.safe_load(f) or {}
                # 如果需要，可以添加其他格式，如 INI
        except Exception as e:
            raise IOError(f"加载配置 {self.path} 失败：{e}")
        return {}

    def save(self, config: Dict[str, Any]):
        content = ""
        try:
            if self.type == 'json':
                content = json.dumps(config, indent=2)
            elif self.type in ['yaml', 'yml']:
                content = yaml.dump(config, default_flow_style=False)
            # 使用我们的安全写入函数
            atomic_write(self.path, content)
        except Exception as e:
            raise IOError(f"保存配置 {self.path} 失败：{e}")

if __name__ == "__main__":
    json_config = ConfigManager("config.yml")
    settings = {
        "database": {"host": "db.example.com", "port": 5432},
        "features": {"new_ui": True, "beta_access": False}
    }
    print(f"正在将设置保存到 {json_config.path}...")
    json_config.save(settings)

    loaded = json_config.load()
    print("已加载的设置：")
    print(yaml.dump(loaded))
    assert settings == loaded
```

## 10. 安全处理存档（ZIP、TAR）

处理 <router-link to="/modules/zipfile-module">.zip</router-link> 或 <router-link to="/modules/zipfile-module">.tar.gz</router-link> 文件很常见。这个 `ArchiveManager` 使用 `pathlib` 提供了一个简单、安全的接口来创建和提取存档，包括关键的检查以防止路径遍历攻击。

```python
import zipfile
import tarfile
from pathlib import Path

class ArchiveManager:
    """处理 zip 和 tar 存档的安全简单接口。"""

    def _is_path_safe(self, path_str, target_dir):
        target_dir = Path(target_dir).resolve()
        resolved_path = (target_dir / path_str).resolve()
        return resolved_path.is_relative_to(target_dir)

    def extract(self, archive_path, extract_to):
        archive_path = Path(archive_path)
        extract_to = Path(extract_to)
        extract_to.mkdir(parents=True, exist_ok=True)

        if archive_path.suffix == '.zip':
            with zipfile.ZipFile(archive_path, 'r') as archive:
                for member_name in archive.namelist():
                    if self._is_path_safe(member_name, extract_to):
                        archive.extract(member_name, extract_to)
                    else:
                        print(f"警告：跳过 zip 中不安全的路径：{member_name}")
        elif '.tar' in "".join(archive_path.suffixes):
            with tarfile.open(archive_path, 'r:*') as archive:
                for member in archive.getmembers():
                    if self._is_path_safe(member.name, extract_to):
                        archive.extract(member, path=extract_to, set_attrs=False)
                    else:
                        print(f"警告：跳过 tar 中不安全的路径：{member.name}")
        else:
            raise ValueError(f"不支持的存档类型：{archive_path.suffix}")
        print(f"已成功将 {archive_path.name} 提取到 {extract_to}")

    def create(self, source_dir, output_path):
        source_dir = Path(source_dir)
        output_path = Path(output_path)
        output_path.parent.mkdir(parents=True, exist_ok=True)

        if output_path.suffix == '.zip':
            with zipfile.ZipFile(output_path, 'w', zipfile.ZIP_DEFLATED) as archive:
                for path in source_dir.rglob("*"):
                    archive.write(path, path.relative_to(source_dir))
        elif output_path.name.endswith('.tar.gz'):
             with tarfile.open(output_path, 'w:gz') as archive:
                archive.add(source_dir, arcname='.')
        else:
            raise ValueError(f"不支持的存档类型：{output_path.suffix}")
        print(f"已成功创建存档 {output_path}")

if __name__ == "__main__":
    project_dir = Path("my_project")
    (project_dir / "data").mkdir(parents=True, exist_ok=True)
    (project_dir / "main.py").write_text("print('hello')")

    manager = ArchiveManager()
    archive_file = Path("backups/my_project.tar.gz")
    manager.create(project_dir, archive_file)

    extract_dir = Path("restored_project")
    manager.extract(archive_file, extract_dir)
```

## 最后的想法

您刚刚探索了使用 Python 的 `pathlib` 模块进行文件系统操作的十个强大、实用的模式。

- **拥抱 `pathlib`：** 其面向对象的方法更清晰、更安全、更具表现力，优于旧的基于字符串的方法。使其成为您处理所有路径操作的默认工具。
- **安全第一：** 始终使用 `is_relative_to` 验证外部输入，原子地写入关键文件，并安全地提取存档。
- **可读性很重要：** `pathlib` 代码通常是自文档化的。 `Path` 对象上的一系列方法比一系列嵌套的 <router-link to="/modules/os-module#linux-and-windows-paths">os.path.join</router-link> 调用更容易理解。

通过将这些模式纳入您的工作中，您将编写出不仅更专业，而且明显更健壮、更安全的 Python 代码。编码愉快！
