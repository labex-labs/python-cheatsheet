---
title: 'Função Integrada chr() do Python - Folha de Dicas Python'
description: "Retorna a string que representa um caractere cujo ponto de código Unicode é o inteiro i. Por exemplo, chr(97) retorna a string 'a', enquanto chr(8364) retorna a string '€'. Esta é a função inversa de ord()."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in chr() do Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#chr">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retorna a string que representa um caractere cujo ponto de código Unicode é o inteiro i. Por exemplo, chr(97) retorna a string 'a', enquanto chr(8364) retorna a string '€'. Este é o inverso de ord().
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `chr()` em Python é uma função built-in que aceita um inteiro como argumento e retorna uma string representando o caractere Unicode correspondente.

O inteiro passado para a função `chr()` deve estar no intervalo de 0 a 65535, que corresponde ao intervalo de caracteres Unicode válidos.

```python
print(chr(97))
print(chr(65))
print(chr(120))
```

```output
a
A
x
```

A função `chr()` é o inverso da função `ord()`, que aceita um único caractere como argumento e retorna o inteiro correspondente.

```python
print(ord('a'))
print(ord('A'))
print(ord('x'))
```

```output
97
65
120
```

A função `chr()` pode ser útil ao trabalhar com dados de texto e caracteres, particularmente ao trabalhar com caracteres Unicode. Por exemplo, você pode usá-la para converter um inteiro que representa um ponto de código Unicode para o caractere correspondente, ou para gerar uma string de caracteres a partir de um intervalo de inteiros.

## Links relevantes

- <router-link :to="'/builtin/ord'">ord()</router-link>
- <router-link :to="'/builtin/ascii'">ascii()</router-link>
- <router-link :to="'/cheatsheet/manipulating-strings'">Manipulação de Strings</router-link>
- <router-link :to="'/blog/python-data-types'">Tipos de Dados do Python</router-link>
