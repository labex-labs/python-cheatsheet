---
title: Python Tempfile Module - Python Cheatsheet
description: The tempfile module creates temporary files and directories safely.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Tempfile Module
</base-title>

The `tempfile` module creates temporary files and directories safely.

```python
import tempfile
```

Use `tempfile` for data that should exist only while your program is running, such as test output, downloads, or intermediate files.

## TemporaryFile()

`TemporaryFile` creates a file object that is cleaned up automatically.

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

The file is removed automatically when the `with` block ends.

## NamedTemporaryFile()

`NamedTemporaryFile` gives you a path on disk.

```python
import tempfile

with tempfile.NamedTemporaryFile(mode='w+t') as temp:
    print(bool(temp.name))
```

```output
True
```

This is useful when another API needs a filename instead of a file object.

## TemporaryDirectory()

Temporary directories are useful for tests and short-lived workspaces.

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

Files inside the directory are removed with the directory when the block exits.

## Choosing a temporary location

`gettempdir()` shows the directory Python uses by default.

```python
import tempfile

print(bool(tempfile.gettempdir()))
```

```output
True
```

## Relevant links

- <router-link to="/modules/pathlib-module">Module: pathlib</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">Cheatsheet: Reading and Writing Files</router-link>
- <router-link to="/builtin/open">open()</router-link>
