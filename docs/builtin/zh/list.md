---
title: 'Python list() 内置函数 - Python 速查表'
description: 'list 实际上是一个可变序列类型，而非函数，如“列表和序列类型 — list, tuple, range”中所述。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python list() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#list">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   `list` 不是一个函数，而是一个可变序列类型，如 Lists and Sequence Types — <router-link to="/builtin/list">list</router-link>, <router-link to="/builtin/tuple">tuple</router-link>, <router-link to="/builtin/range">range</router-link> 中所述。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

在 Python 中，`list` 不是一个函数，而是一个内置的可变序列类型。这意味着它是一种可以容纳有序项目集合的数据结构，并且您可以更改其内容。您可以使用方括号 `[]` 或 `list()` 构造函数来创建列表。

## 示例

```python
l = list()
print(l)
l.append(1)
l.append(2)
print(l)
```

输出：

```plaintext
[]
[1, 2]
```

## 相关链接

- <router-link to="/cheatsheet/lists-and-tuples">速查表：列表和元组</router-link>
- <router-link to="/cheatsheet/comprehensions">速查表：推导式</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">博客：Python 推导式分步指南</router-link>
- <router-link to="/blog/python-data-types">博客：Python 数据类型</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/len">len()</router-link>
