---
title: '使用 Poetry 和 VSCode 的 Python 项目 第二部分 - Python 速查表'
description: '在第二部分中，我们将把虚拟环境添加到 VSCode，更新依赖项，并将 Flake8、Black 和 Pytest 与编辑器集成。'
date: 'April 23, 2019'
updated: 'July 3, 2022'
tags: 'python, intermediate, vscode, packaging'
socialImage: '/blog/poetry-2.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "使用 Poetry 和 VSCode 的 Python 项目 第二部分 - Python 速查表"
    description: "在第二部分中，我们将把虚拟环境添加到 VSCode，更新依赖项，并将 Flake8、Black 和 Pytest 与编辑器集成。"
    date: "April 23, 2019"
    updated: "July 3, 2022"
    tags: "python, intermediate, vscode, packaging"
    socialImage: "/blog/poetry-2.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="使用 Poetry 和 VSCode 的 Python 项目 第二部分 - Python 速查表" />

在<router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">第一篇文章</router-link>中，我们了解了 `pyproject.toml` 文件是什么以及如何使用它，使用 [Poetry](https://poetry.eustace.io/) 来启动一个新项目、创建虚拟环境以及添加和删除依赖项。所有这些都是通过以下命令完成的：

| Command                           | 描述                                 |
| --------------------------------- | ------------------------------------ |
| `poetry new [package-name]`       | 启动一个新的 Python 项目。           |
| `poetry init`                     | 交互式地创建 _pyproject.toml_ 文件。 |
| `poetry install`                  | 安装 _pyproject.toml_ 文件中的包。   |
| `poetry add [package-name]`       | 向虚拟环境中添加一个包。             |
| `poetry add -D [package-name]`    | 向虚拟环境中添加一个开发包。         |
| `poetry remove [package-name]`    | 从虚拟环境中删除一个包。             |
| `poetry remove -D [package-name]` | 从虚拟环境中删除一个开发包。         |

在第二部分中，我们将：

