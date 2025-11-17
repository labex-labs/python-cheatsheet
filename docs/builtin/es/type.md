---
title: 'Función incorporada type() de Python - Hoja de trucos de Python'
description: 'Con un argumento, devuelve el tipo de un objeto. El valor de retorno es un objeto de tipo y generalmente el mismo objeto que devuelve object.__class__.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada type() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#type">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Con un argumento, devuelve el tipo de un objeto. El valor de retorno es un objeto de tipo y generalmente el mismo objeto que devuelve object.__class__.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `type()` en Python es una función incorporada que devuelve el tipo de un objeto. Es una herramienta fundamental para comprender los tipos de datos con los que está trabajando en Python.

## Ejemplos

```python
type('span')
type(99)
type(1.1)
type([1, 2])
type((1, 2))
type({1, 2})
type({'a': 1, 'b': 2})
```

Salida:

```plaintext
<class 'str'>
<class 'int'>
<class 'float'>
<class 'list'>
<class 'tuple'>
<class 'set'>
<class 'dict'>
```

## Enlaces relevantes

- <router-link to="/blog/python-data-types/">Tipos de datos de Python</router-link>
- <router-link to="/builtin/isinstance/">isinstance()</router-link>
- <router-link to="/builtin/issubclass/">issubclass()</router-link>
- <router-link to="/builtin/str/">str()</router-link>
- <router-link to="/builtin/int/">int()</router-link>
- <router-link to="/builtin/float/">float()</router-link>
- <router-link to="/builtin/list/">list()</router-link>
- <router-link to="/builtin/tuple/">tuple()</router-link>
- <router-link to="/builtin/dict/">dict()</router-link>
- <router-link to="/builtin/set/">set()</router-link>
