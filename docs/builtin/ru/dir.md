---
title: 'Встроенная функция Python dir() - Шпаргалка по Python'
description: 'Без аргументов возвращает список имен в текущей локальной области видимости. С аргументом пытается вернуть список допустимых атрибутов для этого объекта.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python dir()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#dir">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Без аргументов возвращает список имен в текущей локальной области видимости. С аргументом пытается вернуть список допустимых атрибутов для этого объекта.
  </base-disclaimer-content>
</base-disclaimer>

## Введение

Функция `dir()` в Python — это мощная встроенная функция, которая возвращает список имен в текущем пространстве имен или атрибуты заданного объекта. Она часто используется для интроспекции и исследования объектов, модулей и классов, помогая вам обнаружить доступные методы, атрибуты и имена, с которыми вы можете работать.

## Синтаксис

```python
dir([object])
```

- `object` (необязательно): Объект, атрибуты которого вы хотите исследовать. Если не указан, возвращает имена в текущем пространстве имен.

## Исследование имен в текущем пространстве имен

```python
a = 10
b = "Hello"
def my_function():
    pass

print(dir())
```

Вывод:

```plaintext
['__annotations__', '__builtins__', '__doc__', '__loader__', '__name__', '__package__', '__spec__', 'a', 'b', 'my_function']
```

## Исследование атрибутов модуля

```python
import math
print(dir(math))
```

Вывод:

```plaintext
['__doc__', '__loader__', '__name__', '__package__', '__spec__', 'acos', 'acosh', 'asin', ... ]
```

## Исследование атрибутов объекта

```python
class MyClass:
    def __init__(self):
        self.x = 5
        self.y = "Hello"

obj = MyClass()
print(dir(obj))
```

Вывод:

```plaintext
['__class__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', ... 'x', 'y']
```

## Использование `dir()` со встроенными типами

```python
my_list = [1, 2, 3]
print(dir(my_list))
```

Вывод:

```plaintext
[..., 'append', 'clear', 'copy', 'count', 'extend', 'index', 'insert', 'pop', 'remove', 'reverse', 'sort']
```

## Фильтрация вывода `dir()`

```python
import math
print([name for name in dir(math) if not name.startswith("__")])
```

Вывод:

```plaintext
['acos', 'acosh', 'asin', 'asinh', 'atan', 'atan2', ... ]
```

## Связанные ссылки

- <router-link :to="'/builtin/globals'">`globals()`</router-link>
- <router-link :to="'/builtin/locals'">`locals()`</router-link>
- <router-link :to="'/builtin/hasattr'">`hasattr()`</router-link>
- <router-link :to="'/builtin/getattr'">`getattr()`</router-link>
- <router-link :to="'/cheatsheet/debugging'">Отладка</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">Основы ООП</router-link>
