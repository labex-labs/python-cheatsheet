---
title: 'Python chr()-Funktion – Python Spickzettel'
description: "Gibt den String zurück, der das Zeichen mit dem Unicode-Codepunkt i darstellt. chr(97) gibt 'a' zurück, chr(8364) gibt '€' zurück. Dies ist die Umkehrung von ord()."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python chr()-Funktion (eingebaut)
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#chr">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Gibt den String zurück, der ein Zeichen darstellt, dessen Unicode-Codepunkt die ganze Zahl i ist. Zum Beispiel gibt chr(97) den String 'a' zurück, während chr(8364) den String '€' zurückgibt. Dies ist die Umkehrung von ord().
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die `chr()`-Funktion in Python ist eine eingebaute Funktion, die eine ganze Zahl als Argument entgegennimmt und einen String zurückgibt, der das entsprechende Unicode-Zeichen darstellt.

Die an die `chr()`-Funktion übergebene ganze Zahl sollte im Bereich von 0 bis 65535 liegen, was dem Bereich gültiger Unicode-Zeichen entspricht.

```python
print(chr(97))
print(chr(65))
print(chr(120))
```

Ausgabe:

```plaintext
a
A
x
```

Die `chr()`-Funktion ist die Umkehrung der `ord()`-Funktion, die ein einzelnes Zeichen als Argument entgegennimmt und die entsprechende ganze Zahl zurückgibt.

```python
print(ord('a'))
print(ord('A'))
print(ord('x'))
```

Ausgabe:

```plaintext
97
65
120
```

Die `chr()`-Funktion kann nützlich sein, wenn man mit Text- und Zeichendaten arbeitet, insbesondere beim Umgang mit Unicode-Zeichen. Sie können sie beispielsweise verwenden, um eine ganze Zahl, die einen Unicode-Codepunkt darstellt, in das entsprechende Zeichen umzuwandeln, oder um einen String von Zeichen aus einem Bereich von ganzen Zahlen zu generieren.

## Relevante Links

- <router-link :to="'/builtin/ord'">ord()</router-link>
- <router-link :to="'/builtin/ascii'">ascii()</router-link>
- <router-link :to="'/cheatsheet/manipulating-strings'">Strings manipulieren</router-link>
- <router-link :to="'/blog/python-data-types'">Python Datentypen</router-link>
