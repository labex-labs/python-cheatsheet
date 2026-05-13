---
title: "Module Tomllib Python - Aide-mémoire Python"
description: "Le module `tomllib` analyse des fichiers de configuration TOML depuis Python."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Module Tomllib Python
</base-title>

Le module `tomllib` analyse des fichiers de configuration TOML depuis Python.

Le module a été ajouté dans Python 3.11. Il est en lecture seule, donc utilisez-le pour analyser du TOML plutôt que pour en écrire.

```python
import tomllib
```

TOML est couramment utilisé pour des fichiers de configuration comme `pyproject.toml`. Il ressemble à de simples paires clé-valeur et à des sections.

## Analyser du TOML depuis une chaîne

`loads` analyse un document TOML stocké dans une chaîne.

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

Les valeurs TOML sont converties en valeurs Python :

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

## Lire un fichier TOML

`load` attend un objet fichier binaire.

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

Si vous ouvrez un vrai fichier, utilisez le mode binaire :

```python
import tomllib

with open('pyproject.toml', 'rb') as file:
    config = tomllib.load(file)
```

## Liens pertinents

- <router-link to="/modules/json-module">Module : json</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">Aide-mémoire : Lire et écrire des fichiers</router-link>
- <router-link to="/builtin/open">open()</router-link>
