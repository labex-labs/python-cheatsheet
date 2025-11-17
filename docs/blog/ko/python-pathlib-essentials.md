---
title: '개발자가 알아야 할 10 가지 필수 파일 시스템 작업'
description: '이 가이드는 예제와 모범 사례를 포함하여 Python 에서 필수적인 파일 시스템 작업을 포괄적으로 개요합니다.'
date: 'Aug 03, 2025'
updated: 'Aug 03, 2025'
tags: 'python, intermediate, file system'
socialImage: '/blog/path-lib-essentials.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "개발자가 알아야 할 10 가지 필수 파일 시스템 작업"
    description: "이 가이드는 예제와 모범 사례를 포함하여 Python 에서 필수적인 파일 시스템 작업을 포괄적으로 개요합니다."
    date: "Aug 03, 2025"
    updated: "Aug 03, 2025"
    tags: "python, intermediate, file system"
    socialImage: "/blog/path-lib-essentials.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="개발자가 알아야 할 10가지 필수 파일 시스템 작업" />

파일 및 디렉터리와 함께 작업하는 것은 Python 개발의 기본이지만, 많은 개발자는 기본 작업에만 머무르며 Python 의 경로 처리 기능의 모든 잠재력을 탐색하지 못합니다. 웹 애플리케이션, 데이터 처리 파이프라인 또는 자동화 스크립트를 구축하든, 이러한 필수 파일 시스템 패턴을 숙달하면 코드가 더욱 강력하고 효율적이며 유지 관리하기 쉬워집니다.

## 1. Glob 패턴을 사용한 스마트 파일 검색

정확한 이름뿐만 아니라 패턴을 기반으로 파일을 찾아야 하는 경우가 많습니다. <router-link to="/modules/pathlib-module">Path</router-link> 객체의 `glob` 메서드는 이를 위한 강력하고 직관적인 도구입니다.

### 기본 및 재귀 검색

`src/` 폴더에 프로젝트가 있다고 가정해 보겠습니다. 다음은 모든 Python 파일을 찾는 방법입니다.

```python
from pathlib import Path

# Path 객체는 파일 시스템 작업을 위한 주요 도구입니다.
project_dir = Path("src/")

# 1. 'src' 디렉터리의 최상위 수준에 있는 모든 Python 파일을 찾습니다.
# 별표 (*) 는 "무엇이든 일치"하는 와일드카드입니다.
print("--- Top-level .py files ---")
for f in project_dir.glob("*.py"):
    print(f)

# 2. 모든 하위 디렉터리를 통해 재귀적으로 모든 Python 파일을 찾습니다.
# 'rglob' 메서드는 심층 검색을 위한 최고의 친구입니다.
print("\n--- All .py files in the project ---")
for f in project_dir.rglob("*.py"):
    print(f)

# 예시 출력:
# --- Top-level .py files ---
# src/main.py
# --- All .py files in the project ---
# src/main.py
# src/utils/helpers.py
# src/api/models.py
```

### 고급 패턴 일치

`glob`은 `*`만 지원하는 것이 아닙니다. 셸에서와 마찬가지로 `?`를 사용하여 단일 문자를 일치시키고 `[]`를 사용하여 문자 범위를 일치시킬 수 있습니다.

```python
from pathlib import Path

# 이를 실행하려면 예시 파일이 있는 'logs' 디렉터리를 생성합니다.
logs_dir = Path("logs/")
logs_dir.mkdir(exist_ok=True)
Path("logs/app1.log").touch()
Path("logs/app2.log").touch()
Path("logs/app_extra.log").touch()
Path("logs/2023-10-01.log").touch()
Path("logs/2023-11-01.log").touch()


# 'app1.log', 'app2.log'와 같은 로그는 찾지만 'app_extra.log'는 찾지 않음
print("--- Single character wildcard ---")
for f in logs_dir.glob("app?.log"):
    print(f)

# 2023 년 10 월 또는 11 월의 로그 찾기
print("\n--- Character range ---")
for f in logs_dir.glob("2023-[10-11]*.log"):
    print(f)

# 예시 출력:
# --- Single character wildcard ---
# logs/app1.log
# logs/app2.log
#
# --- Character range ---
# logs/2023-10-01.log
# logs/2023-11-01.log
```

