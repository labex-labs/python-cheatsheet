---
title: 'Встроенная функция Python getattr() - Шпаргалка по Python'
description: 'Возвращает значение именованного атрибута объекта. Имя должно быть строкой. Если строка является именем одного из атрибутов объекта, результатом будет значение этого атрибута.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python getattr()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#getattr">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Возвращает значение именованного атрибута объекта. name должна быть строкой. Если строка является именем одного из атрибутов объекта, результатом будет значение этого атрибута.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Функция `getattr()` в Python — это встроенная функция, которая позволяет получать доступ к атрибуту объекта по его имени, заданному в виде строки. Это мощная функция для динамического программирования, поскольку она позволяет извлекать атрибут, когда его имя становится известно только во время выполнения. Вы также можете указать значение по умолчанию, которое будет возвращено, если атрибут не существует, что помогает избежать ошибок.

## Syntax

```python
getattr(object, name)
```

или

```python
getattr(object, name, default)
```

-`object`: Объект, атрибут которого вы хотите получить.

-`name`: Имя атрибута, который вы хотите извлечь.

-`default`: (Необязательно) Значение, которое будет возвращено, если атрибут не найден. Если не указано, возвращается `None`.

## Example

```python
class Example:
    attribute = "Hello, World!"

# Создание экземпляра класса
obj = Example()

# Использование getattr для доступа к атрибуту
value = getattr(obj, 'attribute', 'Nothing found')

print(value)
```

Output:

```plaintext
Hello, World!
```

Note: If the 'attribute' does not exist then 'Nothing found' will be printed.

## Relevant links

- <router-link :to="'/builtin/hasattr'">`hasattr()`</router-link>
- <router-link :to="'/builtin/delattr'">`delattr()`</router-link>
- <router-link :to="'/builtin/setattr'">`setattr()`</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP Basics</router-link>
- <router-link :to="'/builtin/dir'">`dir()`</router-link>
