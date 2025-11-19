---
title: 'Встроенная функция Python max() - Шпаргалка по Python'
description: 'Возвращает наибольший элемент в итерируемом объекте или наибольший из двух или более аргументов.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python max()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#max">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Возвращает наибольший элемент в итерируемом объекте или наибольший из двух или более аргументов.
  </base-disclaimer-content>
</base-disclaimer>

## Введение

Функцию `max()` можно использовать двумя способами:

1. С итерируемым объектом (например, <router-link to="/builtin/list">списком</router-link> или <router-link to="/builtin/tuple">кортежем</router-link>) она возвращает наибольший элемент.
2. С двумя или более аргументами она возвращает наибольший из них.

### Примеры

**Нахождение максимума в итерируемом объекте:**

```python
numbers = [1, 2, 10, 40, 5]
print(max(numbers))

letters = ('a', 'b', 'z')
print(max(letters))
```

```output
40
z
```

**Нахождение максимума из нескольких аргументов:**

```python
print(max(10, 20, 5))
```

```output
20
```

## Связанные ссылки

- <router-link to="/cheatsheet/lists-and-tuples">Шпаргалка: Списки и кортежи</router-link>
- <router-link to="/builtin/min">min()</router-link>
- <router-link to="/builtin/sorted">sorted()</router-link>
- <router-link to="/builtin/sum">sum()</router-link>
