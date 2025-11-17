---
title: 'Встроенная функция Python bin() - Шпаргалка по Python'
description: 'Преобразует целое число в двоичную строку с префиксом «0b». Результат является допустимым выражением Python. Если x не является объектом int Python, он должен определить метод __index__(), возвращающий целое число.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python bin()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#bin">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Преобразует целое число в двоичную строку с префиксом «0b». Результат является допустимым выражением Python. Если x не является объектом Python int, он должен определить метод <code>__index__()</code>, который возвращает целое число.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Функция `bin()` преобразует целое число в его двоичное представление. Результирующая строка имеет префикс "0b", чтобы указать, что это двоичное число.

### Examples

Вот несколько примеров использования `bin()`:

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
