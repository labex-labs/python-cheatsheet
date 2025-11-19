---
title: 'Python tuple() 内置函数 - Python 速查表'
description: 'tuple 实际上是一种不可变序列类型，而非函数，如《元组和序列类型 — list、tuple、range》中所述。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python tuple() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#tuple">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    tuple 实际上是一个不可变序列类型，而不是一个函数，如在 元组和序列类型 — list, tuple, range 中所述。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

虽然 `tuple` 技术上是一个类型，但它可以像函数一样使用来创建元组。元组是不可变序列，意味着它们在创建后不能被更改。

`tuple()` 构造函数可用于创建一个空元组或将一个可迭代对象（如列表）转换为元组。

### 示例

**创建一个空元组：**

```python
empty_tuple = tuple()
print(empty_tuple)
```

```output
()
```

**从列表中创建一个元组：**

```python
my_list = [1, 2, 3]
my_tuple = tuple(my_list)
print(my_tuple)
```

```output
(1, 2, 3)
```

## 相关链接

- <router-link to="/cheatsheet/lists-and-tuples">速查表：列表和元组</router-link>
- <router-link to="/cheatsheet/args-and-kwargs">速查表：\*args 和 \*\*kwargs</router-link>
- <router-link to="/blog/python-data-types">博客：Python 数据类型</router-link>
- <router-link to="/blog/python-easy-args-kwargs">博客：\*args 和 \*\*kwargs 解释</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/sorted">sorted()</router-link>
- <router-link to="/builtin/reversed">reversed()</router-link>
- <router-link to="/builtin/enumerate">enumerate()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
