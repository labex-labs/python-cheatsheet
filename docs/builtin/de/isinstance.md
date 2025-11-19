---
title: 'Python isinstance()-Funktion – Python Spickzettel'
description: 'Gibt True zurück, wenn das Objekt ein Exemplar der Klasse ist oder einer Unterklasse davon. Gibt False zurück, wenn das Objekt nicht vom angegebenen Typ ist. Bei einem Tupel von Typen gibt die Funktion True zurück, wenn das Objekt ein Exemplar eines der Typen ist. Andernfalls wird eine TypeError-Ausnahme ausgelöst.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python eingebaute Funktion isinstance()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#isinstance">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Gibt True zurück, wenn das Objektargument eine Instanz des classinfo-Arguments oder einer (direkten, indirekten oder virtuellen) Unterklasse davon ist. Wenn object keine Instanz des angegebenen Typs ist, gibt die Funktion immer False zurück. Wenn classinfo ein Tupel von Typobjekten (oder rekursiv, andere solche Tupel) oder ein Union Type mehrerer Typen ist, wird True zurückgegeben, wenn object eine Instanz eines der Typen ist. Wenn classinfo kein Typ oder Tupel von Typen und solche Tupel ist, wird eine TypeError-Ausnahme ausgelöst.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die Funktion `isinstance()` prüft, ob ein Objekt eine Instanz einer bestimmten Klasse oder einer Unterklasse davon ist. Sie gibt `True` zurück, wenn das Objekt vom angegebenen Typ ist, und andernfalls `False`.

Sie können auch gegen ein Tupel von Typen prüfen.

### Beispiele

**Prüfen des Typs eines Objekts:**

```python
my_list = [1, 2, 3]
print(isinstance(my_list, list))
print(isinstance(my_list, tuple))
```

```output
True
False
```

**Prüfen gegen mehrere Typen:**

```python
print(isinstance("hello", (int, str, list)))
```

```output
True
```

```python
isinstance(1, int)
isinstance(1, str)
```

```output
True
False
```

## Relevante Links

- <router-link :to="'/builtin/issubclass'">`issubclass()`</router-link>
- <router-link :to="'/builtin/type'">`type()`</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP Grundlagen</router-link>
- <router-link :to="'/blog/python-data-types'">Python Datentypen</router-link>
- <router-link :to="'/builtin/callable'">`callable()`</router-link>
