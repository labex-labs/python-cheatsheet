---
title: 'Función incorporada float() de Python - Hoja de trucos de Python'
description: 'Devuelve un número de punto flotante construido a partir de un número o cadena x.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada float() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#float">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Devuelve un número de punto flotante construido a partir de un número o una cadena x.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `float()` en Python es una función incorporada que le permite convertir un número o una cadena que contiene un número en un número de punto flotante. Esto es particularmente útil cuando necesita realizar operaciones aritméticas que requieren precisión decimal.

La función <router-link to="/builtin/float">float()</router-link> devuelve un número de punto flotante a partir de un número o una cadena.

## Ejemplos

```python
float('10')
float(10)
```

Salida:

```plaintext
10.0
10.0
```

## Enlaces relevantes

- <router-link :to="'/builtin/int/'">int()</router-link>
- <router-link :to="'/builtin/complex/'">complex()</router-link>
- <router-link :to="'/blog/python-data-types/'">Tipos de datos de Python</router-link>
- <router-link :to="'/builtin/str'">str()</router-link>
- <router-link :to="'/builtin/round'">round()</router-link>
- <router-link :to="'/cheatsheet/string-formatting'">Formato de cadenas</router-link>
