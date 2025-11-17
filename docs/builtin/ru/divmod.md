---
title: 'Встроенная функция Python divmod() - Шпаргалка по Python'
description: 'Принимает два (некомплексных) числа в качестве аргументов и возвращает пару чисел, состоящую из их частного и остатка при целочисленном делении. При смешанных типах операндов применяются правила для бинарных арифметических операторов.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python divmod()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#divmod">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Принимает два (некомплексных) числа в качестве аргументов и возвращает пару чисел, состоящую из их частного и остатка при целочисленном делении. При смешанных типах операндов применяются правила для бинарных арифметических операторов.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Функция `divmod()` принимает два числа в качестве аргументов и возвращает кортеж, содержащий частное и остаток от их целочисленного деления. Это удобный способ получить оба результата за один вызов.

### Examples

```python
# Get quotient and remainder
quotient, remainder = divmod(10, 3)
print(quotient)
print(remainder)
print(divmod(2, 2))
print(divmod(10, 2))
print(divmod(7, 2))
```

Output:

```plaintext
3
1
(1, 0)
(5, 0)
(3, 1)
```

## Relevant links

- <router-link :to="'/cheatsheet/lists-and-tuples'">Списки и кортежи</router-link>
- <router-link :to="'/blog/python-data-types'">Типы данных Python</router-link>
- <router-link :to="'/builtin/int'">`int()`</router-link>
- <router-link :to="'/builtin/float'">`float()`</router-link>
- <router-link :to="'/builtin/tuple'">`tuple()`</router-link>
