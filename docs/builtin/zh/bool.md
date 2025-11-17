---
title: 'Python bool() 内置函数 - Python 速查表'
description: '返回布尔值，即 True 或 False。x 使用标准的真值测试程序进行转换。如果 x 为假或被省略，则返回 False；否则返回 True。bool 类是 int 的子类，不能进一步被子类化。其唯一实例是 False 和 True。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python bool() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#bool">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    返回一个布尔值，True 或 False。x 使用标准的真值测试过程进行转换。如果 x 为假或被省略，则返回 False；否则返回 True。bool 类是 int 的子类。它不能被进一步子类化。它唯一的实例是 False 和 True。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

Python 中的 `bool()` 函数是一个内置函数，用于将值转换为布尔值（`True` 或 `False`）。它遵循标准的真值测试过程，其中像 `0`、`None` 和空集合这样的值被视为 `False`，而大多数其他值被视为 `True`。这对于使用条件语句控制程序的流程至关重要。

## 示例

### 假值 (Falsy Values)

这些值被视为 `False`：

```python
bool(False)
bool(None)
bool(0)
bool(0.0)
bool('')      # 空字符串
bool([])      # 空列表
bool({})      # 空字典
bool(set())   # 空集合
```

输出：

```plaintext
False
False
False
False
False
False
False
False
```

### 真值 (Truthy Values)

大多数其他值被视为 `True`：

```python
bool(True)
bool(1)
bool(-1)
bool('hello')
bool([1, 2])
bool({'a': 1})
```

输出：

```plaintext
True
True
True
True
True
True
```

## 相关链接

- <router-link to="/cheatsheet/control-flow">备忘单：控制流</router-link>
- <router-link to="/blog/python-data-types">博客：Python 数据类型</router-link>
- <router-link to="/builtin/all">all()</router-link>
- <router-link to="/builtin/any">any()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/str">str()</router-link>
