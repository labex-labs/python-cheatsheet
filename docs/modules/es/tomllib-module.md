---
title: Módulo Tomllib de Python - Hoja de trucos de Python
description: El módulo `tomllib` analiza archivos de configuración TOML desde Python.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo Tomllib de Python
</base-title>

El módulo `tomllib` analiza archivos de configuración TOML desde Python.

El módulo se añadió en Python 3.11. Es de solo lectura, así que úsalo para analizar TOML y no para escribirlo.

```python
import tomllib
```

TOML se usa con frecuencia en archivos de configuración como `pyproject.toml`. Tiene el aspecto de pares clave-valor y secciones sencillas.

## Analizar TOML desde una cadena

`loads` analiza un documento TOML almacenado en una cadena.

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

Los valores TOML se convierten en valores de Python:

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

## Leer un archivo TOML

`load` espera un objeto de archivo binario.

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

Si abres un archivo real, usa el modo binario:

```python
import tomllib

with open('pyproject.toml', 'rb') as file:
    config = tomllib.load(file)
```

## Enlaces relacionados

- <router-link to="/modules/json-module">Módulo: json</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">Hoja de trucos: Leer y escribir archivos</router-link>
- <router-link to="/builtin/open">open()</router-link>
