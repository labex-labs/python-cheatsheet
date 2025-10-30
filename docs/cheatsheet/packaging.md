---
title: Python Packaging - Python Cheatsheet
description: Learn about Python packaging tools and standards including setup.py, pyproject.toml (PEP-517, PEP-518, PEP-660), and modern packaging tools like Poetry and UV for building, distributing, and installing Python packages.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Packaging
</base-title>

<base-warning>
  <base-warning-title>
    Modern Python Packaging
  </base-warning-title>
  <base-warning-content>
    Modern tools like <a target="_blank" href="https://python-poetry.org/">Poetry</a> and <a target="_blank" href="https://docs.astral.sh/uv/">UV</a> make packaging <b>significantly easier</b> and help manage dependencies more conveniently. UV is particularly notable for being 10-100x faster than traditional tools. These tools use <code>pyproject.toml</code> (PEP-517, PEP-518, PEP-660) as the standard configuration format.
  </base-warning-content>
</base-warning>

If you want more information about Poetry you can read the following articles:

- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">Python projects with Poetry and VSCode. Part 1</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">Python projects with Poetry and VSCode. Part 2</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">Python projects with Poetry and VSCode. Part 3</router-link>

For a comprehensive guide to UV, the lightning-fast Python package manager, read: <router-link to="/blog/python-uv-package-manager">UV: The Lightning-Fast Python Package Manager</router-link>.

## Introduction

Python packaging involves building, distributing, and installing Python modules and packages. Over the years, Python packaging has evolved significantly, from the traditional `setup.py` approach to modern standards using `pyproject.toml`.

For a comprehensive guide on handling file and directory paths, which is essential for managing project structures, see the <router-link to="/cheatsheet/file-directory-path">File and directory Paths</router-link> page.

## Modern Packaging with pyproject.toml

The `pyproject.toml` file is the modern standard for Python project configuration, defined by PEP-517, PEP-518, and PEP-660. It provides a unified way to specify build requirements, project metadata, and tool configurations.

### Basic pyproject.toml Example

```toml
[build-system]
requires = ["setuptools>=61.0", "wheel"]
build-backend = "setuptools.build_meta"

[project]
name = "pythonCheatsheet"
version = "0.1.0"
description = "A comprehensive Python cheatsheet"
readme = "README.md"
requires-python = ">=3.8"
license = {text = "MIT"}
authors = [
    {name = "Your Name", email = "your.email@example.com"}
]
dependencies = [
    "requests>=2.28.0",
]

[project.optional-dependencies]
dev = [
    "pytest>=7.0",
    "black>=22.0",
]
```

## Traditional setup.py

The setup script was the center of all activity in building, distributing, and installing modules using the Distutils. While still functional, it's being replaced by `pyproject.toml` in modern projects.

The `setup.py` file describes all the metadata about your project. There are only three required fields: name, version, and packages. The name field must be unique if you wish to publish your package on the Python Package Index (PyPI).

This allows you to easily install Python packages:

```bash
python setup.py install
```

### setup.py Example

```python
from distutils.core import setup
setup(
   name='pythonCheatsheet',
   version='0.1',
   packages=['pipenv',],
   license='MIT',
   long_description=open('README.txt').read(),
)
```

Find more information in the [official documentation](http://docs.python.org/3.11/install/index.html).

## Relevant links

- <router-link to="/cheatsheet/virtual-environments">Virtual Environments</router-link>
- <router-link to="/cheatsheet/file-directory-path">File and directory Paths</router-link>
- <router-link to="/blog/python-uv-package-manager">UV: The Lightning-Fast Python Package Manager</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">Python projects with Poetry and VSCode. Part 1</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">Python projects with Poetry and VSCode. Part 2</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">Python projects with Poetry and VSCode. Part 3</router-link>
- <router-link to="/builtin/import">import()</router-link>
