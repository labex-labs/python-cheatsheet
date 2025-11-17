---
title: '開発者が知っておくべき 10 の必須ファイルシステム操作'
description: 'このガイドでは、Python における必須のファイルシステム操作について、例とベストプラクティスを交えて包括的に解説します。'
date: 'Aug 03, 2025'
updated: 'Aug 03, 2025'
tags: 'python, intermediate, file system'
socialImage: '/blog/path-lib-essentials.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "開発者が知っておくべき 10 の必須ファイルシステム操作"
    description: "このガイドでは、Python における必須のファイルシステム操作について、例とベストプラクティスを交えて包括的に解説します。"
    date: "Aug 03, 2025"
    updated: "Aug 03, 2025"
    tags: "python, intermediate, file system"
    socialImage: "/blog/path-lib-essentials.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="開発者が知っておくべき10の必須ファイルシステム操作" />

ファイルの操作とディレクトリの操作は Python 開発の基本ですが、多くの開発者は基本的な操作に留まり、Python のパス処理機能の全能力を探求することを怠りがちです。Web アプリケーション、データ処理パイプライン、自動化スクリプトのいずれを構築する場合でも、これらの必須のファイルシステムパターンを習得することで、コードはより堅牢で効率的、かつ保守しやすくなります。

## 1. Glob パターンによるスマートなファイル検索

正確な名前だけでなく、パターンに基づいてファイルを見つける必要があることがよくあります。 <router-link to="/modules/pathlib-module">Path</router-link> オブジェクトの `glob` メソッドは、これを行うための強力で直感的なツールです。

### 基本的および再帰的な検索

`src/` フォルダーにプロジェクトがあると仮定します。すべての Python ファイルを見つける方法は次のとおりです。

```python
from pathlib import Path

# Path オブジェクトは、ファイルシステム操作のための主要なツールです。
project_dir = Path("src/")

# 1. 'src' ディレクトリのトップレベルにあるすべての Python ファイルを見つけます。
# アスタリスク (*) は「何でも一致する」というワイルドカードです。
print("--- Top-level .py files ---")
for f in project_dir.glob("*.py"):
    print(f)

# 2. すべてのサブディレクトリを再帰的に検索し、すべての Python ファイルを見つけます。
# 'rglob' メソッドは、深い検索を行うための最良の相棒です。
print("\n--- All .py files in the project ---")
for f in project_dir.rglob("*.py"):
    print(f)

# 出力例：
# --- Top-level .py files ---
# src/main.py
# --- All .py files in the project ---
# src/main.py
# src/utils/helpers.py
# src/api/models.py
```

### 高度なパターンマッチング

`glob` は `*` だけでなく、それ以上のものをサポートします。シェルと同じように、`?` を使用して任意の 1 文字に一致させたり、`[]` を使用して文字の範囲に一致させたりできます。

```python
from pathlib import Path

# これを実行するには、例のファイルを含む 'logs' ディレクトリを作成します。
logs_dir = Path("logs/")
logs_dir.mkdir(exist_ok=True)
Path("logs/app1.log").touch()
Path("logs/app2.log").touch()
Path("logs/app_extra.log").touch()
Path("logs/2023-10-01.log").touch()
Path("logs/2023-11-01.log").touch()


# 'app1.log'、'app2.log' のようなログを見つけますが、'app_extra.log' は除外します
print("--- Single character wildcard ---")
for f in logs_dir.glob("app?.log"):
    print(f)

# 2023 年 10 月または 11 月のログを見つけます
print("\n--- Character range ---")
for f in logs_dir.glob("2023-[10-11]*.log"):
    print(f)

# 出力例：
# --- Single character wildcard ---
# logs/app1.log
# logs/app2.log
#
# --- Character range ---
# logs/2023-10-01.log
# logs/2023-11-01.log
```

## 2. ディレクトリを正確にナビゲートする

`rglob` が提供するものよりも特定の制御が必要な場合があります。たとえば、特定のディレクトリをスキップしたい場合などです。<router-link to="/modules/os-module#walking-a-directory-tree">os.walk</router-link> に戻る代わりに、`pathlib` 独自のメソッドを使用して、クリーンで再帰的な関数を作成できます。

