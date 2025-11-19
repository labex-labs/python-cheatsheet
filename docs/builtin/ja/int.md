---
title: 'Python 組み込み関数 int() - Python チートシート'
description: '数値または文字列 x から整数オブジェクトを構築して返します。引数がない場合は 0 を返します。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python int() ビルトイン関数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#int">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
   数値または文字列 x から整数オブジェクトを構築して返します。引数が指定されない場合は 0 を返します。
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Python の `int()` 関数は、値を整数に変換するためのビルトイン関数です。引数として文字列または数値を指定でき、その整数の等価物を返します。これは、整数を必要とする数学的演算を実行したい場合や、値が整数型であることを保証したい場合に特に役立ちます。

## Examples

```python
# transform a string to an integer
from_integer = int('29')
print(from_integer)
print(type(from_integer))
```

```output
29
<class 'int'>
```

```python
# transform a float to integer
from_float = int(-3.14)
print(from_float)
print(type(from_float))
```

```output
-3
<class 'int'>
```

```python
# return 0 if no arguments are given
int()
```

```output
0
```

## Relevant links

- <router-link :to="'/builtin/float'">float()</router-link>
- <router-link :to="'/builtin/str'">str()</router-link>
- <router-link :to="'/builtin/hex'">hex()</router-link>
- <router-link :to="'/builtin/oct'">oct()</router-link>
- <router-link :to="'/builtin/bin'">bin()</router-link>
- <router-link :to="'/blog/python-data-types'">Python Data Types</router-link>
- <router-link :to="'/builtin/bool'">bool()</router-link>
- <router-link :to="'/builtin/complex'">complex()</router-link>
