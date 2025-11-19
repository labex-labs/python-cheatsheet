---
title: 'Python hash()-Funktion – Python Spickzettel'
description: 'Gibt den Hash-Wert des Objekts zurück (falls vorhanden). Hash-Werte sind Ganzzahlen und werden für einen schnellen Vergleich von Wörterbuchschlüsseln bei einer Nachschlageoperation verwendet. Zahlenwerte, die gleich sind, haben denselben Hash-Wert (auch wenn sie unterschiedliche Typen haben, wie bei 1 und 1.0).'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python hash()-Built-in-Funktion
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#hash">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Gibt den Hash-Wert des Objekts zurück (falls vorhanden). Hash-Werte sind ganze Zahlen. Sie werden verwendet, um Dictionary-Schlüssel während einer Dictionary-Suche schnell zu vergleichen. Numerische Werte, die als gleich verglichen werden, haben denselben Hash-Wert (auch wenn sie unterschiedliche Typen haben, wie im Fall von 1 und 1.0).
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die `hash()`-Funktion gibt eine ganze Zahl zurück, die den Hash-Wert eines Objekts darstellt. Dies wird hauptsächlich von Dictionaries verwendet, um schnell nach Schlüsseln zu suchen.

Nur "hashbare" Objekte können an `hash()` übergeben werden. Ein Objekt ist hashbar, wenn es einen Hash-Wert hat, der sich während seiner Lebensdauer niemals ändert. Alle eingebauten unveränderlichen Typen von Python (wie Strings, Zahlen und Tupel) sind hashbar, während veränderliche Container (wie Listen und Dictionaries) es nicht sind.

### Beispiele

```python
# Hash eines Integers ist der Integer selbst
print(hash(1))
print(hash(1.0))  # 1 und 1.0 sind gleich

# Hash eines Strings (Ausgabe variiert)
print(hash('hello'))

# Hash eines Tupels (Ausgabe variiert)
print(hash((1, 2, 3)))

# Der Versuch, eine Liste zu hashen, löst einen TypeError aus
try:
    hash([1, 2, 3])
except TypeError as e:
    print(e)
```

```output
1
1
-1182655621190490452
529344067295497451
unhashable type: 'list'
```

## Relevante Links

- <router-link :to="'/cheatsheet/dictionaries'">Dictionaries</router-link>
- <router-link :to="'/builtin/id'">id()</router-link>
- <router-link :to="'/cheatsheet/sets'">Sets</router-link>
- <router-link :to="'/blog/python-sets-what-why-how'">Python Sets: Was, Warum und Wie</router-link>
- <router-link :to="'/builtin/frozenset'">frozenset()</router-link>
- <router-link :to="'/builtin/object'">object()</router-link>
