---
title: Python Math モジュール - Python チートシート
description: `math` モジュールは、`sqrt`、`ceil`、`floor`、`pi`、`isclose` などの数学関数を提供します。
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Math モジュール
</base-title>

`math` モジュールは、`sqrt`、`ceil`、`floor`、`pi`、`isclose` などの数学関数を提供します。

```python
import math
```

`math` の関数は通常の数値を扱い、`int` や `float` を返します。数値のリストについては <router-link to="/modules/statistics-module">statistics</router-link> モジュールを参照してください。

## 基本関数

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

## 定数

このモジュールは便利な数学定数も公開しています。

```python
import math

print(math.pi)
print(math.e)
```

```output
3.141592653589793
2.718281828459045
```

## 浮動小数点数の比較

`isclose` は、浮動小数点数を `==` で比較するより安全です。

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

## 三角関数

角度はラジアンで扱います。度数法の値があるときは `radians()` を使ってください。

```python
import math

angle = math.radians(90)
print(math.sin(angle))
```

```output
1.0
```

## 最大公約数

`gcd` は比を簡約するときに便利です。

```python
import math

print(math.gcd(12, 18))
```

```output
6
```

## 関連リンク

- <router-link to="/modules/statistics-module">モジュール: statistics</router-link>
- <router-link to="/cheatsheet/basics">チートシート: 基礎</router-link>
- <router-link to="/builtin/round">round()</router-link>
