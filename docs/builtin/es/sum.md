---
title: 'Función incorporada sum() de Python - Hoja de trucos de Python'
description: 'Suma el valor inicial y los elementos de un iterable de izquierda a derecha y devuelve el total. Los elementos del iterable son normalmente números, y no se permite que el valor inicial sea una cadena.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada sum() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#func-sum">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Suma el valor inicial y los elementos de un iterable de izquierda a derecha y devuelve el total. Normalmente, los elementos del iterable son números, y no se permite que el valor inicial sea una cadena (string).
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `sum()` calcula la suma de todos los elementos en un iterable (como una lista o una tupla). También puedes proporcionar un valor `start` opcional, que se añade al total.

### Ejemplos

**Suma de una lista de números:**

```python
numbers = [1, 2, 3, 4, 5]
print(sum(numbers))
```

```output
15
```

**Suma con un valor inicial:**

```python
numbers = [1, 2, 3]
print(sum(numbers, 10))  # 10 + 1 + 2 + 3
```

```output
16
```

## Enlaces relevantes

- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: Listas y Tuplas</router-link>
- <router-link to="/cheatsheet/comprehensions">Cheatsheet: Comprensiones</router-link>
- <router-link to="/blog/python-data-types">Blog: Tipos de Datos de Python</router-link>
- <router-link to="/modules/itertools-module">Módulo: itertools</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/min">min()</router-link>
- <router-link to="/builtin/max">max()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/float">float()</router-link>
