---
title: 'Модуль Random Python - Шпаргалка по Python'
description: 'Модуль random — это встроенный модуль, позволяющий генерировать случайные элементы.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Модуль Python Random
</base-title>

[random](https://docs.python.org/3/library/random.html) — это встроенный модуль, который позволяет нам генерировать случайные элементы.

```python
import random
```

## seed()

Метод `seed` используется для инициализации генератора случайных чисел.

```python
# Установить seed для воспроизводимых случайных чисел
random.seed(1)
random.random()
```

```output
0.13436424411240122
```

Установка seed в число всегда будет возвращать одно и то же случайное число:

```python
random.seed(1)
random.random()
```

```output
0.13436424411240122
```

```python
random.seed(1)
random.random()
```

```output
0.13436424411240122
```

```python
random.seed(1)
random.random()
```

```output
0.13436424411240122
```

```python
random.seed(1)
random.random()
```

```output
0.13436424411240122
```

```python
random.seed(1)
random.random()
```

```output
0.13436424411240122
```

Значение по умолчанию для метода `seed` — это _текущее системное время_, поэтому мы всегда получаем разное число:

```python
# Генерация случайного числа без установки seed (использует системное время)
random.random()
```

```output
0.8474337369372327
```

```python
random.random()
```

```output
0.763774618976614
```

```python
random.random()
```

```output
0.2550690257394217
```

## randint()

```python
random.randint(start: int, stop: int)
```

Этот метод возвращает случайное число между заданными параметрами `start` и `stop`:

```python
random.randint(1, 5)
```

```output
3
```

```python
random.randint(1, 5)
```

```output
2
```

```python
random.randint(1, 5)
```

```output
5
```

```python
random.randint(1, 5)
```

```output
1
```

```python
random.randint(1, 5)
```

```output
3
```

```python
random.randint(1, 5)
```

```output
1
```

## choice()

Метод `choice` возвращает случайно выбранный элемент из итерируемого объекта, такого как `list`, `set` или `str`:

```python
random.choice([1, 2, 3, 4])
```

```output
1
```

```python
random.choice([1, 2, 3, 4])
```

```output
2
```

```python
random.choice([1, 2, 3, 4])
```

```output
4
```

```python
random.choice([1, 2, 3, 4])
```

```output
4
```

## shuffle()

Метод `shuffle` принимает итерируемый объект и перемешивает его:

```python
my_list = [1, 2, 3, 4]

# Перемешать список на месте
random.shuffle(my_list)
my_list
```

```output
[1, 4, 3, 2]
```

```python
random.shuffle(my_list)
my_list
```

```output
[2, 4, 3, 1]
```

```python
random.shuffle(my_list)
my_list
```

```output
[4, 2, 3, 1]
```

## sample()

```python
random.sample(iterable, k: int)
```

`sample` возвращает список со случайной выборкой из итерируемого объекта. Количество возвращаемых элементов равно параметру `k`:

```python
# Случайная выборка k элементов из списка
random.sample([1, 2, 3, 4], 1)
```

```output
[3]
```

```python
random.sample([1, 2, 3, 4], 2)
```

```output
[3, 4]
```

```python
random.sample([1, 2, 3, 4], 3)
```

```output
[4, 3, 2]
```

```python
random.sample([1, 2, 3, 4], 4)
```

```output
[1, 2, 4, 3]
```

## random()

Метод `random` возвращает случайное число с плавающей запятой в диапазоне от 0.0 до 1.0:

```python
random.random()
```

```output
0.4143139993007743
```

```python
random.random()
```

```output
0.17300740157905092
```

```python
random.random()
```

```output
0.548798761388153
```

```python
random.random()
```

```output
0.7030407620656315
```

## uniform()

Метод `uniform` похож на `randint`, но возвращает число с плавающей запятой:

```python
random.uniform(1, 5)
```

```output
3.697943322009309
```

```python
random.uniform(1, 5)
```

```output
2.498812082006561
```

```python
random.uniform(1, 5)
```

```output
2.7558465201782525
```

```python
random.uniform(1, 5)
```

```output
3.0337059529999273
```

## Соответствующие ссылки

- <router-link to="/cheatsheet/lists-and-tuples">Шпаргалка: Списки и кортежи</router-link>
- <router-link to="/blog/python-data-types">Блог: Типы данных Python</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/float">float()</router-link>
