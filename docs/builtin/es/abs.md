---
title: 'Función incorporada abs() de Python - Hoja de trucos de Python'
description: 'Devuelve el valor absoluto de un número. El argumento puede ser un entero, un número de punto flotante o un objeto que implemente __abs__(). Si el argumento es un número complejo, se devuelve su magnitud.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada abs() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#abs">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Devuelve el valor absoluto de un número. El argumento puede ser un entero, un número de punto flotante o un objeto que implemente <code>__abs__()</code>. Si el argumento es un número complejo, se devuelve su magnitud.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `abs()` en Python es una función incorporada que devuelve el valor absoluto de un número. Puede manejar enteros, números de punto flotante e incluso números complejos (devolviendo su magnitud). Esta función es útil cuando se necesita asegurar que un valor sea positivo, independientemente de su signo original.

### Ejemplos

```python
# Para enteros
abs(-1)
abs(0)

# Para flotantes
abs(-3.14)

# Para números complejos (devuelve la magnitud)
abs(3 + 4j)

# Para otros sistemas numéricos
abs(0x10)  # Hexadecimal
abs(0b10)  # Binario
abs(0o20)  # Octal
```

```output
1
0
3.14
5.0
16
2
16
```

## Enlaces relevantes

- <router-link to="/blog/python-data-types">Blog: Tipos de datos de Python</router-link>
- <router-link to="/builtin/pow">pow()</router-link>
- <router-link to="/builtin/round">round()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/float">float()</router-link>
- <router-link to="/builtin/complex">complex()</router-link>
