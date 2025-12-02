---
title: 'Python Subprocess 模块 - Python 速查表'
description: 'subprocess 模块允许我们启动和管理系统进程。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Subprocess 模块
</base-title>

[Subprocess](https://docs.python.org/3/library/subprocess.html) 是一个内置模块，它允许我们生成新的系统进程、连接到它们的输入/输出/错误流，并获取它们的返回码。

```python
import subprocess
```

## 运行系统命令

`run` 函数用于执行系统命令。

```python
subprocess.run(['echo', 'Hello World!'])
```

```output
Hello World!
```

如果你想将命令作为单个字符串而不是列表运行，请使用：

```python
subprocess.run('echo Hello World!', shell=True)
```

```output
Hello World!
```

两者都会自动将输出打印到终端。

<base-warning>
  <base-warning-title>
    警告
  </base-warning-title>
  <base-warning-content>
    避免对不可信的输入使用 `shell=True`（有 shell 注入的风险）。
  </base-warning-content>
</base-warning>

## 捕获输出

要捕获输出，请将 `capture_output` 设置为 `True`：

```python
result = subprocess.run(
  ['echo', 'Hello World!'],
  capture_output=True,
  text=True
)

output = result.stdout
error = result.stderr
returncode = result.returncode
```

```output
output = "Hello World!\n"
error = ""
returncode = 0
```

在这里，`text=True` 告诉函数将输出读取为文本而不是字节。

返回码 0 表示成功；任何非零值表示错误。

## 检查错误

虽然我们可以使用返回码检查成功与否，但有一种更 Pythonic 的方法：

```python
try:
  result = subprocess.run(
    ['ls', 'my_dir'],
    check=True,
  )
  print('Finished without errors.')
except subprocess.CalledProcessError:
  print('Error: Directory does not exist.')
```

```output
Error: Directory does not exist.
```

如果设置了 `check=True` 且返回码不为 0（操作不成功），subprocess 将引发 `subprocess.CalledProcessError`，这可以像往常一样使用 except 块进行处理。

## 运行带超时的命令

你可以为进程设置一个超时时间。如果花费的时间超过指定时间，将引发 `subprocess.TimeoutExpired`：

```python
try:
    subprocess.run(['sleep', '10'], timeout=5)
except subprocess.TimeoutExpired:
    print('Process took too long!')
```

```output
Process took too long!
```

## 将输出写入文件

你可以通过将 `stdout`（如果需要，也包括 `stderr`）设置为文件对象来将输出重定向到文件：

```python
with open('output.txt', 'w') as f:
    subprocess.run(['ls', '-l'], stdout=f, stderr=f)
```

在这里，正常输出和错误都会按生成顺序出现在文件中。

**注意：** 当你想在 Python 中将输出作为字符串进行操作时，`text=True` 非常有用。当直接将输出重定向到文件时，它不是必需的。

## 相关链接

- <router-link to="/cheatsheet/reading-and-writing-files">备忘单：读取和写入文件</router-link>
- <router-link to="/cheatsheet/file-directory-path">备忘单：文件和目录路径</router-link>
- <router-link to="/cheatsheet/exception-handling">备忘单：异常处理</router-link>
- <router-link to="/modules/os-module">模块：os</router-link>
- <router-link to="/builtin/open">open()</router-link>
