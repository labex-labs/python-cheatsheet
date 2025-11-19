---
title: 'Python sum()-Funktion – Python Spickzettel'
description: 'Summiert den Startwert und die Elemente eines Iterierbaren von links nach rechts und gibt die Summe zurück. Die Elemente des Iterierbaren sind normalerweise Zahlen, und der Startwert darf kein String sein.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python sum() eingebaute Funktion
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#func-sum">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Summen starten und die Elemente eines Iterierbaren von links nach rechts und geben die Gesamtsumme zurück. Die Elemente des Iterierbaren sind normalerweise Zahlen, und der Startwert darf keine Zeichenkette sein.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die Funktion `sum()` berechnet die Summe aller Elemente in einem Iterierbaren (wie einer Liste oder einem Tupel). Sie können optional auch einen `start`-Wert angeben, der zur Gesamtsumme addiert wird.

### Beispiele

**Summieren einer Liste von Zahlen:**

```python
numbers = [1, 2, 3, 4, 5]
print(sum(numbers))
```

```output
15
```

**Summieren mit einem Startwert:**

```python
numbers = [1, 2, 3]
print(sum(numbers, 10))  # 10 + 1 + 2 + 3
```

```output
16
```

## Relevante Links

- <router-link to="/cheatsheet/lists-and-tuples">Spickzettel: Listen und Tupel</router-link>
- <router-link to="/cheatsheet/comprehensions">Spickzettel: Comprehensions</router-link>
- <router-link to="/blog/python-data-types">Blog: Python Datentypen</router-link>
- <router-link to="/modules/itertools-module">Modul: itertools</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/min">min()</router-link>
- <router-link to="/builtin/max">max()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/float">float()</router-link>
