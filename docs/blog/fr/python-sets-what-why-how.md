---
title: 'Ensembles Python : Quoi, Pourquoi et Comment - Aide-mémoire Python'
description: "En programmation, il existe plusieurs façons d'écrire du code. Certaines sont considérées comme mauvaises, d'autres claires, concises et maintenables, ou 'pythoniques'. Dans cet article, nous allons explorer comment les ensembles Python peuvent améliorer non seulement la lisibilité, mais aussi accélérer le temps d'exécution de nos programmes."
date: 'July 27, 2018'
updated: 'July 3, 2022'
tags: 'python, basics'
socialImage: '/blog/sets.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "Ensembles Python : Quoi, Pourquoi et Comment - Aide-mémoire Python"
    description: "En programmation, il existe plusieurs façons d'écrire du code. Certaines sont considérées comme mauvaises, d'autres claires, concises et maintenables, ou 'pythoniques'. Dans cet article, nous allons explorer comment les ensembles Python peuvent améliorer non seulement la lisibilité, mais aussi accélérer le temps d'exécution de nos programmes."
    date: "July 27, 2018"
    updated: "July 3, 2022"
    tags: "python, basics"
    socialImage: "/blog/sets.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="Ensembles Python : Quoi, Pourquoi et Comment - Aide-mémoire Python" />

Python est équipé de plusieurs types de données intégrés pour nous aider à organiser nos données. Ces structures comprennent les `lists` (listes), les `dictionaries` (dictionnaires), les `tuples` (tuples) et les `sets` (ensembles).

<base-disclaimer>
  <base-disclaimer-title>
    Tiré de la <a target="_blank" href="https://docs.python.org/3/tutorial/datastructures.html#sets">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Un <code>set</code> est une <b>collection non ordonnée</b> sans <b>éléments dupliqués</b>. Les utilisations de base comprennent le <b>test d'appartenance</b> et l'<b>élimination des entrées dupliquées</b>. Les objets Set prennent également en charge les opérations mathématiques telles que l'<b>union</b>, l'<b>intersection</b>, la <b>différence</b> et la <b>différence symétrique</b>.
  </base-disclaimer-content>
</base-disclaimer>

Dans cet article, nous allons passer en revue chacun des éléments énumérés dans la définition ci-dessus. Commençons tout de suite et voyons comment nous pouvons les créer.

## Initialisation d'un Ensemble (Set)

Il existe deux façons de créer un ensemble : l'une consiste à utiliser la fonction intégrée `set()` et à lui passer une `list` d'éléments, et l'autre consiste à utiliser les accolades `{}`.

### Initialisation d'un ensemble à l'aide de la fonction intégrée `set()`

```python
>>> s1 = set([1, 2, 3])
>>> s1
{1, 2, 3}
>>> type(s1)
<class 'set'>
```

### Initialisation d'un ensemble à l'aide des accolades `{}`

```python
>>> s2 = {3, 4, 5}
>>> s2
{3, 4, 5}
>>> type(s2)
<class 'set'>
>>>
```

<base-warning>
  <base-warning-title>
    Ensembles Vides
  </base-warning-title>
  <base-warning-content>
    Lors de la création d'un ensemble, assurez-vous de ne pas utiliser d'accolades vides <code>{}</code>, sinon vous obtiendrez un dictionnaire vide à la place.
  </base-warning-content>
</base-warning>

```python
>>> s = {}
>>> type(s)
<class 'dict'>
```

C'est le bon moment pour mentionner que, par souci de simplicité, tous les exemples fournis dans cet article utiliseront des entiers à un seul chiffre, mais les ensembles peuvent contenir tous les types de données [hashables](https://docs.python.org/3/glossary.html#term-hashable) que Python prend en charge. En d'autres termes, les entiers, les chaînes de caractères et les tuples, mais pas les éléments _mutables_ comme les _listes_ ou les _dictionnaires_ :

```python
>>> s = {1, 'coffee', [4, 'python']}
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: unhashable type: 'list'
```

Maintenant que vous savez comment créer un ensemble et quel type d'éléments il peut contenir, continuons et voyons _pourquoi_ nous devrions toujours les avoir dans notre arsenal.

## Pourquoi vous devriez les utiliser

Nous pouvons écrire du code de plus d'une manière. Certaines sont considérées comme plutôt mauvaises, et d'autres, _claires, concises et maintenables_. Ou "[_pythoniques_](http://docs.python-guide.org/en/latest/writing/style/)".

