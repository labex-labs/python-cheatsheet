---
title: 'Встроенная функция Python all() - Шпаргалка по Python'
description: 'Возвращает True, если все элементы итерируемого объекта истинны (или если итерируемый объект пуст).'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python all()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#all">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Возвращает True, если все элементы итерируемого объекта истинны (или если итерируемый объект пуст).
  </base-disclaimer-content>
</base-disclaimer>

## Введение

Встроенная функция `all()` в Python — это функция, которая проверяет, являются ли все элементы в итерируемом объекте `True`. Она возвращает `True`, если каждый элемент оценивается как истинный, или если итерируемый объект пуст. Это полезно для проверки условий в коллекции элементов, например, для проверки того, все ли числа в списке положительны или все ли обязательные поля в форме заполнены.

## Примеры

```python
# Все значения истинны (truthy)
all([1, 2, 3])

# Содержит ложное (falsy) значение (0)
all([1, 0, 3])

# Содержит ложное (falsy) значение (пустая строка)
all(['a', '', 'c'])

# Пустой итерируемый объект считается истинным
all([])
```

```output
True
False
False
True
```

## Связанные ссылки

- <router-link to="/cheatsheet/control-flow">Шпаргалка: Управление потоком</router-link>
- <router-link to="/cheatsheet/comprehensions">Шпаргалка: Генераторы (Comprehensions)</router-link>
- <router-link to="/blog/python-data-types">Блог: Типы данных Python</router-link>
- <router-link to="/builtin/any">any()</router-link>
- <router-link to="/builtin/bool">bool()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
