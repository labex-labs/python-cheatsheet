---
title: 'Python JSON 和 YAML - Python 速查表'
description: 'JSON 代表 JavaScript Object Notation，是一种用于存储和传输数据的轻量级格式。当数据从服务器发送到网页时，通常会使用 JSON。'
labUrl: 'https://labex.io/zh/labs/python-python-json-and-yaml-633659?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
JSON 和 YAML
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

## JSON

JSON 代表 JavaScript Object Notation，是一种用于存储和传输数据的轻量级格式。当数据从服务器发送到网页时，通常使用 JSON。

```python
# 读取 JSON 文件：json.load() 从文件对象解析 JSON
import json
with open("filename.json", "r") as f:  # 以读取模式打开文件
    content = json.load(f)  # 解析 JSON 并返回 Python 字典/列表
```

写入包含以下内容的 JSON 文件：

```python
# 写入 JSON 文件：json.dump() 将 Python 对象写入 JSON
import json

content = {"name": "Joe", "age": 20}
with open("filename.json", "w") as f:  # 以写入模式打开文件
    json.dump(content, f, indent=2)  # 写入 JSON，缩进 2 个空格
```

## YAML

与 JSON 相比，YAML 具有更好的人类可维护性，并提供了添加注释的能力。对于需要人工编辑的配置文件来说，它是一个方便的选择。

有两种主要的库可以访问 YAML 文件：

- [PyYaml](https://pypi.python.org/pypi/PyYAML)
- [Ruamel.yaml](https://pypi.python.org/pypi/ruamel.yaml)

在虚拟环境中，使用 `pip install` 安装它们。

第一个更容易使用，但第二个 Ruamel 更好地实现了 YAML 规范，例如允许在不更改注释的情况下修改 YAML 内容。

使用以下方法打开 YAML 文件：

```python
# 使用 ruamel.yaml 库读取 YAML 文件
from ruamel.yaml import YAML

with open("filename.yaml") as f:
    yaml=YAML()  # 创建 YAML 解析器实例
    yaml.load(f)  # 解析 YAML 并返回 Python 字典/列表
```

## Anyconfig

[Anyconfig](https://pypi.python.org/pypi/anyconfig) 是一个非常方便的包，可以完全抽象底层配置文件格式。它允许从 JSON、YAML、TOML 等加载 Python 字典。

使用以下命令安装：

```bash
pip install anyconfig
```

用法：

```python
# anyconfig: 加载各种格式的配置文件 (JSON, YAML, TOML 等)
import anyconfig
conf1 = anyconfig.load("/path/to/foo/conf.d/a.yml")  # 自动检测格式
```

## 相关链接

- <router-link to="/cheatsheet/reading-and-writing-files">读写文件</router-link>
- <router-link to="/cheatsheet/dictionaries">Python 字典</router-link>
- <router-link to="/modules/json-module">json 模块</router-link>
- <router-link to="/blog/python-pathlib-essentials">每个开发者都应知道的 10 个基本文件系统操作</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
