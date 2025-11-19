---
title: 'Встроенная функция Python isinstance() - Справочник по Python'
description: 'Возвращает True, если аргумент object является экземпляром аргумента classinfo или его (прямого, косвенного или виртуального) подкласса. Если object не является объектом данного типа, функция всегда возвращает False. Если classinfo представляет собой кортеж объектов типов (или рекурсивно других таких кортежей) или Объединение (Union) нескольких типов, возвращает True, если object является экземпляром любого из этих типов. Если classinfo не является типом или кортежем типов и таких кортежей, вызывается исключение TypeError.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python isinstance()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#isinstance">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Возвращает True, если аргумент object является экземпляром аргумента classinfo, или его (прямого, косвенного или виртуального) подкласса. Если object не является объектом данного типа, функция всегда возвращает False. Если classinfo является кортежем объектов типов (или рекурсивно, других таких кортежей) или Объединением Типов (Union Type) нескольких типов, возвращает True, если object является экземпляром любого из типов. Если classinfo не является типом или кортежем типов и таких кортежей, вызывается исключение TypeError.
  </base-disclaimer-content>
</base-disclaimer>

## Введение

Функция `isinstance()` проверяет, является ли объект экземпляром определенного класса или его подкласса. Она возвращает `True`, если объект указанного типа, и `False` в противном случае.

Вы также можете проверять соответствие кортежу типов.

### Примеры

**Проверка типа объекта:**

```python
my_list = [1, 2, 3]
print(isinstance(my_list, list))
print(isinstance(my_list, tuple))
```

```output
True
False
```

**Проверка по нескольким типам:**

```python
print(isinstance("hello", (int, str, list)))
```

```output
True
```

```python
isinstance(1, int)
isinstance(1, str)
```

```output
True
False
```

## Связанные ссылки

- <router-link :to="'/builtin/issubclass'">`issubclass()`</router-link>
- <router-link :to="'/builtin/type'">`type()`</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">Основы ООП</router-link>
- <router-link :to="'/blog/python-data-types'">Типы данных Python</router-link>
- <router-link :to="'/builtin/callable'">`callable()`</router-link>
