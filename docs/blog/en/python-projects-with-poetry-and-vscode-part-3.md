---
title: 'Python projects with Poetry and VSCode Part 3 - Python Cheatsheet'
description: Finally, in this third part, we'll write a sample library, build our project with *Poetry* and publish it on Pypi.
date: May 21, 2019
updated: July 3, 2022
tags: python, intermediate, vscode, packaging
socialImage: /blog/poetry-3.jpg
---

<route lang="yaml">
meta:
    layout: article
    title: 'Python projects with Poetry and VSCode Part 3'
    description: Finally, in this third part, we'll write a sample library, build our project with *Poetry* and publish it on Pypi.
    date: May 21, 2019
    updated: July 3, 2022
    tags: python, intermediate, vscode, packaging
    socialImage: /blog/poetry-3.jpg
</route>

<blog-title-header :frontmatter="frontmatter" title="Python projects with Poetry and VSCode Part 3" />

In the <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">first article</router-link> we started a new project, created a Virtual Environment and managed dependencies. In the <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">second part</router-link>, added our virtual Environment to [VSCode](https://code.visualstudio.com/) and integrated our dev dependencies.

And finally, in this third and last part we'll:

- Write a sample library.
- Build our project with _Poetry_.
- Publish it on _PyPI_.

## Poetry Commands

Here is a table with the commands used in this series as well as their descriptions. For a full list, read the [Poetry Documentation](https://poetry.eustace.io/docs/cli/).

| Command                           | Description                                            |
| --------------------------------- | ------------------------------------------------------ |
| `poetry new [package-name]`       | Start a new Python Project.                            |
| `poetry init`                     | Create a _pyproject.toml_ file interactively.          |
| `poetry install`                  | Install the packages inside the _pyproject.toml_ file. |
| `poetry add [package-name]`       | Add a package to a Virtual Environment.                |
| `poetry add -D [package-name]`    | Add a dev package to a Virtual Environment.            |
| `poetry remove [package-name]`    | Remove a package from a Virtual Environment.           |
| `poetry remove -D [package-name]` | Remove a dev package from a Virtual Environment.       |
| `poetry update`                   | Get the latest versions of the dependencies            |
| `poetry shell`                    | Spawns a shell within the virtual environment.         |
| `poetry build`                    | builds the source and wheels archives.                 |
| `poetry publish`                  | Publish the package to Pypi.                           |
| `poetry publish --build`          | Build and publish a package.                           |
| `poetry self:update`              | Update poetry to the latest stable version.            |

## The Project

You can download the source code from [GitHub](https://github.com/wilfredinni/how-long) if you like, but as mentioned earlier, this will be a simple decorator that will print to the console how long it takes for a function to run.

It will work like this:

```python
from how_long import timer

@timer
def test_function():
    [i for i in range(10000)]

test_function()
# Execution Time: 955 ms.
```

And the project directory will be as follows:

```
how-long
├── how_long
│   ├── how_long.py
│   └── __init__.py
├── how_long.egg-info
│   ├── dependency_links.txt
│   ├── PKG-INFO
│   ├── requires.txt
│   ├── SOURCES.txt
│   └── top_level.txt
├── LICENSE
├── poetry.lock
├── pyproject.toml
├── README.rst
└── tests
    ├── __init__.py
    └── test_how_long.py
```

Before we start, check for package updates with the `poetry update` command:

![poetry update](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/May/poetry_vscode_p3/img/poetry_update.png)

Add a brief description for the project in the `README.rst`:

```
how_long
========

Simple Decorator to measure a function execution time.

Example
_______

.. code-block:: python

    from how_long import timer


    @timer
    def some_function():
        return [x for x in range(10_000_000)]
```

Navigate to `how_long/how_long.py`:

```python
# how_long.py
from functools import wraps

import pendulum


def timer(function):
    """
    Simple Decorator to measure a function execution time.
    """

    @wraps(function)
    def function_wrapper():
        start = pendulum.now()
        function()
        elapsed_time = pendulum.now() - start
        print(f"Execution Time: {elapsed_time.microseconds} ms.")

    return function_wrapper
```

In `how_long/__init__.py`:

```python
from .how_long import timer

__version__ = "0.1.1"
```

And finally, the `tests/test_how_long.py` file:

```python
from how_long import __version__
from how_long import timer


def test_version():
    assert __version__ == "0.1.1"


def test_wrap():
    @timer
    def wrapped_function():
        return

    assert wrapped_function.__name__ == "wrapped_function"
```

You can now use `poetry install` on your terminal to install and prove your package locally. Activate your virtual environment if you haven't and in the Python interactive shell:

```python
>>> from how_long import timer
>>>
>>> @timer
... def test_function():
...     [i for i in range(10000)]
...
>>> test_function()
Execution Time: 705 ms.
```

[Run the tests](https://www.pythoncheatsheet.org/blog/python-projects-with-poetry-and-vscode-part-2#Pytest) and if everything is fine, move on.

## Building and Publishing

Finally, the time to make this project available to the world has come! Make sure you have an account on [PyPI](https://pypi.org). Remember that the package name must be unique, if unsure, use the [search](https://pypi.org/search/?q=) to check it out.

### Build

The `poetry build` command builds the source and [wheels](https://pythonwheels.com/) archives that will later be uploaded as the source of the project:

![poetry build](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/May/poetry_vscode_p3/img/poetry_build.png)

The _how_long.egg-info_ directory will be created.

### Publish

This command publishes the package to _PyPI_ and automatically register it before uploading if this is the first time it is submitted:

![poetry publish](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/May/poetry_vscode_p3/img/poetry_publish.png)

> You can also build and publish your project with `$ poetry publish --build`.

Enter your credentials and if everything is ok, [browse](https://pypi.org/project/how-long/) your project, and you'll see something like this:

![pipy how-long](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/May/poetry_vscode_p3/img/pypi.png)

We can now let others know that they can `pip install how-long` from any machine, anywhere!

## Conclusion

I remember the first time I tried to publish a package, and it was a nightmare. I was just starting in Python and I have to spend a "few hours" trying to understand what the `setup.py` file was and how to use it. In the end, I ended up with several files: a `Makefile`, a `MANIFEST.in`, a `requirements.txt` and a `test_requirements.txt`. That's why the words of [Sébastien Eustace](https://github.com/sdispater), the creator of [Poetry](https://github.com/sdispater/poetry), made a lot of sense to me:

> Packaging and dependency management in Python are rather convoluted and hard to understand for newcomers. Even for seasoned developers it might be cumbersome at times to create all files needed in a Python project: `setup.py`, `requirements.txt`, `setup.cfg`, `MANIFEST.in` and the newly added `Pipfile`.
>
> So I wanted a tool that would limit everything to a single configuration file to do: dependency management, packaging and publishing.
>
> It takes inspiration in tools that exist in other languages, like `composer` (PHP) or `cargo` (Rust).
>
> And, finally, there is no reliable tool to properly resolve dependencies in Python, so I started `poetry` to bring an exhaustive dependency resolver to the Python community.

Poetry is by [no means perfect](https://frostming.com/2019/01-04/pipenv-poetry#what-about-poetry) but, unlike other tools, it really does what promise.
