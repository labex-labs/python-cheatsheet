---
title: 'Conjuntos de Python: Qué, Por Qué y Cómo - Hoja de Trucos de Python'
description: "Al escribir código, se puede hacer de más de una manera. Algunas se consideran malas, otras claras, concisas y mantenibles. O 'pythónicas'. En este artículo exploraremos cómo los conjuntos de Python pueden ayudarnos no solo con la legibilidad, sino también acelerando el tiempo de ejecución de nuestros programas."
date: 'July 27, 2018'
updated: 'July 3, 2022'
tags: 'python, basics'
socialImage: '/blog/sets.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "Conjuntos de Python: Qué, Por Qué y Cómo - Hoja de Trucos de Python"
    description: "Al escribir código, se puede hacer de más de una manera. Algunas se consideran malas, otras claras, concisas y mantenibles. O 'pythónicas'. En este artículo exploraremos cómo los conjuntos de Python pueden ayudarnos no solo con la legibilidad, sino también acelerando el tiempo de ejecución de nuestros programas."
    date: "July 27, 2018"
    updated: "July 3, 2022"
    tags: "python, basics"
    socialImage: "/blog/sets.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="Conjuntos de Python: Qué, Por Qué y Cómo - Hoja de Trucos de Python" />

Python viene equipado con varios tipos de datos incorporados para ayudarnos a organizar nuestros datos. Estas estructuras incluyen `lists`, `dictionaries`, `tuples` y `sets`.

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/tutorial/datastructures.html#sets">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Un <code>set</code> es una <b>colección no ordenada</b> sin <b>elementos duplicados</b>. Los usos básicos incluyen la <b>prueba de pertenencia</b> y la <b>eliminación de entradas duplicadas</b>. Los objetos set también admiten operaciones matemáticas como <b>unión</b>, <b>intersección</b>, <b>diferencia</b> y <b>diferencia simétrica</b>
  </base-disclaimer-content>
</base-disclaimer>

En este artículo, vamos a revisar cada uno de los elementos enumerados en la definición anterior. Empecemos de inmediato y veamos cómo podemos crearlos.

## Inicialización de un Set

Hay dos formas de crear un set: una es usar la función incorporada `set()` y pasar una `list` de elementos, y la otra es usar las llaves `{}`.

### Inicialización de un set usando la función incorporada `set()`

```python
>>> s1 = set([1, 2, 3])
>>> s1
{1, 2, 3}
>>> type(s1)
<class 'set'>
```

### Inicialización de un set usando llaves `{}`

```python
>>> s2 = {3, 4, 5}
>>> s2
{3, 4, 5}
>>> type(s2)
<class 'set'>
>>>
```

<base-warning>
  <base-warning-title>
    Sets Vacíos
  </base-warning-title>
  <base-warning-content>
    Al crear un set, asegúrate de no usar llaves vacías <code>{}</code> o obtendrás un diccionario vacío en su lugar.
  </base-warning-content>
</base-warning>

```python
>>> s = {}
>>> type(s)
<class 'dict'>
```

