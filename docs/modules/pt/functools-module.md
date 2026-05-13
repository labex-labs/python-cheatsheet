---
title: Módulo Functools do Python - Folha de Referência Python
description: O módulo `functools` contém ferramentas para funções de ordem superior como `partial`, `reduce` e `lru_cache`.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo Functools do Python
</base-title>

O módulo `functools` contém ferramentas para funções de ordem superior como `partial`, `reduce` e `lru_cache`.

```python
import functools
```

Funções de ordem superior são funções que trabalham com outras funções. Quem está começando costuma usar `functools` para reutilizar uma função com alguns argumentos fixos ou para armazenar em cache resultados caros.

## partial()

`partial` cria um novo callable com alguns argumentos já preenchidos.

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

Isso é útil quando outra função espera um callable com menos argumentos.

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

`reduce` combina um iterável em um único valor.

```python
from functools import reduce

total = reduce(lambda acc, item: acc + item, [1, 2, 3, 4])
print(total)
```

```output
10
```

Para somas simples, prefira a função embutida `sum()`. `reduce` é mais útil quando a operação de combinação é personalizada.

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

`lru_cache` memoriza resultados de funções.

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

Você pode inspecionar o uso do cache.

```python
print(fibonacci.cache_info().hits > 0)
```

```output
True
```

## Links relacionados

- <router-link to="/cheatsheet/functions">Folha de Referência: Funções</router-link>
- <router-link to="/cheatsheet/decorators">Folha de Referência: Decoradores</router-link>
- <router-link to="/modules/itertools-module">Módulo: itertools</router-link>
