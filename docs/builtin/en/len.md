---
title: Python len() built-in function - Python Cheatsheet
description: Return the length (the number of items) of an object. The argument may be a sequence (such as a string, bytes, tuple, list, or range) or a collection (such as a dictionary, set, or frozen set).
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python len() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#len">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Return the length (the number of items) of an object. The argument may be a sequence (such as a string, bytes, <router-link to="/builtin/tuple">tuple</router-link>, <router-link to="/builtin/list">list</router-link>, or <router-link to="/builtin/range">range</router-link>) or a collection (such as a <router-link to="/builtin/dict">dictionary</router-link>, <router-link to="/builtin/set">set</router-link>, or <router-link to="/builtin/frozenset">frozen set</router-link>).
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `len()` function in Python is a built-in function that returns the number of items (length) in an object. The object can be a sequence (like a string, list, tuple) or a collection (like a dictionary or set).

## Example

Return the the number of items of an object:

```python
len('hello')
len(['cat', 3, 'dog'])
```

```output
5
3
```

## Test of emptiness

<base-warning>
  <base-warning-title>Test of emptiness</base-warning-title>
    <base-warning-content>
      Test of emptiness of strings, lists, dictionaries, etc., should not use
    <code>len</code>, but prefer direct boolean evaluation.
  </base-warning-content>
</base-warning>

```python
a = [1, 2, 3]

# bad
if len(a) > 0:  # evaluates to True
    print("the list is not empty!")

# good
if a:  # evaluates to True
    print("the list is not empty!")
```

```output
the list is not empty!
the list is not empty!
```

## Relevant links

- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: Lists and Tuples</router-link>
- <router-link to="/cheatsheet/dictionaries">Cheatsheet: Dictionaries</router-link>
- <router-link to="/cheatsheet/sets">Cheatsheet: Sets</router-link>
- <router-link to="/blog/python-data-types">Blog: Python Data Types</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/set">set()</router-link>
