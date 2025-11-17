---
title: 'Fonction intégrée Python hasattr() - Aide-mémoire Python'
description: "Les arguments sont un objet et une chaîne de caractères. Le résultat est Vrai si la chaîne est le nom d'un des attributs de l'objet, Faux sinon. (Ceci est implémenté en appelant getattr(objet, nom) et en vérifiant si cela lève une AttributeError ou non.)"
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
La fonction intégrée Python hasattr()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Tiré de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#hasattr">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Les arguments sont un objet et une chaîne de caractères. Le résultat est `True` si la chaîne est le nom d'un des attributs de l'objet, `False` sinon. (Ceci est implémenté en appelant <router-link to="/builtin/getattr">getattr(object, name)</router-link> et en vérifiant si cela lève une AttributeError ou non.)
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `hasattr()` vérifie si un objet possède un attribut donné. Elle prend l'objet et le nom de l'attribut (sous forme de chaîne de caractères) comme arguments et retourne `True` si l'attribut existe, et `False` sinon.

### Example

```python
class Person:
    name = "John"
    age = 30

p = Person()

print(hasattr(p, 'name'))
print(hasattr(p, 'age'))
print(hasattr(p, 'email'))
```

Output:

```plaintext
True
True
False
```

## Liens pertinents

- <router-link :to="'/builtin/getattr'">`getattr()`</router-link>
- <router-link :to="'/builtin/setattr'">`setattr()`</router-link>
- <router-link :to="'/builtin/delattr'">`delattr()`</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">Bases de l'OOP</router-link>
- <router-link :to="'/builtin/dir'">`dir()`</router-link>
