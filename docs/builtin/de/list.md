---
title: 'Python list()-Funktion – Python Spickzettel'
description: 'list ist keine Funktion, sondern ein veränderbarer Sequenztyp, wie in Listen und Sequenztypen – list, tuple, range dokumentiert.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python list() eingebaute Funktion
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#list">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Anstatt einer Funktion ist `list` tatsächlich ein veränderbarer Sequenztyp, wie in Listen und Sequenztypen dokumentiert — <router-link to="/builtin/list">list</router-link>, <router-link to="/builtin/tuple">tuple</router-link>, <router-link to="/builtin/range">range</router-link>.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

In Python ist `list` keine Funktion, sondern ein eingebauter veränderbarer Sequenztyp. Das bedeutet, es ist eine Datenstruktur, die eine geordnete Sammlung von Elementen enthalten kann, und Sie können ihren Inhalt ändern. Sie können eine Liste mit eckigen Klammern `[]` oder dem Konstruktor `list()` erstellen.

## Beispiele

```python
l = list()
print(l)
l.append(1)
l.append(2)
print(l)
```

```output
[]
[1, 2]
```

## Relevante Links

- <router-link to="/cheatsheet/lists-and-tuples">Spickzettel: Listen und Tupel</router-link>
- <router-link to="/cheatsheet/comprehensions">Spickzettel: Comprehensions</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">Blog: Python Comprehensions Schritt für Schritt</router-link>
- <router-link to="/blog/python-data-types">Blog: Python Datentypen</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/len">len()</router-link>
