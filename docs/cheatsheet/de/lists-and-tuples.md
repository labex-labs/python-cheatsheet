---
title: 'Python Listen und Tupel – Python Spickzettel'
description: 'In Python sind Listen einer der 4 Datentypen, die zur Speicherung von Datensammlungen verwendet werden.'
labUrl: 'https://labex.io/de/labs/python-python-lists-and-tuples-633660?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Listen
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Listen sind einer der 4 Datentypen in Python, die zur Speicherung von Datensammlungen verwendet werden.

```python
# Liste: geordnete Sammlung von Elementen, eingeschlossen in eckige Klammern
['John', 'Peter', 'Debora', 'Charles']
```

## Werte mit Indizes abrufen

```python
# Auf Listenelemente mit Index zugreifen (0-basiert, erstes Element ist Index 0)
furniture = ['table', 'chair', 'rack', 'shelf']

furniture[0]  # Gibt das erste Element zurück: 'table'
```

Output:

```plaintext
'table'
```

```python
furniture[1]
```

Output:

```plaintext
'chair'
```

```python
furniture[2]
```

Output:

```plaintext
'rack'
```

```python
furniture[3]
```

Output:

```plaintext
'shelf'
```

## Negative Indizes

```python
# Negativer Index: Greift auf Elemente vom Ende der Liste zu
furniture = ['table', 'chair', 'rack', 'shelf']

furniture[-1]  # Gibt das letzte Element zurück: 'shelf'
```

Output:

```plaintext
'shelf'
```

```python
furniture[-3]
```

Output:

```plaintext
'chair'
```

```python
f'The {furniture[-1]} is bigger than the {furniture[-3]}'
```

Output:

```plaintext
'The shelf is bigger than the chair'
```

## Unterlisten mit Slices abrufen

```python
# Slicing: Unterliste mit der Syntax [start:ende] abrufen (ende ist exklusiv)
furniture = ['table', 'chair', 'rack', 'shelf']

furniture[0:4]  # Gibt Elemente von Index 0 bis 3 zurück (4 ausgeschlossen)
```

Output:

```plaintext
['table', 'chair', 'rack', 'shelf']
```

```python
furniture[1:3]
```

Output:

```plaintext
['chair', 'rack']
```

```python
furniture[0:-1]
```

Output:

```plaintext
['table', 'chair', 'rack']
```

```python
# Slice vom Anfang: Startindex weglassen (standardmäßig 0)
furniture[:2]  # Gibt die ersten beiden Elemente zurück
```

Output:

```plaintext
['table', 'chair']
```

```python
# Slice bis zum Ende: Endindex weglassen (standardmäßig Ende der Liste)
furniture[1:]  # Gibt alle Elemente ab Index 1 bis zum Ende zurück
```

Output:

```plaintext
['chair', 'rack', 'shelf']
```

```python
furniture[:]
```

Output:

```plaintext
['table', 'chair', 'rack', 'shelf']
```

Das Slicing der vollständigen Liste erstellt eine Kopie:

```python
# Slicing erstellt eine Kopie: [:] erstellt eine flache Kopie der Liste
spam = ['cat', 'bat', 'rat', 'elephant']
spam2 = spam[:]  # Erstellt eine Kopie, keine Referenz
spam2
```

Output:

```plaintext
['cat', 'bat', 'rat', 'elephant']
```

```python
spam.append('dog')
spam
```

Output:

```plaintext
['cat', 'bat', 'rat', 'elephant', 'dog']
```

```python
spam2
```

Output:

```plaintext
['cat', 'bat', 'rat', 'elephant']
```

## Die Länge einer Liste mit len() ermitteln

```python
# len() gibt die Anzahl der Elemente in einer Liste zurück
furniture = ['table', 'chair', 'rack', 'shelf']
len(furniture)  # Gibt 4 zurück
```

Output:

```plaintext
4
```

## Werte mit Indizes ändern

```python
# Listenelemente ändern, indem neue Werte Indizes zugewiesen werden
furniture = ['table', 'chair', 'rack', 'shelf']

furniture[0] = 'desk'  # Erstes Element ersetzen
furniture
```

Output:

```plaintext
['desk', 'chair', 'rack', 'shelf']
```

```python
furniture[2] = furniture[1]
furniture
```

Output:

```plaintext
['desk', 'chair', 'chair', 'shelf']
```

```python
furniture[-1] = 'bed'
furniture
```

Output:

```plaintext
['desk', 'chair', 'chair', 'bed']
```

## Konkatenation und Wiederholung

