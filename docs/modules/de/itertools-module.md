---
title: 'Python Itertools Modul - Python Spickzettel'
description: 'Das Itertools-Modul bietet schnelle und speichereffiziente Werkzeuge für die Arbeit mit Iteratoren (wie Listen oder Dictionaries).'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Itertools-Modul
</base-title>

Das Modul _itertools_ ist eine Sammlung von Werkzeugen, die darauf abzielen, schnell und speichereffizient zu sein, wenn mit Iteratoren (wie <router-link to="/cheatsheet/lists-and-tuples">Listen</router-link> oder <router-link to="/cheatsheet/dictionaries">Dictionaries</router-link>) gearbeitet wird.

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a href="https://docs.python.org/3/library/itertools.html">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Das Modul standardisiert einen Kernsatz schneller, speichereffizienter Werkzeuge, die für sich allein oder in Kombination nützlich sind.
    Zusammen bilden sie eine „Iterator-Algebra“, die es ermöglicht, spezialisierte Werkzeuge prägnant und effizient in reinem Python zu konstruieren.
  </base-disclaimer-content>
</base-disclaimer>

Das Modul _itertools_ ist Teil der Standardbibliothek und muss importiert werden. Einige Beispiele verwenden auch das `operator`-Modul.

```python
import itertools
import operator
```

## accumulate()

Erstellt einen Iterator, der die Ergebnisse einer Funktion zurückgibt.

```python
itertools.accumulate(iterable[, func])
```

Beispiel:

```python
data = [1, 2, 3, 4, 5]
# Akkumulieren mit Multiplikationsfunktion
result = itertools.accumulate(data, operator.mul)
for each in result:
    print(each)
```

```output
1
2
6
24
120
```

Der operator.mul nimmt zwei Zahlen und multipliziert sie:

```python
operator.mul(1, 2)
# 2

operator.mul(2, 3)
# 6

operator.mul(6, 4)
# 24

operator.mul(24, 5)
# 120
```

Das Übergeben einer Funktion ist optional:

```python
data = [5, 2, 6, 4, 5, 9, 1]
# Akkumulieren ohne Funktion standardmäßig Addition
result = itertools.accumulate(data)
for each in result:
    print(each)
```

```output
5
7
13
17
22
31
32
```

Wenn keine Funktion angegeben wird, werden die Elemente summiert:

```python
5
5 + 2 = 7
7 + 6 = 13
13 + 4 = 17
17 + 5 = 22
22 + 9 = 31
31 + 1 = 32
```

## combinations()

Nimmt ein Iterable und eine ganze Zahl. Dies erzeugt alle eindeutigen Kombinationen, die aus r Elementen bestehen.

```python
itertools.combinations(iterable, r)
```

Beispiel:

```python
shapes = ['circle', 'triangle', 'square',]
# Alle Kombinationen von 2 Elementen generieren
result = itertools.combinations(shapes, 2)
for each in result:
    print(each)
```

```output
('circle', 'triangle')
('circle', 'square')
('triangle', 'square')
```

## combinations_with_replacement()

Genau wie combinations(), erlaubt aber, dass einzelne Elemente mehr als einmal wiederholt werden.

```python
itertools.combinations_with_replacement(iterable, r)
```

Beispiel:

```python
shapes = ['circle', 'triangle', 'square']
# Kombinationen generieren, die Wiederholungen erlauben
result = itertools.combinations_with_replacement(shapes, 2)
for each in result:
    print(each)
```

```output
('circle', 'circle')
('circle', 'triangle')
('circle', 'square')
('triangle', 'triangle')
('triangle', 'square')
('square', 'square')
```

## count()

Erstellt einen Iterator, der gleichmäßig beabstandete Werte zurückgibt, beginnend mit der Zahl start.

```python
itertools.count(start=0, step=1)
```

Beispiel:

```python
# Zählen beginnend bei 10, inkrementierend um 3
for i in itertools.count(10,3):
    print(i)
    if i > 20:
        break
```

```output
10
13
16
19
22
```

## cycle()

Diese Funktion durchläuft ein Iterable endlos.

