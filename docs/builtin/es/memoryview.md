---
title: 'Función incorporada memoryview() de Python - Hoja de trucos de Python'
description: "Devuelve un objeto 'vista de memoria' creado a partir del argumento dado. Consulte Vistas de memoria para obtener más información."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada Python memoryview()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#memoryview">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Devuelve un objeto "vista de memoria" creado a partir del argumento dado. Consulte Vistas de memoria para obtener más información.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `memoryview()` crea un objeto de vista de memoria a partir de un argumento dado. Una vista de memoria le permite acceder a la memoria de otro objeto, como un objeto `<router-link to="/builtin/bytes">bytes</router-link>` o `<router-link to="/builtin/bytearray">bytearray</router-link>`, sin hacer una copia. Esto es muy eficiente para datos grandes, ya que evita la duplicación de memoria.

### Ejemplos

Así es como puede usar `memoryview()`:

```python
# Create a bytearray
data = bytearray(b'hello world')

# Create a memory view of the data
view = memoryview(data)

# Access the data through the view
print(view[0])  # ASCII for 'h'
print(view[6:11])  # a slice of the memory
print(view[6:11].tobytes())

# You can also modify the underlying data through the view
view[0] = 72  # ASCII for 'H'
print(data)
```

Salida:

```plaintext
104
<memory at 0x...>
b'world'
bytearray(b'Hello world')
```

## Enlaces relevantes

- <router-link to="/blog/python-data-types">Blog: Tipos de datos de Python</router-link>
- <router-link to="/builtin/bytes">bytes()</router-link>
- <router-link to="/builtin/bytearray">bytearray()</router-link>
