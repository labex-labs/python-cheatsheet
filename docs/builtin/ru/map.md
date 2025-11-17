---
title: 'Встроенная функция Python map() - Шпаргалка по Python'
description: 'Возвращает итератор, применяющий функцию к каждому элементу итерируемого объекта. Если переданы дополнительные итерируемые аргументы, функция должна принимать столько аргументов и применяется к элементам из всех итерируемых объектов параллельно. При нескольких итерируемых объектах итератор останавливается, когда самый короткий итерируемый объект исчерпан. Для случаев, когда входные данные функции уже организованы в кортежи аргументов.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python map()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#map">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Возвращает итератор, который применяет функцию к каждому элементу итерируемого объекта, выдавая результаты. Если переданы дополнительные итерируемые аргументы, функция должна принимать такое количество аргументов и применяется к элементам из всех итерируемых объектов параллельно. При наличии нескольких итерируемых объектов итератор останавливается, когда самый короткий итерируемый объект исчерпан. Для случаев, когда входные данные функции уже организованы в <router-link to="/builtin/tuple">кортежи</router-link> аргументов.
  </base-disclaimer-content>
</base-disclaimer>

## Введение

Функция map, _map(function, iterable)_ принимает один или несколько итерируемых объектов, 'функцию обратного вызова' (часто лямбда-функцию) и возвращает "Объект Map". Объект map содержит результат функции map, применяющей обратный вызов к каждому элементу в итерируемых аргументах. Map одновременно итерирует по предоставленным итерируемым объектам. То есть, на каждом шаге "i" в функции map, элемент с индексом "i" каждого итерируемого объекта будет доступен функции map в этот момент. Вы часто захотите преобразовать результирующий объект map в <router-link to="/builtin/list">список</router-link>, <router-link to="/builtin/tuple">кортеж</router-link> или другую форму объекта, с которой удобнее работать после завершения сопоставления.

\*\*\*Важное замечание: Начиная с выпуска Python 3, если итерируемые объекты, переданные в map, имеют разную длину, map остановится и вернет результат, когда достигнет количества шагов, соответствующего длине самого короткого итерируемого объекта.

## Входные параметры

Function: принимает элемент (или элементы) по индексу, соответствующему текущему шагу Map, и возвращает результат в виде элемента для сохранения в Объект Map. Тип элемента, сохраняемого в объекте map, будет идентичен типу, возвращаемому функцией.

Iterable(s): `<router-link to="/builtin/tuple">кортеж</router-link>`, `<router-link to="/builtin/list">список</router-link>`, `<router-link to="/builtin/range">диапазон</router-link>`, `<router-link to="/builtin/dict">словарь</router-link>`, `<router-link to="/builtin/set">множество</router-link>`, `<router-link to="/builtin/str">строка</router-link>`.

## Очень простой пример

```python
def double_map(func, iter):
    my_map = map(func, iter)
    return list(my_map)

def double(element):
    return element * 2

nums = [1, 2, 3, 4]

print(double_map(double, nums))
```

Вывод:

```plaintext
[2, 4, 6, 8]
```

## Менее простой пример

### Этот пример использует функцию обратного вызова, написанную в виде лямбда-функции, а также

```python
def multi_map(func, *iters):
    my_map = map(func, *iters)
    return list(my_map)

list1 = [1, 2, 3]
list2 = [4, 5, 6]

print(multi_map((lambda item1, item2: item1 * item2), list1, list2))
```

Вывод:

```plaintext
[4, 10, 18]
```

## Пример, демонстрирующий обработку map-ом различных длин итерируемых объектов

```python
def max(a, b):
    if a > b:
        return a
    else:
        return b

list1 = [1, 1, 1]
list2 = [0, 0, 0, 1, 1, 1, 1, 1, 1, 1]

result = list(map(max, list1, list2))

print(result)
```

Вывод:

```plaintext
[1, 1, 1]
```

Заметьте, что длина результирующего списка равна длине list1?

## Связанные ссылки

- <router-link to="/cheatsheet/functions">Шпаргалка: Функции (включая лямбда-функции)</router-link>
- <router-link to="/cheatsheet/comprehensions">Шпаргалка: Генераторы (Comprehensions)</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">Блог: Генераторы Python по шагам</router-link>
- <router-link to="/modules/itertools-module">Модуль: itertools</router-link>
- <router-link to="/builtin/filter">filter()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
