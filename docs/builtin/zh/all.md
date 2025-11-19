---
title: 'Python all() 内置函数 - Python 速查表'
description: '如果可迭代对象中的所有元素都为真（或可迭代对象为空），则返回 True。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 内置函数 all()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#all">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    如果可迭代对象中的所有元素都为 True（或如果可迭代对象为空），则返回 True。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

Python 中的 `all()` 函数是一个内置函数，用于检查可迭代对象中的所有元素是否为 `True`。如果每个元素都评估为 true，或者如果可迭代对象为空，它将返回 `True`。这对于验证集合中跨越的条件非常有用，例如检查列表中的所有数字是否为正数，或者表单中的所有必需字段是否都已填写。

## 示例

```python
# 所有值都是 truthy
all([1, 2, 3])

# 包含一个 falsy 值 (0)
all([1, 0, 3])

# 包含一个 falsy 值 (空字符串)
all(['a', '', 'c'])

# 空的可迭代对象被视为 True
all([])
```

```output
True
False
False
True
```

## 相关链接

- <router-link to="/cheatsheet/control-flow">备忘单：控制流</router-link>
- <router-link to="/cheatsheet/comprehensions">备忘单：推导式</router-link>
- <router-link to="/blog/python-data-types">博客：Python 数据类型</router-link>
- <router-link to="/builtin/any">any()</router-link>
- <router-link to="/builtin/bool">bool()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