- 将我们的虚拟环境添加到 [VSCode](https://code.visualstudio.com/)。
- 更新我们的依赖项。
- 将我们的开发依赖项与编辑器集成：
  - _Flake8_
  - _Black_
  - _Pytest_

在<router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">第三篇文章</router-link>中，我们将编写一个示例库，使用 _Poetry_ 构建我们的项目并将其发布到 _PyPI_ 上。

在开始之前，请确保您已安装 [VSCode](https://code.visualstudio.com/)，添加了 [Python](https://marketplace.visualstudio.com/itemdetails?itemName=ms-python.python) 扩展，并且已遵循并理解本系列的第一篇文章<router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">（第一篇文章）</router-link>。

## 在 VSCode 中设置 Poetry

距离第一部分已经过去几天了，检查依赖项的新版本是个好主意。打开终端，导航到项目目录中并输入 `poetry update` 命令：

![poetry update](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/update.png)

到目前为止，没有新的可用版本。

当您使用 _venv_ 命令创建虚拟环境时，_VSCode_ 会自动将其设置为该项目的默认 Python 环境。在使用 _Poetry_ 时，第一次我们需要在终端中，并在项目文件夹内输入以下内容：

```bash
poetry shell
code .
```

第一个命令 `poetry shell` 会将我们置于虚拟环境中，而 `code .` 会在 _VSCode_ 中打开当前文件夹。

![vscode](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/vscode.png)

使用左侧面板打开 **how-long** 文件夹（或带有项目名称的文件夹），并在 `__init__.py` 旁边创建一个 `how-long.py` 文件。在左下角，您将看到当前的 Python 环境：

![python version](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/python-code.png)

点击它，将显示可用环境的列表。选择名称中包含您的项目名称的环境：

![choose python](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/choose-environment.png)

现在，让我们将开发依赖项 _Flake8_、_Black_ 和 _Pytest_ 集成到 Visual Studio Code 中。

## Flake8

[Flake8](http://flake8.pycqa.org/en/latest/) 将为我们的项目提供 _linting_ 功能。换句话说，它会警告语法和样式错误，多亏了 VSCode，我们可以在输入时就知道它们。

默认情况下，Python 扩展自带 _Pylint_，它功能强大但配置复杂。要切换到 _Flake8_，请对任何 Python 文件进行更改并保存，右下角将显示一个弹出消息：

![flake8](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/select-linter.png)

点击 **Select Linter** 并从列表中选择 **Flake8**。现在，_VSCode_ 会告诉我们 _语法_ 和 _样式_ 问题，根据严重程度以绿色或红色显示，并始终附带有关错误内容的详细说明：

![linting](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/linting.png)

看起来我们有两个问题：我们缺少文件末尾的一个空行（样式）并且忘记给我们的 _Hello, World!_ 字符串添加引号（语法）。修复它们，然后查看所有警告消失。

## Black

[Black](https://github.com/ambv/black) 是一个代码格式化工具，它会查看我们的代码并根据 [PEP 8](https://www.python.org/dev/peps/pep-0008/) 样式指南自动格式化代码，_Flake8_ 用来检查我们的样式错误所遵循的 _PEP_ 也是同一个。

按住 `shift + cmd/ctrl + p` 打开命令面板，输入 **Format Document**，然后按回车键。将出现一个新的弹出消息：

![black formatter popup](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/format-popup.png)

选择 **Use Black**。现在将这段格式不佳的代码复制到您的 python 文件中：

```python
for i in range(5):         # this comment has too many spaces
      print(i)  # this line has 6 space indentation.
```

多么丑陋的 s\*\*\*... 代码。再次尝试格式化，看看 _Black_ 如何为您修复所有问题！

我们还可以做的另一件事是配置 VSCode，以便每次保存时，_Black_ 都会自动格式化我们的代码。按住 `cmd/ctrl + ,` 打开设置。确保您位于 **Workspace Settings** 中，搜索 **Format On Save** 并激活复选框：

![format on save](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/format-on-save.png)

最后，_Black_ 默认每行 88 个字符，与 _Flake8_ 允许的 80 个字符不同，因此为避免冲突，请打开 **.vscode** 文件夹并在 **settings.json** 文件的末尾添加以下内容：

```json
{
    ...
    "python.linting.flake8Args": [
        "--max-line-length=88"
    ],
}
```

![black-settings](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/black-settings.png)

## Pytest

如果您是认真的程序员，学习如何测试您的项目至关重要。这是一项非常有用的技能，它允许您通过减少发布后出现灾难性错误的可能来自信地编写和交付程序。

[Pytest](https://docs.pytest.org/en/latest/) 是一个非常流行且用户友好的测试框架。我们[已经安装了它](https://www.pythoncheatsheet.org/blog/python-projects-with-poetry-and-vscode-part-1#Dependency-Management)，所以我们也将它与 _VSCode_ 集成。

打开 **tests** 文件夹并选择 `test_how_long.py` 文件。_Poetry_ 已经为我们提供了第一个测试：

```python
# test_how_long.py
from how_long import __version__


def test_version():
    assert __version__ == '0.1.0'
```

在此测试中，我们从 **how_long** 文件夹中 \***\*init**.py** 文件导入 `__version__` 变量，并断言当前版本是 _0.1.0_。通过转到 **Terminal > New Terminal\*\* 打开集成终端并输入：

```bash
pytest
```

输出将如下所示：

![pytest](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/pytest-terminal.png)

好的，一切正常。使用 `shift + cmd/ctrl + p` 打开命令面板：

- 输入 **unit** 并选择 **Python: Configure Unit Tests**。
- 选择 **pytest**。
- 选择保存测试的目录，在我们的例子中是 **tests**。

发生了三件事：

- 状态栏出现了一个新按钮：**Run Tests**。这等同于在终端中输入 _pytest_。按下它并选择 **Run All Unit Tests**。完成后，它将告知您通过的测试数量以及未通过的测试：

  ![test status bar](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img.png)

- 左侧栏出现一个新图标。如果单击它，将出现一个显示所有测试的面板。在这里，您可以单独运行每个测试：

  ![test side panel](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/test-side-panel.png)

- 在测试文件内部，将在每个测试函数前显示新选项：如果测试通过，将出现一个对勾图标，否则出现一个 _x_。它还允许您运行特定的测试：

  ![test inline](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/test-inline.png)

## 结论

到目前为止，我们已经：

- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">启动了一个新项目</router-link>，创建了一个虚拟环境，并添加、删除了和更新了依赖项。
- 将我们的 [虚拟环境添加到 VSCode](#setting-up-poetry-on-vscode)，[配置 _Flake8_](#flake8) 以在键入时 _检查_ 我们的代码，选择 [_Black_](#black) 作为格式化程序，并 [包含 _Pytest_](#pytest) 以在视觉上运行我们的测试。

最后，在<router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">第三篇，也是最后一篇文章</router-link>中，我们将：

- 编写一个示例库。
- 使用 _Poetry_ 构建我们的项目。
- 将其发布到 _PyPI_。
