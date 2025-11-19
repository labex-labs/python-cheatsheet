---
title: 'Python JSON Modul - Python Spickzettel'
description: 'Python verfügt über das integrierte Modul json, mit dem wir mit JSON (JavaScript Object Notation) Daten arbeiten können.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python JSON Modul
</base-title>

JSON steht für JavaScript Object Notation und ist ein leichtgewichtiges Format zum Speichern und Übertragen von Daten. JSON wird häufig verwendet, wenn Daten von einem Server an eine Webseite gesendet werden.

Python verfügt über das eingebaute Modul `json`, mit dem wir mit JSON-Daten arbeiten können.

```python
import json
```

## JSON-Datentypen

Ein JSON-Objekt ähnelt einem Python-Dictionary, weist jedoch die folgenden Unterschiede auf:

- JSON-Schlüssel sind immer Zeichenketten (Strings).
- Zeichenketten sind immer in doppelten Anführungszeichen eingeschlossen.
- Ein JSON-Boolean beginnt mit Kleinbuchstaben.
- `null` ist das JSON-Äquivalent zu Python `None`.

Die von JSON unterstützten Datentypen sind:

- String
- Number
- boolean
- null
- Object
- Array

Beispiel:

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

## JSON loads()-Methode

Mit der Methode `json.loads` können Sie ein JSON-Objekt parsen und es in ein Python-Dictionary umwandeln:

```python
import json

# Zu parsende JSON-Zeichenkette
json_person = '{"name": "Charles", "age": 33, "has_hair": false, "hobbies": ["photography", "running"]}'
# JSON-Zeichenkette in Python-Dictionary parsen
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
# Auf den Dictionary-Wert mit der get-Methode zugreifen
python_person.get("name")
```

```output
'Charles'
```

## JSON dumps()-Methode

Der umgekehrte Weg. Die Methode `dumps()` wandelt ein Python-Objekt in eine JSON-Zeichenkette um:

```python
import json

# Zu konvertierendes Python-Dictionary
python_person = {'name': 'Charles', 'age': 33, 'has_hair': False, 'hobbies': ['photography', 'running']}
# Python-Objekt in JSON-Zeichenkette konvertieren
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

## JSON-Dateien lesen und schreiben

### Eine JSON-Datei lesen

```python
import json
# JSON-Datei lesen
with open("filename.json", "r") as f:
    json_content = json.loads(f.read())

# Hinweis: Diese Zeile scheint redundant zu sein - json_content ist bereits geparst
json.loads(json_content)
```

```output
{'name': 'Charles', 'age': 33, 'has_hair': False}
```

### Eine JSON-Datei schreiben

```python
import json

person = {'name': 'Charles', 'age': 33}

# Python-Dictionary in JSON-Datei schreiben
with open("filename.json", "w") as f:
    f.write(json.dumps(person))
```

## Relevante Links

- <router-link to="/cheatsheet/json-yaml">Cheatsheet: JSON und YAML</router-link>
- <router-link to="/cheatsheet/dictionaries">Cheatsheet: Dictionaries</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">Cheatsheet: Dateien lesen und schreiben</router-link>
- <router-link to="/blog/python-data-types">Blog: Python-Datentypen</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/open">open()</router-link>
