---
title: 'Python eval() 内置函数 - Python 速查表'
description: '参数包括一个字符串以及可选的 globals 和 locals。如果提供了 globals，它必须是一个字典。如果提供了 locals，它可以是任何映射对象。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python eval() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#eval">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   参数是一个字符串以及可选的 globals 和 locals。如果提供了 globals，它必须是一个字典。如果提供了 locals，它可以是任何映射对象。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

Python 中的 `eval()` 函数是一个内置函数，它将一个字符串解析为一个 Python 表达式并对其进行求值。它可以用于执行来自字符串的任意 Python 代码，这既强大又危险。它常用于需要动态生成表达式求值的情况，但由于潜在的安全漏洞，应谨慎使用。

## 示例

```python
eval('1 + 4')
```

```output
5
```

```python
eval('print("Hello World!")')
```

```output
Hello World!
```

```python
x = 10
eval('x == 10')
```

```output
True
```

`eval()` 函数也可以与 <router-link to="/builtin/print">print()</router-link> 函数一起使用，将输出显示到控制台。

## 相关链接

- <router-link :to="'/builtin/compile'">`compile()`</router-link>
- <router-link :to="'/builtin/exec'">`exec()`</router-link>
- <router-link :to="'/builtin/globals'">`globals()`</router-link>
- <router-link :to="'/builtin/locals'">`locals()`</router-link>
- <router-link :to="'/cheatsheet/debugging'">调试 (Debugging)</router-link>
