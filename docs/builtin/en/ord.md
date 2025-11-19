---
title: Python ord() built-in function - Python Cheatsheet
description: Given a string representing one Unicode character, return an integer representing the Unicode code point of that character.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python ord() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#ord">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Given a string representing one Unicode character, return an integer representing the Unicode code point of that character.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `ord()` function is the inverse of <router-link to="/builtin/chr">chr()</router-link>. It takes a single character string and returns its Unicode code point, which is an integer.

### Examples

```python
# Get the Unicode code point of a character
print(ord('A'))
print(ord('€'))
print(ord('1'))
print(ord('a'))
```

```output
65
8364
49
97
```

## Relevant links

- <router-link to="/cheatsheet/manipulating-strings">Cheatsheet: Manipulating Strings</router-link>
- <router-link to="/blog/python-data-types">Blog: Python Data Types</router-link>
- <router-link to="/builtin/chr">chr()</router-link>
- <router-link to="/builtin/ascii">ascii()</router-link>
