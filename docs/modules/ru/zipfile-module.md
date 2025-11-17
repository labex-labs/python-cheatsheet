---
title: 'Модуль Python Zipfile - Шпаргалка по Python'
description: 'Этот модуль предоставляет инструменты для создания, чтения, записи, добавления и просмотра содержимого ZIP-архива.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Модуль Python Zipfile
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/zipfile.html">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Этот модуль предоставляет инструменты для создания, чтения, записи, добавления и перечисления содержимого ZIP-файла.
  </base-disclaimer-content>
</base-disclaimer>

## Чтение ZIP-файлов

```python
import zipfile

# Открыть ZIP-файл и прочитать его содержимое
with zipfile.ZipFile('example.zip') as example_zip:
    # Вывести список всех файлов и каталогов в ZIP
    print(example_zip.namelist())
    # Получить метаданные для конкретного файла
    spam_info = example_zip.getinfo('spam.txt')
    # Вывести исходный размер файла
    print(spam_info.file_size)
    # Вывести сжатый размер файла
    print(spam_info.compress_size)
    # Рассчитать коэффициент сжатия
    print('Compressed file is %sx smaller!' % (round(spam_info.file_size / spam_info.compress_size, 2)))
```

Вывод:

```plaintext
['spam.txt', 'cats/', 'cats/catnames.txt', 'cats/zophie.jpg']
13908
3828
Compressed file is 3.63x smaller!
```

## Извлечение из ZIP-файлов

Метод `extractall()` объектов ZipFile извлекает все файлы и папки из ZIP-файла в текущий рабочий каталог.

```python
# Извлечь все файлы из ZIP в текущий каталог
with zipfile.ZipFile('example.zip') as example_zip:
    example_zip.extractall()
```

Метод `extract()` объектов ZipFile извлекает один файл из ZIP-файла:

```python
# Извлечь один файл из ZIP
with zipfile.ZipFile('example.zip') as example_zip:
    # Извлечь в текущий каталог (возвращает путь)
    print(example_zip.extract('spam.txt'))
    # Извлечь в определенный каталог
    print(example_zip.extract('spam.txt', '/tmp/some/new/folders'))
```

Вывод:

```plaintext
/tmp/spam.txt
/tmp/some/new/folders/spam.txt
```

## Создание и добавление в ZIP-файлы

```python
import zipfile

# Создать новый ZIP-файл и добавить в него файл
with zipfile.ZipFile('new.zip', 'w') as new_zip:
    # Добавить файл со сжатием
    new_zip.write('spam.txt', compress_type=zipfile.ZIP_DEFLATED)
```

Этот код создаст новый ZIP-файл с именем new.zip, содержащий сжатое содержимое spam.txt.

## Чтение метаданных ZIP-файлов

### Получение имен файлов с помощью namelist()

```python
import zipfile

# Прочитать ZIP-файл и вывести список всех имен файлов
with zipfile.ZipFile('example.zip', 'r') as zf:
    print(zf.namelist())
```

Вывод:

```plaintext
['README.txt']
```

### Получение всех метаданных с помощью infolist()

```python
import datetime
import zipfile

# Получить подробные метаданные для всех файлов в ZIP
with zipfile.ZipFile('example.zip') as zf:
    for info in zf.infolist():
        # Определить операционную систему (0 = Windows, 3 = Unix)
        system = 'Windows' if info.create_system == 0 else 'Unix'
        # Преобразовать кортеж date_time в объект datetime
        modified = datetime.datetime(*info.date_time)
        print(info.filename)
        print(f'Comment     : {info.comment}')
        print(f'Modified    : {modified}')
        print(f'System      : {system}')
        print(f'ZIP version : {info.create_version}')
        print(f'Compressed  : {info.compress_size} bytes')
        print(f'Uncompressed: {info.file_size} bytes')
```

Вывод:

```plaintext
README.txt
Comment     : b''
Modified    : 2022-11-15 06:48:02
System      : Unix
ZIP version : 30
Compressed  : 65 bytes
Uncompressed: 76 bytes
```

## Соответствующие ссылки

- <router-link to="/cheatsheet/reading-and-writing-files">Шпаргалка: Чтение и запись файлов</router-link>
- <router-link to="/cheatsheet/file-directory-path">Шпаргалка: Путь к файлу и каталогу</router-link>
- <router-link to="/cheatsheet/context-manager">Шпаргалка: Менеджеры контекста</router-link>
- <router-link to="/modules/os-module">Модуль: os</router-link>
- <router-link to="/modules/pathlib-module">Модуль: pathlib</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/bytes">bytes()</router-link>
