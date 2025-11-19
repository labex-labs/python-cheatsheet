---
title: 'Встроенная функция Python enumerate() - Справочник по Python'
description: 'Возвращает объект enumerate. Итерируемый объект должен быть последовательностью, итератором или другим объектом, поддерживающим итерацию. Метод __next__() итератора, возвращаемого enumerate(), возвращает кортеж, содержащий счетчик (начиная с start, по умолчанию 0) и значения, полученные при итерации по итерируемому объекту.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python enumerate()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#enumerate">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Возвращает объект enumerate. iterable должен быть последовательностью, итератором или каким-либо другим объектом, поддерживающим итерацию. Метод __next__() итератора, возвращаемого enumerate(), возвращает кортеж, содержащий счетчик (начиная с start, который по умолчанию равен 0) и значения, полученные при итерации по iterable.
  </base-disclaimer-content>
</base-disclaimer>

## Введение

Функция `enumerate()` в Python — это встроенная функция, которая добавляет счетчик к итерируемому объекту. Она возвращает объект enumerate, который выдает пары, содержащие счетчик (начиная с начального индекса, который по умолчанию равен 0) и соответствующее значение из итерируемого объекта. Это особенно полезно, когда вам нужен как индекс, так и элемент при переборе последовательности.

## Примеры

```python
l = enumerate([1, 2, 3, 4, 5])
print(l)
print(l.__next__())
print(l.__next__())
print(l.__next__())
print(l.__next__())
print(l.__next__())
```

```output
<enumerate object at 0x7fcac409cc40>
(0, 1)
(1, 2)
(2, 3)
(3, 4)
(4, 5)
```

`enumerate` обычно используется в цикле `for` для получения индекса элемента:

```python
for i, item in enumerate([1, 2, 3, 4, 5]):
    print(f"Index: {i}, Item: {item}")
```

```output
Index: 0, Item: 1
Index: 1, Item: 2
Index: 2, Item: 3
Index: 3, Item: 4
Index: 4, Item: 5
```

## Связанные ссылки

- <router-link :to="'/cheatsheet/control-flow'">Управление потоком</router-link>
- <router-link :to="'/builtin/iter'">iter()</router-link>
- <router-link :to="'/builtin/next'">next()</router-link>
- <router-link :to="'/cheatsheet/lists-and-tuples'">Списки и кортежи</router-link>
- <router-link :to="'/builtin/zip'">zip()</router-link>
- <router-link :to="'/builtin/range'">range()</router-link>
