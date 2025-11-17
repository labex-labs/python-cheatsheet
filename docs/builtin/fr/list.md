---
title: 'Fonction intégrée list() en Python - Fiche mémo Python'
description: "Plutôt qu'une fonction, list est en réalité un type de séquence mutable, comme documenté dans Listes et types de séquences — list, tuple, range."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
La fonction intégrée Python list()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Tiré de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#list">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Plutôt que d'être une fonction, list est en fait un type de séquence mutable, comme documenté dans Listes et types de séquences — <router-link to="/builtin/list">list</router-link>, <router-link to="/builtin/tuple">tuple</router-link>, <router-link to="/builtin/range">range</router-link>.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

En Python, `list` n'est pas une fonction mais un type de séquence mutable intégré. Cela signifie que c'est une structure de données qui peut contenir une collection ordonnée d'éléments, et vous pouvez modifier son contenu. Vous pouvez créer une liste en utilisant des crochets `[]` ou le constructeur `list()`.

## Examples

```python
l = list()
print(l)
l.append(1)
l.append(2)
print(l)
```

Output:

```plaintext
[]
[1, 2]
```

## Relevant links

- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet : Listes et Tuples</router-link>
- <router-link to="/cheatsheet/comprehensions">Cheatsheet : Compréhensions</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">Blog : Compréhensions Python Étape par Étape</router-link>
- <router-link to="/blog/python-data-types">Blog : Types de Données Python</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/len">len()</router-link>
