---
title: Модуль Tempfile Python - Шпаргалка Python
description: Модуль `tempfile` безопасно создает временные файлы и каталоги.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Модуль Tempfile Python
</base-title>

Модуль `tempfile` безопасно создает временные файлы и каталоги.

```python
import tempfile
```

Используйте `tempfile` для данных, которые должны существовать только пока работает программа, например для результатов тестов, загрузок или промежуточных файлов.

## TemporaryFile()

`TemporaryFile` создает объект файла, который очищается автоматически.

```python
import tempfile

with tempfile.TemporaryFile(mode='w+t') as temp:
    temp.write('hello')
    temp.seek(0)
    print(temp.read())
```

```output
hello
```

Файл автоматически удаляется, когда блок `with` заканчивается.

## NamedTemporaryFile()

`NamedTemporaryFile` дает путь на диске.

```python
import tempfile

with tempfile.NamedTemporaryFile(mode='w+t') as temp:
    print(bool(temp.name))
```

```output
True
```

Это полезно, когда другому API нужен именно путь к файлу, а не объект файла.

## TemporaryDirectory()

Временные каталоги полезны для тестов и краткоживущих рабочих пространств.

```python
import tempfile
from pathlib import Path

with tempfile.TemporaryDirectory() as directory:
    file_path = Path(directory) / 'notes.txt'
    file_path.write_text('draft')
    print(file_path.exists())
```

```output
True
```

Файлы внутри каталога удаляются вместе с каталогом, когда блок заканчивается.

## Выбор временного расположения

`gettempdir()` показывает каталог, который Python использует по умолчанию.

```python
import tempfile

print(bool(tempfile.gettempdir()))
```

```output
True
```

## Ссылки по теме

- <router-link to="/modules/pathlib-module">Модуль: pathlib</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">Шпаргалка: чтение и запись файлов</router-link>
- <router-link to="/builtin/open">open()</router-link>
