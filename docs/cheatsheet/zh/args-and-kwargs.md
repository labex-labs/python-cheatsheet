---
title: 'Python 参数和关键字参数 - Python 速查表'
description: 'args 和 kwargs 可能看起来吓人，但实际上它们并不难理解，并且能赋予函数灵活性和可读性'
labUrl: 'https://labex.io/zh/labs/python-python-args-and-kwargs-633646?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Args 和 Kwargs - Python 速查表
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    <a href="https://docs.python.org/3/tutorial/index.html">Python args 和 kwargs 轻松掌握</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    <code>*args</code> 和 <code>**kwargs</code> 可能看起来吓人，但实际上它们并不难理解，并且能赋予函数极大的灵活性。
  </base-disclaimer-content>
</base-disclaimer>

阅读文章 <router-link to="/blog/python-easy-args-kwargs">Python \*args 和 \*\*kwargs 轻松掌握</router-link> 以获得更深入的介绍。

## Args 和 Kwargs

`*args` 和 `**kwargs` 允许你在调用函数时传递任意数量的位置参数和关键字参数。

```python
# 定义一个接受任意数量的位置参数和关键字参数的函数
def some_function(*args, **kwargs):
    pass

# 使用任意数量的位置参数调用
some_function(arg1, arg2, arg3)

# 使用任意数量的关键字参数调用
some_function(key1=arg1, key2=arg2, key3=arg3)

# 同时使用位置参数和关键字参数调用
some_function(arg, key1=arg1)

# 或者不带任何参数调用
some_function()
```

<base-warning>
  <base-warning-title>
    Python 惯例
  </base-warning-title>
  <base-warning-content>
    <code>*args</code> 和 <code>**kwargs</code> 是惯例。它们不是解释器强制要求的，但被 Python 社区认为是良好的实践。
  </base-warning-content>
</base-warning>

## args

你可以通过 `args` 变量访问**位置参数**：

```python
# *args 将位置参数收集到一个元组中
def some_function(*args):
    print(f'传入的参数：{args} 类型为 {type(args)}')

# 传入多个参数 - 它们将被收集到 args 元组中
some_function('arg1', 'arg2', 'arg3')
```

输出：

```plaintext
传入的参数: ('arg1', 'arg2', 'arg3') 类型为 <class 'tuple'>
```

## kwargs

关键字参数通过 `kwargs` 变量访问：

```python
# **kwargs 将关键字参数收集到一个字典中
def some_function(**kwargs):
    print(f'关键字参数：{kwargs} 类型为 {type(kwargs)}')

# 传入关键字参数 - 它们将被收集到 kwargs 字典中
some_function(key1='arg1', key2='arg2')
```

输出：

```plaintext
关键字参数: {'key1': 'arg1', 'key2': 'arg2'} 类型为 <class 'dict'>
```

## 相关链接

- <router-link to="/cheatsheet/functions">函数</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">列表和元组</router-link>
- <router-link to="/cheatsheet/dictionaries">Python 字典</router-link>
- <router-link to="/blog/python-easy-args-kwargs">Python \*args 和 \*\*kwargs 轻松掌握</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
