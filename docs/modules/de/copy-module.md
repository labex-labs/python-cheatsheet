---
title: 'Python Copy Modul - Python Spickzettel'
description: 'Das Copy-Modul bietet Funktionen zum Kopieren verschiedener Elemente wie Listen, Objekte oder Arrays. Es ermöglicht sowohl flache (Shallow) als auch tiefe (Deep) Kopien.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Copy Modul
</base-title>

Das Copy Modul ist eine Sammlung von Funktionen, die sich auf das Kopieren verschiedener Elemente einer Liste, von Objekten, Arrays usw. beziehen. Es kann verwendet werden, um flache Kopien (shallow copies) sowie tiefe Kopien (deep copies) zu erstellen.

<base-disclaimer>
  <base-disclaimer-title>
    Aus der Python 3 <a target="_blank" href="https://docs.python.org/3/library/copy.html">Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Zuweisungsanweisungen in Python kopieren keine Objekte, sie erstellen Bindungen zwischen einem Ziel und einem Objekt. Für Sammlungen, die veränderbar sind oder veränderbare Elemente enthalten, ist manchmal eine Kopie erforderlich, damit man eine Kopie ändern kann, ohne die andere zu verändern. Dieses Modul bietet generische <b>shallow</b> (flache) und <b>deep</b> (tiefe) Kopiervorgänge.
  </base-disclaimer-content>
</base-disclaimer>

## Shallow copy operations (Flache Kopieroperationen)

Eine flache Kopie konstruiert ein neues zusammengesetztes Objekt und fügt dann (soweit möglich) Referenzen auf die im Original gefundenen Objekte ein.

copy.copy(x)
Gibt eine flache Kopie von x zurück.

```python
import copy
a = [[1],[2],[3]]
# Erstellt flache Kopie (verschachtelte Listen werden immer noch referenziert)
b = copy.copy(a)

a
```

Output:

```plaintext
[[1], [2], [3]]
```

```python
b
```

Output:

```plaintext
[[1], [2], [3]]
```

### Ohne Import des copy Moduls kann es nicht verwendet werden

Output:

```plaintext
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'copy' is not defined
```

## Deep copy operations (Tiefe Kopieroperationen)

Eine tiefe Kopie konstruiert ein neues zusammengesetztes Objekt und fügt dann rekursiv Kopien der im Original gefundenen Objekte ein.

copy.deepcopy(x[, memo])
Gibt eine tiefe Kopie von x zurück.

```python
import copy
a = [[1],[2],[3]]
# Erstellt tiefe Kopie (vollständig unabhängige Kopie)
b = copy.deepcopy(a)

# Original modifizieren
a[0][0] = 0
a[1] = None

a
```

Output:

```plaintext
[[0], None, [3]]
```

```python
b
```

Output:

```plaintext
[[1], [2], [3]]
```

## Relevant links (Relevante Links)

- <router-link to="/cheatsheet/oop-basics">Cheatsheet: OOP Basics</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: Listen und Tupel</router-link>
- <router-link to="/cheatsheet/dictionaries">Cheatsheet: Dictionaries</router-link>
- <router-link to="/blog/python-data-types">Blog: Python Datentypen</router-link>
- <router-link to="/builtin/object">object()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/slice">slice()</router-link>
