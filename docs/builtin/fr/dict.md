---
title: 'Fonction intégrée dict() de Python - Aide-mémoire Python'
description: "Créez un nouveau dictionnaire. L'objet dict est la classe de dictionnaire. Consultez dict et Types de mappage — dict pour la documentation sur cette classe."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
La fonction intégrée Python dict()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    À partir de la <a target="_blank" href="https://docs.python.org/3/library/stdtypes.html#dict">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Crée un nouveau dictionnaire. L'objet `dict` est la classe de dictionnaire.
  </base-disclaimer-content>
</base-disclaimer>

Le constructeur `dict()` en Python est une manière polyvalente de créer des dictionnaires.

Vous pouvez créer un dictionnaire vide, ou créer un dictionnaire à partir d'arguments mots-clés ou à partir d'un <router-link to="/builtin/iter">itérable</router-link> de paires clé-valeur.

## Exemples

**Création d'un dictionnaire vide :**

```python
my_dict = dict()
print(my_dict)
```

Sortie :

```plaintext
{}
```

**Création d'un dictionnaire avec des arguments mots-clés :**

```python
# Utilisation d'arguments mots-clés
my_dict = dict(name="John", age=30)
print(my_dict)
```

Sortie :

```plaintext
{'name': 'John', 'age': 30}
```

**Création d'un dictionnaire à partir d'un itérable :**

```python
my_list = [('name', 'Jane'), ('age', 25)]
my_dict = dict(my_list)
print(my_dict)
```

Sortie :

```plaintext
{'name': 'Jane', 'age': 25}
```

Création d'un dictionnaire vide :

```python
a = dict()
type(a)
```

Sortie :

```plaintext
<class 'dict'>
```

## Liens pertinents

- <router-link :to="'/builtin/iter'">`iter()`</router-link>
- <router-link :to="'/cheatsheet/dictionaries'">Dictionnaires</router-link>
- <router-link :to="'/blog/python-data-types'">Types de données Python</router-link>
- <router-link :to="'/builtin/len'">`len()`</router-link>
- <router-link :to="'/builtin/list'">`list()`</router-link>
- <router-link :to="'/builtin/tuple'">`tuple()`</router-link>
