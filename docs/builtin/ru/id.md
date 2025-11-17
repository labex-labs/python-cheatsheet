---
title: 'Встроенная функция Python id() - Шпаргалка по Python'
description: 'Возвращает «идентичность» объекта. Это целое число, которое гарантированно является уникальным и постоянным для данного объекта в течение всего его жизненного цикла. Два объекта с непересекающимися жизненными циклами могут иметь одинаковое значение id().'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python id()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#id">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Возвращает «идентичность» объекта. Это целое число, которое гарантированно является уникальным и постоянным для данного объекта в течение всего его жизненного цикла. Два объекта с непересекающимися жизненными циклами могут иметь одинаковое значение id().
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Функция `id()` возвращает уникальное целое число, которое идентифицирует объект в памяти. Гарантируется, что этот ID является уникальным на протяжении всего жизненного цикла объекта. По сути, это адрес объекта в памяти.

### Examples

```python
x = 10
y = 10
z = 20

print(id(x))
print(id(y))  # same as id(x) because Python caches small integers
print(id(z))
print(id(1))
print(id('1'))
print(id([1, 2]))
```

Output:

```plaintext
4331368528
4331368528
4331368560
4331368496
4331368560
4331368560
```

## Relevant links

- <router-link :to="'/builtin/hash'">hash()</router-link>
- <router-link :to="'/builtin/object'">object()</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">Основы ООП</router-link>
- <router-link :to="'/blog/python-data-types'">Типы данных Python</router-link>
- <router-link :to="'/builtin/type'">type()</router-link>
