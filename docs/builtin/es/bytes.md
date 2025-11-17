---
title: 'Función incorporada bytes() de Python - Hoja de trucos de Python'
description: "Devuelve un nuevo objeto 'bytes', que es una secuencia inmutable de enteros en el rango [...]. bytes es una versión inmutable de bytearray: tiene los mismos métodos no mutables y el mismo comportamiento de indexación y segmentación."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada Python bytes()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#bytes">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Devuelve un nuevo objeto "bytes" que es una secuencia inmutable de enteros en el rango de [...]. bytes es una versión inmutable de bytearray: tiene los mismos métodos no mutables y el mismo comportamiento de indexación y segmentación.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

En Python, el tipo `bytes` es una secuencia inmutable de bytes individuales. Representa una secuencia de enteros en el rango de 0 a 255, que se puede utilizar para representar datos binarios como imágenes, audio u otros tipos de archivos.

Puede crear un objeto bytes de varias maneras. Una forma es usar el constructor `bytes()` y pasarle una cadena, un objeto bytearray o un objeto bytes. Por ejemplo:

```python
data = "Hello, World!"
bytes_obj = bytes(data, "utf-8")
print(bytes_obj)
```

Salida:

```plaintext
b'Hello, World!'
```

Otra forma es usar una notación literal anteponiendo a la cadena `b` o `B`:

```python
data = b"Hello, World!"
print(data)
```

Salida:

```plaintext
b'Hello, World!'
```

## Enlaces relevantes

- <router-link :to="'/builtin/bytearray'">bytearray()</router-link>
- <router-link :to="'/builtin/memoryview'">memoryview()</router-link>
- <router-link :to="'/cheatsheet/reading-and-writing-files'">Lectura y Escritura de Archivos</router-link>
- <router-link :to="'/blog/python-data-types'">Tipos de Datos de Python</router-link>
