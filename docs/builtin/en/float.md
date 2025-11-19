---
title: Python float() built-in function - Python Cheatsheet
description: Return a floating point number constructed from a number or string x.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python float() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#float">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Return a floating point number constructed from a number or string x.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `float()` function in Python is a built-in function that allows you to convert a number or a string containing a number into a floating-point number. This is particularly useful when you need to perform arithmetic operations that require decimal precision.

The <router-link to="/builtin/float">float()</router-link> function returns a floating point number from a number or a string.

## Examples

```python
float('10')
float(10)
```

```output
10.0
10.0
```

## Relevant links

- <router-link :to="'/builtin/int/'">int()</router-link>
- <router-link :to="'/builtin/complex/'">complex()</router-link>
- <router-link :to="'/blog/python-data-types/'">Python Data Types</router-link>
- <router-link :to="'/builtin/str'">str()</router-link>
- <router-link :to="'/builtin/round'">round()</router-link>
- <router-link :to="'/cheatsheet/string-formatting'">String Formatting</router-link>
