---
title: 'Compréhensions Python - Aide-mémoire Python'
description: 'Les compréhensions de liste offrent une manière concise de créer des listes'
labUrl: 'https://labex.io/fr/labs/python-python-comprehensions-633649?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Compréhensions Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Les compréhensions de liste (List Comprehensions) sont un type de syntaxe spécial qui nous permet de créer des listes à partir d'autres listes, et sont incroyablement utiles lorsque l'on travaille avec des nombres et avec un ou deux niveaux de boucles `for` imbriquées.

<base-disclaimer>
  <base-disclaimer-title>
    Tiré du tutoriel Python 3 <a target="_blank" href="https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions">tutoriel</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Les compréhensions de liste fournissent un moyen concis de créer des listes. [...] ou pour créer une sous-séquence de ces éléments qui satisfont une certaine condition.
  </base-disclaimer-content>
</base-disclaimer>

Lisez <router-link to="/blog/python-comprehensions-step-by-step">Compréhensions Python : Une introduction étape par étape</router-link> pour une introduction plus approfondie.

## Compréhension de liste

Voici comment nous créons une nouvelle liste à partir d'une collection existante avec une boucle `For` :

```python
# Approche traditionnelle : créer une liste en utilisant une boucle for
names = ['Charles', 'Susan', 'Patrick', 'George']

new_list = []
for n in names:
    new_list.append(n)

new_list
```

Sortie :

```plaintext
['Charles', 'Susan', 'Patrick', 'George']
```

Et voici comment nous faisons la même chose avec une compréhension de liste :

```python
# Compréhension de liste : manière concise de créer une nouvelle liste
# Syntaxe : [expression for item in iterable]
names = ['Charles', 'Susan', 'Patrick', 'George']

new_list = [n for n in names]  # Créer une liste avec tous les noms
new_list
```

Sortie :

```plaintext
['Charles', 'Susan', 'Patrick', 'George']
```

Nous pouvons faire de même avec des nombres :

```python
# Compréhension de liste imbriquée : créer des tuples à partir de deux plages
# Équivalent à des boucles for imbriquées
n = [(a, b) for a in range(1, 3) for b in range(1, 3)]
n
```

Sortie :

```plaintext
[(1, 1), (1, 2), (2, 1), (2, 2)]
```

## Ajout de conditions

Si nous voulons que `new_list` ne contienne que les noms commençant par C, avec une boucle `for`, nous le ferions comme ceci :

```python
# Approche traditionnelle : filtrer avec une condition if
names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']

new_list = []
for n in names:
    if n.startswith('C'):  # Filtrer les noms commençant par 'C'
        new_list.append(n)

print(new_list)
```

Sortie :

```plaintext
['Charles', 'Carol']
```

Dans une compréhension de liste, nous ajoutons l'instruction `if` à la fin :

```python
# Compréhension de liste avec condition : filtrer les éléments
# Syntaxe : [expression for item in iterable if condition]
new_list = [n for n in names if n.startswith('C')]
print(new_list)
```

Sortie :

```plaintext
['Charles', 'Carol']
```

Pour utiliser une instruction `if-else` dans une compréhension de liste :

```python
# Compréhension de liste avec if-else : expression conditionnelle
# Syntaxe : [expression_si_vrai if condition else expression_si_faux for item in iterable]
nums = [1, 2, 3, 4, 5, 6]
new_list = [num*2 if num % 2 == 0 else num for num in nums]  # Doubler les nombres pairs
print(new_list)
```

Sortie :

```plaintext
[1, 4, 3, 8, 5, 12]
```

<base-disclaimer>
  <base-disclaimer-title>
    Compréhensions d'ensemble et de dictionnaire
  </base-disclaimer-title>
  <base-disclaimer-content>
    Les bases des compréhensions de `list` s'appliquent également aux <b>ensembles</b> (sets) et aux <b>dictionnaires</b>.
  </base-disclaimer-content>
</base-disclaimer>

## Compréhension d'ensemble (Set comprehension)

```python
# Compréhension d'ensemble : créer un ensemble en utilisant la syntaxe de compréhension
# Syntaxe : {expression for item in iterable}
b = {"abc", "def"}
{s.upper() for s in b}  # Convertir toutes les chaînes en majuscules
```

Sortie :

```plaintext
{"ABC", "DEF"}
```

## Compréhension de dictionnaire (Dict comprehension)

```python
# Compréhension de dictionnaire : échanger les clés et les valeurs
# Syntaxe : {expression_clé: expression_valeur for item in iterable}
c = {'name': 'Pooka', 'age': 5}
{v: k for k, v in c.items()}  # Inverser les paires clé-valeur
```

Sortie :

```plaintext
{'Pooka': 'name', 5: 'age'}
```

Une compréhension de liste peut être générée à partir d'un dictionnaire :

```python
# Compréhension de liste à partir d'un dictionnaire : créer des chaînes formatées
c = {'name': 'Pooka', 'age': 5}
["{}:{}".format(k.upper(), v) for k, v in c.items()]  # Formater en "CLÉ:valeur"
```

Sortie :

```plaintext
['NAME:Pooka', 'AGE:5']
```

## Liens pertinents

- <router-link to="/blog/python-comprehensions-step-by-step">Compréhensions Python : Une introduction étape par étape</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Listes et Tuples Python</router-link>
- <router-link to="/cheatsheet/sets">Ensembles Python</router-link>
- <router-link to="/cheatsheet/dictionaries">Dictionnaires Python</router-link>
- <router-link to="/blog/python-sets-what-why-how">Ensembles Python : Quoi, Pourquoi et Comment</router-link>
- <router-link to="/blog/python-data-types">Article de blog sur les types de données Python</router-link>
