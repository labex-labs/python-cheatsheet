---
title: 'Python hex() 内置函数 - Python 速查表'
description: '将整数转换为带前缀“0x”的小写十六进制字符串。如果 x 不是 Python int 对象，则它必须定义一个返回整数的 __index__() 方法。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python hex() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#hex">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   将一个整数转换为带前缀“0x”的小写十六进制字符串。如果 x 不是 Python int 对象，则它必须定义一个返回整数的 __index__() 方法。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

Python 中的 `hex()` 函数是一个内置函数，它将一个整数转换为其对应的十六进制表示。结果字符串以“0x”为前缀，以指示它是一个十六进制值。当您需要处理十六进制数时，此函数非常有用，十六进制数在低级编程中很常见，例如处理内存地址或颜色代码时。

## 示例

```python
hex(1)
hex(10)
hex(100)
hex(1000)
```

输出：

```plaintext
'0x1'
'0xa'
'0x64'
'0x3e8'
```

## 相关链接

- <router-link :to="'/builtin/bin'">bin()</router-link>
- <router-link :to="'/builtin/int'">int()</router-link>
- <router-link :to="'/builtin/oct'">oct()</router-link>
- <router-link :to="'/cheatsheet/string-formatting'">字符串格式化</router-link>
- <router-link :to="'/blog/python-data-types'">Python 数据类型</router-link>
- <router-link :to="'/builtin/format'">format()</router-link>
