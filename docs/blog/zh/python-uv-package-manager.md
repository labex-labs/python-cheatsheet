---
title: 'UV：闪电般快速的 Python 包管理器'
description: 'UV 是一个用 Rust 编写的 Python 包管理器，它彻底改变了开发人员管理其 Python 环境和依赖项的方式。'
date: 'Jun 08, 2025'
updated: 'Jun 08, 2025'
tags: 'python, intermediate, packaging'
socialImage: '/blog/python-uv-package-manager.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "UV：闪电般快速的 Python 包管理器"
    description: "UV 是一个用 Rust 编写的 Python 包管理器，它彻底改变了开发人员管理其 Python 环境和依赖项的方式。"
    date: "Jun 08, 2025"
    updated: "Jun 08, 2025"
    tags: "python, intermediate, packaging"
    socialImage: "/blog/python-uv-package-manager.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="UV：闪电般快速的 Python 包管理器" />

在 Python 生态系统中，包管理长期以来一直是开发人员的痛点。像 <router-link to="/cheatsheet/virtual-environments">pip</router-link>、<router-link to="/cheatsheet/virtual-environments#virtualenv">virtualenv</router-link> 和 pip-tools 这样的传统工具可以完成工作，但通常存在令人沮丧的性能限制和工作流程复杂性。UV（发音为“you-vee”）应运而生，它是一个用 Rust 编写的革命性 Python 包管理器，正在改变开发人员管理其 Python 环境和依赖项的方式。

## 什么是 UV？

UV 是一个极其快速的 Python 包安装器和解析器，旨在作为 pip 和 pip-tools 工作流程的直接替代品。UV 由 Astral（流行的 Python linter Ruff 背后的团队）开发，代表了利用 Rust 的性能优势以提供前所未有的速度提升的新一代 Python 工具。

从核心上讲，UV 是一个一体化的解决方案，它结合了多个 Python 工具的功能：

- 包安装和依赖项解析（替代 pip）
- <router-link to="/cheatsheet/virtual-environments">虚拟环境</router-link>管理（替代 <router-link to="/cheatsheet/virtual-environments#virtualenv">virtualenv</router-link>）
- 依赖项锁定（替代 pip-tools）
- Python 版本管理（替代 pyenv）
- 命令行工具隔离（替代 pipx）
- 项目脚手架和初始化

  这种统一的方法简化了 Python 开发体验，同时带来了卓越的性能提升。

## UV 为什么脱颖而出：改变一切的性能

  <base-disclaimer>
  <base-disclaimer-title> UV 性能 </base-disclaimer-title>
  <base-disclaimer-content>
  UV 与传统 Python 包管理器之间最直接的明显区别是速度。基准测试显示，UV 的性能：
  <ul>
  <li>在没有缓存的情况下比 pip 快 8-10 倍</li>
  <li>在缓存预热后比 pip 快 80-115 倍</li>
  </ul>
  </base-disclaimer-content>
  </base-disclaimer>

这种显著的性能提升源于几个关键的架构决策：

1. **并行包下载和安装**：UV 同时处理多个包，显著减少等待时间。
2. **全局模块缓存**：UV 通过维护一个中央缓存，并利用支持的文件系统上的 Copy-on-Write 和硬链接来最大限度地减少磁盘空间使用，从而避免重新下载和重新构建依赖项。
3. **优化的元数据处理**：在确定要下载哪些包时，pip 会下载整个 Python wheel 以访问元数据，而 UV 只查询 wheel 的索引并使用文件偏移量仅下载元数据文件。
4. **原生实现**：作为一个编译后的 Rust 应用程序，UV 执行操作的速度比基于 Python 的工具快得多。

这些优化带来了切实的现实世界效益。例如，Streamlit（一个流行的开源应用框架）在切换到 UV 后，平均依赖项安装时间从 60 秒下降到 20 秒。

## 开始使用 UV

### 安装

UV 可以通过多种方法安装，使其对不同平台的开发人员都易于使用：

```bash
# 使用 curl (Linux/macOS)
$ curl -LsSf https://astral.sh/uv/install.sh | sh

# 使用 PowerShell (Windows)
$ powershell -c "irm https://astral.sh/uv/install.ps1 | iex"

# 使用 pip 或 pipx
$ pip install uv
$ pipx install uv

# 使用 Homebrew (macOS)
$ brew install uv
```

### 基本命令

UV 提供了一套全面的命令，涵盖了整个 Python 开发工作流程：

#### 包管理

```bash
# 安装包
$ uv pip install requests

# 从 requirements 文件安装
$ uv pip install -r requirements.txt

# 列出已安装的包
$ uv pip list
```

#### 项目管理

```bash
# 创建一个新项目
$ uv init my_project

# 添加依赖项
$ uv add requests

# 创建/更新锁定文件
$ uv lock

# 将依赖项与环境同步
$ uv sync

# 在项目环境中运行命令
$ uv run python script.py
```

#### Python 版本管理

```bash
# 安装 Python 版本
$ uv python install 3.12

# 列出可用的 Python 版本
$ uv python list

# 将项目固定到特定的 Python 版本
$ uv python pin 3.12
```

#### 工具管理

```bash
# 在不安装的情况下运行工具
$ uvx ruff check

# 全局安装工具
$ uv tool install ruff
```

## 使用 UV 的真实世界工作流程

让我们探讨一下 UV 如何简化常见的 Python 开发工作流程：

### 开始一个新项目

```bash
# 初始化一个新项目
$ uv init example

# 导航到项目目录
$ cd example

# 添加依赖项
$ uv add ruff

# 在项目环境中运行命令
$ uv run ruff check
```

当您运行这些命令时，UV 会自动：

