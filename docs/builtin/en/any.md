---
title: Python any() built-in function - Python Cheatsheet
description: Return True if any element of the iterable is true. If the iterable is empty, return False.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python any() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#any">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Return True if any element of the iterable is true. If the iterable is empty, return False.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `any()` function in Python is a built-in function that checks if at least one element in an iterable is `True`. It returns `True` if any element evaluates to true, and `False` if the iterable is empty or all elements are false. This is useful for quickly determining if a condition is met by any item in a collection.

## Examples

```python
# All values are falsy
any([0, '', False])

# Contains one truthy value (2)
any([0, 2, False])

# An empty iterable is considered False
any([])
```

```output
False
True
False
```

## Relevant links

- <router-link to="/cheatsheet/control-flow">Cheatsheet: Control Flow</router-link>
- <router-link to="/cheatsheet/comprehensions">Cheatsheet: Comprehensions</router-link>
- <router-link to="/blog/python-data-types">Blog: Python Data Types</router-link>
- <router-link to="/builtin/all">all()</router-link>
- <router-link to="/builtin/bool">bool()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
