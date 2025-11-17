---
title: 'Python 内置函数__import__() - Python 速查表'
description: '此函数由 import 语句调用。它可以被替换[...]以更改 import 语句的语义，但不推荐这样做，因为使用 import 钩子通常更简单[...]。也不推荐直接使用__import__()，建议使用 importlib.import_module()。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 内置函数 `__import__`
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#import__">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    此函数由 import 语句调用。它可以被替换 [...] 以更改 import 语句的语义，但这强烈不被推荐，因为通常使用 import hooks [...] 更简单。直接使用 __import__() 也不被推荐，应优先使用 importlib.import_module()。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

`__import__()` 函数是 `import` 语句调用的底层函数。虽然可以直接使用它，但这通常是不被推荐的。对于动态导入模块，推荐使用 `importlib.import_module()` 函数。

### 示例

以下是如何使用 `__import__()` 动态导入 `math` 模块的示例：

```python
# 动态导入 'math' 模块
math_module = __import__('math')

# 现在可以像使用常规导入一样使用它
print(math_module.sqrt(4))
```

输出：

```plaintext
2.0
```

然而，使用 `importlib` 的推荐方式是：

```python
import importlib

math_module = importlib.import_module('math')
print(math_module.sqrt(4))
```

输出：

```plaintext
2.0
```

## 相关链接

- <router-link :to="'/modules/importlib'">importlib 模块</router-link>
- <router-link :to="'/cheatsheet/setup-py'">setup.py</router-link>
- <router-link :to="'/blog/python-projects-with-poetry-and-vscode-part-1'">使用 Poetry 和 VS Code 的 Python 项目（第 1 部分）</router-link>
- <router-link :to="'/builtin/globals'">globals()</router-link>
- <router-link :to="'/builtin/locals'">locals()</router-link>
