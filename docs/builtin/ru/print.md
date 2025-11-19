---
title: 'Встроенная функция Python print() - Шпаргалка по Python'
description: 'Вывод объектов в текстовый поток файла, разделенных sep и завершающихся end. sep, end, file и flush, если присутствуют, должны передаваться как именованные аргументы.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python print()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#print">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Выводит значения аргументов в текстовый поток file, разделяя их с помощью sep и завершая концом end. sep, end, file и flush, если присутствуют, должны быть заданы как именованные аргументы.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Функция `print()` записывает значение переданного ей аргумента(ов). [...] она обрабатывает несколько аргументов, величины с плавающей запятой и строки. Строки выводятся без кавычек, и между элементами вставляется пробел, так что вы можете красиво форматировать вывод:

```python
print('Hello world!')
```

```output
Hello world!
```

```python
a = 1
print('Hello world!', a)
```

```output
Hello world! 1
```

## The end keyword

Именованный аргумент `end` можно использовать, чтобы избежать перевода строки после вывода или завершить вывод другой строкой:

```python
phrase = ['printed', 'with', 'a', 'dash', 'in', 'between']
for word in phrase:
    print(word, end='-')
```

```output
printed-with-a-dash-in-between-
```

## The sep keyword

Ключевое слово `sep` определяет, как разделять объекты, если их несколько:

```python
print('cats', 'dogs', 'mice', sep=',')
```

```output
cats,dogs,mice
```

## Relevant links

- <router-link to="/cheatsheet/string-formatting">Cheatsheet: Форматирование строк</router-link>
- <router-link to="/cheatsheet/manipulating-strings">Cheatsheet: Манипулирование строками</router-link>
- <router-link to="/builtin/format">format()</router-link>
- <router-link to="/builtin/input">input()</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/repr">repr()</router-link>
