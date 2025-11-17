---
title: 'Встроенная функция Python sorted() - Шпаргалка по Python'
description: 'Возвращает новый отсортированный список из элементов итерируемого объекта.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python sorted()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#sorted">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Возвращает новый отсортированный список из элементов итерируемого объекта.
  </base-disclaimer-content>
</base-disclaimer>

## Введение

Функция `sorted()` возвращает новый отсортированный список из элементов итерируемого объекта. Она не изменяет исходный итерируемый объект.

Вы также можете использовать параметр `reverse`, чтобы отсортировать в порядке убывания.

### Примеры

**Сортировка списка чисел:**

```python
numbers = [3, 1, 4, 1, 5, 9, 2, 6]
sorted_numbers = sorted(numbers)
print(sorted_numbers)
```

Вывод:

```plaintext
[1, 1, 2, 3, 4, 5, 6, 9]
```

**Сортировка списка строк:**

```python
words = ["banana", "apple", "cherry"]
sorted_words = sorted(words)
print(sorted_words)
```

Вывод:

```plaintext
['apple', 'banana', 'cherry']
```

**Сортировка в обратном порядке:**

```python
numbers = [3, 1, 4, 1, 5, 9, 2, 6]
sorted_numbers_desc = sorted(numbers, reverse=True)
print(sorted_numbers_desc)
```

Вывод:

```plaintext
[9, 6, 5, 4, 3, 2, 1, 1]
```

## Связанные ссылки

- <router-link to="/cheatsheet/lists-and-tuples">Шпаргалка: Списки и кортежи</router-link>
- <router-link to="/cheatsheet/dictionaries">Шпаргалка: Словари</router-link>
- <router-link to="/cheatsheet/functions">Шпаргалка: Функции (для аргумента key)</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/reversed">reversed()</router-link>
- <router-link to="/builtin/min">min()</router-link>
- <router-link to="/builtin/max">max()</router-link>
