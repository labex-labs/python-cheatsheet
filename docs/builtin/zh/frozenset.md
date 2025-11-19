---
title: 'Python frozenset() 内置函数 - Python 速查表'
description: '返回一个新的 frozenset 对象，可选地包含来自可迭代对象的元素。frozenset 是一个内置类。有关此类文档，请参阅 frozenset 和集合类型 — set, frozenset。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python frozenset() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#frozenset">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   返回一个新的 frozenset 对象，可选地包含从可迭代对象中获取的元素。 <router-link to="/builtin/frozenset">frozenset</router-link> 是一个内置类。有关此类文档，请参阅 <router-link to="/builtin/frozenset">frozenset</router-link> 和 Set Types — <router-link to="/builtin/set">set</router-link>, <router-link to="/builtin/frozenset">frozenset</router-link>。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

Python 中的 `frozenset()` 函数是一个内置函数，它从可迭代对象创建了一个不可变的、可哈希的集合。与常规的 `set` 不同，`frozenset` 在创建后不能被修改，这意味着你不能添加或删除元素。这种不可变性使其适合用作字典的键或另一个集合中的元素。

## 示例

```python
frozenset([1, 2, 3])
frozenset({1, 2, 3})
frozenset((1, 2, 3))
```

```output
frozenset({1, 2, 3})
frozenset({1, 2, 3})
frozenset({1, 2, 3})
```

## 相关链接

- <router-link :to="'/builtin/set'">`set()`</router-link>
- <router-link :to="'/cheatsheet/sets'">集合 (Sets)</router-link>
- <router-link :to="'/blog/python-sets-what-why-how'">Python 集合：是什么、为什么以及如何使用</router-link>
- <router-link :to="'/builtin/tuple'">`tuple()`</router-link>
- <router-link :to="'/builtin/hash'">`hash()`</router-link>
