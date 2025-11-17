---
title: 'Python frozenset()-Funktion – Python Spickzettel'
description: 'Gibt ein neues frozenset-Objekt zurück, optional mit Elementen aus einem iterierbaren Objekt. frozenset ist eine eingebaute Klasse. Siehe frozenset und Set-Typen — set, frozenset für Dokumentation zu dieser Klasse.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python frozenset()-Funktion
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#frozenset">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Gibt ein neues frozenset-Objekt zurück, optional mit Elementen aus einem iterierbaren Objekt. <router-link to="/builtin/frozenset">frozenset</router-link> ist eine eingebaute Klasse. Siehe <router-link to="/builtin/frozenset">frozenset</router-link> und Set Types — <router-link to="/builtin/set">set</router-link>, <router-link to="/builtin/frozenset">frozenset</router-link> für Dokumentation zu dieser Klasse.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die Funktion `frozenset()` in Python ist eine eingebaute Funktion, die eine unveränderliche, hashbare Menge (Set) aus einem iterierbaren Objekt erstellt. Im Gegensatz zu einem regulären `set` kann ein `frozenset` nach seiner Erstellung nicht mehr geändert werden, was bedeutet, dass Sie keine Elemente hinzufügen oder entfernen können. Diese Unveränderlichkeit macht es geeignet für die Verwendung als Dictionary-Schlüssel oder als Element in einem anderen Set.

## Beispiele

```python
frozenset([1, 2, 3])
frozenset({1, 2, 3})
frozenset((1, 2, 3))
```

Ausgabe:

```plaintext
frozenset({1, 2, 3})
frozenset({1, 2, 3})
frozenset({1, 2, 3})
```

## Relevante Links

- <router-link :to="'/builtin/set'">`set()`</router-link>
- <router-link :to="'/cheatsheet/sets'">Sets</router-link>
- <router-link :to="'/blog/python-sets-what-why-how'">Python Sets: Was, Warum und Wie</router-link>
- <router-link :to="'/builtin/tuple'">`tuple()`</router-link>
- <router-link :to="'/builtin/hash'">`hash()`</router-link>
