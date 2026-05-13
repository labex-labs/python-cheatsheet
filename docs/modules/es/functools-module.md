---
title: "Módulo Functools de Python - Hoja de trucos de Python"
description: "El módulo `functools` contiene herramientas para funciones de orden superior como `partial`, `reduce` y `lru_cache`."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo Functools de Python
</base-title>

El módulo `functools` contiene herramientas para funciones de orden superior como `partial`, `reduce` y `lru_cache`.

```python
import functools
```

Las funciones de orden superior son funciones que trabajan con otras funciones. Quienes empiezan suelen usar `functools` para reutilizar una función con algunos argumentos fijados, o para guardar en caché resultados costosos.

## partial()

`partial` crea un nuevo objeto invocable con algunos argumentos ya completados.

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

Esto es útil cuando otra función espera un invocable con menos argumentos:

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

`reduce` combina un iterable en un solo valor.

```python
from functools import reduce

total = reduce(lambda acc, item: acc + item, [1, 2, 3, 4])
print(total)
```

```output
10
```

Para sumas simples, prefiere la función integrada `sum()`. `reduce` es más útil cuando la operación de combinación es personalizada.

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

`lru_cache` memoriza los resultados de una función.

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

Puedes inspeccionar el uso de la caché:

```python
print(fibonacci.cache_info().hits > 0)
```

```output
True
```

## Enlaces relacionados

- <router-link to="/cheatsheet/functions">Hoja de trucos: Funciones</router-link>
- <router-link to="/cheatsheet/decorators">Hoja de trucos: Decoradores</router-link>
- <router-link to="/modules/itertools-module">Módulo: itertools</router-link>
