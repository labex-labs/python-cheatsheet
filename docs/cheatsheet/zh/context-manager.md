---
title: 'Python 上下文管理器 - Python 速查表'
description: 'Python 上下文管理器用途广泛，但很少有人理解其背后的目的。这些语句常用于文件读写，通过确保特定资源仅在特定进程中使用，帮助应用程序节省系统内存并改善资源管理。'
labUrl: 'https://labex.io/zh/labs/python-python-context-manager-633650?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 上下文管理器
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

虽然 Python 的上下文管理器被广泛使用，但很少有人理解其背后的目的。这些语句通常用于读写文件，通过确保特定资源仅在特定进程中使用，来帮助应用程序节省系统内存并改进资源管理。

## with 语句

上下文管理器是一个对象，在上下文（一段代码块）开始和结束时会收到通知。你通常会将其与 `with` 语句一起使用。它负责处理通知。

例如，文件对象就是上下文管理器。当上下文结束时，文件对象会自动关闭：

```python
# 上下文管理器：自动处理资源清理
# 退出 'with' 块时文件会自动关闭
with open(filename) as f:  # 'f' 是文件对象
    file_contents = f.read()

# 即使发生错误，文件也会在此处自动关闭
```

任何导致代码块执行结束的操作都会导致调用上下文管理器的退出方法。这包括异常，当错误导致你过早退出一个打开的文件或连接时，这会很有用。在没有正确关闭文件/连接的情况下退出脚本是个坏主意，可能会导致数据丢失或其他问题。通过使用上下文管理器，你可以确保始终采取预防措施以防止此类损坏或丢失。

## 编写你自己的上下文管理器

由于 `contextlib.contextmanager` 装饰器，也可以使用生成器语法编写上下文管理器：

```python
# 使用 contextlib 装饰器的基于函数的上下文管理器
import contextlib
@contextlib.contextmanager
def context_manager(num):
    print('Enter')  # yield 之前的代码在 __enter__ 上运行
    yield num + 1   # yield 的值成为 'cm' 变量
    print('Exit')    # yield 之后的代码在 __exit__ 上运行

with context_manager(2) as cm:  # cm 接收 yield 的值 (3)
    print('Right in the middle with cm = {}'.format(cm))
```

```output
Enter
Right in the middle with cm = 3
Exit
```

## 基于类的上下文管理器

你可以定义基于类的上下文管理器。关键方法是 `__enter__` 和 `__exit__`

```python
# 基于类的上下文管理器：实现 __enter__ 和 __exit__ 方法
class ContextManager:
    def __enter__(self, *args, **kwargs):  # 进入 'with' 块时调用
        print("--enter--")
        return self  # 可以返回对象用作 'as' 变量

    def __exit__(self, *args):  # 退出 'with' 块时调用
        print("--exit--")

with ContextManager():  # 调用 __enter__，完成后调用 __exit__
    print("test")
```

```output
--enter--
test
--exit--
```

## 相关链接

- <router-link to="/cheatsheet/reading-and-writing-files">读写文件</router-link>
- <router-link to="/cheatsheet/exception-handling">异常处理</router-link>
- <router-link to="/cheatsheet/decorators">装饰器</router-link>
- <router-link to="/blog/python-pathlib-essentials">每位开发者都应知道的 10 个基本文件系统操作</router-link>
- <router-link to="/builtin/open">open()</router-link>
