---
title: 'Python Args y Kwargs - Hoja de Trucos de Python'
description: 'Args y kwargs pueden parecer intimidantes, pero son fáciles de entender y otorgan flexibilidad y legibilidad a tus funciones.'
labUrl: 'https://labex.io/es/labs/python-python-args-and-kwargs-633646?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Args y Kwargs de Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    <a href="https://docs.python.org/3/tutorial/index.html">Python args and kwargs Made Easy</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    <code>*args</code> y <code>**kwargs</code> pueden parecer intimidantes, pero la verdad es que no son tan difíciles de entender y tienen el poder de otorgar mucha flexibilidad a sus funciones.
  </base-disclaimer-content>
</base-disclaimer>

Lea el artículo <router-link to="/blog/python-easy-args-kwargs">Python \*args y \*\*kwargs Hechos Fáciles</router-link> para una introducción más profunda.

## Args y Kwargs

`*args` y `**kwargs` le permiten pasar un número indefinido de argumentos y palabras clave al llamar a una función.

```python
# Define una función que acepta cualquier número de argumentos posicionales y de palabra clave
def some_function(*args, **kwargs):
    pass

# Llama con cualquier número de argumentos posicionales
some_function(arg1, arg2, arg3)

# Llama con cualquier número de argumentos de palabra clave
some_function(key1=arg1, key2=arg2, key3=arg3)

# Llama con argumentos posicionales y de palabra clave
some_function(arg, key1=arg1)

# O llama sin argumentos en absoluto
some_function()
```

<base-warning>
  <base-warning-title>
    Convenciones de Python
  </base-warning-title>
  <base-warning-content>
    Las palabras <code>*args</code> y <code>**kwargs</code> son convenciones. No son impuestas por el intérprete, sino consideradas buenas prácticas por la comunidad de Python.
  </base-warning-content>
</base-warning>

## args

Puede acceder a los _argumentos_ a través de la variable `args`:

```python
# *args recopila argumentos posicionales en una tupla
def some_function(*args):
    print(f'Argumentos pasados: {args} como {type(args)}')

# Pasa múltiples argumentos - serán recopilados en la tupla args
some_function('arg1', 'arg2', 'arg3')
```

```output
Argumentos pasados: ('arg1', 'arg2', 'arg3') como <class 'tuple'>
```

## kwargs

Las palabras clave se acceden a través de la variable `kwargs`:

```python
# **kwargs recopila argumentos de palabra clave en un diccionario
def some_function(**kwargs):
    print(f'palabras clave: {kwargs} como {type(kwargs)}')

# Pasa argumentos de palabra clave - serán recopilados en el diccionario kwargs
some_function(key1='arg1', key2='arg2')
```

```output
palabras clave: {'key1': 'arg1', 'key2': 'arg2'} como <class 'dict'>
```

## Enlaces relevantes

- <router-link to="/cheatsheet/functions">Funciones</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Listas y Tuplas</router-link>
- <router-link to="/cheatsheet/dictionaries">Diccionarios de Python</router-link>
- <router-link to="/blog/python-easy-args-kwargs">Python \*args y \*\*kwargs Hechos Fáciles</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
