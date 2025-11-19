---
title: 'Fonction intégrée ord() de Python - Aide-mémoire Python'
description: 'Étant donné une chaîne représentant un caractère Unicode, retourne un entier représentant le point de code Unicode de ce caractère.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée Python ord()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Tiré de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#ord">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Étant donné une chaîne représentant un seul caractère Unicode, retourne un entier représentant le point de code Unicode de ce caractère.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `ord()` est l'inverse de <router-link to="/builtin/chr">chr()</router-link>. Elle prend une chaîne d'un seul caractère et retourne son point de code Unicode, qui est un entier.

### Exemples

```python
# Obtenir le point de code Unicode d'un caractère
print(ord('A'))
print(ord('€'))
print(ord('1'))
print(ord('a'))
```

```output
65
8364
49
97
```

## Liens pertinents

- <router-link to="/cheatsheet/manipulating-strings">Cheatsheet : Manipulation des chaînes</router-link>
- <router-link to="/blog/python-data-types">Blog : Types de données Python</router-link>
- <router-link to="/builtin/chr">chr()</router-link>
- <router-link to="/builtin/ascii">ascii()</router-link>
