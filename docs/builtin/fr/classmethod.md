---
title: 'Fonction intégrée classmethod() en Python - Fiche mémo Python'
description: "Transforme une méthode en méthode de classe. Une méthode de classe reçoit la classe comme premier argument implicite, tout comme une méthode d'instance reçoit l'instance."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée Python classmethod()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Extrait de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#classmethod">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Transforme une méthode en méthode de classe. Une méthode de classe reçoit la classe comme premier argument implicite, tout comme une méthode d'instance reçoit l'instance.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Un `classmethod` est une méthode qui est liée à la classe et non à l'instance de la classe. Elle prend la classe elle-même comme premier argument, conventionnellement nommé `cls`. Ceci contraste avec une méthode d'instance régulière, qui prend l'instance comme premier argument (`self`).

Elles sont souvent utilisées pour des méthodes usine (factory methods) qui créent des instances de la classe d'une manière spécifique.

## Exemple

Voici un cas d'utilisation courant : créer une méthode usine qui peut instancier la classe à partir d'un format de données différent, comme un dictionnaire.

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    @classmethod
    def from_dict(cls, data):
        # Ceci est une méthode usine qui crée une instance Person à partir d'un dictionnaire
        return cls(data['name'], data['age'])

    def display(self):
        print(f"Name: {self.name}, Age: {self.age}")

# Données pour une nouvelle personne
person_data = {'name': 'John', 'age': 30}

# Créer une instance Person en utilisant la méthode de classe
p = Person.from_dict(person_data)

p.display()
```

```output
Name: John, Age: 30
```

## Liens pertinents

- <router-link to="/cheatsheet/oop-basics">Cheatsheet : Bases de l'OOP</router-link>
- <router-link to="/cheatsheet/decorators">Cheatsheet : Décorateurs</router-link>
- <router-link to="/cheatsheet/functions">Cheatsheet : Fonctions</router-link>
- <router-link to="/builtin/staticmethod">staticmethod()</router-link>
- <router-link to="/builtin/property">property()</router-link>
- <router-link to="/builtin/object">object()</router-link>
