---
title: 'Função Embutida abs() do Python - Folha de Dicas Python'
description: 'Retorna o valor absoluto de um número. O argumento pode ser um inteiro, um ponto flutuante ou um objeto que implementa __abs__(). Se o argumento for um número complexo, sua magnitude é retornada.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in abs() do Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#abs">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Retorna o valor absoluto de um número. O argumento pode ser um inteiro, um número de ponto flutuante ou um objeto que implementa <code>__abs__()</code>. Se o argumento for um número complexo, sua magnitude é retornada.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `abs()` em Python é uma função built-in que retorna o valor absoluto de um número. Ela pode lidar com inteiros, números de ponto flutuante e até mesmo números complexos (retornando sua magnitude). Esta função é útil quando você precisa garantir que um valor seja positivo, independentemente do seu sinal original.

### Exemplos

```python
# Para inteiros
abs(-1)
abs(0)

# Para floats
abs(-3.14)

# Para números complexos (retorna a magnitude)
abs(3 + 4j)

# Para outros sistemas numéricos
abs(0x10)  # Hexadecimal
abs(0b10)  # Binário
abs(0o20)  # Octal
```

Saída:

```plaintext
1
0
3.14
5.0
16
2
16
```

## Links relevantes

- <router-link to="/blog/python-data-types">Blog: Tipos de Dados do Python</router-link>
- <router-link to="/builtin/pow">pow()</router-link>
- <router-link to="/builtin/round">round()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/float">float()</router-link>
- <router-link to="/builtin/complex">complex()</router-link>
