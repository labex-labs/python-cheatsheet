---
title: 'Python divmod() 内置函数 - Python 速查表'
description: '接受两个（非复数）数字作为参数，返回整数除法中商和余数的配对结果。对于混合操作数类型，适用二元算术运算符的规则。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python divmod() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#divmod">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   接受两个（非复数）数字作为参数，并返回一个包含它们整数除法的商和余数的对。对于混合操作数类型，适用二元算术运算符的规则。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

`divmod()` 函数接受两个数字作为参数，并返回一个包含其整数除法的商和余数的元组。这是一种在一个调用中获取两个结果的便捷方式。

### 示例

```python
# 获取商和余数
quotient, remainder = divmod(10, 3)
print(quotient)
print(remainder)
print(divmod(2, 2))
print(divmod(10, 2))
print(divmod(7, 2))
```

输出：

```plaintext
3
1
(1, 0)
(5, 0)
(3, 1)
```

## 相关链接

- <router-link :to="'/cheatsheet/lists-and-tuples'">列表和元组</router-link>
- <router-link :to="'/blog/python-data-types'">Python 数据类型</router-link>
- <router-link :to="'/builtin/int'">`int()`</router-link>
- <router-link :to="'/builtin/float'">`float()`</router-link>
- <router-link :to="'/builtin/tuple'">`tuple()`</router-link>
