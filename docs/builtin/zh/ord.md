---
title: 'Python ord() 内置函数 - Python 速查表'
description: '给定一个代表单个 Unicode 字符的字符串，返回该字符的 Unicode 码点的整数值。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python ord() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#ord">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   给定一个表示单个 Unicode 字符的字符串，返回表示该字符 Unicode 码点的整数。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

`ord()` 函数是 <router-link to="/builtin/chr">chr()</router-link> 的逆函数。它接受一个单字符字符串并返回其 Unicode 码点，该码点是一个整数。

### 示例

```python
# 获取字符的 Unicode 码点
print(ord('A'))
print(ord('€'))
print(ord('1'))
print(ord('a'))
```

```output
65
8364
49
97
```

## 相关链接

- <router-link to="/cheatsheet/manipulating-strings">速查表：操作字符串</router-link>
- <router-link to="/blog/python-data-types">博客：Python 数据类型</router-link>
- <router-link to="/builtin/chr">chr()</router-link>
- <router-link to="/builtin/ascii">ascii()</router-link>
