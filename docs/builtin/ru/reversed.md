---
title: 'Встроенная функция Python reversed() - Шпаргалка по Python'
description: 'Возвращает обратный итератор. seq должен быть объектом, имеющим метод __reversed__() или поддерживающим протокол последовательности (метод __len__() и метод __getitem__() с целочисленными аргументами, начиная с 0).'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python reversed()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#reversed">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Возвращает обратный итератор. seq должен быть объектом, который имеет метод __reversed__() или поддерживает протокол последовательности (метод __len__() и метод __getitem__() с целочисленными аргументами, начинающимися с 0).
  </base-disclaimer-content>
</base-disclaimer>

## Введение

Функция `reversed()` возвращает обратный итератор. Это означает, что ее можно использовать для перебора последовательности (такой как <router-link to="/builtin/list">list</router-link>, <router-link to="/builtin/tuple">tuple</router-link> или <router-link to="/builtin/str">string</router-link>) в обратном порядке. Она не изменяет исходную последовательность, а вместо этого предоставляет новый итератор, который выдает элементы с конца к началу.

### Примеры

Чтобы получить обратный список, вы можете преобразовать итератор в список:

```python
my_list = [1, 2, 3, 4, 5]
reversed_list = list(reversed(my_list))
print(reversed_list)
```

Вывод:

```plaintext
[5, 4, 3, 2, 1]
```

Вы также можете перебирать его напрямую в цикле `for`:

```python
for char in reversed("hello"):
    print(char)
```

Вывод:

```plaintext
o
l
l
e
h
```

Вот еще один пример, демонстрирующий поведение итератора:

```python
i = reversed([1, 2, 3])
print(next(i))
print(next(i))
print(next(i))
```

Вывод:

```plaintext
3
2
1
```

## Связанные ссылки

- <router-link to="/cheatsheet/control-flow">Шпаргалка: Управление потоком (циклы for)</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Шпаргалка: Списки и кортежи</router-link>
- <router-link to="/builtin/sorted">sorted()</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/next">next()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
