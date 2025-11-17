---
title: 'Fonction intégrée Python set() - Aide-mémoire Python'
description: "Retourne un nouvel objet set, éventuellement avec des éléments tirés d'un itérable. set est une classe intégrée. Consultez set et Types d'ensembles — set, frozenset pour la documentation sur cette classe."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée Python set()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Tiré de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#set">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retourne un nouvel objet set, éventuellement avec des éléments tirés d'un itérable. set est une classe intégrée. Consultez <router-link to="/cheatsheet/sets">set</router-link> et Set Types — set, frozenset pour la documentation concernant cette classe.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Le constructeur `set()` crée un nouvel ensemble (set). Un ensemble est une collection non ordonnée d'éléments uniques. Vous pouvez créer un ensemble vide ou créer un ensemble à partir d'un itérable.

### Examples

**Créer un ensemble vide :**

```python
my_set = set()
print(my_set)
```

Output:

```plaintext
set()
```

**Créer un ensemble à partir d'une liste (les doublons sont supprimés) :**

```python
my_list = [1, 2, 2, 3, 3, 3]
my_set = set(my_list)
print(my_set)
```

Output:

```plaintext
{1, 2, 3}
```

## Liens pertinents

- <router-link to="/cheatsheet/sets">Cheatsheet : Ensembles (Sets)</router-link>
- <router-link to="/cheatsheet/comprehensions">Cheatsheet : Compréhensions</router-link>
- <router-link to="/blog/python-sets-what-why-how">Blog : Python Sets - Quoi, Pourquoi, Comment</router-link>
- <router-link to="/blog/python-data-types">Blog : Types de données Python</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/frozenset">frozenset()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
