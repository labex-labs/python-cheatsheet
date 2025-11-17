---
title: 'Python hex()-Funktion – Python Spickzettel'
description: 'Konvertiert eine Ganzzahl in einen hexadezimalen String in Kleinbuchstaben, vorangestellt mit „0x“. Wenn x kein Python-int-Objekt ist, muss es eine __index__()-Methode definieren, die eine Ganzzahl zurückgibt.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python eingebaute Funktion hex()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#hex">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Konvertiert eine Ganzzahl in eine klein geschriebene hexadezimale Zeichenkette, die mit „0x“ vorangestellt ist. Wenn x kein Python int Objekt ist, muss es eine __index__() Methode definieren, die eine Ganzzahl zurückgibt.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die `hex()` Funktion in Python ist eine eingebaute Funktion, die eine Ganzzahl in ihre entsprechende hexadezimale Darstellung umwandelt. Die resultierende Zeichenkette wird mit „0x“ vorangestellt, um anzuzeigen, dass es sich um einen hexadezimalen Wert handelt. Diese Funktion ist nützlich, wenn Sie mit hexadezimalen Zahlen arbeiten müssen, die in der Low-Level-Programmierung üblich sind, beispielsweise bei der Arbeit mit Speicheradressen oder Farbcodes.

## Beispiele

```python
hex(1)
hex(10)
hex(100)
hex(1000)
```

Ausgabe:

```plaintext
'0x1'
'0xa'
'0x64'
'0x3e8'
```

## Relevante Links

- <router-link :to="'/builtin/bin'">bin()</router-link>
- <router-link :to="'/builtin/int'">int()</router-link>
- <router-link :to="'/builtin/oct'">oct()</router-link>
- <router-link :to="'/cheatsheet/string-formatting'">String Formatierung</router-link>
- <router-link :to="'/blog/python-data-types'">Python Datentypen</router-link>
- <router-link :to="'/builtin/format'">format()</router-link>
