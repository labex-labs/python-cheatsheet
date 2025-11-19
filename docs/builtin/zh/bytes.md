---
title: 'Python bytes() 内置函数 - Python 速查表'
description: '返回一个新的“bytes”对象，它是一个范围在 [...] 内的整数的不可变序列。bytes 是 bytearray 的不可变版本——它具有相同的非修改方法以及相同的索引和切片行为。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python bytes() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#bytes">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    返回一个新的“bytes”对象，它是一个范围在 [...] 内的整数的不可变序列。bytes 是 bytearray 的不可变版本——它具有相同的非变异方法以及相同的索引和切片行为。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

在 Python 中，`bytes` 类型是单个字节的不可变序列。它代表一个范围在 0 到 255 之间的整数序列，可用于表示二进制数据，如图像、音频或其他类型的文件。

您可以通过几种方式创建 bytes 对象。一种方法是使用 `bytes()` 构造函数并向其传递一个字符串、一个 bytearray 对象或一个 bytes 对象。例如：

```python
data = "Hello, World!"
bytes_obj = bytes(data, "utf-8")
print(bytes_obj)
```

```output
b'Hello, World!'
```

另一种方法是使用字面量表示法，在字符串前加上 `b` 或 `B` 前缀：

```python
data = b"Hello, World!"
print(data)
```

```output
b'Hello, World!'
```

## 相关链接

- <router-link :to="'/builtin/bytearray'">bytearray()</router-link>
- <router-link :to="'/builtin/memoryview'">memoryview()</router-link>
- <router-link :to="'/cheatsheet/reading-and-writing-files'">读写文件</router-link>
- <router-link :to="'/blog/python-data-types'">Python 数据类型</router-link>
