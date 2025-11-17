---
title: 'Python Setup.py - Python 速查表'
description: 'setup 脚本是使用 Distutils 构建、分发和安装模块活动的核心。setup 脚本的主要目的是向 Distutils 描述您的模块分发，以便对模块执行的各种命令能正确操作。'
labUrl: 'https://labex.io/zh/labs/python-python-setup-py-633666?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python setup.py
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-warning>
  <base-warning-title>
    一个“有争议的”观点
  </base-warning-title>
  <base-warning-content>
    使用 `setup.py` 来打包和分发 Python 包有时会非常具有挑战性。像 <a target="_blank" href="https://python-poetry.org/">Poetry</a> 和 <a target="_blank" href="https://docs.astral.sh/uv/">UV</a> 这样的现代工具不仅使打包**容易得多**，而且还能以非常方便的方式帮助您管理依赖项。UV 因其比传统工具快 10-100 倍的速度而尤为值得注意。
  </base-warning-content>
</base-warning>

如果您想了解有关 Poetry 的更多信息，可以阅读以下文章：

- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">使用 Poetry 和 VSCode 的 Python 项目。第 1 部分</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">使用 Poetry 和 VSCode 的 Python 项目。第 2 部分</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">使用 Poetry 和 VSCode 的 Python 项目。第 3 部分</router-link>

有关闪电般快速的 Python 包管理器 UV 的全面指南，请阅读：<router-link to="/blog/python-uv-package-manager">UV：闪电般快速的 Python 包管理器</router-link>。

## 简介

设置脚本是使用 Distutils 构建、分发和安装模块的所有活动的中心。设置脚本的主要目的是向 Distutils 描述您的模块分发，以便对您的模块执行的各种命令能够正确操作。

有关处理文件和目录路径（这对于管理项目结构至关重要）的全面指南，请参阅<router-link to="/cheatsheet/file-directory-path">文件和目录路径</router-link>页面。

`setup.py` 文件是 Python 项目的核心。它描述了有关您项目的**所有元数据**。您可以向项目添加相当多的字段，以提供有关该项目的丰富元数据。然而，**只有三个必需的字段**：`name`（名称）、`version`（版本）和 `packages`（包）。如果希望将包发布到 Python 包索引 (PyPI)，则 `name` 字段必须是唯一的。`version` 字段用于跟踪项目的不同版本。包字段描述了您在项目中放置 Python 源代码的位置。

这使您可以轻松安装 Python 包。通常，编写以下内容就足够了：

```bash
python setup.py install
```

模块将自行安装。

## 示例

我们最初的 setup.py 还将包含有关许可证的信息，并将重用 README.txt 文件作为 `long_description` 字段。它看起来像这样：

```python
# setup.py: 为分发定义包元数据
from distutils.core import setup
setup(
   name='pythonCheatsheet',  # 包名称（在 PyPI 上必须唯一）
   version='0.1',  # 版本号
   packages=['pipenv',],  # 要包含的包列表
   license='MIT',  # 许可证类型
   long_description=open('README.txt').read(),  # 从文件读取描述
)
```

要了解更多信息，请访问[官方文档](http://docs.python.org/3.11/install/index.html)。

## 相关链接

- <router-link to="/cheatsheet/virtual-environments">虚拟环境</router-link>
- <router-link to="/cheatsheet/file-directory-path">文件和目录路径</router-link>
- <router-link to="/blog/python-uv-package-manager">UV：闪电般快速的 Python 包管理器</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">使用 Poetry 和 VSCode 的 Python 项目。第 1 部分</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">使用 Poetry 和 VSCode 的 Python 项目。第 2 部分</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">使用 Poetry 和 VSCode 的 Python 项目。第 3 部分</router-link>
- <router-link to="/builtin/import">import()</router-link>
