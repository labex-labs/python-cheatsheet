---
title: 'Python vars() eingebaute Funktion - Python Spickzettel'
description: 'Gibt das __dict__-Attribut für ein Modul, eine Klasse, eine Instanz oder ein beliebiges anderes Objekt mit einem __dict__-Attribut zurück.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python vars() eingebaute Funktion
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#vars">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Gibt das __dict__-Attribut eines Moduls, einer Klasse, einer Instanz oder eines anderen Objekts mit einem __dict__-Attribut zurück.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die Funktion `vars()` gibt das `__dict__`-Attribut eines Objekts zurück. Dieses Wörterbuch enthält die beschreibbaren Attribute des Objekts. Es ist eine bequeme Möglichkeit, alle Attribute eines Objekts auf einmal anzuzeigen.

Wenn sie ohne Argument aufgerufen wird, verhält sich `vars()` wie `locals()`, indem sie ein Wörterbuch der lokalen Symboltabelle zurückgibt.

### Beispiele

**Abrufen der Attribute eines Objekts:**

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

my_person = Person("Dwight", 35)
print(vars(my_person))
```

```output
{'name': 'Dwight', 'age': 35}
```

**Verwendung von `vars()` ohne Argumente:**

```python
def my_function():
    x = 10
    print(vars())

my_function()
```

```output
{'x': 10}
```

## Relevante Links

- <router-link to="/cheatsheet/oop-basics">Cheatsheet: OOP Grundlagen</router-link>
- <router-link to="/cheatsheet/debugging">Cheatsheet: Debugging</router-link>
- <router-link to="/cheatsheet/dictionaries">Cheatsheet: Dictionaries</router-link>
- <router-link to="/builtin/dir">dir()</router-link>
- <router-link to="/builtin/object">object()</router-link>
- <router-link to="/builtin/globals">globals()</router-link>
- <router-link to="/builtin/locals">locals()</router-link>
