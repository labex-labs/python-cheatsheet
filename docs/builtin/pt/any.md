---
title: 'Função Embutida any() do Python - Folha de Dicas Python'
description: 'Retorna Verdadeiro se qualquer elemento do iterável for verdadeiro. Se o iterável estiver vazio, retorna Falso.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in any() do Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#any">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Retorna True se qualquer elemento do iterável for verdadeiro. Se o iterável estiver vazio, retorna False.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `any()` em Python é uma função built-in que verifica se pelo menos um elemento em um iterável é `True`. Ela retorna `True` se qualquer elemento for avaliado como verdadeiro e `False` se o iterável estiver vazio ou todos os elementos forem falsos. Isso é útil para determinar rapidamente se uma condição é atendida por qualquer item em uma coleção.

## Exemplos

```python
# Todos os valores são falsos
any([0, '', False])

# Contém um valor verdadeiro (2)
any([0, 2, False])

# Um iterável vazio é considerado False
any([])
```

```output
False
True
False
```

## Links relevantes

- <router-link to="/cheatsheet/control-flow">Cheatsheet: Fluxo de Controle</router-link>
- <router-link to="/cheatsheet/comprehensions">Cheatsheet: Compreensões</router-link>
- <router-link to="/blog/python-data-types">Blog: Tipos de Dados Python</router-link>
- <router-link to="/builtin/all">all()</router-link>
- <router-link to="/builtin/bool">bool()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
