---
title: Python callable() built-in function - Python Cheatsheet
description: Return True if the object argument appears callable, False if not. If this returns True, it is still possible that a call fails, but if it is False, calling object will never succeed. Note that classes are callable (calling a class returns a new instance); instances are callable if their class has a __call__() method.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python callable() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#callable">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Return True if the object argument appears callable, False if not. If this returns True, it is still possible that a call fails, but if it is False, calling object will never succeed. Note that classes are callable (calling a class returns a new instance); instances are callable if their class has a __call__() method.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

In Python, the `callable()` function is a built-in function that can be used to determine if an object is callable, meaning it can be invoked as a function.

It returns `True` if the object passed to it is callable and `False` otherwise. For example, a function, a method, a class, a lambda function, and a generator are all callable objects in Python.

Here is an example of how you can use the `callable()` function:

```python
def my_function():
    pass

class MyClass:
    def __call__(self):
        pass

x = 5
y = my_function
z = MyClass()
a = lambda: None

print(callable(x))
print(callable(y))
print(callable(z))
print(callable(a))
```

```output
False
True
True
True
```

In the above example, `my_function` is a function and it is callable, `MyClass` is a class and it is callable as well because it has a `__call__` method, `z` is an instance of the class `MyClass` and it is also callable because it has a `__call__` method and `a` is a lambda function which is callable.

The `callable()` function can be useful in situations where you need to determine if an object can be invoked as a function, such as when you are working with callbacks or other types of function pointers.

## Relevant links

- <router-link :to="'/builtin/hasattr'">hasattr()</router-link>
- <router-link :to="'/cheatsheet/functions'">Functions</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP Basics</router-link>
- <router-link :to="'/builtin/getattr'">getattr()</router-link>
- <router-link :to="'/builtin/isinstance'">isinstance()</router-link>
