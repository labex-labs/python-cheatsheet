---
title: 'Python abs()-Funktion: Absolute Werte berechnen'
description: 'Gibt den Absolutwert einer Zahl zurück. Das Argument kann eine Ganzzahl, eine Gleitkommazahl oder ein Objekt sein, das __abs__() implementiert. Bei einer komplexen Zahl wird deren Betrag zurückgegeben.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python abs() eingebaute Funktion
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#abs">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Gibt den Absolutwert einer Zahl zurück. Das Argument kann eine ganze Zahl, eine Gleitkommazahl oder ein Objekt sein, das <code>__abs__()</code> implementiert. Wenn das Argument eine komplexe Zahl ist, wird deren Betrag zurückgegeben.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die `abs()` Funktion in Python ist eine eingebaute Funktion, die den Absolutwert einer Zahl zurückgibt. Sie kann Ganzzahlen, Gleitkommazahlen und sogar komplexe Zahlen verarbeiten (wobei deren Betrag zurückgegeben wird). Diese Funktion ist nützlich, wenn Sie sicherstellen müssen, dass ein Wert unabhängig von seinem ursprünglichen Vorzeichen positiv ist.

### Beispiele

```python
# Für Ganzzahlen
abs(-1)
abs(0)

# Für Gleitkommazahlen
abs(-3.14)

# Für komplexe Zahlen (gibt den Betrag zurück)
abs(3 + 4j)

# Für andere Zahlensysteme
abs(0x10)  # Hexadezimal
abs(0b10)  # Binär
abs(0o20)  # Oktal
```

```output
1
0
3.14
5.0
16
2
16
```

## Relevante Links

- <router-link to="/blog/python-data-types">Blog: Python Datentypen</router-link>
- <router-link to="/builtin/pow">pow()</router-link>
- <router-link to="/builtin/round">round()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/float">float()</router-link>
- <router-link to="/builtin/complex">complex()</router-link>
