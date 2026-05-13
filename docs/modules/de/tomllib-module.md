---
title: Python Tomllib Modul - Python Spickzettel
description: Das `tomllib`-Modul parst TOML-Konfigurationsdateien in Python.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Tomllib Modul
</base-title>

Das `tomllib`-Modul parst TOML-Konfigurationsdateien in Python.

Das Modul wurde in Python 3.11 hinzugefügt. Es ist schreibgeschützt, verwende es also zum Parsen von TOML und nicht zum Schreiben.

```python
import tomllib
```

TOML wird häufig für Konfigurationsdateien wie `pyproject.toml` verwendet. Es sieht aus wie einfache Schlüssel-Wert-Paare und Abschnitte.

## TOML aus einem String parsen

`loads` parst ein TOML-Dokument, das in einem String gespeichert ist.

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

TOML-Werte werden in Python-Werte umgewandelt:

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

## Eine TOML-Datei lesen

`load` erwartet ein binäres Dateiobjekt.

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

Wenn du eine echte Datei öffnest, verwende den Binärmodus:

```python
import tomllib

with open('pyproject.toml', 'rb') as file:
    config = tomllib.load(file)
```

## Relevante Links

- <router-link to="/modules/json-module">Modul: json</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">Spickzettel: Lesen und Schreiben von Dateien</router-link>
- <router-link to="/builtin/open">open()</router-link>
