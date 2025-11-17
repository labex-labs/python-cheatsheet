---
title: 'Função nativa pow() em Python - Guia Rápido Python'
description: 'A função pow() retorna a potência de um número.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in pow() do Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#pow">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
      A função pow() retorna a potência de um número. Ela aceita dois ou três argumentos:
      pow(base, exp): Retorna base elevado à potência de exp (base ** exp).
      pow(base, exp, mod): Retorna (base ** exp) % mod (para aritmética modular).
      O resultado é computado de forma mais eficiente do que base ** exp % mod, se o argumento mod estiver presente.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `pow()` é usada para exponenciação. Ela pode aceitar dois ou três argumentos.

- `pow(base, exp)`: Isto é equivalente a `base ** exp`.
- `pow(base, exp, mod)`: Isto é equivalente a `(base ** exp) % mod`, mas é mais eficiente. Isto é útil para aritmética modular.

### Exemplos

```python
# Usando dois argumentos (base ** exp)
print(pow(2, 3))
print(pow(3, 2))
print(pow(2, -3))  # equivalente a 1 / (2**3)

# Usando três argumentos ((base ** exp) % mod)
print(pow(3, 2, 4))  # já que 3**2 é 9, e 9 % 4 é 1
print(pow(2, 3, 5))  # já que 2**3 é 8, e 8 % 5 é 3
```

Saída:

```plaintext
8
9
0.125
1
3
```

## Links relevantes

- <router-link to="/blog/python-data-types">Blog: Tipos de Dados Python</router-link>
- <router-link to="/builtin/divmod">divmod()</router-link>
- <router-link to="/builtin/abs">abs()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/float">float()</router-link>
