---
title: 'Função Embutida float() do Python - Folha de Dicas Python'
description: 'Retorna um número de ponto flutuante construído a partir de um número ou string x.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in float() do Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#float">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retorna um número de ponto flutuante construído a partir de um número ou string x.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `float()` em Python é uma função built-in que permite converter um número ou uma string contendo um número em um número de ponto flutuante. Isso é particularmente útil quando você precisa realizar operações aritméticas que exigem precisão decimal.

A função <router-link to="/builtin/float">float()</router-link> retorna um número de ponto flutuante a partir de um número ou uma string.

## Exemplos

```python
float('10')
float(10)
```

Saída:

```plaintext
10.0
10.0
```

## Links relevantes

- <router-link :to="'/builtin/int/'">int()</router-link>
- <router-link :to="'/builtin/complex/'">complex()</router-link>
- <router-link :to="'/blog/python-data-types/'">Tipos de Dados Python</router-link>
- <router-link :to="'/builtin/str'">str()</router-link>
- <router-link :to="'/builtin/round'">round()</router-link>
- <router-link :to="'/cheatsheet/string-formatting'">Formatação de Strings</router-link>
