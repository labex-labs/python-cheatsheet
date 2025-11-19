---
title: 'Встроенная функция Python any() - Шпаргалка по Python'
description: 'Возвращает True, если хотя бы один элемент итерируемого объекта истинен. Если итерируемый объект пуст, возвращает False.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python any()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#any">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Возвращает True, если хотя бы один элемент итерируемого объекта истинен. Если итерируемый объект пуст, возвращает False.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Встроенная функция `any()` в Python — это встроенная функция, которая проверяет, является ли хотя бы один элемент в итерируемом объекте `True`. Она возвращает `True`, если любой элемент оценивается как истинный, и `False`, если итерируемый объект пуст или все элементы ложны. Это полезно для быстрой проверки, выполняется ли условие для какого-либо элемента в коллекции.

## Examples

```python
# Все значения ложны (falsy)
any([0, '', False])

# Содержит одно истинное (truthy) значение (2)
any([0, 2, False])

# Пустой итерируемый объект считается ложным
any([])
```

```output
False
True
False
```

## Relevant links

- <router-link to="/cheatsheet/control-flow">Cheatsheet: Control Flow</router-link>
- <router-link to="/cheatsheet/comprehensions">Cheatsheet: Comprehensions</router-link>
- <router-link to="/blog/python-data-types">Blog: Python Data Types</router-link>
- <router-link to="/builtin/all">all()</router-link>
- <router-link to="/builtin/bool">bool()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
