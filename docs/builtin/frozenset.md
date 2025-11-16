---
title: Python frozenset() built-in function - Python Cheatsheet
description: Return a new frozenset object, optionally with elements taken from iterable. frozenset is a built-in class. See frozenset and Set Types — set, frozenset for documentation about this class.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python frozenset() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#frozenset">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Return a new frozenset object, optionally with elements taken from iterable. <router-link to="/builtin/frozenset">frozenset</router-link> is a built-in class. See <router-link to="/builtin/frozenset">frozenset</router-link> and Set Types — <router-link to="/builtin/set">set</router-link>, <router-link to="/builtin/frozenset">frozenset</router-link> for documentation about this class.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `frozenset()` function in Python is a built-in function that creates an immutable, hashable set from an iterable. Unlike a regular `set`, a `frozenset` cannot be modified after its creation, which means you cannot add or remove elements. This immutability makes it suitable for use as a dictionary key or as an element in another set.

## Examples

```python
frozenset([1, 2, 3])
frozenset({1, 2, 3})
frozenset((1, 2, 3))
```

Output:

```plaintext
frozenset({1, 2, 3})
frozenset({1, 2, 3})
frozenset({1, 2, 3})
```

## Relevant links

- <router-link :to="'/builtin/set'">`set()`</router-link>
- <router-link :to="'/cheatsheet/sets'">Sets</router-link>
- <router-link :to="'/blog/python-sets-what-why-how'">Python Sets: What, Why, and How</router-link>
- <router-link :to="'/builtin/tuple'">`tuple()`</router-link>
- <router-link :to="'/builtin/hash'">`hash()`</router-link>
