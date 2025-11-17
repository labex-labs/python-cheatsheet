---
title: 'Python oct() 内置函数 - Python 速查表'
description: '将整数转换为带前缀“0o”的八进制字符串。结果是一个有效的 Python 表达式。如果 x 不是 Python int 对象，则它必须定义一个返回整数的 __index__() 方法。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python oct() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#oct">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   将一个整数转换为一个以“0o”为前缀的八进制字符串。结果是一个有效的 Python 表达式。如果 x 不是一个 Python <router-link to="/builtin/int">int</router-link> 对象，它必须定义一个返回整数的 __index__() 方法。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

`oct()` 函数将一个整数转换为其八进制表示形式。结果字符串以“0o”为前缀，表示它是一个八进制数。

### 示例

以下是使用 `oct()` 的几个示例：

```python
# Convert integers to octal
print(oct(8))
print(oct(10))
print(oct(100))
print(oct(1))
print(oct(1000))
```

输出：

```plaintext
0o10
0o12
0o144
0o1
0o1750
```

## 相关链接

- <router-link to="/blog/python-data-types">博客：Python 数据类型</router-link>
- <router-link to="/cheatsheet/string-formatting">备忘单：字符串格式化</router-link>
- <router-link to="/builtin/bin">bin()</router-link>
- <router-link to="/builtin/hex">hex()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/format">format()</router-link>
