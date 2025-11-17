---
title: 'Python Sets: Was, Warum und Wie – Python Spickzettel'
description: 'Beim Programmieren gibt es verschiedene Ansätze. Einige gelten als schlecht, andere als klar, prägnant und wartbar – also pythonisch. In diesem Artikel untersuchen wir, wie Python Sets nicht nur die Lesbarkeit verbessern, sondern auch die Ausführungszeit Ihrer Programme beschleunigen können.'
date: 'July 27, 2018'
updated: 'July 3, 2022'
tags: 'python, basics'
socialImage: '/blog/sets.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "Python Sets: Was, Warum und Wie – Python Spickzettel"
    description: "Beim Programmieren gibt es verschiedene Ansätze. Einige gelten als schlecht, andere als klar, prägnant und wartbar – also pythonisch. In diesem Artikel untersuchen wir, wie Python Sets nicht nur die Lesbarkeit verbessern, sondern auch die Ausführungszeit Ihrer Programme beschleunigen können."
    date: "July 27, 2018"
    updated: "July 3, 2022"
    tags: "python, basics"
    socialImage: "/blog/sets.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="Python Sets: Was, Warum und Wie – Python Spickzettel" />

Python ist mit mehreren eingebauten Datentypen ausgestattet, die uns bei der Organisation unserer Daten helfen. Zu diesen Strukturen gehören `lists`, `dictionaries`, `tuples` und `sets`.

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/tutorial/datastructures.html#sets">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Ein <code>set</code> ist eine <b>ungeordnete Sammlung</b> ohne <b>doppelte Elemente</b>. Zu den grundlegenden Anwendungen gehören das <b>Testen der Zugehörigkeit</b> und das <b>Eliminieren doppelter Einträge</b>. Set-Objekte unterstützen auch mathematische Operationen wie <b>Vereinigung</b> (union), <b>Schnittmenge</b> (intersection), <b>Differenz</b> (difference) und <b>symmetrische Differenz</b> (symmetric difference).
  </base-disclaimer-content>
</base-disclaimer>

In diesem Artikel werden wir jedes der in der obigen Definition aufgeführten Elemente überprüfen. Fangen wir gleich an und sehen wir uns an, wie wir sie erstellen können.

## Initialisieren eines Sets

Es gibt zwei Möglichkeiten, ein Set zu erstellen: eine besteht darin, die eingebaute Funktion `set()` zu verwenden und eine `list` von Elementen zu übergeben, und die andere besteht darin, geschweifte Klammern `{}` zu verwenden.

### Initialisieren eines Sets mit der eingebauten Funktion `set()`

```python
>>> s1 = set([1, 2, 3])
>>> s1
{1, 2, 3}
>>> type(s1)
<class 'set'>
```

### Initialisieren eines Sets mit geschweiften Klammern `{}`

```python
>>> s2 = {3, 4, 5}
>>> s2
{3, 4, 5}
>>> type(s2)
<class 'set'>
>>>
```

<base-warning>
  <base-warning-title>
    Leere Sets
  </base-warning-title>
  <base-warning-content>
    Stellen Sie beim Erstellen eines Sets sicher, dass Sie nicht leere geschweifte Klammern <code>{}</code> verwenden, da Sie sonst stattdessen ein leeres Dictionary erhalten.
  </base-warning-content>
</base-warning>

```python
>>> s = {}
>>> type(s)
<class 'dict'>
```

