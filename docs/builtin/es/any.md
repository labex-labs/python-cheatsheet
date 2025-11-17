---
title: 'Función incorporada any() de Python - Hoja de trucos de Python'
description: 'Devuelve Verdadero si cualquier elemento del iterable es verdadero. Si el iterable está vacío, devuelve Falso.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada any() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#any">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Devuelve True si cualquier elemento del iterable es verdadero. Si el iterable está vacío, devuelve False.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `any()` en Python es una función incorporada que comprueba si al menos un elemento en un iterable es `True`. Devuelve `True` si cualquier elemento se evalúa como verdadero, y `False` si el iterable está vacío o todos los elementos son falsos. Esto es útil para determinar rápidamente si una condición se cumple por cualquier elemento en una colección.

## Ejemplos

```python
# Todos los valores son falsos
any([0, '', False])

# Contiene un valor verdadero (2)
any([0, 2, False])

# Un iterable vacío se considera False
any([])
```

Salida:

```plaintext
False
True
False
```

## Enlaces relevantes

- <router-link to="/cheatsheet/control-flow">Cheatsheet: Control Flow</router-link>
- <router-link to="/cheatsheet/comprehensions">Cheatsheet: Comprehensions</router-link>
- <router-link to="/blog/python-data-types">Blog: Tipos de datos de Python</router-link>
- <router-link to="/builtin/all">all()</router-link>
- <router-link to="/builtin/bool">bool()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
