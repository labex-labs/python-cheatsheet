---
title: 'Módulo Copy de Python - Hoja de Trucos de Python'
description: 'El Módulo Copy ofrece funciones para copiar elementos de listas, objetos, arrays, etc. Permite crear copias superficiales (shallow) y copias profundas (deep).'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo Copy de Python
</base-title>

El módulo Copy es un conjunto de funciones relacionadas con la copia de diferentes elementos de una lista, objetos, arrays, etc. Se puede utilizar para crear copias superficiales (shallow copies) así como copias profundas (deep copies).

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/copy.html">documentación</a> de Python 3
  </base-disclaimer-title>
  <base-disclaimer-content>
    Las sentencias de asignación en Python no copian objetos, crean enlaces entre un objetivo y un objeto. Para colecciones que son mutables o contienen elementos mutables, a veces se necesita una copia para poder cambiar una copia sin cambiar la otra. Este módulo proporciona operaciones genéricas de copia <b>superficial</b> (shallow) y <b>profunda</b> (deep).
  </base-disclaimer-content>
</base-disclaimer>

## Operaciones de copia superficial (Shallow copy operations)

Una copia superficial construye un nuevo objeto compuesto e inserta en él (en la medida de lo posible) referencias a los objetos encontrados en el original.

copy.copy(x)
Devuelve una copia superficial de x.

```python
import copy
a = [[1],[2],[3]]
# Crear copia superficial (las listas anidadas todavía se referencian)
b = copy.copy(a)

a
```

```output
[[1], [2], [3]]
```

```python
b
```

```output
[[1], [2], [3]]
```

### Sin importar el módulo copy no se puede usar

```output
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'copy' is not defined
```

## Operaciones de copia profunda (Deep copy operations)

Una copia profunda construye un nuevo objeto compuesto e inserta en él, recursivamente, copias de los objetos encontrados en el original.

copy.deepcopy(x[, memo])
Devuelve una copia profunda de x.

```python
import copy
a = [[1],[2],[3]]
# Crear copia profunda (copia completamente independiente)
b = copy.deepcopy(a)

# Modificar el original
a[0][0] = 0
a[1] = None

a
```

```output
[[0], None, [3]]
```

```python
b
```

```output
[[1], [2], [3]]
```

## Enlaces relevantes

- <router-link to="/cheatsheet/oop-basics">Cheatsheet: Conceptos Básicos de OOP</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: Listas y Tuplas</router-link>
- <router-link to="/cheatsheet/dictionaries">Cheatsheet: Diccionarios</router-link>
- <router-link to="/blog/python-data-types">Blog: Tipos de Datos de Python</router-link>
- <router-link to="/builtin/object">object()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/slice">slice()</router-link>
