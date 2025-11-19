---
title: Python hasattr() built-in function - Python Cheatsheet
description: The arguments are an object and a string. The result is True if the string is the name of one of the object’s attributes, False if not. (This is implemented by calling getattr(object, name) and seeing whether it raises an AttributeError or not.)
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python hasattr() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#hasattr">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   The arguments are an object and a string. The result is True if the string is the name of one of the object’s attributes, False if not. (This is implemented by calling <router-link to="/builtin/getattr">getattr(object, name)</router-link> and seeing whether it raises an AttributeError or not.)
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `hasattr()` function checks if an object has a given attribute. It takes the object and the attribute name (as a string) as arguments and returns `True` if the attribute exists, and `False` otherwise.

### Example

```python
class Person:
    name = "John"
    age = 30

p = Person()

print(hasattr(p, 'name'))
print(hasattr(p, 'age'))
print(hasattr(p, 'email'))
```

```output
True
True
False
```

## Relevant links

- <router-link :to="'/builtin/getattr'">`getattr()`</router-link>
- <router-link :to="'/builtin/setattr'">`setattr()`</router-link>
- <router-link :to="'/builtin/delattr'">`delattr()`</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP Basics</router-link>
- <router-link :to="'/builtin/dir'">`dir()`</router-link>
