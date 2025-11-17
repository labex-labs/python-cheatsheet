---
title: '使用 Poetry 和 VSCode 的 Python 项目（第一部分）- Python 速查表'
description: '我们将使用 Poetry 启动一个简单项目，管理依赖项并将其发布到 PyPI。我们还将直接从虚拟环境中将 Pytest、Black 和 Flake8 集成到 VSCode 中。'
date: 'April 12, 2019'
updated: 'July 3, 2022'
tags: 'python, intermediate, vscode, packaging'
socialImage: '/blog/poetry-1.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "使用 Poetry 和 VSCode 的 Python 项目（第一部分）- Python 速查表"
    description: "我们将使用 Poetry 启动一个简单项目，管理依赖项并将其发布到 PyPI。我们还将直接从虚拟环境中将 Pytest、Black 和 Flake8 集成到 VSCode 中。"
    date: "April 12, 2019"
    updated: "July 3, 2022"
    tags: "python, intermediate, vscode, packaging"
    socialImage: "/blog/poetry-1.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="使用 Poetry 和 VSCode 的 Python 项目（第一部分）- Python 速查表" />

虚拟环境是一个隔离的 Python 安装，旨在避免用我们可能只为一个项目使用的库填满基础环境。它还允许我们在不同的项目中管理同一包的多个版本。例如，一个项目可能需要 Django 4.1，而另一个需要 1.9。

<base-disclaimer>
  <base-disclaimer-title>
    Python Poetry
  </base-disclaimer-title>
  <base-disclaimer-content>
    Poetry 是一个用于处理依赖项安装以及 Python 包的构建和打包的工具。它只需要一个文件即可完成所有这些工作：新的、<a target="_blank" href="https://www.python.org/dev/peps/pep-0518/">标准化</a>的 <code>pyproject.toml</code>`。换句话说，poetry 使用 <code>pyproject.toml</code> 来替代 <code>setup.py</code>、<code>requirements.txt</code>、<code>setup.cfg</code>、<code>MANIFEST.in</code> 和新添加的 <code>Pipfile</code>。
  </base-disclaimer-content>
</base-disclaimer>

在这一系列文章中，我们将使用 [Poetry](https://poetry.eustace.io/) 来管理我们的依赖项、构建一个简单的项目，并使用一个命令将其发布到 [PyPI](https://pypi.org/)。

在第一部分中，我们将：

- 启动一个新项目。
- 创建一个虚拟环境。
- 管理依赖项。

在 <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">第二篇文章</router-link> 中，我们将：

- 将我们的虚拟环境添加到 [VSCode](https://code.visualstudio.com/)。
- 集成我们的开发依赖项：
  - _Flake8_
  - _Black_
  - _Pytest_

最后，在 <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">第三篇文章</router-link> 中，我们将：

- 编写一个示例库。
- 使用 _Poetry_ 构建我们的项目。
- 将其发布到 _PyPI_。

## 安装 Poetry

最简单的方法是使用 _pip_：

```bash
pip install poetry
```

但我们将使用 Poetry 自己的安装程序，通过供应商化其依赖项来将其与系统其余部分隔离。这是安装 poetry 的推荐方式：

```bash
curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python -
```

通过这种方式，我们稍后将能够使用 `poetry self update` 命令将 poetry 更新到最新的稳定版本。

## 启动一个新项目

我们现在可以使用 `poetry new [project_name]` 命令启动一个新的 Python 项目。我将其命名为 **_how-long_**，它将是一个简单的库，用于测量函数执行时间：

```bash
poetry new how-long
```

> 注意：对于现有项目，您可以使用 `poetry init` 命令以交互方式创建 _pyproject.toml_。

创建了 _how-long_ 目录，其中包含一个基本项目结构：

```
how-long
├── README.rst
├── how_long
│   └── __init__.py
├── pyproject.toml
└── tests
    ├── __init__.py
    └── test_how_long.py
```

有关处理文件和目录路径的全面指南，这对管理项目结构至关重要，请参阅 <router-link to="/cheatsheet/file-directory-path">文件和目录路径</router-link> 页面。

> 注意：要能够发布您的项目，您需要一个可用的名称。请使用 [PyPI](https://pypi.org/) 搜索此信息。

### pyproject.toml 文件

**pyproject.toml** 文件将管理项目的详细信息和依赖项：

```
[tool.poetry]
name = "how-long"
version = "0.1.0"
description = "A simple decorator to measure a function execution time."
authors = ["wilfredinni <carlos.w.montecinos@gmail.com>"]

[tool.poetry.dependencies]
python = "^3.7"

[tool.poetry.dev-dependencies]
pytest = "^3.0"

