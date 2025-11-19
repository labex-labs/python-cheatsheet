---
title: 'Fonction intégrée len() en Python - Aide-mémoire Python'
description: "Retourne la longueur (le nombre d'éléments) d'un objet. L'argument peut être une séquence (chaîne, octets, tuple, liste, plage) ou une collection (dictionnaire, ensemble, ensemble figé)."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée Python len()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    À partir de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#len">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retourne la longueur (le nombre d'éléments) d'un objet. L'argument peut être une séquence (telle qu'une chaîne de caractères, des octets, un <router-link to="/builtin/tuple">tuple</router-link>, une <router-link to="/builtin/list">liste</router-link> ou une <router-link to="/builtin/range">plage</router-link>) ou une collection (telle qu'un <router-link to="/builtin/dict">dictionnaire</router-link>, un <router-link to="/builtin/set">ensemble</router-link> ou un <router-link to="/builtin/frozenset">ensemble figé</router-link>).
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `len()` en Python est une fonction intégrée qui retourne le nombre d'éléments (la longueur) d'un objet. L'objet peut être une séquence (comme une chaîne de caractères, une liste, un tuple) ou une collection (comme un dictionnaire ou un ensemble).

## Example

Retourne le nombre d'éléments d'un objet :

```python
len('hello')
len(['cat', 3, 'dog'])
```

```output
5
3
```

## Test d'inégalité (d'être vide)

<base-warning>
  <base-warning-title>Test d'inégalité</base-warning-title>
    <base-warning-content>
      Le test d'inégalité des chaînes de caractères, des listes, des dictionnaires, etc. (pour vérifier si elles sont vides) ne devrait pas utiliser
    <code>len</code>, mais préférer l'évaluation booléenne directe.
  </base-warning-content>
</base-warning>

```python
a = [1, 2, 3]

# mauvais
if len(a) > 0:  # évalue à True
    print("la liste n'est pas vide!")

# bon
if a:  # évalue à True
    print("la liste n'est pas vide!")
```

```output
la liste n'est pas vide!
la liste n'est pas vide!
```

## Liens pertinents

- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet : Listes et Tuples</router-link>
- <router-link to="/cheatsheet/dictionaries">Cheatsheet : Dictionnaires</router-link>
- <router-link to="/cheatsheet/sets">Cheatsheet : Ensembles</router-link>
- <router-link to="/blog/python-data-types">Blog : Types de données Python</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/set">set()</router-link>
