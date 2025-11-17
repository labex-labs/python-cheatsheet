---
title: 'Модуль Python Itertools - Шпаргалка по Python'
description: 'Модуль itertools — это набор инструментов, предназначенных для быстрой и эффективной работы с итераторами (такими как списки или словари) с точки зрения использования памяти.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Модуль Python Itertools
</base-title>

Модуль _itertools_ представляет собой набор инструментов, предназначенных для быстрой и эффективной по использованию памяти работы с итераторами (такими как <router-link to="/cheatsheet/lists-and-tuples">списки</router-link> или <router-link to="/cheatsheet/dictionaries">словари</router-link>).

<base-disclaimer>
  <base-disclaimer-title>
    Из <a href="https://docs.python.org/3/library/itertools.html">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Модуль стандартизирует основной набор быстрых, эффективных по памяти инструментов, которые полезны сами по себе или в комбинации.
    Вместе они образуют «алгебру итераторов», позволяющую лаконично и эффективно конструировать специализированные инструменты на чистом Python.
  </base-disclaimer-content>
</base-disclaimer>

Модуль _itertools_ входит в стандартную библиотеку и должен быть импортирован. В некоторых примерах также используется модуль `operator`.

```python
import itertools
import operator
```

## accumulate()

Создает итератор, который возвращает результаты функции.

```python
itertools.accumulate(iterable[, func])
```

Пример:

```python
data = [1, 2, 3, 4, 5]
# Накопление с функцией умножения
result = itertools.accumulate(data, operator.mul)
for each in result:
    print(each)
```

Вывод:

```plaintext
1
2
6
24
120
```

operator.mul принимает два числа и перемножает их:

```python
operator.mul(1, 2)
# 2

operator.mul(2, 3)
# 6

operator.mul(6, 4)
# 24

operator.mul(24, 5)
# 120
```

Передача функции необязательна:

```python
data = [5, 2, 6, 4, 5, 9, 1]
# Накопление без функции по умолчанию использует сложение
result = itertools.accumulate(data)
for each in result:
    print(each)
```

Вывод:

```plaintext
5
7
13
17
22
31
32
```

Если функция не указана, элементы суммируются:

```python
5
5 + 2 = 7
7 + 6 = 13
13 + 4 = 17
17 + 5 = 22
22 + 9 = 31
31 + 1 = 32
```

## combinations()

Принимает итерируемый объект и целое число. Создает все уникальные комбинации, состоящие из r элементов.

```python
itertools.combinations(iterable, r)
```

Пример:

```python
shapes = ['circle', 'triangle', 'square',]
# Генерация всех комбинаций из 2 элементов
result = itertools.combinations(shapes, 2)
for each in result:
    print(each)
```

Вывод:

```plaintext
('circle', 'triangle')
('circle', 'square')
('triangle', 'square')
```

## combinations_with_replacement()

Похоже на combinations(), но позволяет отдельным элементам повторяться более одного раза.

```python
itertools.combinations_with_replacement(iterable, r)
```

Пример:

```python
shapes = ['circle', 'triangle', 'square']
# Генерация комбинаций с разрешением повторений элементов
result = itertools.combinations_with_replacement(shapes, 2)
for each in result:
    print(each)
```

Вывод:

```plaintext
('circle', 'circle')
('circle', 'triangle')
('circle', 'square')
('triangle', 'triangle')
('triangle', 'square')
('square', 'square')
```

## count()

Создает итератор, который возвращает равномерно расположенные значения, начиная с числа start.

```python
itertools.count(start=0, step=1)
```

Пример:

```python
# Счет, начиная с 10, с шагом 3
for i in itertools.count(10,3):
    print(i)
    if i > 20:
        break
```

Вывод:

```plaintext
10
13
16
19
22
```

## cycle()

Эта функция бесконечно циклически проходит по итерируемому объекту.

```python
itertools.cycle(iterable)
```

