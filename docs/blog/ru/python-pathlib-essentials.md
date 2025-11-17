---
title: '10 Основных Операций с Файловой Системой, Которые Должен Знать Каждый Разработчик'
description: 'Это руководство предлагает всесторонний обзор основных операций с файловой системой в Python, включая примеры и лучшие практики.'
date: 'Aug 03, 2025'
updated: 'Aug 03, 2025'
tags: 'python, intermediate, file system'
socialImage: '/blog/path-lib-essentials.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "10 Основных Операций с Файловой Системой, Которые Должен Знать Каждый Разработчик"
    description: "Это руководство предлагает всесторонний обзор основных операций с файловой системой в Python, включая примеры и лучшие практики."
    date: "Aug 03, 2025"
    updated: "Aug 03, 2025"
    tags: "python, intermediate, file system"
    socialImage: "/blog/path-lib-essentials.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="10 Основных Операций с Файловой Системой, Которые Должен Знать Каждый Разработчик" />

Работа с файлами и каталогами является фундаментальной частью разработки на Python, однако многие разработчики ограничиваются базовыми операциями, не изучая всю мощь возможностей Python по работе с путями. Независимо от того, создаете ли вы веб-приложения, конвейеры обработки данных или сценарии автоматизации, овладение этими основными шаблонами файловой системы сделает ваш код более надежным, эффективным и удобным для сопровождения.

## 1. Интеллектуальный поиск файлов с помощью шаблонов Glob

Часто вам нужно найти файлы по шаблону, а не только по точному имени. Метод `glob` объекта <router-link to="/modules/pathlib-module">Path</router-link> — это мощный и интуитивно понятный инструмент для этой задачи.

### Базовый и рекурсивный поиск

Предположим, у вас есть проект в папке `src/`. Вот как найти все ваши файлы Python.

```python
from pathlib import Path

# Объект Path — ваш основной инструмент для операций с файловой системой.
project_dir = Path("src/")

# 1. Найти все файлы Python на верхнем уровне каталога 'src'.
# Звездочка (*) — это подстановочный знак, означающий "сопоставить что угодно".
print("--- Файлы .py на верхнем уровне ---")
for f in project_dir.glob("*.py"):
    print(f)

# 2. Найти все файлы Python РЕКУРСИВНО во всех подкаталогах.
# Метод 'rglob' — ваш лучший друг для глубокого поиска.
print("\n--- Все файлы .py в проекте ---")
for f in project_dir.rglob("*.py"):
    print(f)

# Пример вывода:
# --- Файлы .py на верхнем уровне ---
# src/main.py
# --- Все файлы .py в проекте ---
# src/main.py
# src/utils/helpers.py
# src/api/models.py
```

### Расширенное сопоставление шаблонов

`glob` поддерживает не только `*`. Вы можете использовать `?` для сопоставления любого одного символа и `[]` для сопоставления диапазона символов, как в командной оболочке.

```python
from pathlib import Path

# Чтобы запустить это, создайте каталог 'logs' с примерами файлов.
logs_dir = Path("logs/")
logs_dir.mkdir(exist_ok=True)
Path("logs/app1.log").touch()
Path("logs/app2.log").touch()
Path("logs/app_extra.log").touch()
Path("logs/2023-10-01.log").touch()
Path("logs/2023-11-01.log").touch()


# Найти логи вида 'app1.log', 'app2.log', но не 'app_extra.log'
print("--- Подстановочный знак одного символа ---")
for f in logs_dir.glob("app?.log"):
    print(f)

# Найти логи за октябрь или ноябрь 2023 года
print("\n--- Диапазон символов ---")
for f in logs_dir.glob("2023-[10-11]-*.log"):
    print(f)

# Пример вывода:
# --- Подстановочный знак одного символа ---
# logs/app1.log
# logs/app2.log
#
# --- Диапазон символов ---
# logs/2023-10-01.log
# logs/2023-11-01.log
```

## 2. Точная навигация по каталогам

Иногда вам нужен больший контроль, чем предлагает `rglob`, например, когда необходимо пропустить определенные каталоги. Вместо того чтобы возвращаться к <router-link to="/modules/os-module#walking-a-directory-tree">os.walk</router-link>, вы можете написать чистую рекурсивную функцию, используя собственные методы `pathlib`.

