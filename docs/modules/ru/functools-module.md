---
title: Модуль Functools Python - Шпаргалка Python
description: Модуль `functools` содержит инструменты для функций высшего порядка, такие как `partial`, `reduce` и `lru_cache`.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Модуль Functools Python
</base-title>

Модуль `functools` содержит инструменты для функций высшего порядка, такие как `partial`, `reduce` и `lru_cache`.

```python
import functools
```

Функции высшего порядка работают с другими функциями. Чаще всего `functools` используют, чтобы повторно применять функцию с закрепленными аргументами или кешировать дорогие вычисления.

## partial()

`partial` создает новый вызываемый объект, в котором часть аргументов уже заполнена.

```python
from functools import partial

def power(base, exponent):
    return base ** exponent

square = partial(power, exponent=2)
print(square(5))
```

```output
25
```

Это полезно, когда другая функция ожидает вызываемый объект с меньшим числом аргументов.

```python
from functools import partial

def greet(greeting, name):
    return f'{greeting}, {name}!'

say_hello = partial(greet, 'Hello')
print(say_hello('Ada'))
```

```output
Hello, Ada!
```

## reduce()

`reduce` сворачивает итерируемый объект в одно значение.

```python
from functools import reduce

total = reduce(lambda acc, item: acc + item, [1, 2, 3, 4])
print(total)
```

```output
10
```

Для простых сумм лучше использовать встроенную `sum()`. `reduce` полезнее, когда операция объединения нестандартная.

```python
from functools import reduce

words = ['Python', 'Cheatsheet']
title = reduce(lambda left, right: f'{left} {right}', words)
print(title)
```

```output
Python Cheatsheet
```

## lru_cache()

`lru_cache` запоминает результаты функции.

```python
from functools import lru_cache

@lru_cache(maxsize=None)
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(10))
```

```output
55
```

Можно посмотреть использование кеша.

```python
print(fibonacci.cache_info().hits > 0)
```

```output
True
```

## Ссылки по теме

- <router-link to="/cheatsheet/functions">Шпаргалка: функции</router-link>
- <router-link to="/cheatsheet/decorators">Шпаргалка: декораторы</router-link>
- <router-link to="/modules/itertools-module">Модуль: itertools</router-link>
