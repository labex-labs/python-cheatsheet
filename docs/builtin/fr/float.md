---
title: 'Fonction intégrée float() de Python - Aide-mémoire Python'
description: "Retourne un nombre à virgule flottante construit à partir d'un nombre ou d'une chaîne x."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée Python float()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Tiré de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#float">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retourne un nombre à virgule flottante construit à partir d'un nombre ou d'une chaîne de caractères x.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `float()` en Python est une fonction intégrée qui permet de convertir un nombre ou une chaîne de caractères contenant un nombre en un nombre à virgule flottante (float). Ceci est particulièrement utile lorsque vous avez besoin d'effectuer des opérations arithmétiques nécessitant une précision décimale.

La fonction <router-link to="/builtin/float">float()</router-link> retourne un nombre à virgule flottante construit à partir d'un nombre ou d'une chaîne de caractères.

## Examples

```python
float('10')
float(10)
```

```output
10.0
10.0
```

## Relevant links

- <router-link :to="'/builtin/int/'">int()</router-link>
- <router-link :to="'/builtin/complex/'">complex()</router-link>
- <router-link :to="'/blog/python-data-types/'">Types de données Python</router-link>
- <router-link :to="'/builtin/str'">str()</router-link>
- <router-link :to="'/builtin/round'">round()</router-link>
- <router-link :to="'/cheatsheet/string-formatting'">Formatage de chaînes</router-link>
