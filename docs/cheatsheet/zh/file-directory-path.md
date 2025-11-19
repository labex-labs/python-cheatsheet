---
title: '文件和目录路径 - Python 速查表'
description: 'Python 中有两个主要模块处理路径操作：os.path 模块和 pathlib 模块。'
labUrl: 'https://labex.io/zh/labs/python-python-file-and-directory-path-manipulation-633657?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
处理文件和目录路径 - Python 速查表
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

有关实际文件系统操作的深入探讨，请参阅我们的博客文章：<router-link to="/blog/python-pathlib-essentials">每位开发者都应知道的 10 个基本文件系统操作</router-link>。

Python 中有两个主要模块处理路径操作。
一个是 <router-link to="/modules/os-module">os.path</router-link> 模块，另一个是 <router-link to="/modules/pathlib-module">pathlib</router-link> 模块。

<base-disclaimer>
  <base-disclaimer-title>
    Pathlib 与 OS 模块
  </base-disclaimer-title>
  <base-disclaimer-content>
    <code>pathlib</code> 提供了比上面列出的更多的功能，例如获取文件名、获取文件扩展名、在不手动打开的情况下读/写文件等。如果您想了解更多信息，请参阅<a target="_blank" href="https://docs.python.org/3/library/pathlib.html">官方文档</a>。
  </base-disclaimer-content>
</base-disclaimer>

## Linux 和 Windows 路径

