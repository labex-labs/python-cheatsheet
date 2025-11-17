---
title: 'Встроенная функция float() Python - Шпаргалка по Python'
description: 'Возвращает число с плавающей запятой, созданное из числа или строки x.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python float()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#float">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Возвращает число с плавающей запятой, сконструированное из числа или строки x.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Встроенная функция `float()` в Python позволяет преобразовывать число или строку, содержащую число, в число с плавающей запятой. Это особенно полезно, когда вам необходимо выполнять арифметические операции, требующие десятичной точности.

Функция <router-link to="/builtin/float">float()</router-link> возвращает число с плавающей запятой, сконструированное из числа или строки.

## Examples

```python
float('10')
float(10)
```

Output:

```plaintext
10.0
10.0
```

## Relevant links

- <router-link :to="'/builtin/int/'">int()</router-link>
- <router-link :to="'/builtin/complex/'">complex()</router-link>
- <router-link :to="'/blog/python-data-types/'">Типы данных Python</router-link>
- <router-link :to="'/builtin/str'">str()</router-link>
- <router-link :to="'/builtin/round'">round()</router-link>
- <router-link :to="'/cheatsheet/string-formatting'">Форматирование строк</router-link>
