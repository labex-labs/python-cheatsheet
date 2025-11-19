---
title: 'Встроенная функция Python list() - Справочник по Python'
description: 'list на самом деле является изменяемым типом последовательности, а не функцией, как описано в разделе Списки и типы последовательностей — list, tuple, range.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python list()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#list">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Вместо функции list является изменяемым типом последовательности, как описано в Списки и типы последовательностей — <router-link to="/builtin/list">list</router-link>, <router-link to="/builtin/tuple">tuple</router-link>, <router-link to="/builtin/range">range</router-link>.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

В Python `list` — это не функция, а встроенный изменяемый тип последовательности. Это означает, что это структура данных, которая может хранить упорядоченную коллекцию элементов, и вы можете изменять ее содержимое. Вы можете создать список, используя квадратные скобки `[]` или конструктор `list()`.

## Examples

```python
l = list()
print(l)
l.append(1)
l.append(2)
print(l)
```

```output
[]
[1, 2]
```

## Relevant links

- <router-link to="/cheatsheet/lists-and-tuples">Шпаргалка: Списки и кортежи</router-link>
- <router-link to="/cheatsheet/comprehensions">Шпаргалка: Генераторы (Comprehensions)</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">Блог: Генераторы Python по шагам</router-link>
- <router-link to="/blog/python-data-types">Блог: Типы данных Python</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/len">len()</router-link>
