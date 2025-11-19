---
title: 'Встроенная функция Python vars() - Шпаргалка по Python'
description: 'Возвращает атрибут __dict__ модуля, класса, экземпляра или любого другого объекта с атрибутом __dict__.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python vars()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#vars">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Возвращает атрибут __dict__ модуля, класса, экземпляра или любого другого объекта, имеющего атрибут __dict__.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Функция `vars()` возвращает атрибут `__dict__` объекта. Этот словарь содержит записываемые атрибуты объекта. Это удобный способ увидеть все атрибуты объекта сразу.

При вызове без аргументов `vars()` действует как `locals()`, возвращая словарь локальной таблицы символов.

### Examples

**Получение атрибутов объекта:**

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

my_person = Person("Dwight", 35)
print(vars(my_person))
```

```output
{'name': 'Dwight', 'age': 35}
```

**Использование `vars()` без аргументов:**

```python
def my_function():
    x = 10
    print(vars())

my_function()
```

```output
{'x': 10}
```

## Relevant links

- <router-link to="/cheatsheet/oop-basics">Cheatsheet: Основы ООП</router-link>
- <router-link to="/cheatsheet/debugging">Cheatsheet: Отладка</router-link>
- <router-link to="/cheatsheet/dictionaries">Cheatsheet: Словари</router-link>
- <router-link to="/builtin/dir">dir()</router-link>
- <router-link to="/builtin/object">object()</router-link>
- <router-link to="/builtin/globals">globals()</router-link>
- <router-link to="/builtin/locals">locals()</router-link>
