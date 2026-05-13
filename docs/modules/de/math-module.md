---
title: Python Math Modul - Python Spickzettel
description: Das `math`-Modul stellt mathematische Funktionen wie `sqrt`, `ceil`, `floor`, `pi` und `isclose` bereit.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Math Modul
</base-title>

Das `math`-Modul stellt mathematische Funktionen wie `sqrt`, `ceil`, `floor`, `pi` und `isclose` bereit.

```python
import math
```

Die Funktionen in `math` arbeiten mit normalen Zahlen und geben `int`- oder `float`-Werte zurück. Für Zahlenlisten siehe das Modul <router-link to="/modules/statistics-module">statistics</router-link>.

## Grundfunktionen

```python
import math

print(math.sqrt(81))
print(math.ceil(3.2))
print(math.floor(3.8))
```

```output
9.0
4
3
```

## Konstanten

Das Modul stellt auch nützliche mathematische Konstanten bereit.

```python
import math

print(math.pi)
print(math.e)
```

```output
3.141592653589793
2.718281828459045
```

## Fließkommazahlen vergleichen

`isclose` ist sicherer als der Vergleich von Fließkommazahlen mit `==`.

```python
import math

result = 0.1 + 0.2
print(result == 0.3)
print(math.isclose(result, 0.3))
```

```output
False
True
```

## Trigonometrie

Winkel werden in Radiant gemessen. Verwende `radians()`, wenn du Gradangaben hast.

```python
import math

angle = math.radians(90)
print(math.sin(angle))
```

```output
1.0
```

## Größter gemeinsamer Teiler

`gcd` ist beim Kürzen von Verhältnissen hilfreich.

```python
import math

print(math.gcd(12, 18))
```

```output
6
```

## Relevante Links

- <router-link to="/modules/statistics-module">Modul: statistics</router-link>
- <router-link to="/cheatsheet/basics">Spickzettel: Grundlagen</router-link>
- <router-link to="/builtin/round">round()</router-link>
