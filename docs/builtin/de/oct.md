---
title: 'Python oct()-Funktion – Python Spickzettel'
description: 'Konvertiert eine Ganzzahl in einen Oktalstring, der mit „0o“ vorangestellt ist. Das Ergebnis ist ein gültiger Python-Ausdruck. Wenn x kein Python-int-Objekt ist, muss es eine __index__()-Methode definieren, die eine Ganzzahl zurückgibt.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python oct()-Funktion (eingebaut)
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#oct">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Konvertiert eine Ganzzahl in eine oktale Zeichenkette, die mit „0o“ präfixiert ist. Das Ergebnis ist ein gültiger Python-Ausdruck. Wenn x kein Python <router-link to="/builtin/int">int</router-link>-Objekt ist, muss es eine __index__()-Methode definieren, die eine Ganzzahl zurückgibt.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die Funktion `oct()` konvertiert eine Ganzzahl in ihre oktale Darstellung. Die resultierende Zeichenkette ist mit „0o“ präfixiert, um anzuzeigen, dass es sich um eine Oktalzahl handelt.

### Beispiele

Hier sind einige Beispiele für die Verwendung von `oct()`:

```python
# Konvertiere Ganzzahlen in Oktal
print(oct(8))
print(oct(10))
print(oct(100))
print(oct(1))
print(oct(1000))
```

Ausgabe:

```plaintext
0o10
0o12
0o144
0o1
0o1750
```

## Relevante Links

- <router-link to="/blog/python-data-types">Blog: Python Datentypen</router-link>
- <router-link to="/cheatsheet/string-formatting">Spickzettel: String-Formatierung</router-link>
- <router-link to="/builtin/bin">bin()</router-link>
- <router-link to="/builtin/hex">hex()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/format">format()</router-link>
