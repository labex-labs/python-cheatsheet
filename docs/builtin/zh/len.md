---
title: 'Python len() 内置函数 - Python 速查表'
description: '返回对象的长度（项数）。参数可以是序列（如字符串、字节、元组、列表或范围）或集合（如字典、集合或冻结集合）。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python len() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#len">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   返回对象的长度（项数）。参数可以是序列（如字符串、字节、<router-link to="/builtin/tuple">元组</router-link>、<router-link to="/builtin/list">列表</router-link> 或 <router-link to="/builtin/range">范围</router-link>）或集合（如<router-link to="/builtin/dict">字典</router-link>、<router-link to="/builtin/set">集合</router-link> 或 <router-link to="/builtin/frozenset">冻结集合</router-link>）。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

Python 中的 `len()` 函数是一个内置函数，用于返回对象中的项数（长度）。该对象可以是序列（如字符串、列表、元组）或集合（如字典或集合）。

## 示例

返回对象的项数：

```python
len('hello')
len(['cat', 3, 'dog'])
```

```output
5
3
```

## 判空测试

<base-warning>
  <base-warning-title>判空测试</base-warning-title>
    <base-warning-content>
      字符串、列表、字典等的判空测试不应使用
    <code>len</code>，而应优先使用直接的布尔值评估。
  </base-warning-content>
</base-warning>

```python
a = [1, 2, 3]

# 差
if len(a) > 0:  # 评估为 True
    print("the list is not empty!")

# 好
if a:  # 评估为 True
    print("the list is not empty!")
```

```output
the list is not empty!
the list is not empty!
```

## 相关链接

- <router-link to="/cheatsheet/lists-and-tuples">备忘单：列表和元组</router-link>
- <router-link to="/cheatsheet/dictionaries">备忘单：字典</router-link>
- <router-link to="/cheatsheet/sets">备忘单：集合</router-link>
- <router-link to="/blog/python-data-types">博客：Python 数据类型</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/set">set()</router-link>
