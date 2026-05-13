---
title: "Модуль Tomllib Python - Шпаргалка Python"
description: "Модуль `tomllib` разбирает TOML-файлы конфигурации в Python."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Модуль Tomllib Python
</base-title>

Модуль `tomllib` разбирает TOML-файлы конфигурации в Python.

Модуль был добавлен в Python 3.11. Он только для чтения, поэтому используйте его для разбора TOML, а не для записи.

```python
import tomllib
```

TOML часто используется для конфигурационных файлов вроде `pyproject.toml`. Он выглядит как простые пары ключ-значение и секции.

## Разбор TOML из строки

`loads` разбирает TOML-документ, сохраненный в строке.

```python
import tomllib

config = tomllib.loads("""
name = "python-cheatsheet"
version = "1.0"
[database]
port = 5432
""")

print(config['name'])
print(config['database']['port'])
```

```output
python-cheatsheet
5432
```

Значения TOML преобразуются в значения Python.

```python
import tomllib

config = tomllib.loads("""
debug = true
ports = [8000, 8001]
""")

print(config['debug'])
print(config['ports'])
```

```output
True
[8000, 8001]
```

## Чтение TOML-файла

`load` ожидает бинарный файловый объект.

```python
import tomllib
from io import BytesIO

data = b'name = "demo"'
config = tomllib.load(BytesIO(data))
print(config)
```

```output
{'name': 'demo'}
```

Если открываете реальный файл, используйте бинарный режим.

```python
import tomllib

with open('pyproject.toml', 'rb') as file:
    config = tomllib.load(file)
```

## Ссылки по теме

- <router-link to="/modules/json-module">Модуль: json</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">Шпаргалка: чтение и запись файлов</router-link>
- <router-link to="/builtin/open">open()</router-link>
