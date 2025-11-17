---
title: 'Python compile() 内置函数 - Python 速查表'
description: '将源代码编译为代码对象或 AST 对象。代码对象可由 exec() 或 eval() 执行。source 可以是普通字符串、字节串或 AST 对象。有关如何处理 AST 对象的信息，请参阅 ast 模块文档。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python compile() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#compile">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   将源代码编译成代码对象或 AST 对象。代码对象可以由 <router-link to="/builtin/exec">exec()</router-link> 或 <router-link to="/builtin/eval">eval()</router-link> 执行。source 可以是普通字符串、字节字符串或 AST 对象。有关如何使用 AST 对象的信息，请参阅 ast 模块文档。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

Python 中的 `compile()` 函数是一个内置函数，用于将字符串或抽象语法树 (AST) 对象转换为代码对象。然后，该代码对象可以被 <router-link to="/builtin/exec">exec()</router-link> 或 <router-link to="/builtin/eval">eval()</router-link> 等函数执行。

## 示例

这是一个基本的工作示例：

```python
code_string = """
def hello_world():
    print('Hello, world!')

hello_world()
"""

# 将字符串编译成代码对象
# 模式 'exec' 用于一系列语句。
# 模式 'eval' 用于单个表达式。
# 模式 'single' 用于单个交互式语句。
code_object = compile(code_string, '<string>', 'exec')

# 执行代码对象
exec(code_object)
```

输出：

```plaintext
Hello, world!
```

## 相关链接

- <router-link to="/cheatsheet/debugging">备忘单：调试</router-link>
- <router-link to="/builtin/exec">exec()</router-link>
- <router-link to="/builtin/eval">eval()</router-link>
- <router-link to="/builtin/breakpoint">breakpoint()</router-link>
