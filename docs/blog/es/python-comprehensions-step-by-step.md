---
title: 'Comprensiones de Python: Introducción paso a paso - Hoja de trucos de Python'
description: 'En este breve artículo, transformaremos bucles for, paso a paso, en comprensiones.'
date: 'March 22, 2019'
updated: 'July 3, 2022'
tags: 'python, basics'
socialImage: '/blog/python-comprehensions.png'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "Comprensiones de Python: Introducción paso a paso - Hoja de trucos de Python"
    description: "En este breve artículo, transformaremos bucles for, paso a paso, en comprensiones."
    date: "March 22, 2019"
    updated: "July 3, 2022"
    tags: "python, basics"
    socialImage: "/blog/python-comprehensions.png"
</route>

<blog-title-header :frontmatter="frontmatter" title="Comprensiones de Python: Introducción paso a paso - Hoja de trucos de Python" />

_List Comprehensions_ son un tipo especial de sintaxis que nos permite crear listas a partir de otras listas ([Wikipedia](https://en.wikipedia.org/wiki/List_comprehension), [The Python Tutorial](https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions)). Son increíblemente útiles cuando se trabaja con números y con uno o dos niveles de _for loops_ anidados, pero más allá de eso, pueden volverse un poco difíciles de leer.

En este artículo, vamos a crear algunos _For Loops_ y reescribirlos, paso a paso, en _Comprehensions_.

## Basics

La verdad es que las _List Comprehensions_ no son demasiado complejas, pero siguen siendo un poco difíciles de entender al principio porque se ven un _poco_ raras. ¿Por qué? Bueno, el orden en que están escritas es el **_opuesto_** a lo que solemos ver en un _For Loop_.

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
>>> for n in names:
...     print(n)
# Charles
# Susan
# Patrick
# George
# Carol
```

Para hacer lo mismo con una _List Comprehension_, comenzamos al final del _loop_:

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
>>> [print(n) for n in names]
# Charles
# Susan
# Patrick
# George
# Carol
```

Observa cómo invertimos el orden:

- Primero, tenemos lo que será la salida del bucle `[print(n) ...]`.
- Luego definimos la variable que almacenará cada uno de los elementos y apuntamos a la `List`, `Set` o `Dictionary` con la que trabajaremos `[... for n in names]`.

## Creating a new List with a Comprehension

> Este es el uso principal de una _List Comprehension_. Otros usos pueden resultar en un código difícil de leer para ti y para otros.

Así es como creamos una nueva lista a partir de una colección existente con un _For Loop_:

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']

>>> new_list = []
>>> for n in names:
...     new_list.append(n)

>>> print(new_list)
# ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
```

Y así es como hacemos lo mismo con una _List Comprehension_:

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
>>> new_list = [n for n in names]
>>> print(new_list)
# ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
```

La razón por la que podemos hacer esto es que el comportamiento estándar de una _List Comprehension_ es devolver una lista:

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
>>> [n for n in names]
# ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
```

## Adding Conditionals

¿Qué pasa si queremos que `new_list` solo contenga los nombres que comienzan con `C`? Con un _For Loop_, lo haríamos así:

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']

>>> new_list = []
>>> for n in names:
...     if n.startswith('C'):
...         new_list.append(n)

>>> print(new_list)
# ['Charles', 'Carol']
```

En una _List Comprehension_, añadimos la sentencia if al final:

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
>>> new_list = [n for n in names if n.startswith('C')]
>>> print(new_list)
# ['Charles', 'Carol']
```

Mucho más legible.

## Formatting long List Comprehensions

Esta vez, queremos que `new_list` contenga no solo los nombres que comienzan con `C`, sino también aquellos que terminan en `e` y contienen una `k`:

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
>>> new_list = [n for n in names if n.startswith('C') or n.endswith('e') or 'k' in n]
>>> print(new_list)
# ['Charles', 'Patrick', 'George', 'Carol']
```

Eso es bastante desordenado. Afortunadamente, es posible dividir las _Comprehensions_ en diferentes líneas:

```python
new_list = [
    n
    for n in names
    if n.startswith("C")
    or n.endswith("e")
    or "k" in n
]
```

## Set and Dict Comprehensions

Si aprendiste los conceptos básicos de las _List Comprehensions_... ¡Felicidades! Acabas de hacerlo con <router-link to="/cheatsheet/sets">Sets</router-link> y <router-link to="/cheatsheet/dictionaries">Dictionaries</router-link>.

### Set comprehension

```python
>>> my_set = {"abc", "def"}

>>> # Aquí, creamos un nuevo set con elementos en mayúsculas con un bucle for
>>> new_set = set()
>>> for s in my_set:
...    new_set.add(s.upper())
>>> print(new_set)
# {'DEF', 'ABC'}

>>> # Lo mismo, pero con una set comprehension
>>> new_set = {s.upper() for s in my_set}
>>> print(new_set)
# {'DEF', 'ABC'}
```

### Dict comprehension

```python
>>> my_dict = {'name': 'Christine', 'age': 98}

>>> # Un nuevo diccionario a partir de uno existente con un bucle for
>>> new_dict = {}
>>> for key, value in my_dict.items():
...     new_dict[key] = value
>>> print(new_dict)
# {'name': 'Christine', 'age': 98}

# Usando una dict comprehension
>>> new_dict = {key: value for key, value in my_dict.items()}  # Notice the ":"
>>> print(new_dict)
# {'name': 'Christine', 'age': 98}
```

> Artículo recomendado: [Python Sets: What, Why and How ](https://www.pythoncheatsheet.org/blog/python-sets-what-why-how).

## Conclusion

Cada vez que aprendo algo nuevo, surge esta urgencia de usarlo de inmediato. Cuando eso sucede, me obligo a detenerme y pensar por un momento... ¿Debería cambiar este _For Loop_ grande, anidado y que ya se ve desordenado a una _List Comprehension_? Probablemente no.

> Readability counts. [The Zen of Python](https://www.python.org/dev/peps/pep-0020/).
