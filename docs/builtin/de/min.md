---
title: 'Python min()-Funktion – Python Spickzettel'
description: 'Gibt das kleinste Element in einem iterierbaren Objekt oder das kleinste von zwei oder mehr Argumenten zurück.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python min() eingebaute Funktion
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#min">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Gibt das kleinste Element in einem iterierbaren Objekt oder das kleinste von zwei oder mehr Argumenten zurück.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die `min()` Funktion ist das Gegenstück zu <router-link to="/builtin/max">max()</router-link>. Sie kann auf zwei Arten verwendet werden:

1. Mit einem iterierbaren Objekt (wie einer <router-link to="/builtin/list">Liste</router-link> oder einem <router-link to="/builtin/tuple">Tupel</router-link>) gibt sie das kleinste Element zurück.
2. Mit zwei oder mehr Argumenten gibt sie das kleinste davon zurück.

### Beispiele

**Das Minimum in einem iterierbaren Objekt finden:**

```python
numbers = [10, 2, 1, 40, 5]
print(min(numbers))

letters = ('z', 'b', 'a')
print(min(letters))
```

```output
1
a
```

**Das Minimum mehrerer Argumente finden:**

```python
print(min(10, 20, 5))
```

```output
5
```

## Relevante Links

- <router-link to="/cheatsheet/lists-and-tuples">Spickzettel: Listen und Tupel</router-link>
- <router-link to="/builtin/max">max()</router-link>
- <router-link to="/builtin/sorted">sorted()</router-link>
- <router-link to="/builtin/sum">sum()</router-link>
