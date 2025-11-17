---
title: 'Python Pathlib 模块 - Python 速查表'
description: 'pathlib 模块于 Python 3.4 引入，提供面向对象的文件系统路径处理方式。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Pathlib 模块
</base-title>

有关实用文件系统操作的深入探讨，请参阅我们的博客文章：<router-link to="/blog/python-pathlib-essentials">每位开发者都应知道的 10 个基本文件系统操作</router-link>。

`pathlib` 模块在 Python 3.4 中添加，提供了一种面向对象的方式来处理文件系统路径。

<base-disclaimer>
  <base-disclaimer-title>
    Pathlib 与 OS 模块
  </base-disclaimer-title>
  <base-disclaimer-content>
    <code>pathlib</code> 提供了比此处列出的 <code>os</code> 模块多得多的功能，例如获取文件名、获取文件扩展名、在不手动打开文件的情况下读取/写入文件等。如果您想了解更多信息，请参阅<a target="_blank" href="https://docs.python.org/3/library/pathlib.html">官方文档</a>。
    <br>
    要更深入地了解两者，请参阅<router-link to="/cheatsheet/file-directory-path">文件和目录路径</router-link>页面。
  </base-disclaimer-content>
</base-disclaimer>

## Linux 和 Windows 路径

在 Windows 上，路径使用反斜杠（`\`）作为文件夹名称之间的分隔符。在基于 Unix 的操作系统（如 macOS、Linux 和 BSD）上，使用正斜杠（`/`）作为路径分隔符。如果您的代码需要在不同平台上运行，连接路径可能会很麻烦。

幸运的是，Python 为我们提供了 `pathlib.Path.joinpath` 来轻松处理这个问题。

```python
from pathlib import Path

# 连接路径组件
print(Path('usr').joinpath('bin').joinpath('spam'))
```

输出：

```plaintext
usr/bin/spam
```

`pathlib` 还提供了一个快捷方式，使用 `/` 运算符连接路径：

```python
from pathlib import Path

# 使用 / 运算符连接路径
print(Path('usr') / 'bin' / 'spam')
```

输出：

```plaintext
usr/bin/spam
```

连接路径在您需要在同一目录下创建不同文件路径时非常有用。

```python
my_files = ['accounts.txt', 'details.csv', 'invite.docx']
# 获取用户主目录
home = Path.home()
# 将每个文件名与主目录连接
for filename in my_files:
    print(home / filename)
```

输出：

```plaintext
/home/labex/project/accounts.txt
/home/labex/project/details.csv
/home/labex/project/invite.docx
```

## 当前工作目录

```python
from pathlib import Path
from os import chdir

# 获取当前工作目录
print(Path.cwd())
```

输出：

```plaintext
/home/labex/project
```

```python
# 使用 os 模块更改目录
chdir('/usr/lib/python3.10')
# 验证当前目录
print(Path.cwd())
```

输出：

```plaintext
/usr/lib/python3.10
```

## 创建新文件夹

```python
from pathlib import Path
cwd = Path.cwd()
# 创建目录（如果父目录不存在则会失败）
(cwd / 'delicious' / 'walnut' / 'waffles').mkdir()
```

输出：

```plaintext
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "/usr/lib/python3.10/pathlib.py", line 1226, in mkdir
    self._accessor.mkdir(self, mode)
  File "/usr/lib/python3.10/pathlib.py", line 387, in wrapped
    return strfunc(str(pathobj), *args)
