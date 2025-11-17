---
title: 'Función incorporada str() de Python - Hoja de trucos de Python'
description: 'Devuelve una versión en cadena del objeto. Si no se proporciona el objeto, devuelve una cadena vacía. De lo contrario, el comportamiento de str() depende de si se proporciona la codificación o los errores.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada str() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#func-str">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Devuelve una versión en cadena de un objeto. Si no se proporciona objeto, devuelve la cadena vacía. De lo contrario, el comportamiento de str() depende de si se proporcionan codificación o errores.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `str()` en Python es una función incorporada que devuelve una versión en cadena de un objeto. Si no se proporciona ningún objeto, devuelve una cadena vacía. Es una función versátil para convertir otros tipos de datos a cadenas.

## Ejemplos

```python
# transformar un entero a una cadena
from_integer = str(29)
print(from_integer)
print(type(from_integer))
```

Salida:

```plaintext
29
<class 'str'>
```

```python
# transformar un flotante a cadena
from_float = str(-3.14)
print(from_float)
print(type(from_float))
```

Salida:

```plaintext
-3.14
<class 'str'>
```

```python
# devolver una cadena vacía
str()
```

Salida:

```plaintext
''
```

## Enlaces relevantes

- <router-link to="/cheatsheet/manipulating-strings">Cheatsheet: Manipulación de Cadenas</router-link>
- <router-link to="/cheatsheet/string-formatting">Cheatsheet: Formato de Cadenas</router-link>
- <router-link to="/blog/python-data-types">Blog: Tipos de Datos de Python</router-link>
- <router-link to="/builtin/repr">repr()</router-link>
- <router-link to="/builtin/ascii">ascii()</router-link>
- <router-link to="/builtin/bytes">bytes()</router-link>
- <router-link to="/builtin/format">format()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/float">float()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/set">set()</router-link>
