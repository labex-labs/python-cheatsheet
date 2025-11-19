---
title: Python chr() built-in function - Python Cheatsheet
description: Return the string representing a character whose Unicode code point is the integer i. For example, chr(97) returns the string 'a', while chr(8364) returns the string '€'. This is the inverse of ord().
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python chr() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#chr">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Return the string representing a character whose Unicode code point is the integer i. For example, chr(97) returns the string 'a', while chr(8364) returns the string '€'. This is the inverse of ord().
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `chr()` function in Python is a built-in function that takes an integer as an argument and returns a string representing the corresponding Unicode character.

The integer passed to the `chr()` function should be in the range of 0 to 65535, which corresponds to the range of valid Unicode characters.

```python
print(chr(97))
print(chr(65))
print(chr(120))
```

```output
a
A
x
```

The `chr()` function is the inverse of the `ord()` function, which takes a single character as an argument and returns the corresponding integer.

```python
print(ord('a'))
print(ord('A'))
print(ord('x'))
```

```output
97
65
120
```

The `chr()` function can be useful when working with text and character data, particularly when working with Unicode characters. For example, you can use it to convert an integer representing a Unicode code point to the corresponding character, or to generate a string of characters from a range of integers.

## Relevant links

- <router-link :to="'/builtin/ord'">ord()</router-link>
- <router-link :to="'/builtin/ascii'">ascii()</router-link>
- <router-link :to="'/cheatsheet/manipulating-strings'">Manipulating Strings</router-link>
- <router-link :to="'/blog/python-data-types'">Python Data Types</router-link>
