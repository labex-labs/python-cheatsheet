---
title: 'Python 組み込み関数 dir() - Python チートシート'
description: '引数なしの場合、現在のローカルスコープ内の名前のリストを返します。引数がある場合、そのオブジェクトの有効な属性のリストを返そうとします。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python dir() 内蔵関数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#dir">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
   引数なしで呼び出された場合、現在のローカルスコープ内の名前のリストを返します。引数がある場合、そのオブジェクトの有効な属性のリストを返そうとします。
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Python の `dir()` 関数は、現在の名前空間内の名前、または指定されたオブジェクトの属性のリストを返す強力な内蔵関数です。これは、オブジェクト、モジュール、クラスを調査および探索するためによく使用され、操作できる利用可能なメソッド、属性、名前を発見するのに役立ちます。

## Syntax

```python
dir([object])
```

- `object` (オプション): 属性を調査したいオブジェクト。指定しない場合、現在の名前空間内の名前を返します。

## 現在の名前空間内の名前の調査

```python
a = 10
b = "Hello"
def my_function():
    pass

print(dir())
```

```output
['__annotations__', '__builtins__', '__doc__', '__loader__', '__name__', '__package__', '__spec__', 'a', 'b', 'my_function']
```

## モジュール属性の調査

```python
import math
print(dir(math))
```

```output
['__doc__', '__loader__', '__name__', '__package__', '__spec__', 'acos', 'acosh', 'asin', ... ]
```

## オブジェクト属性の調査

```python
class MyClass:
    def __init__(self):
        self.x = 5
        self.y = "Hello"

obj = MyClass()
print(dir(obj))
```

```output
['__class__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', ... 'x', 'y']
```

## 内蔵型の `dir()` の使用

```python
my_list = [1, 2, 3]
print(dir(my_list))
```

```output
[..., 'append', 'clear', 'copy', 'count', 'extend', 'index', 'insert', 'pop', 'remove', 'reverse', 'sort']
```

## `dir()` 出力のフィルタリング

```python
import math
print([name for name in dir(math) if not name.startswith("__")])
```

```output
['acos', 'acosh', 'asin', 'asinh', 'atan', 'atan2', ... ]
```

## 関連リンク

- <router-link :to="'/builtin/globals'">`globals()`</router-link>
- <router-link :to="'/builtin/locals'">`locals()`</router-link>
- <router-link :to="'/builtin/hasattr'">`hasattr()`</router-link>
- <router-link :to="'/builtin/getattr'">`getattr()`</router-link>
- <router-link :to="'/cheatsheet/debugging'">デバッグ</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP の基礎</router-link>
