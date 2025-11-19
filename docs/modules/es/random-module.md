---
title: 'Módulo Random de Python - Hoja de Trucos de Python'
description: 'El módulo random es un módulo incorporado que permite generar elementos aleatorios.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo Random de Python
</base-title>

El módulo [random](https://docs.python.org/3/library/random.html) es un módulo incorporado que nos permite generar elementos aleatorios.

```python
import random
```

## seed()

El método `seed` se utiliza para inicializar el generador de números aleatorios.

```python
# Establecer la semilla para números aleatorios reproducibles
random.seed(1)
random.random()
```

```output
0.13436424411240122
```

Establecer la semilla en un número siempre devolverá el mismo número aleatorio:

```python
random.seed(1)
random.random()
```

```output
0.13436424411240122
```

```python
random.seed(1)
random.random()
```

```output
0.13436424411240122
```

```python
random.seed(1)
random.random()
```

```output
0.13436424411240122
```

```python
random.seed(1)
random.random()
```

```output
0.13436424411240122
```

```python
random.seed(1)
random.random()
```

```output
0.13436424411240122
```

El valor predeterminado del método `seed` es la _hora actual del sistema_, por eso siempre obtenemos un número diferente:

```python
# Generar número aleatorio sin establecer la semilla (usa la hora del sistema)
random.random()
```

```output
0.8474337369372327
```

```python
random.random()
```

```output
0.763774618976614
```

```python
random.random()
```

```output
0.2550690257394217
```

## randint()

```python
random.randint(start: int, stop: int)
```

Este método devuelve un número aleatorio entre los parámetros de inicio y parada dados:

```python
random.randint(1, 5)
```

```output
3
```

```python
random.randint(1, 5)
```

```output
2
```

```python
random.randint(1, 5)
```

```output
5
```

```python
random.randint(1, 5)
```

```output
1
```

```python
random.randint(1, 5)
```

```output
3
```

```python
random.randint(1, 5)
```

```output
1
```

## choice()

El método `choice` devuelve un elemento seleccionado aleatoriamente de un iterable, como una `list`, `set` o `str`:

```python
random.choice([1, 2, 3, 4])
```

```output
1
```

```python
random.choice([1, 2, 3, 4])
```

```output
2
```

```python
random.choice([1, 2, 3, 4])
```

```output
4
```

```python
random.choice([1, 2, 3, 4])
```

```output
4
```

## shuffle()

El método `shuffle` toma un iterable y lo mezcla (baraja):

```python
my_list = [1, 2, 3, 4]

# Mezclar la lista en su lugar
random.shuffle(my_list)
my_list
```

```output
[1, 4, 3, 2]
```

```python
random.shuffle(my_list)
my_list
```

```output
[2, 4, 3, 1]
```

```python
random.shuffle(my_list)
my_list
```

```output
[4, 2, 3, 1]
```

## sample()

```python
random.sample(iterable, k: int)
```

`sample` devuelve una lista con una selección aleatoria de un iterable. El número de elementos devueltos es igual al parámetro `k`:

```python
# Muestrear aleatoriamente k elementos de la lista
random.sample([1, 2, 3, 4], 1)
```

```output
[3]
```

```python
random.sample([1, 2, 3, 4], 2)
```

```output
[3, 4]
```

```python
random.sample([1, 2, 3, 4], 3)
```

```output
[4, 3, 2]
```

```python
random.sample([1, 2, 3, 4], 4)
```

```output
[1, 2, 4, 3]
```

## random()

El método `random` devuelve un número flotante aleatorio entre 0.0 y 1.0:

```python
random.random()
```

```output
0.4143139993007743
```

```python
random.random()
```

```output
0.17300740157905092
```

```python
random.random()
```

```output
0.548798761388153
```

```python
random.random()
```

```output
0.7030407620656315
```

## uniform()

El método `uniform` es similar a `randint`, pero devuelve un número de punto flotante:

```python
random.uniform(1, 5)
```

```output
3.697943322009309
```

```python
random.uniform(1, 5)
```

```output
2.498812082006561
```

```python
random.uniform(1, 5)
```

```output
2.7558465201782525
```

```python
random.uniform(1, 5)
```

```output
3.0337059529999273
```

## Enlaces relevantes

- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: Listas y Tuplas</router-link>
- <router-link to="/blog/python-data-types">Blog: Tipos de Datos de Python</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/float">float()</router-link>
