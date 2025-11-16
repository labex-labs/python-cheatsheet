---
title: Python print() built-in function - Python Cheatsheet
description: Print objects to the text stream file, separated by sep and followed by end. sep, end, file, and flush, if present, must be given as keyword arguments.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python print() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#print">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Print objects to the text stream file, separated by sep and followed by end. sep, end, file, and flush, if present, must be given as keyword arguments.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `print()` function writes the value of the argument(s) it is given. [...] it handles multiple arguments, floating point-quantities, and strings. Strings are printed without quotes, and a space is inserted between items, so you can format things nicely:

```python
print('Hello world!')
```

Output:

```plaintext
Hello world!
```

```python
a = 1
print('Hello world!', a)
```

Output:

```plaintext
Hello world! 1
```

## The end keyword

The keyword argument `end` can be used to avoid the newline after the output, or end the output with a different string:

```python
phrase = ['printed', 'with', 'a', 'dash', 'in', 'between']
for word in phrase:
    print(word, end='-')
```

Output:

```plaintext
printed-with-a-dash-in-between-
```

## The sep keyword

The keyword `sep` specify how to separate the objects, if there is more than one:

```python
print('cats', 'dogs', 'mice', sep=',')
```

Output:

```plaintext
cats,dogs,mice
```

## Relevant links

- <router-link to="/cheatsheet/string-formatting">Cheatsheet: String Formatting</router-link>
- <router-link to="/cheatsheet/manipulating-strings">Cheatsheet: Manipulating Strings</router-link>
- <router-link to="/builtin/format">format()</router-link>
- <router-link to="/builtin/input">input()</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/repr">repr()</router-link>
