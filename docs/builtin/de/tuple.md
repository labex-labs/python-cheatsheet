---
title: 'Python tuple()-Funktion – Python Spickzettel'
description: 'tuple ist keine Funktion, sondern ein unveränderlicher Sequenztyp, wie in Tupel und Sequenztypen – list, tuple, range dokumentiert.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python tuple() eingebaute Funktion
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#tuple">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Anstatt eine Funktion zu sein, ist tuple() eigentlich ein unveränderlicher Sequenztyp, wie in Tupel und Sequenztypen — list, tuple, range dokumentiert.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Obwohl `tuple` technisch gesehen ein Typ ist, kann es wie eine Funktion verwendet werden, um Tupel zu erstellen. Tupel sind unveränderliche Sequenzen, was bedeutet, dass sie nach ihrer Erstellung nicht mehr geändert werden können.

Der Konstruktor `tuple()` kann verwendet werden, um ein leeres Tupel zu erstellen oder um ein iterierbares Objekt (wie eine Liste) in ein Tupel umzuwandeln.

### Beispiele

**Ein leeres Tupel erstellen:**

```python
empty_tuple = tuple()
print(empty_tuple)
```

Ausgabe:

```plaintext
()
```

**Ein Tupel aus einer Liste erstellen:**

```python
my_list = [1, 2, 3]
my_tuple = tuple(my_list)
print(my_tuple)
```

Ausgabe:

```plaintext
(1, 2, 3)
```

## Relevante Links

- <router-link to="/cheatsheet/lists-and-tuples">Spickzettel: Listen und Tupel</router-link>
- <router-link to="/cheatsheet/args-and-kwargs">Spickzettel: \*args und \*\*kwargs</router-link>
- <router-link to="/blog/python-data-types">Blog: Python Datentypen</router-link>
- <router-link to="/blog/python-easy-args-kwargs">Blog: \*args und \*\*kwargs erklärt</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/sorted">sorted()</router-link>
- <router-link to="/builtin/reversed">reversed()</router-link>
- <router-link to="/builtin/enumerate">enumerate()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