<base-disclaimer>
  <base-disclaimer-title>
    Tiré de <a target="_blank" href="http://docs.python-guide.org/en/latest/">The Hitchhiker’s Guide to Python</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Lorsqu'un développeur Python expérimenté (un Pythonista) qualifie des portions de code de non « Pythoniques », il signifie généralement que ces lignes de code ne suivent pas les directives courantes et ne parviennent pas à exprimer leur intention de la manière considérée comme la meilleure (lire : la plus lisible).
  </base-disclaimer-content>
</base-disclaimer>

Commençons à explorer la manière dont les ensembles Python peuvent nous aider non seulement en termes de lisibilité, mais aussi en termes de temps d'exécution de notre programme.

## Collection d'éléments non ordonnée

Tout d'abord : vous ne pouvez pas accéder à un objet `set` en utilisant des index.

```python
>>> s = {1, 2, 3}
>>> s[0]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'set' object does not support indexing
```

Ni les modifier avec des tranches :

```python
>>> s[0:2]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'set' object is not subscriptable
```

_MAIS_, si ce dont nous avons besoin est de supprimer les doublons, ou d'effectuer des opérations mathématiques comme combiner des listes (unions), nous pouvons, et _DEVONS_ toujours utiliser des ensembles.

Je dois mentionner que **lors de l'itération, les listes surpassent les ensembles**, alors préférez-les si c'est ce dont vous avez besoin. Pourquoi ? Eh bien, cet article n'a pas pour but d'expliquer le fonctionnement interne des ensembles, mais voici quelques liens où vous pouvez en lire davantage à ce sujet :

