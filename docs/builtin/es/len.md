---
title: 'Función len() de Python - Hoja de trucos de Python'
description: 'Devuelve la longitud (el número de elementos) de un objeto. El argumento puede ser una secuencia (como cadena, bytes, tupla, lista o rango) o una colección (como diccionario, conjunto o conjunto inmutable).'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada len() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#len">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Devuelve la longitud (el número de elementos) de un objeto. El argumento puede ser una secuencia (como una cadena, bytes, <router-link to="/builtin/tuple">tupla</router-link>, <router-link to="/builtin/list">lista</router-link> o <router-link to="/builtin/range">rango</router-link>) o una colección (como un <router-link to="/builtin/dict">diccionario</router-link>, <router-link to="/builtin/set">conjunto</router-link> o <router-link to="/builtin/frozenset">conjunto inmutable</router-link>).
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `len()` en Python es una función incorporada que devuelve el número de elementos (longitud) en un objeto. El objeto puede ser una secuencia (como una cadena, lista, tupla) o una colección (como un diccionario o conjunto).

## Ejemplo

Devolver el número de elementos de un objeto:

```python
len('hello')
len(['cat', 3, 'dog'])
```

Salida:

```plaintext
5
3
```

## Prueba de vaciedad

<base-warning>
  <base-warning-title>Prueba de vaciedad</base-warning-title>
    <base-warning-content>
      La prueba de vaciedad de cadenas, listas, diccionarios, etc., no debe usar
    <code>len</code>, sino preferir la evaluación booleana directa.
  </base-warning-content>
</base-warning>

```python
a = [1, 2, 3]

# mal
if len(a) > 0:  # se evalúa como True
    print("the list is not empty!")

# bien
if a:  # se evalúa como True
    print("the list is not empty!")
```

Salida:

```plaintext
the list is not empty!
the list is not empty!
```

## Enlaces relevantes

- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: Listas y Tuplas</router-link>
- <router-link to="/cheatsheet/dictionaries">Cheatsheet: Diccionarios</router-link>
- <router-link to="/cheatsheet/sets">Cheatsheet: Conjuntos</router-link>
- <router-link to="/blog/python-data-types">Blog: Tipos de Datos de Python</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/set">set()</router-link>