```python
itertools.cycle(iterable)
```

Beispiel:

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet']
# Endlos durch Farben zyklisch durchlaufen
for color in itertools.cycle(colors):
    print(color)
```

```output
red
orange
yellow
green
blue
violet
red
orange
```

Wenn das Ende des Iterables erreicht ist, beginnt es wieder von vorne.

## chain()

Nimmt eine Reihe von Iterables und gibt sie als ein langes Iterable zurück.

```python
itertools.chain(*iterables)
```

Beispiel:

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue']
shapes = ['circle', 'triangle', 'square', 'pentagon']
# Mehrere Iterables zu einem verketten
result = itertools.chain(colors, shapes)
for each in result:
    print(each)
```

```output
red
orange
yellow
green
blue
circle
triangle
square
pentagon
```

## compress()

Filtert ein Iterable anhand eines anderen.

```python
itertools.compress(data, selectors)
```

Beispiel:

```python
shapes = ['circle', 'triangle', 'square', 'pentagon']
selections = [True, False, True, False]
# Formen basierend auf booleschen Auswahlen filtern
result = itertools.compress(shapes, selections)
for each in result:
    print(each)
```

```output
circle
square
```

## dropwhile()

Erstellt einen Iterator, der Elemente aus dem Iterable verwirft, solange das Prädikat wahr ist; danach gibt er jedes Element zurück.

```python
itertools.dropwhile(predicate, iterable)
```

Beispiel:

```python
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]
# Elemente verwerfen, solange die Bedingung wahr ist, dann alle verbleibenden zurückgeben
result = itertools.dropwhile(lambda x: x<5, data)
for each in result:
    print(each)
```

```output
5
6
7
8
9
10
1
```

## filterfalse()

Erstellt einen Iterator, der Elemente aus dem Iterable filtert und nur diejenigen zurückgibt, für die das Prädikat Falsch ist.

```python
itertools.filterfalse(predicate, iterable)
```

Beispiel:

```python
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]
# Elemente zurückgeben, für die das Prädikat Falsch ist
result = itertools.filterfalse(lambda x: x<5, data)
for each in result:
    print(each)
```

```output
5
6
7
8
9
10
```

## groupby()

Einfach ausgedrückt gruppiert diese Funktion Elemente zusammen.

```python
itertools.groupby(iterable, key=None)
```

Beispiel:

```python
robots = [
    {"name": "blaster", "faction": "autobot"},
    {"name": "galvatron", "faction": "decepticon"},
    {"name": "jazz", "faction": "autobot"},
    {"name": "metroplex", "faction": "autobot"},
    {"name": "megatron", "faction": "decepticon"},
    {"name": "starcream", "faction": "decepticon"},
]
# Roboter nach Fraktion gruppieren (Iterable muss für korrekte Gruppierung sortiert sein)
for key, group in itertools.groupby(robots, key=lambda x: x['faction']):
    print(key)
    print(list(group))
```

```output
autobot
[{'name': 'blaster', 'faction': 'autobot'}]
decepticon
[{'name': 'galvatron', 'faction': 'decepticon'}]
autobot
[{'name': 'jazz', 'faction': 'autobot'}, {'name': 'metroplex', 'faction': 'autobot'}]
decepticon
[{'name': 'megatron', 'faction': 'decepticon'}, {'name': 'starcream', 'faction': 'decepticon'}]
```

## islice()

Diese Funktion ähnelt stark Slices. Sie ermöglicht es, einen Teil eines Iterables auszuschneiden.

```python
itertools.islice(iterable, start, stop[, step])
```

Beispiel:

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue',]
# Iterable slicen, um die ersten 2 Elemente zu erhalten
few_colors = itertools.islice(colors, 2)
for each in few_colors:
    print(each)
```

```output
red
orange
```

## permutations()

```python
itertools.permutations(iterable, r=None)
```

Beispiel:

```python
alpha_data = ['a', 'b', 'c']
# Alle Permutationen der Elemente generieren
result = itertools.permutations(alpha_data)
for each in result:
    print(each)
