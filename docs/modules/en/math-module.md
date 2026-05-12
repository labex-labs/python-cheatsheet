---
title: Python Math Module - Python Cheatsheet
description: The math module provides mathematical functions such as sqrt, ceil, floor, pi, and isclose.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Math Module
</base-title>

The `math` module provides mathematical functions such as `sqrt`, `ceil`, `floor`, `pi`, and `isclose`.

```python
import math
```

The functions in `math` work with regular numbers and return `int` or `float` values. For lists of numbers, see the <router-link to="/modules/statistics-module">statistics</router-link> module.

## Basic functions

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

## Constants

The module also exposes useful mathematical constants.

```python
import math

print(math.pi)
print(math.e)
```

```output
3.141592653589793
2.718281828459045
```

## Comparing floating-point numbers

`isclose` is safer than checking floats with `==`.

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

## Trigonometry

Angles are measured in radians. Use `radians()` when you have degrees.

```python
import math

angle = math.radians(90)
print(math.sin(angle))
```

```output
1.0
```

## Greatest common divisor

`gcd` is useful when simplifying ratios.

```python
import math

print(math.gcd(12, 18))
```

```output
6
```

## Relevant links

- <router-link to="/modules/statistics-module">Module: statistics</router-link>
- <router-link to="/cheatsheet/basics">Cheatsheet: Basics</router-link>
- <router-link to="/builtin/round">round()</router-link>
