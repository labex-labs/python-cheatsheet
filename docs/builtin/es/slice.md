---
title: 'Función incorporada slice() de Python - Hoja de trucos de Python'
description: 'Devuelve un objeto slice que representa el conjunto de índices especificados por range(start, stop, step). Los argumentos start y step tienen por defecto None. Los objetos slice tienen atributos de datos de solo lectura start, stop y step que simplemente devuelven los valores de los argumentos (o sus valores predeterminados).'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada slice() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#slice">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Devuelve un objeto slice que representa el conjunto de índices especificado por range(start, stop, step). Los argumentos start y step tienen un valor predeterminado de None. Los objetos slice tienen atributos de datos de solo lectura start, stop y step que simplemente devuelven los valores de los argumentos (o sus valores predeterminados).
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `slice()` en Python devuelve un objeto slice que se puede usar para rebanar secuencias como listas, tuplas o cadenas. Un objeto slice representa un conjunto de índices especificados por `start`, `stop` y `step`.

## Ejemplos

```python
furniture = ['table', 'chair', 'rack', 'shelf']

print(furniture[0:4])
print(furniture[1:3])
print(furniture[0:-1])
print(furniture[:2])
print(furniture[1:])
print(furniture[:])
```

Salida:

```plaintext
['table', 'chair', 'rack', 'shelf']
['chair', 'rack']
['table', 'chair', 'rack']
['table', 'chair']
['chair', 'rack', 'shelf']
['table', 'chair', 'rack', 'shelf']
```

Rebanar la lista completa realizará una copia:

```python
spam = ['cat', 'bat', 'rat', 'elephant']
spam2 = spam[:]
print(spam2)

spam.append('dog')
print(spam)
print(spam2)
```

Salida:

```plaintext
['cat', 'bat', 'rat', 'elephant']
['cat', 'bat', 'rat', 'elephant', 'dog']
['cat', 'bat', 'rat', 'elephant']
```

## Enlaces relevantes

- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: Listas y Tuplas</router-link>
- <router-link to="/cheatsheet/manipulating-strings">Cheatsheet: Manipulación de Cadenas</router-link>
- <router-link to="/cheatsheet/comprehensions">Cheatsheet: Comprensiones</router-link>
- <router-link to="/modules/itertools-module">Módulo: itertools (islice)</router-link>
- <router-link to="/builtin/range">range()</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/reversed">reversed()</router-link>
- <router-link to="/builtin/sorted">sorted()</router-link>
- <router-link to="/builtin/enumerate">enumerate()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
- <router-link to="/builtin/map">map()</router-link>
- <router-link to="/builtin/filter">filter()</router-link>
