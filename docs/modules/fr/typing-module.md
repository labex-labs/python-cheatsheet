---
title: "Module Typing Python - Aide-mémoire Python"
description: "Le module `typing` fournit des annotations de type pour les arguments de fonctions, les valeurs de retour et les structures de données."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Module Typing Python
</base-title>

Le module `typing` fournit des annotations de type pour les arguments de fonctions, les valeurs de retour et les structures de données.

```python
from typing import TypedDict
```

Les annotations de type ne changent pas la façon dont Python exécute votre programme. Elles aident les éditeurs, les linters et les lecteurs à comprendre quels types de valeurs votre code attend.

## Annoter les signatures de fonctions

```python
def greet(name: str) -> str:
    return f'Hello {name}'

print(greet('Ada'))
```

```output
Hello Ada
```

L’annotation `name: str` signifie que la fonction attend une chaîne. L’annotation `-> str` signifie qu’elle doit renvoyer une chaîne.

## Types de conteneurs courants

Utilisez les annotations de type pour décrire la forme de vos données.

```python
def average(values: list[float]) -> float:
    return sum(values) / len(values)

print(average([1.0, 2.0, 3.0]))
```

```output
2.0
```

Les annotations de type sous la forme `list[str]` nécessitent Python 3.9 ou plus.

## Valeurs optionnelles

Utilisez `| None` lorsqu’une valeur peut être absente.

```python
def find_user(user_id: int) -> str | None:
    if user_id == 1:
        return 'Ada'
    return None

print(find_user(1))
print(find_user(2))
```

```output
Ada
None
```

La syntaxe d’union `X | Y` nécessite Python 3.10 ou plus.

## TypedDict

`TypedDict` décrit des objets de type dictionnaire avec des clés fixes.

```python
from typing import TypedDict

class User(TypedDict):
    name: str
    active: bool

user: User = {'name': 'Ada', 'active': True}
print(user['name'])
```

```output
Ada
```

## Alias de type

Un alias de type donne un nom lisible à un type plus complexe.

```python
Coordinates = tuple[float, float]

def show_location(point: Coordinates) -> str:
    return f'{point[0]}, {point[1]}'

print(show_location((12.5, 35.8)))
```

```output
12.5, 35.8
```

## Liens pertinents

- <router-link to="/cheatsheet/functions">Aide-mémoire : Fonctions</router-link>
- <router-link to="/cheatsheet/dictionaries">Aide-mémoire : Dictionnaires</router-link>
- <router-link to="/cheatsheet/dataclasses">Aide-mémoire : Data classes</router-link>
