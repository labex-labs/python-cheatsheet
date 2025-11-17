---
title: 'Встроенная функция Python issubclass() - Шпаргалка по Python'
description: 'Возвращает True, если класс является подклассом (прямым, косвенным или виртуальным) classinfo. Класс считается подклассом самого себя. classinfo может быть кортежем объектов классов (или рекурсивно, других таких кортежей) или объединением типов (Union Type); в этом случае возвращается True, если класс является подклассом любого элемента в classinfo. В любом другом случае вызывается исключение TypeError.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python issubclass()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#issubclass">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Возвращает True, если класс является подклассом (прямым, косвенным или виртуальным) classinfo. Класс считается подклассом самого себя. classinfo может быть кортежем из объектов классов (или рекурсивно, других таких кортежей) или Union Type, в этом случае возвращается True, если класс является подклассом любого элемента в classinfo. В любом другом случае вызывается исключение TypeError.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Встроенная функция `issubclass()` в Python — это встроенная функция, которая проверяет, является ли данный класс подклассом другого класса или кортежа классов. Она возвращает `True`, если первый аргумент является подклассом второго аргумента, и `False` в противном случае. Эта функция полезна для объектно-ориентированного программирования, поскольку позволяет проверять отношения между классами и реализовывать полиморфное поведение на основе наследования.

## Examples

```python
class First:
    pass

class Second(First):
    pass

print(issubclass(Second, First))
print(issubclass(First, Second))
```

Output:

```plaintext
True
False
```

## Relevant links

- <router-link :to="'/builtin/isinstance'">`isinstance()`</router-link>
- <router-link :to="'/builtin/type'">`type()`</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">Основы ООП</router-link>
- <router-link :to="'/builtin/object'">`object()`</router-link>
