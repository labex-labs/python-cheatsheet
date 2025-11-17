---
title: 'Python 列表推导式：分步入门指南 - Python 速查表'
description: '本文将逐步演示如何将 for 循环重写为 Python 推导式。'
date: 'March 22, 2019'
updated: 'July 3, 2022'
tags: 'python, basics'
socialImage: '/blog/python-comprehensions.png'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "Python 列表推导式：分步入门指南 - Python 速查表"
    description: "本文将逐步演示如何将 for 循环重写为 Python 推导式。"
    date: "March 22, 2019"
    updated: "July 3, 2022"
    tags: "python, basics"
    socialImage: "/blog/python-comprehensions.png"
</route>

<blog-title-header :frontmatter="frontmatter" title="Python 列表推导式：分步入门指南 - Python 速查表" />

_列表推导式_ (List Comprehensions) 是一种特殊的语法，它允许我们从其他列表中创建列表（[维基百科](https://en.wikipedia.org/wiki/List_comprehension)，[Python 教程](https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions)）。当处理数字以及一到两个嵌套的 _for 循环_ 时，它们非常有用，但超出这个范围，它们可能会变得有点难以阅读。

在本文中，我们将创建一些 _For 循环_ 并逐步将它们重写为 _推导式_ (Comprehensions)。

## 基础知识

事实上，_列表推导式_ 并不复杂，但初次接触时仍然有点难以理解，因为它们看起来 _有点_ 奇怪。为什么？嗯，它们书写的顺序与我们通常在 _For 循环_ 中看到的顺序是**相反的**。

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
>>> for n in names:
...     print(n)
# Charles
# Susan
# Patrick
# George
# Carol
```

要使用 _列表推导式_ 完成同样的事情，我们从 _循环_ 的最末尾开始：

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
>>> [print(n) for n in names]
# Charles
# Susan
# Patrick
# George
# Carol
```

注意我们是如何颠倒顺序的：

- 首先，我们有循环的输出内容 `[print(n) ...]`。
- 然后我们定义将存储每个元素并指向我们将要操作的 `List`、`Set` 或 `Dictionary` 的变量 `[... for n in names]`。

## 使用推导式创建新列表

> 这是 _列表推导式_ 的主要用途。其他用法可能会导致代码对您和其他人都难以阅读。

这是我们使用 _For 循环_ 从现有集合创建新列表的方式：

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']

>>> new_list = []
>>> for n in names:
...     new_list.append(n)

>>> print(new_list)
# ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
```

这是使用 _列表推导式_ 完成相同操作的方式：

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
>>> new_list = [n for n in names]
>>> print(new_list)
# ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
```

我们可以这样做的原因是 _列表推导式_ 的标准行为是返回一个列表：

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
>>> [n for n in names]
# ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
```

## 添加条件判断

如果我们的 `new_list` 只包含以 `C` 开头的名字怎么办？使用 _For 循环_，我们会这样做：

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']

>>> new_list = []
>>> for n in names:
...     if n.startswith('C'):
...         new_list.append(n)

>>> print(new_list)
# ['Charles', 'Carol']
```

在 _列表推导式_ 中，我们将 if 语句添加到其末尾：

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
>>> new_list = [n for n in names if n.startswith('C')]
>>> print(new_list)
# ['Charles', 'Carol']
```

可读性高得多。

## 格式化长列表推导式

这次，我们希望 `new_list` 不仅包含以 `C` 开头的名字，还包含以 `e` 结尾或包含 `k` 的名字：

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
>>> new_list = [n for n in names if n.startswith('C') or n.endswith('e') or 'k' in n]
>>> print(new_list)
# ['Charles', 'Patrick', 'George', 'Carol']
```

这相当混乱。幸运的是，可以将 _推导式_ 分成不同的行：

```python
new_list = [
    n
    for n in names
    if n.startswith("C")
    or n.endswith("e")
    or "k" in n
]
```

## 集合和字典推导式

如果您学习了 _列表推导式_ 的基础知识……恭喜！您刚刚用 <router-link to="/cheatsheet/sets">集合</router-link> 和 <router-link to="/cheatsheet/dictionaries">字典</router-link> 掌握了它。

### 集合推导式

```python
>>> my_set = {"abc", "def"}

>>> # 在这里，我们使用 for 循环从一个新集合中创建大写元素
>>> new_set = set()
>>> for s in my_set:
...    new_set.add(s.upper())
>>> print(new_set)
# {'DEF', 'ABC'}

>>> # 同样的操作，但使用集合推导式
>>> new_set = {s.upper() for s in my_set}
>>> print(new_set)
# {'DEF', 'ABC'}
```

### 字典推导式

```python
>>> my_dict = {'name': 'Christine', 'age': 98}

>>> # 使用 for 循环从现有字典创建新字典
>>> new_dict = {}
>>> for key, value in my_dict.items():
...     new_dict[key] = value
>>> print(new_dict)
# {'name': 'Christine', 'age': 98}

# 使用字典推导式
>>> new_dict = {key: value for key, value in my_dict.items()}  # 注意 ":"
>>> print(new_dict)
# {'name': 'Christine', 'age': 98}
```

> 推荐文章：[Python 集合：是什么、为什么以及如何操作 ](https://www.pythoncheatsheet.org/blog/python-sets-what-why-how)。

## 结论

每当我学到新东西时，都会有一种立即使用它的冲动。当发生这种情况时，我强迫自己停下来思考片刻……我应该把这个庞大、嵌套且看起来已经很混乱的 _For 循环_ 改成 _列表推导式_ 吗？可能不应该。

> 可读性很重要。[Python 之禅](https://www.python.org/dev/peps/pep-0020/)。
