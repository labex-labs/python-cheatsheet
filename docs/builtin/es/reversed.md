---
title: 'Función incorporada reversed() de Python - Hoja de trucos de Python'
description: 'Devuelve un iterador inverso. seq debe ser un objeto que tenga un método __reversed__() o que admita el protocolo de secuencia (el método __len__() y el método __getitem__() con argumentos enteros que comiencen en 0).'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada Python reversed()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#reversed">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Devuelve un iterador inverso. seq debe ser un objeto que tenga un método __reversed__() o que admita el protocolo de secuencia (el método __len__() y el método __getitem__() con argumentos enteros que comienzan en 0).
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `reversed()` devuelve un iterador inverso. Esto significa que se puede utilizar para recorrer una secuencia (como una <router-link to="/builtin/list">lista</router-link>, <router-link to="/builtin/tuple">tupla</router-link> o <router-link to="/builtin/str">cadena</router-link>) en orden inverso. No modifica la secuencia original, sino que proporciona un nuevo iterador que produce elementos de final a principio.

### Ejemplos

Para obtener una lista invertida, puede convertir el iterador a una lista:

```python
my_list = [1, 2, 3, 4, 5]
reversed_list = list(reversed(my_list))
print(reversed_list)
```

```output
[5, 4, 3, 2, 1]
```

También puede iterar sobre él directamente en un bucle `for`:

```python
for char in reversed("hello"):
    print(char)
```

```output
o
l
l
e
h
```

Aquí hay otro ejemplo que demuestra el comportamiento del iterador:

```python
i = reversed([1, 2, 3])
print(next(i))
print(next(i))
print(next(i))
```

```output
3
2
1
```

## Enlaces relevantes

- <router-link to="/cheatsheet/control-flow">Cheatsheet: Control de Flujo (bucles for)</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: Listas y Tuplas</router-link>
- <router-link to="/builtin/sorted">sorted()</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/next">next()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
