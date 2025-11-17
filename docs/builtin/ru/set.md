---
title: 'Встроенная функция Python set() - Шпаргалка по Python'
description: 'Возвращает новый объект set, опционально с элементами, взятыми из итерируемого объекта. set — это встроенный класс. См. set и Типы множеств — set, frozenset для документации по этому классу.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python set()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#set">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Возвращает новый объект set, опционально с элементами, взятыми из итерируемого объекта. set — это встроенный класс. См. <router-link to="/cheatsheet/sets">set</router-link> и Set Types — set, frozenset для документации об этом классе.
  </base-disclaimer-content>
</base-disclaimer>

## Введение

Конструктор `set()` создает новый набор (set). Множество — это неупорядоченная коллекция уникальных элементов. Вы можете создать пустое множество или создать множество из итерируемого объекта.

### Примеры

**Создание пустого множества:**

```python
my_set = set()
print(my_set)
```

Вывод:

```plaintext
set()
```

**Создание множества из списка (дубликаты удаляются):**

```python
my_list = [1, 2, 2, 3, 3, 3]
my_set = set(my_list)
print(my_set)
```

Вывод:

```plaintext
{1, 2, 3}
```

## Связанные ссылки

- <router-link to="/cheatsheet/sets">Шпаргалка: Множества (Sets)</router-link>
- <router-link to="/cheatsheet/comprehensions">Шпаргалка: Генераторы (Comprehensions)</router-link>
- <router-link to="/blog/python-sets-what-why-how">Блог: Множества Python — Что, Зачем, Как</router-link>
- <router-link to="/blog/python-data-types">Блог: Типы данных Python</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/frozenset">frozenset()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
