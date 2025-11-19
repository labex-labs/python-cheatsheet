---
title: 'Fonction intégrée Python frozenset() - Aide-mémoire Python'
description: "Retourne un nouvel objet frozenset, éventuellement avec des éléments tirés d'un itérable. frozenset est une classe intégrée. Consultez frozenset et Types d'ensembles — set, frozenset pour la documentation sur cette classe."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
La fonction intégrée Python frozenset()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    À partir de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#frozenset">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retourne un nouvel objet frozenset, éventuellement avec des éléments tirés d'un itérable. <router-link to="/builtin/frozenset">frozenset</router-link> est une classe intégrée. Consultez <router-link to="/builtin/frozenset">frozenset</router-link> et Set Types — <router-link to="/builtin/set">set</router-link>, <router-link to="/builtin/frozenset">frozenset</router-link> pour la documentation concernant cette classe.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `frozenset()` en Python est une fonction intégrée qui crée un ensemble immuable et hachable à partir d'un itérable. Contrairement à un `set` régulier, un `frozenset` ne peut pas être modifié après sa création, ce qui signifie que vous ne pouvez pas ajouter ou supprimer d'éléments. Cette immuabilité le rend approprié pour être utilisé comme clé de dictionnaire ou comme élément dans un autre ensemble.

## Examples

```python
frozenset([1, 2, 3])
frozenset({1, 2, 3})
frozenset((1, 2, 3))
```

```output
frozenset({1, 2, 3})
frozenset({1, 2, 3})
frozenset({1, 2, 3})
```

## Relevant links

- <router-link :to="'/builtin/set'">`set()`</router-link>
- <router-link :to="'/cheatsheet/sets'">Sets</router-link>
- <router-link :to="'/blog/python-sets-what-why-how'">Python Sets: What, Why, and How</router-link>
- <router-link :to="'/builtin/tuple'">`tuple()`</router-link>
- <router-link :to="'/builtin/hash'">`hash()`</router-link>