```python
from pathlib import Path

def smart_directory_walk(root_path, skip_dirs=None, file_patterns=None):
    """
    pathlib を使用してディレクトリツリーをウォークし、特定のパターンに
    一致するファイルのみを返すために、サブツリー全体をスキップできるようにします。
    """
    if skip_dirs is None:
        # セットは高速なルックアップに使用されます。
        skip_dirs = {'.git', '__pycache__', 'node_modules', '.venv'}
    if file_patterns is None:
        file_patterns = ["*"]

    root = Path(root_path)
    for item in root.iterdir():
        # アイテムがディレクトリの場合、それを再帰的に探索するかどうかを決定します。
        if item.is_dir() and item.name not in skip_dirs:
            # yield from は、再帰呼び出しからの結果を渡すためのクリーンな方法です。
            yield from smart_directory_walk(item, skip_dirs, file_patterns)
        # それがファイルの場合、パターンに一致するかどうかを確認します。
        elif item.is_file():
            if any(item.match(p) for p in file_patterns):
                yield item

if __name__ == "__main__":
    print("標準の仮想環境をスキップして、Python およびテキストファイルを検索しています：")
    # これを実行するには、いくつかのダミーファイルとフォルダーを作成します。
    project_root = Path(".")
    (project_root / "src").mkdir(exist_ok=True)
    (project_root / "src" / "main.py").touch()
    (project_root / ".venv").mkdir(exist_ok=True)
    (project_root / ".venv" / "ignored.py").touch()

    for f in smart_directory_walk(project_root, file_patterns=["*.py", "*.txt"]):
        print(f"Found: {f}")
```

## 3. データの安全性を確保するためのアトミックなファイル書き込み

<router-link to="/cheatsheet/json-yaml#json">config.json</router-link> の書き込み途中でスクリプトがクラッシュしたらどうなるでしょうか？ファイルが破損します。**アトミック操作**はこれを防ぎます。これは全か無かの操作です。標準的な方法は、一時ファイルに書き込み、その後、単一のアトミックな `move` 操作を実行することです。

```python
import tempfile
import shutil
import os
from pathlib import Path

def atomic_write(file_path, content, encoding='utf-8'):
    """
    データ破損を防ぐために、ファイルをアトミックに書き込みます。
    """
    target_path = Path(file_path)
    target_path.parent.mkdir(parents=True, exist_ok=True)

    # 最終的なファイルと同じディレクトリ内に一時ファイルを作成します。
    # これは、同じファイルシステム上でファイルを移動することがアトミックであるため、重要です。
    with tempfile.NamedTemporaryFile(
        mode='w',
        encoding=encoding,
        dir=target_path.parent,
        delete=False,
        suffix='.tmp'
    ) as tmp_file:
        tmp_file.write(content)
        # 重要なデータの場合、os.fsync() はデータが物理的にディスクに書き込まれることを保証します。
        # これは、低レベルの制御のために os モジュールがまだ必要な数少ないケースの 1 つです。
        tmp_file.flush()
        os.fsync(tmp_file.fileno())
        temp_path = tmp_file.name

    # アトミック操作：一時ファイルを最終的な宛先に名前変更します。
    # shutil.move は賢く、異なるファイルシステム間でも機能します。
    shutil.move(temp_path, target_path)
    print(f"Atomically wrote to {target_path}")

if __name__ == "__main__":
    # これは 'config/settings.json' を安全に作成します。
    atomic_write("config/settings.json", '{"theme": "dark", "retries": 3}')
```

## 4. 一時ファイルとディレクトリの管理

一時ファイルは中間処理に不可欠です。Python の `tempfile` モジュールは `pathlib` と美しく統合されており、安全なファイルとディレクトリを作成し、それらが自動的にクリーンアップされます。

```python
import tempfile
import json
from pathlib import Path

# ダミー関数で作業をシミュレートします
def process_file(file_path):
    print(f"Processing {file_path}...")
    return f"processed_{file_path.name}"

def batch_process_data(list_of_data):
    """
    一時ディレクトリを使用してデータバッチを処理し、
    すべての途中ファイルが自動的にクリーンアップされるようにします。
    """
    # TemporaryDirectory は、'with' ブロックが終了すると削除されるディレクトリを作成します。
    with tempfile.TemporaryDirectory() as tmp_dir_str:
        tmp_dir = Path(tmp_dir_str)
        print(f"Created temporary directory: {tmp_dir}")
        results = []

        for i, data_item in enumerate(list_of_data):
            # 一時ディレクトリ内に一時的な Path オブジェクトを作成します
            temp_file = tmp_dir / f"input_{i}.json"
            temp_file.write_text(json.dumps(data_item))

            result = process_file(temp_file)
            results.append(result)

        # ここで 'tmp_dir' とそのすべてのコンテンツは自動的に削除されます。
        return results

if __name__ == "__main__":
    data_to_process = [{"id": 1, "value": "A"}, {"id": 2, "value": "B"}]
    final_results = batch_process_data(data_to_process)
    print(f"\nFinal results: {final_results}")
    print("Temporary directory has been removed.")
```

