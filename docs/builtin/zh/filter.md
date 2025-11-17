---
title: 'Python filter() 内置函数 - Python 速查表'
description: '从可迭代对象中筛选出函数返回 True 的元素，构建一个迭代器。可迭代对象可以是序列、支持迭代的容器或迭代器。如果 function 为 None，则假定为恒等函数，即移除可迭代对象中所有为 False 的元素。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python filter() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#filter">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   从可迭代对象中构造一个 <router-link to="/builtin/iter">迭代器</router-link>，该迭代器包含函数返回 true 的那些元素。iterable 可以是序列、支持迭代的容器或 <router-link to="/builtin/iter">迭代器</router-link>。如果 function 为 None，则假定为恒等函数，即移除可迭代对象中所有为 false 的元素。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

Python 中的 `filter()` 函数是一个内置函数，它允许您处理一个可迭代对象并提取满足特定条件的项。它返回一个包含满足条件的元素的 <router-link to="/builtin/iter">迭代器</router-link>。

## 语法

```python
filter(function, iterable)
```

- **function**: 对可迭代对象中每个项执行的函数。它应该为每个项返回 `True` 或 `False`。
- **iterable**: 要过滤的可迭代对象，例如列表、元组或字符串。

## 描述

`filter()` 函数从可迭代对象中构造一个迭代器，该迭代器包含函数返回 `True` 的那些元素。如果 function 为 `None`，它将移除可迭代对象中所有为 false 的元素。

## 示例

```python
def is_even(num):
    return num % 2 == 0

numbers = [1, 2, 3, 4, 5, 6]
even_numbers = list(filter(is_even, numbers))
print(even_numbers)
```

输出：

```plaintext
[2, 4, 6]
```

在此示例中，定义了 `is_even` 函数来确定一个数字是否为偶数。filter 方法接受 `两个参数`：`第一个参数` 是应用于列表每个元素的函数，`第二个参数` 是要过滤的列表。filter 方法返回一个 <router-link to="/builtin/iter">迭代器</router-link>，该迭代器随后被转换为列表并存储在 even_numbers 变量中。最终输出是原始列表中偶数的列表。

## 相关链接

- <router-link :to="'/builtin/map'">map()</router-link>: 将函数应用于可迭代对象的每个项，并返回结果的迭代器。
- <router-link :to="'/builtin/iter'">iter()</router-link>: 返回一个迭代器对象。
- <router-link :to="'/blog/python-comprehensions-step-by-step'">列表推导式 (List Comprehensions)</router-link>: 创建列表的简洁方法，通常用作 `filter()` 的替代方案。
- <router-link :to="'/cheatsheet/comprehensions'">推导式 (Comprehensions)</router-link>
- <router-link :to="'/cheatsheet/functions'">函数 (Functions)</router-link>
- <router-link :to="'/builtin/reduce'">reduce()</router-link>
