---
title: "Módulo Math do Python - Folha de Referência Python"
description: "O módulo `math` fornece funções matemáticas como `sqrt`, `ceil`, `floor`, `pi` e `isclose`."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo Math do Python
</base-title>

O módulo `math` fornece funções matemáticas como `sqrt`, `ceil`, `floor`, `pi` e `isclose`.

```python
import math
```

As funções em `math` trabalham com números comuns e retornam valores `int` ou `float`. Para listas de números, veja o módulo <router-link to="/modules/statistics-module">statistics</router-link>.

## Funções básicas

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

O módulo também expõe constantes matemáticas úteis.

```python
import math

print(math.pi)
print(math.e)
```

```output
3.141592653589793
2.718281828459045
```

## Comparando números de ponto flutuante

`isclose` é mais seguro do que comparar floats com `==`.

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

## Trigonometria

Os ângulos são medidos em radianos. Use `radians()` quando tiver graus.

```python
import math

angle = math.radians(90)
print(math.sin(angle))
```

```output
1.0
```

## Máximo divisor comum

`gcd` é útil ao simplificar razões.

```python
import math

print(math.gcd(12, 18))
```

```output
6
```

## Links relacionados

- <router-link to="/modules/statistics-module">Módulo: statistics</router-link>
- <router-link to="/cheatsheet/basics">Folha de Referência: Conceitos básicos</router-link>
- <router-link to="/builtin/round">round()</router-link>
