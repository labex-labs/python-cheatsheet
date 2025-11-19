---
title: 'Module Python JSON - Fiche de Référence Python'
description: 'Python dispose du module intégré json, permettant de manipuler les données JSON (JavaScript Object Notation).'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Module JSON Python
</base-title>

JSON signifie JavaScript Object Notation et est un format léger pour stocker et transporter des données. JSON est souvent utilisé lorsque des données sont envoyées d'un serveur à une page web.

Python possède le module intégré `json`, qui nous permet de travailler avec des données JSON.

```python
import json
```

## Types de Données JSON

Un objet JSON est similaire à un dictionnaire Python, mais présente les différences suivantes :

- Les clés JSON sont toujours des chaînes de caractères (_string_).
- Les chaînes de caractères sont toujours entourées de guillemets doubles.
- Un booléen JSON commence par des lettres minuscules.
- `null` est l'équivalent JSON de `None` en Python.

Les types de données pris en charge par JSON sont :

- String (Chaîne de caractères)
- Number (Nombre)
- boolean (Booléen)
- null
- Object (Objet)
- Array (Tableau)

Exemple :

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

## Méthode JSON loads()

Avec la méthode `json.loads`, vous pouvez analyser un objet JSON et le transformer en un dictionnaire Python :

```python
import json

# Chaîne JSON à analyser
json_person = '{"name": "Charles", "age": 33, "has_hair": false, "hobbies": ["photography", "running"]}'
# Analyse de la chaîne JSON en dictionnaire Python
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
# Accéder à la valeur du dictionnaire en utilisant la méthode get
python_person.get("name")
```

```output
'Charles'
```

## Méthode JSON dumps()

Le chemin inverse. La méthode `dumps()` transforme un objet Python en une chaîne JSON :

```python
import json

# Dictionnaire Python à convertir
python_person = {'name': 'Charles', 'age': 33, 'has_hair': False, 'hobbies': ['photography', 'running']}
# Conversion de l'objet Python en chaîne JSON
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

## Lecture et Écriture de Fichiers JSON

### Lecture d'un Fichier JSON

```python
import json
# Lecture du fichier JSON
with open("filename.json", "r") as f:
    json_content = json.loads(f.read())

# Note : Cette ligne semble redondante - json_content est déjà analysé
json.loads(json_content)
```

```output
{'name': 'Charles', 'age': 33, 'has_hair': False}
```

### Écriture d'un Fichier JSON

```python
import json

person = {'name': 'Charles', 'age': 33}

# Écriture du dictionnaire Python dans un fichier JSON
with open("filename.json", "w") as f:
    f.write(json.dumps(person))
```

## Liens pertinents

- <router-link to="/cheatsheet/json-yaml">Cheatsheet : JSON et YAML</router-link>
- <router-link to="/cheatsheet/dictionaries">Cheatsheet : Dictionnaires</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">Cheatsheet : Lecture et Écriture de Fichiers</router-link>
- <router-link to="/blog/python-data-types">Blog : Types de Données Python</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/open">open()</router-link>
