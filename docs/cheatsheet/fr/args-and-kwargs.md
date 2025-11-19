---
title: 'Arguments et Mots-clés Python - Fiche de Référence Python'
description: 'args et kwargs peuvent sembler intimidants, mais ils sont faciles à maîtriser et offrent flexibilité et lisibilité à vos fonctions.'
labUrl: 'https://labex.io/fr/labs/python-python-args-and-kwargs-633646?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Arguments et mots-clés Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    <a href="https://docs.python.org/3/tutorial/index.html">Arguments et mots-clés Python expliqués simplement</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    <code>*args</code> et <code>**kwargs</code> peuvent sembler intimidants, mais la vérité est qu'ils ne sont pas si difficiles à comprendre et peuvent conférer beaucoup de flexibilité à vos fonctions.
  </base-disclaimer-content>
</base-disclaimer>

Lisez l'article <router-link to="/blog/python-easy-args-kwargs">Python \*args et \*\*kwargs expliqués simplement</router-link> pour une introduction plus approfondie.

## Args et Kwargs

`*args` et `**kwargs` vous permettent de passer un nombre indéfini d'arguments positionnels et de mots-clés lors de l'appel d'une fonction.

```python
# Définir une fonction qui accepte n'importe quel nombre d'arguments positionnels et de mots-clés
def some_function(*args, **kwargs):
    pass

# Appel avec n'importe quel nombre d'arguments positionnels
some_function(arg1, arg2, arg3)

# Appel avec n'importe quel nombre d'arguments de mots-clés
some_function(key1=arg1, key2=arg2, key3=arg3)

# Appel avec des arguments positionnels et des arguments de mots-clés
some_function(arg, key1=arg1)

# Ou appel sans aucun argument
some_function()
```

<base-warning>
  <base-warning-title>
    Conventions Python
  </base-warning-title>
  <base-warning-content>
    Les mots <code>*args</code> et <code>**kwargs</code> sont des conventions. Ils ne sont pas imposés par l'interpréteur, mais sont considérés comme une bonne pratique par la communauté Python.
  </base-warning-content>
</base-warning>

## Args

Vous pouvez accéder aux _arguments_ via la variable `args` :

```python
# *args collecte les arguments positionnels dans un tuple
def some_function(*args):
    print(f'Arguments passés: {args} en tant que {type(args)}')

# Passer plusieurs arguments - ils seront collectés dans le tuple args
some_function('arg1', 'arg2', 'arg3')
```

```output
Arguments passés: ('arg1', 'arg2', 'arg3') en tant que <class 'tuple'>
```

## Kwargs

Les mots-clés sont accessibles via la variable `kwargs` :

```python
# **kwargs collecte les arguments de mots-clés dans un dictionnaire
def some_function(**kwargs):
    print(f'mots-clés: {kwargs} en tant que {type(kwargs)}')

# Passer des arguments de mots-clés - ils seront collectés dans le dict kwargs
some_function(key1='arg1', key2='arg2')
```

```output
mots-clés: {'key1': 'arg1', 'key2': 'arg2'} en tant que <class 'dict'>
```

## Liens pertinents

- <router-link to="/cheatsheet/functions">Fonctions</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Listes et Tuples</router-link>
- <router-link to="/cheatsheet/dictionaries">Dictionnaires Python</router-link>
- <router-link to="/blog/python-easy-args-kwargs">Python \*args et \*\*kwargs expliqués simplement</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
