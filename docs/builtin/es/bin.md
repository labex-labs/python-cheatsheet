---
title: 'Función incorporada bin() de Python - Hoja de trucos de Python'
description: 'Convierte un número entero a una cadena binaria con el prefijo “0b”. El resultado es una expresión Python válida. Si x no es un objeto int de Python, debe definir un método __index__() que devuelva un entero.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada bin() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#bin">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Convierte un número entero a una cadena binaria prefijada con “0b”. El resultado es una expresión válida de Python. Si x no es un objeto int de Python, debe definir un método <code>__index__()</code> que devuelva un entero.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `bin()` convierte un entero en su representación binaria. La cadena resultante se antepone con "0b" para indicar que es un número binario.

### Ejemplos

Aquí hay algunos ejemplos de cómo usar `bin()`:

```python
# Convert integers to binary
print(bin(2))
print(bin(7))
print(bin(1))
print(bin(10))
print(bin(100))
print(bin(1000))
```

```output
0b10
0b111
0b1
0b1010
0b1100100
0b1111101000
```

## Enlaces relevantes

- <router-link to="/blog/python-data-types">Blog: Tipos de datos de Python</router-link>
- <router-link to="/cheatsheet/string-formatting">Hoja de trucos: Formato de cadenas</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/hex">hex()</router-link>
- <router-link to="/builtin/oct">oct()</router-link>
- <router-link to="/builtin/format">format()</router-link>
