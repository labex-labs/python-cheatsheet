---
title: Python oct() built-in function - Python Cheatsheet
description: Convert an integer number to an octal string prefixed with “0o”. The result is a valid Python expression. If x is not a Python int object, it has to define an __index__() method that returns an integer.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python oct() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#oct">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Convert an integer number to an octal string prefixed with “0o”. The result is a valid Python expression. If x is not a Python <router-link to="/builtin/int">int</router-link> object, it has to define an __index__() method that returns an integer.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `oct()` function converts an integer into its octal representation. The resulting string is prefixed with "0o" to indicate that it's an octal number.

### Examples

Here are a few examples of how to use `oct()`:

```python
# Convert integers to octal
print(oct(8))
print(oct(10))
print(oct(100))
print(oct(1))
print(oct(1000))
```

Output:

```plaintext
0o10
0o12
0o144
0o1
0o1750
```

## Relevant links

- <router-link to="/blog/python-data-types">Blog: Python Data Types</router-link>
- <router-link to="/cheatsheet/string-formatting">Cheatsheet: String Formatting</router-link>
- <router-link to="/builtin/bin">bin()</router-link>
- <router-link to="/builtin/hex">hex()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/format">format()</router-link>
