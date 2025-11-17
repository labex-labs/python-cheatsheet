---
title: 'Функция classmethod() в Python - Шпаргалка по Python'
description: 'Преобразует метод в классовый метод. Классовый метод получает класс в качестве неявного первого аргумента, подобно тому, как метод экземпляра получает экземпляр.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python classmethod()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#classmethod">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Преобразует метод в классовый метод. Классовый метод получает класс в качестве неявного первого аргумента, точно так же, как метод экземпляра получает экземпляр.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

`classmethod` — это метод, привязанный к классу, а не к экземпляру класса. Он принимает сам класс в качестве первого аргумента, условно называемого `cls`. Это контрастирует с обычным методом экземпляра, который принимает экземпляр в качестве первого аргумента (`self`).

Они часто используются для фабричных методов, которые создают экземпляры класса определенным образом.

## Example

Вот распространенный сценарий использования: создание фабричного метода, который может создавать экземпляр класса из другого формата данных, например, из словаря.

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    @classmethod
    def from_dict(cls, data):
        # Это фабричный метод, который создает экземпляр Person из словаря
        return cls(data['name'], data['age'])

    def display(self):
        print(f"Name: {self.name}, Age: {self.age}")

# Данные для нового человека
person_data = {'name': 'John', 'age': 30}

# Создание экземпляра Person с использованием классового метода
p = Person.from_dict(person_data)

p.display()
```

Output:

```plaintext
Name: John, Age: 30
```

## Relevant links

- <router-link to="/cheatsheet/oop-basics">Cheatsheet: Основы ООП</router-link>
- <router-link to="/cheatsheet/decorators">Cheatsheet: Декораторы</router-link>
- <router-link to="/cheatsheet/functions">Cheatsheet: Функции</router-link>
- <router-link to="/builtin/staticmethod">staticmethod()</router-link>
- <router-link to="/builtin/property">property()</router-link>
- <router-link to="/builtin/object">object()</router-link>
