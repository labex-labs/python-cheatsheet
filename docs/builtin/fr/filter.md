---
title: 'Fonction intégrée filter() de Python - Aide-mémoire Python'
description: "Construit un itérateur à partir des éléments de l'itérable pour lesquels la fonction renvoie vrai. L'itérable peut être une séquence, un conteneur prenant en charge l'itération ou un itérateur. Si la fonction est None, la fonction identité est supposée, c'est-à-dire que tous les éléments de l'itérable qui sont faux sont supprimés."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée Python filter()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    À partir de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#filter">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Construit un <router-link to="/builtin/iter">itérateur</router-link> à partir des éléments de l'itérable pour lesquels la fonction renvoie `True`. L'itérable peut être une séquence, un conteneur qui prend en charge l'itération, ou un <router-link to="/builtin/iter">itérateur</router-link>. Si la fonction est `None`, la fonction identité est supposée, c'est-à-dire que tous les éléments de l'itérable qui sont faux sont supprimés.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `filter()` en Python est une fonction intégrée qui vous permet de traiter un itérable et d'en extraire les éléments qui satisfont une certaine condition. Elle renvoie un <router-link to="/builtin/iter">itérateur</router-link> contenant les éléments qui répondent aux critères.

## Syntaxe

```python
filter(function, iterable)
```

- **function**: La fonction à exécuter pour chaque élément de l'itérable. Elle doit renvoyer `True` ou `False` pour chaque élément.
- **iterable**: L'itérable à filtrer, tel qu'une liste, un tuple ou une chaîne de caractères.

## Description

La fonction `filter()` construit un itérateur à partir des éléments de l'itérable pour lesquels la fonction renvoie `True`. Si la fonction est `None`, elle supprime tous les éléments de l'itérable qui sont faux.

## Exemple

```python
def is_even(num):
    return num % 2 == 0

numbers = [1, 2, 3, 4, 5, 6]
even_numbers = list(filter(is_even, numbers))
print(even_numbers)
```

Sortie :

```plaintext
[2, 4, 6]
```

Dans cet exemple, la fonction `is_even` est définie pour déterminer si un nombre est pair ou non. La méthode filter prend `deux arguments` : le `premier argument` est la fonction à appliquer à chaque élément de la liste, et le `deuxième argument` est la liste à filtrer. La méthode filter renvoie un <router-link to="/builtin/iter">itérateur</router-link>, qui est ensuite converti en liste et stocké dans la variable `even_numbers`. Le résultat final est la liste des nombres pairs extraits de la liste d'origine.

## Liens pertinents

- <router-link :to="'/builtin/map'">map()</router-link>: Applique une fonction à chaque élément d'un itérable et renvoie un itérateur des résultats.
- <router-link :to="'/builtin/iter'">iter()</router-link>: Renvoie un objet itérateur.
- <router-link :to="'/blog/python-comprehensions-step-by-step'">List Comprehensions</router-link>: Une manière concise de créer des listes, souvent utilisée comme alternative à `filter()`.
- <router-link :to="'/cheatsheet/comprehensions'">Comprehensions</router-link>
- <router-link :to="'/cheatsheet/functions'">Functions</router-link>
- <router-link :to="'/builtin/reduce'">reduce()</router-link>
