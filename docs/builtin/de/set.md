---
title: 'Python set()-Funktion – Python Spickzettel'
description: 'Gibt ein neues Set-Objekt zurück, optional mit Elementen aus einem Iterable. set ist eine eingebaute Klasse. Siehe set und Set-Typen — set, frozenset für die Dokumentation dieser Klasse.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python set() eingebaute Funktion
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#set">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Gibt ein neues Set-Objekt zurück, optional mit Elementen aus einem iterierbaren Objekt. set ist eine eingebaute Klasse. Siehe <router-link to="/cheatsheet/sets">set</router-link> und Set Types — set, frozenset für Dokumentation zu dieser Klasse.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Der `set()`-Konstruktor erstellt ein neues Set. Ein Set ist eine ungeordnete Sammlung eindeutiger Elemente. Sie können ein leeres Set erstellen oder ein Set aus einem iterierbaren Objekt erstellen.

### Beispiele

**Ein leeres Set erstellen:**

```python
my_set = set()
print(my_set)
```

Ausgabe:

```plaintext
set()
```

**Ein Set aus einer Liste erstellen (Duplikate werden entfernt):**

```python
my_list = [1, 2, 2, 3, 3, 3]
my_set = set(my_list)
print(my_set)
```

Ausgabe:

```plaintext
{1, 2, 3}
```

## Relevante Links

- <router-link to="/cheatsheet/sets">Cheatsheet: Sets</router-link>
- <router-link to="/cheatsheet/comprehensions">Cheatsheet: Comprehensions</router-link>
- <router-link to="/blog/python-sets-what-why-how">Blog: Python Sets - Was, Warum, Wie</router-link>
- <router-link to="/blog/python-data-types">Blog: Python Datentypen</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/frozenset">frozenset()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
