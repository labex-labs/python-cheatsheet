---
title: Python JSON Module - Python Cheatsheet
description: Python has the built-in module json, which allow us to work with JSON (JavaScript Object Notation) data.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python JSON Module
</base-title>

JSON stands for JavaScript Object Notation and is a lightweight format for storing and transporting data. JSON is often used when data is sent from a server to a web page.

Python has the built-in module `json`, which allow us to work with JSON data.

```python
import json
```

## JSON Data Types

A JSON object is similar to a Python dictionary, but has the following differences:

- JSON Keys are always string.
- Strings are always enclosed with double quotes.
- A JSON boolean start with lowercase letters.
- `null` is the JSON equivalent of Python `None`.

The data types JSON supports are:

- String
- Number
- boolean
- null
- Object
- Array

Example:

```json
{
  "name": "Charles",
  "age": 33,
  "has_hair": false,
  "hobbies": ["photography", "running"],
  "appearance": {
    "eyes": "brown",
    "hair_color": null
  }
}
```

## JSON loads() method

With the `json.loads` method, you can parse a JSON object and transform it to a Python dictionary:

```python
import json

# JSON string to parse
json_person = '{"name": "Charles", "age": 33, "has_hair": false, "hobbies": ["photography", "running"]}'
# Parse JSON string into Python dictionary
python_person = json.loads(json_person)
python_person
```

```output
{'name': 'Charles', 'age': 33, 'has_hair': False, 'hobbies': ['photography', 'running']}
```

```python
type(python_person)
```

```output
<class 'dict'>
```

```python
# Access dictionary value using get method
python_person.get("name")
```

```output
'Charles'
```

## JSON dumps() method

The other way around. The `dumps()` method transforms a Python object to a JSON string:

```python
import json

# Python dictionary to convert
python_person = {'name': 'Charles', 'age': 33, 'has_hair': False, 'hobbies': ['photography', 'running']}
# Convert Python object to JSON string
json_person = json.dumps(python_person)

json_person
```

```output
'{"name": "Charles", "age": 33, "has_hair": false, "hobbies": ["photography", "running"]}'
```

```python
type(json_person)
```

```output
<class 'str'>
```

## Reading and writing JSON Files

### Reading a JSON File

```python
import json
# Read JSON file
with open("filename.json", "r") as f:
    json_content = json.loads(f.read())

# Note: This line seems redundant - json_content is already parsed
json.loads(json_content)
```

```output
{'name': 'Charles', 'age': 33, 'has_hair': False}
```

### Writing a JSON File

```python
import json

person = {'name': 'Charles', 'age': 33}

# Write Python dictionary to JSON file
with open("filename.json", "w") as f:
    f.write(json.dumps(person))
```

## Relevant links

- <router-link to="/cheatsheet/json-yaml">Cheatsheet: JSON and YAML</router-link>
- <router-link to="/cheatsheet/dictionaries">Cheatsheet: Dictionaries</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">Cheatsheet: Reading and Writing Files</router-link>
- <router-link to="/blog/python-data-types">Blog: Python Data Types</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/open">open()</router-link>
