---
title: 'Classes de Données Python - Aide-mémoire Python'
description: "Les classes de données (Dataclasses) sont des classes Python optimisées pour stocker des objets de données. Ce module fournit un décorateur et des fonctions pour ajouter automatiquement des méthodes spéciales générées comme __init__() et __repr__() aux classes définies par l'utilisateur."
labUrl: 'https://labex.io/fr/labs/python-python-dataclasses-633652?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Dataclasses Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Les `Dataclasses` sont des classes python, mais adaptées au stockage d'objets de données.
Ce module fournit un décorateur et des fonctions pour ajouter automatiquement des méthodes spéciales générées telles que `__init__()` et `__repr__()` aux classes définies par l'utilisateur.

## Fonctionnalités

1. Elles stockent des données et représentent un certain type de données. Ex: Un nombre. Pour ceux qui connaissent les ORM, une instance de modèle est un objet de données. Il représente un type d'entité spécifique. Il contient des attributs qui définissent ou représentent l'entité.

2. Elles peuvent être comparées à d'autres objets du même type. Ex: Un nombre peut être supérieur, inférieur ou égal à un autre nombre.

Python 3.7 fournit un décorateur `dataclass` qui est utilisé pour convertir une classe en une dataclass.

```python
class Number:
    def __init__(self, val):
        self.val = val

obj = Number(2)
obj.val
```

```output
2
```

avec dataclass

```python
# Dataclass: génère automatiquement les méthodes __init__ et __repr__
from dataclasses import dataclass

@dataclass  # Le décorateur convertit la classe en dataclass
class Number:
    val: int  # Annotation de type requise

obj = Number(2)  # __init__ créé automatiquement
obj.val
```

```output
2
```

## Valeurs par défaut

Il est facile d'ajouter des valeurs par défaut aux champs de votre classe de données.

```python
# Dataclass avec valeurs par défaut : les champs avec des valeurs par défaut doivent suivre les champs requis
@dataclass
class Product:
    name: str        # Champ requis
    count: int = 0   # Champ optionnel avec valeur par défaut
    price: float = 0.0  # Champ optionnel avec valeur par défaut

obj = Product("Python")  # Seul le nom est requis, les autres utilisent les valeurs par défaut
obj.name
```

```output
Python
```

```python
obj.count
```

```output
0
```

```python
obj.price
```

```output
0.0
```

## Indications de type (Type hints)

Il est obligatoire de définir le type de données dans la dataclass. Cependant, si vous préférez ne pas spécifier le type de données, utilisez `typing.Any`.

```python
from dataclasses import dataclass
from typing import Any

@dataclass
class WithoutExplicitTypes:
   name: Any
   value: Any = 42
```

## Liens pertinents

- <router-link to="/cheatsheet/oop-basics">Bases de l'OOP</router-link>
- <router-link to="/cheatsheet/decorators">Décorateurs</router-link>
- <router-link to="/blog/python-data-types">Article de blog sur les types de données Python</router-link>
- <router-link to="/builtin/object">object()</router-link>
- <router-link to="/builtin/repr">repr()</router-link>
- <router-link to="/builtin/type">type()</router-link>
