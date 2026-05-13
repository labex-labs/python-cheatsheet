---
title: Модуль Math Python - Шпаргалка Python
description: Модуль `math` предоставляет математические функции вроде `sqrt`, `ceil`, `floor`, `pi` и `isclose`.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Модуль Math Python
</base-title>

Модуль `math` предоставляет математические функции вроде `sqrt`, `ceil`, `floor`, `pi` и `isclose`.

```python
import math
```

Функции в `math` работают с обычными числами и возвращают `int` или `float`. Для списков чисел смотрите модуль <router-link to="/modules/statistics-module">statistics</router-link>.

## Базовые функции

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

## Константы

Модуль также предоставляет полезные математические константы.

```python
import math

print(math.pi)
print(math.e)
```

```output
3.141592653589793
2.718281828459045
```

## Сравнение чисел с плавающей точкой

`isclose` безопаснее, чем сравнивать float через `==`.

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

## Тригонометрия

Углы измеряются в радианах. Используйте `radians()`, если у вас есть градусы.

```python
import math

angle = math.radians(90)
print(math.sin(angle))
```

```output
1.0
```

## Наибольший общий делитель

`gcd` полезен при сокращении отношений.

```python
import math

print(math.gcd(12, 18))
```

```output
6
```

## Ссылки по теме

- <router-link to="/modules/statistics-module">Модуль: statistics</router-link>
- <router-link to="/cheatsheet/basics">Шпаргалка: основы</router-link>
- <router-link to="/builtin/round">round()</router-link>
