---
title: 'Встроенная функция Python slice() - Шпаргалка по Python'
description: 'Возвращает объект среза, представляющий набор индексов, указанных с помощью range(start, stop, step). Аргументы start и step по умолчанию равны None. Объекты среза имеют атрибуты данных только для чтения start, stop и step, которые просто возвращают значения аргументов (или их значения по умолчанию).'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python slice()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#slice">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Возвращает объект среза, представляющий набор индексов, заданных с помощью range(start, stop, step). Аргументы start и step по умолчанию равны None. Объекты slice имеют доступные только для чтения атрибуты данных start, stop и step, которые просто возвращают значения аргументов (или их значения по умолчанию).
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Функция `slice()` в Python возвращает объект среза, который можно использовать для нарезки последовательностей, таких как списки, кортежи или строки. Объект среза представляет набор индексов, заданных с помощью `start`, `stop` и `step`.

## Examples

```python
furniture = ['table', 'chair', 'rack', 'shelf']

print(furniture[0:4])
print(furniture[1:3])
print(furniture[0:-1])
print(furniture[:2])
print(furniture[1:])
print(furniture[:])
```

```output
['table', 'chair', 'rack', 'shelf']
['chair', 'rack']
['table', 'chair', 'rack']
['table', 'chair']
['chair', 'rack', 'shelf']
['table', 'chair', 'rack', 'shelf']
```

Нарезка полного списка выполнит копирование:

```python
spam = ['cat', 'bat', 'rat', 'elephant']
spam2 = spam[:]
print(spam2)

spam.append('dog')
print(spam)
print(spam2)
```

```output
['cat', 'bat', 'rat', 'elephant']
['cat', 'bat', 'rat', 'elephant', 'dog']
['cat', 'bat', 'rat', 'elephant']
```

## Relevant links

- <router-link to="/cheatsheet/lists-and-tuples">Шпаргалка: Списки и кортежи</router-link>
- <router-link to="/cheatsheet/manipulating-strings">Шпаргалка: Манипулирование строками</router-link>
- <router-link to="/cheatsheet/comprehensions">Шпаргалка: Генераторы (Comprehensions)</router-link>
- <router-link to="/modules/itertools-module">Модуль: itertools (islice)</router-link>
- <router-link to="/builtin/range">range()</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/reversed">reversed()</router-link>
- <router-link to="/builtin/sorted">sorted()</router-link>
- <router-link to="/builtin/enumerate">enumerate()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
- <router-link to="/builtin/map">map()</router-link>
- <router-link to="/builtin/filter">filter()</router-link>
