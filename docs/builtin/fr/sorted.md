---
title: 'Fonction intégrée sorted() de Python - Aide-mémoire Python'
description: "Retourne une nouvelle liste triée à partir des éléments de l'itérable."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée Python sorted()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    À partir de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#sorted">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retourne une nouvelle liste triée à partir des éléments d'un itérable.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `sorted()` retourne une nouvelle liste triée à partir des éléments d'un itérable. Elle ne modifie pas l'itérable d'origine.

Vous pouvez également utiliser le paramètre `reverse` pour trier dans l'ordre décroissant.

### Exemples

**Tri d'une liste de nombres :**

```python
numbers = [3, 1, 4, 1, 5, 9, 2, 6]
sorted_numbers = sorted(numbers)
print(sorted_numbers)
```

```output
[1, 1, 2, 3, 4, 5, 6, 9]
```

**Tri d'une liste de chaînes de caractères :**

```python
words = ["banana", "apple", "cherry"]
sorted_words = sorted(words)
print(sorted_words)
```

```output
['apple', 'banana', 'cherry']
```

**Tri en ordre inverse :**

```python
numbers = [3, 1, 4, 1, 5, 9, 2, 6]
sorted_numbers_desc = sorted(numbers, reverse=True)
print(sorted_numbers_desc)
```

```output
[9, 6, 5, 4, 3, 2, 1, 1]
```

## Liens pertinents

- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet : Listes et Tuples</router-link>
- <router-link to="/cheatsheet/dictionaries">Cheatsheet : Dictionnaires</router-link>
- <router-link to="/cheatsheet/functions">Cheatsheet : Fonctions (pour l'argument key)</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/reversed">reversed()</router-link>
- <router-link to="/builtin/min">min()</router-link>
- <router-link to="/builtin/max">max()</router-link>
