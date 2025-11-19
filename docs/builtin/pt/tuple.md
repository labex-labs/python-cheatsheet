---
title: 'Função Embutida tuple() em Python - Guia Rápido Python'
description: 'Em vez de ser uma função, tuple é na verdade um tipo de sequência imutável, conforme documentado em Tuplas e Tipos de Sequência — list, tuple, range.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in tuple() do Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#tuple">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Em vez de ser uma função, tuple é na verdade um tipo de sequência imutável, conforme documentado em Tuples and Sequence Types — list, tuple, range.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

Embora `tuple` seja tecnicamente um tipo, ele pode ser usado como uma função para criar tuplas. Tuplas são sequências imutáveis, o que significa que não podem ser alteradas após serem criadas.

O construtor `tuple()` pode ser usado para criar uma tupla vazia ou para converter um iterável (como uma lista) em uma tupla.

### Exemplos

**Criar uma tupla vazia:**

```python
empty_tuple = tuple()
print(empty_tuple)
```

```output
()
```

**Criar uma tupla a partir de uma lista:**

```python
my_list = [1, 2, 3]
my_tuple = tuple(my_list)
print(my_tuple)
```

```output
(1, 2, 3)
```

## Links relevantes

- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: Listas e Tuplas</router-link>
- <router-link to="/cheatsheet/args-and-kwargs">Cheatsheet: \*args e \*\*kwargs</router-link>
- <router-link to="/blog/python-data-types">Blog: Tipos de Dados Python</router-link>
- <router-link to="/blog/python-easy-args-kwargs">Blog: \*args e \*\*kwargs Explicados</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/sorted">sorted()</router-link>
- <router-link to="/builtin/reversed">reversed()</router-link>
- <router-link to="/builtin/enumerate">enumerate()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
