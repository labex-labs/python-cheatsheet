---
title: Python all() built-in function - Python Cheatsheet
description: Return True if all elements of the iterable are true (or if the iterable is empty).
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python all() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#all">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Return True if all elements of the iterable are true (or if the iterable is empty).
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `all()` function in Python is a built-in function that checks if all elements in an iterable are `True`. It returns `True` if every element evaluates to true, or if the iterable is empty. This is useful for validating conditions across a collection of items, such as checking if all numbers in a list are positive or if all required fields in a form are filled.

## Examples

```python
# All values are truthy
all([1, 2, 3])

# Contains a falsy value (0)
all([1, 0, 3])

# Contains a falsy value (empty string)
all(['a', '', 'c'])

# An empty iterable is considered True
all([])
```

Output:

```plaintext
True
False
False
True
```

## Relevant links

- <router-link to="/cheatsheet/control-flow">Cheatsheet: Control Flow</router-link>
- <router-link to="/cheatsheet/comprehensions">Cheatsheet: Comprehensions</router-link>
- <router-link to="/blog/python-data-types">Blog: Python Data Types</router-link>
- <router-link to="/builtin/any">any()</router-link>
- <router-link to="/builtin/bool">bool()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