```python
from pathlib import Path

def smart_directory_walk(root_path, skip_dirs=None, file_patterns=None):
    """
    Обход дерева каталогов с использованием pathlib, позволяющий пропускать целые
    поддеревья и выдавать только файлы, соответствующие определенным шаблонам.
    """
    if skip_dirs is None:
        # Множество (set) используется для быстрого поиска.
        skip_dirs = {'.git', '__pycache__', 'node_modules', '.venv'}
    if file_patterns is None:
        file_patterns = ["*"]

    root = Path(root_path)
    for item in root.iterdir():
        # Если элемент является каталогом, решите, рекурсивно ли в него входить.
        if item.is_dir() and item.name not in skip_dirs:
            # yield from — это чистый способ передать результаты рекурсивного вызова.
            yield from smart_directory_walk(item, skip_dirs, file_patterns)
        # Если это файл, проверьте, соответствует ли он нашим шаблонам.
        elif item.is_file():
            if any(item.match(p) for p in file_patterns):
                yield item

if __name__ == "__main__":
    print("Поиск файлов Python и текстовых файлов с пропуском стандартных виртуальных сред:")
    # Для запуска этого кода создайте фиктивные файлы и папки.
    project_root = Path(".")
    (project_root / "src").mkdir(exist_ok=True)
    (project_root / "src" / "main.py").touch()
    (project_root / ".venv").mkdir(exist_ok=True)
    (project_root / ".venv" / "ignored.py").touch()

    for f in smart_directory_walk(project_root, file_patterns=["*.py", "*.txt"]):
        print(f"Найдено: {f}")
```

## 3. Атомарная запись файлов для безопасности данных

Что произойдет, если ваш скрипт аварийно завершит работу на полпути записи <router-link to="/cheatsheet/json-yaml#json">config.json</router-link>? Вы получите поврежденный файл. **Атомарная операция** предотвращает это: это действие "всё или ничего". Стандартный способ сделать это — записать данные во временный файл, а затем выполнить одну атомарную операцию `move`.

```python
import tempfile
import shutil
import os
from pathlib import Path

def atomic_write(file_path, content, encoding='utf-8'):
    """
    Записывает содержимое в файл атомарно, чтобы предотвратить повреждение данных.
    """
    target_path = Path(file_path)
    target_path.parent.mkdir(parents=True, exist_ok=True)

    # Создаем временный файл в том же каталоге, что и конечный файл.
    # Это критически важно, поскольку перемещение файла в пределах одной файловой системы является атомарным.
    with tempfile.NamedTemporaryFile(
        mode='w',
        encoding=encoding,
        dir=target_path.parent,
        delete=False,
        suffix='.tmp'
    ) as tmp_file:
        tmp_file.write(content)
        # Для критически важных данных os.fsync() гарантирует, что данные физически записаны
        # на диск. Это один из немногих случаев, когда модуль os
        # все еще необходим для низкоуровневого контроля.
        tmp_file.flush()
        os.fsync(tmp_file.fileno())
        temp_path = tmp_file.name

    # Атомарная операция: переименовать временный файл в конечное место назначения.
    # shutil.move умен и работает в разных файловых системах.
    shutil.move(temp_path, target_path)
    print(f"Атомарно записано в {target_path}")

if __name__ == "__main__":
    # Это безопасно создаст "config/settings.json".
    atomic_write("config/settings.json", '{"theme": "dark", "retries": 3}')
```

## 4. Освоение временных файлов и каталогов

Временные файлы необходимы для промежуточной обработки. Модуль Python `tempfile` прекрасно интегрируется с `pathlib`, создавая безопасные файлы и каталоги, которые автоматически очищаются.

```python
import tempfile
import json
from pathlib import Path

# Фиктивная функция для имитации работы
def process_file(file_path):
    print(f"Обработка {file_path}...")
    return f"processed_{file_path.name}"

def batch_process_data(list_of_data):
    """
    Использует временный каталог для обработки пакета данных, гарантируя,
    что все промежуточные файлы будут автоматически удалены.
    """
    # TemporaryDirectory создает каталог, который удаляется при выходе из блока 'with'.
    with tempfile.TemporaryDirectory() as tmp_dir_str:
        tmp_dir = Path(tmp_dir_str)
        print(f"Создан временный каталог: {tmp_dir}")
        results = []

        for i, data_item in enumerate(list_of_data):
            # Создаем временный объект Path внутри нашего временного каталога
            temp_file = tmp_dir / f"input_{i}.json"
            temp_file.write_text(json.dumps(data_item))

            result = process_file(temp_file)
            results.append(result)

        # 'tmp_dir' и все его содержимое автоматически удаляются здесь.
        return results

if __name__ == "__main__":
    data_to_process = [{"id": 1, "value": "A"}, {"id": 2, "value": "B"}]
    final_results = batch_process_data(data_to_process)
    print(f"\nКонечные результаты: {final_results}")
    print("Временный каталог удален.")
```