Es ist ein guter Zeitpunkt, um zu erwähnen, dass für die Einfachheit alle in diesem Artikel bereitgestellten Beispiele Ganzzahlen mit einer einzigen Ziffer verwenden, aber Sets alle [hashable](https://docs.python.org/3/glossary.html#term-hashable) Datentypen enthalten können, die Python unterstützt. Mit anderen Worten, Ganzzahlen, Zeichenketten und Tupel, aber nicht _veränderliche_ Elemente wie _Listen_ oder _Dictionaries_:

```python
>>> s = {1, 'coffee', [4, 'python']}
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: unhashable type: 'list'
```

Nachdem Sie nun wissen, wie man ein Set erstellt und welche Art von Elementen es enthalten kann, fahren wir fort und sehen, _warum_ wir sie immer in unserem Arsenal haben sollten.

## Warum Sie sie verwenden sollten

Wir können Code auf mehr als eine Weise schreiben. Einige gelten als ziemlich schlecht, andere als _klar, prägnant und wartbar_. Oder "[_pythonisch_](http://docs.python-guide.org/en/latest/writing/style/)".

<base-disclaimer>
  <base-disclaimer-title>
    Aus <a target="_blank" href="http://docs.python-guide.org/en/latest/">The Hitchhiker’s Guide to Python</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Wenn ein erfahrener Python-Entwickler (ein Pythonista) Teile des Codes als nicht „pythonisch“ bezeichnet, meint er normalerweise, dass diese Codezeilen nicht den allgemeinen Richtlinien folgen und ihre Absicht nicht auf die als am besten (hören Sie: am lesbarsten) angesehene Weise ausdrücken.
  </base-disclaimer-content>
</base-disclaimer>

Beginnen wir damit, zu untersuchen, wie Python-Sets uns nicht nur bei der Lesbarkeit, sondern auch bei der Ausführungszeit unseres Programms helfen können.

## Ungeordnete Sammlung von Elementen

Zuerst das Wichtigste: Sie können nicht über Indizes auf ein `set`-Objekt zugreifen.

```python
>>> s = {1, 2, 3}
>>> s[0]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'set' object does not support indexing
```

Oder sie mit Slices ändern:

```python
>>> s[0:2]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'set' object is not subscriptable
```

_ABER_, wenn wir Duplikate entfernen oder mathematische Operationen wie das Kombinieren von Listen (Vereinigungen) durchführen müssen, können und _sollten_ wir immer Sets verwenden.

Ich muss erwähnen, dass **beim Iterieren Listen Sets übertreffen**, also bevorzugen Sie sie, wenn das Ihr Bedarf ist. Warum? Nun, dieser Artikel soll nicht die inneren Funktionsweisen von Sets erklären, aber hier sind ein paar Links, wo Sie darüber lesen können:

- [Time Complexity](https://wiki.python.org/moin/TimeComplexity)
- [How is set() implemented?](https://stackoverflow.com/questions/3949310/how-is-set-implemented)
- [Python Sets vs Lists](https://stackoverflow.com/questions/2831212/python-sets-vs-lists)
- [Is there any advantage or disadvantage to using sets over list comps to ensure a list of unique entries?](https://mail.python.org/pipermail/python-list/2011-June/606738.html)

## Keine doppelten Elemente

Während ich dies schreibe, kann ich nicht aufhören, an all die Male zu denken, in denen ich eine _for_-Schleife und die _if_-Anweisung verwendet habe, um doppelte Elemente in einer Liste zu überprüfen und zu entfernen. Mein Gesicht wird rot, wenn ich mich daran erinnere, dass ich mehr als einmal etwas Ähnliches geschrieben habe:

```python
>>> my_list = [1, 2, 3, 2, 3, 4]
>>> no_duplicate_list = []
>>> for item in my_list:
...     if item not in no_duplicate_list:
...             no_duplicate_list.append(item)
...
>>> no_duplicate_list
[1, 2, 3, 4]
```

Oder eine List Comprehension verwendet habe:

```python
>>> my_list = [1, 2, 3, 2, 3, 4]
>>> no_duplicate_list = []
>>> [no_duplicate_list.append(item) for item in my_list if item not in no_duplicate_list]
[None, None, None, None]
>>> no_duplicate_list
[1, 2, 3, 4]
```

Aber das ist in Ordnung, nichts davon ist mehr wichtig, weil wir jetzt die Sets haben:

```python
>>> my_list = [1, 2, 3, 2, 3, 4]
>>> no_duplicate_list = list(set(my_list))
>>> no_duplicate_list
[1, 2, 3, 4]
```

## Set-Performance

Verwenden wir nun das _timeit_-Modul und sehen uns die Ausführungszeit von Listen und Sets beim Entfernen von Duplikaten an:

```python
>>> from timeit import timeit
>>> def no_duplicates(list):
...     no_duplicate_list = []
...     [no_duplicate_list.append(item) for item in list if item not in no_duplicate_list]
...     return no_duplicate_list
...
>>> # zuerst sehen wir uns an, wie die Liste abschneidet:
>>> print(timeit('no_duplicates([1, 2, 3, 1, 7])', globals=globals(), number=1000))
0.0018683355819786227
```

```python
>>> from timeit import timeit
>>> # und das Set:
>>> print(timeit('list(set([1, 2, 3, 1, 2, 3, 4]))', number=1000))
0.0010220493243764395
>>> # schneller und sauberer =)
```

Wir schreiben nicht nur _weniger Codezeilen_ mit Sets als mit Listen-Comprehensions, sondern erhalten auch _lesbareren_ und _performanteren_ Code.

<base-warning>
  <base-warning-title>
    Denken Sie daran, dass Sets ungeordnet sind
  </base-warning-title>
  <base-warning-content>
    Es gibt keine Garantie dafür, dass die Reihenfolge der Elemente beibehalten wird, wenn sie zurück in eine Liste umgewandelt werden.
  </base-warning-content>
</base-warning>

Aus dem [Zen of Python](https://www.python.org/dev/peps/pep-0020/):

> Beautiful is better than ugly. <br>
> Explicit is better than implicit.<br>
> Simple is better than complex.<br>
> Flat is better than nested.

Sind Sets nicht einfach schön, explizit, einfach und flach?

## Mitgliedschaftstests

Jedes Mal, wenn wir eine _if_-Anweisung verwenden, um zu überprüfen, ob sich ein Element beispielsweise in einer Liste befindet, führen wir einen Mitgliedschaftstest durch:

```python
my_list = [1, 2, 3]
>>> if 2 in my_list:
...     print('Yes, this is a membership test!')
...
# Yes, this is a membership test!
```

Und Sets sind performanter als Listen, wenn wir sie durchführen:

```python
>>> from timeit import timeit
>>> def in_test(iterable):
...     for i in range(1000):
...             if i in iterable:
...                     pass
...
>>> timeit('in_test(iterable)', setup="from __main__ import in_test; iterable = list(range(1000))", number=1000)
# 12.459663048726043
```

```python
>>> from timeit import timeit
>>> def in_test(iterable):
...     for i in range(1000):
...             if i in iterable:
...                     pass
...
>>> timeit('in_test(iterable)', setup="from __main__ import in_test; iterable = set(range(1000))", number=1000)
# 0.12354438152988223
```

Die obigen Tests stammen aus diesem [Stack Overflow Thread](https://stackoverflow.com/questions/2831212/python-sets-vs-lists).

Wenn Sie also Vergleiche wie diese in massiven Listen durchführen, wird es Ihr Programm erheblich beschleunigen, wenn Sie diese Liste in ein Set umwandeln.

## Elemente hinzufügen

Abhängig von der Anzahl der hinzuzufenden Elemente müssen wir zwischen den Methoden `add()` und `update()` wählen.

`add()` Fügt ein einzelnes Element hinzu:

```python
>>> s = {1, 2, 3}
>>> s.add(4)
>>> s
{1, 2, 3, 4}
```

Und `update()` mehrere Elemente:

```python
>>> s = {1, 2, 3}
>>> s.update([2, 3, 4, 5, 6])
>>> s
{1, 2, 3, 4, 5, 6}
```

Denken Sie daran, Sets entfernen Duplikate.

## Elemente entfernen

Wenn Sie benachrichtigt werden möchten, wenn Ihr Code versucht, ein Element zu entfernen, das sich nicht im Set befindet, verwenden Sie `remove()`. Andernfalls bietet `discard()` eine geeignete Alternative:

```python
>>> s = {1, 2, 3}
>>> s.remove(3)
>>> s
{1, 2}
>>> s.remove(3)
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# KeyError: 3
```

`discard()` löst keine Fehler aus:

```python
>>> s = {1, 2, 3}
>>> s.discard(3)
>>> s
{1, 2}
>>> s.discard(3)
>>> # nichts passiert!
```

Wir können auch `pop()` verwenden, um ein beliebiges Element zufällig zu entfernen:

```python
>>> s = {1, 2, 3, 4, 5}
>>> s.pop()  # entfernt ein beliebiges Element
1
>>> s
{2, 3, 4, 5}
```

Oder `clear()`, um alle Werte aus einem Set zu entfernen:

```python
>>> s = {1, 2, 3, 4, 5}
>>> s.clear()  # verwirft alle Elemente
>>> s
set()
```

## Die union()-Methode

`union()` oder `|` erstellen ein neues Set, das alle Elemente aus den von uns angegebenen Sets enthält:

```python
>>> s1 = {1, 2, 3}
>>> s2 = {3, 4, 5}
>>> s1.union(s2)  # oder 's1 | s2'
{1, 2, 3, 4, 5}
```

## Die intersection()-Methode

`intersection` oder `&` geben ein Set zurück, das nur die Elemente enthält, die in allen Mengen gemeinsam sind:

```python
>>> s1 = {1, 2, 3}
>>> s2 = {2, 3, 4}
>>> s3 = {3, 4, 5}
>>> s1.intersection(s2, s3)  # oder 's1 & s2 & s3'
{3}
```

## Die difference()-Methode

Difference erstellt ein neues Set mit den Werten, die in "s1", aber nicht in "s2" enthalten sind:

```python
>>> s1 = {1, 2, 3}
>>> s2 = {2, 3, 4}
>>> s1.difference(s2)  # oder 's1 - s2'
{1}
```

## symmetric_difference()

`symmetric_difference` oder `^` geben alle Werte zurück, die zwischen den Sets nicht gemeinsam sind.

```python
>>> s1 = {1, 2, 3}
>>> s2 = {2, 3, 4}
>>> s1.symmetric_difference(s2)  # oder 's1 ^ s2'
{1, 4}
```

## Schlussfolgerungen

Ich hoffe, dass Sie nach der Lektüre dieses Artikels wissen, was ein Set ist, wie man seine Elemente manipuliert und welche Operationen es durchführen kann. Zu wissen, wann man ein Set verwenden sollte, wird Ihnen definitiv helfen, saubereren Code zu schreiben und Ihre Programme zu beschleunigen.
