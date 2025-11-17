---
title: 'Python 集合：是什么、为什么以及如何使用 - Python 速查表'
description: '编写代码时，实现方式不止一种。有些被认为是糟糕的，而有些则清晰、简洁且易于维护，即“Pythonic”。在本文中，我们将探讨 Python 集合如何帮助我们提高代码的可读性，并加快程序的执行速度。'
date: 'July 27, 2018'
updated: 'July 3, 2022'
tags: 'python, basics'
socialImage: '/blog/sets.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "Python 集合：是什么、为什么以及如何使用 - Python 速查表"
    description: "编写代码时，实现方式不止一种。有些被认为是糟糕的，而有些则清晰、简洁且易于维护，即“Pythonic”。在本文中，我们将探讨 Python 集合如何帮助我们提高代码的可读性，并加快程序的执行速度。"
    date: "July 27, 2018"
    updated: "July 3, 2022"
    tags: "python, basics"
    socialImage: "/blog/sets.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="Python 集合：是什么、为什么以及如何使用 - Python 速查表" />

Python 配备了多种内置数据类型来帮助我们组织数据。这些结构包括 `lists`（列表）、`dictionaries`（字典）、`tuples`（元组）和 `sets`（集合）。

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/tutorial/datastructures.html#sets">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    <code>set</code> 是一个**无序集合**，其中**没有重复元素**。基本用途包括**成员资格测试**和**消除重复条目**。集合对象还支持数学运算，如**并集 (union)**、**交集 (intersection)**、**差集 (difference)** 和**对称差集 (symmetric difference)**。
  </base-disclaimer-content>
</base-disclaimer>

在本文中，我们将回顾上述定义中列出的每一个元素。让我们马上开始，看看如何创建它们。

## 初始化集合 (Initializing a Set)

创建集合有两种方法：一种是使用内置函数 `set()` 并传入一个元素 `list`，另一种是使用花括号 `{}`。

### 使用 `set()` 内置函数初始化集合

```python
>>> s1 = set([1, 2, 3])
>>> s1
{1, 2, 3}
>>> type(s1)
<class 'set'>
```

### 使用花括号 `{}` 初始化集合

```python
>>> s2 = {3, 4, 5}
>>> s2
{3, 4, 5}
>>> type(s2)
<class 'set'>
>>>
```

<base-warning>
  <base-warning-title>
    空集合
  </base-warning-title>
  <base-warning-content>
    创建集合时，请确保不要使用空花括号 <code>{}</code>，否则您将得到一个空字典。
  </base-warning-content>
</base-warning>

```python
>>> s = {}
>>> type(s)
<class 'dict'>
```

