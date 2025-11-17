---
title: 'Fonction intégrée vars() en Python - Aide-mémoire Python'
description: "Retourne l'attribut __dict__ d'un module, d'une classe, d'une instance ou de tout autre objet possédant un attribut __dict__."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
La fonction intégrée Python vars()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Extrait de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#vars">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Retourne l'attribut __dict__ d'un module, d'une classe, d'une instance ou de tout autre objet possédant un attribut __dict__.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `vars()` retourne l'attribut `__dict__` d'un objet. Ce dictionnaire contient les attributs inscriptibles de l'objet. C'est un moyen pratique de visualiser tous les attributs d'un objet en une seule fois.

Si elle est appelée sans argument, `vars()` agit comme `locals()`, retournant un dictionnaire de la table des symboles locale.

### Exemples

**Obtenir les attributs d'un objet :**

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

my_person = Person("Dwight", 35)
print(vars(my_person))
```

Sortie :

```plaintext
{'name': 'Dwight', 'age': 35}
```

**Utilisation de `vars()` sans argument :**

```python
def my_function():
    x = 10
    print(vars())

my_function()
```

Sortie :

```plaintext
{'x': 10}
```

## Liens pertinents

- <router-link to="/cheatsheet/oop-basics">Cheatsheet : Bases de l'OOP</router-link>
- <router-link to="/cheatsheet/debugging">Cheatsheet : Débogage</router-link>
- <router-link to="/cheatsheet/dictionaries">Cheatsheet : Dictionnaires</router-link>
- <router-link to="/builtin/dir">dir()</router-link>
- <router-link to="/builtin/object">object()</router-link>
- <router-link to="/builtin/globals">globals()</router-link>
- <router-link to="/builtin/locals">locals()</router-link>
