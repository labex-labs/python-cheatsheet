---
title: 'Python Comprehensions: Eine Schritt-für-Schritt-Einführung - Python Spickzettel'
description: 'In diesem kurzen Artikel werden wir einige For-Schleifen erstellen und sie Schritt für Schritt in Comprehensions umschreiben.'
date: 'March 22, 2019'
updated: 'July 3, 2022'
tags: 'python, basics'
socialImage: '/blog/python-comprehensions.png'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "Python Comprehensions: Eine Schritt-für-Schritt-Einführung - Python Spickzettel"
    description: "In diesem kurzen Artikel werden wir einige For-Schleifen erstellen und sie Schritt für Schritt in Comprehensions umschreiben."
    date: "March 22, 2019"
    updated: "July 3, 2022"
    tags: "python, basics"
    socialImage: "/blog/python-comprehensions.png"
</route>

<blog-title-header :frontmatter="frontmatter" title="Python Comprehensions: Eine Schritt-für-Schritt-Einführung - Python Spickzettel" />

_List Comprehensions_ sind eine spezielle Syntax, mit der wir Listen aus anderen Listen erstellen können ([Wikipedia](https://en.wikipedia.org/wiki/List_comprehension), [The Python Tutorial](https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions)). Sie sind unglaublich nützlich beim Umgang mit Zahlen und mit ein oder zwei Ebenen verschachtelter _For Loops_, aber darüber hinaus können sie etwas zu schwer lesbar werden.

In diesem Artikel werden wir einige _For Loops_ erstellen und sie Schritt für Schritt in _Comprehensions_ umschreiben.

## Grundlagen

Die Wahrheit ist, _List Comprehensions_ sind nicht allzu komplex, aber sie sind anfangs immer noch etwas schwer zu verstehen, weil sie ein _wenig_ seltsam aussehen. Warum? Nun, die Reihenfolge, in der sie geschrieben werden, ist das **_Gegenteil_** dessen, was wir normalerweise in einer _For Loop_ sehen.

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
>>> for n in names:
...     print(n)
# Charles
# Susan
# Patrick
# George
# Carol
```

Um dasselbe mit einer _List Comprehension_ zu tun, beginnen wir ganz am Ende der _Loop_:

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
>>> [print(n) for n in names]
# Charles
# Susan
# Patrick
# George
# Carol
```

Beachten Sie, wie wir die Reihenfolge umgekehrt haben:

- Zuerst haben wir, was die Ausgabe der Schleife sein wird `[print(n) ...]`.
- Dann definieren wir die Variable, die jedes der Elemente speichert, und zeigen auf die `List`, `Set` oder `Dictionary`, mit der wir arbeiten werden `[... for n in names]`.

## Erstellen einer neuen Liste mit einer Comprehension

> Dies ist der Hauptanwendungsfall einer _List Comprehension_. Andere Verwendungen können zu einem für Sie und andere schwer lesbaren Code führen.

So erstellen wir mit einer _For Loop_ eine neue Liste aus einer bestehenden Sammlung:

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']

>>> new_list = []
>>> for n in names:
...     new_list.append(n)

>>> print(new_list)
# ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
```

Und so machen wir dasselbe mit einer _List Comprehension_:

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
>>> new_list = [n for n in names]
>>> print(new_list)
# ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
```

Der Grund, warum wir dies tun können, ist, dass das Standardverhalten einer _List Comprehension_ darin besteht, eine Liste zurückzugeben:

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
>>> [n for n in names]
# ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
```

## Hinzufügen von Bedingungen

Was ist, wenn wir möchten, dass `new_list` nur die Namen enthält, die mit `C` beginnen? Mit einer _For Loop_ würden wir es so machen:

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']

>>> new_list = []
>>> for n in names:
...     if n.startswith('C'):
...         new_list.append(n)

>>> print(new_list)
# ['Charles', 'Carol']
```

In einer _List Comprehension_ fügen wir die if-Anweisung an deren Ende hinzu:

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
>>> new_list = [n for n in names if n.startswith('C')]
>>> print(new_list)
# ['Charles', 'Carol']
```

Viel besser lesbar.

## Formatieren langer List Comprehensions

Dieses Mal möchten wir, dass `new_list` nicht nur die Namen enthält, die mit einem `C` beginnen, sondern auch diejenigen, die mit einem `e` enden und ein `k` enthalten:

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
>>> new_list = [n for n in names if n.startswith('C') or n.endswith('e') or 'k' in n]
>>> print(new_list)
# ['Charles', 'Patrick', 'George', 'Carol']
```

Das ist ziemlich unübersichtlich. Glücklicherweise ist es möglich, _Comprehensions_ auf verschiedene Zeilen aufzuteilen:

```python
new_list = [
    n
    for n in names
    if n.startswith("C")
    or n.endswith("e")
    or "k" in n
]
```

## Set- und Dict-Comprehensions

Wenn Sie die Grundlagen der _List Comprehensions_ gelernt haben... Herzlichen Glückwunsch! Sie haben dies gerade mit <router-link to="/cheatsheet/sets">Sets</router-link> und <router-link to="/cheatsheet/dictionaries">Dictionaries</router-link> getan.

### Set comprehension

```python
>>> my_set = {"abc", "def"}

>>> # Hier erstellen wir mit einer for loop ein neues Set mit Elementen in Großbuchstaben
>>> new_set = set()
>>> for s in my_set:
...    new_set.add(s.upper())
>>> print(new_set)
# {'DEF', 'ABC'}

>>> # Dasselbe, aber mit einer Set comprehension
>>> new_set = {s.upper() for s in my_set}
>>> print(new_set)
# {'DEF', 'ABC'}
```

### Dict comprehension

```python
>>> my_dict = {'name': 'Christine', 'age': 98}

>>> # Ein neues Dictionary aus einem bestehenden mit einer for loop
>>> new_dict = {}
>>> for key, value in my_dict.items():
...     new_dict[key] = value
>>> print(new_dict)
# {'name': 'Christine', 'age': 98}

# Verwendung einer Dict comprehension
>>> new_dict = {key: value for key, value in my_dict.items()}  # Beachten Sie den ":"
>>> print(new_dict)
# {'name': 'Christine', 'age': 98}
```

> Empfohlener Artikel: [Python Sets: Was, Warum und Wie ](https://www.pythoncheatsheet.org/blog/python-sets-what-why-how).

## Fazit

Jedes Mal, wenn ich etwas Neues lerne, entsteht dieser Drang, es sofort zu verwenden. Wenn das passiert, zwinge ich mich innezuhalten und einen Moment nachzudenken... Soll ich diese große, verschachtelte und bereits unübersichtlich aussehende _For Loop_ in eine _List Comprehension_ ändern? Wahrscheinlich nicht.

> Lesbarkeit zählt. [The Zen of Python](https://www.python.org/dev/peps/pep-0020/).
