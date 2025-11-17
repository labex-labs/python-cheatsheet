---
title: 'Встроенная функция Python int() - Шпаргалка по Python'
description: 'Возвращает целочисленный объект, созданный из числа или строки x, или 0, если аргументы не предоставлены.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python int()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#int">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Возвращает целочисленный объект, созданный из числа или строки x, или возвращает 0, если аргументы не предоставлены.
  </base-disclaimer-content>
</base-disclaimer>

## Введение

Функция `int()` в Python — это встроенная функция, которая позволяет преобразовать значение в целое число. Она может принимать строку или число в качестве аргумента и возвращать эквивалентное целое число. Это особенно полезно, когда вам необходимо выполнить математические операции, требующие целых чисел, или когда вам нужно убедиться, что значение имеет тип `int`.

## Примеры

```python
# преобразовать строку в целое число
from_integer = int('29')
print(from_integer)
print(type(from_integer))
```

Вывод:

```plaintext
29
<class 'int'>
```

```python
# преобразовать float в целое число
from_float = int(-3.14)
print(from_float)
print(type(from_float))
```

Вывод:

```plaintext
-3
<class 'int'>
```

```python
# вернуть 0, если аргументы не предоставлены
int()
```

Вывод:

```plaintext
0
```

## Связанные ссылки

- <router-link :to="'/builtin/float'">float()</router-link>
- <router-link :to="'/builtin/str'">str()</router-link>
- <router-link :to="'/builtin/hex'">hex()</router-link>
- <router-link :to="'/builtin/oct'">oct()</router-link>
- <router-link :to="'/builtin/bin'">bin()</router-link>
- <router-link :to="'/blog/python-data-types'">Типы данных Python</router-link>
- <router-link :to="'/builtin/bool'">bool()</router-link>
- <router-link :to="'/builtin/complex'">complex()</router-link>
