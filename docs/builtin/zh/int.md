---
title: 'Python int() 内置函数 - Python 速查表'
description: '从数字或字符串 x 构建整数对象，或在未提供参数时返回 0。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python int() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#int">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   由数字或字符串 x 构建的整数对象，如果未给出参数，则返回 0。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

Python 中的 `int()` 函数是一个内置函数，它允许您将一个值转换为整数。它可以接受字符串或数字作为参数，并返回其整数等效值。当您需要执行需要整数的数学运算或需要确保某个值是整数类型时，这特别有用。

## 示例

```python
# transform a string to an integer
from_integer = int('29')
print(from_integer)
print(type(from_integer))
```

输出：

```plaintext
29
<class 'int'>
```

```python
# transform a float to integer
from_float = int(-3.14)
print(from_float)
print(type(from_float))
```

输出：

```plaintext
-3
<class 'int'>
```

```python
# return 0 if no arguments are given
int()
```

输出：

```plaintext
0
```

## 相关链接

- <router-link :to="'/builtin/float'">float()</router-link>
- <router-link :to="'/builtin/str'">str()</router-link>
- <router-link :to="'/builtin/hex'">hex()</router-link>
- <router-link :to="'/builtin/oct'">oct()</router-link>
- <router-link :to="'/builtin/bin'">bin()</router-link>
- <router-link :to="'/blog/python-data-types'">Python 数据类型</router-link>
- <router-link :to="'/builtin/bool'">bool()</router-link>
- <router-link :to="'/builtin/complex'">complex()</router-link>