```python
# Listenkonkatenation: zwei Listen mit dem + Operator kombinieren
[1, 2, 3] + ['A', 'B', 'C']  # Gibt [1, 2, 3, 'A', 'B', 'C'] zurück
```

Output:

```plaintext
[1, 2, 3, 'A', 'B', 'C']
```

```python
# Listenwiederholung: Liste mehrmals mit dem * Operator wiederholen
['X', 'Y', 'Z'] * 3  # Gibt ['X', 'Y', 'Z', 'X', 'Y', 'Z', 'X', 'Y', 'Z'] zurück
```

Output:

```plaintext
['X', 'Y', 'Z', 'X', 'Y', 'Z', 'X', 'Y', 'Z']
```

```python
my_list = [1, 2, 3]
my_list = my_list + ['A', 'B', 'C']
my_list
```

Output:

```plaintext
[1, 2, 3, 'A', 'B', 'C']
```

## Verwendung von for-Schleifen mit Listen

```python
# Über Listenelemente mit einer for-Schleife iterieren
furniture = ['table', 'chair', 'rack', 'shelf']

for item in furniture:  # Durch jedes Element iterieren
    print(item)
```

Output:

```plaintext
table
chair
rack
shelf
```

## Den Index in einer Schleife mit enumerate() erhalten

```python
# enumerate() gibt sowohl Index als auch Wert in einer Schleife zurück
furniture = ['table', 'chair', 'rack', 'shelf']

for index, item in enumerate(furniture):  # Index und Element zusammen erhalten
    print(f'index: {index} - item: {item}')
```

Output:

```plaintext
index: 0 - item: table
index: 1 - item: chair
index: 2 - item: rack
index: 3 - item: shelf
```

## Schleife über mehrere Listen mit zip()

```python
# zip() kombiniert mehrere Listen elementweise in einer Schleife
furniture = ['table', 'chair', 'rack', 'shelf']
price = [100, 50, 80, 40]

for item, amount in zip(furniture, price):  # Elemente aus beiden Listen paaren
    print(f'The {item} costs ${amount}')
```

Output:

```plaintext
The table costs $100
The chair costs $50
The rack costs $80
The shelf costs $40
```

## Die Operatoren in und not in

```python
# in Operator: Prüfen, ob ein Element in einer Liste existiert
'rack' in ['table', 'chair', 'rack', 'shelf']  # Gibt True zurück
```

Output:

```plaintext
True
```

```python
'bed' in ['table', 'chair', 'rack', 'shelf']
```

Output:

```plaintext
False
```

```python
furniture = ['table', 'chair', 'rack', 'shelf']
'bed' not in furniture
```

Output:

```plaintext
True
```

```python
'rack' not in furniture
```

Output:

```plaintext
False
```

## Der Trick der Mehrfachzuweisung

Der Trick der Mehrfachzuweisung ist eine Abkürzung, mit der Sie mehrere Variablen mit den Werten in einer Liste in einer einzigen Codezeile zuweisen können. Anstatt also dies zu tun:

```python
furniture = ['table', 'chair', 'rack', 'shelf']
table = furniture[0]
chair = furniture[1]
rack = furniture[2]
shelf = furniture[3]
```

Könnten Sie diese Codezeile eingeben:

```python
furniture = ['table', 'chair', 'rack', 'shelf']
table, chair, rack, shelf = furniture

table
```

Output:

```plaintext
'table'
```

```python
chair
```

Output:

```plaintext
'chair'
```

```python
rack
```

Output:

```plaintext
'rack'
```

```python
shelf
```

Output:

```plaintext
'shelf'
```

Der Trick der Mehrfachzuweisung kann auch verwendet werden, um die Werte in zwei Variablen zu tauschen:

```python
a, b = 'table', 'chair'
a, b = b, a
print(a)
```

Output:

```plaintext
chair
```

```python
print(b)
```

Output:

```plaintext
table
```

## Die index Methode

Die `index`-Methode ermöglicht es Ihnen, den Index eines Wertes zu finden, indem Sie dessen Namen übergeben:

```python
furniture = ['table', 'chair', 'rack', 'shelf']
furniture.index('chair')
```

Output:

```plaintext
1
```

## Werte hinzufügen

### append()

`append` fügt ein Element am Ende einer `list` hinzu:

```python
furniture = ['table', 'chair', 'rack', 'shelf']
furniture.append('bed')
furniture
```

Output:

```plaintext
['table', 'chair', 'rack', 'shelf', 'bed']
```

### insert()

`insert` fügt ein Element an einer bestimmten Position in eine `list` ein:

```python
furniture = ['table', 'chair', 'rack', 'shelf']
furniture.insert(1, 'bed')
furniture
```

Output:

