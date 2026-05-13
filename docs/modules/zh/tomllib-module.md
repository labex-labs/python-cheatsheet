---
title: Python Tomllib 模块 - Python 速查表
description: `tomllib` 模块可以在 Python 中解析 TOML 配置文件。
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Tomllib 模块
</base-title>

`tomllib` 模块可以在 Python 中解析 TOML 配置文件。

该模块从 Python 3.11 开始加入标准库。它只能读取，所以适合解析 TOML，不适合写入 TOML。

```python
import tomllib
```

TOML 常用于 `pyproject.toml` 这类配置文件。它的格式看起来像简单的键值对和章节。

## 从字符串解析 TOML

`loads` 用于解析存放在字符串中的 TOML 文档。

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

TOML 的值会转换成 Python 值：

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

## 读取 TOML 文件

`load` 需要一个二进制文件对象。

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

如果打开的是实际文件，请使用二进制模式：

```python
import tomllib

with open('pyproject.toml', 'rb') as file:
    config = tomllib.load(file)
```

## 相关链接

- <router-link to="/modules/json-module">模块：json</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">速查表：读写文件</router-link>
- <router-link to="/builtin/open">open()</router-link>
