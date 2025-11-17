---
title: 'Python issubclass()-Funktion – Python-Spickzettel'
description: 'Gibt True zurück, wenn Klasse eine Unterklasse (direkt, indirekt oder virtuell) von classinfo ist. Eine Klasse gilt als Unterklasse ihrer selbst. classinfo kann ein Tupel von Klassenobjekten (oder rekursiv andere solche Tupel) oder ein Union Type sein, in welchem Fall True zurückgegeben wird, wenn Klasse eine Unterklasse eines Eintrags in classinfo ist. In jedem anderen Fall wird eine TypeError-Ausnahme ausgelöst.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python eingebaute Funktion issubclass()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#issubclass">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Gibt True zurück, wenn Klasse eine Unterklasse (direkt, indirekt oder virtuell) von classinfo ist. Eine Klasse gilt als Unterklasse ihrer selbst. classinfo kann ein Tupel von Klassenobjekten (oder rekursiv, andere solche Tupel) oder ein Union Type sein, in welchem Fall True zurückgegeben wird, wenn Klasse eine Unterklasse eines Eintrags in classinfo ist. In jedem anderen Fall wird eine TypeError Ausnahme ausgelöst.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die Funktion `issubclass()` in Python ist eine eingebaute Funktion, die überprüft, ob eine gegebene Klasse eine Unterklasse einer anderen Klasse oder eines Tupels von Klassen ist. Sie gibt `True` zurück, wenn das erste Argument eine Unterklasse des zweiten Arguments ist, und andernfalls `False`. Diese Funktion ist nützlich für die objektorientierte Programmierung, da sie es Ihnen ermöglicht, Klassenbeziehungen zu überprüfen und polymorphes Verhalten basierend auf Vererbung zu implementieren.

## Beispiele

```python
class First:
    pass

class Second(First):
    pass

print(issubclass(Second, First))
print(issubclass(First, Second))
```

Ausgabe:

```plaintext
True
False
```

## Relevante Links

- <router-link :to="'/builtin/isinstance'">`isinstance()`</router-link>
- <router-link :to="'/builtin/type'">`type()`</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP Grundlagen</router-link>
- <router-link :to="'/builtin/object'">`object()`</router-link>
