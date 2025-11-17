---
title: '使用 Poetry 和 VSCode 的 Python 项目 第三部分 - Python 速查表'
description: '最后，在第三部分中，我们将编写一个示例库，使用 *Poetry* 构建项目并将其发布到 Pypi。'
date: 'May 21, 2019'
updated: 'July 3, 2022'
tags: 'python, intermediate, vscode, packaging'
socialImage: '/blog/poetry-3.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "使用 Poetry 和 VSCode 的 Python 项目 第三部分 - Python 速查表"
    description: "最后，在第三部分中，我们将编写一个示例库，使用 *Poetry* 构建项目并将其发布到 Pypi。"
    date: "May 21, 2019"
    updated: "July 3, 2022"
    tags: "python, intermediate, vscode, packaging"
    socialImage: "/blog/poetry-3.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="使用 Poetry 和 VSCode 的 Python 项目 第三部分 - Python 速查表" />

在<router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">第一篇文章</router-link>中，我们启动了一个新项目，创建了虚拟环境并管理了依赖项。在<router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">第二部分</router-link>中，我们将虚拟环境添加到了 [VSCode](https://code.visualstudio.com/) 并集成了我们的开发依赖项。

最后，在这第三也是最后一部分中，我们将：

- 编写一个示例库。
- 使用 _Poetry_ 构建我们的项目。
- 将其发布到 _PyPI_。

## Poetry 命令

下表列出了本系列中使用的命令及其描述。有关完整列表，请阅读 [Poetry 文档](https://poetry.eustace.io/docs/cli/)。

| 命令                              | 描述                                   |
| :-------------------------------- | :------------------------------------- |
| `poetry new [package-name]`       | 启动一个新的 Python 项目。             |
| `poetry init`                     | 以交互方式创建 _pyproject.toml_ 文件。 |
| `poetry install`                  | 安装 _pyproject.toml_ 文件中的包。     |
| `poetry add [package-name]`       | 将包添加到虚拟环境中。                 |
| `poetry add -D [package-name]`    | 将开发包添加到虚拟环境中。             |
| `poetry remove [package-name]`    | 从虚拟环境中移除包。                   |
| `poetry remove -D [package-name]` | 从虚拟环境中移除开发包。               |
| `poetry update`                   | 获取依赖项的最新版本                   |
| `poetry shell`                    | 在虚拟环境中生成一个 shell。           |
| `poetry build`                    | 构建源代码和 wheel 归档文件。          |
| `poetry publish`                  | 将包发布到 PyPI。                      |
| `poetry publish --build`          | 构建并发布包。                         |
| `poetry self:update`              | 将 poetry 更新到最新的稳定版本。       |

## 项目

如果您愿意，可以从 [GitHub](https://github.com/wilfredinni/how-long) 下载源代码，但如前所述，这将是一个简单的装饰器，它会在控制台打印函数运行所需的时间。

它的工作方式如下：

```python
from how_long import timer

@timer
def test_function():
    [i for i in range(10000)]

test_function()
# Execution Time: 955 ms.
```

项目目录结构如下：

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

在开始之前，请使用 `poetry update` 命令检查包更新：

![poetry update](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/May/poetry_vscode_p3/img/poetry_update.png)

在 `README.rst` 中为项目添加简短描述：

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

导航到 `how_long/how_long.py`：

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

在 `how_long/__init__.py` 中：

```python
from .how_long import timer

__version__ = "0.1.1"
```

最后是 `tests/test_how_long.py` 文件：

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

现在您可以在终端中使用 `poetry install` 来安装并本地验证您的包。如果您还没有激活虚拟环境，请激活它，然后在 Python 交互式 shell 中：

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

[运行测试](https://www.pythoncheatsheet.org/blog/python-projects-with-poetry-and-vscode-part-2#Pytest)，如果一切正常，请继续。

## 构建和发布

最后，让这个项目向全世界可用的时刻到来了！确保您在 [PyPI](https://pypi.org) 上有一个帐户。请记住，包名称必须是唯一的，如果不确定，请使用 [搜索](https://pypi.org/search/?q=) 进行检查。

### 构建

`poetry build` 命令构建源代码和 [wheels](https://pythonwheels.com/) 归档文件，这些文件稍后将作为项目的来源上传：

![poetry build](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/May/poetry_vscode_p3/img/poetry_build.png)

将创建 _how_long.egg-info_ 目录。

### 发布

此命令将包发布到 _PyPI_，如果这是首次提交，它会自动注册后再上传：

![poetry publish](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/May/poetry_vscode_p3/img/poetry_publish.png)

> 您也可以使用 `$ poetry publish --build` 来构建和发布您的项目。

输入您的凭据，如果一切正常，[浏览](https://pypi.org/project/how-long/) 您的项目，您将看到类似以下的内容：

![pipy how-long](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/May/poetry_vscode_p3/img/pypi.png)

我们现在可以告诉其他人他们可以从任何机器、任何地方使用 `pip install how-long`！

## 结论

我记得我第一次尝试发布包时的情景，那简直是一场噩梦。我当时刚开始接触 Python，花了好“几个小时”才弄明白 `setup.py` 文件是什么以及如何使用它。最后，我得到了几个文件：一个 `Makefile`、一个 `MANIFEST.in`、一个 `requirements.txt` 和一个 `test_requirements.txt`。这就是为什么 [Sébastien Eustace](https://github.com/sdispater)，[Poetry](https://github.com/sdispater/poetry) 的创建者的话对我来说非常有意义：

> Python 中的打包和依赖管理对于新手来说相当复杂且难以理解。即使对于经验丰富的开发人员来说，创建 Python 项目所需的所有文件有时也可能很麻烦：`setup.py`、`requirements.txt`、`setup.cfg`、`MANIFEST.in` 以及新添加的 `Pipfile`。
>
> 所以我想要一个工具，将所有内容限制在一个配置文件中，以完成：依赖管理、打包和发布。
>
> 它借鉴了其他语言中已有的工具，例如 `composer` (PHP) 或 `cargo` (Rust)。
>
> 最后，没有可靠的工具可以正确解析 Python 中的依赖项，所以我创建了 `poetry` 来为 Python 社区带来一个详尽的依赖解析器。

Poetry [绝非完美](https://frostming.com/2019/01-04/pipenv-poetry#what-about-poetry)，但与其它工具不同，它确实兑现了它的承诺。
