---
title: 'Função nativa hex() do Python - Folha de Dicas Python'
description: 'Converte um número inteiro para uma string hexadecimal em minúsculas prefixada com “0x”. Se x não for um objeto int do Python, ele deve definir um método __index__() que retorna um inteiro.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in hex() do Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#hex">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Converte um número inteiro para uma string hexadecimal em minúsculas prefixada com “0x”. Se x não for um objeto Python int, ele deve definir um método __index__() que retorna um inteiro.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `hex()` em Python é uma função built-in que converte um número inteiro em sua representação hexadecimal correspondente. A string resultante é prefixada com "0x" para indicar que é um valor hexadecimal. Esta função é útil quando você precisa trabalhar com números hexadecimais, que são comuns em programação de baixo nível, como ao lidar com endereços de memória ou códigos de cores.

## Exemplos

```python
hex(1)
hex(10)
hex(100)
hex(1000)
```

Saída:

```plaintext
'0x1'
'0xa'
'0x64'
'0x3e8'
```

## Links Relevantes

- <router-link :to="'/builtin/bin'">bin()</router-link>
- <router-link :to="'/builtin/int'">int()</router-link>
- <router-link :to="'/builtin/oct'">oct()</router-link>
- <router-link :to="'/cheatsheet/string-formatting'">Formatação de Strings</router-link>
- <router-link :to="'/blog/python-data-types'">Tipos de Dados Python</router-link>
- <router-link :to="'/builtin/format'">format()</router-link>
