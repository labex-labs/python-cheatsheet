---
title: 'Función incorporada zip() de Python - Hoja de trucos de Python'
description: 'Itere sobre varios iterables en paralelo, produciendo tuplas con un elemento de cada uno.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada zip() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#zip">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Itera sobre varios iterables en paralelo, produciendo tuplas con un elemento de cada uno.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `zip()` en Python es una función incorporada que toma dos o más iterables (como listas, tuplas o cadenas) y los agrega en un único iterador de tuplas. Cada tupla contiene elementos de todos los iterables de entrada en la misma posición.

## Ejemplos

```python
furniture = ['table', 'chair', 'rack', 'shelf']
price = [100, 50, 80, 40]

for item, amount in zip(furniture, price):
    print(f'The {item} costs ${amount}')
```

```output
The table costs $100
The chair costs $50
The rack costs $80
The shelf costs $40
```

## Otros Casos de Uso

La función zip en Python fusiona múltiples iterables en tuplas.

```python
# Combinando tres listas
list1 = [1, 2, 3]
list2 = ['a', 'b', 'c']
list3 = [True, False, True]

zipped = zip(list1, list2, list3)
print(list(zipped))
```

```output
[(1, 'a', True), (2, 'b', False), (3, 'c', True)]
```

### Descomprimir (Unzipping)

```python
# Descomprimiendo un objeto comprimido
zipped = [(1, 'a'), (2, 'b'), (3, 'c')]
list1, list2 = zip(*zipped)
print(list1)
print(list2)
```

```output
(1, 2, 3)
('a', 'b', 'c')
```

## Más Ejemplos

### Combinando con Diferentes Longitudes

zip deja de crear tuplas cuando el iterable más corto se agota.

```python
numbers = [1, 2, 3]
letters = ['a', 'b']

for num, letter in zip(numbers, letters):
    print(f'{num} -> {letter}')
```

```output
1 -> a
2 -> b
```

### Usando zip con Diccionarios

Puedes usar zip para combinar claves y valores de dos listas en un diccionario.

```python
keys = ['name', 'age', 'city']
values = ['Alice', 25, 'New York']

my_dict = dict(zip(keys, values))
print(my_dict)
```

```output
{'name': 'Alice', 'age': 25, 'city': 'New York'}
```

### Usando zip con Comprensiones de Listas

Puedes usar zip en comprensiones de listas para un código más conciso.

```python
list1 = [1, 2, 3]
list2 = [4, 5, 6]

summed = [x + y for x, y in zip(list1, list2)]
print(summed)
```

```output
[5, 7, 9]
```

## Enlaces Relevantes

- <router-link to="/cheatsheet/lists-and-tuples/">Listas y Tuplas</router-link>
- <router-link to="/cheatsheet/comprehensions/">Comprensiones</router-link>
- <router-link to="/builtin/slice/">slice()</router-link>
- <router-link to="/builtin/sorted/">sorted()</router-link>
- <router-link to="/builtin/sum/">sum()</router-link>
- <router-link to="/builtin/map/">map()</router-link>
- <router-link to="/builtin/filter/">filter()</router-link>
- <router-link to="/builtin/enumerate/">enumerate()</router-link>
- <router-link to="/modules/itertools-module/">Módulo Itertools</router-link>