[build-system]
requires = ["poetry>=0.12"]
build-backend = "poetry.masonry.api"
```

#### [tool.poetry]

详细信息。添加 [许可证](https://poetry.eustace.io/docs/pyproject/#license) 和 [README](https://poetry.eustace.io/docs/pyproject/#readme) 是个好主意：

```
[tool.poetry]
...
license = "MIT"
readme = "README.rst"
```

#### [tool.poetry.dependencies]

首先是 Python 版本。基本上，这个项目将与 Python 3.7 及更高版本兼容。此外，从现在起，我们安装的每个打算用于生产的包都将列在此处。

#### [tool.poetry.dev-dependencies]

这些包仅用于开发，当我们构建和发布项目时不会包含它们。默认情况下，Poetry 会包含 [Pytest](https://docs.pytest.org/en/latest/)，所以我们稍后会用它来测试我们的项目。

## 创建虚拟环境

要创建虚拟环境并安装 _Pytest_，我们将使用 `poetry install` 命令：

```bash
poetry install
```

![poetry-install-command](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p1/poetry-install.png)

完成后，将创建一个新文件 `poetry.lock`。

> 当 Poetry 完成安装后，它会将所有包及其下载的确切版本写入 poetry.lock 文件，将项目锁定到这些特定版本。您应该将 poetry.lock 文件提交到您的项目仓库，以便所有处理该项目的人都锁定在相同版本的依赖项上。

## 依赖管理

添加或删除依赖项的一种方法是直接编辑 _pyproject.toml_，然后运行 `poetry install` 来应用更改。我们将使用 `add` 和 `remove` 命令来避免手动修改。

### 添加依赖项

让我们向项目中添加两个包，_pendulum_ 和 _coo_：

```bash
poetry add pendulum coo
```

![poetry-add-command](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p1/poetry-add.png)

打开 _pyproject.toml_ 和 _poetry.lock_，看看它们是如何更新的。

### 添加开发依赖项

这些依赖项仅在开发期间可用，Poetry 在构建和发布项目时不会包含它们。

我们已经安装了 _Pytest_，但我们还将使用 [flake8](http://flake8.pycqa.org/en/latest/) 进行代码检查和 [mypy](http://mypy-lang.org/) 进行静态类型检查：

```bash
poetry add -D flake8 mypy
```

现在我想了一下，我忘记添加一个格式化工具了。我们将使用 [black](https://black.readthedocs.io/en/stable/)：

```bash
poetry add -D black
[ValueError]
Could not find a matching version of package black

add [-D|--dev] [--git GIT] [--path PATH] [-E|--extras EXTRAS] [--optional] [--python PYTHON] [--platform PLATFORM] [--allow-prereleases] [--dry-run] [--] <name> (<name>)...
```

出现此错误是因为 _black_ 处于预发布状态，因此 Poetry 找不到任何稳定版本。但我确实想要它，所以我们还是用 `--allow-prereleases` 标志安装它：

```bash
poetry add -D black --allow-prereleases
```

![poetry-add-dev-command](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p1/poetry-add-dev.png)

### 移除依赖项

你知道吗，我改变主意了，这个项目既不会使用 _coo_ 也不会使用 _mypy_。首先删除 _coo_，它是我们项目的一个普通依赖项：

```bash
poetry remove coo
```

现在是 _mypy_，它是一个开发依赖项：

```bash
poetry remove -D mypy
```

## 结论

在第一部分中，我们启动了一个新项目，创建了一个虚拟环境，并使用以下命令添加和删除了依赖项：

| 命令                              | 描述                                   |
| :-------------------------------- | :------------------------------------- |
| `poetry new [package-name]`       | 启动一个新的 Python 项目。             |
| `poetry init`                     | 以交互方式创建 _pyproject.toml_ 文件。 |
| `poetry install`                  | 安装 _pyproject.toml_ 文件中的包。     |
| `poetry add [package-name]`       | 向虚拟环境中添加一个包。               |
| `poetry add -D [package-name]`    | 向虚拟环境中添加一个开发包。           |
| `poetry remove [package-name]`    | 从虚拟环境中移除一个包。               |
| `poetry remove -D [package-name]` | 从虚拟环境中移除一个开发包。           |
| `poetry self:update`              | 将 poetry 更新到最新的稳定版本。       |

在 <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">第二篇文章</router-link> 中，我们将了解更多 _Poetry_ 命令，将我们的虚拟环境添加到 _VSCode_，并在编辑器中使用我们安装的开发包进行代码检查 (Flake8)、格式化 (Black) 和测试 (Pytest)。最后，在第三篇中，我们将编写并发布一个示例库到 _PyPI_。

有任何疑问或建议吗？请发表评论。
