---
title: 'Función incorporada max() de Python - Hoja de trucos de Python'
description: 'Devuelve el elemento más grande en un iterable o el mayor de dos o más argumentos.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada max() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#max">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Devuelve el elemento más grande en un iterable o el más grande de dos o más argumentos.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `max()` se puede usar de dos maneras:

1. Con un iterable (como una <router-link to="/builtin/list">lista</router-link> o una <router-link to="/builtin/tuple">tupla</router-link>), devuelve el elemento más grande.
2. Con dos o más argumentos, devuelve el más grande de ellos.

### Ejemplos

**Encontrar el máximo en un iterable:**

```python
numbers = [1, 2, 10, 40, 5]
print(max(numbers))

letters = ('a', 'b', 'z')
print(max(letters))
```

```output
40
z
```

**Encontrar el máximo de varios argumentos:**

```python
print(max(10, 20, 5))
```

```output
20
```

## Enlaces relevantes

- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: Listas y Tuplas</router-link>
- <router-link to="/builtin/min">min()</router-link>
- <router-link to="/builtin/sorted">sorted()</router-link>
- <router-link to="/builtin/sum">sum()</router-link>
