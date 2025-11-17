---
title: 'Fonction intégrée sum() de Python - Aide-mémoire Python'
description: "Additionne la valeur de départ et les éléments d'un itérable de gauche à droite et retourne le total. Les éléments de l'itérable sont normalement des nombres, et la valeur de départ ne peut pas être une chaîne de caractères."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée Python sum()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Extrait de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#func-sum">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    La somme commence par la valeur de départ et les éléments d'un itérable de gauche à droite et retourne le total. Les éléments de l'itérable sont normalement des nombres, et la valeur de départ ne peut pas être une chaîne de caractères.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `sum()` calcule la somme de tous les éléments d'un itérable (comme une liste ou un tuple). Vous pouvez également fournir une valeur `start` optionnelle, qui est ajoutée au total.

### Exemples

**Somme d'une liste de nombres :**

```python
numbers = [1, 2, 3, 4, 5]
print(sum(numbers))
```

Sortie :

```plaintext
15
```

**Somme avec une valeur de départ :**

```python
numbers = [1, 2, 3]
print(sum(numbers, 10))  # 10 + 1 + 2 + 3
```

Sortie :

```plaintext
16
```

## Liens pertinents

- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet : Listes et Tuples</router-link>
- <router-link to="/cheatsheet/comprehensions">Cheatsheet : Compréhensions</router-link>
- <router-link to="/blog/python-data-types">Blog : Types de données Python</router-link>
- <router-link to="/modules/itertools-module">Module : itertools</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/min">min()</router-link>
- <router-link to="/builtin/max">max()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/float">float()</router-link>