现在是提及这一点的好时机：为了简单起见，本文中提供的所有示例都将使用单个数字整数，但集合可以包含 Python 支持的所有 [hashable](https://docs.python.org/3/glossary.html#term-hashable) 数据类型。换句话说，整数、字符串和元组，但不能是像 _lists_ 或 _dictionaries_ 这样的*可变*项：

```python
>>> s = {1, 'coffee', [4, 'python']}
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: unhashable type: 'list'
```

现在您知道如何创建集合以及它可以包含哪些类型的元素了，让我们继续看看*为什么*我们应该始终将它们纳入我们的工具箱。

## 为什么应该使用它们

我们可以用不止一种方式编写代码。有些被认为是相当糟糕的，而另一些则被认为是*清晰、简洁和可维护的*。或者说“[Pythonic](http://docs.python-guide.org/en/latest/writing/style/)”。

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="http://docs.python-guide.org/en/latest/">The Hitchhiker’s Guide to Python</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    当一位经验丰富的 Python 开发者（Pythonista）称代码片段“不够 Pythonic”时，他们通常意味着这些代码行没有遵循通用准则，并且没有以被认为是最好的（即最易读的）方式表达其意图。
  </base-disclaimer-content>
</base-disclaimer>

让我们开始探索 Python 集合不仅可以在可读性方面，还可以在程序执行时间方面如何帮助我们。

## 元素的无序集合

首先：您不能使用索引来访问 `set` 对象。

```python
>>> s = {1, 2, 3}
>>> s[0]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'set' object does not support indexing
```

也不能用切片来修改它们：

```python
>>> s[0:2]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'set' object is not subscriptable
```

_但是_，如果我们需要做的是删除重复项，或者执行数学运算（如合并列表（并集）），我们*应该*并且*总是*应该使用集合。

我必须提到，**在迭代方面，列表的性能优于集合**，所以如果这是您需要的，请优先使用列表。为什么？嗯，本文无意解释集合的内部工作原理，但这里有几个链接供您阅读：

- [时间复杂度 (Time Complexity)](https://wiki.python.org/moin/TimeComplexity)
- [集合是如何实现的？(How is set() implemented?)](https://stackoverflow.com/questions/3949310/how-is-set-implemented)
- [Python 集合与列表 (Python Sets vs Lists)](https://stackoverflow.com/questions/2831212/python-sets-vs-lists)
- [使用集合而不是列表推导式来确保唯一条目列表是否有任何优点或缺点？(Is there any advantage or disadvantage to using sets over list comps to ensure a list of unique entries?)](https://mail.python.org/pipermail/python-list/2011-June/606738.html)

## 没有重复项

在写这篇文章时，我忍不住想起我曾多少次使用 _for_ 循环和 _if_ 语句来检查和删除列表中重复的元素。我脸红地记得，不止一次，我写了类似这样的代码：

```python
>>> my_list = [1, 2, 3, 2, 3, 4]
>>> no_duplicate_list = []
>>> for item in my_list:
...     if item not in no_duplicate_list:
...             no_duplicate_list.append(item)
...
>>> no_duplicate_list
[1, 2, 3, 4]
```

或者使用了列表推导式：

```python
>>> my_list = [1, 2, 3, 2, 3, 4]
>>> no_duplicate_list = []
>>> [no_duplicate_list.append(item) for item in my_list if item not in no_duplicate_list]
[None, None, None, None]
>>> no_duplicate_list
[1, 2, 3, 4]
```

但没关系，那些都不重要了，因为我们现在有了集合：

```python
>>> my_list = [1, 2, 3, 2, 3, 4]
>>> no_duplicate_list = list(set(my_list))
>>> no_duplicate_list
[1, 2, 3, 4]
```

## 集合性能

现在让我们使用 _timeit_ 模块来看看列表和集合在删除重复项时的执行时间：

```python
>>> from timeit import timeit
>>> def no_duplicates(list):
...     no_duplicate_list = []
...     [no_duplicate_list.append(item) for item in list if item not in no_duplicate_list]
...     return no_duplicate_list
...
>>> # 首先，我们来看看列表的表现：
>>> print(timeit('no_duplicates([1, 2, 3, 1, 7])', globals=globals(), number=1000))
0.0018683355819786227
```

```python
>>> from timeit import timeit
>>> # 然后是集合：
>>> print(timeit('list(set([1, 2, 3, 1, 2, 3, 4]))', number=1000))
0.0010220493243764395
>>> # 更快，更简洁 =）
```

使用集合，我们不仅编写了比列表推导式*更少的代码行*，而且获得了*更具可读性*和*更高性能*的代码。

<base-warning>
  <base-warning-title>
    记住集合是无序的
  </base-warning-title>
  <base-warning-content>
    不能保证将它们转换回列表时元素的顺序会保持不变。
  </base-warning-content>
</base-warning>

来自 [Python 之禅 (Zen of Python)](https://www.python.org/dev/peps/pep-0020/)：

> 优于丑陋。 <br>
> 明确优于隐晦。<br>
> 简单优于复杂。<br>
> 平坦优于嵌套。

集合难道不正是优美、明确、简单和扁平的吗？

## 成员资格测试 (Membership tests)

每当我们使用 _if_ 语句来检查一个元素是否在一个列表中时，我们就在进行成员资格测试：

```python
my_list = [1, 2, 3]
>>> if 2 in my_list:
...     print('Yes, this is a membership test!')
...
# Yes, this is a membership test!
```

在进行成员资格测试时，集合比列表更高效：

```python
>>> from timeit import timeit
>>> def in_test(iterable):
...     for i in range(1000):
...             if i in iterable:
...                     pass
...
>>> timeit('in_test(iterable)', setup="from __main__ import in_test; iterable = list(range(1000))", number=1000)
# 12.459663048726043
```

```python
>>> from timeit import timeit
>>> def in_test(iterable):
...     for i in range(1000):
...             if i in iterable:
...                     pass
...
>>> timeit('in_test(iterable)', setup="from __main__ import in_test; iterable = set(range(1000))", number=1000)
# 0.12354438152988223
```

上述测试来自这个 [Stack Overflow 帖子](https://stackoverflow.com/questions/2831212/python-sets-vs-lists)。

因此，如果您在大型列表中进行此类比较，将该列表转换为集合将能显著加快速度。

## 添加元素 (Adding Elements)

根据要添加的元素数量，我们需要在 `add()` 和 `update()` 方法之间进行选择。

`add()` 将添加单个元素：

```python
>>> s = {1, 2, 3}
>>> s.add(4)
>>> s
{1, 2, 3, 4}
```

而 `update()` 添加多个元素：

```python
>>> s = {1, 2, 3}
>>> s.update([2, 3, 4, 5, 6])
>>> s
{1, 2, 3, 4, 5, 6}
```

请记住，集合会删除重复项。

## 移除元素 (Removing Elements)

如果您希望在代码尝试移除集合中不存在的元素时收到通知，请使用 `remove()`。否则，`discard()` 提供了一个合适的替代方案：

```python
>>> s = {1, 2, 3}
>>> s.remove(3)
>>> s
{1, 2}
>>> s.remove(3)
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# KeyError: 3
```

`discard()` 不会引发任何错误：

```python
>>> s = {1, 2, 3}
>>> s.discard(3)
>>> s
{1, 2}
>>> s.discard(3)
>>> # 什么也没发生！
```

我们也可以使用 `pop()` 随机移除一个元素：

```python
>>> s = {1, 2, 3, 4, 5}
>>> s.pop()  # 移除任意一个元素
1
>>> s
{2, 3, 4, 5}
```

或者使用 `clear()` 从集合中移除所有值：

```python
>>> s = {1, 2, 3, 4, 5}
>>> s.clear()  # 丢弃所有项
>>> s
set()
```

## union() 方法

`union()` 或 `|` 将创建一个新的集合，其中包含我们提供的集合中的所有元素：

```python
>>> s1 = {1, 2, 3}
>>> s2 = {3, 4, 5}
>>> s1.union(s2)  # 或 's1 | s2'
{1, 2, 3, 4, 5}
```

## intersection() 方法

`intersection` 或 `&` 将返回一个仅包含所有集合中共同元素的集合：

```python
>>> s1 = {1, 2, 3}
>>> s2 = {2, 3, 4}
>>> s3 = {3, 4, 5}
>>> s1.intersection(s2, s3)  # 或 's1 & s2 & s3'
{3}
```

## difference() 方法

差集创建一个新集合，其中包含“s1”中存在但“s2”中不存在的值：

```python
>>> s1 = {1, 2, 3}
>>> s2 = {2, 3, 4}
>>> s1.difference(s2)  # 或 's1 - s2'
{1}
```

## symmetric_difference()

`symmetric_difference` 或 `^` 将返回所有在集合之间不共有的值。

```python
>>> s1 = {1, 2, 3}
>>> s2 = {2, 3, 4}
>>> s1.symmetric_difference(s2)  # 或 's1 ^ s2'
{1, 4}
```

## 结论

我希望在阅读完本文后，您已经了解了什么是集合，如何操作它们的元素以及它们可以执行的操作。知道何时使用集合肯定会帮助您编写更清晰的代码并加快程序的运行速度。
