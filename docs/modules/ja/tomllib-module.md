---
title: Python Tomllib モジュール - Python チートシート
description: `tomllib` モジュールは、Python で TOML 設定ファイルを解析します。
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Tomllib モジュール
</base-title>

`tomllib` モジュールは、Python で TOML 設定ファイルを解析します。

このモジュールは Python 3.11 で追加されました。読み取り専用なので、TOML の解析に使い、書き込みには使いません。

```python
import tomllib
```

TOML は `pyproject.toml` のような設定ファイルでよく使われます。見た目はシンプルなキーと値の組、そしてセクションです。

## 文字列から TOML を解析する

`loads` は、文字列に入った TOML ドキュメントを解析します。

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

TOML の値は Python の値に変換されます。

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

## TOML ファイルを読む

`load` はバイナリのファイルオブジェクトを必要とします。

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

実際のファイルを開くときは、バイナリモードを使います。

```python
import tomllib

with open('pyproject.toml', 'rb') as file:
    config = tomllib.load(file)
```

## 関連リンク

- <router-link to="/modules/json-module">モジュール: json</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">チートシート: ファイルの読み書き</router-link>
- <router-link to="/builtin/open">open()</router-link>
