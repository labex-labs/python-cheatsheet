---
title: 'Dictionnaires Python - Aide-mémoire Python'
description: 'En Python, un dictionnaire est une collection ordonnée (depuis Python > 3.7) de paires clé-valeur.'
labUrl: 'https://labex.io/fr/labs/python-python-dictionaries-633655?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Dictionnaires Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

En Python, un dictionnaire est une collection _ordonnée_ (à partir de Python > 3.7) de paires `clé`: `valeur`.

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/tutorial/datastructures.html#dictionaries">documentation</a> Python 3
  </base-disclaimer-title>
  <base-disclaimer-content>
    Les principales opérations sur un dictionnaire sont de stocker une valeur avec une certaine clé et d'extraire la valeur étant donnée la clé. Il est également possible de supprimer une paire clé:valeur avec <code>del</code>.
  </base-disclaimer-content>
</base-disclaimer>

Exemple de dictionnaire :

```python
# Dictionnaire : collection de paires clé-valeur
my_cat = {
    'size': 'fat',          # clé: 'size', valeur: 'fat'
    'color': 'gray',         # clé: 'color', valeur: 'gray'
    'disposition': 'loud'    # clé: 'disposition', valeur: 'loud'
}
```

## Définir une clé, une valeur en utilisant l'opérateur de sous-indice `[]`

```python
# Ajouter ou mettre à jour une entrée de dictionnaire en utilisant l'opérateur de sous-indice
my_cat = {
 'size': 'fat',
 'color': 'gray',
 'disposition': 'loud',
}
my_cat['age_years'] = 2  # Ajouter une nouvelle paire clé-valeur
print(my_cat)
```

```output
{'size': 'fat', 'color': 'gray', 'disposition': 'loud', 'age_years': 2}
```

## Obtenir la valeur en utilisant l'opérateur de sous-indice `[]`

Si la clé n'est pas présente dans le dictionnaire, une <a target="_blank" href="https://docs.python.org/3/library/exceptions.html#KeyError">`KeyError`</a> est levée.

```python
my_cat = {
 'size': 'fat',
 'color': 'gray',
 'disposition': 'loud',
}
print(my_cat['size'])
```

```output
fat
```

```python
print(my_cat['eye_color'])
```

```output
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
KeyError: 'eye_color'
```

## values()

La méthode `values()` récupère les **valeurs** du dictionnaire :

```python
# Itérer sur les valeurs du dictionnaire en utilisant la méthode .values()
pet = {'color': 'red', 'age': 42}
for value in pet.values():  # Boucler sur toutes les valeurs
    print(value)
```

```output
red
42
```

## keys()

La méthode `keys()` récupère les **clés** du dictionnaire :

```python
# Itérer sur les clés du dictionnaire en utilisant la méthode .keys()
pet = {'color': 'red', 'age': 42}
for key in pet.keys():  # Boucler sur toutes les clés
    print(key)
```

```output
color
age
```

Il n'est pas nécessaire d'utiliser **.keys()** car par défaut, vous parcourrez les clés :

```python
# Itérer directement sur le dictionnaire parcourt les clés (comportement par défaut)
pet = {'color': 'red', 'age': 42}
for key in pet:  # Équivalent à for key in pet.keys()
    print(key)
```

```output
color
age
```

## items()

La méthode `items()` récupère les **éléments** d'un dictionnaire et les retourne sous forme de <router-link to=/cheatsheet/lists-and-tuples#the-tuple-data-type>Tuple</router-link> :

```python
pet = {'color': 'red', 'age': 42}
for item in pet.items():
    print(item)
```

```output
('color', 'red')
('age', 42)
```

En utilisant les méthodes `keys()`, `values()` et `items()`, une boucle for peut itérer respectivement sur les clés, les valeurs ou les paires clé-valeur d'un dictionnaire.

```python
# Itérer sur les paires clé-valeur en utilisant la méthode .items()
pet = {'color': 'red', 'age': 42}
for key, value in pet.items():  # Dépaqueter le tuple en clé et valeur
    print(f'Key: {key} Value: {value}')
```

```output
Key: color Value: red
Key: age Value: 42
```

## get()

La méthode `get()` retourne la valeur d'un élément avec la clé donnée. Si la clé n'existe pas, elle retourne `None` :

```python
# Méthode .get() : récupérer la valeur en toute sécurité, retourne None si la clé n'existe pas
wife = {'name': 'Rose', 'age': 33}

f'My wife name is {wife.get("name")}'  # Retourne 'Rose'
```

```output
'My wife name is Rose'
```

```python
f'She is {wife.get("age")} years old.'
```

```output
'She is 33 years old.'
```

```python
f'She is deeply in love with {wife.get("husband")}'
```

```output
'She is deeply in love with None'
```

Vous pouvez également changer la valeur par défaut `None` par celle de votre choix :

```python
wife = {'name': 'Rose', 'age': 33}

f'She is deeply in love with {wife.get("husband", "lover")}'
```

```output
'She is deeply in love with lover'
```

## Ajout d'éléments avec setdefault()

Il est possible d'ajouter un élément à un dictionnaire de cette manière :

```python
wife = {'name': 'Rose', 'age': 33}
if 'has_hair' not in wife:
    wife['has_hair'] = True
```

