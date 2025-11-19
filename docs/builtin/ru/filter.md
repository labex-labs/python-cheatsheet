---
title: 'Встроенная функция filter() Python - Шпаргалка по Python'
description: 'Создает итератор из элементов итерируемого объекта, для которых функция возвращает истину. Итерируемый объект может быть последовательностью, контейнером с поддержкой итерации или итератором. Если функция равна None, предполагается тождественная функция, то есть удаляются все ложные элементы итерируемого объекта.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python filter()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#filter">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Создает <router-link to="/builtin/iter">итератор</router-link> из тех элементов итерируемого объекта, для которых функция возвращает true. Итерируемый объект может быть последовательностью, контейнером, поддерживающим итерацию, или <router-link to="/builtin/iter">итератором</router-link>. Если function равно None, предполагается функция тождества, то есть удаляются все элементы итерируемого объекта, которые являются ложными.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Функция `filter()` в Python — это встроенная функция, которая позволяет обрабатывать итерируемый объект и извлекать те элементы, которые удовлетворяют определенному условию. Она возвращает <router-link to="/builtin/iter">итератор</router-link> с элементами, соответствующими критериям.

## Syntax

```python
filter(function, iterable)
```

- **function**: Функция, которая будет выполняться для каждого элемента в итерируемом объекте. Она должна возвращать `True` или `False` для каждого элемента.
- **iterable**: Итерируемый объект для фильтрации, например список, кортеж или строка.

## Description

Функция `filter()` создает итератор из тех элементов итерируемого объекта, для которых функция возвращает `True`. Если функция равна `None`, она удаляет все ложные элементы итерируемого объекта.

## Example

```python
def is_even(num):
    return num % 2 == 0

numbers = [1, 2, 3, 4, 5, 6]
even_numbers = list(filter(is_even, numbers))
print(even_numbers)
```

```output
[2, 4, 6]
```

В этом примере определяется функция `is_even`, чтобы определить, является ли число четным или нет. Метод filter принимает `два аргумента`: `первый аргумент` — это функция, применяемая к каждому элементу списка, а `второй аргумент` — это список, который нужно отфильтровать. Метод filter возвращает <router-link to="/builtin/iter">итератор</router-link>, который затем преобразуется в список и сохраняется в переменной even_numbers. Конечным результатом является список четных чисел из исходного списка.

## Relevant links

- <router-link :to="'/builtin/map'">map()</router-link>: Применяет функцию к каждому элементу итерируемого объекта и возвращает итератор с результатами.
- <router-link :to="'/builtin/iter'">iter()</router-link>: Возвращает объект итератора.
- <router-link :to="'/blog/python-comprehensions-step-by-step'">List Comprehensions</router-link>: Краткий способ создания списков, часто используемый как альтернатива `filter()`.
- <router-link :to="'/cheatsheet/comprehensions'">Comprehensions</router-link>
- <router-link :to="'/cheatsheet/functions'">Functions</router-link>
- <router-link :to="'/builtin/reduce'">reduce()</router-link>