Пример:

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet']
# Бесконечный цикл по цветам
for color in itertools.cycle(colors):
    print(color)
```

Вывод:

```plaintext
red
orange
yellow
green
blue
violet
red
orange
```

При достижении конца итерируемого объекта он начинается снова с самого начала.

## chain()

Принимает серию итерируемых объектов и возвращает их как один длинный итерируемый объект.

```python
itertools.chain(*iterables)
```

Пример:

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue']
shapes = ['circle', 'triangle', 'square', 'pentagon']
# Объединение нескольких итерируемых объектов в один
result = itertools.chain(colors, shapes)
for each in result:
    print(each)
```

Вывод:

```plaintext
red
orange
yellow
green
blue
circle
triangle
square
pentagon
```

## compress()

Фильтрует один итерируемый объект с помощью другого.

```python
itertools.compress(data, selectors)
```

Пример:

```python
shapes = ['circle', 'triangle', 'square', 'pentagon']
selections = [True, False, True, False]
# Фильтрация фигур на основе булевых выборок
result = itertools.compress(shapes, selections)
for each in result:
    print(each)
```

Вывод:

```plaintext
circle
square
```

## dropwhile()

Создает итератор, который отбрасывает элементы из итерируемого объекта, пока предикат истинен; после этого возвращает каждый оставшийся элемент.

```python
itertools.dropwhile(predicate, iterable)
```

Пример:

```python
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]
# Отбросить элементы, пока условие истинно, затем вернуть все оставшиеся
result = itertools.dropwhile(lambda x: x<5, data)
for each in result:
    print(each)
```

Вывод:

```plaintext
5
6
7
8
9
10
1
```

## filterfalse()

Создает итератор, который отфильтровывает элементы из итерируемого объекта, возвращая только те, для которых предикат ложен.

```python
itertools.filterfalse(predicate, iterable)
```

Пример:

```python
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]
# Вернуть элементы, для которых предикат ложен
result = itertools.filterfalse(lambda x: x<5, data)
for each in result:
    print(each)
```

Вывод:

```plaintext
5
6
7
8
9
10
```

## groupby()

Проще говоря, эта функция группирует элементы.

```python
itertools.groupby(iterable, key=None)
```

Пример:

```python
robots = [
    {"name": "blaster", "faction": "autobot"},
    {"name": "galvatron", "faction": "decepticon"},
    {"name": "jazz", "faction": "autobot"},
    {"name": "metroplex", "faction": "autobot"},
    {"name": "megatron", "faction": "decepticon"},
    {"name": "starcream", "faction": "decepticon"},
]
# Группировка роботов по фракции (итерируемый объект должен быть отсортирован для правильной группировки)
for key, group in itertools.groupby(robots, key=lambda x: x['faction']):
    print(key)
    print(list(group))
```

Вывод:

```plaintext
autobot
[{'name': 'blaster', 'faction': 'autobot'}]
decepticon
[{'name': 'galvatron', 'faction': 'decepticon'}]
autobot
[{'name': 'jazz', 'faction': 'autobot'}, {'name': 'metroplex', 'faction': 'autobot'}]
decepticon
[{'name': 'megatron', 'faction': 'decepticon'}, {'name': 'starcream', 'faction': 'decepticon'}]
```

## islice()

Эта функция очень похожа на срезы. Она позволяет вырезать часть итерируемого объекта.

```python
itertools.islice(iterable, start, stop[, step])
```

Пример:

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue',]
# Срез итерируемого объекта для получения первых 2 элементов
few_colors = itertools.islice(colors, 2)
for each in few_colors:
    print(each)
```

Вывод:

```plaintext
red
orange
```

## permutations()

```python
itertools.permutations(iterable, r=None)
```

Пример:

```python
alpha_data = ['a', 'b', 'c']
# Генерация всех перестановок элементов
result = itertools.permutations(alpha_data)
for each in result:
    print(each)
