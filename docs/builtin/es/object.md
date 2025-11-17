---
title: 'Función incorporada object() de Python - Hoja de trucos de Python'
description: 'Devuelve un nuevo objeto sin características. object es la base de todas las clases. Tiene métodos comunes a todas las instancias de clases de Python. Esta función no acepta argumentos.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada Python object()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#object">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Devuelve un nuevo objeto sin características. object es una base para todas las clases. Tiene métodos que son comunes a todas las instancias de las clases de Python. Esta función no acepta ningún argumento.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `object()` devuelve un nuevo objeto vacío y sin características. Este objeto es la base para todas las clases en Python. No tiene atributos o métodos especiales.

Aunque puedes crear instancias de `object`, no es algo que harás a menudo en la programación diaria. Es más bien un bloque de construcción fundamental del modelo de objetos de Python.

### Ejemplo

```python
# Create a new object
o = object()

# See its type
print(type(o))
```

Salida:

```plaintext
<class 'object'>
```

Nota: No tiene atributos que puedas establecer. `o.name = "test"` generaría un AttributeError.

## Enlaces relevantes

- <router-link to="/cheatsheet/oop-basics">Cheatsheet: Fundamentos de OOP</router-link>
- <router-link to="/blog/python-data-types">Blog: Tipos de Datos de Python</router-link>
- <router-link to="/builtin/isinstance">isinstance()</router-link>
- <router-link to="/builtin/issubclass">issubclass()</router-link>
- <router-link to="/builtin/dir">dir()</router-link>
- <router-link to="/builtin/hasattr">hasattr()</router-link>
- <router-link to="/builtin/getattr">getattr()</router-link>
- <router-link to="/builtin/delattr">delattr()</router-link>
