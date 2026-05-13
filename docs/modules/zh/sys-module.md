---
title: Python Sys 模块 - Python 速查表
description: `sys` 模块可以访问 Python 运行时细节，例如命令行参数、导入路径和当前解释器版本。
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Sys 模块
</base-title>

`sys` 模块可以访问 Python 运行时细节，例如命令行参数、导入路径和当前解释器版本。

```python
import sys
```

当代码需要直接和 Python 解释器交互，而不只是和应用对象打交道时，就可以使用 `sys`。

## 命令行参数

`sys.argv` 是传递给当前脚本的参数列表。

```python
import sys

sys.argv = ['main.py', '--debug', 'app']
print(sys.argv[0])
print(sys.argv[1:])
```

```output
main.py
['--debug', 'app']
```

对于真正的命令行应用，建议使用 <router-link to="/modules/argparse-module">argparse</router-link>。它基于同样的思路，但还提供了校验和帮助信息。

## Python 版本

```python
import sys

print(sys.version_info.major)
print(sys.version_info.minor)
```

```output
3
14
```

## 导入搜索路径

`sys.path` 控制 Python 查找模块的位置。

```python
import sys

print(type(sys.path).__name__)
print(len(sys.path) > 0)
```

```output
list
True
```

`sys.path` 的前几项通常包含当前项目，所以本地模块可以被导入。

## 标准输入和输出

`sys.stdin`、`sys.stdout` 和 `sys.stderr` 是解释器使用的类文件对象。

```python
import sys

print(sys.stdout.writable())
print(sys.stderr.writable())
```

```output
True
True
```

## 退出程序

```python
import sys

try:
    sys.exit(0)
except SystemExit as exc:
    print(exc.code)
```

```output
0
```

## 相关链接

- <router-link to="/modules/argparse-module">模块：argparse</router-link>
- <router-link to="/modules/subprocess-module">模块：subprocess</router-link>
- <router-link to="/cheatsheet/main">速查表：Main：顶层脚本</router-link>
