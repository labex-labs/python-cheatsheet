---
title: 'Función incorporada filter() de Python - Hoja de trucos de Python'
description: 'Construye un iterador a partir de aquellos elementos de iterable para los cuales la función devuelve verdadero. iterable puede ser una secuencia, un contenedor que admite la iteración o un iterador. Si la función es None, se asume la función de identidad, es decir, se eliminan todos los elementos de iterable que son falsos.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada filter() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#filter">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Construye un <router-link to="/builtin/iter">iterador</router-link> a partir de aquellos elementos del iterable para los cuales la función devuelve verdadero. iterable puede ser una secuencia, un contenedor que admite la iteración, o un <router-link to="/builtin/iter">iterador</router-link>. Si la función es None, se asume la función de identidad, es decir, se eliminan todos los elementos del iterable que son falsos.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `filter()` en Python es una función incorporada que permite procesar un iterable y extraer aquellos elementos que satisfacen una determinada condición. Devuelve un <router-link to="/builtin/iter">iterador</router-link> con los elementos que cumplen los criterios.

## Sintaxis

```python
filter(function, iterable)
```

- **function**: La función a ejecutar para cada elemento del iterable. Debe devolver `True` o `False` para cada elemento.
- **iterable**: El iterable a filtrar, como una lista, tupla o cadena.

## Descripción

La función `filter()` construye un iterador a partir de aquellos elementos del iterable para los cuales la función devuelve `True`. Si la función es `None`, elimina todos los elementos del iterable que son falsos.

## Ejemplo

```python
def is_even(num):
    return num % 2 == 0

numbers = [1, 2, 3, 4, 5, 6]
even_numbers = list(filter(is_even, numbers))
print(even_numbers)
```

Salida:

```plaintext
[2, 4, 6]
```

En este ejemplo, se define la función `is_even` para determinar si un número es par o no. El método filter toma `dos argumentos`: el `primer argumento` es la función a aplicar a cada elemento de la lista, y el `segundo argumento` es la lista a filtrar. El método filter devuelve un <router-link to="/builtin/iter">iterador</router-link>, que luego se convierte en una lista y se almacena en la variable even_numbers. El resultado final es la lista de números pares de la lista original.

## Enlaces relevantes

- <router-link :to="'/builtin/map'">map()</router-link>: Aplica una función a cada elemento de un iterable y devuelve un iterador con los resultados.
- <router-link :to="'/builtin/iter'">iter()</router-link>: Devuelve un objeto iterador.
- <router-link :to="'/blog/python-comprehensions-step-by-step'">List Comprehensions</router-link>: Una forma concisa de crear listas, a menudo utilizada como alternativa a `filter()`.
- <router-link :to="'/cheatsheet/comprehensions'">Comprehensions</router-link>
- <router-link :to="'/cheatsheet/functions'">Functions</router-link>
- <router-link :to="'/builtin/reduce'">reduce()</router-link>
