---
title: Python round() built-in function - Python Cheatsheet
description: Return number rounded to ndigits precision after the decimal point. If ndigits is omitted or is None, it returns the nearest integer to its input.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python round() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#round">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Return number rounded to ndigits precision after the decimal point. If ndigits is omitted or is None, it returns the nearest integer to its input.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `round()` function rounds a number to a specified number of decimal places. If the number of decimal places is not specified, it rounds to the nearest integer.

Note that `round()` uses "round half to even" for numbers ending in .5, which means it will round to the nearest even integer.

### Examples

```python
# Round to the nearest integer
print(round(3.14))
print(round(3.8))

# Round to a specified number of decimal places
print(round(3.14159, 2))

# "Round half to even"
print(round(2.5))
print(round(3.5))
```

```output
3
4
3.14
2
4
```

## Relevant links

- <router-link to="/blog/python-data-types">Blog: Python Data Types</router-link>
- <router-link to="/cheatsheet/string-formatting">Cheatsheet: String Formatting</router-link>
- <router-link to="/builtin/format">format()</router-link>
- <router-link to="/builtin/abs">abs()</router-link>
- <router-link to="/builtin/float">float()</router-link>
- <router-link to="/builtin/int">int()</router-link>
