---
title: Модуль Sys Python - Шпаргалка Python
description: Модуль `sys` дает доступ к деталям выполнения Python, таким как аргументы командной строки, путь импорта и текущая версия интерпретатора.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Модуль Sys Python
</base-title>

Модуль `sys` дает доступ к деталям выполнения Python, таким как аргументы командной строки, путь импорта и текущая версия интерпретатора.

```python
import sys
```

Используйте `sys`, когда коду нужно общаться с самим интерпретатором Python, а не только со своими объектами приложения.

## Аргументы командной строки

`sys.argv` — это список аргументов, переданных текущему скрипту.

```python
import sys

sys.argv = ['main.py', '--debug', 'app']
print(sys.argv[0])
print(sys.argv[1:])
```

```output
main.py
['--debug', 'app']
```

Для настоящих приложений командной строки лучше использовать <router-link to="/modules/argparse-module">argparse</router-link>. Он основан на той же идее, но дает проверку и справку.

## Версия Python

```python
import sys

print(sys.version_info.major)
print(sys.version_info.minor)
```

```output
3
14
```

## Путь поиска импортов

`sys.path` управляет тем, где Python ищет модули.

```python
import sys

print(type(sys.path).__name__)
print(len(sys.path) > 0)
```

```output
list
True
```

В начале `sys.path` обычно находится текущий проект, поэтому локальные модули можно импортировать.

## Стандартный ввод и вывод

`sys.stdin`, `sys.stdout` и `sys.stderr` — это похожие на файлы объекты, которые использует интерпретатор.

```python
import sys

print(sys.stdout.writable())
print(sys.stderr.writable())
```

```output
True
True
```

## Завершение программы

```python
import sys

try:
    sys.exit(0)
except SystemExit as exc:
    print(exc.code)
```

```output
0
```

## Ссылки по теме

- <router-link to="/modules/argparse-module">Модуль: argparse</router-link>
- <router-link to="/modules/subprocess-module">Модуль: subprocess</router-link>
- <router-link to="/cheatsheet/main">Шпаргалка: Main: скрипт верхнего уровня</router-link>
