---
title: Módulo Tomllib do Python - Folha de Referência Python
description: O módulo `tomllib` analisa arquivos de configuração TOML em Python.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo Tomllib do Python
</base-title>

O módulo `tomllib` analisa arquivos de configuração TOML em Python.

O módulo foi adicionado no Python 3.11. Ele é somente leitura, então use-o para analisar TOML e não para escrevê-lo.

```python
import tomllib
```

TOML é comumente usado em arquivos de configuração como `pyproject.toml`. Ele parece um conjunto simples de pares chave-valor e seções.

## Analisando TOML a partir de uma string

`loads` analisa um documento TOML armazenado em uma string.

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

Os valores TOML são convertidos em valores Python.

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

## Lendo um arquivo TOML

`load` espera um objeto de arquivo binário.

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

Se você abrir um arquivo real, use o modo binário.

```python
import tomllib

with open('pyproject.toml', 'rb') as file:
    config = tomllib.load(file)
```

## Links relacionados

- <router-link to="/modules/json-module">Módulo: json</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">Folha de Referência: Leitura e escrita de arquivos</router-link>
- <router-link to="/builtin/open">open()</router-link>
