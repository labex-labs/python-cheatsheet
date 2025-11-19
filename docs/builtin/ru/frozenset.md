---
title: 'Встроенная функция Python frozenset() - Шпаргалка по Python'
description: 'Возвращает новый объект frozenset, опционально с элементами, взятыми из итерируемого объекта. frozenset — это встроенный класс. См. frozenset и Типы множеств — set, frozenset для документации по этому классу.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python frozenset()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#frozenset">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Возвращает новый объект frozenset, необязательно с элементами, взятыми из итерируемого объекта. <router-link to="/builtin/frozenset">frozenset</router-link> — это встроенный класс. См. <router-link to="/builtin/frozenset">frozenset</router-link> и Типы множеств — <router-link to="/builtin/set">set</router-link>, <router-link to="/builtin/frozenset">frozenset</router-link> для получения документации об этом классе.
  </base-disclaimer-content>
</base-disclaimer>

## Введение

Функция `frozenset()` в Python — это встроенная функция, которая создает неизменяемое, хешируемое множество из итерируемого объекта. В отличие от обычного `set`, `frozenset` нельзя изменить после его создания, что означает, что вы не можете добавлять или удалять элементы. Эта неизменяемость делает его пригодным для использования в качестве ключа словаря или в качестве элемента в другом множестве.

## Примеры

```python
frozenset([1, 2, 3])
frozenset({1, 2, 3})
frozenset((1, 2, 3))
```

```output
frozenset({1, 2, 3})
frozenset({1, 2, 3})
frozenset({1, 2, 3})
```

## Связанные ссылки

- <router-link :to="'/builtin/set'">`set()`</router-link>
- <router-link :to="'/cheatsheet/sets'">Множества (Sets)</router-link>
- <router-link :to="'/blog/python-sets-what-why-how'">Множества Python: Что, Зачем и Как</router-link>
- <router-link :to="'/builtin/tuple'">`tuple()`</router-link>
- <router-link :to="'/builtin/hash'">`hash()`</router-link>