FileNotFoundError: [Errno 2] No such file or directory: '/home/labex/project/delicious/walnut/waffles'
```

出现此错误的原因是 'delicious' 目录不存在，因此我们无法在其下创建 'walnut' 和 'waffles' 目录。要修复此问题，请执行以下操作：

```python
from pathlib import Path
cwd = Path.cwd()
# 使用 parents=True 创建目录及其所有父目录
(cwd / 'delicious' / 'walnut' / 'waffles').mkdir(parents=True)
```

## 绝对路径与相对路径

有两种方法可以指定文件路径。

- **绝对路径**，总是以根文件夹开头
- **相对路径**，相对于程序的当前工作目录

还有点（`.`）和点点（`..`）文件夹。它们不是真正的文件夹，而是可用于路径的特殊名称。单个句点（“点”）作为文件夹名称是“此目录”的简写。“两个点”（“点点”）表示“父文件夹”。

### 处理绝对路径

要查看路径是否为绝对路径：

```python
from pathlib import Path
# 检查路径是否为绝对路径
Path('/').is_absolute()
```

输出：

```plaintext
True
```

```python
# 相对路径返回 False
Path('..').is_absolute()
```

输出：

```plaintext
False
```

您也可以提取绝对路径：

```python
from pathlib import Path
# 获取当前目录
print(Path.cwd())
```

输出：

```plaintext
/home/labex/project
```

```python
# 解析相对路径为绝对路径
print(Path('..').resolve())
```

输出：

```plaintext
/home
```

### 处理相对路径

您可以从一个起始路径获取到另一个路径的相对路径。

```python
from pathlib import Path
# 从基础路径获取相对路径
print(Path('/etc/passwd').relative_to('/'))
```

输出：

```plaintext
etc/passwd
```

## 路径和文件有效性

### 检查文件/目录是否存在

```python
from pathlib import Path

# 检查路径是否存在
Path('.').exists()
```

输出：

```plaintext
True
```

```python
Path('setup.py').exists()
```

输出：

```plaintext
True
```

```python
Path('/etc').exists()
```

输出：

```plaintext
True
```

```python
Path('nonexistentfile').exists()
```

输出：

```plaintext
False
```

### 检查路径是否为文件

```python
from pathlib import Path

# 检查路径是否为文件
Path('setup.py').is_file()
```

输出：

```plaintext
True
```

```python
Path('/home').is_file()
```

输出：

```plaintext
False
```

```python
Path('nonexistentfile').is_file()
```

输出：

```plaintext
False
```

### 检查路径是否为目录

```python
from pathlib import Path

# 检查路径是否为目录
Path('/').is_dir()
```

输出：

```plaintext
True
```

```python
Path('setup.py').is_dir()
```

输出：

```plaintext
False
```

```python
Path('/spam').is_dir()
```

输出：

```plaintext
False
```

## 获取文件大小（以字节为单位）

```python
from pathlib import Path

# 获取文件统计信息
stat = Path('/bin/python3.10').stat()
print(stat) # stat 还包含有关文件的其他信息
```

输出：

```plaintext
os.stat_result(st_mode=33261, st_ino=141087, st_dev=2051, st_nlink=2, st_uid=0,
--snip--
st_gid=0, st_size=10024, st_atime=1517725562, st_mtime=1515119809, st_ctime=1517261276)
```

```python
# 从 stat 对象访问文件大小
print(stat.st_size) # 以字节为单位的大小
```

输出：

```plaintext
10024
```

## 列出目录内容

```python
from pathlib import Path

# 遍历目录内容
for f in Path('/usr/bin').iterdir():
    print(f)
```

输出：

```plaintext
...
/usr/bin/tiff2rgba
/usr/bin/iconv
/usr/bin/ldd
/usr/bin/cache_restore
/usr/bin/udiskie
/usr/bin/unix2dos
/usr/bin/t1reencode
/usr/bin/epstopdf
/usr/bin/idle3
...
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
from pathlib import Path

# 计算目录中所有文件的大小总和
total_size = 0
for sub_path in Path('/usr/bin').iterdir():
    total_size += sub_path.stat().st_size
print(total_size)
```

输出：

```plaintext
1903178911
```

## 删除文件和文件夹

- 调用 `Path.unlink()` 将删除路径处的文件。

- 调用 `Path.rmdir()` 将删除路径处的文件夹。该文件夹必须是空的，不包含任何文件或文件夹。

## 相关链接

- <router-link to="/cheatsheet/reading-and-writing-files">速查表：读取和写入文件</router-link>
- <router-link to="/modules/os-module">模块：os</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/str">str()</router-link>
