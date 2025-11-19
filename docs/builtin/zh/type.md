---
title: 'Python 内置函数 type() - Python 速查表'
description: '当只有一个参数时，返回对象的类型。返回值是一个类型对象，通常与 object.__class__返回的对象相同。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python type() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#type">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    当只有一个参数时，返回对象的类型。返回值是一个类型对象，通常与 object.__class__ 返回的对象相同。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

Python 中的 `type()` 函数是一个内置函数，用于返回对象的类型。它是理解你在 Python 中处理的数据类型的基本工具。

## 示例

```python
type('span')
type(99)
type(1.1)
type([1, 2])
type((1, 2))
type({1, 2})
type({'a': 1, 'b': 2})
```

```output
<class 'str'>
<class 'int'>
<class 'float'>
<class 'list'>
<class 'tuple'>
<class 'set'>
<class 'dict'>
```

## 相关链接

- <router-link to="/blog/python-data-types/">Python 数据类型</router-link>
- <router-link to="/builtin/isinstance/">isinstance()</router-link>
- <router-link to="/builtin/issubclass/">issubclass()</router-link>
- <router-link to="/builtin/str/">str()</router-link>
- <router-link to="/builtin/int/">int()</router-link>
- <router-link to="/builtin/float/">float()</router-link>
- <router-link to="/builtin/list/">list()</router-link>
- <router-link to="/builtin/tuple/">tuple()</router-link>
- <router-link to="/builtin/dict/">dict()</router-link>
- <router-link to="/builtin/set/">set()</router-link>
