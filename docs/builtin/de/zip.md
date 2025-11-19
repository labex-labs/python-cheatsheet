---
title: 'Python zip()-Funktion – Python Spickzettel'
description: 'Paralleles Iterieren über mehrere Iterables, wobei Tupel mit je einem Element aus jedem erzeugt werden.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python eingebaute Funktion zip()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#zip">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Iteriert parallel über mehrere iterierbare Objekte und erzeugt Tupel mit einem Element aus jedem Objekt.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die `zip()` Funktion in Python ist eine eingebaute Funktion, die zwei oder mehr iterierbare Objekte (wie Listen, Tupel oder Zeichenketten) entgegennimmt und sie zu einem einzigen Iterator von Tupeln zusammenfasst. Jedes Tupel enthält Elemente aus allen Eingabe-Iterables an derselben Position.

## Beispiele

```python
furniture = ['table', 'chair', 'rack', 'shelf']
price = [100, 50, 80, 40]

for item, amount in zip(furniture, price):
    print(f'The {item} costs ${amount}')
```

```output
The table costs $100
The chair costs $50
The rack costs $80
The shelf costs $40
```

## Weitere Anwendungsfälle

Die zip-Funktion in Python fasst mehrere iterierbare Objekte zu Tupeln zusammen.

```python
# Kombinieren von drei Listen
list1 = [1, 2, 3]
list2 = ['a', 'b', 'c']
list3 = [True, False, True]

zipped = zip(list1, list2, list3)
print(list(zipped))
```

```output
[(1, 'a', True), (2, 'b', False), (3, 'c', True)]
```

### Entpacken (Unzipping)

```python
# Entpacken eines gezippten Objekts
zipped = [(1, 'a'), (2, 'b'), (3, 'c')]
list1, list2 = zip(*zipped)
print(list1)
print(list2)
```

```output
(1, 2, 3)
('a', 'b', 'c')
```

## Weitere Beispiele

### Zippen mit unterschiedlichen Längen

zip stoppt die Erstellung von Tupeln, sobald das kürzeste iterierbare Objekt erschöpft ist.

```python
numbers = [1, 2, 3]
letters = ['a', 'b']

for num, letter in zip(numbers, letters):
    print(f'{num} -> {letter}')
```

```output
1 -> a
2 -> b
```

### Verwendung von zip mit Dictionaries

Sie können zip verwenden, um Schlüssel und Werte aus zwei Listen zu einem Dictionary zu kombinieren.

```python
keys = ['name', 'age', 'city']
values = ['Alice', 25, 'New York']

my_dict = dict(zip(keys, values))
print(my_dict)
```

```output
{'name': 'Alice', 'age': 25, 'city': 'New York'}
```

### Verwendung von zip mit List Comprehensions

Sie können zip in List Comprehensions für prägnanteren Code verwenden.

```python
list1 = [1, 2, 3]
list2 = [4, 5, 6]

summed = [x + y for x, y in zip(list1, list2)]
print(summed)
```

```output
[5, 7, 9]
```

## Relevante Links

- <router-link to="/cheatsheet/lists-and-tuples/">Listen und Tupel</router-link>
- <router-link to="/cheatsheet/comprehensions/">Comprehensions</router-link>
- <router-link to="/builtin/slice/">slice()</router-link>
- <router-link to="/builtin/sorted/">sorted()</router-link>
- <router-link to="/builtin/sum/">sum()</router-link>
- <router-link to="/builtin/map/">map()</router-link>
- <router-link to="/builtin/filter/">filter()</router-link>
- <router-link to="/builtin/enumerate/">enumerate()</router-link>
- <router-link to="/modules/itertools-module/">Itertools Modul</router-link>
