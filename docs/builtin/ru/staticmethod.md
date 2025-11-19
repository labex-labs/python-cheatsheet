---
title: 'Встроенная функция staticmethod() Python - Шпаргалка по Python'
description: 'Преобразование метода в статический метод.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python staticmethod()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#staticmethod">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Преобразует метод в статический метод.
  </base-disclaimer-content>
</base-disclaimer>

## Введение

Декоратор `@staticmethod` преобразует метод таким образом, что он принадлежит классу, но не получает класс или экземпляр в качестве первого аргумента. Это полезно для создания служебных функций, которые логически связаны с классом, но не зависят от состояния класса или экземпляра.

Статический метод можно вызывать как у самого класса, так и у экземпляра.

### Пример

Вот как определить и вызвать статический метод:

```python
class MathHelper:
    @staticmethod
    def add(x, y):
        return x + y

# Вызов у класса
result1 = MathHelper.add(5, 3)
print(result1)

# Вызов у экземпляра
helper = MathHelper()
result2 = helper.add(10, 20)
print(result2)
```

```output
8
30
```

Статический метод не имеет доступа к классу (`cls`) или экземпляру (`self`). По сути, это обычная функция, вынесенная в пространство имен класса.

## Связанные ссылки

- <router-link to="/cheatsheet/oop-basics">Шпаргалка: Основы ООП</router-link>
- <router-link to="/cheatsheet/decorators">Шпаргалка: Декораторы</router-link>
- <router-link to="/cheatsheet/functions">Шпаргалка: Функции</router-link>
- <router-link to="/builtin/classmethod">classmethod()</router-link>
- <router-link to="/builtin/property">property()</router-link>
