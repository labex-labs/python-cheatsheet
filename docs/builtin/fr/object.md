---
title: 'Fonction intégrée Python object() - Aide-mémoire Python'
description: "Retourne un nouvel objet sans caractéristiques. object est la base de toutes les classes. Il possède des méthodes communes à toutes les instances des classes Python. Cette fonction n'accepte aucun argument."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée Python object()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Tiré de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#object">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retourne un nouvel objet sans caractéristiques. object est une base pour toutes les classes. Il possède des méthodes communes à toutes les instances des classes Python. Cette fonction n'accepte aucun argument.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `object()` retourne un nouvel objet vide et sans caractéristiques. Cet objet est la base de toutes les classes en Python. Il n'a aucun attribut ou méthode spéciale.

Bien que vous puissiez créer des instances de `object`, ce n'est pas quelque chose que vous ferez souvent dans la programmation quotidienne. C'est plutôt une brique fondamentale du modèle objet de Python.

### Example

```python
# Create a new object
o = object()

# See its type
print(type(o))
```

```output
<class 'object'>
```

Note: Il n'a aucun attribut que vous pouvez définir. `o.name = "test"` lèverait un AttributeError.

## Relevant links

- <router-link to="/cheatsheet/oop-basics">Cheatsheet : Bases de l'OOP</router-link>
- <router-link to="/blog/python-data-types">Blog : Types de données Python</router-link>
- <router-link to="/builtin/isinstance">isinstance()</router-link>
- <router-link to="/builtin/issubclass">issubclass()</router-link>
- <router-link to="/builtin/dir">dir()</router-link>
- <router-link to="/builtin/hasattr">hasattr()</router-link>
- <router-link to="/builtin/getattr">getattr()</router-link>
- <router-link to="/builtin/delattr">delattr()</router-link>
