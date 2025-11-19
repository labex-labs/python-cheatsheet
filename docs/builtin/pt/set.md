---
title: 'Função Embutida set() do Python - Folha de Dicas Python'
description: 'Retorna um novo objeto set, opcionalmente com elementos retirados de um iterável. set é uma classe embutida. Consulte set e Tipos de Conjunto — set, frozenset para documentação sobre esta classe.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in Python set()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#set">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retorna um novo objeto set, opcionalmente com elementos retirados de um iterável. set é uma classe built-in. Veja <router-link to="/cheatsheet/sets">set</router-link> e Set Types — set, frozenset para documentação sobre esta classe.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

O construtor `set()` cria um novo conjunto (set). Um conjunto é uma coleção não ordenada de elementos únicos. Você pode criar um conjunto vazio ou criar um conjunto a partir de um iterável.

### Exemplos

**Criar um conjunto vazio:**

```python
my_set = set()
print(my_set)
```

```output
set()
```

**Criar um conjunto a partir de uma lista (duplicatas são removidas):**

```python
my_list = [1, 2, 2, 3, 3, 3]
my_set = set(my_list)
print(my_set)
```

```output
{1, 2, 3}
```

## Links Relevantes

- <router-link to="/cheatsheet/sets">Cheatsheet: Sets</router-link>
- <router-link to="/cheatsheet/comprehensions">Cheatsheet: Comprehensions</router-link>
- <router-link to="/blog/python-sets-what-why-how">Blog: Python Sets - O Que, Por Que, Como</router-link>
- <router-link to="/blog/python-data-types">Blog: Tipos de Dados Python</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/frozenset">frozenset()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
