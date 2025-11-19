---
title: 'Python enumerate()-Funktion – Python Spickzettel'
description: 'Gibt ein enumerate-Objekt zurück. Das Iterable muss eine Sequenz, ein Iterator oder ein anderes Objekt sein, das Iteration unterstützt. Die __next__()-Methode des von enumerate() zurückgegebenen Iterators gibt ein Tupel zurück, das einen Zähler (beginnend bei start, standardmäßig 0) und die Werte aus der Iteration über das Iterable enthält.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python enumerate() eingebaute Funktion
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#enumerate">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Gibt ein enumerate-Objekt zurück. iterable muss eine Sequenz, ein Iterator oder ein anderes Objekt sein, das Iteration unterstützt. Die __next__() Methode des von enumerate() zurückgegebenen Iterators gibt ein Tupel zurück, das einen Zähler (beginnend bei start, standardmäßig 0) und die Werte enthält, die durch Iteration über iterable erhalten wurden.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die `enumerate()` Funktion in Python ist eine eingebaute Funktion, die einem iterierbaren Objekt einen Zähler hinzufügt. Sie gibt ein enumerate-Objekt zurück, das Paare liefert, die einen Zähler (ab einem Startindex, der standardmäßig 0 ist) und den entsprechenden Wert aus dem iterierbaren Objekt enthalten. Dies ist besonders nützlich, wenn Sie sowohl den Index als auch das Element benötigen, während Sie über eine Sequenz iterieren.

## Beispiele

```python
l = enumerate([1, 2, 3, 4, 5])
print(l)
print(l.__next__())
print(l.__next__())
print(l.__next__())
print(l.__next__())
print(l.__next__())
```

```output
<enumerate object at 0x7fcac409cc40>
(0, 1)
(1, 2)
(2, 3)
(3, 4)
(4, 5)
```

`enumerate` wird normalerweise in einer `for`-Schleife verwendet, um den Index eines Elements zu erhalten:

```python
for i, item in enumerate([1, 2, 3, 4, 5]):
    print(f"Index: {i}, Item: {item}")
```

```output
Index: 0, Item: 1
Index: 1, Item: 2
Index: 2, Item: 3
Index: 3, Item: 4
Index: 4, Item: 5
```

## Relevante Links

- <router-link :to="'/cheatsheet/control-flow'">Kontrollfluss</router-link>
- <router-link :to="'/builtin/iter'">iter()</router-link>
- <router-link :to="'/builtin/next'">next()</router-link>
- <router-link :to="'/cheatsheet/lists-and-tuples'">Listen und Tupel</router-link>
- <router-link :to="'/builtin/zip'">zip()</router-link>
- <router-link :to="'/builtin/range'">range()</router-link>
