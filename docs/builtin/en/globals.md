---
title: Python globals() built-in function - Python Cheatsheet
description: Return the dictionary implementing the current module namespace. For code within functions, this is set when the function is defined and remains the same regardless of where the function is called.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python globals() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#globals">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Return the dictionary implementing the current module namespace. For code within functions, this is set when the function is defined and remains the same regardless of where the function is called.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `globals()` function in Python returns a dictionary representing the current global symbol table. This includes all global variables, functions, and other objects in the current scope.

It can be useful for inspecting the global namespace or for dynamically accessing global variables by their string names.

### Examples

```python
# Define a global variable
global_var = "I am global"

def my_function():
    # Access global variables using globals()
    global_dict = globals()
    print(global_dict["global_var"])

    # Modify a global variable
    global_dict["global_var"] = "Modified global"

my_function()
print(global_var)
```

```output
I am global
Modified global
```

You can also use `globals()` to create new global variables from within a function:

```python
def create_global():
    globals()["new_global"] = "This was created dynamically"

create_global()
print(new_global)
```

```output
This was created dynamically
```

## Relevant links

- <router-link :to="'/builtin/locals'">`locals()`</router-link>
- <router-link :to="'/builtin/dir'">`dir()`</router-link>
- <router-link :to="'/builtin/exec'">`exec()`</router-link>
- <router-link :to="'/builtin/eval'">`eval()`</router-link>
- <router-link :to="'/cheatsheet/functions'">Functions</router-link>
