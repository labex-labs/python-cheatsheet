---
title: 'Python locals() 内置函数 - Python 速查表'
description: '更新并返回表示当前局部符号表的字典。在函数块中调用 locals() 时会返回自由变量，但在类块中不会。注意，在模块级别，locals() 和 globals() 是同一个字典。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python locals() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#locals">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   更新并返回一个表示当前局部符号表的字典。当 locals() 在函数块中调用时，它返回自由变量，但在类块中不会。请注意，在模块级别，locals() 和 <router-link to="/builtin/globals">globals()</router-link> 是同一个字典。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

`locals()` 函数返回一个表示当前局部符号表的字典。这包括当前作用域中的所有局部变量、参数和其他对象。

它是检查局部命名空间的一个有用工具。

### 示例

```python
def my_function(arg1, arg2):
    local_var = "I am local"
    print(locals())

my_function("hello", "world")
```

```output
{'arg1': 'hello', 'arg2': 'world', 'local_var': 'I am local'}
```

## 相关链接

- <router-link to="/cheatsheet/debugging">备忘单：调试</router-link>
- <router-link to="/cheatsheet/functions">备忘单：函数</router-link>
- <router-link to="/cheatsheet/dictionaries">备忘单：字典</router-link>
- <router-link to="/builtin/globals">globals()</router-link>
- <router-link to="/builtin/dir">dir()</router-link>
