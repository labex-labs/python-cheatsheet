---
title: 'Встроенная функция Python str() - Шпаргалка по Python'
description: 'Возвращает строковую версию объекта. Если объект не предоставлен, возвращает пустую строку. В противном случае поведение str() зависит от того, указаны ли кодировка или ошибки.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python str()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#func-str">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Возвращает строковое представление объекта. Если объект не предоставлен, возвращает пустую строку. В противном случае поведение str() зависит от того, указаны ли кодировка (encoding) или ошибки (errors).
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Встроенная функция `str()` в Python возвращает строковое представление объекта. Если объект не предоставлен, она возвращает пустую строку. Это универсальная функция для преобразования других типов данных в строки.

## Examples

```python
# transform an integer to a string
from_integer = str(29)
print(from_integer)
print(type(from_integer))
```

Output:

```plaintext
29
<class 'str'>
```

```python
# transform a float to string
from_float = str(-3.14)
print(from_float)
print(type(from_float))
```

Output:

```plaintext
-3.14
<class 'str'>
```

```python
# return an empty string
str()
```

Output:

```plaintext
''
```

## Relevant links

- <router-link to="/cheatsheet/manipulating-strings">Cheatsheet: Манипулирование строками</router-link>
- <router-link to="/cheatsheet/string-formatting">Cheatsheet: Форматирование строк</router-link>
- <router-link to="/blog/python-data-types">Blog: Типы данных Python</router-link>
- <router-link to="/builtin/repr">repr()</router-link>
- <router-link to="/builtin/ascii">ascii()</router-link>
- <router-link to="/builtin/bytes">bytes()</router-link>
- <router-link to="/builtin/format">format()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/float">float()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/set">set()</router-link>
