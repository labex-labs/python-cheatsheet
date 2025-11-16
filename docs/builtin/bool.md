---
title: Python bool() built-in function - Python Cheatsheet
description: Return a Boolean value, i.e. one of True or False. x is converted using the standard truth testing procedure. If x is false or omitted, this returns False; otherwise, it returns True. The bool class is a subclass of int. It cannot be subclassed further. Its only instances are False and True.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python bool() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#bool">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Return a Boolean value, True or False. x is converted using the standard truth testing procedure. If x is false or omitted, this returns False; otherwise, it returns True. The bool class is a subclass of int. It cannot be subclassed further. Its only instances are False and True.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `bool()` function in Python is a built-in function that converts a value to a Boolean (`True` or `False`). It follows the standard truth testing procedure, where values like `0`, `None`, and empty collections are considered `False`, while most other values are `True`. This is fundamental for controlling the flow of your program with conditional statements.

## Examples

### Falsy Values

These values are considered `False`:

```python
bool(False)
bool(None)
bool(0)
bool(0.0)
bool('')      # empty string
bool([])      # empty list
bool({})      # empty dict
bool(set())   # empty set
```

Output:

```plaintext
False
False
False
False
False
False
False
False
```

### Truthy Values

Most other values are considered `True`:

```python
bool(True)
bool(1)
bool(-1)
bool('hello')
bool([1, 2])
bool({'a': 1})
```

Output:

```plaintext
True
True
True
True
True
True
```

## Relevant links

- <router-link to="/cheatsheet/control-flow">Cheatsheet: Control Flow</router-link>
- <router-link to="/blog/python-data-types">Blog: Python Data Types</router-link>
- <router-link to="/builtin/all">all()</router-link>
- <router-link to="/builtin/any">any()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/str">str()</router-link>