## 5. Проверка и очистка путей, предоставленных пользователем

Никогда не доверяйте пути из внешнего источника. Злоумышленник может предоставить `../../etc/passwd`, пытаясь прочитать конфиденциальные файлы. Вы должны проверять и очищать любые внешние входные данные пути, используя встроенные функции безопасности `pathlib`.

```python
import re
from pathlib import Path

def sanitize_filename(filename, replacement='_'):
    """
    Очищает строку, чтобы она стала допустимым и безопасным именем файла для любой ОС.
    """
    invalid_chars = r'[<>:"/\\|?*\x00-\x1f]'
    sanitized = re.sub(invalid_chars, replacement, filename)
    # Дополнительные проверки могут быть добавлены здесь (например, для зарезервированных имен Windows)
    return sanitized.strip(' .')

def validate_and_resolve_path(base_dir, user_path_str):
    """
    Безопасно разрешает путь, предоставленный пользователем, гарантируя,
    что он остается в пределах базового каталога.
    Это КРИТИЧЕСКИ ВАЖНО для предотвращения атак обхода каталогов.
    """
    base_dir = Path(base_dir).resolve()

    # resolve() создает канонический, абсолютный путь, очищая сегменты '..'.
    resolved_path = (base_dir / user_path_str).resolve()

    # Ключевая проверка безопасности: остается ли конечный путь внутри нашего безопасного base_dir?
    # Path.is_relative_to() был добавлен в Python 3.9 и идеально подходит для этого.
    if resolved_path.is_relative_to(base_dir):
        return resolved_path
    else:
        raise PermissionError("Обнаружена попытка обхода пути.")

if __name__ == "__main__":
    # 1. Очистка потенциально грязного имени файла
    dirty_name = "My Report: Part 1/2 <Final?>.docx"
    clean_name = sanitize_filename(dirty_name)
    print(f"Очищено '{dirty_name}' в '{clean_name}'")

    # 2. Проверка пути пользователя
    upload_dir = "uploads"
    Path(upload_dir).mkdir(exist_ok=True)
    try:
        # Безопасный путь
        safe_path = validate_and_resolve_path(upload_dir, "images/profile.jpg")
        print(f"ОК: Путь безопасен: {safe_path}")

        # Вредоносный путь
        malicious_path_str = "../../../etc/hosts"
        print(f"\nТестирование вредоносного пути: '{malicious_path_str}'")
        validate_and_resolve_path(upload_dir, malicious_path_str)
    except PermissionError as e:
        print(f"ОШИБКА: {e}")
```

## 6. Расчет размера каталога с помощью `pathlib`

Расчет размера каталога — классическая задача. Хотя `os.scandir` известен своей скоростью, чистый подход `pathlib` с использованием `rglob` часто более читабелен и удобен для всех, кроме самых критичных с точки зрения производительности приложений на огромных файловых системах.

```python
from pathlib import Path

def calculate_directory_size(directory):
    """
    Рассчитывает общий размер каталога и всех его подкаталогов
    с помощью читаемого подхода, использующего только pathlib.
    """
    dir_path = Path(directory)
    total_size = 0
    # rglob('*') — это генератор, поэтому он не загружает все пути в память сразу.
    for path in dir_path.rglob('*'):
        # Мы суммируем только размер файлов.
        if path.is_file():
            try:
                # path.stat().st_size дает размер в байтах.
                total_size += path.stat().st_size
            except (PermissionError, FileNotFoundError):
                # Игнорируем файлы, к которым у нас нет доступа.
                continue
    return total_size

def format_size(size_bytes):
    """Форматирует байты в удобочитаемую строку (КБ, МБ, ГБ)."""
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
    print(f"Расчет размера '{Path(target_directory).resolve()}'...")
    total_bytes = calculate_directory_size(target_directory)
    print(f"Общий размер: {format_size(total_bytes)} ({total_bytes:,} байт)")
```

## 7. Копирование больших файлов с прогрессом и проверкой

