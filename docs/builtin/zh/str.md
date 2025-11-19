---
title: 'Python str() 内置函数 - Python 速查表'
description: '返回对象的字符串版本。如果未提供对象，则返回空字符串。否则，str() 的行为取决于是否提供了编码或错误处理参数。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python str() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#func-str">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    返回对象的字符串版本。如果未提供对象，则返回空字符串。否则，str() 的行为取决于是否提供了 encoding 或 errors。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

Python 中的 `str()` 函数是一个内置函数，它返回对象的字符串版本。如果未提供任何对象，它将返回一个空字符串。它是将其他数据类型转换为字符串的多功能函数。

## 示例

```python
# 将整数转换为字符串
from_integer = str(29)
print(from_integer)
print(type(from_integer))
```

```output
29
<class 'str'>
```

```python
# 转换为字符串的浮点数
from_float = str(-3.14)
print(from_float)
print(type(from_float))
```

```output
-3.14
<class 'str'>
```

```python
# 返回一个空字符串
str()
```

```output
''
```

## 相关链接

- <router-link to="/cheatsheet/manipulating-strings">速查表：字符串操作</router-link>
- <router-link to="/cheatsheet/string-formatting">速查表：字符串格式化</router-link>
- <router-link to="/blog/python-data-types">博客：Python 数据类型</router-link>
- <router-link to="/builtin/repr">repr()</router-link>
- <router-link to="/builtin/ascii">ascii()</router-link>
- <router-link to="/builtin/bytes">bytes()</router-link>
- <router-link to="/builtin/format">format()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/float">float()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/set">set()</router-link>