Es un buen momento para mencionar que, por simplicidad, todos los ejemplos proporcionados en este artículo usarán enteros de un solo dígito, pero los sets pueden contener todos los tipos de datos [hashable](https://docs.python.org/3/glossary.html#term-hashable) que Python admite. En otras palabras, enteros, cadenas y tuplas, pero no elementos _mutables_ como _listas_ o _diccionarios_:

```python
>>> s = {1, 'coffee', [4, 'python']}
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: unhashable type: 'list'
```

Ahora que sabes cómo crear un set y qué tipo de elementos puede contener, continuemos y veamos _por qué_ siempre deberíamos tenerlos en nuestro arsenal.

## Por qué deberías usarlos

Podemos escribir código de más de una manera. Algunas se consideran bastante malas, y otras, _claras, concisas y mantenibles_. O "[_pythonic_](http://docs.python-guide.org/en/latest/writing/style/)".

<base-disclaimer>
  <base-disclaimer-title>
    De <a target="_blank" href="http://docs.python-guide.org/en/latest/">The Hitchhiker’s Guide to Python</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Cuando un desarrollador veterano de Python (un Pythonista) llama a partes del código como no "Pythonicas", generalmente quieren decir que esas líneas de código no siguen las pautas comunes y no logran expresar su intención de la manera que se considera la mejor (léase: más legible).
  </base-disclaimer-content>
</base-disclaimer>

Empecemos a explorar la forma en que los sets de Python pueden ayudarnos no solo con la legibilidad, sino también con el tiempo de ejecución de nuestro programa.

## Colección no ordenada de elementos

Primero lo primero: no puedes acceder a un objeto `set` usando índices.

```python
>>> s = {1, 2, 3}
>>> s[0]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'set' object does not support indexing
```

O modificarlos con _slices_:

```python
>>> s[0:2]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'set' object is not subscriptable
```

_PERO_, si lo que necesitamos es eliminar duplicados, o realizar operaciones matemáticas como combinar listas (uniones), podemos, y _SIEMPRE_ debemos usar sets.

Tengo que mencionar que **al iterar, las listas superan en rendimiento a los sets**, así que prefírelas si eso es lo que necesitas. ¿Por qué? Bueno, este artículo no pretende explicar el funcionamiento interno de los sets, pero aquí hay un par de enlaces donde puedes leer al respecto:

- [Time Complexity](https://wiki.python.org/moin/TimeComplexity)
- [How is set() implemented?](https://stackoverflow.com/questions/3949310/how-is-set-implemented)
- [Python Sets vs Lists](https://stackoverflow.com/questions/2831212/python-sets-vs-lists)
- [Is there any advantage or disadvantage to using sets over list comps to ensure a list of unique entries?](https://mail.python.org/pipermail/python-list/2011-June/606738.html)

## Sin elementos duplicados

Mientras escribía esto, no puedo dejar de pensar en todas las veces que usé un bucle _for_ y la declaración _if_ para verificar y eliminar elementos duplicados en una lista. Mi cara se pone roja al recordar que, más de una vez, escribí algo como esto:

```python
>>> my_list = [1, 2, 3, 2, 3, 4]
>>> no_duplicate_list = []
>>> for item in my_list:
...     if item not in no_duplicate_list:
...             no_duplicate_list.append(item)
...
>>> no_duplicate_list
[1, 2, 3, 4]
```

O usé una comprensión de lista:

```python
>>> my_list = [1, 2, 3, 2, 3, 4]
>>> no_duplicate_list = []
>>> [no_duplicate_list.append(item) for item in my_list if item not in no_duplicate_list]
[None, None, None, None]
>>> no_duplicate_list
[1, 2, 3, 4]
```

Pero está bien, nada de eso importa ahora porque tenemos los sets:

```python
>>> my_list = [1, 2, 3, 2, 3, 4]
>>> no_duplicate_list = list(set(my_list))
>>> no_duplicate_list
[1, 2, 3, 4]
```

## Rendimiento de los Sets

Ahora usemos el módulo _timeit_ y veamos el tiempo de ejecución de las listas y los sets al eliminar duplicados:

```python
>>> from timeit import timeit
>>> def no_duplicates(list):
...     no_duplicate_list = []
...     [no_duplicate_list.append(item) for item in list if item not in no_duplicate_list]
...     return no_duplicate_list
...
>>> # primero, veamos cómo se comporta la lista:
>>> print(timeit('no_duplicates([1, 2, 3, 1, 7])', globals=globals(), number=1000))
0.0018683355819786227
```

```python
>>> from timeit import timeit
>>> # y el set:
>>> print(timeit('list(set([1, 2, 3, 1, 2, 3, 4]))', number=1000))
0.0010220493243764395
>>> # más rápido y más limpio =)
```

No solo escribimos _menos líneas de código_ con sets que con comprensiones de listas, sino que también obtenemos un código más _legible_ y _rendidor_.

<base-warning>
  <base-warning-title>
    Recuerda que los sets no están ordenados
  </base-warning-title>
  <base-warning-content>
    No hay garantía de que al convertirlos de nuevo a una lista, se preserve el orden de los elementos.
  </base-warning-content>
</base-warning>

Del [Zen de Python](https://www.python.org/dev/peps/pep-0020/):

> Lo bello es mejor que lo feo. <br>
> Lo explícito es mejor que lo implícito.<br>
> Lo simple es mejor que lo complejo.<br>
> Lo plano es mejor que lo anidado.

¿No son los sets precisamente Bellos, Explícitos, Simples y Planos?

## Pruebas de pertenencia

Cada vez que usamos una declaración _if_ para verificar si un elemento está, por ejemplo, en una lista, estamos realizando una prueba de pertenencia:

```python
my_list = [1, 2, 3]
>>> if 2 in my_list:
...     print('Yes, this is a membership test!')
...
# Yes, this is a membership test!
```

Y los sets son más eficientes que las listas al realizarlas:

```python
>>> from timeit import timeit
>>> def in_test(iterable):
...     for i in range(1000):
...             if i in iterable:
...                     pass
...
>>> timeit('in_test(iterable)', setup="from __main__ import in_test; iterable = list(range(1000))", number=1000)
# 12.459663048726043
```

```python
>>> from timeit import timeit
>>> def in_test(iterable):
...     for i in range(1000):
...             if i in iterable:
...                     pass
...
>>> timeit('in_test(iterable)', setup="from __main__ import in_test; iterable = set(range(1000))", number=1000)
# 0.12354438152988223
```

Estas pruebas provienen de este [hilo de Stack Overflow](https://stackoverflow.com/questions/2831212/python-sets-vs-lists).

Así que si estás haciendo comparaciones como esta en listas masivas, te acelerará bastante si conviertes esa lista en un set.

## Añadir Elementos

Dependiendo del número de elementos a añadir, tendremos que elegir entre los métodos `add()` y `update()`.

`add()` Añadirá un solo elemento:

```python
>>> s = {1, 2, 3}
>>> s.add(4)
>>> s
{1, 2, 3, 4}
```

Y `update()` varios:

```python
>>> s = {1, 2, 3}
>>> s.update([2, 3, 4, 5, 6])
>>> s
{1, 2, 3, 4, 5, 6}
```

Recuerda, los sets eliminan duplicados.

## Eliminar Elementos

Si quieres que se te notifique cuando tu código intente eliminar un elemento que no está en el set, usa `remove()`. De lo contrario, `discard()` proporciona una alternativa adecuada:

```python
>>> s = {1, 2, 3}
>>> s.remove(3)
>>> s
{1, 2}
>>> s.remove(3)
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# KeyError: 3
```

`discard()` no generará ningún error:

```python
>>> s = {1, 2, 3}
>>> s.discard(3)
>>> s
{1, 2}
>>> s.discard(3)
>>> # ¡no pasa nada!
```

También podemos usar `pop()` para descartar un elemento aleatoriamente:

```python
>>> s = {1, 2, 3, 4, 5}
>>> s.pop()  # elimina un elemento arbitrario
1
>>> s
{2, 3, 4, 5}
```

O `clear()` para eliminar todos los valores de un set:

```python
>>> s = {1, 2, 3, 4, 5}
>>> s.clear()  # descarta todos los elementos
>>> s
set()
```

## El método union()

`union()` o `|` crearán un nuevo set que contiene todos los elementos de los sets que proporcionemos:

```python
>>> s1 = {1, 2, 3}
>>> s2 = {3, 4, 5}
>>> s1.union(s2)  # o 's1 | s2'
{1, 2, 3, 4, 5}
```

## El método intersection()

`intersection` o `&` devolverán un set que contiene solo los elementos que son comunes en todos ellos:

```python
>>> s1 = {1, 2, 3}
>>> s2 = {2, 3, 4}
>>> s3 = {3, 4, 5}
>>> s1.intersection(s2, s3)  # o 's1 & s2 & s3'
{3}
```

## El método difference()

Diferencia crea un nuevo set con los valores que están en "s1" pero no en "s2":

```python
>>> s1 = {1, 2, 3}
>>> s2 = {2, 3, 4}
>>> s1.difference(s2)  # o 's1 - s2'
{1}
```

## symmetric_difference()

`symmetric_difference` o `^` devolverán todos los valores que no son comunes entre los sets.

```python
>>> s1 = {1, 2, 3}
>>> s2 = {2, 3, 4}
>>> s1.symmetric_difference(s2)  # o 's1 ^ s2'
{1, 4}
```

## Conclusiones

Espero que después de leer este artículo sepas qué es un set, cómo manipular sus elementos y las operaciones que pueden realizar. Saber cuándo usar un set definitivamente te ayudará a escribir código más limpio y a acelerar tus programas.
