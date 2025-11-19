---
title: 'Python bin()-Funktion – Python Spickzettel'
description: 'Konvertiert eine Ganzzahl in einen binären String, dem „0b“ vorangestellt ist. Das Ergebnis ist ein gültiger Python-Ausdruck. Wenn x kein Python-int-Objekt ist, muss es eine __index__()-Methode definieren, die eine Ganzzahl zurückgibt.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python eingebaute Funktion bin()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#bin">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Konvertiert eine Ganzzahl in eine binäre Zeichenkette, der „0b“ vorangestellt ist. Das Ergebnis ist ein gültiger Python-Ausdruck. Wenn x kein Python int-Objekt ist, muss es eine <code>__index__()</code> Methode definieren, die eine Ganzzahl zurückgibt.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die Funktion `bin()` konvertiert eine Ganzzahl in ihre binäre Darstellung. Die resultierende Zeichenkette ist mit „0b“ präfixiert, um anzuzeigen, dass es sich um eine Binärzahl handelt.

### Beispiele

Hier sind einige Beispiele für die Verwendung von `bin()`:

```python
# Convert integers to binary
print(bin(2))
print(bin(7))
print(bin(1))
print(bin(10))
print(bin(100))
print(bin(1000))
```

```output
0b10
0b111
0b1
0b1010
0b1100100
0b1111101000
```

## Relevante Links

- <router-link to="/blog/python-data-types">Blog: Python Datentypen</router-link>
- <router-link to="/cheatsheet/string-formatting">Spickzettel: String-Formatierung</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/hex">hex()</router-link>
- <router-link to="/builtin/oct">oct()</router-link>
- <router-link to="/builtin/format">format()</router-link>
