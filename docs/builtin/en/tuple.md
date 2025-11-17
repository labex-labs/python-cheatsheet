---
title: Python tuple() built-in function - Python Cheatsheet
description: Rather than being a function, tuple is actually an immutable sequence type, as documented in Tuples and Sequence Types — list, tuple, range.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python tuple() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#tuple">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Rather than being a function, tuple is actually an immutable sequence type, as documented in Tuples and Sequence Types — list, tuple, range.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

While `tuple` is technically a type, it can be used like a function to create tuples. Tuples are immutable sequences, meaning they cannot be changed after they are created.

The `tuple()` constructor can be used to create an empty tuple or to convert an iterable (like a list) into a tuple.

### Examples

**Create an empty tuple:**

```python
empty_tuple = tuple()
print(empty_tuple)
```

Output:

```plaintext
()
```

**Create a tuple from a list:**

```python
my_list = [1, 2, 3]
my_tuple = tuple(my_list)
print(my_tuple)
```

Output:

```plaintext
(1, 2, 3)
```

## Relevant links

- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: Lists and Tuples</router-link>
- <router-link to="/cheatsheet/args-and-kwargs">Cheatsheet: \*args and \*\*kwargs</router-link>
- <router-link to="/blog/python-data-types">Blog: Python Data Types</router-link>
- <router-link to="/blog/python-easy-args-kwargs">Blog: \*args and \*\*kwargs Explained</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/sorted">sorted()</router-link>
- <router-link to="/builtin/reversed">reversed()</router-link>
- <router-link to="/builtin/enumerate">enumerate()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
