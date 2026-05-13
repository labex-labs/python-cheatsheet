---
title: Python Typing Modul - Python Spickzettel
description: Das `typing`-Modul bietet Typ-Hinweise für Funktionsargumente, Rückgabewerte und Datenstrukturen.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Typing Modul
</base-title>

Das `typing`-Modul bietet Typ-Hinweise für Funktionsargumente, Rückgabewerte und Datenstrukturen.

```python
from typing import TypedDict
```

Typ-Hinweise ändern nicht, wie Python dein Programm ausführt. Sie helfen Editoren, Lintern und Lesern zu verstehen, welche Arten von Werten dein Code erwartet.

## Funktionssignaturen annotieren

```python
def greet(name: str) -> str:
    return f'Hello {name}'

print(greet('Ada'))
```

```output
Hello Ada
```

Die Annotation `name: str` bedeutet, dass die Funktion einen String erwartet. Die Annotation `-> str` bedeutet, dass sie einen String zurückgeben soll.

## Gängige Container-Typen

Verwende Typ-Hinweise, um die Form deiner Daten zu beschreiben.

```python
def average(values: list[float]) -> float:
    return sum(values) / len(values)

print(average([1.0, 2.0, 3.0]))
```

```output
2.0
```

Annotationen im Stil `list[str]` erfordern Python 3.9 oder höher.

## Optionale Werte

Verwende `| None`, wenn ein Wert fehlen kann.

```python
def find_user(user_id: int) -> str | None:
    if user_id == 1:
        return 'Ada'
    return None

print(find_user(1))
print(find_user(2))
```

```output
Ada
None
```

Die Union-Syntax `X | Y` erfordert Python 3.10 oder höher.

## TypedDict

`TypedDict` beschreibt dictionary-ähnliche Objekte mit festen Schlüsseln.

```python
from typing import TypedDict

class User(TypedDict):
    name: str
    active: bool

user: User = {'name': 'Ada', 'active': True}
print(user['name'])
```

```output
Ada
```

## Typ-Aliase

Ein Typ-Alias gibt einem komplexeren Typ einen gut lesbaren Namen.

```python
Coordinates = tuple[float, float]

def show_location(point: Coordinates) -> str:
    return f'{point[0]}, {point[1]}'

print(show_location((12.5, 35.8)))
```

```output
12.5, 35.8
```

## Relevante Links

- <router-link to="/cheatsheet/functions">Spickzettel: Funktionen</router-link>
- <router-link to="/cheatsheet/dictionaries">Spickzettel: Dictionaries</router-link>
- <router-link to="/cheatsheet/dataclasses">Spickzettel: Dataclasses</router-link>
