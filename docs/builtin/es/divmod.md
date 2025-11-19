---
title: 'Función incorporada divmod() de Python - Hoja de trucos de Python'
description: 'Toma dos números (no complejos) como argumentos y devuelve un par de números que consisten en su cociente y resto al usar la división entera. Con tipos de operandos mixtos, se aplican las reglas para los operadores aritméticos binarios.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada divmod() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#divmod">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Toma dos números (no complejos) como argumentos y devuelve un par de números que consisten en su cociente y resto al usar la división entera. Con tipos de operandos mixtos, se aplican las reglas para los operadores aritméticos binarios.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `divmod()` toma dos números como argumentos y devuelve una tupla que contiene el cociente y el resto de su división entera. Es una forma conveniente de obtener ambos resultados en una sola llamada.

### Ejemplos

```python
# Obtener cociente y resto
cociente, resto = divmod(10, 3)
print(cociente)
print(resto)
print(divmod(2, 2))
print(divmod(10, 2))
print(divmod(7, 2))
```

```output
3
1
(1, 0)
(5, 0)
(3, 1)
```

## Enlaces relevantes

- <router-link :to="'/cheatsheet/lists-and-tuples'">Listas y Tuplas</router-link>
- <router-link :to="'/blog/python-data-types'">Tipos de Datos de Python</router-link>
- <router-link :to="'/builtin/int'">`int()`</router-link>
- <router-link :to="'/builtin/float'">`float()`</router-link>
- <router-link :to="'/builtin/tuple'">`tuple()`</router-link>
