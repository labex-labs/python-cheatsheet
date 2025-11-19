---
title: Python compile() built-in function - Python Cheatsheet
description: Compile the source into a code or AST object. Code objects can be executed by exec() or eval(). source can either be a normal string, a byte string, or an AST object. Refer to the ast module documentation for information on how to work with AST objects.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python compile() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#compile">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Compile the source into a code or AST object. Code objects can be executed by <router-link to="/builtin/exec">exec()</router-link> or <router-link to="/builtin/eval">eval()</router-link>. source can either be a normal string, a byte string, or an AST object. Refer to the ast module documentation for information on how to work with AST objects.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `compile()` function in Python is a built-in function that is used to convert a string or an Abstract Syntax Tree (AST) object into a code object. This code object can then be executed by functions like <router-link to="/builtin/exec">exec()</router-link> or <router-link to="/builtin/eval">eval()</router-link>.

## Example

Here's a basic example of how it works:

```python
code_string = """
def hello_world():
    print('Hello, world!')

hello_world()
"""

# Compile the string into a code object
# The mode 'exec' is used for a sequence of statements.
# The mode 'eval' is for a single expression.
# The mode 'single' is for a single interactive statement.
code_object = compile(code_string, '<string>', 'exec')

# Execute the code object
exec(code_object)
```

```output
Hello, world!
```

## Relevant links

- <router-link to="/cheatsheet/debugging">Cheatsheet: Debugging</router-link>
- <router-link to="/builtin/exec">exec()</router-link>
- <router-link to="/builtin/eval">eval()</router-link>
- <router-link to="/builtin/breakpoint">breakpoint()</router-link>
