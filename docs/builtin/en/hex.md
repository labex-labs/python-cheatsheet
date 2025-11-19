---
title: Python hex() built-in function - Python Cheatsheet
description: Convert an integer number to a lowercase hexadecimal string prefixed with “0x”. If x is not a Python int object, it has to define an __index__() method that returns an integer.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python hex() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#hex">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Convert an integer number to a lowercase hexadecimal string prefixed with “0x”. If x is not a Python int object, it has to define an __index__() method that returns an integer.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `hex()` function in Python is a built-in function that converts an integer into its corresponding hexadecimal representation. The resulting string is prefixed with "0x" to indicate that it is a hexadecimal value. This function is useful when you need to work with hexadecimal numbers, which are common in low-level programming, such as when dealing with memory addresses or color codes.

## Examples

```python
hex(1)
hex(10)
hex(100)
hex(1000)
```

```output
'0x1'
'0xa'
'0x64'
'0x3e8'
```

## Relevant links

- <router-link :to="'/builtin/bin'">bin()</router-link>
- <router-link :to="'/builtin/int'">int()</router-link>
- <router-link :to="'/builtin/oct'">oct()</router-link>
- <router-link :to="'/cheatsheet/string-formatting'">String Formatting</router-link>
- <router-link :to="'/blog/python-data-types'">Python Data Types</router-link>
- <router-link :to="'/builtin/format'">format()</router-link>
