---
title: 'Python complex()-Funktion – Python Spickzettel'
description: 'Gibt eine komplexe Zahl mit dem Wert real + imag*1j zurück oder konvertiert eine Zeichenfolge oder Zahl in eine komplexe Zahl. [...] Jedes Argument kann jeder numerische Typ sein (einschließlich komplex). Wenn imag weggelassen wird, ist der Standardwert Null und der Konstruktor dient als numerische Konvertierung wie int und float. Wenn beide Argumente weggelassen werden, wird 0j zurückgegeben.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python complex() eingebaute Funktion
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#complex">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Gibt eine komplexe Zahl mit dem Wert real + imag*1j zurück oder konvertiert einen String oder eine Zahl in eine komplexe Zahl. [...] Jedes Argument kann jeder numerische Typ sein (einschließlich komplex). Wenn imag weggelassen wird, ist der Standardwert Null und der Konstruktor dient als numerische Konvertierung wie <router-link to="/builtin/int">`int()`</router-link> und <router-link to="/builtin/float">`float()`</router-link>. Wenn beide Argumente weggelassen werden, wird 0j zurückgegeben.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die Funktion `complex()` erstellt eine komplexe Zahl. Sie kann einen Realteil und einen Imaginärteil als Argumente entgegennehmen. Wenn nur ein Argument angegeben wird, wird es als Realteil betrachtet und der Imaginärteil ist Null.

## Beispiele

```python
# Erstellen einer komplexen Zahl mit Real- und Imaginärteil
print(complex(3, 4))

# Erstellen einer komplexen Zahl nur mit einem Realteil
print(complex(5))

# Erstellen einer komplexen Zahl aus einem String
print(complex("2+3j"))
```

```output
(3+4j)
(5+0j)
(2+3j)
```

## Relevante Links

- <router-link to="/blog/python-data-types">Blog: Python Datentypen</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/float">float()</router-link>
- <router-link to="/builtin/abs">abs()</router-link>
- <router-link to="/builtin/pow">pow()</router-link>
