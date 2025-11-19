---
title: 'Fonction intégrée Python all() - Aide-mémoire Python'
description: "Retourne True si tous les éléments de l'itérable sont vrais (ou si l'itérable est vide)."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée Python all()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Provenant de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#all">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Retourne True si tous les éléments de l'itérable sont vrais (ou si l'itérable est vide).
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `all()` en Python est une fonction intégrée qui vérifie si tous les éléments d'un itérable sont `True`. Elle retourne `True` si chaque élément est évalué comme vrai, ou si l'itérable est vide. Ceci est utile pour valider des conditions à travers une collection d'éléments, comme vérifier si tous les nombres d'une liste sont positifs ou si tous les champs requis d'un formulaire sont remplis.

## Examples

```python
# All values are truthy
all([1, 2, 3])

# Contains a falsy value (0)
all([1, 0, 3])

# Contains a falsy value (empty string)
all(['a', '', 'c'])

# An empty iterable is considered True
all([])
```

```output
True
False
False
True
```

## Relevant links

- <router-link to="/cheatsheet/control-flow">Cheatsheet : Flux de contrôle</router-link>
- <router-link to="/cheatsheet/comprehensions">Cheatsheet : Compréhensions</router-link>
- <router-link to="/blog/python-data-types">Blog : Types de données Python</router-link>
- <router-link to="/builtin/any">any()</router-link>
- <router-link to="/builtin/bool">bool()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
