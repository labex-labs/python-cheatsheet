---
title: 'Python round() 内置函数 - Python 速查表'
description: '返回数字四舍五入到小数点后 ndigits 位的结果。如果省略 ndigits 或 ndigits 为 None，则返回最接近输入的整数。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python round() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#round">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   将数字四舍五入到小数点后 ndigits 位精度。如果省略 ndigits 或 ndigits 为 None，则返回最接近其输入的整数。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

`round()` 函数将数字四舍五入到指定的十进制位数。如果未指定十进制位数，则四舍五入到最接近的整数。

请注意，对于以 .5 结尾的数字，`round()` 使用“四舍五入到偶数”的规则，这意味着它将四舍五入到最接近的偶数整数。

### 示例

```python
# 四舍五入到最接近的整数
print(round(3.14))
print(round(3.8))

# 四舍五入到指定的十进制位数
print(round(3.14159, 2))

# “四舍五入到偶数”
print(round(2.5))
print(round(3.5))
```

输出：

```plaintext
3
4
3.14
2
4
```

## 相关链接

- <router-link to="/blog/python-data-types">博客：Python 数据类型</router-link>
- <router-link to="/cheatsheet/string-formatting">速查表：字符串格式化</router-link>
- <router-link to="/builtin/format">format()</router-link>
- <router-link to="/builtin/abs">abs()</router-link>
- <router-link to="/builtin/float">float()</router-link>
- <router-link to="/builtin/int">int()</router-link>
