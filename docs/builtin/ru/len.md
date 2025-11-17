---
title: 'Встроенная функция Python len() - Справочник по Python'
description: 'Возвращает длину (количество элементов) объекта. Аргументом может быть последовательность (строка, байты, кортеж, список, диапазон) или коллекция (словарь, множество, замороженное множество).'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python len()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#len">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Возвращает длину (количество элементов) объекта. Аргументом может быть последовательность (например, строка, байты, <router-link to="/builtin/tuple">кортеж</router-link>, <router-link to="/builtin/list">список</router-link> или <router-link to="/builtin/range">диапазон</router-link>) или коллекция (например, <router-link to="/builtin/dict">словарь</router-link>, <router-link to="/builtin/set">множество</router-link> или <router-link to="/builtin/frozenset">неизменяемое множество</router-link>).
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Встроенная функция `len()` в Python возвращает количество элементов (длину) объекта. Объектом может быть последовательность (например, строка, список, кортеж) или коллекция (например, словарь или множество).

## Example

Возвращает количество элементов объекта:

```python
len('hello')
len(['cat', 3, 'dog'])
```

Output:

```plaintext
5
3
```

## Test of emptiness

<base-warning>
  <base-warning-title>Проверка на пустоту</base-warning-title>
    <base-warning-content>
      Для проверки на пустоту строк, списков, словарей и т. д. не следует использовать
    <code>len</code>, а предпочесть прямое булево преобразование.
  </base-warning-content>
</base-warning>

```python
a = [1, 2, 3]

# плохо
if len(a) > 0:  # вычисляется как True
    print("the list is not empty!")

# хорошо
if a:  # вычисляется как True
    print("the list is not empty!")
```

Output:

```plaintext
the list is not empty!
the list is not empty!
```

## Relevant links

- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: Списки и кортежи</router-link>
- <router-link to="/cheatsheet/dictionaries">Cheatsheet: Словари</router-link>
- <router-link to="/cheatsheet/sets">Cheatsheet: Множества</router-link>
- <router-link to="/blog/python-data-types">Blog: Типы данных Python</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/set">set()</router-link>