```

```output
('a', 'b', 'c')
('a', 'c', 'b')
('b', 'a', 'c')
('b', 'c', 'a')
('c', 'a', 'b')
('c', 'b', 'a')
```

## product()

Erstellt das kartesische Produkt aus einer Reihe von Iterables.

```python
num_data = [1, 2, 3]
alpha_data = ['a', 'b', 'c']
# Kartesisches Produkt der Iterables generieren
result = itertools.product(num_data, alpha_data)
for each in result:
    print(each)
```

```output
(1, 'a')
(1, 'b')
(1, 'c')
(2, 'a')
(2, 'b')
(2, 'c')
(3, 'a')
(3, 'b')
(3, 'c')
```

## repeat()

Diese Funktion wiederholt ein Objekt immer wieder. Es sei denn, es gibt ein `times`-Argument.

```python
itertools.repeat(object[, times])
```

Beispiel:

```python
# Objekt 3 Mal wiederholen
for i in itertools.repeat("spam", 3):
    print(i)
```

```output
spam
spam
spam
```

## starmap()

Erstellt einen Iterator, der die Funktion unter Verwendung von Argumenten berechnet, die aus dem Iterable stammen.

```python
itertools.starmap(function, iterable)
```

Beispiel:

```python
data = [(2, 6), (8, 4), (7, 3)]
# Funktion auf entpackte Argumente aus jedem Tupel anwenden
result = itertools.starmap(operator.mul, data)
for each in result:
    print(each)
```

```output
12
32
21
```

## takewhile()

Das Gegenteil von dropwhile(). Erstellt einen Iterator und gibt Elemente aus dem Iterable zurück, solange das Prädikat wahr ist.

```python
itertools.takewhile(predicate, iterable)
```

Beispiel:

```python
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]
# Elemente nehmen, solange die Bedingung wahr ist, dann stoppen
result = itertools.takewhile(lambda x: x<5, data)
for each in result:
    print(each)
```

```output
1
2
3
4
```

## tee()

Gibt n unabhängige Iteratoren aus einem einzigen Iterable zurück.

```python
itertools.tee(iterable, n=2)
```

Beispiel:

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue']
# Iterable in zwei unabhängige Iteratoren aufteilen
alpha_colors, beta_colors = itertools.tee(colors)
for each in alpha_colors:
    print(each)
```

```output
red
orange
yellow
green
blue
```

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue']
alpha_colors, beta_colors = itertools.tee(colors)
for each in beta_colors:
    print(each)
```

```output
red
orange
yellow
green
blue
```

## zip_longest()

Erstellt einen Iterator, der Elemente aus jedem der Iterables aggregiert. Wenn die Iterables ungleiche Längen haben, werden fehlende Werte mit `fillvalue` aufgefüllt. Die Iteration wird fortgesetzt, bis das längste Iterable erschöpft ist.

```python
itertools.zip_longest(*iterables, fillvalue=None)
```

Beispiel:

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue',]
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]
# Iterables zusammenfügen und fehlende Werte mit None auffüllen
for each in itertools.zip_longest(colors, data, fillvalue=None):
    print(each)
```

```output
('red', 1)
('orange', 2)
('yellow', 3)
('green', 4)
('blue', 5)
(None, 6)
(None, 7)
(None, 8)
(None, 9)
(None, 10)
```

## Relevante Links

- <router-link to="/cheatsheet/control-flow">Spickzettel: Kontrollfluss (for-Schleifen)</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Spickzettel: Listen und Tupel</router-link>
- <router-link to="/cheatsheet/comprehensions">Spickzettel: Comprehensions</router-link>
- <router-link to="/cheatsheet/functions">Spickzettel: Funktionen (Generatoren)</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">Blog: Python Comprehensions Schritt für Schritt</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
- <router-link to="/builtin/next">next()</router-link>
- <router-link to="/builtin/map">map()</router-link>
- <router-link to="/builtin/filter">filter()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
- <router-link to="/builtin/enumerate">enumerate()</router-link>
- <router-link to="/builtin/range">range()</router-link>
