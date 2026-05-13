---
title: Módulo Math de Python - Hoja de trucos de Python
description: El módulo `math` proporciona funciones matemáticas como `sqrt`, `ceil`, `floor`, `pi` e `isclose`.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo Math de Python
</base-title>

El módulo `math` proporciona funciones matemáticas como `sqrt`, `ceil`, `floor`, `pi` e `isclose`.

```python
import math
```

Las funciones de `math` trabajan con números normales y devuelven valores `int` o `float`. Para listas de números, consulta el módulo <router-link to="/modules/statistics-module">statistics</router-link>.

## Funciones básicas

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

El módulo también expone constantes matemáticas útiles.

```python
import math

print(math.pi)
print(math.e)
```

```output
3.141592653589793
2.718281828459045
```

## Comparar números de coma flotante

`isclose` es más seguro que comparar flotantes con `==`.

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

## Trigonometría

Los ángulos se miden en radianes. Usa `radians()` cuando tengas grados.

```python
import math

angle = math.radians(90)
print(math.sin(angle))
```

```output
1.0
```

## Máximo común divisor

`gcd` es útil cuando simplificas proporciones.

```python
import math

print(math.gcd(12, 18))
```

```output
6
```

## Enlaces relacionados

- <router-link to="/modules/statistics-module">Módulo: statistics</router-link>
- <router-link to="/cheatsheet/basics">Hoja de trucos: Conceptos básicos</router-link>
- <router-link to="/builtin/round">round()</router-link>
