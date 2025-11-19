---
title: Python locals() built-in function - Python Cheatsheet
description: Update and return a dictionary representing the current local symbol table. Free variables are returned by locals() when it is called in function blocks, but not in class blocks. Note that at the module level, locals() and globals() are the same dictionary.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python locals() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#locals">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Update and return a dictionary representing the current local symbol table. Free variables are returned by locals() when it is called in function blocks, but not in class blocks. Note that at the module level, locals() and <router-link to="/builtin/globals">globals()</router-link> are the same dictionary.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `locals()` function returns a dictionary representing the current local symbol table. This includes all local variables, arguments, and other objects in the current scope.

It's a useful tool for inspecting the local namespace.

### Example

```python
def my_function(arg1, arg2):
    local_var = "I am local"
    print(locals())

my_function("hello", "world")
```

```output
{'arg1': 'hello', 'arg2': 'world', 'local_var': 'I am local'}
```

## Relevant links

- <router-link to="/cheatsheet/debugging">Cheatsheet: Debugging</router-link>
- <router-link to="/cheatsheet/functions">Cheatsheet: Functions</router-link>
- <router-link to="/cheatsheet/dictionaries">Cheatsheet: Dictionaries</router-link>
- <router-link to="/builtin/globals">globals()</router-link>
- <router-link to="/builtin/dir">dir()</router-link>
