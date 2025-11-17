---
title: 'Python max()-Funktion – Python Spickzettel'
description: 'Gibt das größte Element in einem iterierbaren Objekt oder das größte von zwei oder mehr Argumenten zurück.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python max() eingebaute Funktion
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#max">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Gibt das größte Element in einem iterierbaren Objekt oder das größte von zwei oder mehr Argumenten zurück.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die Funktion `max()` kann auf zwei Arten verwendet werden:

1. Mit einem iterierbaren Objekt (wie einer <router-link to="/builtin/list">Liste</router-link> oder einem <router-link to="/builtin/tuple">Tupel</router-link>) gibt sie das größte Element zurück.
2. Mit zwei oder mehr Argumenten gibt sie das größte davon zurück.

### Beispiele

**Das Maximum in einem iterierbaren Objekt finden:**

```python
numbers = [1, 2, 10, 40, 5]
print(max(numbers))

letters = ('a', 'b', 'z')
print(max(letters))
```

Ausgabe:

```plaintext
40
z
```

**Das Maximum mehrerer Argumente finden:**

```python
print(max(10, 20, 5))
```

Ausgabe:

```plaintext
20
```

## Relevante Links

- <router-link to="/cheatsheet/lists-and-tuples">Spickzettel: Listen und Tupel</router-link>
- <router-link to="/builtin/min">min()</router-link>
- <router-link to="/builtin/sorted">sorted()</router-link>
- <router-link to="/builtin/sum">sum()</router-link>
