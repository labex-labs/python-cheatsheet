---
title: Python Context Manager - Python Cheatsheet
description: While Python's context managers are widely used, few understand the purpose behind their use. These statements, commonly used with reading and writing files, assist the application in conserving system memory and improve resource management by ensuring specific resources are only in use for certain processes.
labUrl: https://labex.io/labs/python-python-context-manager-633650?course=python-cheatsheet
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Context Manager
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

While Python's context managers are widely used, few understand the purpose behind their use. These statements, commonly used with reading and writing files, assist the application in conserving system memory and improve resource management by ensuring specific resources are only in use for certain processes.

## The with statement

A context manager is an object that is notified when a context (a block of code) starts and ends. You commonly use one with the `with` statement. It takes care of the notifying.

For example, file objects are context managers. When a context ends, the file object is closed automatically:

```python
# Context manager: automatically handles resource cleanup
# File is automatically closed when exiting the 'with' block
with open(filename) as f:  # 'f' is the file object
    file_contents = f.read()

# File is automatically closed here, even if an error occurred
```

Anything that ends execution of the block causes the context manager's exit method to be called. This includes exceptions, and can be useful when an error causes you to prematurely exit an open file or connection. Exiting a script without properly closing files/connections is a bad idea, that may cause data loss or other problems. By using a context manager, you can ensure that precautions are always taken to prevent damage or loss in this way.

## Writing your own context manager

It is also possible to write a context manager using generator syntax thanks to the `contextlib.contextmanager` decorator:

```python
# Function-based context manager using contextlib decorator
import contextlib
@contextlib.contextmanager
def context_manager(num):
    print('Enter')  # Code before yield runs on __enter__
    yield num + 1   # Value yielded becomes 'cm' variable
    print('Exit')    # Code after yield runs on __exit__

with context_manager(2) as cm:  # cm receives the yielded value (3)
    print('Right in the middle with cm = {}'.format(cm))
```

```output
Enter
Right in the middle with cm = 3
Exit
```

## Class based context manager

You can define class based context manager. The key methods are `__enter__` and `__exit__`

```python
# Class-based context manager: implement __enter__ and __exit__ methods
class ContextManager:
    def __enter__(self, *args, **kwargs):  # Called when entering 'with' block
        print("--enter--")
        return self  # Can return object to use as 'as' variable

    def __exit__(self, *args):  # Called when exiting 'with' block
        print("--exit--")

with ContextManager():  # Calls __enter__, then __exit__ when done
    print("test")
```

```output
--enter--
test
--exit--
```

## Relevant links

- <router-link to="/cheatsheet/reading-and-writing-files">Reading and Writing Files</router-link>
- <router-link to="/cheatsheet/exception-handling">Exception Handling</router-link>
- <router-link to="/cheatsheet/decorators">Decorators</router-link>
- <router-link to="/blog/python-pathlib-essentials">10 Essential File System Operations Every Developer Should Know</router-link>
- <router-link to="/builtin/open">open()</router-link>
