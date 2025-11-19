---
title: 'Python Zufallsmodul – Python Spickzettel'
description: "Das Modul 'random' ist ein integriertes Modul, das die Generierung zufälliger Elemente ermöglicht."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Zufallsmodul
</base-title>

Das [random](https://docs.python.org/3/library/random.html) Modul ist ein eingebautes Modul, das es uns ermöglicht, zufällige Elemente zu generieren.

```python
import random
```

## seed()

Die `seed`-Methode wird verwendet, um den Zufallszahlengenerator zu initialisieren.

```python
# Seed für reproduzierbare Zufallszahlen setzen
random.seed(1)
random.random()
```

```output
0.13436424411240122
```

Das Setzen des Seeds auf eine Zahl gibt immer dieselbe Zufallszahl zurück:

```python
random.seed(1)
random.random()
```

```output
0.13436424411240122
```

```python
random.seed(1)
random.random()
```

```output
0.13436424411240122
```

```python
random.seed(1)
random.random()
```

```output
0.13436424411240122
```

```python
random.seed(1)
random.random()
```

```output
0.13436424411240122
```

```python
random.seed(1)
random.random()
```

```output
0.13436424411240122
```

Der Standardwert der `seed`-Methode ist die _aktuelle Systemzeit_, weshalb wir immer eine andere Zahl erhalten:

```python
# Zufallszahl ohne Setzen des Seeds generieren (verwendet Systemzeit)
random.random()
```

```output
0.8474337369372327
```

```python
random.random()
```

```output
0.763774618976614
```

```python
random.random()
```

```output
0.2550690257394217
```

## randint()

```python
random.randint(start: int, stop: int)
```

Diese Methode gibt eine Zufallszahl zwischen den angegebenen Start- und Stopp-Parametern zurück:

```python
random.randint(1, 5)
```

```output
3
```

```python
random.randint(1, 5)
```

```output
2
```

```python
random.randint(1, 5)
```

```output
5
```

```python
random.randint(1, 5)
```

```output
1
```

```python
random.randint(1, 5)
```

```output
3
```

```python
random.randint(1, 5)
```

```output
1
```

## choice()

Die `choice`-Methode gibt ein zufällig ausgewähltes Element aus einem iterierbaren Objekt wie einer `list`, `set` oder `str` zurück:

```python
random.choice([1, 2, 3, 4])
```

```output
1
```

```python
random.choice([1, 2, 3, 4])
```

```output
2
```

```python
random.choice([1, 2, 3, 4])
```

```output
4
```

```python
random.choice([1, 2, 3, 4])
```

```output
4
```

## shuffle()

Die `shuffle`-Methode nimmt ein iterierbares Objekt entgegen und mischt es:

```python
my_list = [1, 2, 3, 4]

# Liste an Ort und Stelle mischen
random.shuffle(my_list)
my_list
```

```output
[1, 4, 3, 2]
```

```python
random.shuffle(my_list)
my_list
```

```output
[2, 4, 3, 1]
```

```python
random.shuffle(my_list)
my_list
```

```output
[4, 2, 3, 1]
```

## sample()

```python
random.sample(iterable, k: int)
```

`sample` gibt eine Liste mit einer zufälligen Auswahl aus einem iterierbaren Objekt zurück. Die Anzahl der zurückgegebenen Elemente entspricht dem Parameter `k`:

```python
# Zufällige Auswahl von k Elementen aus der Liste
random.sample([1, 2, 3, 4], 1)
```

```output
[3]
```

```python
random.sample([1, 2, 3, 4], 2)
```

```output
[3, 4]
```

```python
random.sample([1, 2, 3, 4], 3)
```

```output
[4, 3, 2]
```

```python
random.sample([1, 2, 3, 4], 4)
```

```output
[1, 2, 4, 3]
```

## random()

Die `random`-Methode gibt eine zufällige Gleitkommazahl zwischen 0.0 und 1.0 zurück:

```python
random.random()
```

```output
0.4143139993007743
```

```python
random.random()
```

```output
0.17300740157905092
```

```python
random.random()
```

```output
0.548798761388153
```

```python
random.random()
```

```output
0.7030407620656315
```

## uniform()

Die `uniform`-Methode ähnelt `randint`, gibt jedoch eine Gleitkommazahl zurück:

```python
random.uniform(1, 5)
```

```output
3.697943322009309
```

```python
random.uniform(1, 5)
```

```output
2.498812082006561
```

```python
random.uniform(1, 5)
```

```output
2.7558465201782525
```

```python
random.uniform(1, 5)
```

```output
3.0337059529999273
```

## Relevante Links

- <router-link to="/cheatsheet/lists-and-tuples">Spickzettel: Listen und Tupel</router-link>
- <router-link to="/blog/python-data-types">Blog: Python Datentypen</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/float">float()</router-link>