- [Time Complexity](https://wiki.python.org/moin/TimeComplexity)
- [How is set() implemented?](https://stackoverflow.com/questions/3949310/how-is-set-implemented)
- [Python Sets vs Lists](https://stackoverflow.com/questions/2831212/python-sets-vs-lists)
- [Is there any advantage or disadvantage to using sets over list comps to ensure a list of unique entries?](https://mail.python.org/pipermail/python-list/2011-June/606738.html)

## Aucun élément en double

En écrivant ceci, je ne peux m'empêcher de penser à toutes les fois où j'ai utilisé une boucle _for_ et l'instruction _if_ pour vérifier et supprimer les éléments en double dans une liste. Mon visage devient rouge en me souvenant que, plus d'une fois, j'ai écrit quelque chose comme ceci :

```python
>>> my_list = [1, 2, 3, 2, 3, 4]
>>> no_duplicate_list = []
>>> for item in my_list:
...     if item not in no_duplicate_list:
...             no_duplicate_list.append(item)
...
>>> no_duplicate_list
[1, 2, 3, 4]
```

Ou utilisé une compréhension de liste :

```python
>>> my_list = [1, 2, 3, 2, 3, 4]
>>> no_duplicate_list = []
>>> [no_duplicate_list.append(item) for item in my_list if item not in no_duplicate_list]
[None, None, None, None]
>>> no_duplicate_list
[1, 2, 3, 4]
```

Mais ce n'est pas grave, rien de tout cela n'a d'importance maintenant car nous avons les ensembles :

```python
>>> my_list = [1, 2, 3, 2, 3, 4]
>>> no_duplicate_list = list(set(my_list))
>>> no_duplicate_list
[1, 2, 3, 4]
```

## Performance des ensembles

Utilisons maintenant le module _timeit_ et voyons le temps d'exécution des listes et des ensembles lors de la suppression des doublons :

```python
>>> from timeit import timeit
>>> def no_duplicates(list):
...     no_duplicate_list = []
...     [no_duplicate_list.append(item) for item in list if item not in no_duplicate_list]
...     return no_duplicate_list
...
>>> # d'abord, voyons comment la liste se comporte :
>>> print(timeit('no_duplicates([1, 2, 3, 1, 7])', globals=globals(), number=1000))
0.0018683355819786227
```

```python
>>> from timeit import timeit
>>> # et l'ensemble :
>>> print(timeit('list(set([1, 2, 3, 1, 2, 3, 4]))', number=1000))
0.0010220493243764395
>>> # plus rapide et plus propre =)
```

Non seulement nous écrivons _moins de lignes de code_ avec les ensembles qu'avec les compréhensions de liste, mais nous obtenons également un code plus _lisible_ et plus _performant_.

<base-warning>
  <base-warning-title>
    Rappelez-vous que les ensembles ne sont pas ordonnés
  </base-warning-title>
  <base-warning-content>
    Il n'y a aucune garantie que lors de leur reconversion en liste, l'ordre des éléments sera préservé.
  </base-warning-content>
</base-warning>

Tiré du [Zen de Python](https://www.python.org/dev/peps/pep-0020/) :

> Le beau est préférable à l'affreux. <br>
> L'explicite est préférable à l'implicite.<br>
> Le simple est préférable au complexe.<br>
> Le plat est préférable à l'imbriqué.

Les ensembles ne sont-ils pas simplement Beaux, Explicites, Simples et Plats ?

## Tests d'appartenance

Chaque fois que nous utilisons une instruction _if_ pour vérifier si un élément est, par exemple, dans une liste, vous effectuez un test d'appartenance :

```python
my_list = [1, 2, 3]
>>> if 2 in my_list:
...     print('Yes, this is a membership test!')
...
# Yes, this is a membership test!
```

Et les ensembles sont plus performants que les listes lorsqu'ils les effectuent :

```python
>>> from timeit import timeit
>>> def in_test(iterable):
...     for i in range(1000):
...             if i in iterable:
...                     pass
...
>>> timeit('in_test(iterable)', setup="from __main__ import in_test; iterable = list(range(1000))", number=1000)
# 12.459663048726043
```

```python
>>> from timeit import timeit
>>> def in_test(iterable):
...     for i in range(1000):
...             if i in iterable:
...                     pass
...
>>> timeit('in_test(iterable)', setup="from __main__ import in_test; iterable = set(range(1000))", number=1000)
# 0.12354438152988223
```

Les tests ci-dessus proviennent de ce [fil Stack Overflow](https://stackoverflow.com/questions/2831212/python-sets-vs-lists).

Donc, si vous effectuez des comparaisons comme celles-ci dans des listes massives, cela accélérera considérablement votre programme si vous convertissez cette liste en un ensemble.

## Ajout d'éléments

Selon le nombre d'éléments à ajouter, nous devrons choisir entre les méthodes `add()` et `update()`.

`add()` Ajoutera un seul élément :

```python
>>> s = {1, 2, 3}
>>> s.add(4)
>>> s
{1, 2, 3, 4}
```

Et `update()` en ajoutera plusieurs :

```python
>>> s = {1, 2, 3}
>>> s.update([2, 3, 4, 5, 6])
>>> s
{1, 2, 3, 4, 5, 6}
```

Rappelez-vous, les ensembles suppriment les doublons.

## Suppression d'éléments

Si vous souhaitez être alerté lorsque votre code tente de supprimer un élément qui n'est pas dans l'ensemble, utilisez `remove()`. Sinon, `discard()` fournit une alternative appropriée :

```python
>>> s = {1, 2, 3}
>>> s.remove(3)
>>> s
{1, 2}
>>> s.remove(3)
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# KeyError: 3
```

`discard()` ne lèvera aucune erreur :

```python
>>> s = {1, 2, 3}
>>> s.discard(3)
>>> s
{1, 2}
>>> s.discard(3)
>>> # rien ne se passe !
```

Nous pouvons également utiliser `pop()` pour supprimer un élément de manière aléatoire :

```python
>>> s = {1, 2, 3, 4, 5}
>>> s.pop()  # supprime un élément arbitraire
1
>>> s
{2, 3, 4, 5}
```

Ou `clear()` pour supprimer toutes les valeurs d'un ensemble :

```python
>>> s = {1, 2, 3, 4, 5}
>>> s.clear()  # supprime tous les éléments
>>> s
set()
```

## La méthode union()

`union()` ou `|` créera un nouvel ensemble contenant tous les éléments des ensembles que nous fournissons :

```python
>>> s1 = {1, 2, 3}
>>> s2 = {3, 4, 5}
>>> s1.union(s2)  # ou 's1 | s2'
{1, 2, 3, 4, 5}
```

## La méthode intersection()

`intersection` ou `&` renverra un ensemble contenant uniquement les éléments communs à tous :

```python
>>> s1 = {1, 2, 3}
>>> s2 = {2, 3, 4}
>>> s3 = {3, 4, 5}
>>> s1.intersection(s2, s3)  # ou 's1 & s2 & s3'
{3}
```

## La méthode difference()

Difference crée un nouvel ensemble avec les valeurs qui sont dans "s1" mais pas dans "s2" :

```python
>>> s1 = {1, 2, 3}
>>> s2 = {2, 3, 4}
>>> s1.difference(s2)  # ou 's1 - s2'
{1}
```

## symmetric_difference()

`symmetric_difference` ou `^` renverra toutes les valeurs qui ne sont pas communes entre les ensembles.

```python
>>> s1 = {1, 2, 3}
>>> s2 = {2, 3, 4}
>>> s1.symmetric_difference(s2)  # ou 's1 ^ s2'
{1, 4}
```

## Conclusions

J'espère qu'après avoir lu cet article, vous saurez ce qu'est un ensemble, comment manipuler ses éléments et les opérations qu'il peut effectuer. Savoir quand utiliser un ensemble vous aidera certainement à écrire un code plus propre et à accélérer vos programmes.
