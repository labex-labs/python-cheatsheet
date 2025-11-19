---
title: 'Fonction intégrée property() de Python - Aide-mémoire Python'
description: 'Retourne un attribut de propriété.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée Python property()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Tiré de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#property">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retourne un attribut de propriété.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `property()` est utilisée pour créer des attributs de propriété. Un attribut de propriété est un type spécial d'attribut qui possède des méthodes getter, setter et delete. Cela vous permet d'ajouter une logique à la récupération, à la définition ou à la suppression de la valeur d'un attribut.

Il est plus courant d'utiliser le décorateur `@property`, qui est une manière plus pratique d'utiliser `property()`.

### Exemple

Voici un exemple d'utilisation de `property()` pour créer un attribut en lecture seule :

```python
class Person:
    def __init__(self, name):
        self._name = name

    def get_name(self):
        print("Getting name")
        return self._name

    # Créer une propriété
    name = property(get_name)

p = Person("John")
print(p.name)  # Ceci appelle get_name()
```

```output
Getting name
John
```

Note : `p.name = "Jane"` lèverait une AttributeError car il n'y a pas de setter.

Et voici la manière la plus courante de le faire avec le décorateur `@property` :

```python
class Person:
    def __init__(self, name):
        self._name = name

    @property
    def name(self):
        print("Getting name")
        return self._name

p = Person("John")
print(p.name)
```

```output
Getting name
John
```

## Liens pertinents

- <router-link to="/cheatsheet/oop-basics">Cheatsheet : Bases de l'OOP</router-link>
- <router-link to="/cheatsheet/decorators">Cheatsheet : Décorateurs</router-link>
- <router-link to="/cheatsheet/dataclasses">Cheatsheet : Dataclasses</router-link>
- <router-link to="/builtin/getattr">getattr()</router-link>
- <router-link to="/builtin/setattr">setattr()</router-link>
- <router-link to="/builtin/delattr">delattr()</router-link>
