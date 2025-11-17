---
title: 'Python Zipfile 模块 - Python 速查表'
description: '此模块提供创建、读取、写入、追加和列出 ZIP 文件所需的工具。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Zipfile 模块
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/zipfile.html">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   此模块提供了创建、读取、写入、追加和列出 ZIP 文件的工具。
  </base-disclaimer-content>
</base-disclaimer>

## 读取 ZIP 文件

```python
import zipfile

# 打开 ZIP 文件并读取其内容
with zipfile.ZipFile('example.zip') as example_zip:
    # 列出 ZIP 中所有文件和目录
    print(example_zip.namelist())
    # 获取特定文件的元数据
    spam_info = example_zip.getinfo('spam.txt')
    # 打印原始文件大小
    print(spam_info.file_size)
    # 打印压缩后文件大小
    print(spam_info.compress_size)
    # 计算压缩率
    print('Compressed file is %sx smaller!' % (round(spam_info.file_size / spam_info.compress_size, 2)))
```

输出：

```plaintext
['spam.txt', 'cats/', 'cats/catnames.txt', 'cats/zophie.jpg']
13908
3828
Compressed file is 3.63x smaller!
```

## 从 ZIP 文件中解压

`ZipFile` 对象的 `extractall()` 方法将 ZIP 文件中的所有文件和文件夹解压到当前工作目录。

```python
# 将 ZIP 中的所有文件解压到当前目录
with zipfile.ZipFile('example.zip') as example_zip:
    example_zip.extractall()
```

`ZipFile` 对象的 `extract()` 方法将从 ZIP 文件中解压单个文件：

```python
# 从 ZIP 中解压单个文件
with zipfile.ZipFile('example.zip') as example_zip:
    # 解压到当前目录 (返回路径)
    print(example_zip.extract('spam.txt'))
    # 解压到特定目录
    print(example_zip.extract('spam.txt', '/tmp/some/new/folders'))
```

输出：

```plaintext
/tmp/spam.txt
/tmp/some/new/folders/spam.txt
```

## 创建和向 ZIP 文件中添加内容

```python
import zipfile

# 创建一个新的 ZIP 文件并将一个文件添加到其中
with zipfile.ZipFile('new.zip', 'w') as new_zip:
    # 添加带压缩的文件
    new_zip.write('spam.txt', compress_type=zipfile.ZIP_DEFLATED)
```

此代码将创建一个名为 new.zip 的新 ZIP 文件，其中包含 spam.txt 的压缩内容。

## 读取 ZIP 文件的元数据

### 使用 namelist() 获取文件名列表

```python
import zipfile

# 读取 ZIP 文件并列出所有文件名
with zipfile.ZipFile('example.zip', 'r') as zf:
    print(zf.namelist())
```

输出：

```plaintext
['README.txt']
```

### 使用 infolist() 获取所有元数据

```python
import datetime
import zipfile

# 获取 ZIP 中所有文件的详细元数据
with zipfile.ZipFile('example.zip') as zf:
    for info in zf.infolist():
        # 确定操作系统 (0 = Windows, 3 = Unix)
        system = 'Windows' if info.create_system == 0 else 'Unix'
        # 将 date_time 元组转换为 datetime 对象
        modified = datetime.datetime(*info.date_time)
        print(info.filename)
        print(f'Comment     : {info.comment}')
        print(f'Modified    : {modified}')
        print(f'System      : {system}')
        print(f'ZIP version : {info.create_version}')
        print(f'Compressed  : {info.compress_size} bytes')
        print(f'Uncompressed: {info.file_size} bytes')
```

输出：

```plaintext
README.txt
Comment     : b''
Modified    : 2022-11-15 06:48:02
System      : Unix
ZIP version : 30
Compressed  : 65 bytes
Uncompressed: 76 bytes
```

## 相关链接

- <router-link to="/cheatsheet/reading-and-writing-files">备忘单：读取和写入文件</router-link>
- <router-link to="/cheatsheet/file-directory-path">备忘单：文件和目录路径</router-link>
- <router-link to="/cheatsheet/context-manager">备忘单：上下文管理器</router-link>
- <router-link to="/modules/os-module">模块：os</router-link>
- <router-link to="/modules/pathlib-module">模块：pathlib</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/bytes">bytes()</router-link>
