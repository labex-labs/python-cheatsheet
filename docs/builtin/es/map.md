---
title: 'Función Incorporada map() de Python - Hoja de Trucos de Python'
description: 'Devuelve un iterador que aplica una función a cada elemento de un iterable, produciendo los resultados. Si se pasan argumentos iterables adicionales, la función debe aceptar esa cantidad de argumentos y se aplica a los elementos de todos los iterables en paralelo. Con múltiples iterables, el iterador se detiene cuando el iterable más corto se agota. Para casos donde las entradas de la función ya están organizadas en tuplas de argumentos.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada map() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#map">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Devuelve un iterador que aplica una función a cada elemento de un iterable, generando los resultados. Si se proporcionan argumentos iterables adicionales, la función debe aceptar esa cantidad de argumentos y se aplica a los elementos de todos los iterables en paralelo. Con múltiples iterables, el iterador se detiene cuando el iterable más corto se agota. Para casos en los que las entradas de la función ya están organizadas en <router-link to="/builtin/tuple">tuplas</router-link> de argumentos.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función map, _map(función, iterable)_ toma uno o más iterables, una 'función de devolución de llamada' (a menudo una lambda), y devuelve un "Objeto Map". El objeto map contiene el resultado de la función map aplicando la función de devolución de llamada a cada elemento en los argumentos iterables. Map itera sobre los objetos iterables proporcionados simultáneamente. Es decir, en cada paso, "i" en la función map, el elemento en el índice "i" de cada iterable estará disponible para la función map en ese momento. A menudo querrá convertir el objeto map resultante a una <router-link to="/builtin/list">lista</router-link>, <router-link to="/builtin/tuple">tupla</router-link>, u otra forma de objeto que sea más conveniente de usar una vez que haya terminado de mapear.

\*\*\*Una nota importante: A partir del lanzamiento de Python 3, si los iterables suministrados a map son de diferentes longitudes, map se detendrá y devolverá cuando haya alcanzado el número de pasos correspondiente a la longitud del iterable más corto.

## Parámetros de entrada

Función: toma el elemento (o elementos) en el índice correspondiente al paso actual del Map y da el resultado devuelto como un elemento para almacenar en el Objeto Map. El tipo de elemento almacenado en el objeto map será idéntico al tipo devuelto por la función.

Iterable(s): `<router-link to="/builtin/tuple">Tupla</router-link>`, `<router-link to="/builtin/list">Lista</router-link>`, `<router-link to="/builtin/range">Rango</router-link>`, `<router-link to="/builtin/dict">Diccionario</router-link>`, `<router-link to="/builtin/set">Conjunto</router-link>`, `<router-link to="/builtin/str">Cadena</router-link>`.

## Un ejemplo muy simple

```python
def double_map(func, iter):
    my_map = map(func, iter)
    return list(my_map)

def double(element):
    return element * 2

nums = [1, 2, 3, 4]

print(double_map(double, nums))
```

```output
[2, 4, 6, 8]
```

## Un ejemplo menos simple

### Este ejemplo emplea una función de devolución de llamada escrita como una lambda, así como

```python
def multi_map(func, *iters):
    my_map = map(func, *iters)
    return list(my_map)

list1 = [1, 2, 3]
list2 = [4, 5, 6]

print(multi_map((lambda item1, item2: item1 * item2), list1, list2))
```

```output
[4, 10, 18]
```

## Un ejemplo que demuestra el manejo de map de diferentes longitudes de iterables

```python
def max(a, b):
    if a > b:
        return a
    else:
        return b

list1 = [1, 1, 1]
list2 = [0, 0, 0, 1, 1, 1, 1, 1, 1, 1]

result = list(map(max, list1, list2))

print(result)
```

```output
[1, 1, 1]
```

¿Nota cómo la longitud de la lista resultante es igual a la longitud de list1?

## Enlaces relevantes

- <router-link to="/cheatsheet/functions">Hoja de trucos: Funciones (incluyendo Lambdas)</router-link>
- <router-link to="/cheatsheet/comprehensions">Hoja de trucos: Comprensiones</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">Blog: Comprensiones de Python Paso a Paso</router-link>
- <router-link to="/modules/itertools-module">Módulo: itertools</router-link>
- <router-link to="/builtin/filter">filter()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
