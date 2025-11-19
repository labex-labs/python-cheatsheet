---
title: 'Встроенная функция Python dict() - Шпаргалка по Python'
description: 'Создание нового словаря. Объект dict — это класс словаря. См. dict и Типы отображений — dict для документации по этому классу.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python dict()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/stdtypes.html#dict">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Создает новый словарь. Объект `dict` — это класс словаря.
  </base-disclaimer-content>
</base-disclaimer>

Конструктор `dict()` в Python — это универсальный способ создания словарей.

Вы можете создать пустой словарь, или создать словарь из аргументов ключевого слова или из <router-link to="/builtin/iter">итерируемого объекта</router-link> пар ключ-значение.

## Примеры

**Создание пустого словаря:**

```python
my_dict = dict()
print(my_dict)
```

```output
{}
```

**Создание словаря с аргументами ключевого слова:**

```python
# Использование аргументов ключевого слова
my_dict = dict(name="John", age=30)
print(my_dict)
```

```output
{'name': 'John', 'age': 30}
```

**Создание словаря из итерируемого объекта:**

```python
my_list = [('name', 'Jane'), ('age', 25)]
my_dict = dict(my_list)
print(my_dict)
```

```output
{'name': 'Jane', 'age': 25}
```

Создание пустого словаря:

```python
a = dict()
type(a)
```

```output
<class 'dict'>
```

## Связанные ссылки

- <router-link :to="'/builtin/iter'">`iter()`</router-link>
- <router-link :to="'/cheatsheet/dictionaries'">Словари (Dictionaries)</router-link>
- <router-link :to="'/blog/python-data-types'">Типы данных Python</router-link>
- <router-link :to="'/builtin/len'">`len()`</router-link>
- <router-link :to="'/builtin/list'">`list()`</router-link>
- <router-link :to="'/builtin/tuple'">`tuple()`</router-link>
