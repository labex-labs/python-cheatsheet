---
title: 'Função Embutida sum() do Python - Folha de Dicas Python'
description: 'Soma o valor inicial e os itens de um iterável da esquerda para a direita e retorna o total. Os itens do iterável são normalmente números, e o valor inicial não pode ser uma string.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in sum() do Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#func-sum">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Soma o valor inicial e os itens de um iterável da esquerda para a direita e retorna o total. Os itens do iterável são normalmente números, e o valor inicial não pode ser uma string.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `sum()` calcula a soma de todos os itens em um iterável (como uma lista ou tupla). Você também pode fornecer um valor `start` opcional, que é adicionado ao total.

### Exemplos

**Somando uma lista de números:**

```python
numbers = [1, 2, 3, 4, 5]
print(sum(numbers))
```

```output
15
```

**Somando com um valor inicial:**

```python
numbers = [1, 2, 3]
print(sum(numbers, 10))  # 10 + 1 + 2 + 3
```

```output
16
```

## Links relevantes

- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: Listas e Tuplas</router-link>
- <router-link to="/cheatsheet/comprehensions">Cheatsheet: Comprehensions</router-link>
- <router-link to="/blog/python-data-types">Blog: Tipos de Dados do Python</router-link>
- <router-link to="/modules/itertools-module">Módulo: itertools</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/min">min()</router-link>
- <router-link to="/builtin/max">max()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/float">float()</router-link>
