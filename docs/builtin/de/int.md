---
title: 'Python int()-Funktion – Python Spickzettel'
description: 'Gibt ein Ganzzahl-Objekt zurück, das aus einer Zahl oder Zeichenkette x erstellt wurde, oder 0, wenn keine Argumente angegeben sind.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python int() eingebaute Funktion
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#int">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Gibt ein ganzzahliges Objekt zurück, das aus einer Zahl oder einem String x erstellt wurde, oder gibt 0 zurück, wenn keine Argumente angegeben werden.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die `int()` Funktion in Python ist eine eingebaute Funktion, mit der Sie einen Wert in eine Ganzzahl umwandeln können. Sie kann einen String oder eine Zahl als Argument entgegennehmen und gibt das ganzzahlige Äquivalent zurück. Dies ist besonders nützlich, wenn Sie mathematische Operationen durchführen müssen, die ganze Zahlen erfordern, oder wenn Sie sicherstellen müssen, dass ein Wert vom Typ Ganzzahl ist.

## Beispiele

```python
# transform a string to an integer
from_integer = int('29')
print(from_integer)
print(type(from_integer))
```

Ausgabe:

```plaintext
29
<class 'int'>
```

```python
# transform a float to integer
from_float = int(-3.14)
print(from_float)
print(type(from_float))
```

Ausgabe:

```plaintext
-3
<class 'int'>
```

```python
# return 0 if no arguments are given
int()
```

Ausgabe:

```plaintext
0
```

## Relevante Links

- <router-link :to="'/builtin/float'">float()</router-link>
- <router-link :to="'/builtin/str'">str()</router-link>
- <router-link :to="'/builtin/hex'">hex()</router-link>
- <router-link :to="'/builtin/oct'">oct()</router-link>
- <router-link :to="'/builtin/bin'">bin()</router-link>
- <router-link :to="'/blog/python-data-types'">Python Datentypen</router-link>
- <router-link :to="'/builtin/bool'">bool()</router-link>
- <router-link :to="'/builtin/complex'">complex()</router-link>
