---
title: 'Función incorporada dir() de Python - Hoja de trucos de Python'
description: 'Sin argumentos, devuelve la lista de nombres en el ámbito local actual. Con un argumento, intenta devolver una lista de atributos válidos para ese objeto.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada dir() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#dir">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Sin argumentos, devuelve la lista de nombres en el ámbito local actual. Con un argumento, intenta devolver una lista de atributos válidos para ese objeto.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `dir()` en Python es una potente función incorporada que devuelve una lista de nombres en el espacio de nombres actual o los atributos de un objeto dado. Se utiliza comúnmente para introspeccionar y explorar objetos, módulos y clases, ayudándote a descubrir los métodos, atributos y nombres disponibles con los que puedes trabajar.

## Sintaxis

```python
dir([object])
```

- `object` (opcional): El objeto cuyos atributos deseas explorar. Si no se proporciona, devuelve los nombres en el espacio de nombres actual.

## Explorando Nombres en el Espacio de Nombres Actual

```python
a = 10
b = "Hello"
def my_function():
    pass

print(dir())
```

```output
['__annotations__', '__builtins__', '__doc__', '__loader__', '__name__', '__package__', '__spec__', 'a', 'b', 'my_function']
```

## Explorando Atributos de Módulos

```python
import math
print(dir(math))
```

```output
['__doc__', '__loader__', '__name__', '__package__', '__spec__', 'acos', 'acosh', 'asin', '...']
```

## Explorando Atributos de Objetos

```python
class MyClass:
    def __init__(self):
        self.x = 5
        self.y = "Hello"

obj = MyClass()
print(dir(obj))
```

```output
['__class__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', ... 'x', 'y']
```

## Uso de `dir()` con Tipos Incorporados

```python
my_list = [1, 2, 3]
print(dir(my_list))
```

```output
[..., 'append', 'clear', 'copy', 'count', 'extend', 'index', 'insert', 'pop', 'remove', 'reverse', 'sort']
```

## Filtrado de la Salida de `dir()`

```python
import math
print([name for name in dir(math) if not name.startswith("__")])
```

```output
['acos', 'acosh', 'asin', 'asinh', 'atan', 'atan2', ... ]
```

## Enlaces Relevantes

- <router-link :to="'/builtin/globals'">`globals()`</router-link>
- <router-link :to="'/builtin/locals'">`locals()`</router-link>
- <router-link :to="'/builtin/hasattr'">`hasattr()`</router-link>
- <router-link :to="'/builtin/getattr'">`getattr()`</router-link>
- <router-link :to="'/cheatsheet/debugging'">Depuración</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">Conceptos Básicos de OOP</router-link>
