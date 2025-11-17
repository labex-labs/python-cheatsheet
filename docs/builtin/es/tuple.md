---
title: 'Función incorporada tuple() de Python - Hoja de trucos de Python'
description: 'tuple es un tipo de secuencia inmutable, no una función, como se documenta en Tuplas y Tipos de Secuencia — list, tuple, range.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada tuple() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#tuple">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    En lugar de ser una función, tuple es en realidad un tipo de secuencia inmutable, como se documenta en Tuples and Sequence Types — list, tuple, range.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

Aunque `tuple` es técnicamente un tipo, se puede usar como una función para crear tuplas. Las tuplas son secuencias inmutables, lo que significa que no se pueden cambiar una vez creadas.

El constructor `tuple()` se puede usar para crear una tupla vacía o para convertir un iterable (como una lista) en una tupla.

### Ejemplos

**Crear una tupla vacía:**

```python
empty_tuple = tuple()
print(empty_tuple)
```

Salida:

```plaintext
()
```

**Crear una tupla a partir de una lista:**

```python
my_list = [1, 2, 3]
my_tuple = tuple(my_list)
print(my_tuple)
```

Salida:

```plaintext
(1, 2, 3)
```

## Enlaces relevantes

- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: Listas y Tuplas</router-link>
- <router-link to="/cheatsheet/args-and-kwargs">Cheatsheet: \*args y \*\*kwargs</router-link>
- <router-link to="/blog/python-data-types">Blog: Tipos de Datos de Python</router-link>
- <router-link to="/blog/python-easy-args-kwargs">Blog: \*args y \*\*kwargs Explicados</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/sorted">sorted()</router-link>
- <router-link to="/builtin/reversed">reversed()</router-link>
- <router-link to="/builtin/enumerate">enumerate()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
