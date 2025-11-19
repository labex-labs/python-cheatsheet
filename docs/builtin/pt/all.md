---
title: 'Função Embutida all() do Python - Folha de Dicas Python'
description: 'Retorna Verdadeiro se todos os elementos do iterável forem verdadeiros (ou se o iterável estiver vazio).'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in all() do Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#all">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Retorna True se todos os elementos do iterável forem verdadeiros (ou se o iterável estiver vazio).
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `all()` em Python é uma função built-in que verifica se todos os elementos em um iterável são `True`. Ela retorna `True` se cada elemento for avaliado como verdadeiro, ou se o iterável estiver vazio. Isso é útil para validar condições em uma coleção de itens, como verificar se todos os números em uma lista são positivos ou se todos os campos obrigatórios em um formulário estão preenchidos.

## Exemplos

```python
# Todos os valores são truthy
all([1, 2, 3])

# Contém um valor falsy (0)
all([1, 0, 3])

# Contém um valor falsy (string vazia)
all(['a', '', 'c'])

# Um iterável vazio é considerado True
all([])
```

```output
True
False
False
True
```

## Links relevantes

- <router-link to="/cheatsheet/control-flow">Cheatsheet: Controle de Fluxo</router-link>
- <router-link to="/cheatsheet/comprehensions">Cheatsheet: Compreensões</router-link>
- <router-link to="/blog/python-data-types">Blog: Tipos de Dados Python</router-link>
- <router-link to="/builtin/any">any()</router-link>
- <router-link to="/builtin/bool">bool()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
