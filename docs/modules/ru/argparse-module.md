---
title: "Модуль Argparse Python - Шпаргалка Python"
description: "Модуль `argparse` помогает создавать интерфейсы командной строки с позиционными аргументами, опциями, флагами и справочными сообщениями."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Модуль Argparse Python
</base-title>

Модуль `argparse` помогает создавать интерфейсы командной строки с позиционными аргументами, опциями, флагами и справочными сообщениями.

Модуль был добавлен в Python 3.2. Если вы используете Python 3.14, `ArgumentParser` также поддерживает параметры `suggest_on_error` и `color`.

```python
import argparse
```

Используйте `argparse`, когда хотите, чтобы файл Python вел себя как небольшая терминальная программа.

```bash
python greet.py Ada --count 2
```

Модуль читает текст после имени скрипта, проверяет его и возвращает объект Python с разобранными значениями.

## Создание парсера

`ArgumentParser` хранит аргументы, которые принимает ваша программа.

```python
import argparse

parser = argparse.ArgumentParser(
    prog='greet',
    description='Greet a user from the command line',
)

parser.print_help()
```

```output
usage: greet [-h]

Greet a user from the command line

options:
  -h, --help  show this help message and exit
```

## Позиционные аргументы

Позиционные аргументы по умолчанию обязательны.

```python
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('name')

args = parser.parse_args(['Ada'])
print(args.name)
```

```output
Ada
```

## Необязательные аргументы и флаги

Необязательные аргументы обычно начинаются с `-` или `--`.

```python
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--count', type=int, default=1)
parser.add_argument('-v', '--verbose', action='store_true')

args = parser.parse_args(['--count', '3', '--verbose'])
print(args.count)
print(args.verbose)
```

```output
3
True
```

## Выбор значений и преобразование типов

Вы можете проверять значения во время разбора.

```python
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--mode', choices=['dev', 'prod'])
parser.add_argument('--port', type=int, default=8000)

args = parser.parse_args(['--mode', 'dev', '--port', '9000'])
print(args.mode)
print(args.port)
```

```output
dev
9000
```

## Подкоманды

Подкоманды полезны в инструментах вроде `git commit` или `docker run`.

```python
import argparse

parser = argparse.ArgumentParser()
subparsers = parser.add_subparsers(dest='command', required=True)

build_parser = subparsers.add_parser('build')
build_parser.add_argument('--release', action='store_true')

args = parser.parse_args(['build', '--release'])
print(args.command)
print(args.release)
```

```output
build
True
```

## Небольшой полный пример

Этот пример принимает имя и повторяет приветствие.

```python
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('name')
parser.add_argument('--count', type=int, default=1)

args = parser.parse_args(['Ada', '--count', '2'])

for _ in range(args.count):
    print(f'Hello {args.name}!')
```

```output
Hello Ada!
Hello Ada!
```

## Ссылки по теме

- <router-link to="/modules/sys-module">Модуль: sys</router-link>
- <router-link to="/cheatsheet/functions">Шпаргалка: функции</router-link>
- <router-link to="/cheatsheet/control-flow">Шпаргалка: управление потоком</router-link>
