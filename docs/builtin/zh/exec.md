---
title: 'Python exec() 内置函数 - Python 速查表'
description: '此函数支持动态执行 Python 代码。object 必须是字符串或代码对象。如果是字符串，则将其解析为 Python 语句套件并执行（除非发生语法错误）[...]。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python exec() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#exec">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   此函数支持动态执行 Python 代码。object 必须是字符串或代码对象。如果它是一个字符串，该字符串将被解析为一组 Python 语句，然后被执行（除非发生语法错误）[...]。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

Python 中的 `exec()` 函数是一个内置函数，它允许您动态执行存储在字符串中的 Python 代码。这对于您希望执行用户提供的代码、在运行时生成和运行代码，甚至在应用程序中构建迷你解释器或脚本环境的场景非常强大。但是，应谨慎使用，因为它如果处理不当，可能会引入安全风险。

## 语法

```python
exec(object[, globals[, locals]])
```

- `object`: 包含要执行的 Python 代码的字符串。
- `globals` (可选): 表示全局命名空间的字典。如果未提供，则使用当前的全局命名空间。
- `locals` (可选): 表示局部命名空间的字典。如果未提供，则使用当前的局部命名空间。

## 基本用法

```python
code_to_execute = "print('Hello, exec()!')"
exec(code_to_execute)
```

输出：

```plaintext
Hello, exec()!
```

`exec()` 函数也可以与 <router-link to="/builtin/print">print()</router-link> 函数一起使用，将输出显示到控制台。

## 执行多条语句

```python
code = """
for i in range(5):
    print(i)
"""
exec(code)
```

输出：

```plaintext
0
1
2
3
4
```

在此示例中，`exec()` 函数用于执行一个 for 循环，该循环迭代一个数字的 <router-link to="/builtin/range">range</router-link> 并将每个数字 <router-link to="/builtin/print">打印</router-link> 到控制台。

## 修改变量

```python
x = 10
code = "x += 5"
exec(code)
print(x)
```

输出：

```plaintext
15
```

## 使用 `globals` 和 `locals`

```python
x = 5
code = "x = x * 2"
globals_dict = {"x": 10}
locals_dict = {"x": 20}
exec(code, globals_dict, locals_dict)
print(x)
print(globals_dict)
print(locals_dict)
```

输出：

```plaintext
5
{'x': 10}
{'x': 40}
```

## 动态函数创建

```python
def create_dynamic_function(name, args):
    code = f"def {name}({', '.join(args)}): return sum({args})"
    exec(code)

create_dynamic_function("add_numbers", ["a", "b", "c"])
result = add_numbers(2, 3, 5)
print(result)
```

输出：

```plaintext
10
```

在此示例中，`exec()` 函数用于创建一个动态函数，该函数接受参数列表并返回它们的 <router-link to="/builtin/sum">和</router-link>。

## 错误处理

```python
code = """
try:
    print(undefined_variable)
except NameError as e:
    print(f"Error: {e}")
"""
exec(code)
```

输出：

```plaintext
Error: name 'undefined_variable' is not defined
```

## 安全注意事项

```python
user_input = input("Enter code to execute: ")
exec(user_input)  # Caution: This can be a security risk if not properly sanitized.
```

## 相关链接

- <router-link :to="'/builtin/compile'">`compile()`</router-link>
- <router-link :to="'/builtin/eval'">`eval()`</router-link>
- <router-link :to="'/builtin/globals'">`globals()`</router-link>
- <router-link :to="'/builtin/locals'">`locals()`</router-link>
- <router-link :to="'/cheatsheet/exception-handling'">异常处理</router-link>
- <router-link :to="'/cheatsheet/debugging'">调试</router-link>
