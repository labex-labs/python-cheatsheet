---
title: 'Python any() 内置函数 - Python 速查表'
description: '如果可迭代对象中任何元素为真，则返回 True。如果可迭代对象为空，则返回 False。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python any() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#any">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    如果可迭代对象中至少有一个元素为 True，则返回 True。如果可迭代对象为空，则返回 False。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

Python 中的 `any()` 函数是一个内置函数，用于检查可迭代对象中是否至少有一个元素为 `True`。如果任何元素评估为 true，它返回 `True`；如果可迭代对象为空或所有元素都为 false，则返回 `False`。这对于快速确定集合中的任何项是否满足某个条件非常有用。

## 示例

```python
# 所有值都为假值
any([0, '', False])

# 包含一个真值 (2)
any([0, 2, False])

# 空的可迭代对象被视为 False
any([])
```

输出：

```plaintext
False
True
False
```

## 相关链接

- <router-link to="/cheatsheet/control-flow">备忘单：控制流</router-link>
- <router-link to="/cheatsheet/comprehensions">备忘单：推导式</router-link>
- <router-link to="/blog/python-data-types">博客：Python 数据类型</router-link>
- <router-link to="/builtin/all">all()</router-link>
- <router-link to="/builtin/bool">bool()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
