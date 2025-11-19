---
title: 'Встроенная функция Python setattr() - Шпаргалка по Python'
description: "Это аналог getattr(). Аргументы: объект, строка и произвольное значение. Строка может называть существующий или новый атрибут. Функция присваивает значение атрибуту, если объект это разрешает. Например, setattr(x, 'foobar', 123) эквивалентно x.foobar = 123."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python setattr()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#setattr">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Это парная функция к <router-link to="/builtin/getattr">getattr()</router-link>. Аргументами являются объект, строка и произвольное значение. Строка может называть существующий или новый атрибут. Функция присваивает значение атрибуту, если объект это разрешает. Например, setattr(x, 'foobar', 123) эквивалентно x.foobar = 123.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Встроенная функция `setattr()` в Python позволяет устанавливать значение атрибута объекта. Она принимает три аргумента: объект, имя атрибута (в виде строки) и значение, которое вы хотите присвоить этому атрибуту.

Это особенно полезно, когда имя атрибута определяется динамически во время выполнения. Вместо использования точечной нотации (`object.attribute = value`), которая требует заранее знать имя атрибута, `setattr()` позволяет использовать переменную.

### Examples

Вот как можно использовать `setattr()` для добавления или изменения атрибутов:

```python
class Person:
    name = "John"

p = Person()

# Установить атрибут 'age' в 30
setattr(p, 'age', 30)

print(p.age)

# Изменить атрибут 'name'
setattr(p, 'name', 'Jane')
print(p.name)
```

```output
30
Jane
```

## Relevant links

- <router-link to="/cheatsheet/oop-basics">Cheatsheet: Основы ООП</router-link>
- <router-link to="/builtin/object">object()</router-link>
- <router-link to="/builtin/dir">dir()</router-link>
- <router-link to="/builtin/getattr">getattr()</router-link>
- <router-link to="/builtin/hasattr">hasattr()</router-link>
- <router-link to="/builtin/delattr">delattr()</router-link>
