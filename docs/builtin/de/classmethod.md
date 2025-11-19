---
title: 'Python classmethod()-Funktion – Python Spickzettel'
description: 'Wandelt eine Methode in eine Klassenmethode um. Eine Klassenmethode empfängt die Klasse als implizites erstes Argument, genau wie eine Instanzmethode die Instanz empfängt.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python classmethod() eingebaute Funktion
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#classmethod">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Transformiert eine Methode in eine Klassenmethode. Eine Klassenmethode empfängt die Klasse als implizites erstes Argument, genau wie eine Instanzmethode die Instanz empfängt.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Eine `classmethod` ist eine Methode, die an die Klasse gebunden ist und nicht an die Instanz der Klasse. Sie nimmt die Klasse selbst als ihr erstes Argument entgegen, das konventionell `cls` genannt wird. Dies steht im Gegensatz zu einer regulären Instanzmethode, die die Instanz als ihr erstes Argument (`self`) entgegennimmt.

Sie werden oft für Factory-Methoden verwendet, die Instanzen der Klasse auf eine bestimmte Weise erstellen.

## Beispiel

Hier ist ein häufiger Anwendungsfall: Erstellen einer Factory-Methode, die die Klasse aus einem anderen Datenformat, wie einem Dictionary, instanziieren kann.

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    @classmethod
    def from_dict(cls, data):
        # Dies ist eine Factory-Methode, die eine Person-Instanz aus einem Dictionary erstellt
        return cls(data['name'], data['age'])

    def display(self):
        print(f"Name: {self.name}, Age: {self.age}")

# Daten für eine neue Person
person_data = {'name': 'John', 'age': 30}

# Erstellen einer Person-Instanz mithilfe der Klassenmethode
p = Person.from_dict(person_data)

p.display()
```

```output
Name: John, Age: 30
```

## Relevante Links

- <router-link to="/cheatsheet/oop-basics">Cheatsheet: OOP Grundlagen</router-link>
- <router-link to="/cheatsheet/decorators">Cheatsheet: Decorators</router-link>
- <router-link to="/cheatsheet/functions">Cheatsheet: Funktionen</router-link>
- <router-link to="/builtin/staticmethod">staticmethod()</router-link>
- <router-link to="/builtin/property">property()</router-link>
- <router-link to="/builtin/object">object()</router-link>
