---
title: 'Python sorted()-Funktion – Python Spickzettel'
description: 'Gibt eine neue sortierte Liste aus den Elementen im iterierbaren Objekt zurück.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python eingebaute Funktion sorted()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#sorted">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Gibt eine neue sortierte Liste aus den Elementen im iterierbaren Objekt zurück.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die Funktion `sorted()` gibt eine neue sortierte Liste aus den Elementen eines iterierbaren Objekts zurück. Sie modifiziert das ursprüngliche iterierbare Objekt nicht.

Sie können auch den Parameter `reverse` verwenden, um in absteigender Reihenfolge zu sortieren.

### Beispiele

**Sortieren einer Liste von Zahlen:**

```python
numbers = [3, 1, 4, 1, 5, 9, 2, 6]
sorted_numbers = sorted(numbers)
print(sorted_numbers)
```

```output
[1, 1, 2, 3, 4, 5, 6, 9]
```

**Sortieren einer Liste von Zeichenketten:**

```python
words = ["banana", "apple", "cherry"]
sorted_words = sorted(words)
print(sorted_words)
```

```output
['apple', 'banana', 'cherry']
```

**In umgekehrter Reihenfolge sortieren:**

```python
numbers = [3, 1, 4, 1, 5, 9, 2, 6]
sorted_numbers_desc = sorted(numbers, reverse=True)
print(sorted_numbers_desc)
```

```output
[9, 6, 5, 4, 3, 2, 1, 1]
```

## Relevante Links

- <router-link to="/cheatsheet/lists-and-tuples">Spickzettel: Listen und Tupel</router-link>
- <router-link to="/cheatsheet/dictionaries">Spickzettel: Dictionaries</router-link>
- <router-link to="/cheatsheet/functions">Spickzettel: Funktionen (für das key Argument)</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/reversed">reversed()</router-link>
- <router-link to="/builtin/min">min()</router-link>
- <router-link to="/builtin/max">max()</router-link>
