---
title: 'Python slice()-Funktion – Python Spickzettel'
description: 'Gibt ein Slice-Objekt zurück, das die durch range(start, stop, step) angegebenen Indizes darstellt. Die Argumente start und step sind standardmäßig None. Slice-Objekte haben schreibgeschützte Datenattribute start, stop und step, die lediglich die Argumentwerte (oder deren Standardwerte) zurückgeben.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python slice() eingebaute Funktion
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#slice">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Gibt ein Slice-Objekt zurück, das die durch range(start, stop, step) angegebene Menge von Indizes darstellt. Die Argumente start und step haben standardmäßig den Wert None. Slice-Objekte haben schreibgeschützte Datenattribute start, stop und step, die lediglich die Argumentwerte (oder deren Standardwerte) zurückgeben.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die `slice()` Funktion in Python gibt ein Slice-Objekt zurück, das zum Slicen von Sequenzen wie Listen, Tupeln oder Strings verwendet werden kann. Ein Slice-Objekt repräsentiert eine Menge von Indizes, die durch `start`, `stop` und `step` angegeben werden.

## Beispiele

```python
furniture = ['table', 'chair', 'rack', 'shelf']

print(furniture[0:4])
print(furniture[1:3])
print(furniture[0:-1])
print(furniture[:2])
print(furniture[1:])
print(furniture[:])
```

```output
['table', 'chair', 'rack', 'shelf']
['chair', 'rack']
['table', 'chair', 'rack']
['table', 'chair']
['chair', 'rack', 'shelf']
['table', 'chair', 'rack', 'shelf']
```

Das Slicen der vollständigen Liste führt zu einer Kopie:

```python
spam = ['cat', 'bat', 'rat', 'elephant']
spam2 = spam[:]
print(spam2)

spam.append('dog')
print(spam)
print(spam2)
```

```output
['cat', 'bat', 'rat', 'elephant']
['cat', 'bat', 'rat', 'elephant', 'dog']
['cat', 'bat', 'rat', 'elephant']
```

## Relevante Links

- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: Listen und Tupel</router-link>
- <router-link to="/cheatsheet/manipulating-strings">Cheatsheet: Bearbeiten von Strings</router-link>
- <router-link to="/cheatsheet/comprehensions">Cheatsheet: Comprehensions</router-link>
- <router-link to="/modules/itertools-module">Modul: itertools (islice)</router-link>
- <router-link to="/builtin/range">range()</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/reversed">reversed()</router-link>
- <router-link to="/builtin/sorted">sorted()</router-link>
- <router-link to="/builtin/enumerate">enumerate()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
- <router-link to="/builtin/map">map()</router-link>
- <router-link to="/builtin/filter">filter()</router-link>
