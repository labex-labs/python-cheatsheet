---
title: 'Python range()-Funktion – Python Spickzettel'
description: 'range ist keine Funktion, sondern ein unveränderlicher Sequenztyp, wie in Bereiche und Sequenztypen – list, tuple, range dokumentiert.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python range() eingebaute Funktion
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#range">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Anstatt eine Funktion zu sein, ist range tatsächlich ein unveränderlicher Sequenztyp, wie in Ranges and Sequence Types — list, tuple, range dokumentiert.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Der `range`-Typ wird üblicherweise in `for`-Schleifen verwendet, um eine bestimmte Anzahl von Malen zu iterieren. `range` nimmt drei Parameter entgegen: `start`, `stop` und `step`. Jeder Parameter muss eine Ganzzahl sein (entweder die eingebaute <router-link to="/builtin/int">int</router-link> oder ein beliebiges Objekt, das die spezielle Methode **index**() implementiert).

Wenn nur ein Parameter angegeben wird, repräsentiert dieser den `stop`-Parameter. Wenn der `step`-Parameter ganz weggelassen wird, ist der Standardwert `1`. Wenn der `start`-Parameter weggelassen wird, ist der Standardwert `0`.

Ranges unterstützen negative Indizes, diese werden jedoch als Indizierung vom Ende der durch die positiven Indizes bestimmten Sequenz interpretiert.

\*\*\*Der Vorteil des range-Typs gegenüber einer regulären <router-link to="/builtin/list">list</router-link> oder <router-link to="/builtin/tuple">tuple</router-link> besteht darin, dass ein range-Objekt unabhängig von der Größe des dargestellten Bereichs immer denselben (kleinen) Speicherplatz benötigt.

## Eingabeparameter

Ranges implementieren alle gängigen Sequenzoperationen außer Konkatenation und Wiederholung (aufgrund der Tatsache, dass range-Objekte nur Sequenzen darstellen können, die einem strengen Muster folgen, und Wiederholung und Konkatenation dieses Muster normalerweise verletzen würden).

`start`:

- Der Wert des Startparameters
- Wenn nicht angegeben, ist der Parameter standardmäßig 0
- Der Parameterwert ist _inklusiv_

`stop`

- Der Wert des Stoppparameters
- Der einzige erforderliche Parameter
- Der Parameterwert ist _exklusiv_

`step`

- Der Wert des Schrittparameters
- Wenn nicht angegeben, ist der Parameter standardmäßig 1

## Beispiele

Range mit nur angegebenem `stop`-Parameter

```python
for i in range(5):
    print(i)
```

```output
0
1
2
3
4
```

Range mit `start`- und `stop`-Parametern

```python
for i in range(1, 8):
    print(i)
```

```output
1
2
3
4
5
6
7
```

Range mit allen angegebenen Parametern

```python
for i in range(0, 30, 5):
    print(i)
```

```output
0
5
10
15
20
25
```

Range mit allen Parametern, wobei der `stop`-Parameter nicht durch den `step`-Parameter teilbar ist

```python
for i in range(0, 10, 3):
    print(i)
```

```output
0
3
6
9
```

Range mit allen Parametern, wobei die Parameter `stop` und `step` negativ sind

```python
for i in range(0, -6, -1):
    print(i)
```

```output
0
-1
-2
-3
-4
-5
```

Zwei Beispiele, bei denen der `stop`-Parameter auf 0 gesetzt ist

```python
for i in range(0):
    print(i)
```

```output
(keine Ausgabe)
```

```python
for i in range(1, 0):
    print(i)
```

```output
(keine Ausgabe)
```

## Relevante Links

- <router-link to="/cheatsheet/control-flow">Cheatsheet: Kontrollfluss (for-Schleifen)</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: Listen und Tupel</router-link>
- <router-link to="/modules/itertools-module">Modul: itertools</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/reversed">reversed()</router-link>
- <router-link to="/builtin/enumerate">enumerate()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/int">int()</router-link>
