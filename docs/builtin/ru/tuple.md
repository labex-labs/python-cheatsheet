---
title: 'Встроенная функция tuple() в Python - Шпаргалка по Python'
description: 'tuple на самом деле является неизменяемым типом последовательности, а не функцией, как описано в разделе Кортежи и типы последовательностей — list, tuple, range.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python tuple()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#tuple">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    На самом деле tuple является не функцией, а неизменяемым типом последовательности, как описано в разделе Tuples and Sequence Types — list, tuple, range.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Хотя `tuple` технически является типом, его можно использовать как функцию для создания кортежей. Кортежи — это неизменяемые последовательности, что означает, что их нельзя изменить после создания.

Конструктор `tuple()` можно использовать для создания пустого кортежа или для преобразования итерируемого объекта (например, списка) в кортеж.

### Examples

**Создание пустого кортежа:**

```python
empty_tuple = tuple()
print(empty_tuple)
```

Output:

```plaintext
()
```

**Создание кортежа из списка:**

```python
my_list = [1, 2, 3]
my_tuple = tuple(my_list)
print(my_tuple)
```

Output:

```plaintext
(1, 2, 3)
```

## Relevant links

- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: Списки и кортежи</router-link>
- <router-link to="/cheatsheet/args-and-kwargs">Cheatsheet: \*args и \*\*kwargs</router-link>
- <router-link to="/blog/python-data-types">Блог: Типы данных Python</router-link>
- <router-link to="/blog/python-easy-args-kwargs">Блог: \*args и \*\*kwargs объяснены</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/sorted">sorted()</router-link>
- <router-link to="/builtin/reversed">reversed()</router-link>
- <router-link to="/builtin/enumerate">enumerate()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
