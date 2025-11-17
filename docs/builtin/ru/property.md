---
title: 'Встроенная функция property() Python - Шпаргалка по Python'
description: 'Возвращает атрибут свойства.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python property()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#property">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Возвращает атрибут свойства.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Функция `property()` используется для создания атрибутов свойств. Атрибут свойства — это особый вид атрибута, который имеет методы getter, setter и delete. Это позволяет добавлять логику при получении, установке или удалении значения атрибута.

Чаще используется декоратор `@property`, который является более удобным способом использования `property()`.

### Example

Вот пример использования `property()` для создания атрибута только для чтения:

```python
class Person:
    def __init__(self, name):
        self._name = name

    def get_name(self):
        print("Getting name")
        return self._name

    # Создаем свойство
    name = property(get_name)

p = Person("John")
print(p.name)  # Это вызывает get_name()
```

Output:

```plaintext
Getting name
John
```

Note: `p.name = "Jane"` вызовет AttributeError, потому что нет setter.

А вот более распространенный способ сделать это с помощью декоратора `@property`:

```python
class Person:
    def __init__(self, name):
        self._name = name

    @property
    def name(self):
        print("Getting name")
        return self._name

p = Person("John")
print(p.name)
```

Output:

```plaintext
Getting name
John
```

## Relevant links

- <router-link to="/cheatsheet/oop-basics">Cheatsheet: Основы ООП</router-link>
- <router-link to="/cheatsheet/decorators">Cheatsheet: Декораторы</router-link>
- <router-link to="/cheatsheet/dataclasses">Cheatsheet: Датаклассы</router-link>
- <router-link to="/builtin/getattr">getattr()</router-link>
- <router-link to="/builtin/setattr">setattr()</router-link>
- <router-link to="/builtin/delattr">delattr()</router-link>
