---
title: 'Python dict()-Funktion – Python Spickzettel'
description: 'Erstellt ein neues Dictionary. Das dict-Objekt ist die Dictionary-Klasse. Siehe dict und Mapping Types — dict für Dokumentation zu dieser Klasse.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python dict() eingebaute Funktion
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/stdtypes.html#dict">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Erstellt ein neues Dictionary. Das `dict`-Objekt ist die Dictionary-Klasse.
  </base-disclaimer-content>
</base-disclaimer>

Der `dict()`-Konstruktor in Python ist eine vielseitige Möglichkeit, Dictionaries zu erstellen.

Sie können ein leeres Dictionary erstellen oder ein Dictionary aus Schlüsselwortargumenten oder aus einem <router-link to="/builtin/iter">Iterable</router-link> von Schlüssel-Wert-Paaren erstellen.

## Beispiele

**Erstellen eines leeren Dictionaries:**

```python
my_dict = dict()
print(my_dict)
```

```output
{}
```

**Erstellen eines Dictionaries mit Schlüsselwortargumenten:**

```python
# Verwendung von Schlüsselwortargumenten
my_dict = dict(name="John", age=30)
print(my_dict)
```

```output
{'name': 'John', 'age': 30}
```

**Erstellen eines Dictionaries aus einem Iterable:**

```python
my_list = [('name', 'Jane'), ('age', 25)]
my_dict = dict(my_list)
print(my_dict)
```

```output
{'name': 'Jane', 'age': 25}
```

Erstellen eines leeren Dictionaries:

```python
a = dict()
type(a)
```

```output
<class 'dict'>
```

## Relevante Links

- <router-link :to="'/builtin/iter'">`iter()`</router-link>
- <router-link :to="'/cheatsheet/dictionaries'">Dictionaries</router-link>
- <router-link :to="'/blog/python-data-types'">Python Datentypen</router-link>
- <router-link :to="'/builtin/len'">`len()`</router-link>
- <router-link :to="'/builtin/list'">`list()`</router-link>
- <router-link :to="'/builtin/tuple'">`tuple()`</router-link>
