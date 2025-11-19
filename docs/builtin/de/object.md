---
title: 'Python object()-Funktion – Python Spickzettel'
description: 'Gibt ein neues, funktionsloses Objekt zurück. object ist die Basis aller Klassen. Es enthält Methoden, die für alle Instanzen von Python-Klassen üblich sind. Diese Funktion akzeptiert keine Argumente.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python object() eingebaute Funktion
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#object">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Gibt ein neues, funktionsloses Objekt zurück. object ist eine Basis für alle Klassen. Es verfügt über Methoden, die allen Instanzen von Python-Klassen gemeinsam sind. Diese Funktion akzeptiert keine Argumente.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die Funktion `object()` gibt ein neues, leeres, funktionsloses Objekt zurück. Dieses Objekt ist die Basis für alle Klassen in Python. Es besitzt keine speziellen Attribute oder Methoden.

Obwohl Sie `object`-Instanzen erstellen können, werden Sie dies im täglichen Programmieren nicht häufig tun. Es ist eher ein grundlegender Baustein des Objektmodells von Python.

### Beispiel

```python
# Erstellen eines neuen Objekts
o = object()

# Anzeigen seines Typs
print(type(o))
```

```output
<class 'object'>
```

Hinweis: Es hat keine Attribute, die Sie setzen können. `o.name = "test"` würde einen AttributeError auslösen.

## Relevante Links

- <router-link to="/cheatsheet/oop-basics">Cheatsheet: OOP Grundlagen</router-link>
- <router-link to="/blog/python-data-types">Blog: Python Datentypen</router-link>
- <router-link to="/builtin/isinstance">isinstance()</router-link>
- <router-link to="/builtin/issubclass">issubclass()</router-link>
- <router-link to="/builtin/dir">dir()</router-link>
- <router-link to="/builtin/hasattr">hasattr()</router-link>
- <router-link to="/builtin/getattr">getattr()</router-link>
- <router-link to="/builtin/delattr">delattr()</router-link>
