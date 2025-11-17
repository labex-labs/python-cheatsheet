---
title: 'Función incorporada ascii() de Python - Hoja de trucos de Python'
description: "Al igual que repr(), devuelve una cadena que contiene una representación imprimible de un objeto, pero escapa los caracteres no ASCII en la cadena devuelta por repr() usando escapes \\x, \\u o \\U."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada ascii() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#ascii">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Al igual que <code>repr()</code>, devuelve una cadena que contiene una representación imprimible de un objeto, pero escapa los caracteres que no son ASCII en la cadena devuelta por <code>repr()</code> usando secuencias de escape <code>\x</code>, <code>\u</code> o <code>\U</code>.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `ascii()` en Python es una función incorporada que devuelve una cadena que contiene una representación imprimible de un objeto, similar a `repr()`. Sin embargo, `ascii()` escapa cualquier carácter que no sea ASCII con secuencias de escape `\x`, `\u` o `\U`. Esto es útil para asegurar que una cadena sea segura para ser utilizada en un entorno que solo admite ASCII.

## Ejemplos

```python
# Para un carácter ASCII, es lo mismo que repr()
ascii('A')

# Para un carácter que no es ASCII, se escapa
ascii('ë')

# Como comparación, repr() no lo escaparía
repr('ë')

# También funciona con iterables
ascii(['A', 'ë'])
```

Salida:

```plaintext
'A'
'\\xeb'
'ë'
['A', '\\xeb']
```

## Enlaces relevantes

- <router-link to="/cheatsheet/manipulating-strings">Cheatsheet: Manipulación de Cadenas</router-link>
- <router-link to="/blog/python-data-types">Blog: Tipos de Datos de Python</router-link>
- <router-link to="/builtin/repr">repr()</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/bytes">bytes()</router-link>
- <router-link to="/builtin/chr">chr()</router-link>
- <router-link to="/builtin/ord">ord()</router-link>
