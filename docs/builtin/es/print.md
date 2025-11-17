---
title: 'Función integrada print() de Python - Hoja de trucos de Python'
description: 'Imprime objetos en el archivo de flujo de texto, separados por sep y seguidos por end. sep, end, file y flush, si están presentes, deben darse como argumentos de palabra clave.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada print() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#print">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Imprime objetos en el flujo de texto archivo, separados por sep y seguidos por end. sep, end, file y flush, si están presentes, deben darse como argumentos de palabra clave.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `print()` escribe el valor del argumento(s) que recibe. [...] maneja múltiples argumentos, cantidades de punto flotante y cadenas. Las cadenas se imprimen sin comillas, y se inserta un espacio entre los elementos, por lo que puede formatear las cosas de forma agradable:

```python
print('Hello world!')
```

Salida:

```plaintext
Hello world!
```

```python
a = 1
print('Hello world!', a)
```

Salida:

```plaintext
Hello world! 1
```

## La palabra clave end

El argumento de palabra clave `end` se puede usar para evitar el salto de línea después de la salida, o para terminar la salida con una cadena diferente:

```python
phrase = ['printed', 'with', 'a', 'dash', 'in', 'between']
for word in phrase:
    print(word, end='-')
```

Salida:

```plaintext
printed-with-a-dash-in-between-
```

## La palabra clave sep

La palabra clave `sep` especifica cómo separar los objetos, si hay más de uno:

```python
print('cats', 'dogs', 'mice', sep=',')
```

Salida:

```plaintext
cats,dogs,mice
```

## Enlaces relevantes

- <router-link to="/cheatsheet/string-formatting">Cheatsheet: Formato de Cadenas</router-link>
- <router-link to="/cheatsheet/manipulating-strings">Cheatsheet: Manipulación de Cadenas</router-link>
- <router-link to="/builtin/format">format()</router-link>
- <router-link to="/builtin/input">input()</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/repr">repr()</router-link>
