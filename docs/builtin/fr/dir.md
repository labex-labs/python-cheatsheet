---
title: 'Fonction intégrée Python dir() - Aide-mémoire Python'
description: 'Sans argument, retourne la liste des noms dans la portée locale actuelle. Avec un argument, tente de retourner une liste des attributs valides pour cet objet.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée Python dir()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    À partir de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#dir">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Sans argument, retourne la liste des noms dans la portée locale actuelle. Avec un argument, tente de retourner une liste d'attributs valides pour cet objet.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `dir()` en Python est une fonction intégrée puissante qui retourne une liste de noms dans l'espace de noms actuel ou les attributs d'un objet donné. Elle est couramment utilisée pour introspecter et explorer des objets, des modules et des classes, vous aidant à découvrir les méthodes, attributs et noms disponibles avec lesquels vous pouvez travailler.

## Syntaxe

```python
dir([object])
```

- `object` (optionnel) : L'objet dont vous souhaitez explorer les attributs. S'il n'est pas fourni, elle retourne les noms dans l'espace de noms actuel.

## Exploration des noms dans l'espace de noms actuel

```python
a = 10
b = "Hello"
def my_function():
    pass

print(dir())
```

```output
['__annotations__', '__builtins__', '__doc__', '__loader__', '__name__', '__package__', '__spec__', 'a', 'b', 'my_function']
```

## Exploration des attributs de module

```python
import math
print(dir(math))
```

```output
['__doc__', '__loader__', '__name__', '__package__', '__spec__', 'acos', 'acosh', 'asin', '... ]
```

## Exploration des attributs d'objet

```python
class MyClass:
    def __init__(self):
        self.x = 5
        self.y = "Hello"

obj = MyClass()
print(dir(obj))
```

```output
['__class__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', ... 'x', 'y']
```

## Utilisation de `dir()` avec des types intégrés

```python
my_list = [1, 2, 3]
print(dir(my_list))
```

```output
[..., 'append', 'clear', 'copy', 'count', 'extend', 'index', 'insert', 'pop', 'remove', 'reverse', 'sort']
```

## Filtrage de la sortie de `dir()`

```python
import math
print([name for name in dir(math) if not name.startswith("__")])
```

```output
['acos', 'acosh', 'asin', 'asinh', 'atan', 'atan2', ... ]
```

## Liens pertinents

- <router-link :to="'/builtin/globals'">`globals()`</router-link>
- <router-link :to="'/builtin/locals'">`locals()`</router-link>
- <router-link :to="'/builtin/hasattr'">`hasattr()`</router-link>
- <router-link :to="'/builtin/getattr'">`getattr()`</router-link>
- <router-link :to="'/cheatsheet/debugging'">Débogage</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">Bases de l'OOP</router-link>
