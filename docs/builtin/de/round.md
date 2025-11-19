---
title: 'Python round()-Funktion – Python Spickzettel'
description: 'Gibt die auf ndigits Nachkommastellen gerundete Zahl zurück. Wenn ndigits weggelassen wird oder None ist, wird die nächste ganze Zahl zum Eingabewert zurückgegeben.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python round() eingebaute Funktion
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#round">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Gibt die Zahl auf die angegebene Anzahl von Dezimalstellen gerundet zurück. Wenn ndigits weggelassen wird oder None ist, gibt sie die ganze Zahl zurück, die der Eingabe am nächsten liegt.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die Funktion `round()` rundet eine Zahl auf eine angegebene Anzahl von Dezimalstellen. Wenn die Anzahl der Dezimalstellen nicht angegeben ist, wird auf die nächste ganze Zahl gerundet.

Beachten Sie, dass `round()` bei Zahlen, die auf .5 enden, "Runden zur nächsten geraden Zahl" verwendet, was bedeutet, dass auf die nächste gerade ganze Zahl gerundet wird.

### Beispiele

```python
# Auf die nächste ganze Zahl runden
print(round(3.14))
print(round(3.8))

# Auf eine angegebene Anzahl von Dezimalstellen runden
print(round(3.14159, 2))

# "Runden zur nächsten geraden Zahl"
print(round(2.5))
print(round(3.5))
```

```output
3
4
3.14
2
4
```

## Relevante Links

- <router-link to="/blog/python-data-types">Blog: Python Datentypen</router-link>
- <router-link to="/cheatsheet/string-formatting">Spickzettel: String-Formatierung</router-link>
- <router-link to="/builtin/format">format()</router-link>
- <router-link to="/builtin/abs">abs()</router-link>
- <router-link to="/builtin/float">float()</router-link>
- <router-link to="/builtin/int">int()</router-link>
