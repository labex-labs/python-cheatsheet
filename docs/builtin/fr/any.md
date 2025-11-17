---
title: 'Fonction intégrée any() de Python - Aide-mémoire Python'
description: "Retourne True si au moins un élément de l'itérable est vrai. Retourne False si l'itérable est vide."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée any() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Tiré de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#any">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Retourne True si au moins un élément de l'itérable est vrai. Si l'itérable est vide, retourne False.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `any()` en Python est une fonction intégrée qui vérifie si au moins un élément dans un itérable est `True`. Elle retourne `True` si n'importe quel élément est évalué comme vrai, et `False` si l'itérable est vide ou si tous les éléments sont faux. Ceci est utile pour déterminer rapidement si une condition est satisfaite par n'importe quel élément d'une collection.

## Examples

```python
# All values are falsy
any([0, '', False])

# Contains one truthy value (2)
any([0, 2, False])

# An empty iterable is considered False
any([])
```

Output:

```plaintext
False
True
False
```

## Relevant links

- <router-link to="/cheatsheet/control-flow">Cheatsheet : Flux de contrôle</router-link>
- <router-link to="/cheatsheet/comprehensions">Cheatsheet : Compréhensions</router-link>
- <router-link to="/blog/python-data-types">Blog : Types de données Python</router-link>
- <router-link to="/builtin/all">all()</router-link>
- <router-link to="/builtin/bool">bool()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
