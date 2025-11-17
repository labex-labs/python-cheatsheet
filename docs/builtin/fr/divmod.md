---
title: 'Fonction intégrée divmod() en Python - Aide-mémoire Python'
description: "Prend deux nombres (non complexes) en arguments et retourne une paire de nombres comprenant leur quotient et leur reste lors de la division entière. Avec des types d'opérandes mixtes, les règles des opérateurs arithmétiques binaires s'appliquent."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
La fonction intégrée Python divmod()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Extrait de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#divmod">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Prend deux nombres (non complexes) comme arguments et retourne une paire de nombres constituée de leur quotient et de leur reste lors de la division entière. Avec des types d'opérandes mixtes, les règles des opérateurs arithmétiques binaires s'appliquent.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `divmod()` prend deux nombres comme arguments et retourne un tuple contenant le quotient et le reste de leur division entière. C'est une manière pratique d'obtenir les deux résultats en un seul appel.

### Exemples

```python
# Get quotient and remainder
quotient, remainder = divmod(10, 3)
print(quotient)
print(remainder)
print(divmod(2, 2))
print(divmod(10, 2))
print(divmod(7, 2))
```

Sortie :

```plaintext
3
1
(1, 0)
(5, 0)
(3, 1)
```

## Liens pertinents

- <router-link :to="'/cheatsheet/lists-and-tuples'">Listes et Tuples</router-link>
- <router-link :to="'/blog/python-data-types'">Types de données Python</router-link>
- <router-link :to="'/builtin/int'">`int()`</router-link>
- <router-link :to="'/builtin/float'">`float()`</router-link>
- <router-link :to="'/builtin/tuple'">`tuple()`</router-link>
