---
title: 'Función incorporada min() de Python - Hoja de trucos de Python'
description: 'Devuelve el elemento más pequeño en un iterable o el más pequeño de dos o más argumentos.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada min() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#min">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Devuelve el elemento más pequeño en un iterable o el más pequeño de dos o más argumentos.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `min()` es la contraparte de <router-link to="/builtin/max">max()</router-link>. Se puede utilizar de dos maneras:

1. Con un iterable (como una <router-link to="/builtin/list">lista</router-link> o una <router-link to="/builtin/tuple">tupla</router-link>), devuelve el elemento más pequeño.
2. Con dos o más argumentos, devuelve el más pequeño de ellos.

### Ejemplos

**Encontrar el mínimo en un iterable:**

```python
numbers = [10, 2, 1, 40, 5]
print(min(numbers))

letters = ('z', 'b', 'a')
print(min(letters))
```

Salida:

```plaintext
1
a
```

**Encontrar el mínimo de varios argumentos:**

```python
print(min(10, 20, 5))
```

Salida:

```plaintext
5
```

## Enlaces relevantes

- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: Listas y Tuplas</router-link>
- <router-link to="/builtin/max">max()</router-link>
- <router-link to="/builtin/sorted">sorted()</router-link>
- <router-link to="/builtin/sum">sum()</router-link>
