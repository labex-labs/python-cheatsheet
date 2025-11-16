---
title: Python __import__() built-in function - Python Cheatsheet
description: This function is invoked by the import statement. It can be replaced [...] in order to change semantics of the import statement, but doing so is strongly discouraged as it is usually simpler to use import hooks [...]. Direct use of __import__() is also discouraged in favor of importlib.import_module().
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python `__import__` built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#import__">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    This function is invoked by the import statement. It can be replaced [...] in order to change semantics of the import statement, but doing so is strongly discouraged as it is usually simpler to use import hooks [...]. Direct use of __import__() is also discouraged in favor of importlib.import_module().
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `__import__()` function is the underlying function that is called by the `import` statement. While it's possible to use it directly, it's generally discouraged. For dynamically importing modules, the `importlib.import_module()` function is the recommended approach.

### Example

Here's how you could use `__import__()` to dynamically import the `math` module:

```python
# Dynamically import the 'math' module
math_module = __import__('math')

# Now you can use it like a regular import
print(math_module.sqrt(4))
```

Output:

```plaintext
2.0
```

However, the recommended way using `importlib` is:

```python
import importlib

math_module = importlib.import_module('math')
print(math_module.sqrt(4))
```

Output:

```plaintext
2.0
```

## Relevant links

- <router-link :to="'/modules/importlib'">importlib module</router-link>
- <router-link :to="'/cheatsheet/setup-py'">setup.py</router-link>
- <router-link :to="'/blog/python-projects-with-poetry-and-vscode-part-1'">Python Projects with Poetry and VS Code (Part 1)</router-link>
- <router-link :to="'/builtin/globals'">globals()</router-link>
- <router-link :to="'/builtin/locals'">locals()</router-link>
