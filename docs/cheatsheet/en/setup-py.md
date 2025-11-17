---
title: Python Setup.py - Python Cheatsheet
description: The setup script is the centre of all activity in building, distributing, and installing modules using the Distutils. The main purpose of the setup script is to describe your module distribution to the Distutils, so that the various commands that operate on your modules do the right thing.
labUrl: https://labex.io/labs/python-python-setup-py-633666?course=python-cheatsheet
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python setup.py
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-warning>
  <base-warning-title>
    A 'controversial' opinion
  </base-warning-title>
  <base-warning-content>
    Using `setup.py` to pack and distribute your python packages can be quite challenging every so often. Modern tools like <a target="_blank" href="https://python-poetry.org/">Poetry</a> and <a target="_blank" href="https://docs.astral.sh/uv/">UV</a> make not only the packaging a <b>lot easier</b>, but also help you to manage your dependencies in a very convenient way. UV is particularly notable for being 10-100x faster than traditional tools.
  </base-warning-content>
</base-warning>

If you want more information about Poetry you can read the following articles:

- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">Python projects with Poetry and VSCode. Part 1</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">Python projects with Poetry and VSCode. Part 2</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">Python projects with Poetry and VSCode. Part 3</router-link>

For a comprehensive guide to UV, the lightning-fast Python package manager, read: <router-link to="/blog/python-uv-package-manager">UV: The Lightning-Fast Python Package Manager</router-link>.

## Introduction

The setup script is the center of all activity in building, distributing, and installing modules using the Distutils. The main purpose of the setup script is to describe your module distribution to the Distutils, so that the various commands that operate on your modules do the right thing.

For a comprehensive guide on handling file and directory paths, which is essential for managing project structures, see the <router-link to="/cheatsheet/file-directory-path">File and directory Paths</router-link> page.

The `setup.py` file is at the heart of a Python project. It describes all the metadata about your project. There are quite a few fields you can add to a project to give it a rich set of metadata describing the project. However, there are only three required fields: name, version, and packages. The name field must be unique if you wish to publish your package on the Python Package Index (PyPI). The version field keeps track of different releases of the project. The package's field describes where you’ve put the Python source code within your project.

This allows you to easily install Python packages. Often it's enough to write:

```bash
python setup.py install
```

and module will install itself.

## Example

Our initial setup.py will also include information about the license and will re-use the README.txt file for the long_description field. This will look like:

```python
# setup.py: define package metadata for distribution
from distutils.core import setup
setup(
   name='pythonCheatsheet',  # Package name (must be unique on PyPI)
   version='0.1',  # Version number
   packages=['pipenv',],  # List of packages to include
   license='MIT',  # License type
   long_description=open('README.txt').read(),  # Read description from file
)
```

Find more information visit the [official documentation](http://docs.python.org/3.11/install/index.html).

## Relevant links

- <router-link to="/cheatsheet/virtual-environments">Virtual Environments</router-link>
- <router-link to="/cheatsheet/file-directory-path">File and directory Paths</router-link>
- <router-link to="/blog/python-uv-package-manager">UV: The Lightning-Fast Python Package Manager</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">Python projects with Poetry and VSCode. Part 1</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">Python projects with Poetry and VSCode. Part 2</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">Python projects with Poetry and VSCode. Part 3</router-link>
- <router-link to="/builtin/import">import()</router-link>
