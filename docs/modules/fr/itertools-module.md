---
title: 'Module Python Itertools - Fiche Mémo Python'
description: "Le module itertools regroupe des outils conçus pour être rapides et économes en mémoire lors de la manipulation d'itérateurs (listes, dictionnaires, etc.)."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Module Python _itertools_
</base-title>

Le module _itertools_ est une collection d'outils destinés à être rapides et à utiliser la mémoire efficacement lors de la manipulation d'itérateurs (comme les <router-link to="/cheatsheet/lists-and-tuples">listes</router-link> ou les <router-link to="/cheatsheet/dictionaries">dictionnaires</router-link>).

<base-disclaimer>
  <base-disclaimer-title>
    À partir de la <a href="https://docs.python.org/3/library/itertools.html">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Le module standardise un ensemble de base d'outils rapides et économes en mémoire qui sont utiles en eux-mêmes ou en combinaison.
    Ensemble, ils forment une « algèbre d'itérateurs » permettant de construire des outils spécialisés de manière succincte et efficace en Python pur.
  </base-disclaimer-content>
</base-disclaimer>

Le module _itertools_ fait partie de la bibliothèque standard et doit être importé. Certains exemples utilisent également le module `operator`.

```python
import itertools
import operator
```

## accumulate()

Crée un itérateur qui renvoie les résultats d'une fonction.

```python
itertools.accumulate(iterable[, func])
```

Exemple :

```python
data = [1, 2, 3, 4, 5]
# Accumulation avec la fonction de multiplication
result = itertools.accumulate(data, operator.mul)
for each in result:
    print(each)
```

```output
1
2
6
24
120
```

L'opérateur `operator.mul` prend deux nombres et les multiplie :

```python
operator.mul(1, 2)
# 2

operator.mul(2, 3)
# 6

operator.mul(6, 4)
# 24

operator.mul(24, 5)
# 120
```

Passer une fonction est facultatif :

```python
data = [5, 2, 6, 4, 5, 9, 1]
# Accumulation sans fonction, par défaut c'est l'addition
result = itertools.accumulate(data)
for each in result:
    print(each)
```

```output
5
7
13
17
22
31
32
```

Si aucune fonction n'est désignée, les éléments sont additionnés :

```python
5
5 + 2 = 7
7 + 6 = 13
13 + 4 = 17
17 + 5 = 22
22 + 9 = 31
31 + 1 = 32
```

## combinations()

Prend un itérable et un entier $r$. Cela créera toutes les combinaisons uniques comportant $r$ éléments.

```python
itertools.combinations(iterable, r)
```

Exemple :

```python
shapes = ['circle', 'triangle', 'square',]
# Générer toutes les combinaisons de 2 éléments
result = itertools.combinations(shapes, 2)
for each in result:
    print(each)
```

```output
('circle', 'triangle')
('circle', 'square')
('triangle', 'square')
```

## combinations_with_replacement()

Tout comme `combinations()`, mais permet aux éléments individuels d'être répétés plus d'une fois.

```python
itertools.combinations_with_replacement(iterable, r)
```

Exemple :

```python
shapes = ['circle', 'triangle', 'square']
# Générer des combinaisons autorisant les éléments répétés
result = itertools.combinations_with_replacement(shapes, 2)
for each in result:
    print(each)
```

```output
('circle', 'circle')
('circle', 'triangle')
('circle', 'square')
('triangle', 'triangle')
('triangle', 'square')
('square', 'square')
```

## count()

Crée un itérateur qui renvoie des valeurs espacées de manière égale à partir du nombre `start`.

```python
itertools.count(start=0, step=1)
```

Exemple :

```python
# Compter à partir de 10, en incrémentant de 3
for i in itertools.count(10,3):
    print(i)
    if i > 20:
        break
```

```output
10
13
16
19
22
```

## cycle()

Cette fonction parcourt un itérable sans fin.

```python
itertools.cycle(iterable)
```

Exemple :

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet']
# Parcourir les couleurs à l'infini
for color in itertools.cycle(colors):
    print(color)
```

```output
red
orange
yellow
green
blue
violet
red
orange
```

Lorsqu'il atteint la fin de l'itérable, il recommence depuis le début.

## chain()

Prend une série d'itérables et les renvoie comme un seul long itérable.

```python
itertools.chain(*iterables)
```

Exemple :

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue']
shapes = ['circle', 'triangle', 'square', 'pentagon']
# Enchaîner plusieurs itérables en un seul
result = itertools.chain(colors, shapes)
for each in result:
    print(each)
```

```output
red
orange
yellow
green
blue
circle
triangle
square
pentagon
```

## compress()

Filtre un itérable avec un autre.

```python
itertools.compress(data, selectors)
```

Exemple :

```python
shapes = ['circle', 'triangle', 'square', 'pentagon']
selections = [True, False, True, False]
# Filtrer les formes en fonction des sélections booléennes
result = itertools.compress(shapes, selections)
for each in result:
    print(each)
```

```output
circle
square
```

## dropwhile()

Crée un itérateur qui supprime les éléments de l'itérable tant que le prédicat est vrai ; ensuite, il renvoie chaque élément.

```python
itertools.dropwhile(predicate, iterable)
```

Exemple :

```python
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]
# Supprimer les éléments tant que la condition est vraie, puis retourner tous les restants
result = itertools.dropwhile(lambda x: x<5, data)
for each in result:
    print(each)
```

```output
5
6
7
8
9
10
1
```

## filterfalse()

Crée un itérateur qui filtre les éléments de l'itérable en ne renvoyant que ceux pour lesquels le prédicat est Faux.

```python
itertools.filterfalse(predicate, iterable)
```

Exemple :

