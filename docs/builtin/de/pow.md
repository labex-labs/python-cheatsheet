---
title: 'Python pow()-Funktion – Python Spickzettel'
description: 'Die pow()-Funktion gibt die Potenz einer Zahl zurück.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python pow() eingebaute Funktion
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#pow">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
      Die pow()-Funktion gibt die Potenz einer Zahl zurück. Sie nimmt zwei oder drei Argumente entgegen:
      pow(base, exp): Gibt base hoch exp zurück (base ** exp).
      pow(base, exp, mod): Gibt (base ** exp) % mod zurück (für modulare Arithmetik).
      Das Ergebnis wird effizienter berechnet als base ** exp % mod, wenn das mod-Argument vorhanden ist.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die Funktion `pow()` wird für die Potenzierung verwendet. Sie kann zwei oder drei Argumente annehmen.

- `pow(base, exp)`: Dies ist äquivalent zu `base ** exp`.
- `pow(base, exp, mod)`: Dies ist äquivalent zu `(base ** exp) % mod`, ist aber effizienter. Dies ist nützlich für die modulare Arithmetik.

### Beispiele

```python
# Verwendung von zwei Argumenten (base ** exp)
print(pow(2, 3))
print(pow(3, 2))
print(pow(2, -3))  # äquivalent zu 1 / (2**3)

# Verwendung von drei Argumenten ((base ** exp) % mod)
print(pow(3, 2, 4))  # da 3**2 gleich 9 ist und 9 % 4 gleich 1 ist
print(pow(2, 3, 5))  # da 2**3 gleich 8 ist und 8 % 5 gleich 3 ist
```

```output
8
9
0.125
1
3
```

## Relevante Links

- <router-link to="/blog/python-data-types">Blog: Python Datentypen</router-link>
- <router-link to="/builtin/divmod">divmod()</router-link>
- <router-link to="/builtin/abs">abs()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/float">float()</router-link>
