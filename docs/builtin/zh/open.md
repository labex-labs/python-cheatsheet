---
title: 'Python open() 内置函数 - Python 速查表'
description: '打开文件并返回相应的文件对象。如果文件无法打开，则会引发 OSError。有关如何使用此函数的更多示例，请参阅读写文件。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python open() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#open">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   打开文件并返回一个相应的文件对象。如果文件无法打开，将引发 OSError。有关如何使用此函数的更多示例，请参阅 <router-link to="/cheatsheet/file-directory-path">读取和写入文件</router-link>。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

Python 中的 `open()` 函数用于打开一个文件并返回一个文件对象。它是与系统文件交互的标准方式。您可以指定打开文件的模式，例如读取、写入或追加。

## 示例

```python
# 打开一个全新的文件（'x' 模式如果文件已存在则会抛出错误）
spam = open('spam.txt', mode='x')
spam.write('My first line\n\n')
spam.close()
```

```python
# 追加到文件并在完成后自动关闭
with open('spam.txt', mode='a') as spam:
    spam.write('My second line')
```

```python
with open('spam.txt') as spam:
    content = spam.read()
    print(content)
```

```output
My first line

My second line
```

## 相关链接

- <router-link to="/cheatsheet/reading-and-writing-files">备忘单：读取和写入文件</router-link>
- <router-link to="/cheatsheet/file-directory-path">备忘单：文件和目录路径</router-link>
- <router-link to="/cheatsheet/context-manager">备忘单：上下文管理器 (with 语句)</router-link>
- <router-link to="/blog/python-pathlib-essentials">博客：Pathlib 基础知识</router-link>
- <router-link to="/modules/os-module">模块：os</router-link>
- <router-link to="/modules/pathlib-module">模块：pathlib</router-link>
