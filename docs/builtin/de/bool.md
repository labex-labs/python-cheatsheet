---
title: 'Python bool()-Funktion – Python Spickzettel'
description: 'Gibt einen booleschen Wert zurück, entweder True oder False. x wird mithilfe des Standardverfahrens zur Wahrheitsprüfung konvertiert. Wenn x falsch ist oder weggelassen wird, wird False zurückgegeben; andernfalls wird True zurückgegeben. Die bool-Klasse ist eine Unterklasse von int. Sie kann nicht weiter unterklassifiziert werden. Ihre einzigen Instanzen sind False und True.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python bool() eingebaute Funktion
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#bool">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Gibt einen booleschen Wert zurück, True oder False. x wird unter Verwendung des Standard-Wahrheitstestverfahrens konvertiert. Wenn x falsch ist oder weggelassen wird, gibt dies False zurück; andernfalls gibt es True zurück. Die bool-Klasse ist eine Unterklasse von int. Sie kann nicht weiter unterklassifiziert werden. Ihre einzigen Instanzen sind False und True.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die `bool()` Funktion in Python ist eine eingebaute Funktion, die einen Wert in einen booleschen Wert (`True` oder `False`) umwandelt. Sie folgt dem Standard-Wahrheitstestverfahren, bei dem Werte wie `0`, `None` und leere Sammlungen als `False` betrachtet werden, während die meisten anderen Werte `True` sind. Dies ist grundlegend für die Steuerung des Programmflusses mit bedingten Anweisungen.

## Beispiele

### Falsche Werte (Falsy Values)

Diese Werte werden als `False` betrachtet:

```python
bool(False)
bool(None)
bool(0)
bool(0.0)
bool('')      # leere Zeichenkette
bool([])      # leere Liste
bool({})      # leeres Dict
bool(set())   # leeres Set
```

```output
False
False
False
False
False
False
False
False
```

### Wahre Werte (Truthy Values)

Die meisten anderen Werte werden als `True` betrachtet:

```python
bool(True)
bool(1)
bool(-1)
bool('hello')
bool([1, 2])
bool({'a': 1})
```

```output
True
True
True
True
True
True
```

## Relevante Links

- <router-link to="/cheatsheet/control-flow">Cheatsheet: Kontrollfluss</router-link>
- <router-link to="/blog/python-data-types">Blog: Python Datentypen</router-link>
- <router-link to="/builtin/all">all()</router-link>
- <router-link to="/builtin/any">any()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/str">str()</router-link>
