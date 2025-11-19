---
title: 'Função Embutida sorted() do Python - Guia Rápido Python'
description: 'Retorna uma nova lista ordenada a partir dos itens no iterável.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função embutida sorted() do Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#sorted">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retorna uma nova lista ordenada a partir dos itens no iterável.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `sorted()` retorna uma nova lista ordenada a partir dos itens em um iterável. Ela não modifica o iterável original.

Você também pode usar o parâmetro `reverse` para ordenar em ordem decrescente.

### Exemplos

**Ordenando uma lista de números:**

```python
numbers = [3, 1, 4, 1, 5, 9, 2, 6]
sorted_numbers = sorted(numbers)
print(sorted_numbers)
```

```output
[1, 1, 2, 3, 4, 5, 6, 9]
```

**Ordenando uma lista de strings:**

```python
words = ["banana", "apple", "cherry"]
sorted_words = sorted(words)
print(sorted_words)
```

```output
['apple', 'banana', 'cherry']
```

**Ordenando em ordem inversa:**

```python
numbers = [3, 1, 4, 1, 5, 9, 2, 6]
sorted_numbers_desc = sorted(numbers, reverse=True)
print(sorted_numbers_desc)
```

```output
[9, 6, 5, 4, 3, 2, 1, 1]
```

## Links relevantes

- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: Listas e Tuplas</router-link>
- <router-link to="/cheatsheet/dictionaries">Cheatsheet: Dicionários</router-link>
- <router-link to="/cheatsheet/functions">Cheatsheet: Funções (para o argumento key)</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/reversed">reversed()</router-link>
- <router-link to="/builtin/min">min()</router-link>
- <router-link to="/builtin/max">max()</router-link>
