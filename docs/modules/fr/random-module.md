---
title: 'Module Python Random - Aide-mémoire Python'
description: 'Le module random est un module intégré permettant de générer des éléments aléatoires.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Module Python Random
</base-title>

Le module [random](https://docs.python.org/3/library/random.html) est un module intégré qui nous permet de générer des éléments aléatoires.

```python
import random
```

## seed()

La méthode `seed` est utilisée pour initialiser le générateur de nombres aléatoires.

```python
# Définir la graine pour des nombres aléatoires reproductibles
random.seed(1)
random.random()
```

```output
0.13436424411240122
```

Définir la graine sur un nombre retournera toujours le même nombre aléatoire :

```python
random.seed(1)
random.random()
```

```output
0.13436424411240122
```

```python
random.seed(1)
random.random()
```

```output
0.13436424411240122
```

```python
random.seed(1)
random.random()
```

```output
0.13436424411240122
```

```python
random.seed(1)
random.random()
```

```output
0.13436424411240122
```

```python
random.seed(1)
random.random()
```

```output
0.13436424411240122
```

La valeur par défaut de la méthode `seed` est l'_heure actuelle du système_, c'est pourquoi nous obtenons toujours un nombre différent :

```python
# Générer un nombre aléatoire sans définir de graine (utilise l'heure du système)
random.random()
```

```output
0.8474337369372327
```

```python
random.random()
```

```output
0.763774618976614
```

```python
random.random()
```

```output
0.2550690257394217
```

## randint()

```python
random.randint(start: int, stop: int)
```

Cette méthode retourne un nombre aléatoire entre les paramètres de début et de fin donnés :

```python
random.randint(1, 5)
```

```output
3
```

```python
random.randint(1, 5)
```

```output
2
```

```python
random.randint(1, 5)
```

```output
5
```

```python
random.randint(1, 5)
```

```output
1
```

```python
random.randint(1, 5)
```

```output
3
```

```python
random.randint(1, 5)
```

```output
1
```

## choice()

La méthode `choice` retourne un élément sélectionné aléatoirement à partir d'un itérable, comme une `list`, un `set` ou une `str` :

```python
random.choice([1, 2, 3, 4])
```

```output
1
```

```python
random.choice([1, 2, 3, 4])
```

```output
2
```

```python
random.choice([1, 2, 3, 4])
```

```output
4
```

```python
random.choice([1, 2, 3, 4])
```

```output
4
```

## shuffle()

La méthode `shuffle` prend un itérable et le mélange :

```python
my_list = [1, 2, 3, 4]

# Mélanger la liste sur place
random.shuffle(my_list)
my_list
```

```output
[1, 4, 3, 2]
```

```python
random.shuffle(my_list)
my_list
```

```output
[2, 4, 3, 1]
```

```python
random.shuffle(my_list)
my_list
```

```output
[4, 2, 3, 1]
```

## sample()

```python
random.sample(iterable, k: int)
```

`sample` retourne une liste avec une sélection aléatoire à partir d'un itérable. Le nombre d'éléments retournés est égal au paramètre `k` :

```python
# Échantillonner aléatoirement k éléments de la liste
random.sample([1, 2, 3, 4], 1)
```

```output
[3]
```

```python
random.sample([1, 2, 3, 4], 2)
```

```output
[3, 4]
```

```python
random.sample([1, 2, 3, 4], 3)
```

```output
[4, 3, 2]
```

```python
random.sample([1, 2, 3, 4], 4)
```

```output
[1, 2, 4, 3]
```

## random()

La méthode `random` retourne un nombre à virgule flottante aléatoire entre 0.0 et 1.0 :

```python
random.random()
```

```output
0.4143139993007743
```

```python
random.random()
```

```output
0.17300740157905092
```

```python
random.random()
```

```output
0.548798761388153
```

```python
random.random()
```

```output
0.7030407620656315
```

## uniform()

La méthode `uniform` est similaire à `randint`, mais retourne un nombre à virgule flottante :

```python
random.uniform(1, 5)
```

```output
3.697943322009309
```

```python
random.uniform(1, 5)
```

```output
2.498812082006561
```

```python
random.uniform(1, 5)
```

```output
2.7558465201782525
```

```python
random.uniform(1, 5)
```

```output
3.0337059529999273
```

## Liens pertinents

- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet : Listes et Tuples</router-link>
- <router-link to="/blog/python-data-types">Blog : Types de données Python</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/float">float()</router-link>