## 5. ユーザー提供のパスの検証とサニタイズ

外部ソースから提供されたパスを決して信用しないでください。悪意のあるユーザーは、機密ファイルを読み取ろうとして `../../etc/passwd` を提供する可能性があります。`pathlib` の組み込みセキュリティ機能を使用して、すべての外部パス入力を検証およびサニタイズする必要があります。

```python
import re
from pathlib import Path

def sanitize_filename(filename, replacement='_'):
    """
    任意の OS で有効で安全なファイル名になるように文字列をクリーンアップします。
    """
    invalid_chars = r'[<>:"/\\|?*\x00-\x1f]'
    sanitized = re.sub(invalid_chars, replacement, filename)
    # 追加のチェックをここに追加できます（例：Windows の予約名用）
    return sanitized.strip(' .')

def validate_and_resolve_path(base_dir, user_path_str):
    """
    ユーザー提供のパスを安全に解決し、それが基本ディレクトリ内に留まることを保証します。
    これは、ディレクトリトラバーサル攻撃を防ぐために非常に重要です。
    """
    base_dir = Path(base_dir).resolve()

    # resolve() は、'..' セグメントをクリーンアップする正規の絶対パスを作成します。
    resolved_path = (base_dir / user_path_str).resolve()

    # 重要なセキュリティチェック：最終的なパスはまだ安全な base_dir の中にあるか？
    # Path.is_relative_to() は Python 3.9 で追加され、これに最適です。
    if resolved_path.is_relative_to(base_dir):
        return resolved_path
    else:
        raise PermissionError("Path traversal attempt detected.")

if __name__ == "__main__":
    # 1. 潜在的に厄介なファイル名をサニタイズします
    dirty_name = "My Report: Part 1/2 <Final?>.docx"
    clean_name = sanitize_filename(dirty_name)
    print(f"Sanitized '{dirty_name}' to '{clean_name}'")

    # 2. ユーザーパスを検証します
    upload_dir = "uploads"
    Path(upload_dir).mkdir(exist_ok=True)
    try:
        # 安全なパス
        safe_path = validate_and_resolve_path(upload_dir, "images/profile.jpg")
        print(f"OK: Path is safe: {safe_path}")

        # 悪意のあるパス
        malicious_path_str = "../../../etc/hosts"
        print(f"\nTesting malicious path: '{malicious_path_str}'")
        validate_and_resolve_path(upload_dir, malicious_path_str)
    except PermissionError as e:
        print(f"ERROR: {e}")
```

## 6. `pathlib` を使用したディレクトリサイズの計算

ディレクトリサイズの計算は古典的なタスクです。`os.scandir` が高速で知られていますが、大規模なファイルシステムでのパフォーマンスが最も重要なアプリケーションを除けば、純粋な `pathlib` アプローチ（`rglob` を使用）の方が可読性が高く便利であることがよくあります。

```python
from pathlib import Path

def calculate_directory_size(directory):
    """
    読みやすい純粋な pathlib アプローチを使用して、ディレクトリとそのすべての
    サブディレクトリの合計サイズを計算します。
    """
    dir_path = Path(directory)
    total_size = 0
    # rglob('*') はジェネレーターであるため、すべてのパスを一度にメモリにロードしません。
    for path in dir_path.rglob('*'):
        # ファイルのサイズのみを合計します。
        if path.is_file():
            try:
                # path.stat().st_size はバイト単位のサイズを提供します。
                total_size += path.stat().st_size
            except (PermissionError, FileNotFoundError):
                # アクセスできないファイルは無視します。
                continue
    return total_size

def format_size(size_bytes):
    """バイトを人間が読める文字列 (KB、MB、GB) にフォーマットします。"""
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

## 7. 進捗状況と検証を伴う大容量ファイルのコピー

大容量ファイルをコピーする場合、ユーザーに進捗状況を提供し、コピーされたファイルが破損していないことを確認したいと考えます。このパターンは、`shutil` をコピーに使用し、`hashlib` をデータ整合性のために使用し、`tqdm` ライブラリを美しいプログレスバーのために組み合わせます。

**注意：** `tqdm` をインストールする必要があります：`pip install tqdm`

```python
import shutil
import hashlib
import os
from pathlib import Path
from tqdm import tqdm

def calculate_file_hash(file_path, algorithm='sha256', chunk_size=65536):
    """ファイルのハッシュを計算します。"""
    hash_obj = hashlib.new(algorithm)
    with Path(file_path).open('rb') as f:
        for chunk in iter(lambda: f.read(chunk_size), b""):
            hash_obj.update(chunk)
    return hash_obj.hexdigest()

