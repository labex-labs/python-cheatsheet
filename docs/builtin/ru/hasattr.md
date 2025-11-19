---
title: 'Встроенная функция Python hasattr() - Шпаргалка по Python'
description: 'Аргументы — объект и строка. Результат — True, если строка является именем одного из атрибутов объекта, и False в противном случае. (Это реализуется вызовом getattr(object, name) и проверкой, вызывает ли он AttributeError.)'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python hasattr()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#hasattr">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Аргументами являются объект и строка. Результат равен `True`, если строка является именем одного из атрибутов объекта, и `False` в противном случае. (Это реализовано путем вызова <router-link to="/builtin/getattr">getattr(object, name)</router-link> и проверки, вызывает ли он исключение `AttributeError` или нет.)
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Функция `hasattr()` проверяет, имеет ли объект заданный атрибут. Она принимает объект и имя атрибута (в виде строки) в качестве аргументов и возвращает `True`, если атрибут существует, и `False` в противном случае.

### Example

```python
class Person:
    name = "John"
    age = 30

p = Person()

print(hasattr(p, 'name'))
print(hasattr(p, 'age'))
print(hasattr(p, 'email'))
```

```output
True
True
False
```

## Relevant links

- <router-link :to="'/builtin/getattr'">`getattr()`</router-link>
- <router-link :to="'/builtin/setattr'">`setattr()`</router-link>
- <router-link :to="'/builtin/delattr'">`delattr()`</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">Основы ООП</router-link>
- <router-link :to="'/builtin/dir'">`dir()`</router-link>
