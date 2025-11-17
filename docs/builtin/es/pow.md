---
title: 'Función incorporada pow() de Python - Hoja de trucos de Python'
description: 'La función pow() devuelve la potencia de un número.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada pow() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#pow">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
      La función pow() devuelve la potencia de un número. Acepta dos o tres argumentos:
      pow(base, exp): Devuelve base elevado a la potencia de exp (base ** exp).
      pow(base, exp, mod): Devuelve (base ** exp) % mod (para aritmética modular).
      El resultado se calcula de manera más eficiente que base ** exp % mod, si está presente el argumento mod.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `pow()` se utiliza para la exponenciación. Puede tomar dos o tres argumentos.

- `pow(base, exp)`: Esto es equivalente a `base ** exp`.
- `pow(base, exp, mod)`: Esto es equivalente a `(base ** exp) % mod`, pero es más eficiente. Esto es útil para la aritmética modular.

### Ejemplos

```python
# Usando dos argumentos (base ** exp)
print(pow(2, 3))
print(pow(3, 2))
print(pow(2, -3))  # equivalente a 1 / (2**3)

# Usando tres argumentos ((base ** exp) % mod)
print(pow(3, 2, 4))  # ya que 3**2 es 9, y 9 % 4 es 1
print(pow(2, 3, 5))  # ya que 2**3 es 8, y 8 % 5 es 3
```

Salida:

```plaintext
8
9
0.125
1
3
```

## Enlaces relevantes

- <router-link to="/blog/python-data-types">Blog: Tipos de datos de Python</router-link>
- <router-link to="/builtin/divmod">divmod()</router-link>
- <router-link to="/builtin/abs">abs()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/float">float()</router-link>
