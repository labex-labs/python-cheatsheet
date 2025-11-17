---
title: 'Генераторы Python: Пошаговое введение - Шпаргалка по Python'
description: 'В этой короткой статье мы пошагово перепишем циклы for с помощью генераторов.'
date: 'March 22, 2019'
updated: 'July 3, 2022'
tags: 'python, basics'
socialImage: '/blog/python-comprehensions.png'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "Генераторы Python: Пошаговое введение - Шпаргалка по Python"
    description: "В этой короткой статье мы пошагово перепишем циклы for с помощью генераторов."
    date: "March 22, 2019"
    updated: "July 3, 2022"
    tags: "python, basics"
    socialImage: "/blog/python-comprehensions.png"
</route>

<blog-title-header :frontmatter="frontmatter" title="Генераторы Python: Пошаговое введение - Шпаргалка по Python" />

_List Comprehensions_ — это особый синтаксис, который позволяет нам создавать списки из других списков ([Wikipedia](https://en.wikipedia.org/wiki/List_comprehension), [The Python Tutorial](https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions)). Они невероятно полезны при работе с числами и одним или двумя уровнями вложенных _for loops_, но сверх этого они могут стать слишком сложными для чтения.

В этой статье мы рассмотрим некоторые _For Loops_ и шаг за шагом перепишем их в виде _Comprehensions_.

## Basics

На самом деле _List Comprehensions_ не слишком сложны, но поначалу их немного трудно понять, потому что они выглядят _немного_ странно. Почему? Ну, порядок, в котором они записаны, **_противоположен_** тому, что мы обычно видим в _For Loop_.

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
>>> for n in names:
...     print(n)
# Charles
# Susan
# Patrick
# George
# Carol
```

Чтобы сделать то же самое с помощью _List Comprehension_, мы начинаем с самого конца _цикла_:

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
>>> [print(n) for n in names]
# Charles
# Susan
# Patrick
# George
# Carol
```

Обратите внимание, как мы поменяли порядок:

- Сначала у нас есть то, что будет результатом цикла `[print(n) ...]`.
- Затем мы определяем переменную, которая будет хранить каждый из элементов, и указываем на `List`, `Set` или `Dictionary`, с которым будем работать `[... for n in names]`.

## Creating a new List with a Comprehension

> Это основное применение _List Comprehension_. Другие варианты могут привести к тому, что код станет трудночитаемым для вас и других.

Вот как мы создаем новый список из существующей коллекции с помощью _For Loop_:

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']

>>> new_list = []
>>> for n in names:
...     new_list.append(n)

>>> print(new_list)
# ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
```

А вот как мы делаем то же самое с помощью _List Comprehension_:

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
>>> new_list = [n for n in names]
>>> print(new_list)
# ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
```

Причина, по которой мы можем это сделать, заключается в том, что стандартное поведение _List Comprehension_ — возвращать список:

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
>>> [n for n in names]
# ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
```

## Adding Conditionals

Что, если мы хотим, чтобы `new_list` содержал только имена, начинающиеся с `C`? С _For Loop_ мы бы сделали это так:

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']

>>> new_list = []
>>> for n in names:
...     if n.startswith('C'):
...         new_list.append(n)

>>> print(new_list)
# ['Charles', 'Carol']
```

В _List Comprehension_ мы добавляем оператор if в конец:

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
>>> new_list = [n for n in names if n.startswith('C')]
>>> print(new_list)
# ['Charles', 'Carol']
```

Гораздо более читабельно.

## Formatting long List Comprehensions

На этот раз мы хотим, чтобы `new_list` содержал не только имена, начинающиеся с `C`, но и те, которые заканчиваются на `e` и содержат `k`:

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
>>> new_list = [n for n in names if n.startswith('C') or n.endswith('e') or 'k' in n]
>>> print(new_list)
# ['Charles', 'Patrick', 'George', 'Carol']
```

Это довольно громоздко. К счастью, _Comprehensions_ можно разбивать на разные строки:

```python
new_list = [
    n
    for n in names
    if n.startswith("C")
    or n.endswith("e")
    or "k" in n
]
```

## Set and Dict Comprehensions

Если вы освоили основы _List Comprehensions_... Поздравляю! Вы только что сделали это с <router-link to="/cheatsheet/sets">Sets</router-link> и <router-link to="/cheatsheet/dictionaries">Dictionaries</router-link>.

### Set comprehension

```python
>>> my_set = {"abc", "def"}

>>> # Здесь мы создаем новый набор с элементами в верхнем регистре с помощью цикла for
>>> new_set = set()
>>> for s in my_set:
...    new_set.add(s.upper())
>>> print(new_set)
# {'DEF', 'ABC'}

>>> # То же самое, но с set comprehension
>>> new_set = {s.upper() for s in my_set}
>>> print(new_set)
# {'DEF', 'ABC'}
```

### Dict comprehension

```python
>>> my_dict = {'name': 'Christine', 'age': 98}

>>> # Новый словарь из существующего с помощью цикла for
>>> new_dict = {}
>>> for key, value in my_dict.items():
...     new_dict[key] = value
>>> print(new_dict)
# {'name': 'Christine', 'age': 98}

# Использование dict comprehension
>>> new_dict = {key: value for key, value in my_dict.items()}  # Обратите внимание на ":"
>>> print(new_dict)
# {'name': 'Christine', 'age': 98}
```

> Рекомендуемая статья: [Python Sets: What, Why and How ](https://www.pythoncheatsheet.org/blog/python-sets-what-why-how).

## Conclusion

Каждый раз, когда я узнаю что-то новое, возникает это желание немедленно это использовать. Когда это происходит, я заставляю себя остановиться и подумать на мгновение... Стоит ли мне заменять этот большой, вложенный и уже выглядящий запутанным _For Loop_ на _List Comprehension_? Вероятно, нет.

> Читаемость имеет значение. [The Zen of Python](https://www.python.org/dev/peps/pep-0020/).
