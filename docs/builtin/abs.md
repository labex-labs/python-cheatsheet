---
title: Python abs() built-in function - Python Cheatsheet
description: Return the absolute value of a number. The argument may be an integer, a floating point number, or an object implementing __abs__(). If the argument is a complex number, its magnitude is returned.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python abs() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#abs">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Return the absolute value of a number. The argument may be an integer, a floating point number, or an object implementing <code>__abs__()</code>. If the argument is a complex number, its magnitude is returned.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `abs()` function in Python is a built-in function that returns the absolute value of a number. It can handle integers, floating-point numbers, and even complex numbers (returning their magnitude). This function is useful when you need to ensure a value is positive, regardless of its original sign.

### Examples

```python
# For integers
abs(-1)
abs(0)

# For floats
abs(-3.14)

# For complex numbers (returns magnitude)
abs(3 + 4j)

# For other number systems
abs(0x10)  # Hexadecimal
abs(0b10)  # Binary
abs(0o20)  # Octal
```

Output:

```plaintext
1
0
3.14
5.0
16
2
16
```

## Relevant links

- <router-link to="/blog/python-data-types">Blog: Python Data Types</router-link>
- <router-link to="/builtin/pow">pow()</router-link>
- <router-link to="/builtin/round">round()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/float">float()</router-link>
- <router-link to="/builtin/complex">complex()</router-link>