def copy_with_verification(src, dst):
    """
    プログレスバー付きでファイルをコピーし、コピーの整合性を検証します。
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
        # copyfileobj が終了する前に tqdm が更新を完了した場合に備えてプログレスバーを手動で更新します
        pbar.n = src_size
        pbar.refresh()


    print("Verifying copy...")
    dst_hash = calculate_file_hash(dst_path)

    if src_hash != dst_hash:
        dst_path.unlink() # 破損したコピーを削除します
        raise IOError(f"Verification failed! Hashes do not match for {dst_path}")

    print(f"Success! {dst_path.name} copied and verified.")
    return dst_path

if __name__ == "__main__":
    source_file = Path("large_file.dat")
    if not source_file.exists():
        print(f"Creating dummy file '{source_file}'...")
        # os.urandom は、ここではダミーファイルのためにランダムなバイトを取得するためだけに使用されます。
        source_file.write_bytes(os.urandom(50 * 1024 * 1024)) # 50 MB

    try:
        copy_with_verification(source_file, Path("backup/large_file.dat"))
    except (IOError, FileNotFoundError) as e:
        print(f"An error occurred: {e}")
```

## 8. ディレクトリの変更を監視する

ドロップされたファイルを自動的に処理したいですか？ファイルシステムウォッチャーが必要です。本番環境では `watchdog` のようなライブラリが最適ですが、`pathlib` とポーリングを使用して独自の簡単なウォッチャーを構築する方法を知っておくと便利です。

```python
import time
from pathlib import Path
from collections import defaultdict

class SimpleFileWatcher:
    """変更のためにディレクトリをポーリングする基本的なファイルウォッチャー。"""
    def __init__(self, watch_directory, patterns=None):
        self.watch_dir = Path(watch_directory)
        self.patterns = patterns or ["*"]
        self._file_states = {} # {path: mtime} を格納します
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

## 9. 構成ファイルを柔軟に管理する

アプリケーションは、さまざまな形式（<router-link to="/cheatsheet/json-yaml#json">JSON</router-link>、<router-link to="/cheatsheet/json-yaml#yaml">YAML</router-link>、INI）の構成を必要とします。この `ConfigManager` は、`pathlib` を使用してパスを管理し、設定を安全に保存するために `atomic_write` 関数を使用することで、さまざまな形式を優雅に処理します。

**注意：** `PyYAML` が必要です：`pip install pyyaml`

```python
import json
import yaml
import configparser
from pathlib import Path
from typing import Any, Dict

# 実際のプロジェクトでは、パターン 3 の 'atomic_write' 関数は shared utils.py に配置されます。
# ここでは利用可能であると仮定します。

class ConfigManager:
    """さまざまな形式で構成ファイルをロードおよび保存するためのマネージャー。"""
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
                # 必要に応じて INI などの他の形式を追加します
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
            # 安全な書き込み関数を使用します
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

## 10. アーカイブ (ZIP、TAR) の安全な処理

<router-link to="/modules/zipfile-module">.zip</router-link> または <router-link to="/modules/zipfile-module">.tar.gz</router-link> ファイルの操作は一般的です。この `ArchiveManager` は `pathlib` を使用して、パストラバーサル攻撃を防ぐための重要なチェックを含む、アーカイブの作成と抽出のためのシンプルで安全なインターフェイスを提供します。

```python
import zipfile
import tarfile
from pathlib import Path

class ArchiveManager:
    """zip および tar アーカイブを処理するための安全でシンプルなインターフェイス。"""

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

## 最終的な考察

Python の `pathlib` モジュールを使用したファイルシステム操作のための 10 の強力で実用的なパターンを探りました。

- **`pathlib` を採用する：** そのオブジェクト指向のアプローチは、古い文字列ベースの方法よりもクリーンで安全、かつ表現力豊かです。すべてのパス操作でデフォルトのツールにしてください。
- **安全性第一:** 外部入力を `is_relative_to` で常に検証し、重要なファイルをアトミックに書き込み、アーカイブを安全に抽出します。
- **可読性が重要：** `pathlib` のコードは自己文書化されていることがよくあります。`Path` オブジェクト上のメソッドの連鎖は、入れ子になった <router-link to="/modules/os-module#linux-and-windows-paths">os.path.join</router-link> の呼び出しよりも追跡がはるかに簡単です。

これらのパターンを作業に取り入れることで、プロフェッショナルであるだけでなく、大幅に堅牢で安全な Python コードを書くことができます。ハッピーコーディングを！
