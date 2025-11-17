---
title: 'Fonction intégrée super() en Python - Fiche mémo Python'
description: 'Retourne un objet proxy qui délègue les appels de méthode à une classe parente ou sœur. Ceci est utile pour accéder aux méthodes héritées qui ont été remplacées dans une classe.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
La fonction intégrée Python super()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Tiré de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#super">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Retourne un objet proxy qui délègue les appels de méthode à une classe parente ou sœur de type. Ceci est utile pour accéder aux méthodes héritées qui ont été remplacées dans une classe.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `super()` est utilisée pour appeler une méthode d'une classe parente. Ceci est particulièrement utile dans l'héritage lorsque vous souhaitez étendre la fonctionnalité d'une méthode parente sans la remplacer complètement.

### Exemple

```python
class Parent:
    def greet(self):
        print("Hello from Parent")

class Child(Parent):
    def greet(self):
        # Call the parent's greet method
        super().greet()
        print("Hello from Child")

c = Child()
c.greet()
```

Sortie :

```plaintext
Hello from Parent
Hello from Child
```

## Liens pertinents

- <router-link to="/cheatsheet/oop-basics">Cheatsheet : Bases de l'OOP</router-link>
- <router-link to="/cheatsheet/decorators">Cheatsheet : Décorateurs</router-link>
- <router-link to="/cheatsheet/functions">Cheatsheet : Fonctions</router-link>
- <router-link to="/builtin/object">object()</router-link>
- <router-link to="/builtin/isinstance">isinstance()</router-link>
- <router-link to="/builtin/issubclass">issubclass()</router-link>
- <router-link to="/builtin/classmethod">classmethod()</router-link>
- <router-link to="/builtin/staticmethod">staticmethod()</router-link>
- <router-link to="/builtin/property">property()</router-link>
