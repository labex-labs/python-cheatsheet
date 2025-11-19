---
title: 'Множества Python - Шпаргалка по Python'
description: 'Python оснащен встроенными типами данных для организации информации: списками, словарями, кортежами и множествами.'
labUrl: 'https://labex.io/ru/labs/python-python-sets-633665?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Множества Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Python оснащен несколькими встроенными типами данных, которые помогают нам организовывать наши данные. Эти структуры включают списки, словари, кортежи и **множества** (sets).

<base-disclaimer>
  <base-disclaimer-title>
    Из документации Python 3 <a target="_blank" href="https://docs.python.org/3/tutorial/datastructures.html#sets">здесь</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Множество — это неупорядоченная коллекция без повторяющихся элементов. Основные варианты использования включают проверку принадлежности и устранение повторяющихся записей.
  </base-disclaimer-content>
</base-disclaimer>

Прочтите <router-link to="/blog/python-sets-what-why-how">Python Sets: What, Why and How</router-link> для более глубокого ознакомления.

## Инициализация множества

Существует два способа создания множеств: с использованием фигурных скобок `{}` и встроенной функции `set()`.

<base-warning>
  <base-warning-title>
    Пустые множества
  </base-warning-title>
  <base-warning-content>
    При создании множества убедитесь, что вы не используете пустые фигурные скобки <code>{}</code>, иначе вместо множества вы получите пустой словарь.
  </base-warning-content>
</base-warning>

```python
# Create set using curly braces or set() function
s = {1, 2, 3}  # Using curly braces
s = set([1, 2, 3])  # Using set() constructor

# Warning: empty {} creates a dictionary, not a set
s = {}  # this will create a dictionary instead of a set
type(s)  # Returns <class 'dict'>
```

```output
<class 'dict'>
```

## Неупорядоченные коллекции уникальных элементов

Множество автоматически удаляет все повторяющиеся значения.

```python
# Sets automatically remove duplicates
s = {1, 2, 3, 2, 3, 4}  # Duplicates are removed
s  # Returns {1, 2, 3, 4}
```

```output
{1, 2, 3, 4}
```

И поскольку это неупорядоченный тип данных, его нельзя индексировать.

```python
s = {1, 2, 3}
s[0]
```

```output
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'set' object does not support indexing
```

## Добавление и обновление множества (set add and update)

Используя метод `add()`, мы можем добавить один элемент в множество.

```python
# add() method: add a single element to the set
s = {1, 2, 3}
s.add(4)  # Add element 4
s
```

```output
{1, 2, 3, 4}
```

А с помощью `update()` можно добавить несколько элементов:

```python
# update() method: add multiple elements from an iterable
s = {1, 2, 3}
s.update([2, 3, 4, 5, 6])  # Add multiple elements (duplicates ignored)
s
```

```output
{1, 2, 3, 4, 5, 6}
```

## Удаление элемента из множества (set remove and discard)

Оба метода удалят элемент из множества, но `remove()` вызовет ошибку `key error`, если значение не существует.

```python
# remove() method: remove element, raises KeyError if not found
s = {1, 2, 3}
s.remove(3)  # Remove element 3
s
```

```output
{1, 2}
```

```python
s.remove(3)
```

```output
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
KeyError: 3
```

`discard()` не вызовет никаких ошибок.

```python
# discard() method: remove element, no error if not found
s = {1, 2, 3}
s.discard(3)  # Remove element 3 (safe, no error if missing)
s
```

```output
{1, 2}
```

```python
s.discard(3)
```

## Объединение множеств (set union)

`union()` или `|` создадут новое множество со всеми элементами из предоставленных множеств.

```python
# union(): combine all elements from multiple sets (no duplicates)
s1 = {1, 2, 3}
s2 = {3, 4, 5}
s1.union(s2)  # or 's1 | s2' - returns {1, 2, 3, 4, 5}
```

```output
{1, 2, 3, 4, 5}
```

## Пересечение множеств (set intersection)

`intersection()` или `&` вернут множество, содержащее только те элементы, которые являются общими для всех множеств.

```python
# intersection(): return elements common to all sets
s1 = {1, 2, 3}
s2 = {2, 3, 4}
s3 = {3, 4, 5}
s1.intersection(s2, s3)  # or 's1 & s2 & s3' - returns {3}
```

```output
{3}
```

## Разность множеств (set difference)

`difference()` или `-` вернут только те элементы, которые уникальны для первого множества (множества, к которому применяется метод).

```python
# difference(): return elements in first set but not in others
s1 = {1, 2, 3}
s2 = {2, 3, 4}

s1.difference(s2)  # or 's1 - s2' - returns {1}
```

```output
{1}
```

```python
s2.difference(s1) # or 's2 - s1'
```

```output
{4}
```

## Симметричная разность множеств (set symmetric_difference)

`symmetric_difference()` или `^` вернут все элементы, которые не являются общими для множеств.

```python
# symmetric_difference(): return elements in either set, but not both
s1 = {1, 2, 3}
s2 = {2, 3, 4}
s1.symmetric_difference(s2)  # or 's1 ^ s2' - returns {1, 4}
```

```output
{1, 4}
```

## Соответствующие ссылки

- <router-link to="/blog/python-data-types">Python Data Types Blog Post</router-link>
- <router-link to="/blog/python-sets-what-why-how">Python Sets: What, Why and How</router-link>
- <router-link to="/cheatsheet/dictionaries">Python Dictionaries</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Python Lists and Tuples</router-link>
