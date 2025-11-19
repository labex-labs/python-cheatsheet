---
title: 'Python ord()-Funktion – Python Spickzettel'
description: 'Gibt bei einem String, der ein Unicode-Zeichen darstellt, die Ganzzahl des Unicode-Codepunkts dieses Zeichens zurück.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python ord() eingebaute Funktion
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#ord">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Gibt bei einem String, der ein Unicode-Zeichen darstellt, eine ganze Zahl zurück, die den Unicode-Codepunkt dieses Zeichens darstellt.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die Funktion `ord()` ist die Umkehrung von <router-link to="/builtin/chr">chr()</router-link>. Sie nimmt einen einzelnen Zeichen-String entgegen und gibt dessen Unicode-Codepunkt als ganze Zahl zurück.

### Beispiele

```python
# Den Unicode-Codepunkt eines Zeichens abrufen
print(ord('A'))
print(ord('€'))
print(ord('1'))
print(ord('a'))
```

```output
65
8364
49
97
```

## Relevante Links

- <router-link to="/cheatsheet/manipulating-strings">Spickzettel: Strings bearbeiten</router-link>
- <router-link to="/blog/python-data-types">Blog: Python Datentypen</router-link>
- <router-link to="/builtin/chr">chr()</router-link>
- <router-link to="/builtin/ascii">ascii()</router-link>
