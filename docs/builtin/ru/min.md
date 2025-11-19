---
title: 'Встроенная функция Python min() - Шпаргалка по Python'
description: 'Возвращает наименьший элемент в итерируемом объекте или наименьший из двух или более аргументов.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python min()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#min">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Возвращает наименьший элемент в итерируемом объекте или наименьший из двух или более аргументов.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Функция `min()` является парной к <router-link to="/builtin/max">max()</router-link>. Ее можно использовать двумя способами:

1. С итерируемым объектом (например, <router-link to="/builtin/list">списком</router-link> или <router-link to="/builtin/tuple">кортежем</router-link>) она возвращает наименьший элемент.
2. С двумя или более аргументами она возвращает наименьший из них.

### Examples

**Нахождение минимума в итерируемом объекте:**

```python
numbers = [10, 2, 1, 40, 5]
print(min(numbers))

letters = ('z', 'b', 'a')
print(min(letters))
```

```output
1
a
```

**Нахождение минимума из нескольких аргументов:**

```python
print(min(10, 20, 5))
```

```output
5
```

## Relevant links

- <router-link to="/cheatsheet/lists-and-tuples">Шпаргалка: Списки и Кортежи</router-link>
- <router-link to="/builtin/max">max()</router-link>
- <router-link to="/builtin/sorted">sorted()</router-link>
- <router-link to="/builtin/sum">sum()</router-link>