1. 创建一个 <router-link to="/cheatsheet/virtual-environments">虚拟环境</router-link> (.venv)
2. 生成一个 pyproject.toml 文件
3. 安装依赖项
4. 创建一个锁定文件以确保可重现性

### 管理带有内联依赖项的脚本

UV 可以管理单文件脚本的依赖项，这些脚本具有内联元数据：

```bash
# 创建一个带有简单 HTTP 请求的脚本
$ echo 'import requests; print(requests.get("https://astral.sh"))' > example.py

# 将依赖项元数据添加到脚本中
$ uv add --script example.py requests

# 在隔离的环境中运行脚本
$ uv run example.py
```

这种方法消除了对单独的 requirements 文件或 <router-link to="/cheatsheet/virtual-environments">虚拟环境</router-link>设置的需求，以用于简单脚本。

## UV 与传统 Python 包管理器

### UV 与 pip 和 virtualenv

虽然 <router-link to="/cheatsheet/virtual-environments">pip</router-link> 和 <router-link to="/cheatsheet/virtual-environments#virtualenv">virtualenv</router-link> 一直是 Python 包管理的传统工具，但 UV 提供了几个引人注目的优势：

- **速度**：UV 的 Rust 实现使其在包安装和依赖项解析方面明显快于 pip。
- **集成环境管理**：虽然 virtualenv 只处理环境创建，pip 只处理包管理，但 UV 将这两种功能结合在一个工具中。
- **内存使用**：UV 在包安装和依赖项解析期间使用的内存明显更少。
- **错误处理**：当依赖项冲突时，UV 提供更清晰的错误消息和更好的冲突解决。
- **可重现性**：UV 的锁定文件方法确保了不同系统之间环境的一致性。

### UV 与 Poetry

<router-link to="/cheatsheet/virtual-environments#poetry">Poetry</router-link> 作为一个全面的 Python 项目管理器获得了普及，但 UV 提供了一些独特的优势：

- **安装简单性**：UV 可以作为独立二进制文件安装，无需 Python 或 pipx。
- **性能**：UV 的依赖项解析和安装速度明显快于 <router-link to="/cheatsheet/virtual-environments#poetry">Poetry</router-link>。
- **Python 版本管理**：UV 可以自动下载并使用项目的正确 Python 版本，而无需像 pyenv 这样的单独工具。
- **简化的工作流程**：UV 的 `run` 命令会自动确保依赖项已同步，无需单独的安装命令。

然而，<router-link to="/cheatsheet/virtual-environments#poetry">Poetry</router-link> 在依赖项组支持方面更为成熟，UV 仅在 0.4.7 版本中添加了此功能。

## 企业采用和最佳实践

随着 UV 的成熟，组织越来越多地将其用于生产用途。以下是在企业环境中实施 UV 的最佳实践：

### 推荐的工作流程

1. **对于应用程序开发**：使用 UV 的项目管理功能，结合 pyproject.toml 和锁定文件，以确保可重现的构建。
2. **对于库开发**：利用 UV 对可编辑安装和依赖项源的支持，以简化本地开发。
3. **对于 CI/CD 流水线**：使用 UV 的缓存功能来加速构建并确保不同阶段之间环境的一致性。
4. **对于容器化部署**：使用 `--compile-bytecode` 启用字节码编译，以提高生产容器的启动时间。

### 潜在挑战

虽然 UV 提供了显著的优势，但在企业采用方面需要考虑一些因素：

1. **索引策略差异**：UV 默认使用 `--extra-index-url` 的行为与 pip 不同，这可能会影响使用私有包索引的工作流程。
2. **字节码编译**：与 pip 不同，UV 默认情况下不会在安装过程中将 .py 文件编译为 .pyc 文件，这可能会影响生产环境中的启动时间。
3. **严格性和规范执行**：UV 通常比 pip 更严格，可能会拒绝 pip 会安装的包，从而需要更新不合规的包。

## UV 的未来

UV 代表了 Python 包管理的一个重大进步，对未来有着宏伟的计划：

1. **完整的 Python 项目管理**：该团队的目标是将 UV 开发成为“Python 的 Cargo”——一个处理 Python 开发所有方面的全面工具。
2. **增强的工作区支持**：改进对多包存储库和复杂项目结构的处理。
3. **扩展的平台支持**：持续完善跨平台兼容性和性能。
4. **与 Astral 其他工具的集成**：与 Ruff 等工具进行更深入的集成，以提供统一的 Python 开发体验。

## 结论

UV 代表了 Python 包管理的一个重大飞跃，为传统工具提供了一个现代、快速且高效的替代方案。其主要优势包括：

- 闪电般的速度，比 pip 快 10-100 倍的性能提升
- 与现有 Python 打包标准的无缝集成
- 内置的 <router-link to="/cheatsheet/virtual-environments">虚拟环境</router-link>和 Python 版本管理
- 高效的依赖项解析和锁定文件支持
- 低内存占用和资源使用

无论您是开始一个新项目还是迁移现有项目，UV 都提供了一个强大的解决方案，可以显著改善您的 Python 开发工作流程。它与现有工具的兼容性使其成为寻求现代化工具链而又不中断当前流程的开发人员的轻松选择。

随着 Python 生态系统的不断发展，像 UV 这样的工具展示了现代技术（如 Rust）如何增强开发体验，同时保持 Python 开发人员所珍视的简单性和可访问性。

像 UV 包管理器这样的 Python 工具可以显著增强您的开发工作流程。对 Python 开发人员的需求持续增长，尤其是在灵活和远程职位中——请考虑[探索全球在家工作](https://jooble.org/jobs-worldwide-work-at-home)的行业机会。
