---
title: Python breakpoint() built-in function - Python Cheatsheet
description: This function drops you into the debugger at the call site. Specifically, it calls sys.breakpointhook(), passing args and kws straight through. By default, sys.breakpointhook() calls pdb.set_trace() expecting no arguments. In this case, it is purely a convenience function so you don’t have to explicitly import pdb or type as much code to enter the debugger. However, sys.breakpointhook() can be set to some other function and breakpoint() will automatically call that, allowing you to drop into the debugger of choice.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python breakpoint() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#breakpoint">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    This function drops you into the debugger at the call site [...].
    <br/>
    Python breakpoint() calls Python debugger at a given line
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `breakpoint()` function in Python, introduced in Python 3.7, provides an easy way to enter the Python debugger (`pdb`) at a specific point in your code. It's a convenient alternative to manually importing `pdb` and calling `pdb.set_trace()`. This function simplifies the debugging process, allowing you to inspect variables and step through your code interactively.

## Example

Here's how you can use `breakpoint()` to pause execution and inspect variables:

```python
def calculate_sum(a, b):
    result = a + b
    # We want to inspect the 'result' before returning
    breakpoint()
    return result

# When you run this, the debugger will start right after 'result' is calculated
# You can then type 'result' in the (Pdb) prompt to see its value
# To continue execution, type 'c' or 'continue'
final_sum = calculate_sum(10, 20)
print(final_sum)
```

```output
(Pdb) result
30
(Pdb) c
30
```

## Relevant links

- <router-link to="/cheatsheet/debugging">Cheatsheet: Debugging</router-link>
- <router-link to="/cheatsheet/control-flow">Cheatsheet: Control Flow</router-link>
- <router-link to="/builtin/print">print()</router-link>
- <router-link to="/builtin/input">input()</router-link>
- <router-link to="/builtin/eval">eval()</router-link>
- <router-link to="/builtin/exec">exec()</router-link>
- <router-link to="/builtin/globals">globals()</router-link>
- <router-link to="/builtin/locals">locals()</router-link>
