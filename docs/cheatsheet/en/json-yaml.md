---
title: Python JSON and YAML - Python Cheatsheet
description: JSON stands for JavaScript Object Notation and is a lightweight format for storing and transporting data. JSON is often used when data is sent from a server to a web page.
labUrl: https://labex.io/labs/python-python-json-and-yaml-633659?course=python-cheatsheet
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
JSON and YAML
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

## JSON

JSON stands for JavaScript Object Notation and is a lightweight format for storing and transporting data. JSON is often used when data is sent from a server to a web page.

```python
# Read JSON file: json.load() parses JSON from file object
import json
with open("filename.json", "r") as f:  # Open file in read mode
    content = json.load(f)  # Parse JSON and return Python dict/list
```

Write a JSON file with:

```python
# Write JSON file: json.dump() writes Python object as JSON
import json

content = {"name": "Joe", "age": 20}
with open("filename.json", "w") as f:  # Open file in write mode
    json.dump(content, f, indent=2)  # Write JSON with 2-space indentation
```

## YAML

Compared to JSON, YAML allows a much better human maintainability and gives ability to add comments. It is a convenient choice for configuration files where a human will have to edit.

There are two main libraries allowing access to YAML files:

- [PyYaml](https://pypi.python.org/pypi/PyYAML)
- [Ruamel.yaml](https://pypi.python.org/pypi/ruamel.yaml)

Install them using `pip install` in your virtual environment.

The first one is easier to use but the second one, Ruamel, implements much better the YAML
specification, and allow for example to modify a YAML content without altering comments.

Open a YAML file with:

```python
# Read YAML file using ruamel.yaml library
from ruamel.yaml import YAML

with open("filename.yaml") as f:
    yaml=YAML()  # Create YAML parser instance
    yaml.load(f)  # Parse YAML and return Python dict/list
```

## Anyconfig

[Anyconfig](https://pypi.python.org/pypi/anyconfig) is a very handy package, allowing to abstract completely the underlying configuration file format. It allows to load a Python dictionary from JSON, YAML, TOML, and so on.

Install it with:

```bash
pip install anyconfig
```

Usage:

```python
# anyconfig: load configuration files in various formats (JSON, YAML, TOML, etc.)
import anyconfig
conf1 = anyconfig.load("/path/to/foo/conf.d/a.yml")  # Auto-detects format
```

## Relevant links

- <router-link to="/cheatsheet/reading-and-writing-files">Reading and Writing Files</router-link>
- <router-link to="/cheatsheet/dictionaries">Python Dictionaries</router-link>
- <router-link to="/modules/json-module">The json Module</router-link>
- <router-link to="/blog/python-pathlib-essentials">10 Essential File System Operations Every Developer Should Know</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
