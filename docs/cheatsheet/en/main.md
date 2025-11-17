---
title: Python Main function - Python Cheatsheet
description: is the name of the scope in which top-level code executes. A module's name is set equal to main when read from standard input, a script, or from an interactive prompt.
labUrl: https://labex.io/labs/python-python-main-function-633661?course=python-cheatsheet
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Main top-level script environment
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

## What is it

`__main__` is the name of the scope in which top-level code executes.
A module’s **name** is set equal to `__main__` when read from standard input, a script, or from an interactive prompt.

A module can discover whether it is running in the main scope by checking its own `__name__`, which allows a common idiom for conditionally executing code in a module. When it is run as a script or with `python -m` but not when it is imported:

```python
# __name__ == "__main__": check if script is run directly (not imported)
if __name__ == "__main__":  # True when run as script, False when imported
    # execute only if run as a script
    main()
```

For a package, the same effect can be achieved by including a **main**.py module, the contents of which will be executed when the module is run with -m.

For example, we are developing a script designed to be used as a module, we should do:

```python
# Example: function can be imported, but test code only runs when executed directly
def add(a, b):
    return a+b

if __name__ == "__main__":  # Only runs when file is executed, not when imported
    add(3, 5)
```

## Advantages

1. Every Python module has it’s `__name__` defined and if this is `__main__`, it implies that the module is run standalone by the user, and we can do corresponding appropriate actions.
2. If you import this script as a module in another script, the **name** is set to the name of the script/module.
3. Python files can act as either reusable modules, or as standalone programs.
4. `if __name__ == "__main__":` is used to execute some code only if the file is run directly, and is not being imported.

## Relevant links

- <router-link to="/cheatsheet/functions">Functions</router-link>
- <router-link to="/cheatsheet/setup-py">setup.py</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">Python projects with Poetry and VSCode. Part 1</router-link>
- <router-link to="/builtin/import">import()</router-link>
