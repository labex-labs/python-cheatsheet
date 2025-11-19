---
title: 'Python dir()-Funktion – Python Spickzettel'
description: 'Ohne Argumente: Gibt die Namen im aktuellen lokalen Gültigkeitsbereich zurück. Mit Argument: Versucht, eine Liste gültiger Attribute für das Objekt zurückzugeben.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python dir() eingebaute Funktion
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#dir">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Ohne Argumente gibt die Liste der Namen im aktuellen lokalen Gültigkeitsbereich zurück. Mit einem Argument wird versucht, eine Liste gültiger Attribute für dieses Objekt zurückzugeben.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die `dir()` Funktion in Python ist eine leistungsstarke eingebaute Funktion, die eine Liste von Namen im aktuellen Namensraum oder die Attribute eines gegebenen Objekts zurückgibt. Sie wird häufig verwendet, um Objekte, Module und Klassen zu introspektieren und zu untersuchen, und hilft Ihnen dabei, die verfügbaren Methoden, Attribute und Namen zu entdecken, mit denen Sie arbeiten können.

## Syntax

```python
dir([object])
```

- `object` (optional): Das Objekt, dessen Attribute Sie untersuchen möchten. Wenn es nicht angegeben wird, gibt es die Namen im aktuellen Namensraum zurück.

## Untersuchen von Namen im aktuellen Namensraum

```python
a = 10
b = "Hello"
def my_function():
    pass

print(dir())
```

```output
['__annotations__', '__builtins__', '__doc__', '__loader__', '__name__', '__package__', '__spec__', 'a', 'b', 'my_function']
```

## Untersuchen von Modulattributen

```python
import math
print(dir(math))
```

```output
['__doc__', '__loader__', '__name__', '__package__', '__spec__', 'acos', 'acosh', 'asin', '... ]
```

## Untersuchen von Objektattributen

```python
class MyClass:
    def __init__(self):
        self.x = 5
        self.y = "Hello"

obj = MyClass()
print(dir(obj))
```

```output
['__class__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', ... 'x', 'y']
```

## Verwendung von `dir()` mit eingebauten Typen

```python
my_list = [1, 2, 3]
print(dir(my_list))
```

```output
[..., 'append', 'clear', 'copy', 'count', 'extend', 'index', 'insert', 'pop', 'remove', 'reverse', 'sort']
```

## Filtern der `dir()` Ausgabe

```python
import math
print([name for name in dir(math) if not name.startswith("__")])
```

```output
['acos', 'acosh', 'asin', 'asinh', 'atan', 'atan2', ... ]
```

## Relevante Links

- <router-link :to="'/builtin/globals'">`globals()`</router-link>
- <router-link :to="'/builtin/locals'">`locals()`</router-link>
- <router-link :to="'/builtin/hasattr'">`hasattr()`</router-link>
- <router-link :to="'/builtin/getattr'">`getattr()`</router-link>
- <router-link :to="'/cheatsheet/debugging'">Debugging</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP Basics</router-link>