在 Windows 上，路径使用反斜杠 (`\`) 作为文件夹名称之间的分隔符。在基于 Unix 的操作系统（如 macOS、Linux 和 BSD）上，使用正斜杠 (`/`) 作为路径分隔符。如果您的代码需要在不同平台上运行，连接路径可能会很麻烦。

幸运的是，Python 的 `pathlib` 模块提供了一种轻松处理这种情况的方法。

在 \*nix 上使用 `pathlib`：

```python
# pathlib.Path: 跨平台路径处理
from pathlib import Path

print(Path('usr').joinpath('bin').joinpath('spam'))  # 连接路径组件
```

```output
usr/bin/spam
```

`pathlib` 还提供了一个使用 `/` 运算符连接路径的快捷方式：

```python
# Path 运算符 (/): 连接路径的便捷方式（跨平台）
from pathlib import Path

print(Path('usr') / 'bin' / 'spam')  # 使用 / 运算符代替 joinpath()
```

```output
usr/bin/spam
```

请注意，路径分隔符在 Windows 和基于 Unix 的操作系统之间是不同的，这就是您希望使用 `pathlib` 而不是将字符串连接起来以连接路径的原因。

连接路径在您需要在同一目录下创建不同文件路径时非常有用。

在 \*nix 上使用 `pathlib`：

```python
# Path.home(): 获取用户主目录，与文件名组合
my_files = ['accounts.txt', 'details.csv', 'invite.docx']
home = Path.home()  # 获取主目录路径
for filename in my_files:
    print(home / filename)  # 将主路径与每个文件名组合
```

```output
/home/labex/project/accounts.txt
/home/labex/project/details.csv
/home/labex/project/invite.docx
```

## 当前工作目录

您可以使用 `pathlib` 获取当前工作目录：

```python
# Path.cwd(): 获取当前工作目录
from pathlib import Path

print(Path.cwd())  # 将当前工作目录作为 Path 对象返回
```

```output
/home/labex/project
```

## 创建新文件夹

在 \*nix 上使用 `pathlib`：

```python
from pathlib import Path
cwd = Path.cwd()
(cwd / 'delicious' / 'walnut' / 'waffles').mkdir()
```

```output
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "/usr/lib/python3.6/pathlib.py", line 1226, in mkdir
    self._accessor.mkdir(self, mode)
  File "/usr/lib/python3.6/pathlib.py", line 387, in wrapped
    return strfunc(str(pathobj), *args)
FileNotFoundError: [Errno 2] No such file or directory: '/home/labex/project/delicious/walnut/waffles'
```

哦，不，我们遇到了一个棘手的错误！原因是 'delicious' 目录不存在，所以我们无法在它下面创建 'walnut' 和 'waffles' 目录。要修复此问题，请执行以下操作：

```python
# mkdir(parents=True): 如果需要，创建目录和所有父目录
from pathlib import Path
cwd = Path.cwd()
(cwd / 'delicious' / 'walnut' / 'waffles').mkdir(parents=True)  # 创建嵌套目录
```

一切都好 :)

## 绝对路径与相对路径

有两种方法可以指定文件路径。

- **绝对路径**，总是以根文件夹开头
- **相对路径**，相对于程序的当前工作目录

还有点 (`.`) 和点点 (`..`) 文件夹。这些不是真正的文件夹，而是可用于路径的特殊名称。单个句点（“点”）表示“此目录”的简写。两个句点（“点点”）表示“父文件夹”。

### 处理绝对路径

要使用 `pathlib` 查看路径是否为绝对路径：

```python
from pathlib import Path
Path('/').is_absolute()
```

```output
True
```

```python
Path('..').is_absolute()
```

```output
False
```

您可以使用 `pathlib` 提取绝对路径：

```python
from pathlib import Path
print(Path.cwd())
```

```output
/home/labex/project
```

```python
print(Path('..').resolve())
```

```output
/home
```

### 处理相对路径

您可以使用 `pathlib` 从起始路径到另一个路径获取相对路径：

```python
from pathlib import Path
print(Path('/etc/passwd').relative_to('/'))
```

```output
etc/passwd
```

## 路径和文件有效性

### 检查文件/目录是否存在

在 \*nix 上使用 `pathlib`：

```python
from pathlib import Path

Path('.').exists()
```

```output
True
```

```python
Path('setup.py').exists()
```

```output
True
```

```python
Path('/etc').exists()
```

```output
True
```

```python
Path('nonexistentfile').exists()
```

```output
False
```

### 检查路径是否为文件

在 \*nix 上使用 `pathlib`：

```python
from pathlib import Path

Path('setup.py').is_file()
```

```output
True
```

```python
Path('/home').is_file()
```

```output
False
```

```python
Path('nonexistentfile').is_file()
```

```output
False
```

### 检查路径是否为目录

在 \*nix 上使用 `pathlib`：

```python
from pathlib import Path

Path('/').is_dir()
```

```output
True
```

```python
Path('setup.py').is_dir()
```

```output
False
```

```python
Path('/spam').is_dir()
```

```output
False
```

## 获取文件大小（以字节为单位）

在 \*nix 上使用 `pathlib`：

```python
from pathlib import Path

stat = Path('/bin/python3.6').stat()
print(stat) # stat 还包含有关文件的其他信息
```

```output
os.stat_result(st_mode=33261, st_ino=141087, st_dev=2051, st_nlink=2, st_uid=0,
--snip--
st_gid=0, st_size=10024, st_atime=1517725562, st_mtime=1515119809, st_ctime=1517261276)
```

```python
print(stat.st_size) # 大小（以字节为单位）
```

```output
10024
```

## 列出目录

在 \*nix 上使用 `pathlib` 列出目录内容：

```python
from pathlib import Path

for f in Path('/usr/bin').iterdir():
    print(f)
```

```output
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
    目录本身也有大小！因此，您可能希望使用上面讨论的方法中的方法检查路径是文件还是目录。
  </base-warning-content>
</base-warning>

在 \*nix 上使用 `pathlib`：

```python
from pathlib import Path

total_size = 0
for sub_path in Path('/usr/bin').iterdir():
    total_size += sub_path.stat().st_size

print(total_size)
```

```output
1903178911
```

## 复制文件和文件夹

`shutil` 模块提供用于复制文件以及整个文件夹的函数。

```python
import shutil

shutil.copy('/tmp/spam.txt', '/tmp/delicious')
```

```output
/tmp/delicious/spam.txt
```

```python
shutil.copy('/tmp/eggs.txt', '/tmp/delicious/eggs2.txt')
```

```output
/tmp/delicious/eggs2.txt
```

虽然 `shutil.copy()` 会复制单个文件，但 `shutil.copytree()` 会复制整个文件夹及其包含的所有文件夹和文件：

```python
import shutil

shutil.copytree('/tmp/bacon', '/tmp/bacon_backup')
```

```output
/tmp/bacon_backup
```

## 移动和重命名

```python
import shutil

shutil.move('/tmp/bacon.txt', '/tmp/eggs')
```

```output
/tmp/eggs/bacon.txt
```

目标路径也可以指定文件名。在以下示例中，源文件被移动并重命名：

```python
shutil.move('/tmp/bacon.txt', '/tmp/eggs/new_bacon.txt')
```

```output
/tmp/eggs/new_bacon.txt
```

如果不存在 eggs 文件夹，则 `move()` 会将 bacon.txt 重命名为名为 eggs 的文件：

```python
shutil.move('/tmp/bacon.txt', '/tmp/eggs')
```

```output
/tmp/eggs
```

## 删除文件和文件夹

- 调用 `Path.unlink()` 将删除路径处的文件。
- 调用 `Path.rmdir()` 将删除路径处的文件夹。该文件夹必须为空，不包含任何文件或文件夹。
- 调用 `shutil.rmtree(path)` 将删除路径处的文件夹，以及其中包含的所有文件和文件夹也将被删除。

## 遍历目录树

`Path` 对象有一个 `rglob()` 方法，用于递归迭代文件和目录。

```python
from pathlib import Path

p = Path('/tmp/delicious')
for i in p.rglob('*'):
    print(i)
```

```output
/tmp/delicious/cats
/tmp/delicious/walnut
/tmp/delicious/spam.txt
/tmp/delicious/cats/catnames.txt
/tmp/delicious/cats/zophie.jpg
/tmp/delicious/walnut/waffles
/tmp/delicious/walnut/waffles/butter.txt
```

## 相关链接

- <router-link to="/cheatsheet/reading-and-writing-files">读写文件</router-link>
- <router-link to="/blog/python-pathlib-essentials">10 个每位开发者都应知道的基本文件系统操作</router-link>
- <router-link to="/builtin/open">open()</router-link>
