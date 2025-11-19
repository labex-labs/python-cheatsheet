---
title: 'Встроенная функция Python range() - Шпаргалка по Python'
description: 'range() на самом деле является неизменяемым типом последовательности, а не функцией, как описано в разделах Диапазоны и типы последовательностей — list, tuple, range.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python range()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#range">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Вместо функции range является неизменяемым типом последовательности, как описано в Ranges and Sequence Types — list, tuple, range.
  </base-disclaimer-content>
</base-disclaimer>

## Введение

Тип `range` обычно используется в циклах `for` для выполнения итераций определенное количество раз. `range` принимает три параметра: `start`, `stop` и `step`. Каждый параметр должен быть целым числом (либо встроенным <router-link to="/builtin/int">int</router-link>, либо любым объектом, реализующим специальный метод **index**()).

Если указан только один параметр, он представляет параметр `stop`. Если параметр `step` вообще не указан, по умолчанию он будет равен `1`. Если параметр `start` не указан, по умолчанию он будет равен `0`.

Диапазоны поддерживают отрицательные индексы, но они интерпретируются как индексация с конца последовательности, определяемой положительными индексами.

\*\*\*Преимущество типа range перед обычным <router-link to="/builtin/list">list</router-link> или <router-link to="/builtin/tuple">tuple</router-link> заключается в том, что объект range всегда будет занимать одинаковый (небольшой) объем памяти, независимо от размера диапазона, который он представляет.

## Входные параметры

Диапазоны реализуют все общие операции с последовательностями, кроме конкатенации и повторения (из-за того, что объекты range могут представлять только последовательности, следующие строгому шаблону, а повторение и конкатенация обычно нарушают этот шаблон).

`start`:

- Значение параметра start
- Если не указано, параметр по умолчанию равен 0
- Значение параметра _включительно_

`stop`

- Значение параметра stop
- Единственный обязательный параметр
- Значение параметра _исключительно_

`step`

- Значение параметра step
- Если не указано, параметр по умолчанию равен 1

## Примеры

Диапазон, указан только параметр `stop`

```python
for i in range(5):
    print(i)
```

```output
0
1
2
3
4
```

Диапазон с параметрами `start` и `stop`

```python
for i in range(1, 8):
    print(i)
```

```output
1
2
3
4
5
6
7
```

Диапазон со всеми указанными параметрами

```python
for i in range(0, 30, 5):
    print(i)
```

```output
0
5
10
15
20
25
```

Диапазон со всеми параметрами, где параметр `stop` не делится на параметр `step`

```python
for i in range(0, 10, 3):
    print(i)
```

```output
0
3
6
9
```

Диапазон со всеми параметрами, где параметры `stop` и `step` отрицательные

```python
for i in range(0, -6, -1):
    print(i)
```

```output
0
-1
-2
-3
-4
-5
```

Два примера, где параметр `stop` установлен в 0

```python
for i in range(0):
    print(i)
```

```output
(no output)
```

```python
for i in range(1, 0):
    print(i)
```

```output
(no output)
```

## Связанные ссылки

- <router-link to="/cheatsheet/control-flow">Шпаргалка: Управление потоком (циклы for)</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Шпаргалка: Списки и кортежи</router-link>
- <router-link to="/modules/itertools-module">Модуль: itertools</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/reversed">reversed()</router-link>
- <router-link to="/builtin/enumerate">enumerate()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/int">int()</router-link>
