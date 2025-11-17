---
title: 'Встроенная функция Python super() - Шпаргалка по Python'
description: 'Возвращает прокси-объект, который делегирует вызовы методов родительскому или одноклассному классу. Это полезно для доступа к унаследованным методам, которые были переопределены в классе.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python super()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#super">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Возвращает прокси-объект, который делегирует вызовы методов классу-родителю или одноклассному классу. Это полезно для доступа к унаследованным методам, которые были переопределены в классе.
  </base-disclaimer-content>
</base-disclaimer>

## Введение

Функция `super()` используется для вызова метода из родительского класса. Это особенно полезно при наследовании, когда вы хотите расширить функциональность метода родителя, не переопределяя его полностью.

### Пример

```python
class Parent:
    def greet(self):
        print("Hello from Parent")

class Child(Parent):
    def greet(self):
        # Call the parent's greet method
        super().greet()
        print("Hello from Child")

c = Child()
c.greet()
```

Вывод:

```plaintext
Hello from Parent
Hello from Child
```

## Связанные ссылки

- <router-link to="/cheatsheet/oop-basics">Шпаргалка: Основы ООП</router-link>
- <router-link to="/cheatsheet/decorators">Шпаргалка: Декораторы</router-link>
- <router-link to="/cheatsheet/functions">Шпаргалка: Функции</router-link>
- <router-link to="/builtin/object">object()</router-link>
- <router-link to="/builtin/isinstance">isinstance()</router-link>
- <router-link to="/builtin/issubclass">issubclass()</router-link>
- <router-link to="/builtin/classmethod">classmethod()</router-link>
- <router-link to="/builtin/staticmethod">staticmethod()</router-link>
- <router-link to="/builtin/property">property()</router-link>
