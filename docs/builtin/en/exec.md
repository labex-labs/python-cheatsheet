---
title: Python exec() built-in function - Python Cheatsheet
description: This function supports dynamic execution of Python code. object must be either a string or a code object. If it is a string, the string is parsed as a suite of Python statements which is then executed (unless a syntax error occurs) [...].
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python exec() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#exec">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   This function supports dynamic execution of Python code. object must be either a string or a code object. If it is a string, the string is parsed as a suite of Python statements which is then executed (unless a syntax error occurs) [...].
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `exec()` function in Python is a built-in function that allows you to dynamically execute Python code stored in a string. This can be very powerful for scenarios where you want to execute code provided by users, generate and run code at runtime, or even build mini interpreters or scripting environments within your application. However, it should be used with caution as it can potentially introduce security risks if not handled properly.

## Syntax

```python
exec(object[, globals[, locals]])
```

- `object`: The string containing the Python code to be executed.
- `globals` (optional): A dictionary representing the global namespace. If not provided, it uses the current global namespace.
- `locals` (optional): A dictionary representing the local namespace. If not provided, it uses the current local namespace.

## Basic Usage

```python
code_to_execute = "print('Hello, exec()!')"
exec(code_to_execute)
```

```output
Hello, exec()!
```

The `exec()` function can also be used with the <router-link to="/builtin/print">print()</router-link> function to display output to the console.

## Executing Multiple Statements

```python
code = """
for i in range(5):
    print(i)
"""
exec(code)
```

```output
0
1
2
3
4
```

In this example, the `exec()` function is used to execute a for loop that iterates over a <router-link to="/builtin/range">range</router-link> of numbers and <router-link to="/builtin/print">prints</router-link> each number to the console.

## Modifying Variables

```python
x = 10
code = "x += 5"
exec(code)
print(x)
```

```output
15
```

## Using `globals` and `locals`

```python
x = 5
code = "x = x * 2"
globals_dict = {"x": 10}
locals_dict = {"x": 20}
exec(code, globals_dict, locals_dict)
print(x)
print(globals_dict)
print(locals_dict)
```

```output
5
{'x': 10}
{'x': 40}
```

## Dynamic Function Creation

```python
def create_dynamic_function(name, args):
    code = f"def {name}({', '.join(args)}): return sum({args})"
    exec(code)

create_dynamic_function("add_numbers", ["a", "b", "c"])
result = add_numbers(2, 3, 5)
print(result)
```

```output
10
```

In this example, the `exec()` function is used to create a dynamic function that takes a list of arguments and returns their <router-link to="/builtin/sum">sum</router-link>.

## Error Handling

```python
code = """
try:
    print(undefined_variable)
except NameError as e:
    print(f"Error: {e}")
"""
exec(code)
```

```output
Error: name 'undefined_variable' is not defined
```

## Security Note

```python
user_input = input("Enter code to execute: ")
exec(user_input)  # Caution: This can be a security risk if not properly sanitized.
```

## Relevant links

- <router-link :to="'/builtin/compile'">`compile()`</router-link>
- <router-link :to="'/builtin/eval'">`eval()`</router-link>
- <router-link :to="'/builtin/globals'">`globals()`</router-link>
- <router-link :to="'/builtin/locals'">`locals()`</router-link>
- <router-link :to="'/cheatsheet/exception-handling'">Exception Handling</router-link>
- <router-link :to="'/cheatsheet/debugging'">Debugging</router-link>
