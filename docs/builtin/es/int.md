---
title: 'Función incorporada int() de Python - Hoja de trucos de Python'
description: 'Devuelve un objeto entero construido a partir de un número o cadena x, o devuelve 0 si no se proporcionan argumentos.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada int() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#int">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Devuelve un objeto entero construido a partir de un número o cadena x, o devuelve 0 si no se proporcionan argumentos.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `int()` en Python es una función incorporada que le permite convertir un valor en un entero. Puede tomar una cadena o un número como argumento y devolverá el equivalente entero. Esto es particularmente útil cuando necesita realizar operaciones matemáticas que requieren números enteros o cuando necesita asegurarse de que un valor sea del tipo entero.

## Ejemplos

```python
# transformar una cadena a un entero
from_integer = int('29')
print(from_integer)
print(type(from_integer))
```

```output
29
<class 'int'>
```

```python
# transformar un float a entero
from_float = int(-3.14)
print(from_float)
print(type(from_float))
```

```output
-3
<class 'int'>
```

```python
# devolver 0 si no se proporcionan argumentos
int()
```

```output
0
```

## Enlaces relevantes

- <router-link :to="'/builtin/float'">float()</router-link>
- <router-link :to="'/builtin/str'">str()</router-link>
- <router-link :to="'/builtin/hex'">hex()</router-link>
- <router-link :to="'/builtin/oct'">oct()</router-link>
- <router-link :to="'/builtin/bin'">bin()</router-link>
- <router-link :to="'/blog/python-data-types'">Tipos de datos de Python</router-link>
- <router-link :to="'/builtin/bool'">bool()</router-link>
- <router-link :to="'/builtin/complex'">complex()</router-link>
