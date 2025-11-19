---
title: 'Función incorporada chr() de Python - Hoja de trucos de Python'
description: "Devuelve la cadena que representa un carácter cuyo punto de código Unicode es el entero i. Por ejemplo, chr(97) devuelve la cadena 'a', mientras que chr(8364) devuelve la cadena '€'. Es la inversa de ord()."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada chr() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#chr">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Devuelve la cadena que representa un carácter cuyo punto de código Unicode es el entero i. Por ejemplo, chr(97) devuelve la cadena 'a', mientras que chr(8364) devuelve la cadena '€'. Esta es la inversa de ord().
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `chr()` en Python es una función incorporada que toma un entero como argumento y devuelve una cadena que representa el carácter Unicode correspondiente.

El entero pasado a la función `chr()` debe estar en el rango de 0 a 65535, que corresponde al rango de caracteres Unicode válidos.

```python
print(chr(97))
print(chr(65))
print(chr(120))
```

```output
a
A
x
```

La función `chr()` es la inversa de la función `ord()`, que toma un solo carácter como argumento y devuelve el entero correspondiente.

```python
print(ord('a'))
print(ord('A'))
print(ord('x'))
```

```output
97
65
120
```

La función `chr()` puede ser útil cuando se trabaja con datos de texto y caracteres, particularmente cuando se trabaja con caracteres Unicode. Por ejemplo, puede usarla para convertir un entero que representa un punto de código Unicode al carácter correspondiente, o para generar una cadena de caracteres a partir de un rango de enteros.

## Enlaces relevantes

- <router-link :to="'/builtin/ord'">ord()</router-link>
- <router-link :to="'/builtin/ascii'">ascii()</router-link>
- <router-link :to="'/cheatsheet/manipulating-strings'">Manipulación de Cadenas</router-link>
- <router-link :to="'/blog/python-data-types'">Tipos de Datos de Python</router-link>
