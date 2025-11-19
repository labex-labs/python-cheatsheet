---
title: 'Função nativa bin() do Python - Guia Rápido Python'
description: 'Converte um número inteiro para uma string binária prefixada com “0b”. O resultado é uma expressão Python válida. Se x não for um objeto int do Python, ele deve definir um método __index__() que retorna um inteiro.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in bin() do Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#bin">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Converte um número inteiro para uma string binária prefixada com “0b”. O resultado é uma expressão Python válida. Se x não for um objeto Python int, ele deve definir um método <code>__index__()</code> que retorna um inteiro.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `bin()` converte um número inteiro para sua representação binária. A string resultante é prefixada com "0b" para indicar que é um número binário.

### Exemplos

Aqui estão alguns exemplos de como usar `bin()`:

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

## Links relevantes

- <router-link to="/blog/python-data-types">Blog: Tipos de Dados Python</router-link>
- <router-link to="/cheatsheet/string-formatting">Cheatsheet: Formatação de Strings</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/hex">hex()</router-link>
- <router-link to="/builtin/oct">oct()</router-link>
- <router-link to="/builtin/format">format()</router-link>
