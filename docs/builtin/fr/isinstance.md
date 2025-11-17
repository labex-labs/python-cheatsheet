---
title: 'Fonction intégrée Python isinstance() - Aide-mémoire Python'
description: "Retourne True si l'objet est une instance de classinfo, ou d'une sous-classe (directe, indirecte ou virtuelle). Retourne False si l'objet n'est pas de ce type. Si classinfo est un tuple de types (ou de tuples imbriqués) ou un type Union, retourne True si l'objet est une instance de l'un des types. Sinon, une TypeError est levée."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée Python isinstance()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Tiré de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#isinstance">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retourne True si l'argument object est une instance de l'argument classinfo, ou d'une sous-classe (directe, indirecte ou virtuelle) de celui-ci. Si object n'est pas un objet du type donné, la fonction retourne toujours False. Si classinfo est un tuple d'objets de type (ou récursivement, d'autres tuples de ce type) ou un Type Union de multiples types, retourne True si object est une instance de l'un des types. Si classinfo n'est pas un type ou un tuple de types et de tels tuples, une exception TypeError est levée.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `isinstance()` vérifie si un objet est une instance d'une classe particulière ou d'une de ses sous-classes. Elle retourne `True` si l'objet est du type spécifié, et `False` sinon.

Vous pouvez également vérifier par rapport à un tuple de types.

### Exemples

**Vérification du type d'un objet :**

```python
my_list = [1, 2, 3]
print(isinstance(my_list, list))
print(isinstance(my_list, tuple))
```

Sortie :

```plaintext
True
False
```

**Vérification par rapport à plusieurs types :**

```python
print(isinstance("hello", (int, str, list)))
```

Sortie :

```plaintext
True
```

```python
isinstance(1, int)
isinstance(1, str)
```

Sortie :

```plaintext
True
False
```

## Liens pertinents

- <router-link :to="'/builtin/issubclass'">`issubclass()`</router-link>
- <router-link :to="'/builtin/type'">`type()`</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">Bases de l'OOP</router-link>
- <router-link :to="'/blog/python-data-types'">Types de données Python</router-link>
- <router-link :to="'/builtin/callable'">`callable()`</router-link>
