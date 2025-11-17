---
title: 'Python Dataclasses - Python Spickzettel'
description: 'Dataclasses sind Python-Klassen, die sich ideal zur Speicherung von Datenobjekten eignen. Dieses Modul bietet einen Dekorator und Funktionen zur automatischen Ergänzung von generierten Sonderfunktionen wie __init__() und __repr__() für benutzerdefinierte Klassen.'
labUrl: 'https://labex.io/de/labs/python-python-dataclasses-633652?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Dataclasses
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

`Dataclasses` sind Python-Klassen, die sich jedoch zur Speicherung von Datenobjekten eignen.
Dieses Modul stellt einen Decorator und Funktionen bereit, um automatisch generierte spezielle Methoden wie `__init__()` und `__repr__()` zu benutzerdefinierten Klassen hinzuzufügen.

## Features

1. Sie speichern Daten und repräsentieren einen bestimmten Datentyp. Bsp.: Eine Zahl. Für Personen, die mit ORMs vertraut sind, ist eine Model-Instanz ein Datenobjekt. Es repräsentiert eine bestimmte Art von Entität. Es enthält Attribute, die die Entität definieren oder repräsentieren.

2. Sie können mit anderen Objekten desselben Typs verglichen werden. Bsp.: Eine Zahl kann größer, kleiner oder gleich einer anderen Zahl sein.

Python 3.7 stellt den Decorator `dataclass` bereit, der verwendet wird, um eine Klasse in eine Dataclass umzuwandeln.

```python
class Number:
    def __init__(self, val):
        self.val = val

obj = Number(2)
obj.val
```

Output:

```plaintext
2
```

mit dataclass

```python
# Dataclass: generiert automatisch __init__ und __repr__ Methoden
from dataclasses import dataclass

@dataclass  # Decorator wandelt Klasse in Dataclass um
class Number:
    val: int  # Typannotation erforderlich

obj = Number(2)  # __init__ wird automatisch erstellt
obj.val
```

Output:

```plaintext
2
```

## Defaultwerte

Es ist einfach, Standardwerte zu den Feldern Ihrer Datenklasse hinzuzufügen.

```python
# Dataclass mit Standardwerten: Felder mit Defaults müssen nach erforderlichen Feldern kommen
@dataclass
class Product:
    name: str        # Erforderliches Feld
    count: int = 0   # Optionales Feld mit Standardwert
    price: float = 0.0  # Optionales Feld mit Standardwert

obj = Product("Python")  # Nur Name erforderlich, andere verwenden Defaults
obj.name
```

Output:

```plaintext
Python
```

```python
obj.count
```

Output:

```plaintext
0
```

```python
obj.price
```

Output:

```plaintext
0.0
```

## Typ-Hinweise (Type hints)

Es ist zwingend erforderlich, den Datentyp in der Dataclass zu definieren. Wenn Sie es jedoch vorziehen, den Datentyp nicht anzugeben, verwenden Sie `typing.Any`.

```python
from dataclasses import dataclass
from typing import Any

@dataclass
class WithoutExplicitTypes:
   name: Any
   value: Any = 42
```

## Relevante Links

- <router-link to="/cheatsheet/oop-basics">OOP Basics</router-link>
- <router-link to="/cheatsheet/decorators">Decorators</router-link>
- <router-link to="/blog/python-data-types">Python Data Types Blog Post</router-link>
- <router-link to="/builtin/object">object()</router-link>
- <router-link to="/builtin/repr">repr()</router-link>
- <router-link to="/builtin/type">type()</router-link>
