---
title: Python Decorators - Python Cheatsheet
description: A Python Decorator is a syntax that provide a concise and reusable way for extending a function or a class.
labUrl: https://labex.io/labs/python-python-decorators-633654?course=python-cheatsheet
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Decorators
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

A Python Decorator provides a concise and reusable way for extending
a function or a class. Read the companion article <router-link to="/blog/python-decorators-for-beginners">Python Decorators: Simple Patterns to Level Up Your Code</router-link> for practical examples and patterns.

## Bare bone decorator

A decorator in its simplest form is a function that takes another
function as an argument and returns a wrapper. The following example
shows the creation of a decorator and its usage.

```python
# Decorator: a function that takes another function and returns a wrapper
def your_decorator(func):
  def wrapper():
    # Do stuff before func...
    print("Before func!")
    func()  # Call the original function
    # Do stuff after func...
    print("After func!")
  return wrapper  # Return the wrapper function

# @your_decorator is syntactic sugar for: foo = your_decorator(foo)
@your_decorator
def foo():
  print("Hello World!")

foo()  # Calls wrapper, which calls foo with extra behavior
```

Output:

```plaintext
Before func!
Hello World!
After func!
```

## Decorator for a function with parameters

```python
# Decorator that works with functions that have parameters
def your_decorator(func):
  def wrapper(*args,**kwargs):  # Accept any arguments
    # Do stuff before func...
    print("Before func!")
    func(*args,**kwargs)  # Pass arguments to original function
    # Do stuff after func...
    print("After func!")
  return wrapper

@your_decorator
def foo(bar):
  print("My name is " + bar)

foo("Jack")  # Arguments are passed through wrapper
```

Output:

```plaintext
Before func!
My name is Jack
After func!
```

## Template for a basic decorator

This template is useful for most decorator use-cases. It is valid for functions
with or without parameters, and with or without a return value.

```python
import functools

# Best practice decorator template: preserves function metadata and return value
def your_decorator(func):
  @functools.wraps(func)  # Preserves function name, docstring, etc.
  def wrapper(*args,**kwargs):
    # Do stuff before func...
    result = func(*args,**kwargs)  # Call function and capture return value
    # Do stuff after func..
    return result  # Return the original function's return value
  return wrapper
```

## Decorator with parameters

You can also define parameters for the decorator to use.

```python
import functools

# Decorator factory: returns a decorator based on parameters
def your_decorator(arg):
  def decorator(func):
    @functools.wraps(func)  # Preserve function metadata
    def wrapper(*args,**kwargs):
      # Do stuff before func possibly using arg...
      result = func(*args,**kwargs)
      # Do stuff after func possibly using arg...
      return result
    return wrapper
  return decorator  # Return the actual decorator function
```

To use this decorator:

```python
# Using decorator with parameters: @your_decorator(arg='x') calls your_decorator('x')
# which returns a decorator that is then applied to foo
@your_decorator(arg = 'x')
def foo(bar):
  return bar
```

## Class based decorators

To decorate a class method, you must define the decorator within the class. When
only the implicit argument `self` is passed to the method, without any explicit
additional arguments, you must make a separate decorator for only those methods
without any additional arguments. An example of this, shown below, is when you
want to catch and print exceptions in a certain way.

```python
# Class method decorator: defined within the class
class DecorateMyMethod:

  # Static method decorator for methods with only 'self' parameter
  def decorator_for_class_method_with_no_args(method):
    def wrapper_for_class_method(self):  # Only takes self
      try:
        return method(self)  # Call original method
      except Exception as e:
        print("\nWARNING: Please make note of the following:\n")
        print(e)
    return wrapper_for_class_method

  def __init__(self,succeed:bool):
    self.succeed = succeed

  @decorator_for_class_method_with_no_args
  def class_action(self):
    if self.succeed:
      print("You succeeded by choice.")
    else:
      raise Exception("Epic fail of your own creation.")

test_succeed = DecorateMyMethod(True)
test_succeed.class_action()
```

Output:

```plaintext
You succeeded by choice.
```

```python
test_fail = DecorateMyMethod(False)
test_fail.class_action()
```

Output:

```plaintext
Exception: Epic fail of your own creation.
```

A decorator can also be defined as a class instead of a method. This is useful
for maintaining and updating a state, such as in the following example, where we
count the number of calls made to a method:

```python
# Class-based decorator: maintains state between calls
class CountCallNumber:

  def __init__(self, func):
    self.func = func  # Store the function to decorate
    self.call_number = 0  # Initialize call counter

  def __call__(self, *args, **kwargs):  # Makes instance callable
    self.call_number += 1  # Increment counter
    print("This is execution number " + str(self.call_number))
    return self.func(*args, **kwargs)  # Call original function

@CountCallNumber  # Creates instance of CountCallNumber
def say_hi(name):
  print("Hi! My name is " + name)

say_hi("Jack")  # Calls CountCallNumber.__call__()
```

Output:

```plaintext
This is execution number 1
Hi! My name is Jack
```

```python
say_hi("James")
```

Output:

```plaintext
This is execution number 2
Hi! My name is James
```

<base-disclaimer>
  <base-disclaimer-title>
    Count Example
  </base-disclaimer-title>
  <base-disclaimer-content>
  This count example is inspired by Patrick Loeber's <a href="https://youtu.be/HGOBQPFzWKo?si=IUvFzeQbzTmeEgKV" target="_blank">YouTube tutorial</a>.
  </base-disclaimer-content>
</base-disclaimer>

## Relevant links

- <router-link to="/blog/python-decorators-for-beginners">Python Decorators: Simple Patterns to Level Up Your Code</router-link>
- <router-link to="/blog/python-easy-args-kwargs">Python \*args and \*\*kwargs Made Easy</router-link>
- <router-link to="/cheatsheet/functions">Functions</router-link>
- <router-link to="/cheatsheet/args-and-kwargs">Args and Kwargs</router-link>
- <router-link to="/builtin/classmethod">classmethod()</router-link>
- <router-link to="/builtin/staticmethod">staticmethod()</router-link>
- <router-link to="/builtin/property">property()</router-link>
- <router-link to="/builtin/callable">callable()</router-link>