При копировании больших файлов вы хотите предоставить пользователю обратную связь и убедиться, что скопированный файл не поврежден. Этот шаблон сочетает `shutil` для копирования, `hashlib` для целостности данных и библиотеку `tqdm` для красивой панели прогресса.

**Примечание:** Вам нужно установить `tqdm`: `pip install tqdm`

```python
import shutil
import hashlib
import os
from pathlib import Path
from tqdm import tqdm

def calculate_file_hash(file_path, algorithm='sha256', chunk_size=65536):
    """Вычисляет хеш файла."""
    hash_obj = hashlib.new(algorithm)
    with Path(file_path).open('rb') as f:
        for chunk in iter(lambda: f.read(chunk_size), b""):
            hash_obj.update(chunk)
    return hash_obj.hexdigest()

def copy_with_verification(src, dst):
    """
    Копирует файл с индикатором прогресса и проверяет целостность копии.
    """
    src_path, dst_path = Path(src), Path(dst)
    dst_path.parent.mkdir(parents=True, exist_ok=True)

    src_size = src_path.stat().st_size
    print(f"Вычисление хеша для {src_path.name}...")
    src_hash = calculate_file_hash(src_path)

    print(f"Копирование {src_path.name} в {dst_path}...")
    with src_path.open('rb') as fsrc, \
         dst_path.open('wb') as fdst, \
         tqdm(total=src_size, unit='B', unit_scale=True, desc=src_path.name) as pbar: \
        shutil.copyfileobj(fsrc, fdst, length=16*1024*1024)
        # Вручную обновите панель прогресса, если copyfileobj завершился до обновления tqdm
        pbar.n = src_size
        pbar.refresh()


    print("Проверка копии...")
    dst_hash = calculate_file_hash(dst_path)

    if src_hash != dst_hash:
        dst_path.unlink() # Удалить поврежденную копию
        raise IOError(f"Ошибка проверки! Хеши не совпадают для {dst_path}")

    print(f"Успех! {dst_path.name} скопирован и проверен.")
    return dst_path

if __name__ == "__main__":
    source_file = Path("large_file.dat")
    if not source_file.exists():
        print(f"Создание фиктивного файла '{source_file}'...")
        # os.urandom используется здесь просто для получения случайных байтов для фиктивного файла.
        source_file.write_bytes(os.urandom(50 * 1024 * 1024)) # 50 МБ

    try:
        copy_with_verification(source_file, Path("backup/large_file.dat"))
    except (IOError, FileNotFoundError) as e:
        print(f"Произошла ошибка: {e}")
```

## 8. Мониторинг каталога на предмет изменений

Хотите автоматически обрабатывать файлы, помещенные в папку? Вам нужен файловый наблюдатель. Хотя библиотеки вроде `watchdog` лучше всего подходят для продакшена, полезно знать, как создать простой собственный наблюдатель, используя `pathlib` и опрос.

```python
import time
from pathlib import Path
from collections import defaultdict

class SimpleFileWatcher:
    """Простой наблюдатель файлов, который опрашивает каталог на предмет изменений."""
    def __init__(self, watch_directory, patterns=None):
        self.watch_dir = Path(watch_directory)
        self.patterns = patterns or ["*"]
        self._file_states = {} # Хранит {путь: время_изменения}
        self.callbacks = defaultdict(list)

    def on(self, event_type, callback):
        self.callbacks[event_type].append(callback)

    def _trigger(self, event_type, file_path):
        for callback in self.callbacks[event_type]:
            try:
                callback(file_path)
            except Exception as e:
                print(f"Ошибка в обратном вызове: {e}")

    def watch(self, poll_interval=1.0):
        print(f"Наблюдение за {self.watch_dir.resolve()}... (Нажмите Ctrl+C для остановки)")
        try:
            while True:
                self._scan()
                time.sleep(poll_interval)
        except KeyboardInterrupt:
            print("\nОстановка наблюдателя.")

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
        print(f"[{event.upper()}] - {path.name} в {time.ctime()}")
    return handler

if __name__ == "__main__":
    watch_folder = Path("watched_folder")
    watch_folder.mkdir(exist_ok=True)

    watcher = SimpleFileWatcher(watch_folder, patterns=["*.txt", "*.csv"])
    watcher.on('created', log_change('created'))
    watcher.on('modified', log_change('modified'))

    print("Наблюдатель запущен. Попробуйте создать/изменить файлы в 'watched_folder'.")
    watcher.watch()
```

