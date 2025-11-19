---
title: 'Встроенная функция sum() Python - Справочник по Python'
description: 'Суммирует начальное значение и элементы итерируемого объекта слева направо и возвращает итог. Элементы итерируемого объекта обычно являются числами, а начальное значение не может быть строкой.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python sum()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#func-sum">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Суммирует начальное значение start и элементы итерируемого объекта слева направо и возвращает общую сумму. Элементы итерируемого объекта обычно являются числами, а начальное значение start не может быть строкой.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Функция `sum()` вычисляет сумму всех элементов в итерируемом объекте (например, списке или кортеже). Вы также можете указать необязательное начальное значение `start`, которое добавляется к общей сумме.

### Examples

**Суммирование списка чисел:**

```python
numbers = [1, 2, 3, 4, 5]
print(sum(numbers))
```

```output
15
```

**Суммирование с начальным значением:**

```python
numbers = [1, 2, 3]
print(sum(numbers, 10))  # 10 + 1 + 2 + 3
```

```output
16
```

## Relevant links

- <router-link to="/cheatsheet/lists-and-tuples">Шпаргалка: Списки и кортежи</router-link>
- <router-link to="/cheatsheet/comprehensions">Шпаргалка: Генераторы (Comprehensions)</router-link>
- <router-link to="/blog/python-data-types">Блог: Типы данных Python</router-link>
- <router-link to="/modules/itertools-module">Модуль: itertools</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/min">min()</router-link>
- <router-link to="/builtin/max">max()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/float">float()</router-link>
