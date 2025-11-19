---
title: 'Función incorporada hex() de Python - Hoja de trucos de Python'
description: 'Convierte un número entero a una cadena hexadecimal en minúsculas con el prefijo “0x”. Si x no es un objeto int de Python, debe definir un método __index__() que devuelva un entero.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada hex() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#hex">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Convierte un número entero a una cadena hexadecimal en minúsculas con el prefijo “0x”. Si x no es un objeto `int` de Python, debe definir un método `__index__()` que devuelva un entero.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `hex()` en Python es una función incorporada que convierte un número entero en su correspondiente representación hexadecimal. La cadena resultante tiene el prefijo "0x" para indicar que es un valor hexadecimal. Esta función es útil cuando se necesita trabajar con números hexadecimales, que son comunes en la programación de bajo nivel, como al tratar con direcciones de memoria o códigos de color.

## Ejemplos

```python
hex(1)
hex(10)
hex(100)
hex(1000)
```

```output
'0x1'
'0xa'
'0x64'
'0x3e8'
```

## Enlaces relevantes

- <router-link :to="'/builtin/bin'">bin()</router-link>
- <router-link :to="'/builtin/int'">int()</router-link>
- <router-link :to="'/builtin/oct'">oct()</router-link>
- <router-link :to="'/cheatsheet/string-formatting'">Formato de Cadenas</router-link>
- <router-link :to="'/blog/python-data-types'">Tipos de Datos de Python</router-link>
- <router-link :to="'/builtin/format'">format()</router-link>
