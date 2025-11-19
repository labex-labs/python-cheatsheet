---
title: 'Função Embutida list() do Python - Guia Rápido Python'
description: 'Em vez de ser uma função, list é na verdade um tipo de sequência mutável, conforme documentado em Listas e Tipos de Sequência — list, tuple, range.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in list() do Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#list">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Em vez de ser uma função, list é na verdade um tipo de sequência mutável, conforme documentado em Listas e Tipos de Sequência — <router-link to="/builtin/list">list</router-link>, <router-link to="/builtin/tuple">tuple</router-link>, <router-link to="/builtin/range">range</router-link>.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

Em Python, `list` não é uma função, mas sim um tipo de sequência mutável built-in. Isso significa que é uma estrutura de dados que pode conter uma coleção ordenada de itens, e você pode alterar seu conteúdo. Você pode criar uma lista usando colchetes `[]` ou o construtor `list()`.

## Exemplos

```python
l = list()
print(l)
l.append(1)
l.append(2)
print(l)
```

```output
[]
[1, 2]
```

## Links Relevantes

- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: Listas e Tuplas</router-link>
- <router-link to="/cheatsheet/comprehensions">Cheatsheet: Comprehensions</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">Blog: Python Comprehensions Passo a Passo</router-link>
- <router-link to="/blog/python-data-types">Blog: Tipos de Dados Python</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/len">len()</router-link>
