---
title: 'Module Shelve Python - Aide-mémoire Python'
description: 'Une « étagère » (shelf) est un objet persistant, similaire à un dictionnaire. Une étagère peut contenir des objets Python arbitraires — tout ce que le module pickle peut gérer.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Module Shelve Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    À partir de la <a target="_blank" href="https://docs.python.org/3/library/shelve.html">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Une « étagère » (shelf) est un objet persistant ressemblant à un dictionnaire. La différence avec les bases de données « dbm » est que les valeurs (et non les clés !) dans une étagère peuvent être des objets Python essentiellement arbitraires — tout ce que le module pickle peut gérer. Cela inclut la plupart des instances de classe, les types de données récursifs et les objets contenant de nombreux sous-objets partagés. Les clés sont des chaînes de caractères ordinaires.
  </base-disclaimer-content>
</base-disclaimer>

## Sauvegarder des variables

```python
import shelve

wife = ['Pretty', 'Lovely', 'Nice']
# Ouvrir le fichier d'étagère et sauvegarder les données
with shelve.open('mydata') as shelf_file:
    shelf_file['wife'] = wife
```

## Ouvrir et lire des variables

```python
# Ouvrir le fichier d'étagère et lire les données
with shelve.open('mydata') as shelf_file:
    print(type(shelf_file))
    # Accéder à la valeur stockée par clé
    print(shelf_file['wife'])
```

```output
<class 'shelve.DbfilenameShelf'>
['Pretty', 'Lovely', 'Nice']
```

Tout comme les dictionnaires, les valeurs de `shelf` ont des méthodes `keys()` et `values()` qui renverront des valeurs de type liste des clés et des valeurs dans l'étagère. Puisque ces méthodes renvoient des valeurs de type liste au lieu de vraies listes, vous devez les passer à la fonction `list()` pour les obtenir sous forme de liste.

```python
# Accéder à toutes les clés et valeurs dans l'étagère
with shelve.open('mydata') as shelf_file:
    print(list(shelf_file.keys()))
    print(list(shelf_file.values()))
```

```output
['wife']
[['Pretty', 'Lovely', 'Nice']]
```

## Liens pertinents

- <router-link to="/cheatsheet/reading-and-writing-files">Cheatsheet : Lecture et Écriture de Fichiers</router-link>
- <router-link to="/cheatsheet/dictionaries">Cheatsheet : Dictionnaires</router-link>
- <router-link to="/cheatsheet/context-manager">Cheatsheet : Gestionnaires de Contexte</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
