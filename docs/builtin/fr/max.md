---
title: 'Fonction intégrée Python max() - Aide-mémoire Python'
description: "Retourne l'élément le plus grand dans un itérable ou le plus grand de deux arguments ou plus."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée Python max()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Tiré de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#max">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retourne l'élément le plus grand dans un itérable ou le plus grand de deux arguments ou plus.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `max()` peut être utilisée de deux manières :

1. Avec un itérable (comme une <router-link to="/builtin/list">liste</router-link> ou un <router-link to="/builtin/tuple">tuple</router-link>), elle retourne l'élément le plus grand.
2. Avec deux arguments ou plus, elle retourne le plus grand d'entre eux.

### Exemples

**Trouver le maximum dans un itérable :**

```python
numbers = [1, 2, 10, 40, 5]
print(max(numbers))

letters = ('a', 'b', 'z')
print(max(letters))
```

Sortie :

```plaintext
40
z
```

**Trouver le maximum de plusieurs arguments :**

```python
print(max(10, 20, 5))
```

Sortie :

```plaintext
20
```

## Liens pertinents

- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet : Listes et Tuples</router-link>
- <router-link to="/builtin/min">min()</router-link>
- <router-link to="/builtin/sorted">sorted()</router-link>
- <router-link to="/builtin/sum">sum()</router-link>
