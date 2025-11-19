---
title: 'Función incorporada enumerate() de Python - Hoja de trucos de Python'
description: 'Devuelve un objeto enumerate. iterable debe ser una secuencia, un iterador u otro objeto que admita la iteración. El método __next__() del iterador devuelto por enumerate() devuelve una tupla que contiene un contador (desde start, que por defecto es 0) y los valores obtenidos al iterar sobre iterable.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada enumerate() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#enumerate">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Devuelve un objeto enumerate. iterable debe ser una secuencia, un iterador o algún otro objeto que admita la iteración. El método __next__() del iterador devuelto por enumerate() devuelve una tupla que contiene un contador (desde start, que por defecto es 0) y los valores obtenidos al iterar sobre iterable.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `enumerate()` en Python es una función incorporada que añade un contador a un iterable. Devuelve un objeto enumerate, que produce pares que contienen un contador (desde un índice inicial, que por defecto es 0) y el valor correspondiente del iterable. Esto es particularmente útil cuando se necesita tanto el índice como el elemento al recorrer una secuencia.

## Ejemplos

```python
l = enumerate([1, 2, 3, 4, 5])
print(l)
print(l.__next__())
print(l.__next__())
print(l.__next__())
print(l.__next__())
print(l.__next__())
```

```output
<enumerate object at 0x7fcac409cc40>
(0, 1)
(1, 2)
(2, 3)
(3, 4)
(4, 5)
```

`enumerate` se utiliza normalmente en un bucle `for` para obtener el índice de un elemento:

```python
for i, item in enumerate([1, 2, 3, 4, 5]):
    print(f"Index: {i}, Item: {item}")
```

```output
Index: 0, Item: 1
Index: 1, Item: 2
Index: 2, Item: 3
Index: 3, Item: 4
Index: 4, Item: 5
```

## Enlaces relevantes

- <router-link :to="'/cheatsheet/control-flow'">Control de Flujo</router-link>
- <router-link :to="'/builtin/iter'">iter()</router-link>
- <router-link :to="'/builtin/next'">next()</router-link>
- <router-link :to="'/cheatsheet/lists-and-tuples'">Listas y Tuplas</router-link>
- <router-link :to="'/builtin/zip'">zip()</router-link>
- <router-link :to="'/builtin/range'">range()</router-link>
