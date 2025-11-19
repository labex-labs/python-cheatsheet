---
title: 'Python ascii() 内置函数 - Python 速查表'
description: "与 repr() 类似，返回对象的打印表示形式的字符串，但使用 \\x、\\u 或 \\U 转义序列来转义 repr() 返回字符串中的非 ASCII 字符。"
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python ascii() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#ascii">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    与 <code>repr()</code> 类似，返回一个对象的字符串可打印表示形式，但会使用 <code>\x</code>、<code>\u</code> 或 <code>\U</code> 转义序列转义 <code>repr()</code> 返回的字符串中的非 ASCII 字符。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

Python 中的 `ascii()` 函数是一个内置函数，它返回一个对象的字符串可打印表示形式，类似于 `repr()`。然而，`ascii()` 会使用 `\x`、`\u` 或 `\U` 转义序列转义任何非 ASCII 字符。这对于确保字符串可以在仅 ASCII 的环境中使用非常有用。

## 示例

```python
# 对于 ASCII 字符，它与 repr() 相同
ascii('A')

# 对于非 ASCII 字符，它会被转义
ascii('ë')

# 作为比较，repr() 不会转义它
repr('ë')

# 它也适用于可迭代对象
ascii(['A', 'ë'])
```

```output
'A'
'\\xeb'
'ë'
['A', '\\xeb']
```

## 相关链接

- <router-link to="/cheatsheet/manipulating-strings">备忘单：字符串操作</router-link>
- <router-link to="/blog/python-data-types">博客：Python 数据类型</router-link>
- <router-link to="/builtin/repr">repr()</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/bytes">bytes()</router-link>
- <router-link to="/builtin/chr">chr()</router-link>
- <router-link to="/builtin/ord">ord()</router-link>
