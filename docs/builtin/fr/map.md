---
title: 'Fonction intégrée Python map() - Aide-mémoire Python'
description: "Retourne un itérateur qui applique une fonction à chaque élément d'un itérable, produisant les résultats. Si des arguments itérables supplémentaires sont passés, la fonction doit accepter ce nombre d'arguments et est appliquée aux éléments de tous les itérables en parallèle. Avec plusieurs itérables, l'itérateur s'arrête lorsque l'itérable le plus court est épuisé. Pour les cas où les entrées de la fonction sont déjà organisées en tuples d'arguments."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée Python map()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    À partir de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#map">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retourne un itérateur qui applique la fonction à chaque élément de l'itérable, en produisant les résultats. Si des arguments itérables supplémentaires sont passés, la fonction doit prendre ce nombre d'arguments et est appliquée aux éléments de tous les itérables en parallèle. Avec plusieurs itérables, l'itérateur s'arrête lorsque l'itérable le plus court est épuisé. Pour les cas où les entrées de la fonction sont déjà organisées en <router-link to="/builtin/tuple">tuples</router-link> d'arguments.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction map, _map(fonction, itérable)_ prend un ou plusieurs itérables, une « fonction de rappel » (souvent une lambda), et retourne un « Objet Map ». L'objet map contient le résultat de la fonction map appliquant la fonction de rappel à chaque élément des arguments itérables. Map itère simultanément sur les objets itérables fournis. C'est-à-dire qu'à chaque étape, "i" dans la fonction map, l'élément à l'index "i" de chaque itérable sera disponible pour la fonction map à ce moment-là. Vous voudrez souvent convertir l'objet map résultant en <router-link to="/builtin/list">liste</router-link>, <router-link to="/builtin/tuple">tuple</router-link>, ou une autre forme d'objet plus pratique à utiliser une fois que vous avez terminé le mappage.

\*\*\*Une note importante : Depuis la sortie de Python 3, si les itérables fournis à map sont de longueurs différentes, le map s'arrêtera et retournera lorsqu'il aura atteint le nombre d'étapes correspondant à la longueur de l'itérable le plus court.

## Paramètres d'entrée

Fonction : prend l'élément (ou les éléments) à l'index correspondant à l'étape actuelle du Map et donne le résultat retourné comme un élément à stocker dans l'Objet Map. Le type d'élément stocké dans l'objet map sera identique au type retourné par la fonction.

Itérable(s) : `<router-link to="/builtin/tuple">tuple</router-link>`, `<router-link to="/builtin/list">liste</router-link>`, `<router-link to="/builtin/range">range</router-link>`, `<router-link to="/builtin/dict">dictionnaire</router-link>`, `<router-link to="/builtin/set">ensemble</router-link>`, `<router-link to="/builtin/str">chaîne de caractères</router-link>`.

## Un exemple très simple

```python
def double_map(func, iter):
    my_map = map(func, iter)
    return list(my_map)

def double(element):
    return element * 2

nums = [1, 2, 3, 4]

print(double_map(double, nums))
```

Sortie :

```plaintext
[2, 4, 6, 8]
```

## Un exemple moins simple

### Cet exemple utilise une fonction de rappel écrite sous forme de lambda, ainsi que

```python
def multi_map(func, *iters):
    my_map = map(func, *iters)
    return list(my_map)

list1 = [1, 2, 3]
list2 = [4, 5, 6]

print(multi_map((lambda item1, item2: item1 * item2), list1, list2))
```

Sortie :

```plaintext
[4, 10, 18]
```

## Un exemple démontrant la gestion par map des différentes longueurs d'itérables

```python
def max(a, b):
    if a > b:
        return a
    else:
        return b

list1 = [1, 1, 1]
list2 = [0, 0, 0, 1, 1, 1, 1, 1, 1, 1]

result = list(map(max, list1, list2))

print(result)
```

Sortie :

```plaintext
[1, 1, 1]
```

Remarquez comme la longueur de la liste résultante est égale à la longueur de list1 ?

## Liens pertinents

- <router-link to="/cheatsheet/functions">Cheatsheet : Fonctions (y compris Lambdas)</router-link>
- <router-link to="/cheatsheet/comprehensions">Cheatsheet : Compréhensions</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">Blog : Compréhensions Python Étape par Étape</router-link>
- <router-link to="/modules/itertools-module">Module : itertools</router-link>
- <router-link to="/builtin/filter">filter()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
