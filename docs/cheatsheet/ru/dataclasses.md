---
title: 'Датаклассы Python - Шпаргалка по Python'
description: 'Датаклассы — это классы Python, оптимизированные для хранения объектов данных. Этот модуль предоставляет декоратор и функции для автоматического добавления сгенерированных специальных методов, таких как __init__() и __repr__(), к классам, определенным пользователем.'
labUrl: 'https://labex.io/ru/labs/python-python-dataclasses-633652?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Датаклассы Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

`Dataclasses` — это классы Python, но они подходят для хранения объектов данных.
Этот модуль предоставляет декоратор и функции для автоматического добавления сгенерированных специальных методов, таких как `__init__()` и `__repr__()`, в классы, определяемые пользователем.

## Особенности

1. Они хранят данные и представляют определенный тип данных. Например, число. Для тех, кто знаком с ORM, экземпляр модели — это объект данных. Он представляет определенный вид сущности. Он содержит атрибуты, которые определяют или представляют эту сущность.

2. Их можно сравнивать с другими объектами того же типа. Например, число может быть больше, меньше или равно другому числу.

Python 3.7 предоставляет декоратор `dataclass`, который используется для преобразования класса в датакласс.

```python
class Number:
    def __init__(self, val):
        self.val = val

obj = Number(2)
obj.val
```

Вывод:

```plaintext
2
```

с dataclass

```python
# Dataclass: автоматически генерирует методы __init__ и __repr__
from dataclasses import dataclass

@dataclass  # Декоратор преобразует класс в датакласс
class Number:
    val: int  # Обязательная аннотация типа

obj = Number(2)  # __init__ создается автоматически
obj.val
```

Вывод:

```plaintext
2
```

## Значения по умолчанию

Легко добавить значения по умолчанию для полей вашего датакласса.

```python
# Dataclass со значениями по умолчанию: поля со значениями по умолчанию должны следовать за обязательными полями
@dataclass
class Product:
    name: str        # Обязательное поле
    count: int = 0   # Необязательное поле со значением по умолчанию
    price: float = 0.0  # Необязательное поле со значением по умолчанию

obj = Product("Python")  # Требуется только name, остальные используют значения по умолчанию
obj.name
```

Вывод:

```plaintext
Python
```

```python
obj.count
```

Вывод:

```plaintext
0
```

```python
obj.price
```

Вывод:

```plaintext
0.0
```

## Подсказки типов (Type hints)

Обязательно указывать тип данных в датаклассе. Однако, если вы предпочитаете не указывать тип данных, используйте `typing.Any`.

```python
from dataclasses import dataclass
from typing import Any

@dataclass
class WithoutExplicitTypes:
   name: Any
   value: Any = 42
```

## Соответствующие ссылки

- <router-link to="/cheatsheet/oop-basics">Основы ООП</router-link>
- <router-link to="/cheatsheet/decorators">Декораторы</router-link>
- <router-link to="/blog/python-data-types">Статья в блоге о типах данных Python</router-link>
- <router-link to="/builtin/object">object()</router-link>
- <router-link to="/builtin/repr">repr()</router-link>
- <router-link to="/builtin/type">type()</router-link>
