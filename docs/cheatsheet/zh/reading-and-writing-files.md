---
title: 'Python 读写文件备忘单'
description: '要在 Python 中读写文件，您应该使用 with 语句，它会在完成后自动关闭文件，为您管理可用资源。'
labUrl: 'https://labex.io/zh/labs/python-python-reading-and-writing-files-633663?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
读取和写入文件 - Python 速查表
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

有关文件和目录路径操作的更深入了解，请参阅 <router-link to="/cheatsheet/file-directory-path">文件和目录路径</router-link> 页面。

## 文件读写过程

要在 Python 中读/写文件，您需要使用 `with` 语句，它会在您完成后自动关闭文件，为您管理可用资源。

## 打开和读取文件

`open` 函数打开一个文件并返回一个相应的文件对象。

```python
# 使用 'with' 语句读取文件：完成后自动关闭文件
with open('/home/labex/project/hi.txt') as hello_file:
    hello_content = hello_file.read()  # 读取整个文件内容

hello_content
```

```output
'Hello World!'
```

或者，您可以使用 _readlines()_ 方法从文件中获取字符串值列表，每行文本对应一个字符串：

```python
# readlines() 方法：返回一个字符串列表，每行一个
with open('sonnet29.txt') as sonnet_file:
    sonnet_file.readlines()  # 返回一个列表，其中每行是一个字符串
```

```output
['When, in disgrace with fortune and men's eyes,\n',
 ' I all alone beweep my  outcast state,\n',
 "And trouble deaf heaven with my bootless cries,\n",
 "And look upon myself and curse my fate,']
```

您也可以逐行遍历文件：

```python
# 逐行遍历文件（对大文件更节省内存）
with open('sonnet29.txt') as sonnet_file:
    for line in sonnet_file:  # 文件对象是可迭代的
        print(line, end='')  # 打印时不加额外换行
```

```output
When, in disgrace with fortune and men's eyes,
I all alone beweep my outcast state,
And trouble deaf heaven with my bootless cries,
And look upon myself and curse my fate,
```

## 写入文件

```python
# 写入文件：'w' 模式会覆盖现有文件
with open('bacon.txt', 'w') as bacon_file:  # 'w' = 写入模式
    bacon_file.write('Hello world!\n')  # 返回写入的字符数
```

```output
13
```

```python
# 追加到文件：'a' 模式会在现有文件末尾追加
with open('bacon.txt', 'a') as bacon_file:  # 'a' = 追加模式
    bacon_file.write('Bacon is not a vegetable.')
```

```output
25
```

```python
with open('bacon.txt') as bacon_file:
    content = bacon_file.read()

print(content)
```

```output
Hello world!
Bacon is not a vegetable.
```

## 相关链接

- <router-link to="/cheatsheet/file-directory-path">文件和目录路径</router-link>
- <router-link to="/cheatsheet/json-yaml">JSON 和 YAML</router-link>
- <router-link to="/blog/python-pathlib-essentials">每个开发者都应知道的 10 个基本文件系统操作</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/print">print()</router-link>
