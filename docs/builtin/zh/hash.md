---
title: 'Python hash() 内置函数 - Python 速查表'
description: '返回对象的哈希值（如果存在）。哈希值是整数，用于在字典查找期间快速比较键。值相等（即使类型不同，如 1 和 1.0）的数字具有相同的哈希值。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python hash() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#hash">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   返回对象的哈希值（如果它有的话）。哈希值是整数。它们用于在字典查找期间快速比较字典键。值相等（即使类型不同，如 1 和 1.0）的数字具有相同的哈希值。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

`hash()` 函数返回一个表示对象哈希值的整数。这主要由字典用于快速查找键。

只有“可哈希”的对象才能传递给 `hash()`。如果一个对象在其生命周期内哈希值永不改变，则该对象是可哈希的。Python 的所有内置不可变类型（如字符串、数字和元组）都是可哈希的，而可变容器（如列表和字典）则不是。

### 示例

```python
# 整数的哈希值就是它本身
print(hash(1))
print(hash(1.0))  # 1 和 1.0 是相等的

# 字符串的哈希值（输出会有所不同）
print(hash('hello'))

# 元组的哈希值（输出会有所不同）
print(hash((1, 2, 3)))

# 尝试哈希列表将引发 TypeError
try:
    hash([1, 2, 3])
except TypeError as e:
    print(e)
```

```output
1
1
-1182655621190490452
529344067295497451
unhashable type: 'list'
```

## 相关链接

- <router-link :to="'/cheatsheet/dictionaries'">字典</router-link>
- <router-link :to="'/builtin/id'">id()</router-link>
- <router-link :to="'/cheatsheet/sets'">集合</router-link>
- <router-link :to="'/blog/python-sets-what-why-how'">Python 集合：是什么、为什么以及如何使用</router-link>
- <router-link :to="'/builtin/frozenset'">frozenset()</router-link>
- <router-link :to="'/builtin/object'">object()</router-link>
