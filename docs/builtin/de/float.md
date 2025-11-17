---
title: 'Python float()-Funktion – Python Spickzettel'
description: 'Gibt eine Gleitkommazahl zurück, die aus einer Zahl oder einem String x erstellt wurde.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python float() eingebaute Funktion
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#float">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Gibt eine Gleitkommazahl zurück, die aus einer Zahl oder einem String x erstellt wurde.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die `float()` Funktion in Python ist eine eingebaute Funktion, mit der Sie eine Zahl oder einen String, der eine Zahl enthält, in eine Gleitkommazahl umwandeln können. Dies ist besonders nützlich, wenn Sie arithmetische Operationen durchführen müssen, die Dezimalgenauigkeit erfordern.

Die <router-link to="/builtin/float">float()</router-link> Funktion gibt eine Gleitkommazahl von einer Zahl oder einem String zurück.

## Beispiele

```python
float('10')
float(10)
```

Ausgabe:

```plaintext
10.0
10.0
```

## Relevante Links

- <router-link :to="'/builtin/int/'">int()</router-link>
- <router-link :to="'/builtin/complex/'">complex()</router-link>
- <router-link :to="'/blog/python-data-types/'">Python Datentypen</router-link>
- <router-link :to="'/builtin/str'">str()</router-link>
- <router-link :to="'/builtin/round'">round()</router-link>
- <router-link :to="'/cheatsheet/string-formatting'">String-Formatierung</router-link>
