---
title: 'Python ascii()-Funktion – Python Spickzettel'
description: "Gibt wie repr() eine druckbare Darstellung eines Objekts als String zurück, wobei Nicht-ASCII-Zeichen im von repr() zurückgegebenen String mithilfe von \\x, \\u oder \\U Escape-Sequenzen kodiert werden."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python ascii() eingebaute Funktion
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#ascii">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Wie <code>repr()</code> gibt eine Zeichenkette zurück, die eine druckbare Darstellung eines Objekts enthält, aber die Nicht-ASCII-Zeichen in der von <code>repr()</code> zurückgegebenen Zeichenkette mithilfe von <code>\x</code>, <code>\u</code> oder <code>\U</code> Escape-Sequenzen maskiert.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die Funktion `ascii()` in Python ist eine eingebaute Funktion, die eine Zeichenkette zurückgibt, die eine druckbare Darstellung eines Objekts enthält, ähnlich wie `repr()`. `ascii()` maskiert jedoch alle Nicht-ASCII-Zeichen mit `\x`, `\u` oder `\U` Escape-Sequenzen. Dies ist nützlich, um sicherzustellen, dass eine Zeichenkette sicher in einer nur ASCII-Umgebung verwendet werden kann.

## Beispiele

```python
# Für ein ASCII-Zeichen ist es dasselbe wie repr()
ascii('A')

# Für ein Nicht-ASCII-Zeichen wird es maskiert
ascii('ë')

# Zum Vergleich, repr() würde es nicht maskieren
repr('ë')

# Es funktioniert auch bei Iterables
ascii(['A', 'ë'])
```

```output
'A'
'\\xeb'
'ë'
['A', '\\xeb']
```

## Relevante Links

- <router-link to="/cheatsheet/manipulating-strings">Spickzettel: Zeichenketten manipulieren</router-link>
- <router-link to="/blog/python-data-types">Blog: Python Datentypen</router-link>
- <router-link to="/builtin/repr">repr()</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/bytes">bytes()</router-link>
- <router-link to="/builtin/chr">chr()</router-link>
- <router-link to="/builtin/ord">ord()</router-link>
