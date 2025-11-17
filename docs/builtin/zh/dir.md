---
title: 'Python dir() 内置函数 - Python 速查表'
description: '不带参数时，返回当前局部作用域中的名称列表。带参数时，尝试返回该对象的所有有效属性列表。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python dir() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#dir">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   不带参数时，返回当前局部作用域中的名称列表。带参数时，尝试返回该对象的所有有效属性列表。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

Python 中的 `dir()` 函数是一个强大的内置函数，它返回当前命名空间中的名称列表或给定对象的属性列表。它常用于内省和探索对象、模块和类，帮助您发现可以使用的可用方法、属性和名称。

## 语法

```python
dir([object])
```

- `object` (可选): 您希望探索其属性的对象。如果未提供，则返回当前命名空间中的名称。

## 探索当前命名空间中的名称

```python
a = 10
b = "Hello"
def my_function():
    pass

print(dir())
```

输出：

```plaintext
['__annotations__', '__builtins__', '__doc__', '__loader__', '__name__', '__package__', '__spec__', 'a', 'b', 'my_function']
```

## 探索模块属性

```python
import math
print(dir(math))
```

输出：

```plaintext
['__doc__', '__loader__', '__name__', '__package__', '__spec__', 'acos', 'acosh', 'asin', ... ]
```

## 探索对象属性

```python
class MyClass:
    def __init__(self):
        self.x = 5
        self.y = "Hello"

obj = MyClass()
print(dir(obj))
```

输出：

```plaintext
['__class__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', ... 'x', 'y']
```

## 将 `dir()` 与内置类型一起使用

```python
my_list = [1, 2, 3]
print(dir(my_list))
```

输出：

```plaintext
[..., 'append', 'clear', 'copy', 'count', 'extend', 'index', 'insert', 'pop', 'remove', 'reverse', 'sort']
```

## 过滤 `dir()` 输出

```python
import math
print([name for name in dir(math) if not name.startswith("__")])
```

输出：

```plaintext
['acos', 'acosh', 'asin', 'asinh', 'atan', 'atan2', ... ]
```

## 相关链接

- <router-link :to="'/builtin/globals'">`globals()`</router-link>
- <router-link :to="'/builtin/locals'">`locals()`</router-link>
- <router-link :to="'/builtin/hasattr'">`hasattr()`</router-link>
- <router-link :to="'/builtin/getattr'">`getattr()`</router-link>
- <router-link :to="'/cheatsheet/debugging'">调试</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP 基础</router-link>
