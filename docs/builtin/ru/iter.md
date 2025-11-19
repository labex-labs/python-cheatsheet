---
title: 'Встроенная функция Python iter() - Шпаргалка по Python'
description: 'Возвращает итератор. Первый аргумент интерпретируется по-разному в зависимости от наличия второго аргумента. Без второго аргумента объект должен поддерживать протокол итерируемых объектов или протокол последовательности. Если ни один из протоколов не поддерживается, вызывается TypeError.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python iter()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#iter">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Возвращает объект итератора. Первый аргумент интерпретируется совершенно по-разному в зависимости от наличия второго аргумента. Без второго аргумента объект должен быть коллекцией, поддерживающей протокол итерируемых объектов, или он должен поддерживать протокол последовательности. Если он не поддерживает ни один из этих протоколов, вызывается TypeError.
  </base-disclaimer-content>
</base-disclaimer>

## Введение

Функция `iter()` возвращает объект итератора. Итератор — это объект, по которому можно итерироваться (проходить циклом). Именно он обеспечивает работу циклов `for` в Python.

Вы можете использовать `iter()` для получения итератора из любого итерируемого объекта, например, списка, кортежа или строки.

### Примеры

**Получение итератора из списка:**

```python
my_list = [1, 2, 3]
my_iter = iter(my_list)

print(next(my_iter))
print(next(my_iter))
print(next(my_iter))
```

```output
1
2
3
```

```python
i = iter([1, 2, 3])
print(i)
print(i.__next__())
print(i.__next__())
print(i.__next__())
```

```output
<list_iterator object at 0x7f93158badc0>
1
2
3
```

## Связанные ссылки

- <router-link :to="'/builtin/next'">`next()`</router-link>
- <router-link :to="'/cheatsheet/control-flow'">Управление потоком</router-link>
- <router-link :to="'/cheatsheet/lists-and-tuples'">Списки и кортежи</router-link>
- <router-link :to="'/builtin/enumerate'">`enumerate()`</router-link>
- <router-link :to="'/builtin/zip'">`zip()`</router-link>
- <router-link :to="'/builtin/map'">`map()`</router-link>
- <router-link :to="'/builtin/filter'">`filter()`</router-link>
