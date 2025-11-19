---
title: 'Python 复制模块 - Python 速查表'
description: '复制模块包含一组与复制列表、对象、数组等不同元素相关的函数。它可用于创建浅拷贝和深拷贝。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 复制模块
</base-title>

Copy 模块是一组与复制列表、对象、数组等不同元素相关的函数。它可用于创建浅拷贝和深拷贝。

<base-disclaimer>
  <base-disclaimer-title>
    来自 Python 3 <a target="_blank" href="https://docs.python.org/3/library/copy.html">文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Python 中的赋值语句不会复制对象，它们会在目标和对象之间创建绑定。对于可变或包含可变项的集合，有时需要复制，以便可以更改一个副本而不更改另一个。此模块提供了通用的<b>浅</b>拷贝和<b>深</b>拷贝操作。
  </base-disclaimer-content>
</base-disclaimer>

## 浅拷贝操作

浅拷贝构造一个新的复合对象，然后（在可能的情况下）将指向原始对象中对象的引用插入其中。

copy.copy(x)
返回 x 的浅拷贝。

```python
import copy
a = [[1],[2],[3]]
# 创建浅拷贝（嵌套列表仍被引用）
b = copy.copy(a)

a
```

```output
[[1], [2], [3]]
```

```python
b
```

```output
[[1], [2], [3]]
```

### 不导入 copy 模块则无法使用

```output
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'copy' is not defined
```

## 深拷贝操作

深拷贝构造一个新的复合对象，然后递归地将原始对象中对象的拷贝插入其中。

copy.deepcopy(x[, memo])
返回 x 的深拷贝。

```python
import copy
a = [[1],[2],[3]]
# 创建深拷贝（完全独立的对象）
b = copy.deepcopy(a)

# 修改原始对象
a[0][0] = 0
a[1] = None

a
```

```output
[[0], None, [3]]
```

```python
b
```

```output
[[1], [2], [3]]
```

## 相关链接

- <router-link to="/cheatsheet/oop-basics">Cheatsheet: OOP 基础</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: 列表和元组</router-link>
- <router-link to="/cheatsheet/dictionaries">Cheatsheet: 字典</router-link>
- <router-link to="/blog/python-data-types">Blog: Python 数据类型</router-link>
- <router-link to="/builtin/object">object()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/slice">slice()</router-link>
