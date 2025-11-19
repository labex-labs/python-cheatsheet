---
title: 'Python float() 内置函数 - Python 速查表'
description: '从数字或字符串 x 构建浮点数。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python float() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#float">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   从数字或字符串 x 构建一个浮点数。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

Python 中的 `float()` 函数是一个内置函数，它允许您将数字或包含数字的字符串转换为浮点数。当您需要执行需要小数精度的算术运算时，这特别有用。

<router-link to="/builtin/float">float()</router-link> 函数从数字或字符串返回一个浮点数。

## 示例

```python
float('10')
float(10)
```

```output
10.0
10.0
```

## 相关链接

- <router-link :to="'/builtin/int/'">int()</router-link>
- <router-link :to="'/builtin/complex/'">complex()</router-link>
- <router-link :to="'/blog/python-data-types/'">Python 数据类型</router-link>
- <router-link :to="'/builtin/str'">str()</router-link>
- <router-link :to="'/builtin/round'">round()</router-link>
- <router-link :to="'/cheatsheet/string-formatting'">字符串格式化</router-link>
