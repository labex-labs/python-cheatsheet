---
title: 'Função Integrada ord() do Python - Folha de Dicas Python'
description: 'Dada uma string que representa um caractere Unicode, retorna um inteiro que representa o ponto de código Unicode desse caractere.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in ord() do Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#ord">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Dada uma string que representa um único caractere Unicode, retorna um inteiro que representa o ponto de código Unicode desse caractere.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `ord()` é o inverso de <router-link to="/builtin/chr">chr()</router-link>. Ela recebe uma string de caractere único e retorna seu ponto de código Unicode, que é um inteiro.

### Exemplos

```python
# Obter o ponto de código Unicode de um caractere
print(ord('A'))
print(ord('€'))
print(ord('1'))
print(ord('a'))
```

Saída:

```plaintext
65
8364
49
97
```

## Links relevantes

- <router-link to="/cheatsheet/manipulating-strings">Cheatsheet: Manipulando Strings</router-link>
- <router-link to="/blog/python-data-types">Blog: Tipos de Dados do Python</router-link>
- <router-link to="/builtin/chr">chr()</router-link>
- <router-link to="/builtin/ascii">ascii()</router-link>
