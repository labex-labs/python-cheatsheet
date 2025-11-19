---
title: Python Exception Handling - Python Cheatsheet
description: In Python, exception handling is the process of responding to the occurrence of exceptions.
labUrl: https://labex.io/labs/python-python-exception-handling-633656?course=python-cheatsheet
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Exception Handling
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://en.wikipedia.org/wiki/Exception_handling">Exception handling</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    In computing and computer programming, exception handling is the process of responding to the occurrence of exceptions – anomalous or exceptional conditions requiring special processing.
  </base-disclaimer-content>
</base-disclaimer>

Python has many [built-in exceptions](https://docs.python.org/3/library/exceptions.html) that are raised when a program encounters an error, and most external libraries, like the popular [Requests](https://requests.readthedocs.io/en/latest), include his own [custom exceptions](https://requests.readthedocs.io/en/latest/user/quickstart/#errors-and-exceptions) that we will need to deal to.

## Basic exception handling

You can't divide by zero, that is a mathematical true, and if you try to do it in Python, the interpreter will raise the built-in exception [ZeroDivisionError](https://docs.python.org/3/library/exceptions.html#ZeroDivisionError):

```python
def divide(dividend , divisor):
    print(dividend / divisor)

divide(dividend=10, divisor=5)
```

```output
2
```

```python
divide(dividend=10, divisor=0)
```

```output
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ZeroDivisionError: division by zero
```

Let's say we don't want our program to stop its execution or show the user an output he will not understand. Say we want to print a useful and clear message, then we need to **_handle_** the exception with the `try` and `except` keywords:

```python
# try-except: handle exceptions gracefully
def divide(dividend , divisor):
    try:  # Try to execute this code
        print(dividend / divisor)
    except ZeroDivisionError:  # Catch specific exception type
        print('You can not divide by 0')

divide(dividend=10, divisor=5)
```

```output
2
```

```python
divide(dividend=10, divisor=0)
```

```output
You can not divide by 0
```

## Handling Multiple exceptions using one exception block

You can also handle multiple exceptions in one line like the following without the need to create multiple exception blocks.

```python
# Handle multiple exceptions in one except block
def divide(dividend , divisor):
    try:
        if (dividend == 10):
          var = 'str' + 1  # This will raise TypeError
        else:
          print(dividend / divisor)
    except (ZeroDivisionError, TypeError) as error:  # Catch multiple exception types
        print(error)  # Print the error message

divide(dividend=20, divisor=5)
```

```output
4
```

```python
divide(dividend=10, divisor=5)
```

```output
can only concatenate str (not "int") to str
```

```python
divide(dividend=10, divisor=0)
```

```output
division by zero
```

## Finally code in exception handling

The code inside the `finally` section is always executed, no matter if an exception has been raised or not:

```python
# finally block: always executes regardless of exceptions
def divide(dividend , divisor):
    try:
        print(dividend / divisor)
    except ZeroDivisionError:
        print('You can not divide by 0')
    finally:  # Always executes, even if exception occurs
        print('Execution finished')

divide(dividend=10, divisor=5)
```

```output
2.0
Execution finished
```

```python
divide(dividend=10, divisor=0)
```

```output
You can not divide by 0
Execution finished
```

## Custom Exceptions

Custom exceptions initialize by creating a `class` that inherits from the base `Exception` class of Python, and are raised using the `raise` keyword:

```python
# Custom exception: create by inheriting from Exception class
class MyCustomException(Exception):
    pass

raise MyCustomException  # Raise the custom exception
```

```output
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
__main__.MyCustomException
```

To declare a custom exception message, you can pass it as a parameter:

```python
class MyCustomException(Exception):
    pass

raise MyCustomException('A custom message for my custom exception')
```

```output
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
__main__.MyCustomException: A custom message for my custom exception
```

Handling a custom exception is the same as any other:

```python
try:
    raise MyCustomException('A custom message for my custom exception')
except MyCustomException:
    print('My custom exception was raised')
```

```output
My custom exception was raised
```

## Relevant links

- <router-link to="/cheatsheet/control-flow">Control Flow</router-link>
- <router-link to="/builtin/breakpoint">breakpoint()</router-link>
- <router-link to="/builtin/isinstance">isinstance()</router-link>
- <router-link to="/builtin/issubclass">issubclass()</router-link>
