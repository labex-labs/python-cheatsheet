---
title: "Python Statistics Modul - Python Spickzettel"
description: "Das `statistics`-Modul bietet einfache Werkzeuge zum Berechnen von Durchschnittswerten, Medianen und anderer beschreibender Statistik."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Statistics Modul
</base-title>

Das `statistics`-Modul bietet einfache Werkzeuge zum Berechnen von Durchschnittswerten, Medianen und anderer beschreibender Statistik.

Das Modul wurde in Python 3.4 hinzugefügt.

```python
import statistics
```

Verwende `statistics`, wenn du gängige Berechnungen für eine kleine Zahlenliste brauchst. Für fortgeschrittene Datenanalyse sind Bibliotheken wie NumPy und pandas leistungsfähiger, gehören aber nicht zur Standardbibliothek.

## mean()

```python
import statistics

scores = [80, 90, 95, 100]
print(statistics.mean(scores))
```

```output
91.25
```

`fmean` liefert einen Fließkomma-Mittelwert und ist für numerische Daten oft schneller:

```python
import statistics

print(statistics.fmean([1, 2, 3]))
```

```output
2.0
```

## median()

```python
import statistics

values = [1, 3, 5, 100]
print(statistics.median(values))
```

```output
4.0
```

## mode()

`mode` gibt den häufigsten Wert zurück.

```python
import statistics

print(statistics.mode(['python', 'python', 'rust']))
```

```output
python
```

Wenn mehr als ein Wert am häufigsten vorkommt, gibt `multimode` alle zurück:

```python
import statistics

print(statistics.multimode(['red', 'blue', 'red', 'blue']))
```

```output
['red', 'blue']
```

## stdev()

`stdev` berechnet die Stichproben-Standardabweichung.

```python
import statistics

print(round(statistics.stdev([2, 4, 4, 4, 5, 5, 7, 9]), 2))
```

```output
2.14
```

## Leere Daten behandeln

Die meisten Funktionen werfen bei leerer Eingabe `StatisticsError`.

```python
import statistics

try:
    statistics.mean([])
except statistics.StatisticsError as error:
    print(type(error).__name__)
```

```output
StatisticsError
```

## Relevante Links

- <router-link to="/modules/math-module">Modul: math</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Spickzettel: Listen und Tupel</router-link>
- <router-link to="/builtin/round">round()</router-link>
