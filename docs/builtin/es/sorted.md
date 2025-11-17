---
title: 'Función incorporada sorted() de Python - Hoja de trucos de Python'
description: 'Devuelve una nueva lista ordenada a partir de los elementos del iterable.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada sorted() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#sorted">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Devuelve una nueva lista ordenada a partir de los elementos de un iterable.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `sorted()` devuelve una nueva lista ordenada a partir de los elementos de un iterable. No modifica el iterable original.

También puedes usar el parámetro `reverse` para ordenar en orden descendente.

### Ejemplos

**Ordenando una lista de números:**

```python
numbers = [3, 1, 4, 1, 5, 9, 2, 6]
sorted_numbers = sorted(numbers)
print(sorted_numbers)
```

Salida:

```plaintext
[1, 1, 2, 3, 4, 5, 6, 9]
```

**Ordenando una lista de cadenas (strings):**

```python
words = ["banana", "apple", "cherry"]
sorted_words = sorted(words)
print(sorted_words)
```

Salida:

```plaintext
['apple', 'banana', 'cherry']
```

**Ordenando en orden inverso:**

```python
numbers = [3, 1, 4, 1, 5, 9, 2, 6]
sorted_numbers_desc = sorted(numbers, reverse=True)
print(sorted_numbers_desc)
```

Salida:

```plaintext
[9, 6, 5, 4, 3, 2, 1, 1]
```

## Enlaces relevantes

- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: Listas y Tuplas</router-link>
- <router-link to="/cheatsheet/dictionaries">Cheatsheet: Diccionarios</router-link>
- <router-link to="/cheatsheet/functions">Cheatsheet: Funciones (para el argumento key)</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/reversed">reversed()</router-link>
- <router-link to="/builtin/min">min()</router-link>
- <router-link to="/builtin/max">max()</router-link>