## 2. 정밀하게 디렉터리 탐색

때로는 `rglob`이 제공하는 것보다 더 많은 제어가 필요할 수 있습니다. 예를 들어 특정 디렉터리를 건너뛰어야 할 때입니다. <router-link to="/modules/os-module#walking-a-directory-tree">os.walk</router-link>로 되돌아가는 대신 `pathlib`의 자체 메서드를 사용하여 깔끔하고 재귀적인 함수를 작성할 수 있습니다.

```python
from pathlib import Path

def smart_directory_walk(root_path, skip_dirs=None, file_patterns=None):
    """
    pathlib 를 사용하여 디렉터리 트리를 탐색하며, 전체 하위 트리를 건너뛰고
    특정 패턴과 일치하는 파일만 산출 (yield) 할 수 있도록 합니다.
    """
    if skip_dirs is None:
        # 빠른 조회를 위해 집합 (set) 이 사용됩니다.
        skip_dirs = {'.git', '__pycache__', 'node_modules', '.venv'}
    if file_patterns is None:
        file_patterns = ["*"]

    root = Path(root_path)
    for item in root.iterdir():
        # 항목이 디렉터리인 경우 재귀적으로 들어갈지 결정합니다.
        if item.is_dir() and item.name not in skip_dirs:
            # yield from 은 재귀 호출의 결과를 전달하는 깔끔한 방법입니다.
            yield from smart_directory_walk(item, skip_dirs, file_patterns)
        # 항목이 파일인 경우 패턴과 일치하는지 확인합니다.
        elif item.is_file():
            if any(item.match(p) for p in file_patterns):
                yield item

if __name__ == "__main__":
    print("표준 가상 환경은 건너뛰고 Python 및 텍스트 파일 검색 중:")
    # 이를 실행하려면 일부 더미 파일과 폴더를 생성합니다.
    project_root = Path(".")
    (project_root / "src").mkdir(exist_ok=True)
    (project_root / "src" / "main.py").touch()
    (project_root / ".venv").mkdir(exist_ok=True)
    (project_root / ".venv" / "ignored.py").touch()

    for f in smart_directory_walk(project_root, file_patterns=["*.py", "*.txt"]):
        print(f"Found: {f}")
```

## 3. 데이터 안전을 위한 원자적 파일 쓰기

스크립트가 <router-link to="/cheatsheet/json-yaml#json">config.json</router-link> 쓰기를 중간에 중단하면 어떻게 될까요? 손상된 파일을 얻게 됩니다. **원자적 작업 (atomic operation)**은 이를 방지합니다. 즉, 전부 아니면 전무 (all-or-nothing) 작업입니다. 이를 수행하는 표준 방법은 임시 파일에 쓴 다음 단일 원자적 `move` 작업을 수행하는 것입니다.

```python
import tempfile
import shutil
import os
from pathlib import Path

def atomic_write(file_path, content, encoding='utf-8'):
    """
    데이터 손상을 방지하기 위해 파일을 원자적으로 씁니다.
    """
    target_path = Path(file_path)
    target_path.parent.mkdir(parents=True, exist_ok=True)

    # 최종 파일과 동일한 디렉터리에 임시 파일을 생성합니다.
    # 이는 동일한 파일 시스템에서 파일을 이동하는 것이 원자적이기 때문에 중요합니다.
    with tempfile.NamedTemporaryFile(
        mode='w',
        encoding=encoding,
        dir=target_path.parent,
        delete=False,
        suffix='.tmp'
    ) as tmp_file:
        tmp_file.write(content)
        # 중요한 데이터의 경우 os.fsync() 는 데이터가 물리적으로 디스크에 기록되도록 보장합니다.
        # 이는 os 모듈이 여전히 낮은 수준의 제어에 필요한 몇 안 되는 경우 중 하나입니다.
        tmp_file.flush()
        os.fsync(tmp_file.fileno())
        temp_path = tmp_file.name

    # 원자적 작업: 임시 파일을 최종 대상으로 이름을 바꿉니다.
    # shutil.move 는 스마트하며 다른 파일 시스템에서도 작동합니다.
    shutil.move(temp_path, target_path)
    print(f"Atomically wrote to {target_path}")

if __name__ == "__main__":
    # 이는 'config/settings.json'을 안전하게 생성합니다.
    atomic_write("config/settings.json", '{"theme": "dark", "retries": 3}')
```

