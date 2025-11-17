---
title: 'Módulo Python Itertools - Hoja de Trucos de Python'
description: 'El módulo itertools es una colección de herramientas diseñadas para ser rápidas y eficientes en el uso de memoria al manejar iteradores (como listas o diccionarios).'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo Python Itertools
</base-title>

El módulo _itertools_ es una colección de herramientas destinadas a ser rápidas y utilizar la memoria de manera eficiente al manejar iteradores (como <router-link to="/cheatsheet/lists-and-tuples">listas</router-link> o <router-link to="/cheatsheet/dictionaries">diccionarios</router-link>).

<base-disclaimer>
  <base-disclaimer-title>
    De la <a href="https://docs.python.org/3/library/itertools.html">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    El módulo estandariza un conjunto central de herramientas rápidas y eficientes en memoria que son útiles por sí mismas o en combinación.
    Juntas, forman un "álgebra de iteradores" que hace posible construir herramientas especializadas de forma concisa y eficiente en Python puro.
  </base-disclaimer-content>
</base-disclaimer>

El módulo _itertools_ viene en la biblioteca estándar y debe importarse. Algunos ejemplos también utilizan el módulo `operator`.

```python
import itertools
import operator
```

## accumulate()

Crea un iterador que devuelve los resultados de una función.

```python
itertools.accumulate(iterable[, func])
```

Ejemplo:

```python
data = [1, 2, 3, 4, 5]
# Acumular con la función de multiplicación
result = itertools.accumulate(data, operator.mul)
for each in result:
    print(each)
```

Salida:

```plaintext
1
2
6
24
120
```

El operator.mul toma dos números y los multiplica:

```python
operator.mul(1, 2)
# 2

operator.mul(2, 3)
# 6

operator.mul(6, 4)
# 24

operator.mul(24, 5)
# 120
```

Pasar una función es opcional:

```python
data = [5, 2, 6, 4, 5, 9, 1]
# Acumular sin función, por defecto es suma
result = itertools.accumulate(data)
for each in result:
    print(each)
```

Salida:

```plaintext
5
7
13
17
22
31
32
```

Si no se designa una función, los elementos se sumarán:

```python
5
5 + 2 = 7
7 + 6 = 13
13 + 4 = 17
17 + 5 = 22
22 + 9 = 31
31 + 1 = 32
```

## combinations()

Toma un iterable y un entero. Esto creará todas las combinaciones únicas que tienen r miembros.

```python
itertools.combinations(iterable, r)
```

Ejemplo:

```python
shapes = ['circle', 'triangle', 'square',]
# Generar todas las combinaciones de 2 elementos
result = itertools.combinations(shapes, 2)
for each in result:
    print(each)
```

Salida:

```plaintext
('circle', 'triangle')
('circle', 'square')
('triangle', 'square')
```

## combinations_with_replacement()

Al igual que combinations(), pero permite que elementos individuales se repitan más de una vez.

```python
itertools.combinations_with_replacement(iterable, r)
```

Ejemplo:

```python
shapes = ['circle', 'triangle', 'square']
# Generar combinaciones permitiendo elementos repetidos
result = itertools.combinations_with_replacement(shapes, 2)
for each in result:
    print(each)
```

Salida:

```plaintext
('circle', 'circle')
('circle', 'triangle')
('circle', 'square')
('triangle', 'triangle')
('triangle', 'square')
('square', 'square')
```

## count()

Crea un iterador que devuelve valores espaciados uniformemente comenzando con el número `start`.

```python
itertools.count(start=0, step=1)
```

Ejemplo:

```python
# Contar comenzando desde 10, incrementando en 3
for i in itertools.count(10,3):
    print(i)
    if i > 20:
        break
```

Salida:

```plaintext
10
13
16
19
22
```

## cycle()

Esta función recorre un iterador sin fin.

```python
itertools.cycle(iterable)
```

