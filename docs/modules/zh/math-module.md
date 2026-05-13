---
title: "Python Math 模块 - Python 速查表"
description: "`math` 模块提供数学函数，例如 `sqrt`、`ceil`、`floor`、`pi` 和 `isclose`。"
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Math 模块
</base-title>

`math` 模块提供数学函数，例如 `sqrt`、`ceil`、`floor`、`pi` 和 `isclose`。

```python
import math
```

`math` 中的函数用于处理普通数字，并返回 `int` 或 `float`。如果是数字列表，请查看 <router-link to="/modules/statistics-module">statistics</router-link> 模块。

## 基本函数

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

## 常量

该模块还提供了一些常用的数学常量。

```python
import math

print(math.pi)
print(math.e)
```

```output
3.141592653589793
2.718281828459045
```

## 比较浮点数

与直接使用 `==` 比较浮点数相比，`isclose` 更安全。

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

## 三角函数

三角函数中的角度单位是弧度。如果你手头是角度值，可以先用 `radians()` 转换。

```python
import math

angle = math.radians(90)
print(math.sin(angle))
```

```output
1.0
```

## 最大公约数

`gcd` 在化简比例时很有用。

```python
import math

print(math.gcd(12, 18))
```

```output
6
```

## 相关链接

- <router-link to="/modules/statistics-module">模块：statistics</router-link>
- <router-link to="/cheatsheet/basics">速查表：基础知识</router-link>
- <router-link to="/builtin/round">round()</router-link>
