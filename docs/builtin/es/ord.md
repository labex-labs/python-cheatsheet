---
title: 'Función incorporada ord() de Python - Hoja de trucos de Python'
description: 'Dada una cadena que representa un carácter Unicode, devuelve un entero que representa el punto de código Unicode de ese carácter.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada ord() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#ord">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Dada una cadena que representa un único carácter Unicode, devuelve un entero que representa el punto de código Unicode de ese carácter.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `ord()` es la inversa de <router-link to="/builtin/chr">chr()</router-link>. Toma una cadena de un solo carácter y devuelve su punto de código Unicode, que es un entero.

### Ejemplos

```python
# Obtener el punto de código Unicode de un carácter
print(ord('A'))
print(ord('€'))
print(ord('1'))
print(ord('a'))
```

```output
65
8364
49
97
```

## Enlaces relevantes

- <router-link to="/cheatsheet/manipulating-strings">Hoja de trucos: Manipulación de cadenas</router-link>
- <router-link to="/blog/python-data-types">Blog: Tipos de datos de Python</router-link>
- <router-link to="/builtin/chr">chr()</router-link>
- <router-link to="/builtin/ascii">ascii()</router-link>
