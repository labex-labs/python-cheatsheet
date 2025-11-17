---
title: 'Función incorporada round() de Python - Hoja de trucos de Python'
description: 'Devuelve el número redondeado a la precisión de ndigits después del punto decimal. Si se omite ndigits o es None, devuelve el entero más cercano a su entrada.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada Python round()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#round">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Devuelve el número redondeado a la precisión de ndigits después del punto decimal. Si se omite ndigits o es None, devuelve el entero más cercano a su entrada.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `round()` redondea un número a un número especificado de decimales. Si no se especifica el número de decimales, redondea al entero más cercano.

Tenga en cuenta que `round()` utiliza "redondear la mitad al par" para los números que terminan en .5, lo que significa que redondeará al entero par más cercano.

### Ejemplos

```python
# Redondear al entero más cercano
print(round(3.14))
print(round(3.8))

# Redondear a un número especificado de decimales
print(round(3.14159, 2))

# "Redondear la mitad al par"
print(round(2.5))
print(round(3.5))
```

Salida:

```plaintext
3
4
3.14
2
4
```

## Enlaces relevantes

- <router-link to="/blog/python-data-types">Blog: Tipos de datos de Python</router-link>
- <router-link to="/cheatsheet/string-formatting">Hoja de trucos: Formato de cadenas</router-link>
- <router-link to="/builtin/format">format()</router-link>
- <router-link to="/builtin/abs">abs()</router-link>
- <router-link to="/builtin/float">float()</router-link>
- <router-link to="/builtin/int">int()</router-link>
