---
title: 'Ensembles Python - Aide-mémoire Python'
description: 'Python intègre plusieurs types de données intégrés pour organiser vos données : listes, dictionnaires, tuples et ensembles.'
labUrl: 'https://labex.io/fr/labs/python-python-sets-633665?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Ensembles Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Python est équipé de plusieurs types de données intégrés pour nous aider à organiser nos données. Ces structures comprennent les listes, les dictionnaires, les tuples et les **ensembles** (sets).

<base-disclaimer>
  <base-disclaimer-title>
    Extrait de la <a target="_blank" href="https://docs.python.org/3/tutorial/datastructures.html#sets">documentation</a> Python 3
  </base-disclaimer-title>
  <base-disclaimer-content>
    Un ensemble est une collection non ordonnée sans éléments dupliqués. Les utilisations de base comprennent le test d'appartenance et l'élimination des entrées dupliquées.
  </base-disclaimer-content>
</base-disclaimer>

Lisez <router-link to="/blog/python-sets-what-why-how">Python Sets: What, Why and How</router-link> pour une référence plus approfondie.

## Initialisation d'un ensemble

Il existe deux façons de créer des ensembles : en utilisant les accolades `{}` et la fonction intégrée `set()`

<base-warning>
  <base-warning-title>
    Ensembles Vides
  </base-warning-title>
  <base-warning-content>
    Lors de la création d'un ensemble, assurez-vous de ne pas utiliser d'accolades vides <code>{}</code>, sinon vous obtiendrez un dictionnaire vide à la place.
  </base-warning-content>
</base-warning>

```python
# Create set using curly braces or set() function
s = {1, 2, 3}  # Using curly braces
s = set([1, 2, 3])  # Using set() constructor

# Warning: empty {} creates a dictionary, not a set
s = {}  # this will create a dictionary instead of a set
type(s)  # Returns <class 'dict'>
```

```output
<class 'dict'>
```

## Collections non ordonnées d'éléments uniques

Un ensemble supprime automatiquement toutes les valeurs dupliquées.

```python
# Sets automatically remove duplicates
s = {1, 2, 3, 2, 3, 4}  # Duplicates are removed
s  # Returns {1, 2, 3, 4}
```

```output
{1, 2, 3, 4}
```

Et en tant que type de données non ordonné, ils ne peuvent pas être indexés.

```python
s = {1, 2, 3}
s[0]
```

```output
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'set' object does not support indexing
```

## set add et update

En utilisant la méthode `add()`, nous pouvons ajouter un seul élément à l'ensemble.

```python
# add() method: add a single element to the set
s = {1, 2, 3}
s.add(4)  # Add element 4
s
```

```output
{1, 2, 3, 4}
```

Et avec `update()`, plusieurs éléments :

```python
# update() method: add multiple elements from an iterable
s = {1, 2, 3}
s.update([2, 3, 4, 5, 6])  # Add multiple elements (duplicates ignored)
s
```

```output
{1, 2, 3, 4, 5, 6}
```

## set remove et discard

Les deux méthodes supprimeront un élément de l'ensemble, mais `remove()` lèvera une `key error` si la valeur n'existe pas.

```python
# remove() method: remove element, raises KeyError if not found
s = {1, 2, 3}
s.remove(3)  # Remove element 3
s
```

```output
{1, 2}
```

```python
s.remove(3)
```

```output
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
KeyError: 3
```

`discard()` ne lèvera aucune erreur.

```python
# discard() method: remove element, no error if not found
s = {1, 2, 3}
s.discard(3)  # Remove element 3 (safe, no error if missing)
s
```

```output
{1, 2}
```

```python
s.discard(3)
```

## set union

`union()` ou `|` créera un nouvel ensemble contenant tous les éléments des ensembles fournis.

```python
# union(): combine all elements from multiple sets (no duplicates)
s1 = {1, 2, 3}
s2 = {3, 4, 5}
s1.union(s2)  # or 's1 | s2' - returns {1, 2, 3, 4, 5}
```

```output
{1, 2, 3, 4, 5}
```

## set intersection

`intersection()` ou `&` retournera un ensemble contenant uniquement les éléments communs à tous.

```python
# intersection(): return elements common to all sets
s1 = {1, 2, 3}
s2 = {2, 3, 4}
s3 = {3, 4, 5}
s1.intersection(s2, s3)  # or 's1 & s2 & s3' - returns {3}
```

```output
{3}
```

## set difference

`difference()` ou `-` retournera uniquement les éléments qui sont uniques au premier ensemble (ensemble invoqué).

```python
# difference(): return elements in first set but not in others
s1 = {1, 2, 3}
s2 = {2, 3, 4}

s1.difference(s2)  # or 's1 - s2' - returns {1}
```

```output
{1}
```

```python
s2.difference(s1) # or 's2 - s1'
```

```output
{4}
```

## set symmetric_difference

`symmetric_difference()` ou `^` retournera tous les éléments qui ne sont pas communs entre eux.

```python
# symmetric_difference(): return elements in either set, but not both
s1 = {1, 2, 3}
s2 = {2, 3, 4}
s1.symmetric_difference(s2)  # or 's1 ^ s2' - returns {1, 4}
```

```output
{1, 4}
```

## Liens pertinents

- <router-link to="/blog/python-data-types">Python Data Types Blog Post</router-link>
- <router-link to="/blog/python-sets-what-why-how">Python Sets: What, Why and How</router-link>
- <router-link to="/cheatsheet/dictionaries">Python Dictionaries</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Python Lists and Tuples</router-link>
