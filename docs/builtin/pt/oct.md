---
title: 'Função Integrada oct() do Python - Guia Rápido Python'
description: 'Converte um número inteiro para uma string octal prefixada com “0o”. O resultado é uma expressão Python válida. Se x não for um objeto int do Python, ele deve definir um método __index__() que retorna um inteiro.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in oct() do Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#oct">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Converte um número inteiro para uma string octal prefixada com “0o”. O resultado é uma expressão Python válida. Se x não for um objeto <router-link to="/builtin/int">int</router-link> do Python, ele deve definir um método __index__() que retorna um inteiro.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `oct()` converte um número inteiro para sua representação octal. A string resultante é prefixada com "0o" para indicar que é um número octal.

### Exemplos

Aqui estão alguns exemplos de como usar `oct()`:

```python
# Converter inteiros para octal
print(oct(8))
print(oct(10))
print(oct(100))
print(oct(1))
print(oct(1000))
```

Saída:

```plaintext
0o10
0o12
0o144
0o1
0o1750
```

## Links relevantes

- <router-link to="/blog/python-data-types">Blog: Tipos de Dados do Python</router-link>
- <router-link to="/cheatsheet/string-formatting">Cheatsheet: Formatação de Strings</router-link>
- <router-link to="/builtin/bin">bin()</router-link>
- <router-link to="/builtin/hex">hex()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/format">format()</router-link>
