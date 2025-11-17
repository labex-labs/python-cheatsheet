---
title: 'Встроенная функция Python ord() - Шпаргалка по Python'
description: 'Возвращает целое число, представляющее код Unicode для заданного символа Unicode.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python ord()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#ord">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Принимая строку, представляющую один символ Unicode, возвращает целое число, представляющее кодовую точку этого символа Unicode.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Функция `ord()` является обратной к <router-link to="/builtin/chr">chr()</router-link>. Она принимает строку из одного символа и возвращает его кодовую точку Unicode, которая является целым числом.

### Examples

```python
# Get the Unicode code point of a character
print(ord('A'))
print(ord('€'))
print(ord('1'))
print(ord('a'))
```

Output:

```plaintext
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
