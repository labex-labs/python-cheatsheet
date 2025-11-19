---
title: 'Fonction intégrée Python delattr() - Aide-mémoire Python'
description: "Ceci est un parent de setattr(). Les arguments sont un objet et une chaîne de caractères. La chaîne doit être le nom d'un des attributs de l'objet. La fonction supprime l'attribut nommé, à condition que l'objet le permette. Par exemple, delattr(x, 'foobar') est équivalent à del x.foobar."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
La fonction intégrée Python delattr()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Tiré de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#delattr">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   C'est un parent de `setattr()`. Les arguments sont un objet et une chaîne de caractères. La chaîne doit être le nom d'un des attributs de l'objet. La fonction supprime l'attribut nommé, à condition que l'objet le permette. Par exemple, `delattr(x, 'foobar')` est équivalent à `del x.foobar`.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `delattr()` en Python est utilisée pour supprimer un attribut d'un objet. C'est l'équivalent de `setattr()` et <router-link to="/builtin/getattr">`getattr()`</router-link>.

## Syntaxe

```python
delattr(object, name)
```

- **object**: L'objet duquel l'attribut doit être supprimé.
- **name**: Le nom de l'attribut à supprimer, donné sous forme de chaîne de caractères.

## Exemples

### Suppression d'un attribut d'un objet

```python
class Person:
    name = "John"
    age = 30

person = Person()
print(person.__dict__)
delattr(person, "age")
print(person.__dict__)
```

```output
{'name': 'John', 'age': 30}
{'name': 'John'}
```

### Suppression d'un attribut inexistant

```python
class Person:
    name = "John"

person = Person()
try:
    delattr(person, "age")
except AttributeError as e:
    print(f"Error: {e}")
```

```output
Error: age
```

## Liens pertinents

- <router-link :to="'/builtin/setattr'">`setattr()`</router-link>
- <router-link :to="'/builtin/getattr'">`getattr()`</router-link>
- <router-link :to="'/builtin/hasattr'">`hasattr()`</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">Bases de l'OOP</router-link>
