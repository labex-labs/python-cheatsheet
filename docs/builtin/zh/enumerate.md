---
title: 'Python enumerate() 内置函数 - Python 速查表'
description: '返回一个枚举对象。iterable 必须是序列、迭代器或支持迭代的其他对象。enumerate() 返回的迭代器的 __next__() 方法返回一个元组，其中包含一个计数（从 start 开始，默认为 0）和从迭代 iterable 中获取的值。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python enumerate() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#enumerate">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   返回一个 enumerate 对象。iterable 必须是一个序列、一个迭代器或支持迭代的其它对象。enumerate() 返回的迭代器的 __next__() 方法返回一个元组，其中包含一个计数（从 start 开始，默认为 0）和从迭代 iterable 中获取的值。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

Python 中的 `enumerate()` 函数是一个内置函数，它为可迭代对象添加一个计数器。它返回一个 enumerate 对象，该对象会生成包含计数（从一个起始索引开始，默认为 0）和可迭代对象中对应值的对。当您在循环遍历序列时需要索引和元素时，这特别有用。

## 示例

```python
l = enumerate([1, 2, 3, 4, 5])
print(l)
print(l.__next__())
print(l.__next__())
print(l.__next__())
print(l.__next__())
print(l.__next__())
```

输出：

```plaintext
<enumerate object at 0x7fcac409cc40>
(0, 1)
(1, 2)
(2, 3)
(3, 4)
(4, 5)
```

`enumerate` 通常在 `for` 循环中使用，以获取项目的索引：

```python
for i, item in enumerate([1, 2, 3, 4, 5]):
    print(f"Index: {i}, Item: {item}")
```

输出：

```plaintext
Index: 0, Item: 1
Index: 1, Item: 2
Index: 2, Item: 3
Index: 3, Item: 4
Index: 4, Item: 5
```

## 相关链接

- <router-link :to="'/cheatsheet/control-flow'">控制流</router-link>
- <router-link :to="'/builtin/iter'">iter()</router-link>
- <router-link :to="'/builtin/next'">next()</router-link>
- <router-link :to="'/cheatsheet/lists-and-tuples'">列表和元组</router-link>
- <router-link :to="'/builtin/zip'">zip()</router-link>
- <router-link :to="'/builtin/range'">range()</router-link>
