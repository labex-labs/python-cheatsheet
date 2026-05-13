---
title: Python Argparse 模块 - Python 速查表
description: `argparse` 模块可以帮助你构建命令行界面，支持位置参数、选项、标志位和帮助信息。
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Argparse 模块
</base-title>

`argparse` 模块可以帮助你构建带有位置参数、选项、标志位和帮助信息的命令行界面。

该模块从 Python 3.2 开始加入标准库。如果你使用的是 Python 3.14，`ArgumentParser` 还支持 `suggest_on_error` 和 `color` 参数。

```python
import argparse
```

当你希望某个 Python 文件像一个小型终端程序那样运行时，可以使用 `argparse`：

```bash
python greet.py Ada --count 2
```

模块会读取脚本名后面的文本，验证这些值，并返回一个包含解析结果的 Python 对象。

## 创建解析器

`ArgumentParser` 用来保存程序接受的参数。

```python
import argparse

parser = argparse.ArgumentParser(
    prog='greet',
    description='Greet a user from the command line',
)

parser.print_help()
```

```output
usage: greet [-h]

Greet a user from the command line

options:
  -h, --help  show this help message and exit
```

## 位置参数

位置参数默认是必需的。

```python
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('name')

args = parser.parse_args(['Ada'])
print(args.name)
```

```output
Ada
```

## 可选参数和标志位

可选参数通常以 `-` 或 `--` 开头。

```python
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--count', type=int, default=1)
parser.add_argument('-v', '--verbose', action='store_true')

args = parser.parse_args(['--count', '3', '--verbose'])
print(args.count)
print(args.verbose)
```

```output
3
True
```

## 取值范围和类型转换

你可以在解析时验证参数值。

```python
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--mode', choices=['dev', 'prod'])
parser.add_argument('--port', type=int, default=8000)

args = parser.parse_args(['--mode', 'dev', '--port', '9000'])
print(args.mode)
print(args.port)
```

```output
dev
9000
```

## 子命令

子命令对 `git commit` 或 `docker run` 这类工具很有用。

```python
import argparse

parser = argparse.ArgumentParser()
subparsers = parser.add_subparsers(dest='command', required=True)

build_parser = subparsers.add_parser('build')
build_parser.add_argument('--release', action='store_true')

args = parser.parse_args(['build', '--release'])
print(args.command)
print(args.release)
```

```output
build
True
```

## 一个完整的小示例

这个示例接受一个名字，并重复输出问候语。

```python
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('name')
parser.add_argument('--count', type=int, default=1)

args = parser.parse_args(['Ada', '--count', '2'])

for _ in range(args.count):
    print(f'Hello {args.name}!')
```

```output
Hello Ada!
Hello Ada!
```

## 相关链接

- <router-link to="/modules/sys-module">模块：sys</router-link>
- <router-link to="/cheatsheet/functions">速查表：函数</router-link>
- <router-link to="/cheatsheet/control-flow">速查表：控制流</router-link>
