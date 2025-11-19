---
title: 'Python format() 内置函数 - Python 速查表'
description: '将值转换为“格式化”表示，由 format_spec 控制。format_spec 的解释取决于 value 参数的类型。[...]'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python format() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#format">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   将一个值转换为“格式化”表示形式，由 format_spec 控制。format_spec 的解释将取决于 value 参数的类型。[...].
  </base-disclaimer-content>
</base-disclaimer>

## 简介

Python 中的 `format()` 函数是一个多功能的内置函数，它允许您创建格式化的字符串。它提供了一种将值嵌入到字符串中、控制其对齐方式以及指定其表示形式（例如小数位数或填充）的方法。

<router-link to="/builtin/format">format()</router-link> 函数将指定的值格式化为指定的格式。

## 示例

```python
name = 'Micheal'
company = 'Dunder Mifflin'

print("My name is {0} and I work for {1}.".format(name, company))

# Formatting string (faster and easier)
print(f"My name is {name} and I work for {company}.")
```

```output
My name is Micheal and I work for Dunder Mifflin.
My name is Micheal and I work for Dunder Mifflin.
```

## 相关链接

- <router-link :to="'/builtin/str/'">str()</router-link>
- <router-link :to="'/cheatsheet/string-formatting'">字符串格式化</router-link>
- <router-link :to="'/cheatsheet/manipulating-strings'">操作字符串</router-link>
- <router-link :to="'/builtin/print'">print()</router-link>
