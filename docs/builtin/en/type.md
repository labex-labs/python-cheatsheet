---
title: Python type() built-in function - Python Cheatsheet
description: With one argument, return the type of an object. The return value is a type object and generally the same object as returned by object.__class__.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python type() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#type">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    With one argument, return the type of an object. The return value is a type object and generally the same object as returned by object.__class__.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `type()` function in Python is a built-in function that returns the type of an object. It's a fundamental tool for understanding the data types you are working with in Python.

## Examples

```python
type('span')
type(99)
type(1.1)
type([1, 2])
type((1, 2))
type({1, 2})
type({'a': 1, 'b': 2})
```

```output
<class 'str'>
<class 'int'>
<class 'float'>
<class 'list'>
<class 'tuple'>
<class 'set'>
<class 'dict'>
```

## Relevant links

- <router-link to="/blog/python-data-types/">Python Data Types</router-link>
- <router-link to="/builtin/isinstance/">isinstance()</router-link>
- <router-link to="/builtin/issubclass/">issubclass()</router-link>
- <router-link to="/builtin/str/">str()</router-link>
- <router-link to="/builtin/int/">int()</router-link>
- <router-link to="/builtin/float/">float()</router-link>
- <router-link to="/builtin/list/">list()</router-link>
- <router-link to="/builtin/tuple/">tuple()</router-link>
- <router-link to="/builtin/dict/">dict()</router-link>
- <router-link to="/builtin/set/">set()</router-link>
