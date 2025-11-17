---
title: 'Python map()-Funktion – Python Spickzettel'
description: 'Gibt einen Iterator zurück, der die Funktion auf jedes Element des Iterierbaren anwendet und die Ergebnisse liefert. Bei zusätzlichen iterierbaren Argumenten muss die Funktion so viele Argumente annehmen und wird parallel auf die Elemente aller Iterierbaren angewendet. Bei mehreren Iterierbaren stoppt der Iterator, sobald das kürzeste Iterierbare erschöpft ist. Für Fälle, in denen die Funktionsargumente bereits in Argument-Tupeln angeordnet sind.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python map() eingebaute Funktion
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#map">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Gibt einen Iterator zurück, der die Funktion auf jedes Element des Iterierbaren anwendet und die Ergebnisse liefert. Wenn zusätzliche iterierbare Argumente übergeben werden, muss die Funktion so viele Argumente annehmen und wird parallel auf die Elemente aus allen Iterierbaren angewendet. Bei mehreren Iterierbaren stoppt der Iterator, sobald das kürzeste Iterierbare erschöpft ist. Für Fälle, in denen die Funktionsargumente bereits in Argumenten- <router-link to="/builtin/tuple">Tupeln</router-link> angeordnet sind.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die Map-Funktion, _map(function, iterable)_ nimmt ein oder mehrere Iterierbare, eine „Callback-Funktion“ (oft ein Lambda), entgegen und gibt ein „Map-Objekt“ zurück. Das Map-Objekt enthält das Ergebnis der Map-Funktion, die den Callback auf jedes Element in den iterierbaren Argumenten anwendet. Map iteriert gleichzeitig über die bereitgestellten iterierbaren Objekte. Das heißt, bei jedem Schritt „i“ in der Map-Funktion ist das Element am Index „i“ jedes Iterierbaren zu diesem Zeitpunkt für die Map-Funktion verfügbar. Sie werden das resultierende Map-Objekt oft in eine <router-link to="/builtin/list">Liste</router-link>, ein <router-link to="/builtin/tuple">Tupel</router-link> oder eine andere bequemere Objektform umwandeln wollen, sobald Sie mit dem Mappen fertig sind.

\*\*\*Ein wichtiger Hinweis: Seit der Veröffentlichung von Python 3 stoppt und gibt Map zurück, wenn die an map übergebenen Iterierbaren unterschiedliche Längen haben, sobald die Anzahl der Schritte der Länge des kürzesten Iterierbaren entspricht.

## Eingabeparameter

Funktion: Nimmt das Element (oder die Elemente) am Index, der dem aktuellen Schritt der Map entspricht, entgegen und gibt das Rückgabeergebnis als Element zurück, das im Map-Objekt gespeichert wird. Der Typ des im Map-Objekt gespeicherten Elements ist identisch mit dem Typ, der von der Funktion zurückgegeben wird.

Iterierbare(s): `<router-link to="/builtin/tuple">Tupel</router-link>`, `<router-link to="/builtin/list">Liste</router-link>`, `<router-link to="/builtin/range">range</router-link>`, `<router-link to="/builtin/dict">dictionary</router-link>`, `<router-link to="/builtin/set">set</router-link>`, `<router-link to="/builtin/str">string</router-link>`.

## Ein sehr einfaches Beispiel

```python
def double_map(func, iter):
    my_map = map(func, iter)
    return list(my_map)

def double(element):
    return element * 2

nums = [1, 2, 3, 4]

print(double_map(double, nums))
```

Ausgabe:

```plaintext
[2, 4, 6, 8]
```

## Ein weniger einfaches Beispiel

### Dieses Beispiel verwendet eine als Lambda geschriebene Callback-Funktion, sowie

```python
def multi_map(func, *iters):
    my_map = map(func, *iters)
    return list(my_map)

list1 = [1, 2, 3]
list2 = [4, 5, 6]

print(multi_map((lambda item1, item2: item1 * item2), list1, list2))
```

Ausgabe:

```plaintext
[4, 10, 18]
```

## Ein Beispiel, das die Behandlung unterschiedlicher Iterierbarenlängen durch map demonstriert

```python
def max(a, b):
    if a > b:
        return a
    else:
        return b

list1 = [1, 1, 1]
list2 = [0, 0, 0, 1, 1, 1, 1, 1, 1, 1]

result = list(map(max, list1, list2))

print(result)
```

Ausgabe:

```plaintext
[1, 1, 1]
```

Beachten Sie, dass die Länge der resultierenden Liste gleich der Länge von list1 ist?

## Relevante Links

- <router-link to="/cheatsheet/functions">Spickzettel: Funktionen (einschließlich Lambdas)</router-link>
- <router-link to="/cheatsheet/comprehensions">Spickzettel: Comprehensions</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">Blog: Python Comprehensions Schritt für Schritt</router-link>
- <router-link to="/modules/itertools-module">Modul: itertools</router-link>
- <router-link to="/builtin/filter">filter()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
