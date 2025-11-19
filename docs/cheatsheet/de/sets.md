---
title: 'Python Sets - Python Spickzettel'
description: 'Python bietet integrierte Datentypen zur Datenorganisation, darunter Listen, Dictionaries, Tupel und Sets.'
labUrl: 'https://labex.io/de/labs/python-python-sets-633665?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Mengen
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Python ist mit mehreren eingebauten Datentypen ausgestattet, die uns bei der Organisation unserer Daten helfen. Zu diesen Strukturen gehören Listen, Dictionaries, Tupel und **Mengen** (Sets).

<base-disclaimer>
  <base-disclaimer-title>
    Aus der Python 3 <a target="_blank" href="https://docs.python.org/3/tutorial/datastructures.html#sets">Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Eine Menge ist eine ungeordnete Sammlung ohne doppelte Elemente. Zu den grundlegenden Verwendungszwecken gehören die Mitgliedschaftsprüfung und das Eliminieren doppelter Einträge.
  </base-disclaimer-content>
</base-disclaimer>

Lesen Sie <router-link to="/blog/python-sets-what-why-how">Python Sets: What, Why and How</router-link> für eine tiefere Referenz.

## Initialisieren einer Menge

Es gibt zwei Möglichkeiten, Mengen zu erstellen: mit geschweiften Klammern `{}` und der eingebauten Funktion `set()`.

<base-warning>
  <base-warning-title>
    Leere Mengen
  </base-warning-title>
  <base-warning-content>
    Stellen Sie beim Erstellen einer Menge sicher, dass Sie nicht leere geschweifte Klammern <code>{}</code> verwenden, da Sie sonst stattdessen ein leeres Dictionary erhalten.
  </base-warning-content>
</base-warning>

```python
# Create set using curly braces or set() function
s = {1, 2, 3}  # Using curly braces
s = set([1, 2, 3])  # Using set() constructor

# Warning: empty {} creates a dictionary, not a set
s = {}  # this will create a dictionary instead of a set
type(s)  # Returns <class 'dict'>
```

```output
<class 'dict'>
```

## Ungeordnete Sammlungen eindeutiger Elemente

Eine Menge entfernt automatisch alle doppelten Werte.

```python
# Sets automatically remove duplicates
s = {1, 2, 3, 2, 3, 4}  # Duplicates are removed
s  # Returns {1, 2, 3, 4}
```

```output
{1, 2, 3, 4}
```

Und als ungeordneter Datentyp können sie nicht indiziert werden.

```python
s = {1, 2, 3}
s[0]
```

```output
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'set' object does not support indexing
```

## set add und update

Mit der Methode `add()` können wir ein einzelnes Element zur Menge hinzufügen.

```python
# add() method: add a single element to the set
s = {1, 2, 3}
s.add(4)  # Add element 4
s
```

```output
{1, 2, 3, 4}
```

Und mit `update()` mehrere:

```python
# update() method: add multiple elements from an iterable
s = {1, 2, 3}
s.update([2, 3, 4, 5, 6])  # Add multiple elements (duplicates ignored)
s
```

```output
{1, 2, 3, 4, 5, 6}
```

## set remove und discard

Beide Methoden entfernen ein Element aus der Menge, aber `remove()` löst einen `key error` aus, wenn der Wert nicht existiert.

```python
# remove() method: remove element, raises KeyError if not found
s = {1, 2, 3}
s.remove(3)  # Remove element 3
s
```

```output
{1, 2}
```

```python
s.remove(3)
```

```output
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
KeyError: 3
```

`discard()` löst keine Fehler aus.

```python
# discard() method: remove element, no error if not found
s = {1, 2, 3}
s.discard(3)  # Remove element 3 (safe, no error if missing)
s
```

```output
{1, 2}
```

```python
s.discard(3)
```

## set union

`union()` oder `|` erstellt eine neue Menge mit allen Elementen aus den angegebenen Mengen.

```python
# union(): combine all elements from multiple sets (no duplicates)
s1 = {1, 2, 3}
s2 = {3, 4, 5}
s1.union(s2)  # or 's1 | s2' - returns {1, 2, 3, 4, 5}
```

```output
{1, 2, 3, 4, 5}
```

## set intersection

`intersection()` oder `&` gibt eine Menge mit nur den Elementen zurück, die allen gemeinsam sind.

```python
# intersection(): return elements common to all sets
s1 = {1, 2, 3}
s2 = {2, 3, 4}
s3 = {3, 4, 5}
s1.intersection(s2, s3)  # or 's1 & s2 & s3' - returns {3}
```

```output
{3}
```

## set difference

`difference()` oder `-` gibt nur die Elemente zurück, die für die erste Menge (die aufgerufene Menge) eindeutig sind.

```python
# difference(): return elements in first set but not in others
s1 = {1, 2, 3}
s2 = {2, 3, 4}

s1.difference(s2)  # or 's1 - s2' - returns {1}
```

```output
{1}
```

```python
s2.difference(s1) # or 's2 - s1'
```

```output
{4}
```

## set symmetric_difference

`symmetric_difference()` oder `^` gibt alle Elemente zurück, die sich nicht gemeinsam sind.

```python
# symmetric_difference(): return elements in either set, but not both
s1 = {1, 2, 3}
s2 = {2, 3, 4}
s1.symmetric_difference(s2)  # or 's1 ^ s2' - returns {1, 4}
```

```output
{1, 4}
```

## Relevant links

- <router-link to="/blog/python-data-types">Python Data Types Blog Post</router-link>
- <router-link to="/blog/python-sets-what-why-how">Python Sets: What, Why and How</router-link>
- <router-link to="/cheatsheet/dictionaries">Python Dictionaries</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Python Lists and Tuples</router-link>
