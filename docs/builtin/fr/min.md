---
title: 'Fonction intégrée Python min() - Fiche mémo Python'
description: "Retourne l'élément le plus petit dans un itérable ou le plus petit de deux arguments ou plus."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée Python min()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Tiré de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#min">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retourne l'élément le plus petit dans un itérable ou le plus petit de deux arguments ou plus.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `min()` est le pendant de <router-link to="/builtin/max">max()</router-link>. Elle peut être utilisée de deux manières :

1. Avec un itérable (comme une <router-link to="/builtin/list">liste</router-link> ou un <router-link to="/builtin/tuple">tuple</router-link>), elle retourne l'élément le plus petit.
2. Avec deux arguments ou plus, elle retourne le plus petit d'entre eux.

### Exemples

**Trouver le minimum dans un itérable :**

```python
numbers = [10, 2, 1, 40, 5]
print(min(numbers))

letters = ('z', 'b', 'a')
print(min(letters))
```

Sortie :

```plaintext
1
a
```

**Trouver le minimum de plusieurs arguments :**

```python
print(min(10, 20, 5))
```

Sortie :

```plaintext
5
```

## Liens pertinents

- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet : Listes et Tuples</router-link>
- <router-link to="/builtin/max">max()</router-link>
- <router-link to="/builtin/sorted">sorted()</router-link>
- <router-link to="/builtin/sum">sum()</router-link>
