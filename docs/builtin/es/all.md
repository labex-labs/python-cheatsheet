---
title: 'Función incorporada all() de Python - Hoja de trucos de Python'
description: 'Devuelve Verdadero si todos los elementos del iterable son verdaderos (o si el iterable está vacío).'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada all() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#all">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Devuelve True si todos los elementos del iterable son verdaderos (o si el iterable está vacío).
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `all()` en Python es una función incorporada que comprueba si todos los elementos de un iterable son `True`. Devuelve `True` si cada elemento se evalúa como verdadero, o si el iterable está vacío. Esto es útil para validar condiciones en una colección de elementos, como comprobar si todos los números en una lista son positivos o si todos los campos requeridos en un formulario están completos.

## Ejemplos

```python
# Todos los valores son truthy
all([1, 2, 3])

# Contiene un valor falsy (0)
all([1, 0, 3])

# Contiene un valor falsy (cadena vacía)
all(['a', '', 'c'])

# Un iterable vacío se considera True
all([])
```

Salida:

```plaintext
True
False
False
True
```

## Enlaces relevantes

- <router-link to="/cheatsheet/control-flow">Cheatsheet: Control de Flujo</router-link>
- <router-link to="/cheatsheet/comprehensions">Cheatsheet: Comprensiones</router-link>
- <router-link to="/blog/python-data-types">Blog: Tipos de Datos de Python</router-link>
- <router-link to="/builtin/any">any()</router-link>
- <router-link to="/builtin/bool">bool()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
