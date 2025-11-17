---
title: 'Fonction intégrée Python id() - Aide-mémoire Python'
description: "Retourne « l'identité » d'un objet. Il s'agit d'un entier garanti unique et constant pour cet objet durant son cycle de vie. Deux objets avec des cycles de vie non chevauchants peuvent avoir la même valeur id()."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée Python id()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Tiré de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#id">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retourne « l'identité » d'un objet. Il s'agit d'un entier garanti d'être unique et constant pour cet objet pendant toute sa durée de vie. Deux objets avec des durées de vie qui ne se chevauchent pas peuvent avoir la même valeur id().
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `id()` retourne un entier unique qui identifie un objet en mémoire. Cet ID est garanti d'être unique pendant toute la durée de vie de l'objet. C'est essentiellement l'adresse mémoire de l'objet.

### Exemples

```python
x = 10
y = 10
z = 20

print(id(x))
print(id(y))  # same as id(x) because Python caches small integers
print(id(z))
print(id(1))
print(id('1'))
print(id([1, 2]))
```

Sortie :

```plaintext
4331368528
4331368528
4331368560
4331368496
4331368560
4331368560
```

## Liens pertinents

- <router-link :to="'/builtin/hash'">hash()</router-link>
- <router-link :to="'/builtin/object'">object()</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">Bases de l'OOP</router-link>
- <router-link :to="'/blog/python-data-types'">Types de données Python</router-link>
- <router-link :to="'/builtin/type'">type()</router-link>
