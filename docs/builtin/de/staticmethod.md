---
title: 'Python statische Methode() eingebaute Funktion - Python Spickzettel'
description: 'Eine Methode in eine statische Methode umwandeln.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python staticmethod() eingebaute Funktion
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#staticmethod">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Transformiert eine Methode in eine statische Methode.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Der Dekorator `@staticmethod` transformiert eine Methode so, dass sie zwar zur Klasse gehört, aber weder die Klasse noch die Instanz als erstes Argument erhält. Dies ist nützlich für die Erstellung von Dienstprogrammfunktionen, die eine logische Verbindung zu einer Klasse haben, aber nicht vom Klassen- oder Instanzzustand abhängen.

Eine statische Methode kann entweder über die Klasse selbst oder über eine Instanz aufgerufen werden.

### Beispiel

Hier ist, wie man eine statische Methode definiert und aufruft:

```python
class MathHelper:
    @staticmethod
    def add(x, y):
        return x + y

# Aufruf über die Klasse
result1 = MathHelper.add(5, 3)
print(result1)

# Aufruf über eine Instanz
helper = MathHelper()
result2 = helper.add(10, 20)
print(result2)
```

Ausgabe:

```plaintext
8
30
```

Eine statische Methode hat keinen Zugriff auf die Klasse (`cls`) oder die Instanz (`self`). Es ist im Grunde eine reguläre Funktion, die innerhalb der Klasse benannt ist.

## Relevante Links

- <router-link to="/cheatsheet/oop-basics">Cheatsheet: OOP-Grundlagen</router-link>
- <router-link to="/cheatsheet/decorators">Cheatsheet: Dekoratoren</router-link>
- <router-link to="/cheatsheet/functions">Cheatsheet: Funktionen</router-link>
- <router-link to="/builtin/classmethod">classmethod()</router-link>
- <router-link to="/builtin/property">property()</router-link>
