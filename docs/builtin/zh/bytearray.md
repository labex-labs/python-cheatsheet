---
title: 'Python bytearray() 内置函数 - Python 速查表'
description: '返回一个新的字节数组。bytearray 类是整数的可变序列，范围在 [...] 之间。它拥有可变序列类型中所述的大部分常用方法，以及 bytes 类型所拥有的多数方法 [...]'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python bytearray() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#bytearray">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    返回一个新的字节数组。bytearray 类是范围在 [...] 内的整数的可变序列。它拥有大多数可变序列（在 Mutable Sequence Types 中描述）的常用方法，以及 bytes 类型所拥有的绝大多数方法 [...]。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

`bytearray()` 函数返回一个新的字节数组。这个对象是范围在 0 <= x < 256 内的整数的可变序列。它本质上是 `bytes` 对象的**可变**版本，这意味着你可以在创建后更改其内容。这对于处理需要就地修改的二进制数据非常有用。

## 示例

```python
# 从具有特定编码的字符串创建 bytearray
ba1 = bytearray("hello", "utf-8")
print(ba1)
```

```output
bytearray(b'hello')
```

```python
# 从整数列表创建 bytearray
ba2 = bytearray([72, 101, 108, 108, 111])
print(ba2)
```

```output
bytearray(b'Hello')
```

```python
# 修改 bytearray（它是可变的）
ba2[0] = 104  # 'h' 的 ASCII 码
ba2.append(33)  # '!' 的 ASCII 码
print(ba2)
```

```output
bytearray(b'hello!')
```

## 相关链接

- <router-link to="/cheatsheet/reading-and-writing-files">备忘单：读取和写入文件</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">备忘单：列表和元组</router-link>
- <router-link to="/blog/python-data-types">博客：Python 数据类型</router-link>
- <router-link to="/builtin/bytes">bytes()</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/memoryview">memoryview()</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/int">int()</router-link>
