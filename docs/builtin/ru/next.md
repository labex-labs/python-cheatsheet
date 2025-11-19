---
title: 'Встроенная функция Python next() - Шпаргалка по Python'
description: 'Извлекает следующий элемент итератора, вызывая его метод __next__(). Если указано значение по умолчанию, оно возвращается при исчерпании итератора, в противном случае вызывается исключение StopIteration.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python next()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#next">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Извлекает следующий элемент из итератора, вызывая его метод __next__(). Если указано значение по умолчанию (default), оно возвращается, если итератор исчерпан, в противном случае вызывается StopIteration.
  </base-disclaimer-content>
</base-disclaimer>

## Введение

Функция `next()` извлекает следующий элемент из итератора. Если итератор исчерпан, она вызывает исключение `StopIteration`.

Вы также можете указать значение по умолчанию, которое будет возвращено, если итератор исчерпан, что предотвращает исключение `StopIteration`.

### Примеры

**Использование `next()` с итератором:**

```python
my_list = [1, 2]
my_iter = iter(my_list)

print(next(my_iter))
print(next(my_iter))

try:
    print(next(my_iter))
except StopIteration:
    print("Iterator is exhausted")
```

```output
1
2
Iterator is exhausted
```

**Использование `next()` со значением по умолчанию:**

```python
my_iter = iter([1])
print(next(my_iter, "default"))
print(next(my_iter, "default"))
```

```output
1
default
```

Другие примеры:

```python
i = iter([1, 2, 3])
print(next(i))
print(next(i))
print(next(i))
```

```output
1
2
3
```

## Связанные ссылки

- <router-link to="/cheatsheet/control-flow">Шпаргалка: Управление потоком (циклы for)</router-link>
- <router-link to="/modules/itertools-module">Модуль: itertools</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
- <router-link to="/builtin/map">map()</router-link>
- <router-link to="/builtin/filter">filter()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
