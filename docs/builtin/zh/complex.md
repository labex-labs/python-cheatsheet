---
title: 'Python complex() 内置函数 - Python 速查表'
description: '返回一个复数 real + imag*1j，或将字符串/数字转换为复数。[...] 每个参数可以是任何数值类型（包括复数）。如果省略 imag，则默认为零，构造函数充当类似 int 和 float 的数字转换。如果两个参数都省略，则返回 0j。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python complex() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#complex">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   返回一个值为 real + imag*1j 的复数，或将字符串或数字转换为复数。 [...] 每个参数可以是任何数字类型（包括复数）。如果省略 imag，则默认为零，并且构造函数充当类似于 <router-link to="/builtin/int">`int()`</router-link> 和 <router-link to="/builtin/float">`float()`</router-link> 的数字转换。如果两个参数都省略，则返回 0j。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

`complex()` 函数用于创建一个复数。它可以接受实部和虚部作为参数。如果只提供一个参数，则将其视为实部，虚部为零。

## 示例

```python
# 使用实部和虚部创建复数
print(complex(3, 4))

# 仅使用实部创建复数
print(complex(5))

# 从字符串创建复数
print(complex("2+3j"))
```

```output
(3+4j)
(5+0j)
(2+3j)
```

## 相关链接

- <router-link to="/blog/python-data-types">博客：Python 数据类型</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/float">float()</router-link>
- <router-link to="/builtin/abs">abs()</router-link>
- <router-link to="/builtin/pow">pow()</router-link>
