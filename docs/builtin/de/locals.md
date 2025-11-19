---
title: 'Python locals()-Funktion – Python Spickzettel'
description: 'Aktualisiert und gibt ein Wörterbuch zurück, das die aktuelle lokale Symboltabelle darstellt. Freie Variablen werden von locals() zurückgegeben, wenn sie in Funktionsblöcken, aber nicht in Klassenblöcken aufgerufen werden. Beachten Sie, dass auf Modulebene locals() und globals() dasselbe Wörterbuch sind.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python locals() eingebaute Funktion
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#locals">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Aktualisiert und gibt ein Wörterbuch zurück, das die aktuelle lokale Symboltabelle darstellt. Freie Variablen werden von locals() zurückgegeben, wenn es in Funktionsblöcken aufgerufen wird, aber nicht in Klassenblöcken. Beachten Sie, dass auf Modulebene locals() und <router-link to="/builtin/globals">globals()</router-link> dasselbe Wörterbuch sind.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die Funktion `locals()` gibt ein Wörterbuch zurück, das die aktuelle lokale Symboltabelle darstellt. Diese umfasst alle lokalen Variablen, Argumente und andere Objekte im aktuellen Gültigkeitsbereich (Scope).

Es ist ein nützliches Werkzeug zur Inspektion des lokalen Namensraums.

### Beispiel

```python
def my_function(arg1, arg2):
    local_var = "I am local"
    print(locals())

my_function("hello", "world")
```

```output
{'arg1': 'hello', 'arg2': 'world', 'local_var': 'I am local'}
```

## Relevante Links

- <router-link to="/cheatsheet/debugging">Spickzettel: Debugging</router-link>
- <router-link to="/cheatsheet/functions">Spickzettel: Funktionen</router-link>
- <router-link to="/cheatsheet/dictionaries">Spickzettel: Dictionaries</router-link>
- <router-link to="/builtin/globals">globals()</router-link>
- <router-link to="/builtin/dir">dir()</router-link>
