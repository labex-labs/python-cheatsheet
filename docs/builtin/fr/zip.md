---
title: 'Fonction intégrée zip() de Python - Aide-mémoire Python'
description: 'Itérer en parallèle sur plusieurs itérables, produisant des tuples avec un élément de chacun.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée Python zip()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    À partir de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#zip">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Itérer sur plusieurs itérables en parallèle, produisant des tuples avec un élément de chacun d'eux.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `zip()` en Python est une fonction intégrée qui prend deux ou plusieurs itérables (comme des listes, des tuples ou des chaînes de caractères) et les agrège en un seul itérateur de tuples. Chaque tuple contient des éléments de tous les itérables d'entrée à la même position.

## Examples

```python
furniture = ['table', 'chair', 'rack', 'shelf']
price = [100, 50, 80, 40]

for item, amount in zip(furniture, price):
    print(f'The {item} costs ${amount}')
```

Output:

```plaintext
The table costs $100
The chair costs $50
The rack costs $80
The shelf costs $40
```

## Other Use Cases

La fonction zip en Python fusionne plusieurs itérables en tuples.

```python
# Combining three lists
list1 = [1, 2, 3]
list2 = ['a', 'b', 'c']
list3 = [True, False, True]

zipped = zip(list1, list2, list3)
print(list(zipped))
```

Output:

```plaintext
[(1, 'a', True), (2, 'b', False), (3, 'c', True)]
```

### Unzipping

```python
# Unzipping a zipped object
zipped = [(1, 'a'), (2, 'b'), (3, 'c')]
list1, list2 = zip(*zipped)
print(list1)
print(list2)
```

Output:

```plaintext
(1, 2, 3)
('a', 'b', 'c')
```

## More Examples

### Zipping with Different Lengths

zip arrête de créer des tuples lorsque l'itérable le plus court est épuisé.

```python
numbers = [1, 2, 3]
letters = ['a', 'b']

for num, letter in zip(numbers, letters):
    print(f'{num} -> {letter}')
```

Output:

```plaintext
1 -> a
2 -> b
```

### Using zip with Dictionaries

Vous pouvez utiliser zip pour combiner des clés et des valeurs de deux listes dans un dictionnaire.

```python
keys = ['name', 'age', 'city']
values = ['Alice', 25, 'New York']

my_dict = dict(zip(keys, values))
print(my_dict)
```

Output:

```plaintext
{'name': 'Alice', 'age': 25, 'city': 'New York'}
```

### Using zip with List Comprehensions

Vous pouvez utiliser zip dans des compréhensions de liste pour un code plus concis.

```python
list1 = [1, 2, 3]
list2 = [4, 5, 6]

summed = [x + y for x, y in zip(list1, list2)]
print(summed)
```

Output:

```plaintext
[5, 7, 9]
```

## Relevant links

- <router-link to="/cheatsheet/lists-and-tuples/">Listes et Tuples</router-link>
- <router-link to="/cheatsheet/comprehensions/">Compréhensions</router-link>
- <router-link to="/builtin/slice/">slice()</router-link>
- <router-link to="/builtin/sorted/">sorted()</router-link>
- <router-link to="/builtin/sum/">sum()</router-link>
- <router-link to="/builtin/map/">map()</router-link>
- <router-link to="/builtin/filter/">filter()</router-link>
- <router-link to="/builtin/enumerate/">enumerate()</router-link>
- <router-link to="/modules/itertools-module/">Module itertools</router-link>
