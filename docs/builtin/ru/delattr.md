---
title: 'Встроенная функция Python delattr() - Шпаргалка по Python'
description: "Это аналог setattr(). Аргументы — объект и строка. Строка должна быть именем одного из атрибутов объекта. Функция удаляет именованный атрибут, если объект это разрешает. Например, delattr(x, 'foobar') эквивалентно del x.foobar."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python delattr()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#delattr">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Это аналог `setattr()`. Аргументами являются объект и строка. Строка должна быть именем одного из атрибутов объекта. Функция удаляет именованный атрибут, если объект это разрешает. Например, `delattr(x, 'foobar')` эквивалентно `del x.foobar`.
  </base-disclaimer-content>
</base-disclaimer>

## Введение

Функция `delattr()` в Python используется для удаления атрибута из объекта. Это парная функция к `setattr()` и <router-link to="/builtin/getattr">`getattr()`</router-link>.

## Синтаксис

```python
delattr(object, name)
```

- **object**: Объект, из которого должен быть удален атрибут.
- **name**: Имя удаляемого атрибута, заданное в виде строки.

## Примеры

### Удаление атрибута из объекта

```python
class Person:
    name = "John"
    age = 30

person = Person()
print(person.__dict__)
delattr(person, "age")
print(person.__dict__)
```

```output
{'name': 'John', 'age': 30}
{'name': 'John'}
```

### Удаление несуществующего атрибута

```python
class Person:
    name = "John"

person = Person()
try:
    delattr(person, "age")
except AttributeError as e:
    print(f"Error: {e}")
```

```output
Error: age
```

## Связанные ссылки

- <router-link :to="'/builtin/setattr'">`setattr()`</router-link>
- <router-link :to="'/builtin/getattr'">`getattr()`</router-link>
- <router-link :to="'/builtin/hasattr'">`hasattr()`</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">Основы ООП</router-link>
