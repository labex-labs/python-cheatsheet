---
title: Python isinstance() built-in function - Python Cheatsheet
description: Return True if the object argument is an instance of the classinfo argument, or of a (direct, indirect, or virtual) subclass thereof. If object is not an object of the given type, the function always returns False. If classinfo is a tuple of type objects (or recursively, other such tuples) or a Union Type of multiple types, return True if object is an instance of any of the types. If classinfo is not a type or tuple of types and such tuples, a TypeError exception is raised.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python isinstance() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#isinstance">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Return True if the object argument is an instance of the classinfo argument, or of a (direct, indirect, or virtual) subclass thereof. If object is not an object of the given type, the function always returns False. If classinfo is a tuple of type objects (or recursively, other such tuples) or a Union Type of multiple types, return True if object is an instance of any of the types. If classinfo is not a type or tuple of types and such tuples, a TypeError exception is raised.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `isinstance()` function checks if an object is an instance of a particular class or a subclass of it. It returns `True` if the object is of the specified type, and `False` otherwise.

You can also check against a tuple of types.

### Examples

**Checking the type of an object:**

```python
my_list = [1, 2, 3]
print(isinstance(my_list, list))
print(isinstance(my_list, tuple))
```

```output
True
False
```

**Checking against multiple types:**

```python
print(isinstance("hello", (int, str, list)))
```

```output
True
```

```python
isinstance(1, int)
isinstance(1, str)
```

```output
True
False
```

## Relevant links

- <router-link :to="'/builtin/issubclass'">`issubclass()`</router-link>
- <router-link :to="'/builtin/type'">`type()`</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP Basics</router-link>
- <router-link :to="'/blog/python-data-types'">Python Data Types</router-link>
- <router-link :to="'/builtin/callable'">`callable()`</router-link>