En utilisant la méthode `setdefault`, nous pouvons rendre le même code plus court :

```python
wife = {'name': 'Rose', 'age': 33}
wife.setdefault('has_hair', True)
wife
```

```output
{'name': 'Rose', 'age': 33, 'has_hair': True}
```

## Suppression d'éléments

### pop()

La méthode `pop()` supprime et retourne un élément basé sur une clé donnée.

```python
wife = {'name': 'Rose', 'age': 33, 'hair': 'brown'}
wife.pop('age')
```

```output
33
```

```python
wife
```

```output
{'name': 'Rose', 'hair': 'brown'}
```

<BaseQuiz id="cheatsheet-dictionaries-1" correct="B">
<template #question>
Que fait <code>pop()</code> lorsqu'il est appelé sur un dictionnaire ?
</template>

<BaseQuizOption value="A">A. Supprime uniquement la paire clé-valeur</BaseQuizOption>
<BaseQuizOption value="B" correct>B. Supprime et retourne la valeur pour la clé spécifiée</BaseQuizOption>
<BaseQuizOption value="C">C. Retourne uniquement la valeur sans la supprimer</BaseQuizOption>
<BaseQuizOption value="D">D. Supprime tous les éléments du dictionnaire</BaseQuizOption>
<BaseQuizAnswer>La méthode <code>pop()</code> supprime la paire clé-valeur pour la clé spécifiée et retourne la valeur. Si la clé n'existe pas, elle lève une <code>KeyError</code> (sauf si vous fournissez une valeur par défaut).</BaseQuizAnswer>
</BaseQuiz>

### popitem()

La méthode `popitem()` supprime le dernier élément d'un dictionnaire et le retourne.

```python
wife = {'name': 'Rose', 'age': 33, 'hair': 'brown'}
wife.popitem()
```

```output
('hair', 'brown')
```

```python
wife
```

```output
{'name': 'Rose', 'age': 33}
```

### del

La méthode `del` supprime un élément basé sur une clé donnée.

```python
wife = {'name': 'Rose', 'age': 33, 'hair': 'brown'}
del wife['age']
wife
```

```output
{'name': 'Rose', 'hair': 'brown'}
```

### clear()

La méthode `clear()` supprime tous les éléments d'un dictionnaire.

```python
wife = {'name': 'Rose', 'age': 33, 'hair': 'brown'}
wife.clear()
wife
```

```output
{}
```

## Vérification des clés dans un Dictionnaire

```python
person = {'name': 'Rose', 'age': 33}

'name' in person.keys()
```

```output
True
```

```python
'height' in person.keys()
```

```output
False
```

```python
'skin' in person # Vous pouvez omettre keys()
```

```output
False
```

## Vérification des valeurs dans un Dictionnaire

```python
person = {'name': 'Rose', 'age': 33}

'Rose' in person.values()
```

```output
True
```

```python
33 in person.values()
```

```output
True
```

## Affichage soigné (Pretty Printing)

```python
import pprint

wife = {'name': 'Rose', 'age': 33, 'has_hair': True, 'hair_color': 'brown', 'height': 1.6, 'eye_color': 'brown'}
pprint.pprint(wife)
```

```output
{'age': 33,
 'eye_color': 'brown',
 'hair_color': 'brown',
 'has_hair': True,
 'height': 1.6,
 'name': 'Rose'}
```

## Fusionner deux dictionnaires

Pour Python 3.5 et supérieur :

```python
dict_a = {'a': 1, 'b': 2}
dict_b = {'b': 3, 'c': 4}
dict_c = {**dict_b, **dict_a}
dict_c
```

```output
{'b': 2, 'c': 4, 'a': 1}
```

<BaseQuiz id="cheatsheet-dictionaries-2" correct="B">
<template #question>
Lors de la fusion de deux dictionnaires en utilisant <code>{**dict_b, **dict_a}</code>, que se passe-t-il si les deux dictionnaires ont la même clé ?
</template>

<BaseQuizOption value="A">A. La valeur de <code>dict_b</code> écrase la valeur de <code>dict_a</code></BaseQuizOption>
<BaseQuizOption value="B" correct>B. La valeur de <code>dict_a</code> écrase la valeur de <code>dict_b</code></BaseQuizOption>
<BaseQuizOption value="C">C. Les deux valeurs sont conservées dans une liste</BaseQuizOption>
<BaseQuizOption value="D">D. Une erreur est levée</BaseQuizOption>
<BaseQuizAnswer>Lors de la fusion de dictionnaires avec l'opérateur de dépaquetage <code>\*\*</code>, si les deux dictionnaires ont la même clé, la valeur du dictionnaire qui vient après (dans ce cas <code>dict_a</code>) écrase la valeur du dictionnaire précédent.</BaseQuizAnswer>
</BaseQuiz>

## Liens pertinents

- <router-link to="/blog/python-data-types">Article de blog sur les types de données Python</router-link>
- <router-link to="/blog/python-easy-args-kwargs">Les \*args et \*\*kwargs Python expliqués simplement</router-link>
- <router-link to="/cheatsheet/comprehensions">Compréhensions</router-link>
- <router-link to="/cheatsheet/args-and-kwargs">Args et Kwargs</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">Compréhensions Python étape par étape</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
