---
title: 'Python 集合 - Python 速查表'
description: 'Python 配备了多种内置数据类型来帮助我们组织数据。这些结构包括列表、字典、元组和集合。'
labUrl: 'https://labex.io/zh/labs/python-python-sets-633665?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 集合
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Python 配备了多种内置数据类型来帮助我们组织数据。这些结构包括列表、字典、元组和**集合**。

<base-disclaimer>
  <base-disclaimer-title>
    来自 Python 3 <a target="_blank" href="https://docs.python.org/3/tutorial/datastructures.html#sets">文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    集合是无序且不包含重复元素的集合。基本用途包括成员资格测试和消除重复条目。
  </base-disclaimer-content>
</base-disclaimer>

阅读 <router-link to="/blog/python-sets-what-why-how">Python 集合：是什么、为什么以及如何使用</router-link> 以获得更深入的参考。

## 初始化集合

创建集合有两种方法：使用花括号 `{}` 和内置函数 `set()`

<base-warning>
  <base-warning-title>
    空集合
  </base-warning-title>
  <base-warning-content>
    创建集合时，请确保不要使用空花括号 <code>{}</code>，否则会得到一个空字典。
  </base-warning-content>
</base-warning>

```python
# 使用花括号或 set() 函数创建集合
s = {1, 2, 3}  # 使用花括号
s = set([1, 2, 3])  # 使用 set() 构造函数

# 警告：空 {} 创建的是字典而不是集合
s = {}  # 这将创建一个字典而不是集合
type(s)  # 返回 <class 'dict'>
```

```output
<class 'dict'>
```

## 唯一元素的无序集合

集合会自动删除所有重复的值。

```python
# 集合自动删除重复项
s = {1, 2, 3, 2, 3, 4}  # 重复项被删除
s  # 返回 {1, 2, 3, 4}
```

```output
{1, 2, 3, 4}
```

由于它们是无序数据类型，因此不能对其进行索引。

```python
s = {1, 2, 3}
s[0]
```

```output
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'set' object does not support indexing
```

## 集合的添加和更新

使用 `add()` 方法，我们可以向集合中添加单个元素。

```python
# add() 方法：向集合中添加单个元素
s = {1, 2, 3}
s.add(4)  # 添加元素 4
s
```

```output
{1, 2, 3, 4}
```

使用 `update()` 可以添加多个元素：

```python
# update() 方法：从可迭代对象中添加多个元素
s = {1, 2, 3}
s.update([2, 3, 4, 5, 6])  # 添加多个元素（忽略重复项）
s
```

```output
{1, 2, 3, 4, 5, 6}
```

## 集合的移除和丢弃

这两种方法都会从集合中移除一个元素，但如果值不存在，`remove()` 会引发 `key error`。

```python
# remove() 方法：移除元素，如果找不到则引发 KeyError
s = {1, 2, 3}
s.remove(3)  # 移除元素 3
s
```

```output
{1, 2}
```

```python
s.remove(3)
```

```output
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
KeyError: 3
```

`discard()` 不会引发任何错误。

```python
# discard() 方法：移除元素，如果找不到则不报错
s = {1, 2, 3}
s.discard(3)  # 移除元素 3（安全，缺失时不报错）
s
```

```output
{1, 2}
```

```python
s.discard(3)
```

## 集合的并集

`union()` 或 `|` 将创建一个包含所提供集合中所有元素的新集合。

```python
# union()：合并多个集合中的所有元素（无重复项）
s1 = {1, 2, 3}
s2 = {3, 4, 5}
s1.union(s2)  # 或 's1 | s2' - 返回 {1, 2, 3, 4, 5}
```

```output
{1, 2, 3, 4, 5}
```

## 集合的交集

`intersection()` 或 `&` 将返回一个只包含所有集合中共同元素的集合。

```python
# intersection()：返回所有集合共有的元素
s1 = {1, 2, 3}
s2 = {2, 3, 4}
s3 = {3, 4, 5}
s1.intersection(s2, s3)  # 或 's1 & s2 & s3' - 返回 {3}
```

```output
{3}
```

## 集合的差集

`difference()` 或 `-` 将只返回第一个集合（被调用的集合）中独有的元素。

```python
# difference()：返回第一个集合中存在但其他集合中不存在的元素
s1 = {1, 2, 3}
s2 = {2, 3, 4}

s1.difference(s2)  # 或 's1 - s2' - 返回 {1}
```

```output
{1}
```

```python
s2.difference(s1) # 或 's2 - s1'
```

```output
{4}
```

## 集合的对称差集

`symmetric_difference()` 或 `^` 将返回所有存在于其中一个集合但不同时存在于两个集合中的元素。

```python
# symmetric_difference()：返回存在于任一集合但不同时存在于两个集合中的元素
s1 = {1, 2, 3}
s2 = {2, 3, 4}
s1.symmetric_difference(s2)  # 或 's1 ^ s2' - 返回 {1, 4}
```

```output
{1, 4}
```

## 相关链接

- <router-link to="/blog/python-data-types">Python 数据类型博客文章</router-link>
- <router-link to="/blog/python-sets-what-why-how">Python 集合：是什么、为什么以及如何使用</router-link>
- <router-link to="/cheatsheet/dictionaries">Python 字典</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Python 列表和元组</router-link>
