---
title: 'Função Embutida max() do Python - Folha de Dicas Python'
description: 'Retorna o maior item em um iterável ou o maior de dois ou mais argumentos.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in max() do Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#max">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retorna o maior item em um iterável ou o maior de dois ou mais argumentos.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `max()` pode ser usada de duas maneiras:

1. Com um iterável (como uma <router-link to="/builtin/list">lista</router-link> ou <router-link to="/builtin/tuple">tupla</router-link>), ela retorna o maior item.
2. Com dois ou mais argumentos, ela retorna o maior entre eles.

### Exemplos

**Encontrando o máximo em um iterável:**

```python
numbers = [1, 2, 10, 40, 5]
print(max(numbers))

letters = ('a', 'b', 'z')
print(max(letters))
```

Saída:

```plaintext
40
z
```

**Encontrando o máximo de vários argumentos:**

```python
print(max(10, 20, 5))
```

Saída:

```plaintext
20
```

## Links relevantes

- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: Listas e Tuplas</router-link>
- <router-link to="/builtin/min">min()</router-link>
- <router-link to="/builtin/sorted">sorted()</router-link>
- <router-link to="/builtin/sum">sum()</router-link>
