---
title: 'Python abs() 内置函数 - Python 速查表'
description: '返回数字的绝对值。参数可以是整数、浮点数或实现了 __abs__() 的对象。如果参数是复数，则返回其模。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python abs() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#abs">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    返回一个数的绝对值。参数可以是整数、浮点数或实现了 <code>__abs__()</code> 的对象。如果参数是复数，则返回其模（magnitude）。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

Python 中的 `abs()` 函数是一个内置函数，用于返回一个数的绝对值。它可以处理整数、浮点数，甚至复数（返回其模）。当你需要确保一个值是正数时，无论其原始符号如何，这个函数都很有用。

### 示例

```python
# 对于整数
abs(-1)
abs(0)

# 对于浮点数
abs(-3.14)

# 对于复数（返回模）
abs(3 + 4j)

# 对于其他数字系统
abs(0x10)  # 十六进制
abs(0b10)  # 二进制
abs(0o20)  # 八进制
```

输出：

```plaintext
1
0
3.14
5.0
16
2
16
```

## 相关链接

- <router-link to="/blog/python-data-types">博客：Python 数据类型</router-link>
- <router-link to="/builtin/pow">pow()</router-link>
- <router-link to="/builtin/round">round()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/float">float()</router-link>
- <router-link to="/builtin/complex">complex()</router-link>
