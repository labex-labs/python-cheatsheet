---
title: Python bin() built-in function - Python Cheatsheet
description: Convert an integer number to a binary string prefixed with “0b”. The result is a valid Python expression. If x is not a Python int object, it has to define an __index__() method that returns an integer.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python bin() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#bin">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Convert an integer number to a binary string prefixed with “0b”. The result is a valid Python expression. If x is not a Python int object, it has to define an <code>__index__()</code> method that returns an integer.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `bin()` function converts an integer into its binary representation. The resulting string is prefixed with "0b" to indicate that it's a binary number.

### Examples

Here are a few examples of how to use `bin()`:

```python
# Convert integers to binary
print(bin(2))
print(bin(7))
print(bin(1))
print(bin(10))
print(bin(100))
print(bin(1000))
```

Output:

```plaintext
0b10
0b111
0b1
0b1010
0b1100100
0b1111101000
```

## Relevant links

- <router-link to="/blog/python-data-types">Blog: Python Data Types</router-link>
- <router-link to="/cheatsheet/string-formatting">Cheatsheet: String Formatting</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/hex">hex()</router-link>
- <router-link to="/builtin/oct">oct()</router-link>
- <router-link to="/builtin/format">format()</router-link>