## 4. 임시 파일 및 디렉터리 마스터하기

임시 파일은 중간 처리에 필수적입니다. Python 의 `tempfile` 모듈은 `pathlib`와 훌륭하게 통합되어 자동으로 정리되는 안전한 파일과 디렉터리를 생성합니다.

```python
import tempfile
import json
from pathlib import Path

# 작업을 시뮬레이션하는 더미 함수
def process_file(file_path):
    print(f"Processing {file_path}...")
    return f"processed_{file_path.name}"

def batch_process_data(list_of_data):
    """
    임시 디렉터리를 사용하여 데이터 배치를 처리하며,
    모든 중간 파일이 자동으로 정리되도록 보장합니다.
    """
    # TemporaryDirectory 는 'with' 블록이 종료될 때 제거되는 디렉터리를 생성합니다.
    with tempfile.TemporaryDirectory() as tmp_dir_str:
        tmp_dir = Path(tmp_dir_str)
        print(f"Created temporary directory: {tmp_dir}")
        results = []

        for i, data_item in enumerate(list_of_data):
            # 임시 디렉터리 내에 임시 Path 객체 생성
            temp_file = tmp_dir / f"input_{i}.json"
            temp_file.write_text(json.dumps(data_item))

            result = process_file(temp_file)
            results.append(result)

        # 'tmp_dir' 및 그 내용물 전체가 여기서 자동으로 삭제됩니다.
        return results

if __name__ == "__main__":
    data_to_process = [{"id": 1, "value": "A"}, {"id": 2, "value": "B"}]
    final_results = batch_process_data(data_to_process)
    print(f"\nFinal results: {final_results}")
    print("Temporary directory has been removed.")
```

## 5. 사용자 제공 경로 유효성 검사 및 정리

외부 소스에서 제공하는 경로를 절대 신뢰해서는 안 됩니다. 악의적인 사용자가 민감한 파일을 읽으려고 `../../etc/passwd`를 제공할 수 있습니다. `pathlib`의 내장 보안 기능을 사용하여 모든 외부 경로 입력을 검증하고 정리해야 합니다.

```python
import re
from pathlib import Path

def sanitize_filename(filename, replacement='_'):
    """
    모든 OS 에서 유효하고 안전한 파일 이름이 되도록 문자열을 정리합니다.
    """
    invalid_chars = r'[<>:"/\\|?*\x00-\x1f]'
    sanitized = re.sub(invalid_chars, replacement, filename)
    # 추가 확인 사항을 여기에 추가할 수 있습니다 (예: Windows 예약 이름의 경우)
    return sanitized.strip(' .')

def validate_and_resolve_path(base_dir, user_path_str):
    """
    사용자가 제공한 경로를 안전하게 확인하고, 해당 경로가 기본 디렉터리 내에
    머무르도록 보장합니다. 이는 디렉터리 순회 공격을 방지하는 데 매우 중요합니다.
    """
    base_dir = Path(base_dir).resolve()

    # resolve() 는 '..' 세그먼트를 정리하는 정규화된 절대 경로를 생성합니다.
    resolved_path = (base_dir / user_path_str).resolve()

    # 핵심 보안 확인: 최종 경로가 안전한 base_dir 내에 있습니까?
    # Path.is_relative_to() 는 Python 3.9 에 추가되었으며 이를 위해 완벽합니다.
    if resolved_path.is_relative_to(base_dir):
        return resolved_path
    else:
        raise PermissionError("Path traversal attempt detected.")

if __name__ == "__main__":
    # 1. 잠재적으로 지저분한 파일 이름 정리
    dirty_name = "My Report: Part 1/2 <Final?>.docx"
    clean_name = sanitize_filename(dirty_name)
    print(f"Sanitized '{dirty_name}' to '{clean_name}'")

    # 2. 사용자 경로 유효성 검사
    upload_dir = "uploads"
    Path(upload_dir).mkdir(exist_ok=True)
    try:
        # 안전한 경로
        safe_path = validate_and_resolve_path(upload_dir, "images/profile.jpg")
        print(f"OK: Path is safe: {safe_path}")

        # 악의적인 경로
        malicious_path_str = "../../../etc/hosts"
        print(f"\nTesting malicious path: '{malicious_path_str}'")
        validate_and_resolve_path(upload_dir, malicious_path_str)
    except PermissionError as e:
        print(f"ERROR: {e}")
```

