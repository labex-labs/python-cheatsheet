---
title: Module Functools Python - Aide-mémoire Python
description: Le module `functools` contient des outils pour les fonctions d’ordre supérieur comme `partial`, `reduce` et `lru_cache`.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Module Functools Python
</base-title>

Le module `functools` contient des outils pour les fonctions d’ordre supérieur comme `partial`, `reduce` et `lru_cache`.

```python
import functools
```

Les fonctions d’ordre supérieur sont des fonctions qui travaillent avec d’autres fonctions. Les débutants utilisent le plus souvent `functools` pour réutiliser une fonction avec certains arguments fixés, ou pour mettre en cache des résultats coûteux.

## partial()

`partial` crée un nouvel appelable avec certains arguments déjà renseignés.

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

Cela est utile lorsqu’une autre fonction attend un appelable avec moins d’arguments :

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

`reduce` combine un itérable en une seule valeur.

```python
from functools import reduce

total = reduce(lambda acc, item: acc + item, [1, 2, 3, 4])
print(total)
```

```output
10
```

Pour des sommes simples, préférez la fonction intégrée `sum()`. `reduce` est plus utile lorsque l’opération de combinaison est personnalisée.

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

`lru_cache` mémorise les résultats d’une fonction.

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

Vous pouvez inspecter l’utilisation du cache :

```python
print(fibonacci.cache_info().hits > 0)
```

```output
True
```

## Liens pertinents

- <router-link to="/cheatsheet/functions">Aide-mémoire : Fonctions</router-link>
- <router-link to="/cheatsheet/decorators">Aide-mémoire : Décorateurs</router-link>
- <router-link to="/modules/itertools-module">Module : itertools</router-link>
