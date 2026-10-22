---
title: 'Python 上下文管理器 - Python 速查表'
description: 'Python 上下文管理器用途广泛，但很少有人真正理解其背后的目的。这些语句常用于文件读写，通过确保特定资源仅在特定进程中使用，帮助应用程序节省系统内存并改善资源管理。'
labUrl: 'https://labex.io/zh/labs/python-python-context-manager-633650?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 上下文管理器
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

虽然 Python 的上下文管理器被广泛使用，但很少有人理解其背后的目的。这些语句通常用于读写文件，通过确保特定资源仅在特定进程中使用，来帮助应用程序节省系统内存并改进资源管理。

## with 语句

上下文管理器是一个对象，它在上下文（一段代码块）开始和结束时会收到通知。你通常使用 `with` 语句来使用它。它负责处理通知。

例如，文件对象就是上下文管理器。当上下文结束时，文件对象会自动关闭：

```python
# 上下文管理器：自动处理资源清理
# 退出 'with' 块时文件自动关闭
with open(filename) as f:  # 'f' 是文件对象
    file_contents = f.read()

# 即使发生错误，文件也会在此处自动关闭
```

<BaseQuiz id="cheatsheet-context-manager-1" correct="A">
<template #question>
使用上下文管理器（<code>with</code> 语句）的主要好处是什么？
</template>

<BaseQuizOption value="A" correct>A. 自动处理资源清理，即使发生错误</BaseQuizOption>
<BaseQuizOption value="B">B. 使代码执行速度更快</BaseQuizOption>
<BaseQuizOption value="C">C. 允许多个文件同时打开</BaseQuizOption>
<BaseQuizOption value="D">D. 阻止所有错误</BaseQuizOption>
<BaseQuizAnswer>上下文管理器确保资源（如文件）在退出代码块时得到妥善清理，即使发生异常也是如此。这可以防止资源泄漏和数据丢失。</BaseQuizAnswer>
</BaseQuiz>

任何导致代码块执行结束的操作都会导致调用上下文管理器的退出方法。这包括异常，当错误导致你过早地退出一个打开的文件或连接时，这会很有用。在没有正确关闭文件/连接的情况下退出脚本是个坏主意，可能会导致数据丢失或其他问题。通过使用上下文管理器，你可以确保始终采取预防措施以防止以这种方式造成损害或损失。

## 编写你自己的上下文管理器

也可以使用生成器语法来编写上下文管理器，这要归功于 `contextlib.contextmanager` 装饰器：

```python
# 使用 contextlib 装饰器的基于函数的上下文管理器
import contextlib
@contextlib.contextmanager
def context_manager(num):
    print('Enter')  # yield 之前的代码在 __enter__ 上运行
    try:
        yield num + 1   # yield 的值成为 'cm' 变量
    finally:
        print('Exit')    # yield 之后代码在 __exit__ 上运行

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

<BaseQuiz id="cheatsheet-context-manager-2" correct="B">
<template #question>
一个类要用作上下文管理器，必须实现哪些方法？
</template>

<BaseQuizOption value="A">A. <code>**init**</code> 和 <code>**del**</code></BaseQuizOption>
<BaseQuizOption value="B" correct>B. <code>**enter**</code> 和 <code>**exit**</code></BaseQuizOption>
<BaseQuizOption value="C">C. <code>open</code> 和 <code>close</code></BaseQuizOption>
<BaseQuizOption value="D">D. <code>start</code> 和 <code>stop</code></BaseQuizOption>
<BaseQuizAnswer>基于类的上下文管理器必须实现 <code>**enter**</code>（在进入 <code>with</code> 块时调用）和 <code>**exit**</code>（在退出该块时调用）。</BaseQuizAnswer>
</BaseQuiz>

## 相关链接

- <router-link to="/cheatsheet/reading-and-writing-files">读写文件</router-link>
- <router-link to="/cheatsheet/exception-handling">异常处理</router-link>
- <router-link to="/cheatsheet/decorators">装饰器</router-link>
- <router-link to="/blog/python-pathlib-essentials">每位开发者都应知道的 10 个基本文件系统操作</router-link>
- <router-link to="/builtin/open">open()</router-link>
