---
title: 'Python id() eingebaute Funktion – Python Spickzettel'
description: 'Gibt die „Identität“ eines Objekts zurück. Dies ist eine Ganzzahl, die für dieses Objekt während seiner Lebensdauer garantiert eindeutig und konstant ist. Zwei Objekte mit nicht überlappenden Lebensdauern können denselben id()-Wert haben.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python eingebaute Funktion id()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#id">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Gibt die „Identität“ eines Objekts zurück. Dies ist eine ganze Zahl, die für dieses Objekt während seiner Lebensdauer garantiert eindeutig und konstant ist. Zwei Objekte mit sich nicht überschneidenden Lebensdauern können denselben id()-Wert haben.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die Funktion `id()` gibt eine eindeutige Ganzzahl zurück, die ein Objekt im Speicher identifiziert. Diese ID ist garantiert einzigartig für die Lebensdauer des Objekts. Es ist im Wesentlichen die Speicheradresse des Objekts.

### Beispiele

```python
x = 10
y = 10
z = 20

print(id(x))
print(id(y))  # gleich wie id(x), da Python kleine Ganzzahlen zwischenspeichert
print(id(z))
print(id(1))
print(id('1'))
print(id([1, 2]))
```

```output
4331368528
4331368528
4331368560
4331368496
4331368560
4331368560
```

## Relevante Links

- <router-link :to="'/builtin/hash'">hash()</router-link>
- <router-link :to="'/builtin/object'">object()</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP Grundlagen</router-link>
- <router-link :to="'/blog/python-data-types'">Python Datentypen</router-link>
- <router-link :to="'/builtin/type'">type()</router-link>
