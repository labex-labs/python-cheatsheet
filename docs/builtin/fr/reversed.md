---
title: 'Fonction intégrée reversed() en Python - Aide-mémoire Python'
description: 'Retourne un itérateur inversé. seq doit être un objet possédant une méthode __reversed__() ou supportant le protocole de séquence (méthode __len__() et méthode __getitem__() avec des arguments entiers commençant à 0).'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée Python reversed()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#reversed">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retourne un itérateur inversé. seq doit être un objet qui possède une méthode __reversed__() ou prend en charge le protocole de séquence (la méthode __len__() et la méthode __getitem__() avec des arguments entiers commençant à 0).
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `reversed()` retourne un itérateur inversé. Cela signifie qu'elle peut être utilisée pour parcourir une séquence (comme une <router-link to="/builtin/list">liste</router-link>, un <router-link to="/builtin/tuple">tuple</router-link> ou une <router-link to="/builtin/str">chaîne de caractères</router-link>) dans l'ordre inverse. Elle ne modifie pas la séquence originale mais fournit plutôt un nouvel itérateur qui produit les éléments de la fin au début.

### Exemples

Pour obtenir une liste inversée, vous pouvez convertir l'itérateur en liste :

```python
my_list = [1, 2, 3, 4, 5]
reversed_list = list(reversed(my_list))
print(reversed_list)
```

```output
[5, 4, 3, 2, 1]
```

Vous pouvez également l'itérer directement dans une boucle `for` :

```python
for char in reversed("hello"):
    print(char)
```

```output
o
l
l
e
h
```

Voici un autre exemple démontrant le comportement de l'itérateur :

```python
i = reversed([1, 2, 3])
print(next(i))
print(next(i))
print(next(i))
```

```output
3
2
1
```

## Liens pertinents

- <router-link to="/cheatsheet/control-flow">Cheatsheet : Flux de contrôle (boucles for)</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet : Listes et Tuples</router-link>
- <router-link to="/builtin/sorted">sorted()</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/next">next()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
