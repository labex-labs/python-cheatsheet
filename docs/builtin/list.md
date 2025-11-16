---
title: Python list() built-in function - Python Cheatsheet
description: Rather than being a function, list is actually a mutable sequence type, as documented in Lists and Sequence Types — list, tuple, range.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python list() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#list">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Rather than being a function, list is actually a mutable sequence type, as documented in Lists and Sequence Types — <router-link to="/builtin/list">list</router-link>, <router-link to="/builtin/tuple">tuple</router-link>, <router-link to="/builtin/range">range</router-link>.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

In Python, `list` is not a function but a built-in mutable sequence type. This means it's a data structure that can hold an ordered collection of items, and you can change its contents. You can create a list using square brackets `[]` or the `list()` constructor.

## Examples

```python
l = list()
print(l)
l.append(1)
l.append(2)
print(l)
```

Output:

```plaintext
[]
[1, 2]
```

## Relevant links

- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: Lists and Tuples</router-link>
- <router-link to="/cheatsheet/comprehensions">Cheatsheet: Comprehensions</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">Blog: Python Comprehensions Step-by-Step</router-link>
- <router-link to="/blog/python-data-types">Blog: Python Data Types</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/len">len()</router-link>