```python
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]
# Retourner les éléments où le prédicat est Faux
result = itertools.filterfalse(lambda x: x<5, data)
for each in result:
    print(each)
```

```output
5
6
7
8
9
10
```

## groupby()

En termes simples, cette fonction regroupe des éléments.

```python
itertools.groupby(iterable, key=None)
```

Exemple :

```python
robots = [
    {"name": "blaster", "faction": "autobot"},
    {"name": "galvatron", "faction": "decepticon"},
    {"name": "jazz", "faction": "autobot"},
    {"name": "metroplex", "faction": "autobot"},
    {"name": "megatron", "faction": "decepticon"},
    {"name": "starcream", "faction": "decepticon"},
]
# Grouper les robots par faction (l'itérable doit être trié pour un groupement correct)
for key, group in itertools.groupby(robots, key=lambda x: x['faction']):
    print(key)
    print(list(group))
```

```output
autobot
[{'name': 'blaster', 'faction': 'autobot'}]
decepticon
[{'name': 'galvatron', 'faction': 'decepticon'}]
autobot
[{'name': 'jazz', 'faction': 'autobot'}, {'name': 'metroplex', 'faction': 'autobot'}]
decepticon
[{'name': 'megatron', 'faction': 'decepticon'}, {'name': 'starcream', 'faction': 'decepticon'}]
```

## islice()

Cette fonction ressemble beaucoup aux tranches (`slices`). Elle permet de découper une partie d'un itérable.

```python
itertools.islice(iterable, start, stop[, step])
```

Exemple :

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue',]
# Trancher l'itérable pour obtenir les 2 premiers éléments
few_colors = itertools.islice(colors, 2)
for each in few_colors:
    print(each)
```

```output
red
orange
```

## permutations()

```python
itertools.permutations(iterable, r=None)
```

Exemple :

```python
alpha_data = ['a', 'b', 'c']
# Générer toutes les permutations des éléments
result = itertools.permutations(alpha_data)
for each in result:
    print(each)
```

```output
('a', 'b', 'c')
('a', 'c', 'b')
('b', 'a', 'c')
('b', 'c', 'a')
('c', 'a', 'b')
('c', 'b', 'a')
```

## product()

Crée les produits cartésiens à partir d'une série d'itérables.

```python
num_data = [1, 2, 3]
alpha_data = ['a', 'b', 'c']
# Générer le produit cartésien des itérables
result = itertools.product(num_data, alpha_data)
for each in result:
    print(each)
```

```output
(1, 'a')
(1, 'b')
(1, 'c')
(2, 'a')
(2, 'b')
(2, 'c')
(3, 'a')
(3, 'b')
(3, 'c')
```

## repeat()

Cette fonction répète un objet encore et encore. Sauf s'il y a un argument `times`.

```python
itertools.repeat(object[, times])
```

Exemple :

```python
# Répéter l'objet 3 fois
for i in itertools.repeat("spam", 3):
    print(i)
```

```output
spam
spam
spam
```

## starmap()

Crée un itérateur qui calcule la fonction en utilisant des arguments obtenus à partir de l'itérable.

```python
itertools.starmap(function, iterable)
```

Exemple :

```python
data = [(2, 6), (8, 4), (7, 3)]
# Appliquer la fonction aux arguments dépaquetés de chaque tuple
result = itertools.starmap(operator.mul, data)
for each in result:
    print(each)
```

```output
12
32
21
```

## takewhile()

L'opposé de `dropwhile()`. Crée un itérateur et renvoie les éléments de l'itérable tant que le prédicat est vrai.

```python
itertools.takewhile(predicate, iterable)
```

Exemple :

```python
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]
# Prendre les éléments tant que la condition est vraie, puis s'arrêter
result = itertools.takewhile(lambda x: x<5, data)
for each in result:
    print(each)
```

```output
1
2
3
4
```

## tee()

Retourne $n$ itérateurs indépendants à partir d'un seul itérable.

```python
itertools.tee(iterable, n=2)
```

Exemple :

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue']
# Diviser l'itérable en deux itérateurs indépendants
alpha_colors, beta_colors = itertools.tee(colors)
for each in alpha_colors:
    print(each)
```

```output
red
orange
yellow
green
blue
```

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue']
alpha_colors, beta_colors = itertools.tee(colors)
for each in beta_colors:
    print(each)
```

```output
red
orange
yellow
green
blue
```

## zip_longest()

Crée un itérateur qui agrège les éléments de chacun des itérables. Si les itérables ont des longueurs inégales, les valeurs manquantes sont remplies avec `fillvalue`. L'itération se poursuit jusqu'à ce que l'itérable le plus long soit épuisé.

```python
itertools.zip_longest(*iterables, fillvalue=None)
```

Exemple :

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue',]
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]
# Zipper les itérables, remplissant les valeurs manquantes avec None
for each in itertools.zip_longest(colors, data, fillvalue=None):
    print(each)
```

```output
('red', 1)
('orange', 2)
('yellow', 3)
('green', 4)
('blue', 5)
(None, 6)
(None, 7)
(None, 8)
(None, 9)
(None, 10)
```

## Liens pertinents

- <router-link to="/cheatsheet/control-flow">Cheatsheet : Flux de contrôle (boucles for)</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet : Listes et Tuples</router-link>
- <router-link to="/cheatsheet/comprehensions">Cheatsheet : Compréhensions</router-link>
- <router-link to="/cheatsheet/functions">Cheatsheet : Fonctions (Générateurs)</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">Blog : Compréhensions Python étape par étape</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
- <router-link to="/builtin/next">next()</router-link>
- <router-link to="/builtin/map">map()</router-link>
- <router-link to="/builtin/filter">filter()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
- <router-link to="/builtin/enumerate">enumerate()</router-link>
- <router-link to="/builtin/range">range()</router-link>