Ejemplo:

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet']
# Ciclar a través de los colores infinitamente
for color in itertools.cycle(colors):
    print(color)
```

Salida:

```plaintext
red
orange
yellow
green
blue
violet
red
orange
```

Cuando se alcanza el final del iterable, comienza de nuevo desde el principio.

## chain()

Toma una serie de iterables y los devuelve como un único iterable largo.

```python
itertools.chain(*iterables)
```

Ejemplo:

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue']
shapes = ['circle', 'triangle', 'square', 'pentagon']
# Encadenar múltiples iterables en uno
result = itertools.chain(colors, shapes)
for each in result:
    print(each)
```

Salida:

```plaintext
red
orange
yellow
green
blue
circle
triangle
square
pentagon
```

## compress()

Filtra un iterable con otro.

```python
itertools.compress(data, selectors)
```

Ejemplo:

```python
shapes = ['circle', 'triangle', 'square', 'pentagon']
selections = [True, False, True, False]
# Filtrar formas basadas en selecciones booleanas
result = itertools.compress(shapes, selections)
for each in result:
    print(each)
```

Salida:

```plaintext
circle
square
```

## dropwhile()

Crea un iterador que descarta elementos del iterable mientras el predicado sea verdadero; después, devuelve cada elemento.

```python
itertools.dropwhile(predicate, iterable)
```

Ejemplo:

```python
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]
# Descartar elementos mientras la condición es verdadera, luego devolver todos los restantes
result = itertools.dropwhile(lambda x: x<5, data)
for each in result:
    print(each)
```

Salida:

```plaintext
5
6
7
8
9
10
1
```

## filterfalse()

Crea un iterador que filtra elementos del iterable devolviendo solo aquellos para los cuales el predicado es Falso.

```python
itertools.filterfalse(predicate, iterable)
```

Ejemplo:

```python
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]
# Devolver elementos donde el predicado es Falso
result = itertools.filterfalse(lambda x: x<5, data)
for each in result:
    print(each)
```

Salida:

```plaintext
5
6
7
8
9
10
```

## groupby()

En pocas palabras, esta función agrupa cosas.

```python
itertools.groupby(iterable, key=None)
```

Ejemplo:

```python
robots = [
    {"name": "blaster", "faction": "autobot"},
    {"name": "galvatron", "faction": "decepticon"},
    {"name": "jazz", "faction": "autobot"},
    {"name": "metroplex", "faction": "autobot"},
    {"name": "megatron", "faction": "decepticon"},
    {"name": "starcream", "faction": "decepticon"},
]
# Agrupar robots por facción (el iterable debe estar ordenado para una agrupación correcta)
for key, group in itertools.groupby(robots, key=lambda x: x['faction']):
    print(key)
    print(list(group))
```

Salida:

```plaintext
autobot
[{'name': 'blaster', 'faction': 'autobot'}]
decepticon
[{'name': 'galvatron', 'faction': 'decepticon'}]
autobot
[{'name': 'jazz', 'faction': 'autobot'}, {'name': 'metroplex', 'faction': 'autobot'}]
decepticon
[{'name': 'megatron', 'faction': 'decepticon'}, {'name': 'starcream', 'faction': 'decepticon'}]
```

## islice()

Esta función es muy parecida a los _slices_. Permite cortar una parte de un iterable.

```python
itertools.islice(iterable, start, stop[, step])
```

Ejemplo:

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue',]
# Cortar el iterable para obtener los primeros 2 elementos
few_colors = itertools.islice(colors, 2)
for each in few_colors:
    print(each)
```

Salida:

```plaintext
red
orange
```

## permutations()

```python
itertools.permutations(iterable, r=None)
```

Ejemplo:

```python
alpha_data = ['a', 'b', 'c']
# Generar todas las permutaciones de los elementos
result = itertools.permutations(alpha_data)
for each in result:
    print(each)
