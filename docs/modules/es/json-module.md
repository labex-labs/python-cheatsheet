---
title: 'Módulo JSON de Python - Hoja de Trucos de Python'
description: 'Python tiene el módulo incorporado json, que permite trabajar con datos JSON (Notación de Objetos JavaScript).'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo JSON de Python
</base-title>

JSON significa JavaScript Object Notation y es un formato ligero para almacenar y transportar datos. JSON se utiliza a menudo cuando los datos se envían desde un servidor a una página web.

Python tiene el módulo incorporado `json`, que nos permite trabajar con datos JSON.

```python
import json
```

## Tipos de Datos JSON

Un objeto JSON es similar a un diccionario de Python, pero tiene las siguientes diferencias:

- Las claves JSON son siempre cadenas (string).
- Las cadenas siempre están encerradas entre comillas dobles.
- Un booleano JSON comienza con letras minúsculas.
- `null` es el equivalente JSON de `None` de Python.

Los tipos de datos que soporta JSON son:

- String (Cadena)
- Number (Número)
- boolean (Booleano)
- null
- Object (Objeto)
- Array (Arreglo)

Ejemplo:

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

## Método JSON loads()

Con el método `json.loads`, puedes analizar un objeto JSON y transformarlo en un diccionario de Python:

```python
import json

# Cadena JSON para analizar
json_person = '{"name": "Charles", "age": 33, "has_hair": false, "hobbies": ["photography", "running"]}'
# Analizar cadena JSON a diccionario de Python
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
# Acceder al valor del diccionario usando el método get
python_person.get("name")
```

```output
'Charles'
```

## Método JSON dumps()

A la inversa. El método `dumps()` transforma un objeto de Python a una cadena JSON:

```python
import json

# Diccionario de Python para convertir
python_person = {'name': 'Charles', 'age': 33, 'has_hair': False, 'hobbies': ['photography', 'running']}
# Convertir objeto de Python a cadena JSON
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

## Lectura y Escritura de Archivos JSON

### Lectura de un Archivo JSON

```python
import json
# Leer archivo JSON
with open("filename.json", "r") as f:
    json_content = json.loads(f.read())

# Nota: Esta línea parece redundante - json_content ya está analizado
json.loads(json_content)
```

```output
{'name': 'Charles', 'age': 33, 'has_hair': False}
```

### Escritura de un Archivo JSON

```python
import json

person = {'name': 'Charles', 'age': 33}

# Escribir diccionario de Python a archivo JSON
with open("filename.json", "w") as f:
    f.write(json.dumps(person))
```

## Enlaces relevantes

- <router-link to="/cheatsheet/json-yaml">Cheatsheet: JSON y YAML</router-link>
- <router-link to="/cheatsheet/dictionaries">Cheatsheet: Diccionarios</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">Cheatsheet: Lectura y Escritura de Archivos</router-link>
- <router-link to="/blog/python-data-types">Blog: Tipos de Datos de Python</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/open">open()</router-link>
