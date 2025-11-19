---
title: Python eval() built-in function - Python Cheatsheet
description: The arguments are a string and optional globals and locals. If provided, globals must be a dictionary. If provided, locals can be any mapping object.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python eval() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#eval">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   The arguments are a string and optional globals and locals. If provided, globals must be a dictionary. If provided, locals can be any mapping object.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `eval()` function in Python is a built-in function that parses a string as a Python expression and evaluates it. It can be used to execute arbitrary Python code from a string, which can be both powerful and risky. It's often used in situations where you need to evaluate dynamically generated expressions, but it should be used with caution due to potential security vulnerabilities.

## Examples

```python
eval('1 + 4')
```

```output
5
```

```python
eval('print("Hello World!")')
```

```output
Hello World!
```

```python
x = 10
eval('x == 10')
```

```output
True
```

The `eval()` function can also be used with the <router-link to="/builtin/print">print()</router-link> function to display output to the console.

## Relevant links

- <router-link :to="'/builtin/compile'">`compile()`</router-link>
- <router-link :to="'/builtin/exec'">`exec()`</router-link>
- <router-link :to="'/builtin/globals'">`globals()`</router-link>
- <router-link :to="'/builtin/locals'">`locals()`</router-link>
- <router-link :to="'/cheatsheet/debugging'">Debugging</router-link>