## 6. `pathlib`을 사용하여 디렉터리 크기 계산

디렉터리 크기를 계산하는 것은 고전적인 작업입니다. `os.scandir`이 속도로 알려져 있지만, 대규모 파일 시스템에서 성능이 중요한 응용 프로그램이 아닌 한 `rglob`을 사용하는 순수 `pathlib` 접근 방식이 종종 더 읽기 쉽고 편리합니다.

```python
from pathlib import Path

def calculate_directory_size(directory):
    """
    읽기 쉬운 순수 pathlib 접근 방식을 사용하여 디렉터리 및 모든 하위 디렉터리의
    총 크기를 계산합니다.
    """
    dir_path = Path(directory)
    total_size = 0
    # rglob('*') 는 제너레이터이므로 모든 경로를 한 번에 메모리에 로드하지 않습니다.
    for path in dir_path.rglob('*'):
        # 파일 크기만 합산합니다.
        if path.is_file():
            try:
                # path.stat().st_size 는 바이트 단위의 크기를 제공합니다.
                total_size += path.stat().st_size
            except (PermissionError, FileNotFoundError):
                # 액세스할 수 없는 파일은 건너뜁니다.
                continue
    return total_size

def format_size(size_bytes):
    """바이트를 사람이 읽을 수 있는 문자열 (KB, MB, GB) 로 포맷합니다."""
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
    print(f"Calculating size of '{Path(target_directory).resolve()}'...")
    total_bytes = calculate_directory_size(target_directory)
    print(f"Total size: {format_size(total_bytes)} ({total_bytes:,} bytes)")
```

## 7. 진행 상황 및 확인을 통한 대용량 파일 복사

대용량 파일을 복사할 때 사용자에게 피드백을 제공하고 복사된 파일이 손상되지 않았는지 확인하고 싶습니다. 이 패턴은 복사를 위한 `shutil`, 데이터 무결성을 위한 `hashlib`, 아름다운 진행률 표시줄을 위한 `tqdm` 라이브러리를 결합합니다.

**참고:** `tqdm`을 설치해야 합니다: `pip install tqdm`