```plaintext
['table', 'bed', 'chair', 'rack', 'shelf']
```

## Werte entfernen

### del()

`del` entfernt ein Element mithilfe des Index:

```python
furniture = ['table', 'chair', 'rack', 'shelf']
del furniture[2]
furniture
```

Output:

```plaintext
['table', 'chair', 'shelf']
```

```python
del furniture[2]
furniture
```

Output:

```plaintext
['table', 'chair']
```

### remove()

`remove` entfernt ein Element mithilfe seines tatsächlichen Wertes:

```python
furniture = ['table', 'chair', 'rack', 'shelf']
furniture.remove('chair')
furniture
```

Output:

```plaintext
['table', 'rack', 'shelf']
```

<base-warning>
  <base-warning-title>
    Wiederholte Elemente entfernen
  </base-warning-title>
  <base-warning-content>
    Wenn der Wert mehrmals in der Liste vorkommt, wird nur das erste Vorkommen des Wertes entfernt.
  </base-warning-content>
</base-warning>

### pop()

Standardmäßig entfernt und gibt `pop` das letzte Element der Liste zurück. Sie können auch den Index des Elements als optionalen Parameter übergeben:

```python
animals = ['cat', 'bat', 'rat', 'elephant']

animals.pop()
```

Output:

```plaintext
'elephant'
```

```python
animals
```

Output:

```plaintext
['cat', 'bat', 'rat']
```

```python
animals.pop(0)
```

Output:

```plaintext
'cat'
```

```python
animals
```

Output:

```plaintext
['bat', 'rat']
```

## Werte mit sort() sortieren

```python
numbers = [2, 5, 3.14, 1, -7]
numbers.sort()
numbers
```

Output:

```plaintext
[-7, 1, 2, 3.14, 5]
```

```python
furniture = ['table', 'chair', 'rack', 'shelf']
furniture.sort()
furniture
```

Output:

```plaintext
['chair', 'rack', 'shelf', 'table']
```

Sie können auch `True` für das Schlüsselwortargument `reverse` übergeben, damit `sort()` die Werte in umgekehrter Reihenfolge sortiert:

```python
furniture.sort(reverse=True)
furniture
```

Output:

```plaintext
['table', 'shelf', 'rack', 'chair']
```

Wenn Sie die Werte in regulärer alphabetischer Reihenfolge sortieren müssen, übergeben Sie `str.lower` für das Schlüsselwortargument `key` im `sort()`-Methodenaufruf:

```python
letters = ['a', 'z', 'A', 'Z']
letters.sort(key=str.lower)
letters
```

Output:

```plaintext
['a', 'A', 'z', 'Z']
```

Sie können die eingebaute Funktion `sorted` verwenden, um eine neue Liste zurückzugeben:

```python
furniture = ['table', 'chair', 'rack', 'shelf']
sorted(furniture)
```

Output:

```plaintext
['chair', 'rack', 'shelf', 'table']
```

## Der Tupel-Datentyp

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://stackoverflow.com/questions/1708510/list-vs-tuple-when-to-use-each">Tupel vs Listen</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Der Hauptunterschied zwischen Tupeln und Listen besteht darin, dass <code>Tupel</code> <i>unveränderliche</i> Objekte sind, während <code>Listen</code> <i>veränderlich</i> sind. Das bedeutet, dass Tupel nicht geändert werden können, während Listen modifiziert werden können. Tupel sind speichereffizienter als Listen.
  </base-disclaimer-content>
</base-disclaimer>

```python
furniture = ('table', 'chair', 'rack', 'shelf')

furniture[0]
```

Output:

```plaintext
'table'
```

```python
furniture[1:3]
```

Output:

```plaintext
('chair', 'rack')
```

```python
len(furniture)
```

Output:

```plaintext
4
```

Die Hauptunterschiede zwischen Tupeln und Listen bestehen darin, dass Tupel, ähnlich wie Strings, unveränderlich sind.

## Konvertierung zwischen list() und tuple()

```python
tuple(['cat', 'dog', 5])
```

Output:

```plaintext
('cat', 'dog', 5)
```

```python
list(('cat', 'dog', 5))
```

Output:

```plaintext
['cat', 'dog', 5]
```

```python
list('hello')
```

Output:

```plaintext
['h', 'e', 'l', 'l', 'o']
```

## Relevante Links

- <router-link to="/blog/python-data-types">Python Data Types: A Visual Guide for Beginners</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">Python Comprehensions Step-by-Step</router-link>
- <router-link to="/cheatsheet/comprehensions">Python Comprehensions</router-link>
- <router-link to="/modules/itertools-module">The itertools Module</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/len">len()</router-link>
