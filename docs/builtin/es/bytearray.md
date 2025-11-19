---
title: 'Función incorporada bytearray() de Python - Hoja de trucos de Python'
description: 'Devuelve un nuevo array de bytes. La clase bytearray es una secuencia mutable de enteros en el rango [...]. Tiene la mayoría de los métodos habituales de las secuencias mutables, descritos en Tipos de Secuencias Mutables, así como la mayoría de los métodos que tiene el tipo bytes [...]'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada Python bytearray()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#bytearray">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Devuelve un nuevo array de bytes. La clase bytearray es una secuencia mutable de enteros en el rango [...]. Tiene la mayoría de los métodos habituales de las secuencias mutables, descritos en Tipos de Secuencias Mutables, así como la mayoría de los métodos que tiene el tipo bytes [...].
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `bytearray()` devuelve un nuevo array de bytes. Este objeto es una secuencia mutable de enteros en el rango 0 <= x < 256. Es esencialmente una versión mutable del objeto `bytes`, lo que significa que puedes cambiar su contenido después de crearlo. Esto es útil para manejar datos binarios que necesitan ser modificados in situ.

## Ejemplos

```python
# Crear un bytearray a partir de una cadena con una codificación específica
ba1 = bytearray("hello", "utf-8")
print(ba1)
```

```output
bytearray(b'hello')
```

```python
# Crear un bytearray a partir de una lista de enteros
ba2 = bytearray([72, 101, 108, 108, 111])
print(ba2)
```

```output
bytearray(b'Hello')
```

```python
# Modificar un bytearray (es mutable)
ba2[0] = 104  # ASCII para 'h'
ba2.append(33)  # ASCII para '!'
print(ba2)
```

```output
bytearray(b'hello!')
```

## Enlaces relevantes

- <router-link to="/cheatsheet/reading-and-writing-files">Cheatsheet: Lectura y Escritura de Archivos</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: Listas y Tuplas</router-link>
- <router-link to="/blog/python-data-types">Blog: Tipos de Datos de Python</router-link>
- <router-link to="/builtin/bytes">bytes()</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/memoryview">memoryview()</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/int">int()</router-link>
