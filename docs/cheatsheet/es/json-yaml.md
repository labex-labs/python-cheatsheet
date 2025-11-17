---
title: 'Python JSON y YAML - Hoja de Trucos de Python'
description: 'JSON (Notación de Objetos JavaScript) es un formato ligero para almacenar y transportar datos. Se usa frecuentemente al enviar datos desde un servidor a una página web.'
labUrl: 'https://labex.io/es/labs/python-python-json-and-yaml-633659?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
JSON y YAML
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

## JSON

JSON significa JavaScript Object Notation y es un formato ligero para almacenar y transportar datos. JSON se utiliza a menudo cuando los datos se envían desde un servidor a una página web.

```python
# Read JSON file: json.load() parses JSON from file object
import json
with open("filename.json", "r") as f:  # Open file in read mode
    content = json.load(f)  # Parse JSON and return Python dict/list
```

Escribir un archivo JSON con:

```python
# Write JSON file: json.dump() writes Python object as JSON
import json

content = {"name": "Joe", "age": 20}
with open("filename.json", "w") as f:  # Open file in write mode
    json.dump(content, f, indent=2)  # Write JSON with 2-space indentation
```

## YAML

En comparación con JSON, YAML permite una mantenibilidad humana mucho mejor y da la capacidad de añadir comentarios. Es una opción conveniente para archivos de configuración donde un humano tendrá que editar.

Hay dos bibliotecas principales que permiten el acceso a archivos YAML:

- [PyYaml](https://pypi.python.org/pypi/PyYAML)
- [Ruamel.yaml](https://pypi.python.org/pypi/ruamel.yaml)

Instálalas usando `pip install` en tu entorno virtual.

La primera es más fácil de usar, pero la segunda, Ruamel, implementa mucho mejor la especificación YAML y permite, por ejemplo, modificar un contenido YAML sin alterar los comentarios.

Abrir un archivo YAML con:

```python
# Read YAML file using ruamel.yaml library
from ruamel.yaml import YAML

with open("filename.yaml") as f:
    yaml=YAML()  # Create YAML parser instance
    yaml.load(f)  # Parse YAML and return Python dict/list
```

## Anyconfig

[Anyconfig](https://pypi.python.org/pypi/anyconfig) es un paquete muy útil que permite abstraer completamente el formato subyacente del archivo de configuración. Permite cargar un diccionario de Python desde JSON, YAML, TOML, y similares.

Instálalo con:

```bash
pip install anyconfig
```

Uso:

```python
# anyconfig: load configuration files in various formats (JSON, YAML, TOML, etc.)
import anyconfig
conf1 = anyconfig.load("/path/to/foo/conf.d/a.yml")  # Auto-detects format
```

## Enlaces relevantes

- <router-link to="/cheatsheet/reading-and-writing-files">Lectura y Escritura de Archivos</router-link>
- <router-link to="/cheatsheet/dictionaries">Diccionarios de Python</router-link>
- <router-link to="/modules/json-module">El Módulo json</router-link>
- <router-link to="/blog/python-pathlib-essentials">10 Operaciones Esenciales del Sistema de Archivos que Todo Desarrollador Debe Conocer</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
