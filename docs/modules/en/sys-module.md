---
title: Python Sys Module - Python Cheatsheet
description: The sys module gives access to Python runtime details such as command-line arguments, the import path, and the current interpreter version.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Sys Module
</base-title>

The `sys` module gives access to Python runtime details such as command-line arguments, the import path, and the current interpreter version.

```python
import sys
```

Use `sys` when your code needs to talk to the Python interpreter itself, not just to your own application objects.

## Command-line arguments

`sys.argv` is a list of arguments passed to the current script.

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

For real command-line applications, prefer <router-link to="/modules/argparse-module">argparse</router-link>. It builds on the same idea but gives you validation and help messages.

## Python version

```python
import sys

print(sys.version_info.major)
print(sys.version_info.minor)
```

```output
3
14
```

## Import search path

`sys.path` controls where Python looks for modules.

```python
import sys

print(type(sys.path).__name__)
print(len(sys.path) > 0)
```

```output
list
True
```

The first entries in `sys.path` usually include your current project, which is why local modules can be imported.

## Standard input and output

`sys.stdin`, `sys.stdout`, and `sys.stderr` are file-like objects used by the interpreter.

```python
import sys

print(sys.stdout.writable())
print(sys.stderr.writable())
```

```output
True
True
```

## Exiting a program

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

## Relevant links

- <router-link to="/modules/argparse-module">Module: argparse</router-link>
- <router-link to="/modules/subprocess-module">Module: subprocess</router-link>
- <router-link to="/cheatsheet/main">Cheatsheet: Main: Top-Level Script</router-link>
