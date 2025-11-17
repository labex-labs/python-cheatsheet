---
title: 'Fonction intégrée Python locals() - Aide-mémoire Python'
description: "Met à jour et renvoie un dictionnaire représentant la table des symboles locaux actuelle. Les variables libres sont renvoyées par locals() lorsqu'elle est appelée dans des blocs de fonction, mais pas dans des blocs de classe. Notez qu'au niveau du module, locals() et globals() sont le même dictionnaire."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
La fonction intégrée locals() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Tiré de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#locals">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Met à jour et retourne un dictionnaire représentant la table des symboles locale actuelle. Les variables libres sont retournées par locals() lorsqu'elle est appelée dans des blocs de fonction, mais pas dans des blocs de classe. Notez qu'au niveau du module, locals() et <router-link to="/builtin/globals">globals()</router-link> sont le même dictionnaire.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `locals()` retourne un dictionnaire représentant la table des symboles locale actuelle. Cela inclut toutes les variables locales, les arguments et les autres objets dans la portée actuelle.

C'est un outil utile pour inspecter l'espace de noms local.

### Exemple

```python
def my_function(arg1, arg2):
    local_var = "I am local"
    print(locals())

my_function("hello", "world")
```

Sortie :

```plaintext
{'arg1': 'hello', 'arg2': 'world', 'local_var': 'I am local'}
```

## Liens pertinents

- <router-link to="/cheatsheet/debugging">Cheatsheet : Débogage</router-link>
- <router-link to="/cheatsheet/functions">Cheatsheet : Fonctions</router-link>
- <router-link to="/cheatsheet/dictionaries">Cheatsheet : Dictionnaires</router-link>
- <router-link to="/builtin/globals">globals()</router-link>
- <router-link to="/builtin/dir">dir()</router-link>
