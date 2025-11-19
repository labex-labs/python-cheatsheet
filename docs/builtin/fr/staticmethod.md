---
title: 'Fonction intégrée Python staticmethod() - Aide-mémoire Python'
description: 'Transformer une méthode en méthode statique.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée Python staticmethod()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Tiré de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#staticmethod">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Transforme une méthode en méthode statique.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Le décorateur `@staticmethod` transforme une méthode de manière à ce qu'elle appartienne à une classe mais ne reçoive ni la classe ni l'instance comme premier argument. Ceci est utile pour créer des fonctions utilitaires qui ont un lien logique avec une classe mais ne dépendent pas de l'état de la classe ou de l'instance.

Une méthode statique peut être appelée soit sur la classe elle-même, soit sur une instance.

### Exemple

Voici comment définir et appeler une méthode statique :

```python
class MathHelper:
    @staticmethod
    def add(x, y):
        return x + y

# Appel sur la classe
result1 = MathHelper.add(5, 3)
print(result1)

# Appel sur une instance
helper = MathHelper()
result2 = helper.add(10, 20)
print(result2)
```

```output
8
30
```

Une méthode statique n'a pas accès à la classe (`cls`) ni à l'instance (`self`). C'est essentiellement une fonction normale nommée dans l'espace de noms de la classe.

## Liens pertinents

- <router-link to="/cheatsheet/oop-basics">Cheatsheet : Bases de l'OOP</router-link>
- <router-link to="/cheatsheet/decorators">Cheatsheet : Décorateurs</router-link>
- <router-link to="/cheatsheet/functions">Cheatsheet : Fonctions</router-link>
- <router-link to="/builtin/classmethod">classmethod()</router-link>
- <router-link to="/builtin/property">property()</router-link>