```python
import shutil
import hashlib
import os
from pathlib import Path
from tqdm import tqdm

def calculate_file_hash(file_path, algorithm='sha256', chunk_size=65536):
    """파일의 해시를 계산합니다."""
    hash_obj = hashlib.new(algorithm)
    with Path(file_path).open('rb') as f:
        for chunk in iter(lambda: f.read(chunk_size), b""):
            hash_obj.update(chunk)
    return hash_obj.hexdigest()

def copy_with_verification(src, dst):
    """
    진행률 표시줄과 함께 파일을 복사하고 복사본의 무결성을 확인합니다.
    """
    src_path, dst_path = Path(src), Path(dst)
    dst_path.parent.mkdir(parents=True, exist_ok=True)

    src_size = src_path.stat().st_size
    print(f"Calculating hash for {src_path.name}...")
    src_hash = calculate_file_hash(src_path)

    print(f"Copying {src_path.name} to {dst_path}...")
    with src_path.open('rb') as fsrc, \
         dst_path.open('wb') as fdst, \
         tqdm(total=src_size, unit='B', unit_scale=True, desc=src_path.name) as pbar: \
        shutil.copyfileobj(fsrc, fdst, length=16*1024*1024)
        # copyfileobj 가 완료되기 전에 tqdm 이 업데이트되면 수동으로 진행률 표시줄 업데이트
        pbar.n = src_size
        pbar.refresh()


    print("Verifying copy...")
    dst_hash = calculate_file_hash(dst_path)

    if src_hash != dst_hash:
        dst_path.unlink() # 손상된 복사본 삭제
        raise IOError(f"Verification failed! Hashes do not match for {dst_path}")

    print(f"Success! {dst_path.name} copied and verified.")
    return dst_path

if __name__ == "__main__":
    source_file = Path("large_file.dat")
    if not source_file.exists():
        print(f"Creating dummy file '{source_file}'...")
        # os.urandom 은 더미 파일을 위한 임의의 바이트를 얻기 위해 여기서 사용됩니다.
        source_file.write_bytes(os.urandom(50 * 1024 * 1024)) # 50 MB

    try:
        copy_with_verification(source_file, Path("backup/large_file.dat"))
    except (IOError, FileNotFoundError) as e:
        print(f"An error occurred: {e}")
```

## 8. 변경 사항에 대한 디렉터리 모니터링

파일을 자동으로 처리해야 합니까? 파일 시스템 감시자가 필요합니다. `watchdog`과 같은 라이브러리가 프로덕션에 가장 적합하지만, `pathlib`과 폴링을 사용하여 간단한 감시자를 직접 구축하는 방법을 아는 것은 유용합니다.

```python
import time
from pathlib import Path
from collections import defaultdict

class SimpleFileWatcher:
    """변경 사항에 대해 디렉터리를 폴링하는 기본 파일 감시자."""
    def __init__(self, watch_directory, patterns=None):
        self.watch_dir = Path(watch_directory)
        self.patterns = patterns or ["*"]
        self._file_states = {} # {path: mtime} 저장
        self.callbacks = defaultdict(list)

    def on(self, event_type, callback):
        self.callbacks[event_type].append(callback)

    def _trigger(self, event_type, file_path):
        for callback in self.callbacks[event_type]:
            try:
                callback(file_path)
            except Exception as e:
                print(f"Error in callback: {e}")

    def watch(self, poll_interval=1.0):
        print(f"Watching {self.watch_dir.resolve()}... (Press Ctrl+C to stop)")
        try:
            while True:
                self._scan()
                time.sleep(poll_interval)
        except KeyboardInterrupt:
            print("\nStopping watcher.")

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
        print(f"[{event.upper()}] - {path.name} at {time.ctime()}")
    return handler

if __name__ == "__main__":
    watch_folder = Path("watched_folder")
    watch_folder.mkdir(exist_ok=True)

    watcher = SimpleFileWatcher(watch_folder, patterns=["*.txt", "*.csv"])
    watcher.on('created', log_change('created'))
    watcher.on('modified', log_change('modified'))

    print("Watcher started. Try creating/editing files in 'watched_folder'.")
    watcher.watch()
```

## 9. 구성 파일 유연하게 관리

애플리케이션은 다양한 형식 (<router-link to="/cheatsheet/json-yaml#json">JSON</router-link>, <router-link to="/cheatsheet/json-yaml#yaml">YAML</router-link>, INI) 의 구성이 필요합니다. 이 `ConfigManager`는 `pathlib`을 사용하여 경로를 관리하고 안전하게 설정을 저장하기 위해 우리의 `atomic_write` 함수를 사용하여 다양한 형식을 우아하게 처리합니다.

**참고:** `PyYAML`이 필요합니다: `pip install pyyaml`

