---
title: 'Python super()-Funktion – Python Spickzettel'
description: 'Gibt ein Proxy-Objekt zurück, das Methodenaufrufe an eine übergeordnete oder geschwisterliche Klasse delegiert. Dies ist nützlich für den Zugriff auf geerbte Methoden, die in einer Klasse überschrieben wurden.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python super()-Funktion
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#super">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Gibt ein Proxy-Objekt zurück, das Methodenaufrufe an eine Eltern- oder Geschwisterklasse des Typs delegiert. Dies ist nützlich für den Zugriff auf geerbte Methoden, die in einer Klasse überschrieben wurden.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die `super()`-Funktion wird verwendet, um eine Methode aus einer Elternklasse aufzurufen. Dies ist besonders nützlich bei Vererbung, wenn Sie die Funktionalität einer Methode der Elternklasse erweitern möchten, ohne sie vollständig zu überschreiben.

### Beispiel

```python
class Parent:
    def greet(self):
        print("Hello from Parent")

class Child(Parent):
    def greet(self):
        # Call the parent's greet method
        super().greet()
        print("Hello from Child")

c = Child()
c.greet()
```

```output
Hello from Parent
Hello from Child
```

## Relevante Links

- <router-link to="/cheatsheet/oop-basics">Cheatsheet: OOP Grundlagen</router-link>
- <router-link to="/cheatsheet/decorators">Cheatsheet: Decorators</router-link>
- <router-link to="/cheatsheet/functions">Cheatsheet: Funktionen</router-link>
- <router-link to="/builtin/object">object()</router-link>
- <router-link to="/builtin/isinstance">isinstance()</router-link>
- <router-link to="/builtin/issubclass">issubclass()</router-link>
- <router-link to="/builtin/classmethod">classmethod()</router-link>
- <router-link to="/builtin/staticmethod">staticmethod()</router-link>
- <router-link to="/builtin/property">property()</router-link>
