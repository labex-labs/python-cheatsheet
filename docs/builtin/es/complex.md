---
title: 'Función incorporada complex() de Python - Hoja de trucos de Python'
description: 'Devuelve un número complejo con el valor real + imag*1j o convierte una cadena o número a un número complejo. [...] Cada argumento puede ser cualquier tipo numérico (incluido complejo). Si se omite imag, por defecto es cero y el constructor sirve como conversión numérica como int y float. Si se omiten ambos argumentos, devuelve 0j.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada complex() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#complex">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Devuelve un número complejo con el valor real + imag*1j o convierte una cadena o un número a un número complejo. [...] Cada argumento puede ser cualquier tipo numérico (incluido complejo). Si se omite imag, por defecto es cero y el constructor sirve como una conversión numérica como <router-link to="/builtin/int">`int()`</router-link> y <router-link to="/builtin/float">`float()`</router-link>. Si se omiten ambos argumentos, devuelve 0j.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `complex()` crea un número complejo. Puede tomar una parte real y una parte imaginaria como argumentos. Si solo se proporciona un argumento, se considera la parte real y la parte imaginaria es cero.

## Ejemplos

```python
# Crear un número complejo con partes real e imaginaria
print(complex(3, 4))

# Crear un número complejo con solo una parte real
print(complex(5))

# Crear un número complejo a partir de una cadena
print(complex("2+3j"))
```

```output
(3+4j)
(5+0j)
(2+3j)
```

## Enlaces relevantes

- <router-link to="/blog/python-data-types">Blog: Tipos de datos de Python</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/float">float()</router-link>
- <router-link to="/builtin/abs">abs()</router-link>
- <router-link to="/builtin/pow">pow()</router-link>
