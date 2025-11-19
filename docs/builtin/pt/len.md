---
title: 'Função Embutida len() do Python - Folha de Dicas Python'
description: 'Retorna o comprimento (o número de itens) de um objeto. O argumento pode ser uma sequência (como string, bytes, tupla, lista ou range) ou uma coleção (como dicionário, conjunto ou frozenset).'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in Python len()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#len">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retorna o comprimento (o número de itens) de um objeto. O argumento pode ser uma sequência (como uma string, bytes, <router-link to="/builtin/tuple">tuple</router-link>, <router-link to="/builtin/list">list</router-link>, ou <router-link to="/builtin/range">range</router-link>) ou uma coleção (como um <router-link to="/builtin/dict">dictionary</router-link>, <router-link to="/builtin/set">set</router-link>, ou <router-link to="/builtin/frozenset">frozen set</router-link>).
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `len()` em Python é uma função built-in que retorna o número de itens (comprimento) em um objeto. O objeto pode ser uma sequência (como uma string, lista, tupla) ou uma coleção (como um dicionário ou conjunto).

## Exemplo

Retorna o número de itens de um objeto:

```python
len('hello')
len(['cat', 3, 'dog'])
```

```output
5
3
```

## Teste de vazio

<base-warning>
  <base-warning-title>Teste de vazio</base-warning-title>
    <base-warning-content>
      O teste de vazio de strings, listas, dicionários, etc., não deve usar
    <code>len</code>, mas sim preferir a avaliação booleana direta.
  </base-warning-content>
</base-warning>

```python
a = [1, 2, 3]

# ruim
if len(a) > 0:  # avalia para True
    print("a lista não está vazia!")

# bom
if a:  # avalia para True
    print("a lista não está vazia!")
```

```output
a lista não está vazia!
a lista não está vazia!
```

## Links relevantes

- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: Listas e Tuplas</router-link>
- <router-link to="/cheatsheet/dictionaries">Cheatsheet: Dicionários</router-link>
- <router-link to="/cheatsheet/sets">Cheatsheet: Conjuntos</router-link>
- <router-link to="/blog/python-data-types">Blog: Tipos de Dados Python</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/set">set()</router-link>
