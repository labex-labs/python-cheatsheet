---
title: 'Python input() 内置函数 - Python 速查表'
description: '如果存在 prompt 参数，它会写入标准输出，末尾不加换行符。然后函数从输入中读取一行，将其转换为字符串（去除末尾换行符）并返回。读取到文件结束符 (EOF) 时，会引发 EOFError。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python input() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#input">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   如果提供了 prompt 参数，它会写入标准输出，末尾不带换行符。然后该函数从输入中读取一行，将其转换为字符串（剥离末尾的换行符），并返回该字符串。当读取到 EOF 时，会引发 EOFError。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

Python 中的 `input()` 函数是一个内置函数，它允许程序从用户的键盘读取一行文本。它是创建交互式应用程序的基本工具，因为它会暂停程序的执行，等待用户提供输入。该函数还可以显示一个提示，指导用户输入什么内容。

## 示例

此函数从用户处获取输入并将其转换为字符串：

```python
# 询问他们的名字
print('What is your name?')
my_name = input()
print('Hi, {}'.format(my_name))
```

输出：

```plaintext
What is your name?
Martha
Hi, Martha
```

`input()` 也可以在不使用 `print()` 的情况下设置默认消息：

```python
# 默认消息
my_name = input('What is your name? ')
print('Hi, {}'.format(my_name))
```

输出：

```plaintext
What is your name? Martha
Hi, Martha
```

## 相关链接

- <router-link :to="'/builtin/print'">print()</router-link>
- <router-link :to="'/builtin/str'">str()</router-link>
- <router-link :to="'/builtin/int'">int()</router-link>
- <router-link :to="'/builtin/float'">float()</router-link>
- <router-link :to="'/cheatsheet/string-formatting'">字符串格式化</router-link>
- <router-link :to="'/cheatsheet/manipulating-strings'">操作字符串</router-link>
