---
title: "Module Math Python - Aide-mémoire Python"
description: "Le module `math` fournit des fonctions mathématiques comme `sqrt`, `ceil`, `floor`, `pi` et `isclose`."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Module Math Python
</base-title>

Le module `math` fournit des fonctions mathématiques comme `sqrt`, `ceil`, `floor`, `pi` et `isclose`.

```python
import math
```

Les fonctions de `math` travaillent avec des nombres classiques et renvoient des valeurs `int` ou `float`. Pour des listes de nombres, consultez le module <router-link to="/modules/statistics-module">statistics</router-link>.

## Fonctions de base

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

## Constantes

Le module expose aussi des constantes mathématiques utiles.

```python
import math

print(math.pi)
print(math.e)
```

```output
3.141592653589793
2.718281828459045
```

## Comparer des nombres à virgule flottante

`isclose` est plus sûr qu’une comparaison de flottants avec `==`.

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

## Trigonométrie

Les angles se mesurent en radians. Utilisez `radians()` si vous partez de degrés.

```python
import math

angle = math.radians(90)
print(math.sin(angle))
```

```output
1.0
```

## Plus grand commun diviseur

`gcd` est utile pour simplifier des rapports.

```python
import math

print(math.gcd(12, 18))
```

```output
6
```

## Liens pertinents

- <router-link to="/modules/statistics-module">Module : statistics</router-link>
- <router-link to="/cheatsheet/basics">Aide-mémoire : Bases</router-link>
- <router-link to="/builtin/round">round()</router-link>
