---
title: Python open() built-in function - Python Cheatsheet
description: Open file and return a corresponding file object. If the file cannot be opened, an OSError is raised. See Reading and Writing Files for more examples of how to use this function.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python open() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#open">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Open file and return a corresponding file object. If the file cannot be opened, an OSError is raised. See <router-link to="/cheatsheet/file-directory-path">Reading and Writing Files</router-link> for more examples of how to use this function.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `open()` function in Python is used to open a file and returns a file object. It's the standard way to interact with files on your system. You can specify the mode for opening the file, such as read, write, or append.

## Examples

```python
# Opens a brand new file (in 'x' mode will throw if already exists)
spam = open('spam.txt', mode='x')
spam.write('My first line\n\n')
spam.close()
```

```python
# Appends to file and automatically closes afterward
with open('spam.txt', mode='a') as spam:
    spam.write('My second line')
```

```python
with open('spam.txt') as spam:
    content = spam.read()
    print(content)
```

```output
My first line

My second line
```

## Relevant links

- <router-link to="/cheatsheet/reading-and-writing-files">Cheatsheet: Reading and Writing Files</router-link>
- <router-link to="/cheatsheet/file-directory-path">Cheatsheet: File & Directory Path</router-link>
- <router-link to="/cheatsheet/context-manager">Cheatsheet: Context Managers (with statement)</router-link>
- <router-link to="/blog/python-pathlib-essentials">Blog: Pathlib Essentials</router-link>
- <router-link to="/modules/os-module">Module: os</router-link>
- <router-link to="/modules/pathlib-module">Module: pathlib</router-link>
