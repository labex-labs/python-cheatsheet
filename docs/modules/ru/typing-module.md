---
title: "Модуль Typing Python - Шпаргалка Python"
description: "Модуль `typing` предоставляет подсказки типов для аргументов функций, значений возврата и структур данных."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Модуль Typing Python
</base-title>

Модуль `typing` предоставляет подсказки типов для аргументов функций, значений возврата и структур данных.

```python
from typing import TypedDict
```

Подсказки типов не меняют то, как Python выполняет программу. Они помогают редакторам, линтерам и читателям понимать, какие значения ожидает код.

## Аннотация сигнатур функций

```python
def greet(name: str) -> str:
    return f'Hello {name}'

print(greet('Ada'))
```

```output
Hello Ada
```

Аннотация `name: str` означает, что функция ожидает строку. Аннотация `-> str` означает, что она должна вернуть строку.

## Часто используемые типы коллекций

Используйте подсказки типов, чтобы описать форму данных.

```python
def average(values: list[float]) -> float:
    return sum(values) / len(values)

print(average([1.0, 2.0, 3.0]))
```

```output
2.0
```

Аннотации вида `list[str]` требуют Python 3.9 или новее.

## Необязательные значения

Используйте `| None`, когда значение может отсутствовать.

```python
def find_user(user_id: int) -> str | None:
    if user_id == 1:
        return 'Ada'
    return None

print(find_user(1))
print(find_user(2))
```

```output
Ada
None
```

Синтаксис объединения `X | Y` требует Python 3.10 или новее.

## TypedDict

`TypedDict` описывает объекты, похожие на словари, с фиксированными ключами.

```python
from typing import TypedDict

class User(TypedDict):
    name: str
    active: bool

user: User = {'name': 'Ada', 'active': True}
print(user['name'])
```

```output
Ada
```

## Псевдонимы типов

Псевдоним типа дает более сложному типу читаемое имя.

```python
Coordinates = tuple[float, float]

def show_location(point: Coordinates) -> str:
    return f'{point[0]}, {point[1]}'

print(show_location((12.5, 35.8)))
```

```output
12.5, 35.8
```

## Ссылки по теме

- <router-link to="/cheatsheet/functions">Шпаргалка: функции</router-link>
- <router-link to="/cheatsheet/dictionaries">Шпаргалка: словари</router-link>
- <router-link to="/cheatsheet/dataclasses">Шпаргалка: dataclasses</router-link>