```

Salida:

```plaintext
('a', 'b', 'c')
('a', 'c', 'b')
('b', 'a', 'c')
('b', 'c', 'a')
('c', 'a', 'b')
('c', 'b', 'a')
```

## product()

Crea los productos cartesianos a partir de una serie de iterables.

```python
num_data = [1, 2, 3]
alpha_data = ['a', 'b', 'c']
# Generar el producto cartesiano de los iterables
result = itertools.product(num_data, alpha_data)
for each in result:
    print(each)
```

Salida:

```plaintext
(1, 'a')
(1, 'b')
(1, 'c')
(2, 'a')
(2, 'b')
(2, 'c')
(3, 'a')
(3, 'b')
(3, 'c')
```

## repeat()

Esta función repetirá un objeto una y otra vez. A menos que haya un argumento `times`.

```python
itertools.repeat(object[, times])
```

Ejemplo:

```python
# Repetir objeto 3 veces
for i in itertools.repeat("spam", 3):
    print(i)
```

Salida:

```plaintext
spam
spam
spam
```

## starmap()

Crea un iterador que calcula la función usando argumentos obtenidos del iterable.

```python
itertools.starmap(function, iterable)
```

Ejemplo:

```python
data = [(2, 6), (8, 4), (7, 3)]
# Aplicar función a argumentos desempaquetados de cada tupla
result = itertools.starmap(operator.mul, data)
for each in result:
    print(each)
```

Salida:

```plaintext
12
32
21
```

## takewhile()

Lo opuesto a dropwhile(). Crea un iterador y devuelve elementos del iterable mientras el predicado sea verdadero.

```python
itertools.takewhile(predicate, iterable)
```

Ejemplo:

```python
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]
# Tomar elementos mientras la condición es verdadera, luego detenerse
result = itertools.takewhile(lambda x: x<5, data)
for each in result:
    print(each)
```

Salida:

```plaintext
1
2
3
4
```

## tee()

Devuelve n iteradores independientes a partir de un único iterable.

```python
itertools.tee(iterable, n=2)
```

Ejemplo:

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue']
# Dividir el iterable en dos iteradores independientes
alpha_colors, beta_colors = itertools.tee(colors)
for each in alpha_colors:
    print(each)
```

Salida:

```plaintext
red
orange
yellow
green
blue
```

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue']
alpha_colors, beta_colors = itertools.tee(colors)
for each in beta_colors:
    print(each)
```

Salida:

```plaintext
red
orange
yellow
green
blue
```

## zip_longest()

Crea un iterador que agrega elementos de cada uno de los iterables. Si los iterables tienen longitudes desiguales, los valores faltantes se rellenan con `fillvalue`. La iteración continúa hasta que se agota el iterable más largo.

```python
itertools.zip_longest(*iterables, fillvalue=None)
```

Ejemplo:

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue',]
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]
# Zip iterables, rellenando valores faltantes con None
for each in itertools.zip_longest(colors, data, fillvalue=None):
    print(each)
```

Salida:

```plaintext
('red', 1)
('orange', 2)
('yellow', 3)
('green', 4)
('blue', 5)
(None, 6)
(None, 7)
(None, 8)
(None, 9)
(None, 10)
```

## Enlaces relevantes

- <router-link to="/cheatsheet/control-flow">Cheatsheet: Control de Flujo (Bucles for)</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: Listas y Tuplas</router-link>
- <router-link to="/cheatsheet/comprehensions">Cheatsheet: Comprensiones</router-link>
- <router-link to="/cheatsheet/functions">Cheatsheet: Funciones (Generadores)</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">Blog: Comprensiones de Python Paso a Paso</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
- <router-link to="/builtin/next">next()</router-link>
- <router-link to="/builtin/map">map()</router-link>
- <router-link to="/builtin/filter">filter()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
- <router-link to="/builtin/enumerate">enumerate()</router-link>
- <router-link to="/builtin/range">range()</router-link>
