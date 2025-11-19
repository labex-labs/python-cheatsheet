---
title: 'Python iter()-Funktion – Python Spickzettel'
description: 'Gibt ein Iterator-Objekt zurück. Das erste Argument wird je nach Vorhandensein des zweiten Arguments unterschiedlich interpretiert. Ohne zweites Argument muss das Objekt ein Sammlungsobjekt sein, das das iterierbare Protokoll unterstützt, oder es muss das Sequenzprotokoll unterstützen. Unterstützt es keines dieser Protokolle, wird ein TypeError ausgelöst.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python iter() eingebaute Funktion
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#iter">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Gibt ein Iterator-Objekt zurück. Das erste Argument wird je nach Vorhandensein des zweiten Arguments sehr unterschiedlich interpretiert. Ohne ein zweites Argument muss object ein Sammlungsobjekt sein, das das Iterable-Protokoll unterstützt, oder es muss das Sequenzprotokoll unterstützen. Wenn es keines dieser Protokolle unterstützt, wird TypeError ausgelöst.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die Funktion `iter()` gibt ein Iterator-Objekt zurück. Ein Iterator ist ein Objekt, über das iteriert (geschleift) werden kann. Er ist das, was `for`-Schleifen in Python antreibt.

Sie können `iter()` verwenden, um einen Iterator aus jedem iterierbaren Objekt wie einer Liste, einem Tupel oder einem String zu erhalten.

### Beispiele

**Einen Iterator aus einer Liste erhalten:**

```python
my_list = [1, 2, 3]
my_iter = iter(my_list)

print(next(my_iter))
print(next(my_iter))
print(next(my_iter))
```

```output
1
2
3
```

```python
i = iter([1, 2, 3])
print(i)
print(i.__next__())
print(i.__next__())
print(i.__next__())
```

```output
<list_iterator object at 0x7f93158badc0>
1
2
3
```

## Relevante Links

- <router-link :to="'/builtin/next'">`next()`</router-link>
- <router-link :to="'/cheatsheet/control-flow'">Kontrollfluss</router-link>
- <router-link :to="'/cheatsheet/lists-and-tuples'">Listen und Tupel</router-link>
- <router-link :to="'/builtin/enumerate'">`enumerate()`</router-link>
- <router-link :to="'/builtin/zip'">`zip()`</router-link>
- <router-link :to="'/builtin/map'">`map()`</router-link>
- <router-link :to="'/builtin/filter'">`filter()`</router-link>
