---
title: 'Fonction intégrée Python enumerate() - Aide-mémoire Python'
description: "Retourne un objet énuméré. L'itérable doit être une séquence, un itérateur ou un autre objet supportant l'itération. La méthode __next__() de l'itérateur retourné par enumerate() renvoie un tuple contenant un compteur (à partir de start, qui vaut 0 par défaut) et les valeurs obtenues lors de l'itération sur l'itérable."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée Python enumerate()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    À partir de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#enumerate">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retourne un objet enumerate. L'itérable doit être une séquence, un itérateur ou un autre objet prenant en charge l'itération. La méthode __next__() de l'itérateur retourné par enumerate() retourne un tuple contenant un compteur (à partir de start qui vaut par défaut 0) et les valeurs obtenues en itérant sur l'itérable.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `enumerate()` en Python est une fonction intégrée qui ajoute un compteur à un itérable. Elle retourne un objet enumerate, qui produit des paires contenant un compte (à partir d'un index de départ, qui vaut par défaut 0) et la valeur correspondante de l'itérable. Ceci est particulièrement utile lorsque vous avez besoin à la fois de l'index et de l'élément lors de la boucle sur une séquence.

## Exemples

```python
l = enumerate([1, 2, 3, 4, 5])
print(l)
print(l.__next__())
print(l.__next__())
print(l.__next__())
print(l.__next__())
print(l.__next__())
```

```output
<enumerate object at 0x7fcac409cc40>
(0, 1)
(1, 2)
(2, 3)
(3, 4)
(4, 5)
```

`enumerate` est généralement utilisé dans une boucle `for` pour obtenir l'index d'un élément :

```python
for i, item in enumerate([1, 2, 3, 4, 5]):
    print(f"Index: {i}, Item: {item}")
```

```output
Index: 0, Item: 1
Index: 1, Item: 2
Index: 2, Item: 3
Index: 3, Item: 4
Index: 4, Item: 5
```

## Liens pertinents

- <router-link :to="'/cheatsheet/control-flow'">Flux de contrôle</router-link>
- <router-link :to="'/builtin/iter'">iter()</router-link>
- <router-link :to="'/builtin/next'">next()</router-link>
- <router-link :to="'/cheatsheet/lists-and-tuples'">Listes et Tuples</router-link>
- <router-link :to="'/builtin/zip'">zip()</router-link>
- <router-link :to="'/builtin/range'">range()</router-link>
