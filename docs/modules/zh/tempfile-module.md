---
title: Python Tempfile 模块 - Python 速查表
description: `tempfile` 模块可以安全地创建临时文件和目录。
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Tempfile 模块
</base-title>

`tempfile` 模块可以安全地创建临时文件和目录。

```python
import tempfile
```

当数据只需要在程序运行期间存在时，例如测试输出、下载内容或中间文件，就可以使用 `tempfile`。

## TemporaryFile()

`TemporaryFile` 会创建一个会自动清理的文件对象。

```python
import tempfile

with tempfile.TemporaryFile(mode='w+t') as temp:
    temp.write('hello')
    temp.seek(0)
    print(temp.read())
```

```output
hello
```

当 `with` 代码块结束时，文件会自动删除。

## NamedTemporaryFile()

`NamedTemporaryFile` 会给你一个磁盘上的路径。

```python
import tempfile

with tempfile.NamedTemporaryFile(mode='w+t') as temp:
    print(bool(temp.name))
```

```output
True
```

当某个 API 需要的是文件名而不是文件对象时，这就很有用。

## TemporaryDirectory()

临时目录对测试和短生命周期的工作区很有用。

```python
import tempfile
from pathlib import Path

with tempfile.TemporaryDirectory() as directory:
    file_path = Path(directory) / 'notes.txt'
    file_path.write_text('draft')
    print(file_path.exists())
```

```output
True
```

当代码块退出时，目录中的文件也会随着目录一起被删除。

## 选择临时位置

`gettempdir()` 会显示 Python 默认使用的目录。

```python
import tempfile

print(bool(tempfile.gettempdir()))
```

```output
True
```

## 相关链接

- <router-link to="/modules/pathlib-module">模块：pathlib</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">速查表：读写文件</router-link>
- <router-link to="/builtin/open">open()</router-link>
