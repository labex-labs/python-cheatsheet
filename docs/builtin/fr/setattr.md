---
title: 'Fonction intégrée Python setattr() - Aide-mémoire Python'
description: "Ceci est l'équivalent de getattr(). Les arguments sont un objet, une chaîne de caractères et une valeur arbitraire. La chaîne peut nommer un attribut existant ou un nouvel attribut. La fonction assigne la valeur à l'attribut, si l'objet le permet. Par exemple, setattr(x, 'foobar', 123) est équivalent à x.foobar = 123."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée Python setattr()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Extrait de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#setattr">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Ceci est l'équivalent de <router-link to="/builtin/getattr">getattr()</router-link>. Les arguments sont un objet, une chaîne de caractères et une valeur arbitraire. La chaîne peut nommer un attribut existant ou un nouvel attribut. La fonction assigne la valeur à l'attribut, à condition que l'objet le permette. Par exemple, setattr(x, 'foobar', 123) est équivalent à x.foobar = 123.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `setattr()` est une fonction intégrée de Python qui vous permet de définir la valeur d'un attribut d'un objet. Elle prend trois arguments : l'objet, le nom de l'attribut (sous forme de chaîne de caractères) et la valeur que vous souhaitez assigner à cet attribut.

Ceci est particulièrement utile lorsque le nom de l'attribut est déterminé dynamiquement à l'exécution. Au lieu d'utiliser la notation par point (`object.attribute = value`), qui nécessite de connaître le nom de l'attribut à l'avance, `setattr()` vous permet d'utiliser une variable.

### Exemples

Voici comment vous pouvez utiliser `setattr()` pour ajouter ou modifier des attributs :

```python
class Person:
    name = "John"

p = Person()

# Définir l'attribut 'age' à 30
setattr(p, 'age', 30)

print(p.age)

# Modifier l'attribut 'name'
setattr(p, 'name', 'Jane')
print(p.name)
```

Sortie :

```plaintext
30
Jane
```

## Liens pertinents

- <router-link to="/cheatsheet/oop-basics">Cheatsheet : Bases de l'OOP</router-link>
- <router-link to="/builtin/object">object()</router-link>
- <router-link to="/builtin/dir">dir()</router-link>
- <router-link to="/builtin/getattr">getattr()</router-link>
- <router-link to="/builtin/hasattr">hasattr()</router-link>
- <router-link to="/builtin/delattr">delattr()</router-link>