```python
import json
import yaml
import configparser
from pathlib import Path
from typing import Any, Dict

# 실제 프로젝트에서는 패턴 3 의 'atomic_write' 함수가 공유 utils.py 파일에 있을 것입니다.
# 여기서는 사용 가능하다고 가정합니다.

class ConfigManager:
    """다양한 형식으로 구성 파일을 로드하고 저장하기 위한 관리자입니다."""
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
                # 필요한 경우 INI 와 같은 다른 형식을 추가합니다.
        except Exception as e:
            raise IOError(f"Failed to load config {self.path}: {e}")
        return {}

    def save(self, config: Dict[str, Any]):
        content = ""
        try:
            if self.type == 'json':
                content = json.dumps(config, indent=2)
            elif self.type in ['yaml', 'yml']:
                content = yaml.dump(config, default_flow_style=False)
            # 안전한 쓰기 함수를 사용합니다.
            atomic_write(self.path, content)
        except Exception as e:
            raise IOError(f"Failed to save config {self.path}: {e}")

if __name__ == "__main__":
    json_config = ConfigManager("config.yml")
    settings = {
        "database": {"host": "db.example.com", "port": 5432},
        "features": {"new_ui": True, "beta_access": False}
    }
    print(f"Saving settings to {json_config.path}...")
    json_config.save(settings)

    loaded = json_config.load()
    print("Loaded settings:")
    print(yaml.dump(loaded))
    assert settings == loaded
```

## 10. 아카이브 (ZIP, TAR) 안전하게 처리하기

<router-link to="/modules/zipfile-module">.zip</router-link> 또는 <router-link to="/modules/zipfile-module">.tar.gz</router-link> 파일 작업은 일반적입니다. 이 `ArchiveManager`는 `pathlib`을 사용하여 경로 순회 공격을 방지하기 위한 중요한 확인을 포함하여 아카이브를 생성하고 추출하기 위한 간단하고 안전한 인터페이스를 제공합니다.

```python
import zipfile
import tarfile
from pathlib import Path

class ArchiveManager:
    """zip 및 tar 아카이브를 처리하기 위한 안전하고 간단한 인터페이스입니다."""

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
                        print(f"WARNING: Skipped unsafe path in zip: {member_name}")
        elif '.tar' in "".join(archive_path.suffixes):
            with tarfile.open(archive_path, 'r:*') as archive:
                for member in archive.getmembers():
                    if self._is_path_safe(member.name, extract_to):
                        archive.extract(member, path=extract_to, set_attrs=False)
                    else:
                        print(f"WARNING: Skipped unsafe path in tar: {member.name}")
        else:
            raise ValueError(f"Unsupported archive type: {archive_path.suffix}")
        print(f"Successfully extracted {archive_path.name} to {extract_to}")

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
            raise ValueError(f"Unsupported archive type: {output_path.suffix}")
        print(f"Successfully created archive {output_path}")

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

## 최종 생각

Python 의 `pathlib` 모듈을 사용하여 10 가지 강력하고 실용적인 파일 시스템 작업 패턴을 살펴보았습니다.

- **`pathlib` 수용:** 객체 지향 접근 방식은 이전의 문자열 기반 메서드보다 더 깔끔하고 안전하며 표현력이 풍부합니다. 모든 경로 조작에 기본 도구로 만드십시오.
- **안전 제일:** 항상 `is_relative_to`로 외부 입력을 검증하고, 중요한 파일은 원자적으로 작성하며, 아카이브는 안전하게 추출하십시오.
- **가독성이 중요합니다:** `pathlib` 코드는 종종 자체적으로 문서화됩니다. `Path` 객체에 대한 메서드 체인은 중첩된 <router-link to="/modules/os-module#linux-and-windows-paths">os.path.join</router-link> 호출보다 훨씬 따르기 쉽습니다.

이러한 패턴을 작업에 통합하면 코드가 훨씬 더 전문적일 뿐만 아니라 훨씬 더 강력하고 안전해집니다. 즐거운 코딩 되세요!
