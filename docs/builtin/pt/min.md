---
title: 'Função Embutida Python min() - Folha de Dicas Python'
description: 'Retorna o menor item em um iterável ou o menor de dois ou mais argumentos.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in min() do Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#min">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retorna o menor item em um iterável ou o menor de dois ou mais argumentos.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `min()` é o oposto de <router-link to="/builtin/max">max()</router-link>. Ela pode ser usada de duas maneiras:

1. Com um iterável (como uma <router-link to="/builtin/list">list</router-link> ou <router-link to="/builtin/tuple">tuple</router-link>), ela retorna o menor item.
2. Com dois ou mais argumentos, ela retorna o menor entre eles.

### Exemplos

**Encontrando o mínimo em um iterável:**

```python
numbers = [10, 2, 1, 40, 5]
print(min(numbers))

letters = ('z', 'b', 'a')
print(min(letters))
```

```output
1
a
```

**Encontrando o mínimo de vários argumentos:**

```python
print(min(10, 20, 5))
```

```output
5
```

## Links relevantes

- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: Listas e Tuplas</router-link>
- <router-link to="/builtin/max">max()</router-link>
- <router-link to="/builtin/sorted">sorted()</router-link>
- <router-link to="/builtin/sum">sum()</router-link>
