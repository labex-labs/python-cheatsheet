---
title: Python ascii() built-in function - Python Cheatsheet
description: As repr(), return a string containing a printable representation of an object, but escape the non-ASCII characters in the string returned by repr() using \\x, \\u, or \\U escapes.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python ascii() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#ascii">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    As <code>repr()</code>, return a string containing a printable representation of an object, but escape the non-ASCII characters in the string returned by <code>repr()</code> using <code>\x</code>, <code>\u</code>, or <code>\U</code> escapes.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `ascii()` function in Python is a built-in function that returns a string containing a printable representation of an object, similar to `repr()`. However, `ascii()` escapes any non-ASCII characters with `\x`, `\u`, or `\U` escape sequences. This is useful for ensuring that a string is safe to be used in an ASCII-only environment.

## Examples

```python
# For an ASCII character, it's the same as repr()
ascii('A')

# For a non-ASCII character, it gets escaped
ascii('ë')

# For comparison, repr() would not escape it
repr('ë')

# It works on iterables too
ascii(['A', 'ë'])
```

```output
'A'
'\\xeb'
'ë'
['A', '\\xeb']
```

## Relevant links

- <router-link to="/cheatsheet/manipulating-strings">Cheatsheet: Manipulating Strings</router-link>
- <router-link to="/blog/python-data-types">Blog: Python Data Types</router-link>
- <router-link to="/builtin/repr">repr()</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/bytes">bytes()</router-link>
- <router-link to="/builtin/chr">chr()</router-link>
- <router-link to="/builtin/ord">ord()</router-link>
