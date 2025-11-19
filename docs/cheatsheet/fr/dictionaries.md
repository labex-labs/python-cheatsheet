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
    De la documentation Python 3 <a target="_blank" href="https://docs.python.org/3/tutorial/datastructures.html#dictionaries">documentation</a>
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

La méthode `values()` obtient les **valeurs** du dictionnaire :

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

La méthode `keys()` obtient les **clés** du dictionnaire :

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

La méthode `items()` obtient les **éléments** d'un dictionnaire et les retourne sous forme de <router-link to=/cheatsheet/lists-and-tuples#the-tuple-data-type>Tuple</router-link> :

```python
pet = {'color': 'red', 'age': 42}
for item in pet.items():
    print(item)
```

```output
('color', 'red')
('age', 42)
```

En utilisant les méthodes `keys()`, `values()` et `items()`, une boucle for peut itérer respectivement sur les clés, les valeurs ou les paires clé-valeur dans un dictionnaire.

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

## Ajouter des éléments avec setdefault()

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

### del()

La méthode `del()` supprime un élément basé sur une clé donnée.

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

## Vérifier les clés dans un Dictionnaire

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

## Vérifier les valeurs dans un Dictionnaire

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

Pour Python 3.5 et versions ultérieures :

```python
dict_a = {'a': 1, 'b': 2}
dict_b = {'b': 3, 'c': 4}
dict_c = {**dict_a, **dict_b}
dict_c
```

```output
{'a': 1, 'b': 3, 'c': 4}
```

## Liens pertinents

- <router-link to="/blog/python-data-types">Article de blog sur les types de données Python</router-link>
- <router-link to="/blog/python-easy-args-kwargs">Python \*args et \*\*kwargs Facilement Expliqués</router-link>
- <router-link to="/cheatsheet/comprehensions">Compréhensions</router-link>
- <router-link to="/cheatsheet/args-and-kwargs">Args et Kwargs</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">Compréhensions Python Étape par Étape</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
