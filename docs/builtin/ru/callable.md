---
title: 'Встроенная функция Python callable() - Шпаргалка по Python'
description: 'Возвращает True, если объект является вызываемым, и False в противном случае. Если возвращается True, вызов все еще может завершиться ошибкой, но если возвращается False, вызов объекта никогда не будет успешным. Обратите внимание, что классы вызываемы (вызов класса возвращает новый экземпляр); экземпляры вызываемы, если их класс имеет метод __call__().'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python callable()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#callable">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Возвращает True, если аргумент object кажется вызываемым, и False в противном случае. Если возвращается True, вызов все еще может завершиться ошибкой, но если возвращается False, вызов object никогда не будет успешным. Обратите внимание, что классы вызываемы (вызов класса возвращает новый экземпляр); экземпляры вызываемы, если их класс имеет метод __call__().
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

В Python функция `callable()` является встроенной функцией, которую можно использовать для определения того, является ли объект вызываемым, то есть может ли он быть вызван как функция.

Она возвращает `True`, если переданный ей объект является вызываемым, и `False` в противном случае. Например, функция, метод, класс, лямбда-функция и генератор — все это вызываемые объекты в Python.

Вот пример того, как можно использовать функцию `callable()`:

```python
def my_function():
    pass

class MyClass:
    def __call__(self):
        pass

x = 5
y = my_function
z = MyClass()
a = lambda: None

print(callable(x))
print(callable(y))
print(callable(z))
print(callable(a))
```

```output
False
True
True
True
```

В приведенном выше примере `my_function` — это функция, и она вызываема, `MyClass` — это класс, и он также вызываем, поскольку у него есть метод `__call__`, `z` — это экземпляр класса `MyClass`, и он также вызываем, поскольку у него есть метод `__call__`, а `a` — это лямбда-функция, которая вызываема.

Функция `callable()` может быть полезна в ситуациях, когда вам нужно определить, может ли объект быть вызван как функция, например, при работе с обратными вызовами (callbacks) или другими типами указателей на функции.

## Relevant links

- <router-link :to="'/builtin/hasattr'">hasattr()</router-link>
- <router-link :to="'/cheatsheet/functions'">Functions</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP Basics</router-link>
- <router-link :to="'/builtin/getattr'">getattr()</router-link>
- <router-link :to="'/builtin/isinstance'">isinstance()</router-link>
