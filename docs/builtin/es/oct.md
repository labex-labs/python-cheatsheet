---
title: 'Función incorporada oct() de Python - Hoja de trucos de Python'
description: 'Convierte un número entero a una cadena octal con el prefijo “0o”. El resultado es una expresión Python válida. Si x no es un objeto int de Python, debe definir un método __index__() que devuelva un entero.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada oct() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#oct">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Convierte un número entero a una cadena octal con el prefijo “0o”. El resultado es una expresión Python válida. Si x no es un objeto <router-link to="/builtin/int">int</router-link> de Python, debe definir un método __index__() que devuelva un entero.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `oct()` convierte un número entero a su representación octal. La cadena resultante tiene el prefijo "0o" para indicar que es un número octal.

### Ejemplos

Aquí hay algunos ejemplos de cómo usar `oct()`:

```python
# Convertir enteros a octal
print(oct(8))
print(oct(10))
print(oct(100))
print(oct(1))
print(oct(1000))
```

```output
0o10
0o12
0o144
0o1
0o1750
```

## Enlaces relevantes

- <router-link to="/blog/python-data-types">Blog: Tipos de datos de Python</router-link>
- <router-link to="/cheatsheet/string-formatting">Hoja de trucos: Formato de cadenas</router-link>
- <router-link to="/builtin/bin">bin()</router-link>
- <router-link to="/builtin/hex">hex()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/format">format()</router-link>
