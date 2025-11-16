---
title: Python set() built-in function - Python Cheatsheet
description: Return a new set object, optionally with elements taken from iterable. set is a built-in class. See set and Set Types — set, frozenset for documentation about this class.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python set() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#set">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Return a new set object, optionally with elements taken from iterable. set is a built-in class. See <router-link to="/cheatsheet/sets">set</router-link> and Set Types — set, frozenset for documentation about this class.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `set()` constructor creates a new set. A set is an unordered collection of unique elements. You can create an empty set, or create a set from an iterable.

### Examples

**Create an empty set:**

```python
my_set = set()
print(my_set)
```

Output:

```plaintext
set()
```

**Create a set from a list (duplicates are removed):**

```python
my_list = [1, 2, 2, 3, 3, 3]
my_set = set(my_list)
print(my_set)
```

Output:

```plaintext
{1, 2, 3}
```

## Relevant links

- <router-link to="/cheatsheet/sets">Cheatsheet: Sets</router-link>
- <router-link to="/cheatsheet/comprehensions">Cheatsheet: Comprehensions</router-link>
- <router-link to="/blog/python-sets-what-why-how">Blog: Python Sets - What, Why, How</router-link>
- <router-link to="/blog/python-data-types">Blog: Python Data Types</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/frozenset">frozenset()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
