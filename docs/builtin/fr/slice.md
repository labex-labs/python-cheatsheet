---
title: 'Fonction intégrée slice() en Python - Aide-mémoire Python'
description: "Retourne un objet slice représentant l'ensemble des indices spécifiés par range(start, stop, step). Les arguments start et step sont None par défaut. Les objets slice possèdent des attributs de données lecture seule start, stop et step qui renvoient simplement les valeurs des arguments (ou leurs valeurs par défaut)."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée Python slice()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#slice">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retourne un objet slice représentant l'ensemble des indices spécifiés par range(start, stop, step). Les arguments start et step prennent la valeur None par défaut. Les objets slice possèdent des attributs de données lecture seule start, stop et step qui renvoient simplement les valeurs des arguments (ou leurs valeurs par défaut).
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `slice()` en Python retourne un objet slice qui peut être utilisé pour découper des séquences telles que des listes, des tuples ou des chaînes de caractères. Un objet slice représente un ensemble d'indices spécifiés par `start`, `stop` et `step`.

## Examples

```python
furniture = ['table', 'chair', 'rack', 'shelf']

print(furniture[0:4])
print(furniture[1:3])
print(furniture[0:-1])
print(furniture[:2])
print(furniture[1:])
print(furniture[:])
```

Output:

```plaintext
['table', 'chair', 'rack', 'shelf']
['chair', 'rack']
['table', 'chair', 'rack']
['table', 'chair']
['chair', 'rack', 'shelf']
['table', 'chair', 'rack', 'shelf']
```

Découper la liste complète effectuera une copie :

```python
spam = ['cat', 'bat', 'rat', 'elephant']
spam2 = spam[:]
print(spam2)

spam.append('dog')
print(spam)
print(spam2)
```

Output:

```plaintext
['cat', 'bat', 'rat', 'elephant']
['cat', 'bat', 'rat', 'elephant', 'dog']
['cat', 'bat', 'rat', 'elephant']
```

## Relevant links

- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet : Listes et Tuples</router-link>
- <router-link to="/cheatsheet/manipulating-strings">Cheatsheet : Manipulation de chaînes</router-link>
- <router-link to="/cheatsheet/comprehensions">Cheatsheet : Compréhensions</router-link>
- <router-link to="/modules/itertools-module">Module : itertools (islice)</router-link>
- <router-link to="/builtin/range">range()</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/reversed">reversed()</router-link>
- <router-link to="/builtin/sorted">sorted()</router-link>
- <router-link to="/builtin/enumerate">enumerate()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
- <router-link to="/builtin/map">map()</router-link>
- <router-link to="/builtin/filter">filter()</router-link>