```

Вывод:

```plaintext
('a', 'b', 'c')
('a', 'c', 'b')
('b', 'a', 'c')
('b', 'c', 'a')
('c', 'a', 'b')
('c', 'b', 'a')
```

## product()

Создает декартовы произведения из серии итерируемых объектов.

```python
num_data = [1, 2, 3]
alpha_data = ['a', 'b', 'c']
# Генерация декартова произведения итерируемых объектов
result = itertools.product(num_data, alpha_data)
for each in result:
    print(each)
```

Вывод:

```plaintext
(1, 'a')
(1, 'b')
(1, 'c')
(2, 'a')
(2, 'b')
(2, 'c')
(3, 'a')
(3, 'b')
(3, 'c')
```

## repeat()

Эта функция будет повторять объект снова и снова. Если не указан аргумент `times`.

```python
itertools.repeat(object[, times])
```

Пример:

```python
# Повторить объект 3 раза
for i in itertools.repeat("spam", 3):
    print(i)
```

Вывод:

```plaintext
spam
spam
spam
```

## starmap()

Создает итератор, который вычисляет функцию, используя аргументы, полученные из итерируемого объекта.

```python
itertools.starmap(function, iterable)
```

Пример:

```python
data = [(2, 6), (8, 4), (7, 3)]
# Применить функцию к распакованным аргументам из каждой кортежной пары
result = itertools.starmap(operator.mul, data)
for each in result:
    print(each)
```

Вывод:

```plaintext
12
32
21
```

## takewhile()

Противоположность dropwhile(). Создает итератор и возвращает элементы из итерируемого объекта, пока предикат истинен.

```python
itertools.takewhile(predicate, iterable)
```

Пример:

```python
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]
# Брать элементы, пока условие истинно, затем остановиться
result = itertools.takewhile(lambda x: x<5, data)
for each in result:
    print(each)
```

Вывод:

```plaintext
1
2
3
4
```

## tee()

Возвращает n независимых итераторов из одного итерируемого объекта.

```python
itertools.tee(iterable, n=2)
```

Пример:

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue']
# Разделить итерируемый объект на два независимых итератора
alpha_colors, beta_colors = itertools.tee(colors)
for each in alpha_colors:
    print(each)
```

Вывод:

```plaintext
red
orange
yellow
green
blue
```

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue']
alpha_colors, beta_colors = itertools.tee(colors)
for each in beta_colors:
    print(each)
```

Вывод:

```plaintext
red
orange
yellow
green
blue
```

## zip_longest()

Создает итератор, который агрегирует элементы из каждого из итерируемых объектов. Если итерируемые объекты имеют разную длину, отсутствующие значения заполняются значением `fillvalue`. Итерация продолжается до тех пор, пока не будет исчерпан самый длинный итерируемый объект.

```python
itertools.zip_longest(*iterables, fillvalue=None)
```

Пример:

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue',]
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]
# Объединить итерируемые объекты, заполняя отсутствующие значения None
for each in itertools.zip_longest(colors, data, fillvalue=None):
    print(each)
```

Вывод:

```plaintext
('red', 1)
('orange', 2)
('yellow', 3)
('green', 4)
('blue', 5)
(None, 6)
(None, 7)
(None, 8)
(None, 9)
(None, 10)
```

## Соответствующие ссылки

- <router-link to="/cheatsheet/control-flow">Шпаргалка: Управление потоком (for loops)</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Шпаргалка: Списки и кортежи</router-link>
- <router-link to="/cheatsheet/comprehensions">Шпаргалка: Генераторы (Comprehensions)</router-link>
- <router-link to="/cheatsheet/functions">Шпаргалка: Функции (Генераторы)</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">Блог: Генераторы Python по шагам</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
- <router-link to="/builtin/next">next()</router-link>
- <router-link to="/builtin/map">map()</router-link>
- <router-link to="/builtin/filter">filter()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
- <router-link to="/builtin/enumerate">enumerate()</router-link>
- <router-link to="/builtin/range">range()</router-link>
