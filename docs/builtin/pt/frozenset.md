---
title: 'Função Embutida Python frozenset() - Guia Rápido Python'
description: 'Retorna um novo objeto frozenset, opcionalmente com elementos retirados de um iterável. frozenset é uma classe embutida. Consulte frozenset e Tipos de Conjunto — set, frozenset para documentação sobre esta classe.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in Python frozenset()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#frozenset">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retorna um novo objeto frozenset, opcionalmente com elementos retirados do iterável. <router-link to="/builtin/frozenset">frozenset</router-link> é uma classe built-in. Veja <router-link to="/builtin/frozenset">frozenset</router-link> e Tipos de Conjunto — <router-link to="/builtin/set">set</router-link>, <router-link to="/builtin/frozenset">frozenset</router-link> para documentação sobre esta classe.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `frozenset()` em Python é uma função built-in que cria um conjunto imutável e _hashable_ a partir de um iterável. Ao contrário de um `set` regular, um `frozenset` não pode ser modificado após sua criação, o que significa que você não pode adicionar ou remover elementos. Essa imutabilidade o torna adequado para uso como chave de dicionário ou como elemento em outro conjunto.

## Exemplos

```python
frozenset([1, 2, 3])
frozenset({1, 2, 3})
frozenset((1, 2, 3))
```

Saída:

```plaintext
frozenset({1, 2, 3})
frozenset({1, 2, 3})
frozenset({1, 2, 3})
```

## Links relevantes

- <router-link :to="'/builtin/set'">`set()`</router-link>
- <router-link :to="'/cheatsheet/sets'">Sets</router-link>
- <router-link :to="'/blog/python-sets-what-why-how'">Python Sets: O Quê, Porquê e Como</router-link>
- <router-link :to="'/builtin/tuple'">`tuple()`</router-link>
- <router-link :to="'/builtin/hash'">`hash()`</router-link>
