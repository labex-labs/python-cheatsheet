---
title: Python str() built-in function - Python Cheatsheet
description: Return a string version of object. If object is not provided, returns the empty string. Otherwise, the behavior of str() depends on whether encoding or errors is given.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python str() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#func-str">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Return a string version of object. If object is not provided, returns the empty string. Otherwise, the behavior of str() depends on whether encoding or errors is given.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `str()` function in Python is a built-in function that returns a string version of an object. If no object is provided, it returns an empty string. It's a versatile function for converting other data types to strings.

## Examples

```python
# transform an integer to a string
from_integer = str(29)
print(from_integer)
print(type(from_integer))
```

```output
29
<class 'str'>
```

```python
# transform a float to string
from_float = str(-3.14)
print(from_float)
print(type(from_float))
```

```output
-3.14
<class 'str'>
```

```python
# return an empty string
str()
```

```output
''
```

## Relevant links

- <router-link to="/cheatsheet/manipulating-strings">Cheatsheet: Manipulating Strings</router-link>
- <router-link to="/cheatsheet/string-formatting">Cheatsheet: String Formatting</router-link>
- <router-link to="/blog/python-data-types">Blog: Python Data Types</router-link>
- <router-link to="/builtin/repr">repr()</router-link>
- <router-link to="/builtin/ascii">ascii()</router-link>
- <router-link to="/builtin/bytes">bytes()</router-link>
- <router-link to="/builtin/format">format()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/float">float()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/set">set()</router-link>
