---
title: 'Fonction intégrée tuple() en Python - Aide-mémoire Python'
description: "Plutôt qu'une fonction, tuple est en réalité un type de séquence immuable, comme documenté dans Tuples et types de séquences — list, tuple, range."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
La fonction intégrée Python tuple()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Tiré de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#tuple">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Plutôt que d'être une fonction, tuple est en fait un type de séquence immuable, comme documenté dans Tuples and Sequence Types — list, tuple, range.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Bien que `tuple` soit techniquement un type, il peut être utilisé comme une fonction pour créer des tuples. Les tuples sont des séquences immuables, ce qui signifie qu'elles ne peuvent pas être modifiées après leur création.

Le constructeur `tuple()` peut être utilisé pour créer un tuple vide ou pour convertir un itérable (comme une liste) en un tuple.

### Examples

**Créer un tuple vide :**

```python
empty_tuple = tuple()
print(empty_tuple)
```

Output:

```plaintext
()
```

**Créer un tuple à partir d'une liste :**

```python
my_list = [1, 2, 3]
my_tuple = tuple(my_list)
print(my_tuple)
```

Output:

```plaintext
(1, 2, 3)
```

## Relevant links

- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet : Listes et Tuples</router-link>
- <router-link to="/cheatsheet/args-and-kwargs">Cheatsheet : \*args et \*\*kwargs</router-link>
- <router-link to="/blog/python-data-types">Blog : Types de données Python</router-link>
- <router-link to="/blog/python-easy-args-kwargs">Blog : \*args et \*\*kwargs expliqués</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/sorted">sorted()</router-link>
- <router-link to="/builtin/reversed">reversed()</router-link>
- <router-link to="/builtin/enumerate">enumerate()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
