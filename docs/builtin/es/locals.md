---
title: 'Función incorporada locals() de Python - Hoja de trucos de Python'
description: 'Actualiza y devuelve un diccionario que representa la tabla de símbolos local actual. Las variables libres son devueltas por locals() cuando se llama en bloques de funciones, pero no en bloques de clases. Tenga en cuenta que a nivel de módulo, locals() y globals() son el mismo diccionario.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada locals() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#locals">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Actualiza y devuelve un diccionario que representa la tabla de símbolos local actual. Las variables libres son devueltas por locals() cuando se llama en bloques de función, pero no en bloques de clase. Tenga en cuenta que en el nivel de módulo, locals() y <router-link to="/builtin/globals">globals()</router-link> son el mismo diccionario.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `locals()` devuelve un diccionario que representa la tabla de símbolos local actual. Esto incluye todas las variables locales, argumentos y otros objetos en el ámbito actual.

Es una herramienta útil para inspeccionar el espacio de nombres local.

### Ejemplo

```python
def my_function(arg1, arg2):
    local_var = "I am local"
    print(locals())

my_function("hello", "world")
```

Salida:

```plaintext
{'arg1': 'hello', 'arg2': 'world', 'local_var': 'I am local'}
```

## Enlaces relevantes

- <router-link to="/cheatsheet/debugging">Cheatsheet: Depuración</router-link>
- <router-link to="/cheatsheet/functions">Cheatsheet: Funciones</router-link>
- <router-link to="/cheatsheet/dictionaries">Cheatsheet: Diccionarios</router-link>
- <router-link to="/builtin/globals">globals()</router-link>
- <router-link to="/builtin/dir">dir()</router-link>
