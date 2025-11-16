---
title: Python issubclass() built-in function - Python Cheatsheet
description: Return True if class is a subclass (direct, indirect, or virtual) of classinfo. A class is considered a subclass of itself. classinfo may be a tuple of class objects (or recursively, other such tuples) or a Union Type, in which case return True if class is a subclass of any entry in classinfo. In any other case, a TypeError exception is raised.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python issubclass() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#issubclass">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Return True if class is a subclass (direct, indirect, or virtual) of classinfo. A class is considered a subclass of itself. classinfo may be a tuple of class objects (or recursively, other such tuples) or a Union Type, in which case return True if class is a subclass of any entry in classinfo. In any other case, a TypeError exception is raised.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `issubclass()` function in Python is a built-in function that checks if a given class is a subclass of another class or a tuple of classes. It returns `True` if the first argument is a subclass of the second argument, and `False` otherwise. This function is useful for object-oriented programming, as it allows you to verify class relationships and implement polymorphic behavior based on inheritance.

## Examples

```python
class First:
    pass

class Second(First):
    pass

print(issubclass(Second, First))
print(issubclass(First, Second))
```

Output:

```plaintext
True
False
```

## Relevant links

- <router-link :to="'/builtin/isinstance'">`isinstance()`</router-link>
- <router-link :to="'/builtin/type'">`type()`</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP Basics</router-link>
- <router-link :to="'/builtin/object'">`object()`</router-link>
