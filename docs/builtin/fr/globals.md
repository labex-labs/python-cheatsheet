---
title: 'Fonction intégrée globals() en Python - Aide-mémoire Python'
description: "Retourne le dictionnaire implémentant l'espace de noms du module actuel. Pour le code dans les fonctions, il est défini lors de la définition de la fonction et reste le même, quel que soit l'endroit où la fonction est appelée."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée Python globals()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    À partir de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#globals">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retourne le dictionnaire implémentant l'espace de noms du module courant. Pour le code à l'intérieur des fonctions, ceci est défini lorsque la fonction est définie et reste le même, quel que soit l'endroit où la fonction est appelée.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `globals()` en Python retourne un dictionnaire représentant la table des symboles globale actuelle. Cela inclut toutes les variables globales, fonctions et autres objets dans la portée courante.

Elle peut être utile pour inspecter l'espace de noms global ou pour accéder dynamiquement aux variables globales par leurs noms sous forme de chaînes de caractères.

### Exemples

```python
# Définir une variable globale
global_var = "Je suis globale"

def my_function():
    # Accéder aux variables globales en utilisant globals()
    global_dict = globals()
    print(global_dict["global_var"])

    # Modifier une variable globale
    global_dict["global_var"] = "Globale modifiée"

my_function()
print(global_var)
```

Sortie :

```plaintext
I am global
Modified global
```

Vous pouvez également utiliser `globals()` pour créer de nouvelles variables globales depuis l'intérieur d'une fonction :

```python
def create_global():
    globals()["new_global"] = "Ceci a été créé dynamiquement"

create_global()
print(new_global)
```

Sortie :

```plaintext
This was created dynamically
```

## Liens pertinents

- <router-link :to="'/builtin/locals'">`locals()`</router-link>
- <router-link :to="'/builtin/dir'">`dir()`</router-link>
- <router-link :to="'/builtin/exec'">`exec()`</router-link>
- <router-link :to="'/builtin/eval'">`eval()`</router-link>
- <router-link :to="'/cheatsheet/functions'">Functions</router-link>
