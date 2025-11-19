---
title: 'Python str()-Funktion – Python Spickzettel'
description: 'Gibt eine String-Version des Objekts zurück. Wenn kein Objekt angegeben ist, wird ein leerer String zurückgegeben. Andernfalls hängt das Verhalten von str() davon ab, ob Kodierung oder Fehler angegeben sind.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python str() eingebaute Funktion
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#func-str">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Gibt eine String-Version des Objekts zurück. Wenn kein Objekt angegeben wird, wird ein leerer String zurückgegeben. Andernfalls hängt das Verhalten von str() davon ab, ob Kodierung oder Fehler angegeben werden.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die `str()` Funktion in Python ist eine eingebaute Funktion, die eine String-Version eines Objekts zurückgibt. Wenn kein Objekt angegeben wird, gibt sie einen leeren String zurück. Es ist eine vielseitige Funktion zur Konvertierung anderer Datentypen in Strings.

## Beispiele

```python
# transform an integer to a string
from_integer = str(29)
print(from_integer)
print(type(from_integer))
```

```output
29
<class 'str'>
```

```python
# transform a float to string
from_float = str(-3.14)
print(from_float)
print(type(from_float))
```

```output
-3.14
<class 'str'>
```

```python
# return an empty string
str()
```

```output
''
```

## Relevante Links

- <router-link to="/cheatsheet/manipulating-strings">Cheatsheet: Zeichenketten bearbeiten</router-link>
- <router-link to="/cheatsheet/string-formatting">Cheatsheet: String-Formatierung</router-link>
- <router-link to="/blog/python-data-types">Blog: Python Datentypen</router-link>
- <router-link to="/builtin/repr">repr()</router-link>
- <router-link to="/builtin/ascii">ascii()</router-link>
- <router-link to="/builtin/bytes">bytes()</router-link>
- <router-link to="/builtin/format">format()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/float">float()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/set">set()</router-link>
