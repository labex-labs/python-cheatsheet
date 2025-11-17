---
title: 'Python bin() 内置函数 - Python 速查表'
description: '将整数转换为带“0b”前缀的二进制字符串。结果是有效的 Python 表达式。如果 x 不是 Python int 对象，则必须定义一个返回整数的 __index__() 方法。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python bin() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#bin">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    将一个整数转换为带前缀“0b”的二进制字符串。结果是一个有效的 Python 表达式。如果 x 不是 Python int 对象，它必须定义一个返回整数的 <code>__index__()</code> 方法。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

`bin()` 函数将一个整数转换为其二进制表示形式。结果字符串以 "0b" 为前缀，表示它是一个二进制数。

### 示例

以下是使用 `bin()` 的几个示例：

```python
# Convert integers to binary
print(bin(2))
print(bin(7))
print(bin(1))
print(bin(10))
print(bin(100))
print(bin(1000))
```

输出：

```plaintext
0b10
0b111
0b1
0b1010
0b1100100
0b1111101000
```

## 相关链接

- <router-link to="/blog/python-data-types">博客：Python 数据类型</router-link>
- <router-link to="/cheatsheet/string-formatting">备忘单：字符串格式化</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/hex">hex()</router-link>
- <router-link to="/builtin/oct">oct()</router-link>
- <router-link to="/builtin/format">format()</router-link>
