---
title: 'Python any()-Funktion – Python Spickzettel'
description: 'Gibt True zurück, wenn mindestens ein Element des Iterierbaren wahr ist. Bei einem leeren Iterierbaren wird False zurückgegeben.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python any() eingebaute Funktion
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#any">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Gibt True zurück, wenn mindestens ein Element des Iterierbaren wahr ist. Wenn das Iterierbare leer ist, wird False zurückgegeben.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die `any()` Funktion in Python ist eine eingebaute Funktion, die prüft, ob mindestens ein Element in einem Iterierbaren `True` ist. Sie gibt `True` zurück, wenn irgendein Element als wahr ausgewertet wird, und `False`, wenn das Iterierbare leer ist oder alle Elemente falsch sind. Dies ist nützlich, um schnell festzustellen, ob eine Bedingung von einem beliebigen Element in einer Sammlung erfüllt wird.

## Beispiele

```python
# Alle Werte sind falsy
any([0, '', False])

# Enthält einen truthy Wert (2)
any([0, 2, False])

# Ein leeres Iterierbares wird als False betrachtet
any([])
```

Ausgabe:

```plaintext
False
True
False
```

## Relevante Links

- <router-link to="/cheatsheet/control-flow">Cheatsheet: Kontrollfluss</router-link>
- <router-link to="/cheatsheet/comprehensions">Cheatsheet: Comprehensions</router-link>
- <router-link to="/blog/python-data-types">Blog: Python Datentypen</router-link>
- <router-link to="/builtin/all">all()</router-link>
- <router-link to="/builtin/bool">bool()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
