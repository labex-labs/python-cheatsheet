---
title: 'Conjuntos de Python - Hoja de Trucos de Python'
description: 'Python incluye varios tipos de datos integrados para ayudar a organizar la información. Estas estructuras incluyen listas, diccionarios, tuplas y conjuntos.'
labUrl: 'https://labex.io/es/labs/python-python-sets-633665?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Conjuntos de Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Python viene equipado con varios tipos de datos incorporados para ayudarnos a organizar nuestros datos. Estas estructuras incluyen listas, diccionarios, tuplas y **conjuntos** (sets).

<base-disclaimer>
  <base-disclaimer-title>
    De la documentación de Python 3 <a target="_blank" href="https://docs.python.org/3/tutorial/datastructures.html#sets">documentación</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Un conjunto es una colección desordenada sin elementos duplicados. Los usos básicos incluyen la prueba de pertenencia y la eliminación de entradas duplicadas.
  </base-disclaimer-content>
</base-disclaimer>

Lea <router-link to="/blog/python-sets-what-why-how">Python Sets: What, Why and How</router-link> para una referencia más profunda.

## Inicialización de un conjunto

Hay dos formas de crear conjuntos: usando llaves `{}` y la función incorporada `set()`

<base-warning>
  <base-warning-title>
    Conjuntos Vacíos
  </base-warning-title>
  <base-warning-content>
    Al crear un conjunto, asegúrese de no usar llaves vacías <code>{}</code> o, en su lugar, obtendrá un diccionario vacío.
  </base-warning-content>
</base-warning>

```python
# Create set using curly braces or set() function
s = {1, 2, 3}  # Using curly braces
s = set([1, 2, 3])  # Using set() constructor

# Warning: empty {} creates a dictionary, not a set
s = {}  # this will create a dictionary instead of a set
type(s)  # Returns <class 'dict'>
```

```output
<class 'dict'>
```

## Colecciones desordenadas de elementos únicos

Un conjunto elimina automáticamente todos los valores duplicados.

```python
# Sets automatically remove duplicates
s = {1, 2, 3, 2, 3, 4}  # Duplicates are removed
s  # Returns {1, 2, 3, 4}
```

```output
{1, 2, 3, 4}
```

Y como tipo de dato desordenado, no se puede indexar.

```python
s = {1, 2, 3}
s[0]
```

```output
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'set' object does not support indexing
```

## set add y update

Usando el método `add()` podemos agregar un solo elemento al conjunto.

```python
# add() method: add a single element to the set
s = {1, 2, 3}
s.add(4)  # Add element 4
s
```

```output
{1, 2, 3, 4}
```

Y con `update()`, múltiples elementos:

```python
# update() method: add multiple elements from an iterable
s = {1, 2, 3}
s.update([2, 3, 4, 5, 6])  # Add multiple elements (duplicates ignored)
s
```

```output
{1, 2, 3, 4, 5, 6}
```

## set remove y discard

Ambos métodos eliminarán un elemento del conjunto, pero `remove()` generará un `key error` si el valor no existe.

```python
# remove() method: remove element, raises KeyError if not found
s = {1, 2, 3}
s.remove(3)  # Remove element 3
s
```

```output
{1, 2}
```

```python
s.remove(3)
```

```output
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
KeyError: 3
```

`discard()` no generará ningún error.

```python
# discard() method: remove element, no error if not found
s = {1, 2, 3}
s.discard(3)  # Remove element 3 (safe, no error if missing)
s
```

```output
{1, 2}
```

```python
s.discard(3)
```

## set union

`union()` o `|` crearán un nuevo conjunto con todos los elementos de los conjuntos proporcionados.

```python
# union(): combine all elements from multiple sets (no duplicates)
s1 = {1, 2, 3}
s2 = {3, 4, 5}
s1.union(s2)  # or 's1 | s2' - returns {1, 2, 3, 4, 5}
```

```output
{1, 2, 3, 4, 5}
```

## set intersection

`intersection()` o `&` devolverán un conjunto con solo los elementos que son comunes a todos ellos.

```python
# intersection(): return elements common to all sets
s1 = {1, 2, 3}
s2 = {2, 3, 4}
s3 = {3, 4, 5}
s1.intersection(s2, s3)  # or 's1 & s2 & s3' - returns {3}
```

```output
{3}
```

## set difference

`difference()` o `-` devolverán solo los elementos que son únicos para el primer conjunto (conjunto invocado).

```python
# difference(): return elements in first set but not in others
s1 = {1, 2, 3}
s2 = {2, 3, 4}

s1.difference(s2)  # or 's1 - s2' - returns {1}
```

```output
{1}
```

```python
s2.difference(s1) # or 's2 - s1'
```

```output
{4}
```

## set symmetric_difference

`symmetric_difference()` o `^` devolverán todos los elementos que no son comunes entre ellos.

```python
# symmetric_difference(): return elements in either set, but not both
s1 = {1, 2, 3}
s2 = {2, 3, 4}
s1.symmetric_difference(s2)  # or 's1 ^ s2' - returns {1, 4}
```

```output
{1, 4}
```

## Enlaces relevantes

- <router-link to="/blog/python-data-types">Python Data Types Blog Post</router-link>
- <router-link to="/blog/python-sets-what-why-how">Python Sets: What, Why and How</router-link>
- <router-link to="/cheatsheet/dictionaries">Python Dictionaries</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Python Lists and Tuples</router-link>
