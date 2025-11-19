---
title: 'Fonction intégrée Python getattr() - Aide-mémoire Python'
description: "Retourne la valeur de l'attribut nommé de l'objet. Le nom doit être une chaîne de caractères. Si la chaîne est le nom d'un des attributs de l'objet, le résultat est la valeur de cet attribut."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
La fonction intégrée Python getattr()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#getattr">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retourne la valeur de l'attribut nommé de l'objet. name doit être une chaîne de caractères. Si la chaîne est le nom d'un des attributs de l'objet, le résultat est la valeur de cet attribut.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `getattr()` en Python est une fonction intégrée qui vous permet d'accéder à un attribut d'un objet par son nom, fourni sous forme de chaîne de caractères. C'est une fonctionnalité puissante pour la programmation dynamique, car elle vous permet de récupérer un attribut dont le nom n'est connu qu'à l'exécution. Vous pouvez également fournir une valeur par défaut à retourner si l'attribut n'existe pas, ce qui aide à éviter les erreurs.

## Syntaxe

```python
getattr(object, name)
```

ou

```python
getattr(object, name, default)
```

-`object`: L'objet dont vous souhaitez accéder à l'attribut.

-`name`: Le nom de l'attribut que vous souhaitez récupérer.

-`default`: (Optionnel) La valeur à retourner si l'attribut n'est pas trouvé. Si non fourni, `None` est retourné.

## Exemple

```python
class Example:
    attribute = "Hello, World!"

# Création d'une instance de la classe
obj = Example()

# Utilisation de getattr pour accéder à l'attribut
value = getattr(obj, 'attribute', 'Nothing found')

print(value)
```

```output
Hello, World!
```

Note : Si 'attribute' n'existe pas, 'Nothing found' sera affiché.

## Liens pertinents

- <router-link :to="'/builtin/hasattr'">`hasattr()`</router-link>
- <router-link :to="'/builtin/delattr'">`delattr()`</router-link>
- <router-link :to="'/builtin/setattr'">`setattr()`</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">Bases de l'OOP</router-link>
- <router-link :to="'/builtin/dir'">`dir()`</router-link>
