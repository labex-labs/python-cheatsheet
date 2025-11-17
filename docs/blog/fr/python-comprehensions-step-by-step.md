---
title: 'Compréhensions Python : Introduction pas à pas - Fiche mémo Python'
description: 'Dans cet article concis, nous allons transformer des boucles for, étape par étape, en compréhensions.'
date: 'March 22, 2019'
updated: 'July 3, 2022'
tags: 'python, basics'
socialImage: '/blog/python-comprehensions.png'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "Compréhensions Python : Introduction pas à pas - Fiche mémo Python"
    description: "Dans cet article concis, nous allons transformer des boucles for, étape par étape, en compréhensions."
    date: "March 22, 2019"
    updated: "July 3, 2022"
    tags: "python, basics"
    socialImage: "/blog/python-comprehensions.png"
</route>

<blog-title-header :frontmatter="frontmatter" title="Compréhensions Python : Introduction pas à pas - Fiche mémo Python" />

Les _List Comprehensions_ sont un type de syntaxe spécial qui nous permet de créer des listes à partir d'autres listes ([Wikipedia](https://en.wikipedia.org/wiki/List_comprehension), [The Python Tutorial](https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions)). Elles sont incroyablement utiles lorsque l'on travaille avec des nombres et avec un ou deux niveaux de _for loops_ imbriqués, mais au-delà, elles peuvent devenir un peu trop difficiles à lire.

Dans cet article, nous allons créer des _For Loops_ et les réécrire, étape par étape, en _Comprehensions_.

## Bases

En vérité, les _List Comprehensions_ ne sont pas trop complexes, mais elles sont encore un peu difficiles à comprendre au début car elles ont l'air un _peu_ étranges. Pourquoi ? Eh bien, l'ordre dans lequel elles sont écrites est l'**_inverse_** de ce que nous voyons habituellement dans une _For Loop_.

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
>>> for n in names:
...     print(n)
# Charles
# Susan
# Patrick
# George
# Carol
```

Pour faire la même chose avec une _List Comprehension_, nous commençons par la toute fin de la _loop_ :

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
>>> [print(n) for n in names]
# Charles
# Susan
# Patrick
# George
# Carol
```

Remarquez comment nous avons inversé l'ordre :

- Premièrement, nous avons ce que le résultat de la boucle sera `[print(n) ...]`.
- Ensuite, nous définissons la variable qui stockera chacun des éléments et pointera vers la `List`, `Set` ou `Dictionary` sur laquelle nous allons travailler `[... for n in names]`.

## Créer une nouvelle Liste avec une Comprehension

> C'est l'usage principal d'une _List Comprehension_. D'autres usages peuvent résulter en un code difficile à lire pour vous et pour les autres.

Voici comment nous créons une nouvelle liste à partir d'une collection existante avec une _For Loop_ :

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']

>>> new_list = []
>>> for n in names:
...     new_list.append(n)

>>> print(new_list)
# ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
```

Et voici comment nous faisons la même chose avec une _List Comprehension_ :

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
>>> new_list = [n for n in names]
>>> print(new_list)
# ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
```

La raison pour laquelle nous pouvons faire cela est que le comportement standard d'une _List Comprehension_ est de retourner une liste :

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
>>> [n for n in names]
# ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
```

## Ajouter des Conditionnelles

Et si nous voulons que `new_list` contienne uniquement les noms qui commencent par `C` ? Avec une _For Loop_, nous le ferions comme ceci :

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']

>>> new_list = []
>>> for n in names:
...     if n.startswith('C'):
...         new_list.append(n)

>>> print(new_list)
# ['Charles', 'Carol']
```

Dans une _List Comprehension_, nous ajoutons l'instruction if à sa fin :

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
>>> new_list = [n for n in names if n.startswith('C')]
>>> print(new_list)
# ['Charles', 'Carol']
```

Beaucoup plus lisible.

## Formater les longues List Comprehensions

Cette fois, nous voulons que `new_list` contienne non seulement les noms qui commencent par un `C`, mais aussi ceux qui se terminent par un `e` et contiennent un `k` :

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
>>> new_list = [n for n in names if n.startswith('C') or n.endswith('e') or 'k' in n]
>>> print(new_list)
# ['Charles', 'Patrick', 'George', 'Carol']
```

C'est assez désordonné. Heureusement, il est possible de diviser les _Comprehensions_ sur différentes lignes :

```python
new_list = [
    n
    for n in names
    if n.startswith("C")
    or n.endswith("e")
    or "k" in n
]
```

## Set et Dict Comprehensions

Si vous avez appris les bases des _List Comprehensions_... Félicitations ! Vous venez de le faire avec les <router-link to="/cheatsheet/sets">Sets</router-link> et les <router-link to="/cheatsheet/dictionaries">Dictionaries</router-link>.

### Set comprehension

```python
>>> my_set = {"abc", "def"}

>>> # Ici, nous créons un nouvel ensemble avec des éléments en majuscules avec une boucle for
>>> new_set = set()
>>> for s in my_set:
...    new_set.add(s.upper())
>>> print(new_set)
# {'DEF', 'ABC'}

>>> # Le même, mais avec une set comprehension
>>> new_set = {s.upper() for s in my_set}
>>> print(new_set)
# {'DEF', 'ABC'}
```

### Dict comprehension

```python
>>> my_dict = {'name': 'Christine', 'age': 98}

>>> # Un nouveau dictionnaire à partir d'un existant avec une boucle for
>>> new_dict = {}
>>> for key, value in my_dict.items():
...     new_dict[key] = value
>>> print(new_dict)
# {'name': 'Christine', 'age': 98}

# Utilisation d'une dict comprehension
>>> new_dict = {key: value for key, value in my_dict.items()}  # Notez le ":"
>>> print(new_dict)
# {'name': 'Christine', 'age': 98}
```

> Article recommandé : [Python Sets: What, Why and How ](https://www.pythoncheatsheet.org/blog/python-sets-what-why-how).

## Conclusion

Chaque fois que j'apprends quelque chose de nouveau, il y a cette envie de l'utiliser immédiatement. Quand cela arrive, je me force à m'arrêter et à réfléchir un instant... Devrais-je changer cette grande _For Loop_ imbriquée et déjà désordonnée en une _List Comprehension_ ? Probablement pas.

> La lisibilité compte. [The Zen of Python](https://www.python.org/dev/peps/pep-0020/).
