---
title: 'Python chr() 内置函数 - Python 速查表'
description: "返回表示 Unicode 码点为整数 i 的字符的字符串。例如，chr(97) 返回字符串 'a'，而 chr(8364) 返回字符串 '€'。它是 ord() 的逆操作。"
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python chr() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#chr">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   返回表示 Unicode 码点的整数 i 对应的字符的字符串。例如，chr(97) 返回字符串 'a'，而 chr(8364) 返回字符串 '€'。这是 ord() 的反函数。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

Python 中的 `chr()` 函数是一个内置函数，它接受一个整数作为参数，并返回表示相应 Unicode 字符的字符串。

传递给 `chr()` 函数的整数应在 0 到 65535 的范围内，这对应于有效 Unicode 字符的范围。

```python
print(chr(97))
print(chr(65))
print(chr(120))
```

```output
a
A
x
```

`chr()` 函数是 `ord()` 函数的反函数，`ord()` 函数接受单个字符作为参数并返回相应的整数。

```python
print(ord('a'))
print(ord('A'))
print(ord('x'))
```

```output
97
65
120
```

当处理文本和字符数据时，尤其是在处理 Unicode 字符时，`chr()` 函数非常有用。例如，您可以使用它将表示 Unicode 码点的整数转换为相应的字符，或从整数范围生成字符字符串。

## 相关链接

- <router-link :to="'/builtin/ord'">ord()</router-link>
- <router-link :to="'/builtin/ascii'">ascii()</router-link>
- <router-link :to="'/cheatsheet/manipulating-strings'">字符串操作</router-link>
- <router-link :to="'/blog/python-data-types'">Python 数据类型</router-link>