## 9. Гибкое управление конфигурационными файлами

Приложениям требуется конфигурация из файлов (<router-link to="/cheatsheet/json-yaml#json">JSON</router-link>, <router-link to="/cheatsheet/json-yaml#yaml">YAML</router-link>, INI). Этот `ConfigManager` корректно обрабатывает различные форматы, используя `pathlib` для управления путями и нашу функцию `atomic_write` для безопасного сохранения настроек.

**Примечание:** Вам понадобится `PyYAML`: `pip install pyyaml`

```python
import json
import yaml
import configparser
from pathlib import Path
from typing import Any, Dict

# В реальном проекте функция 'atomic_write' из Шаблона 3 находилась бы в общем файле utils.py.
# Мы предполагаем, что она здесь доступна.

class ConfigManager:
    """Менеджер для загрузки и сохранения конфигурационных файлов в различных форматах."""
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
                # Добавьте другие форматы, такие как INI, если это необходимо
        except Exception as e:
            raise IOError(f"Не удалось загрузить конфигурацию {self.path}: {e}")
        return {}

    def save(self, config: Dict[str, Any]):
        content = ""
        try:
            if self.type == 'json':
                content = json.dumps(config, indent=2)
            elif self.type in ['yaml', 'yml']:
                content = yaml.dump(config, default_flow_style=False)
            # Используем нашу безопасную функцию записи
            atomic_write(self.path, content)
        except Exception as e:
            raise IOError(f"Не удалось сохранить конфигурацию {self.path}: {e}")

if __name__ == "__main__":
    json_config = ConfigManager("config.yml")
    settings = {
        "database": {"host": "db.example.com", "port": 5432},
        "features": {"new_ui": True, "beta_access": False}
    }
    print(f"Сохранение настроек в {json_config.path}...")
    json_config.save(settings)

    loaded = json_config.load()
    print("Загруженные настройки:")
    print(yaml.dump(loaded))
    assert settings == loaded
```

## 10. Безопасное управление архивами (ZIP, TAR)

Работа с файлами <router-link to="/modules/zipfile-module">.zip</router-link> или <router-link to="/modules/zipfile-module">.tar.gz</router-link> распространена. Этот `ArchiveManager` использует `pathlib` для предоставления простого, безопасного интерфейса для создания и извлечения архивов, включая важные проверки для предотвращения атак обхода путей.

```python
import zipfile
import tarfile
from pathlib import Path

class ArchiveManager:
    """Безопасный и простой интерфейс для работы с архивами zip и tar."""

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
                        print(f"ПРЕДУПРЕЖДЕНИЕ: Пропущен небезопасный путь в zip: {member_name}")
        elif '.tar' in "".join(archive_path.suffixes):
            with tarfile.open(archive_path, 'r:*') as archive:
                for member in archive.getmembers():
                    if self._is_path_safe(member.name, extract_to):
                        archive.extract(member, path=extract_to, set_attrs=False)
                    else:
                        print(f"ПРЕДУПРЕЖДЕНИЕ: Пропущен небезопасный путь в tar: {member.name}")
        else:
            raise ValueError(f"Неподдерживаемый тип архива: {archive_path.suffix}")
        print(f"Успешно извлечено {archive_path.name} в {extract_to}")

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
            raise ValueError(f"Неподдерживаемый тип архива: {output_path.suffix}")
        print(f"Успешно создан архив {output_path}")

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

## Заключительные мысли

Вы только что изучили десять мощных, практических шаблонов для операций с файловой системой с использованием модуля Python `pathlib`.

- **Принимайте `pathlib`:** Его объектно-ориентированный подход чище, безопаснее и выразительнее, чем старые строковые методы. Сделайте его своим инструментом по умолчанию для всех манипуляций с путями.
- **Безопасность прежде всего:** Всегда проверяйте внешние входные данные с помощью `is_relative_to`, записывайте критически важные файлы атомарно и извлекайте архивы безопасно.
- **Важна читаемость:** Код `pathlib` часто самодокументируется. Цепочка методов объекта `Path` гораздо легче отслеживается, чем серия вложенных вызовов <router-link to="/modules/os-module#linux-and-windows-paths">os.path.join</router-link>.

Включив эти шаблоны в свою работу, вы будете писать код на Python, который не только более профессионален, но и значительно более надежен и безопасен. Удачного кодирования!
