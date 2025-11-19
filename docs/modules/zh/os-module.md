---
title: 'Python OS 模块 - Python 速查表'
description: '此模块提供了一种可移植的方式来使用依赖于操作系统的功能。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python OS 模块
</base-title>

此模块提供了一种可移植的方式来使用操作系统依赖的功能。

<base-disclaimer>
  <base-disclaimer-title>
    Pathlib 与 OS 模块
  </base-disclaimer-title>
  <base-disclaimer-content>
    <router-link to="/modules/pathlib-module">pathlib</router-link> 模块提供了比此处列出的更多的功能，例如获取文件名、获取文件扩展名、在不手动打开文件的情况下读取/写入文件等。如果您想了解更多信息，请参阅<a target="_blank" href="https://docs.python.org/3/library/pathlib.html">官方文档</a>。
    <br>
    要深入了解两者，请参阅<router-link to="/cheatsheet/file-directory-path">文件和目录路径</router-link>页面。
  </base-disclaimer-content>
</base-disclaimer>

## Linux 和 Windows 路径

在 Windows 上，路径使用反斜杠 (`\`) 作为文件夹名称之间的分隔符。在基于 Unix 的操作系统（如 macOS、Linux 和 BSD）上，正斜杠 (`/`) 用作路径分隔符。如果您的代码需要在不同平台上运行，连接路径可能会很麻烦。

幸运的是，Python 为我们提供了 `os.path.join` 来处理这个问题。

```python
import os

# 使用适用于操作系统的正确分隔符连接路径组件
os.path.join('usr', 'bin', 'spam')
```

```output
usr\bin\spam
```

连接路径在您需要在同一目录下创建不同文件路径时非常有用。

```python
my_files = ['accounts.txt', 'details.csv', 'invite.docx']

# 将每个文件名与基本目录连接起来
for filename in my_files:
    print(os.path.join('/home/labex/project', filename))
```

```output
/home/labex/project/accounts.txt
/home/labex/project/details.csv
/home/labex/project/invite.docx
```

## 当前工作目录

```python
import os

# 获取当前工作目录
os.getcwd()
```

```output
/home/labex/project
```

```python
# 更改当前工作目录
os.chdir('/usr/bin')

# 验证更改
os.getcwd()
```

```output
/usr/bin
```

## 创建新文件夹

```python
import os
# 递归创建目录（如果需要，会创建所有父目录）
os.makedirs('/tmp/delicious/walnut/waffles')
```

## 绝对路径与相对路径

指定文件路径有两种方式。

- **绝对路径**，它总是以根文件夹开头
- **相对路径**，它相对于程序的当前工作目录

还有点 (`.`) 和点点 (`..`) 文件夹。这些不是真正的文件夹，而是可以在路径中使用的特殊名称。单个句点（“点”）作为文件夹名称是“此目录”的简写。两个点（“点点”）表示“父文件夹”。

### 处理绝对路径

要查看路径是否为绝对路径：

```python
import os
# 检查路径是否为绝对路径（以根目录开头）
os.path.isabs('/')
```

```output
True
```

```python
# 相对路径返回 False
os.path.isabs('..')
```

```output
False
```

您也可以提取绝对路径：

```python
import os
# 首先获取当前目录
os.getcwd()
```

```output
/home/labex/project
```

```python
# 将相对路径转换为绝对路径
os.path.abspath('..')
```

```output
/home
```

### 处理相对路径

您可以获取从起始路径到另一路径的相对路径。

```python
import os
# 获取从起始路径到目标路径的相对路径
os.path.relpath('/etc/passwd', '/')
```

```output
etc/passwd
```

## 路径和文件有效性

### 检查文件/目录是否存在

```python
import os

# 检查路径是否存在（文件或目录）
os.path.exists('.')
```

```output
True
```

```python
os.path.exists('setup.py')
```

```output
True
```

```python
os.path.exists('/etc')
```

```output
True
```

```python
os.path.exists('nonexistentfile')
```

```output
False
```

### 检查路径是否为文件

```python
import os

# 检查路径是否为文件
os.path.isfile('setup.py')
```

```output
True
```

```python
os.path.isfile('/home')
```

```output
False
```

```python
os.path.isfile('nonexistentfile')
```

```output
False
```

### 检查路径是否为目录

```python
import os

# 检查路径是否为目录
os.path.isdir('/')
```

```output
True
```

```python
os.path.isdir('setup.py')
```

```output
False
```

```python
os.path.isdir('/spam')
```

```output
False
```

## 获取文件大小（以字节为单位）

```python
import os

# 获取文件大小（字节）
os.path.getsize('/usr/bin/python3')
```

```output
776192
```

## 列出目录

```python
import os

# 列出指定路径中的所有文件和目录
os.listdir('/usr/bin')
```

```output
['0409', '12520437.cpx', '12520850.cpx', '5U877.ax', 'aaclient.dll',
--snip--
'xwtpdui.dll', 'xwtpw32.dll', 'zh-CN', 'zh-HK', 'zh-TW', 'zipfldr.dll']
```

## 目录文件大小

<base-warning>
  <base-warning-title>
    警告
  </base-warning-title>
  <base-warning-content>
    目录本身也有大小！因此，您可能希望使用上面讨论的方法检查路径是文件还是目录。
  </base-warning-content>
</base-warning>

```python
import os
total_size = 0

# 计算目录中所有文件的总大小
for filename in os.listdir('/usr/bin'):
    # 将目录路径与文件名连接起来并获取大小
    total_size = total_size + os.path.getsize(os.path.join('/usr/bin', filename))
print(total_size)
```

```output
1117846456
```

## 删除文件和文件夹

- 调用 `os.unlink(path)` 将删除路径处的文件。

- 调用 `os.rmdir(path)` 将删除路径处的文件夹。该文件夹必须是空的，不包含任何文件或文件夹。

## 遍历目录树

```python
import os

# 递归遍历目录树
for folder_name, subfolders, filenames in os.walk('/tmp/delicious'):
    print(f'当前文件夹是 {folder_name}')
    # 遍历子目录
    for subfolder in subfolders:
        print(f'来自 {folder_name} 的子文件夹：{subfolder}')
    # 遍历文件
    for filename in filenames:
        print(f'在 {folder_name} 中的文件：filename{filename}')
    print('')
```

```output
当前文件夹是 /tmp/delicious
来自 /tmp/delicious 的子文件夹: cats
来自 /tmp/delicious 的子文件夹: walnut
在 /tmp/delicious 中的文件: spam.txt

当前文件夹是 /tmp/delicious/cats
在 /tmp/delicious/cats 中的文件: catnames.txt
在 /tmp/delicious/cats 中的文件: zophie.jpg

当前文件夹是 /tmp/delicious/walnut
来自 /tmp/delicious/walnut 的子文件夹: waffles

当前文件夹是 /tmp/delicious/walnut/waffles
在 /tmp/delicious/walnut/waffles 中的文件: butter.txt
```

## 相关链接

- <router-link to="/cheatsheet/file-directory-path">速查表：文件和目录路径</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">速查表：读取和写入文件</router-link>
- <router-link to="/blog/python-pathlib-essentials">博客：Pathlib 基础知识</router-link>
- <router-link to="/modules/pathlib-module">模块：pathlib</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/str">str()</router-link>
