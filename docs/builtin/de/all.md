---
title: 'Python all()-Funktion – Python Spickzettel'
description: 'Gibt True zurück, wenn alle Elemente des Iterierbaren wahr sind (oder wenn das Iterierbare leer ist).'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python all() eingebaute Funktion
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#all">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Gibt True zurück, wenn alle Elemente des Iterierbaren wahr sind (oder wenn das Iterierbare leer ist).
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die `all()` Funktion in Python ist eine eingebaute Funktion, die prüft, ob alle Elemente in einem Iterierbaren `True` sind. Sie gibt `True` zurück, wenn jedes Element als wahr ausgewertet wird oder wenn das Iterierbare leer ist. Dies ist nützlich, um Bedingungen über eine Sammlung von Elementen hinweg zu validieren, wie z. B. die Überprüfung, ob alle Zahlen in einer Liste positiv sind oder ob alle erforderlichen Felder in einem Formular ausgefüllt sind.

## Beispiele

```python
# Alle Werte sind wahrheitsgemäß (truthy)
all([1, 2, 3])

# Enthält einen nicht wahrheitsgemäßen (falsy) Wert (0)
all([1, 0, 3])

# Enthält einen nicht wahrheitsgemäßen (falsy) Wert (leerer String)
all(['a', '', 'c'])

# Ein leeres Iterierbares wird als True betrachtet
all([])
```

Ausgabe:

```plaintext
True
False
False
True
```

## Relevante Links

- <router-link to="/cheatsheet/control-flow">Cheatsheet: Kontrollfluss</router-link>
- <router-link to="/cheatsheet/comprehensions">Cheatsheet: Comprehensions</router-link>
- <router-link to="/blog/python-data-types">Blog: Python Datentypen</router-link>
- <router-link to="/builtin/any">any()</router-link>
- <router-link to="/builtin/bool">bool()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
