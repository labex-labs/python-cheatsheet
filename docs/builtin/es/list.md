---
title: 'Función incorporada list() de Python - Hoja de trucos de Python'
description: 'En lugar de ser una función, list es en realidad un tipo de secuencia mutable, como se documenta en Listas y Tipos de Secuencia — list, tuple, range.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada list() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#list">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   En lugar de ser una función, list es en realidad un tipo de secuencia mutable, como se documenta en Listas y Tipos de Secuencia — <router-link to="/builtin/list">list</router-link>, <router-link to="/builtin/tuple">tuple</router-link>, <router-link to="/builtin/range">range</router-link>.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

En Python, `list` no es una función sino un tipo de secuencia mutable incorporada. Esto significa que es una estructura de datos que puede contener una colección ordenada de elementos, y puedes cambiar su contenido. Puedes crear una lista usando corchetes `[]` o el constructor `list()`.

## Ejemplos

```python
l = list()
print(l)
l.append(1)
l.append(2)
print(l)
```

Salida:

```plaintext
[]
[1, 2]
```

## Enlaces relevantes

- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: Listas y Tuplas</router-link>
- <router-link to="/cheatsheet/comprehensions">Cheatsheet: Comprensiones</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">Blog: Comprensiones de Python Paso a Paso</router-link>
- <router-link to="/blog/python-data-types">Blog: Tipos de Datos de Python</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/len">len()</router-link>
