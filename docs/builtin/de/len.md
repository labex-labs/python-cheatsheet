---
title: 'Python len()-Funktion – Python Spickzettel'
description: 'Gibt die Länge (Anzahl der Elemente) eines Objekts zurück. Das Argument kann eine Sequenz (wie String, Bytes, Tupel, Liste oder Range) oder eine Sammlung (wie Dictionary, Set oder Frozenset) sein.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python len()-Built-in-Funktion
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#len">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Gibt die Länge (die Anzahl der Elemente) eines Objekts zurück. Das Argument kann eine Sequenz (wie eine Zeichenkette, Bytes, <router-link to="/builtin/tuple">tuple</router-link>, <router-link to="/builtin/list">list</router-link> oder <router-link to="/builtin/range">range</router-link>) oder eine Sammlung (wie ein <router-link to="/builtin/dict">dictionary</router-link>, <router-link to="/builtin/set">set</router-link> oder <router-link to="/builtin/frozenset">frozenset</router-link>) sein.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die `len()`-Funktion in Python ist eine eingebaute Funktion, die die Anzahl der Elemente (Länge) eines Objekts zurückgibt. Das Objekt kann eine Sequenz (wie eine Zeichenkette, Liste, Tupel) oder eine Sammlung (wie ein Wörterbuch oder eine Menge) sein.

## Beispiel

Gibt die Anzahl der Elemente eines Objekts zurück:

```python
len('hello')
len(['cat', 3, 'dog'])
```

Ausgabe:

```plaintext
5
3
```

## Test auf Leerheit

<base-warning>
  <base-warning-title>Test auf Leerheit</base-warning-title>
    <base-warning-content>
      Tests auf Leerheit von Zeichenketten, Listen, Wörterbüchern usw. sollten nicht
    <code>len</code> verwenden, sondern die direkte boolesche Auswertung bevorzugen.
  </base-warning-content>
</base-warning>

```python
a = [1, 2, 3]

# schlecht
if len(a) > 0:  # ergibt True
    print("the list is not empty!")

# gut
if a:  # ergibt True
    print("the list is not empty!")
```

Ausgabe:

```plaintext
the list is not empty!
the list is not empty!
```

## Relevante Links

- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: Listen und Tupel</router-link>
- <router-link to="/cheatsheet/dictionaries">Cheatsheet: Wörterbücher</router-link>
- <router-link to="/cheatsheet/sets">Cheatsheet: Mengen</router-link>
- <router-link to="/blog/python-data-types">Blog: Python Datentypen</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/set">set()</router-link>
