---
title: 'Fonction intégrée hash() de Python - Aide-mémoire Python'
description: "Retourne la valeur de hachage de l'objet (s'il en a une). Les valeurs de hachage sont des entiers. Elles sont utilisées pour comparer rapidement les clés de dictionnaire lors d'une recherche. Les valeurs numériques égales ont la même valeur de hachage (même si elles sont de types différents, comme 1 et 1.0)."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
La fonction intégrée Python hash()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Extrait de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#hash">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retourne la valeur de hachage de l'objet (s'il en a une). Les valeurs de hachage sont des entiers. Elles sont utilisées pour comparer rapidement les clés de dictionnaire lors d'une recherche dans un dictionnaire. Les valeurs numériques qui se comparent de manière égale ont la même valeur de hachage (même si elles sont de types différents, comme c'est le cas pour 1 et 1.0).
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `hash()` retourne un entier représentant la valeur de hachage d'un objet. Ceci est principalement utilisé par les dictionnaires pour rechercher rapidement des clés.

Seuls les objets "hashables" (pouvant être hachés) peuvent être passés à `hash()`. Un objet est hashable si sa valeur de hachage ne change jamais pendant son cycle de vie. Tous les types immuables intégrés de Python (comme les chaînes de caractères, les nombres et les tuples) sont hashables, tandis que les conteneurs mutables (comme les listes et les dictionnaires) ne le sont pas.

### Exemples

```python
# Le hachage d'un entier est l'entier lui-même
print(hash(1))
print(hash(1.0))  # 1 et 1.0 sont égaux

# Hachage d'une chaîne (le résultat varie)
print(hash('hello'))

# Hachage d'un tuple (le résultat varie)
print(hash((1, 2, 3)))

# Tenter de hacher une liste lèvera une TypeError
try:
    hash([1, 2, 3])
except TypeError as e:
    print(e)
```

```output
1
1
-1182655621190490452
529344067295497451
unhashable type: 'list'
```

## Liens pertinents

- <router-link :to="'/cheatsheet/dictionaries'">Dictionnaires</router-link>
- <router-link :to="'/builtin/id'">id()</router-link>
- <router-link :to="'/cheatsheet/sets'">Ensembles (Sets)</router-link>
- <router-link :to="'/blog/python-sets-what-why-how'">Ensembles Python : Quoi, Pourquoi et Comment</router-link>
- <router-link :to="'/builtin/frozenset'">frozenset()</router-link>
- <router-link :to="'/builtin/object'">object()</router-link>
