---
title: 'Python property()-Funktion – Python Spickzettel'
description: 'Gibt ein Eigenschaftsattribut zurück.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python built-in Funktion property()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#property">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Gibt ein Eigenschaftsattribut zurück.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die Funktion `property()` wird verwendet, um Eigenschaftsattribute zu erstellen. Ein Eigenschaftsattribut ist eine spezielle Art von Attribut, das Getter-, Setter- und Deleter-Methoden besitzt. Dies ermöglicht es Ihnen, Logik zum Abrufen, Setzen oder Löschen des Werts eines Attributs hinzuzufügen.

Üblicher ist die Verwendung des `@property`-Decorators, welcher eine bequemere Möglichkeit ist, `property()` zu verwenden.

### Beispiel

Hier ist ein Beispiel für die Verwendung von `property()`, um ein schreibgeschütztes Attribut zu erstellen:

```python
class Person:
    def __init__(self, name):
        self._name = name

    def get_name(self):
        print("Getting name")
        return self._name

    # Erstellt eine Eigenschaft
    name = property(get_name)

p = Person("John")
print(p.name)  # Ruft get_name() auf
```

Ausgabe:

```plaintext
Getting name
John
```

Hinweis: `p.name = "Jane"` würde einen AttributeError auslösen, da kein Setter vorhanden ist.

Und hier ist die gebräuchlichere Methode mit dem `@property`-Decorator:

```python
class Person:
    def __init__(self, name):
        self._name = name

    @property
    def name(self):
        print("Getting name")
        return self._name

p = Person("John")
print(p.name)
```

Ausgabe:

```plaintext
Getting name
John
```

## Relevante Links

- <router-link to="/cheatsheet/oop-basics">Cheatsheet: OOP Grundlagen</router-link>
- <router-link to="/cheatsheet/decorators">Cheatsheet: Decorators</router-link>
- <router-link to="/cheatsheet/dataclasses">Cheatsheet: Dataclasses</router-link>
- <router-link to="/builtin/getattr">getattr()</router-link>
- <router-link to="/builtin/setattr">setattr()</router-link>
- <router-link to="/builtin/delattr">delattr()</router-link>
