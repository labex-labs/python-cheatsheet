---
title: Python Tomllib Module - Python Cheatsheet
description: The tomllib module parses TOML configuration files from Python.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Tomllib Module
</base-title>

The `tomllib` module parses TOML configuration files from Python.

The module was added in Python 3.11. It is read-only, so use it for parsing TOML rather than writing it.

```python
import tomllib
```

TOML is commonly used for configuration files such as `pyproject.toml`. It looks like simple key-value pairs and sections.

## Parsing TOML from a string

`loads` parses a TOML document stored in a string.

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

TOML values are converted to Python values:

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

## Reading a TOML file

`load` expects a binary file object.

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

If you open a real file, use binary mode:

```python
import tomllib

with open('pyproject.toml', 'rb') as file:
    config = tomllib.load(file)
```

## Relevant links

- <router-link to="/modules/json-module">Module: json</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">Cheatsheet: Reading and Writing Files</router-link>
- <router-link to="/builtin/open">open()</router-link>
