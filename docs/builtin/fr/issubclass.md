---
title: 'Fonction intégrée issubclass() en Python - Fiche mémo Python'
description: "Retourne Vrai si la classe est une sous-classe (directe, indirecte ou virtuelle) de classinfo. Une classe est considérée comme une sous-classe d'elle-même. classinfo peut être un tuple d'objets classe (ou récursivement, d'autres tuples similaires) ou un Type Union, auquel cas retourne Vrai si la classe est une sous-classe de n'importe quelle entrée dans classinfo. Dans tout autre cas, une exception TypeError est levée."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
La fonction intégrée Python issubclass()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Tiré de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#issubclass">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retourne True si class est une sous-classe (directe, indirecte ou virtuelle) de classinfo. Une classe est considérée comme une sous-classe d'elle-même. classinfo peut être un tuple d'objets de classe (ou récursivement, d'autres tuples de ce type) ou un Type Union, auquel cas retourne True si class est une sous-classe de n'importe quelle entrée dans classinfo. Dans tout autre cas, une exception TypeError est levée.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `issubclass()` en Python est une fonction intégrée qui vérifie si une classe donnée est une sous-classe d'une autre classe ou d'un tuple de classes. Elle retourne `True` si le premier argument est une sous-classe du second argument, et `False` sinon. Cette fonction est utile pour la programmation orientée objet, car elle permet de vérifier les relations entre les classes et d'implémenter un comportement polymorphe basé sur l'héritage.

## Examples

```python
class First:
    pass

class Second(First):
    pass

print(issubclass(Second, First))
print(issubclass(First, Second))
```

Output:

```plaintext
True
False
```

## Relevant links

- <router-link :to="'/builtin/isinstance'">`isinstance()`</router-link>
- <router-link :to="'/builtin/type'">`type()`</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">Bases de l'OOP</router-link>
- <router-link :to="'/builtin/object'">`object()`</router-link>
