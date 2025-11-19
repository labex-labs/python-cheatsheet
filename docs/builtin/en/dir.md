---
title: Python dir() built-in function - Python Cheatsheet
description: Without arguments, return the list of names in the current local scope. With an argument, attempt to return a list of valid attributes for that object.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python dir() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#dir">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Without arguments, return the list of names in the current local scope. With an argument, attempt to return a list of valid attributes for that object.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `dir()` function in Python is a powerful built-in function that returns a list of names in the current namespace or the attributes of a given object. It's commonly used to introspect and explore objects, modules, and classes, helping you discover the available methods, attributes, and names that you can work with.

## Syntax

```python
dir([object])
```

- `object` (optional): The object whose attributes you want to explore. If not provided, it returns the names in the current namespace.

## Exploring Names in the Current Namespace

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

## Exploring Module Attributes

```python
import math
print(dir(math))
```

```output
['__doc__', '__loader__', '__name__', '__package__', '__spec__', 'acos', 'acosh', 'asin', ... ]
```

## Exploring Object Attributes

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

## Using `dir()` with Built-in Types

```python
my_list = [1, 2, 3]
print(dir(my_list))
```

```output
[..., 'append', 'clear', 'copy', 'count', 'extend', 'index', 'insert', 'pop', 'remove', 'reverse', 'sort']
```

## Filtering `dir()` Output

```python
import math
print([name for name in dir(math) if not name.startswith("__")])
```

```output
['acos', 'acosh', 'asin', 'asinh', 'atan', 'atan2', ... ]
```

## Relevant links

- <router-link :to="'/builtin/globals'">`globals()`</router-link>
- <router-link :to="'/builtin/locals'">`locals()`</router-link>
- <router-link :to="'/builtin/hasattr'">`hasattr()`</router-link>
- <router-link :to="'/builtin/getattr'">`getattr()`</router-link>
- <router-link :to="'/cheatsheet/debugging'">Debugging</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP Basics</router-link>
