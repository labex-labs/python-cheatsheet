---
title: 'Встроенная функция zip() Python - Шпаргалка по Python'
description: 'Итерация по нескольким итерируемым объектам параллельно с получением кортежей из элементов каждого из них.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python zip()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#zip">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Итерирует по нескольким итерируемым объектам параллельно, создавая кортежи с элементом из каждого из них.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Встроенная функция `zip()` в Python принимает два или более итерируемых объекта (таких как списки, кортежи или строки) и объединяет их в один итератор кортежей. Каждый кортеж содержит элементы из всех входных итерируемых объектов, находящиеся на одной и той же позиции.

## Examples

```python
furniture = ['table', 'chair', 'rack', 'shelf']
price = [100, 50, 80, 40]

for item, amount in zip(furniture, price):
    print(f'The {item} costs ${amount}')
```

```output
The table costs $100
The chair costs $50
The rack costs $80
The shelf costs $40
```

## Other Use Cases

Функция zip в Python объединяет несколько итерируемых объектов в кортежи.

```python
# Combining three lists
list1 = [1, 2, 3]
list2 = ['a', 'b', 'c']
list3 = [True, False, True]

zipped = zip(list1, list2, list3)
print(list(zipped))
```

```output
[(1, 'a', True), (2, 'b', False), (3, 'c', True)]
```

### Unzipping

```python
# Unzipping a zipped object
zipped = [(1, 'a'), (2, 'b'), (3, 'c')]
list1, list2 = zip(*zipped)
print(list1)
print(list2)
```

```output
(1, 2, 3)
('a', 'b', 'c')
```

## More Examples

### Zipping with Different Lengths

zip прекращает создание кортежей, когда самый короткий итерируемый объект исчерпан.

```python
numbers = [1, 2, 3]
letters = ['a', 'b']

for num, letter in zip(numbers, letters):
    print(f'{num} -> {letter}')
```

```output
1 -> a
2 -> b
```

### Using zip with Dictionaries

Вы можете использовать zip для объединения ключей и значений из двух списков в словарь.

```python
keys = ['name', 'age', 'city']
values = ['Alice', 25, 'New York']

my_dict = dict(zip(keys, values))
print(my_dict)
```

```output
{'name': 'Alice', 'age': 25, 'city': 'New York'}
```

### Using zip with List Comprehensions

Вы можете использовать zip в списковых включениях (list comprehensions) для более краткого кода.

```python
list1 = [1, 2, 3]
list2 = [4, 5, 6]

summed = [x + y for x, y in zip(list1, list2)]
print(summed)
```

```output
[5, 7, 9]
```

## Relevant links

- <router-link to="/cheatsheet/lists-and-tuples/">Списки и кортежи</router-link>
- <router-link to="/cheatsheet/comprehensions/">Включения (Comprehensions)</router-link>
- <router-link to="/builtin/slice/">slice()</router-link>
- <router-link to="/builtin/sorted/">sorted()</router-link>
- <router-link to="/builtin/sum/">sum()</router-link>
- <router-link to="/builtin/map/">map()</router-link>
- <router-link to="/builtin/filter/">filter()</router-link>
- <router-link to="/builtin/enumerate/">enumerate()</router-link>
- <router-link to="/modules/itertools-module/">Модуль Itertools</router-link>
