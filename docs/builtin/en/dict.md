---
title: Python dict() built-in function - Python Cheatsheet
description: Create a new dictionary. The dict object is the dictionary class. See dict and Mapping Types — dict for documentation about this class.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python dict() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/stdtypes.html#dict">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Create a new dictionary. The `dict` object is the dictionary class.
  </base-disclaimer-content>
</base-disclaimer>

The `dict()` constructor in Python is a versatile way to create dictionaries.

You can create an empty dictionary, or create a dictionary from keyword arguments or from an <router-link to="/builtin/iter">iterable</router-link> of key-value pairs.

## Examples

**Creating an empty dictionary:**

```python
my_dict = dict()
print(my_dict)
```

```output
{}
```

**Creating a dictionary with keyword arguments:**

```python
# Using keyword arguments
my_dict = dict(name="John", age=30)
print(my_dict)
```

```output
{'name': 'John', 'age': 30}
```

**Creating a dictionary from an iterable:**

```python
my_list = [('name', 'Jane'), ('age', 25)]
my_dict = dict(my_list)
print(my_dict)
```

```output
{'name': 'Jane', 'age': 25}
```

Creating an empty dictionary:

```python
a = dict()
type(a)
```

```output
<class 'dict'>
```

## Relevant links

- <router-link :to="'/builtin/iter'">`iter()`</router-link>
- <router-link :to="'/cheatsheet/dictionaries'">Dictionaries</router-link>
- <router-link :to="'/blog/python-data-types'">Python Data Types</router-link>
- <router-link :to="'/builtin/len'">`len()`</router-link>
- <router-link :to="'/builtin/list'">`list()`</router-link>
- <router-link :to="'/builtin/tuple'">`tuple()`</router-link>
