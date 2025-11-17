---
title: 'Python 内置函数 help() - Python 速查表'
description: '调用内置帮助系统。（此函数专为交互式使用设计。）若不提供参数，则在解释器控制台启动交互式帮助系统。若参数为字符串，则查找该字符串作为模块、函数、类、方法、关键字或文档主题的名称，并在控制台打印帮助页面。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python help() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#help">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   调用内置的帮助系统。（此函数旨在供交互式使用。）如果未给出参数，则在解释器控制台上启动交互式帮助系统。如果参数是一个字符串，则该字符串被查找为模块、函数、类、方法、关键字或文档主题的名称，并在控制台上打印帮助页面。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

Python 中的 `help()` 函数是一个内置工具，可用于访问 Python 丰富的帮助系统。它对于交互式探索和学习特别有用，因为它允许您直接在 Python 解释器中获取有关模块、函数、类和关键字的文档。当不带参数调用时，它会启动一个交互式帮助会话；否则，它会打印给定对象的帮助信息。

## 示例

```python
help(type)
```

输出：

```plaintext
Help on class type in module builtins:

class type(object)
 |  type(object_or_name, bases, dict)
 |  type(object) -> the object's type
 |  type(name, bases, dict) -> a new type
 |
 |  Methods defined here:
 |
 |  __call__(self, /, *args, **kwargs)
 |      Call self as a function.
 |
 |  __delattr__(self, name, /)
 |      Implement delattr(self, name).
 |
 |  __dir__(self, /)
 |      Specialized __dir__ implementation for types.
 |
 |  __getattribute__(self, name, /)
 :
```

```python
help(str)
```

输出：

```plaintext
Help on class str in module builtins:

class str(object)
 |  str(object='') -> str
 |  str(bytes_or_buffer[, encoding[, errors]]) -> str
 |
 |  Create a new string object from the given object. If encoding or
 |  errors is specified, then the object must expose a data buffer
 |  that will be decoded using the given encoding and error handler.
 |  Otherwise, returns the result of object.__str__() (if defined)
 |  or repr(object).
 |  encoding defaults to sys.getdefaultencoding().
 |  errors defaults to 'strict'.
 |
 |  Methods defined here:
 :
```

```python
help(help)
```

输出：

```plaintext
Help on _Helper in module _sitebuiltins object:

class _Helper(builtins.object)
 |  Define the builtin 'help'.
 |
 |  This is a wrapper around pydoc.help that provides a helpful message
 |  when 'help' is typed at the Python interactive prompt.
 |
 |  Calling help() at the Python prompt starts an interactive help session.
 |  Calling help(thing) prints help for the python object 'thing'.
 |
 |  Methods defined here:
 |
 |  __call__(self, *args, **kwds)
 |      Call self as a function.
 :
```

## 相关链接

- <router-link :to="'/builtin/dir'">dir()</router-link>
- <router-link :to="'/builtin/globals'">globals()</router-link>
- <router-link :to="'/builtin/locals'">locals()</router-link>
- <router-link :to="'/builtin/type'">type()</router-link>
- <router-link :to="'/builtin/vars'">vars()</router-link>
- <router-link :to="'/cheatsheet/debugging'">调试</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP 基础</router-link>
