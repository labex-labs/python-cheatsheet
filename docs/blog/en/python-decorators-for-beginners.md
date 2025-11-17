---
title: 'Python Decorators - Simple Patterns to Level Up Your Code - Python Cheatsheet'
description: If you can write a function, you can write a decorator. Learn to add features like timers and loggers to your code with these easy, beginner-friendly patterns.
date: Aug 16, 2025
updated: Aug 16, 2025
tags: python, intermediate, decorators
socialImage: /blog/python-decorators.jpg
---

<route lang="yaml">
meta:
    layout: article
    title: 'Python Decorators - Simple Patterns to Level Up Your Code'
    description: If you can write a function, you can write a decorator. Learn to add features like timers and loggers to your code with these easy, beginner-friendly patterns.
    date: Aug 16, 2025
    updated: Aug 16, 2025
    socialImage: /blog/python-decorators.jpg
    tags: python, intermediate, beta
</route>

<blog-title-header :frontmatter="frontmatter" title="Python Decorators: Simple Patterns to Level Up Your Code" />

You know that feeling when you see `@something` above a function and wonder what black magic is happening? I've been there too. Decorators might look intimidating, but they're actually one of Python's most elegant features once you understand the basics — see <router-link to="/cheatsheet/decorators">Decorators (cheatsheet)</router-link> for a compact reference.

Think of decorators as gift wrapping for your functions. The function inside stays the same, but the decorator adds a nice bow on top – extra functionality without changing the original code.

## The Simplest Decorator

Let's start with the most basic example to understand what's happening:

```python
def my_decorator(func):
    def wrapper():
        print("Something happens before!")
        func()
        print("Something happens after!")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()
# Something happens before!
# Hello!
# Something happens after!
```

That's it! A decorator is just a function that takes another function and wraps it with extra behavior. The `@my_decorator` syntax is just a cleaner way of writing `say_hello = my_decorator(say_hello)`.

## Your First Useful Decorator: Timer

Here's a decorator you'll actually want to use – one that tells you how long your functions take to run:

```python
import time
import functools

def timer(func):
    @functools.wraps(func)  # Preserves the original function's name and docs
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end - start:.4f} seconds")
        return result
    return wrapper

@timer
def slow_function():
    time.sleep(1)
    return "Done!"

result = slow_function()
# slow_function took 1.0041 seconds
print(result)  # Done!
```

See the <router-link to="/cheatsheet/decorators">Decorators (cheatsheet)</router-link> for additional decorator templates and common patterns.

Notice how we use `*args` and `**kwargs` (see <router-link to="/cheatsheet/args-and-kwargs">Args & kwargs</router-link>)? This makes our decorator work with any function, regardless of how many arguments it takes.

## Debug Your Code: Logger Decorator

When you're trying to figure out what's going wrong, this decorator is incredibly handy — also check the <router-link to="/cheatsheet/debugging">Debugging (cheatsheet)</router-link> for complementary tips and techniques:

```python
def debug(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        args_str = ', '.join(repr(arg) for arg in args)
        kwargs_str = ', '.join(f"{k}={v!r}" for k, v in kwargs.items())
        all_args = ', '.join(filter(None, [args_str, kwargs_str]))
        print(f"Calling {func.__name__}({all_args})")

        result = func(*args, **kwargs)
        print(f"{func.__name__} returned {result!r}")
        return result
    return wrapper

@debug
def add_numbers(a, b, multiply_by=1):
    return (a + b) * multiply_by

result = add_numbers(5, 3, multiply_by=2)
# Calling add_numbers(5, 3, multiply_by=2)
# add_numbers returned 16
```

## Control Access: Authentication Decorator

Want to make sure only certain users can run a function? Here's how:

```python
def requires_auth(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        # In a real app, you'd check actual authentication
        user_logged_in = True  # This would come from your auth system

        if not user_logged_in:
            return "Access denied! Please log in."

        return func(*args, **kwargs)
    return wrapper

@requires_auth
def delete_everything():
    return "💥 Everything deleted! (just kidding)"

result = delete_everything()
print(result)  # 💥 Everything deleted! (just kidding)
```

## Speed Things Up: Cache Decorator

If you have a function that does expensive calculations with the same inputs, cache the results:

```python
def cache(func):
    cached_results = {}

    @functools.wraps(func)
    def wrapper(*args):
        if args in cached_results:
            print(f"Cache hit for {func.__name__}{args}")
            return cached_results[args]

        print(f"Computing {func.__name__}{args}")
        result = func(*args)
        cached_results[args] = result
        return result

    return wrapper

@cache
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(10))
# Computing fibonacci(10)
# Computing fibonacci(9)
# Computing fibonacci(8)
# ... (lots of computation)
# Cache hit for fibonacci(2)
# Cache hit for fibonacci(3)
# ... (cache hits)
# 55
```

## Retry Failed Operations

Sometimes functions fail due to network issues or temporary problems. This decorator automatically retries:

```python
import random

def retry(max_attempts=3):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            for attempt in range(max_attempts):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    print(f"Attempt {attempt + 1} failed: {e}")
                    if attempt == max_attempts - 1:
                        print("All attempts failed!")
                        raise
        return wrapper
    return decorator

@retry(max_attempts=3)
def unreliable_api_call():
    if random.random() < 0.7:  # 70% chance of failure
        raise Exception("Network error")
    return "Success!"

# This will retry up to 3 times if it fails
result = unreliable_api_call()
```

## Rate Limiting: Slow Down Your Code

Sometimes you need to be gentle with APIs or databases:

```python
import time
import functools

def rate_limit(seconds):
    """
    A decorator to limit how frequently a function can be called.
    """
    def decorator(func):
        # Use a list to store a mutable float value for the last call time.
        # This allows the inner wrapper function to modify it.
        last_called_at = [0.0]

        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            # Calculate time elapsed since the last call
            elapsed = time.time() - last_called_at[0]
            wait_time = seconds - elapsed

            # If not enough time has passed, sleep for the remainder
            if wait_time > 0:
                time.sleep(wait_time)

            # Update the last call time and execute the function
            last_called_at[0] = time.time()
            return func(*args, **kwargs)

        return wrapper
    return decorator

@rate_limit(1)  # Allow at most one call per second
def call_api():
    print(f"API called at {time.time():.2f}")

# These calls will be spaced out by approximately 1 second each
call_api()
call_api()
call_api()

# Expected Output:
# API called at 1723823038.50
# API called at 1723823039.50
# API called at 1723823040.50
```

## Validate Your Inputs

Make sure your functions get the right types of data:

```python
def validate_types(**expected_types):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            # Get function parameter names
            import inspect
            sig = inspect.signature(func)
            bound_args = sig.bind(*args, **kwargs)
            bound_args.apply_defaults()

            for param_name, expected_type in expected_types.items():
                if param_name in bound_args.arguments:
                    value = bound_args.arguments[param_name]
                    if not isinstance(value, expected_type):
                        raise TypeError(
                            f"{param_name} must be {expected_type.__name__}, "
                            f"got {type(value).__name__}"
                        )

            return func(*args, **kwargs)
        return wrapper
    return decorator

@validate_types(name=str, age=int)
def create_user(name, age):
    return f"User {name}, age {age}"

# This works
user1 = create_user("Alice", 25)
print(user1)  # User Alice, age 25

# This raises TypeError
try:
    user2 = create_user("Bob", "twenty-five")
except TypeError as e:
    print(e)  # age must be int, got str
```

## When to Use Each Decorator

| Decorator Type   | Best For                       | Example Use Cases                                 |
| :--------------- | :----------------------------- | :------------------------------------------------ |
| **Timer**        | Performance monitoring         | Finding slow functions, optimization              |
| **Debug/Logger** | Development \& troubleshooting | Understanding function calls, debugging           |
| **Auth**         | Security \& access control     | Protecting admin functions, user permissions      |
| **Cache**        | Expensive computations         | Database queries, API calls, complex calculations |
| **Retry**        | Unreliable operations          | Network requests, file operations                 |
| **Rate Limit**   | Controlling frequency          | API calls, preventing spam                        |
| **Validation**   | Data integrity                 | User input, API parameters                        |

## Tips for Using Decorators

**Always use `@functools.wraps`** – This preserves the original function's name and documentation, making debugging easier (see <router-link to="/cheatsheet/decorators">Decorators cheatsheet</router-link> for examples).

**Keep them simple** – If your decorator is getting complex, consider if it should be a class or separate function instead.

**Think about order** – When stacking decorators, the one closest to the function runs first:

```python
@timer
@debug
def my_function():
    pass

# This is the same as:
# my_function = timer(debug(my_function))
```

**Don't overuse them** – Decorators are powerful, but too many can make code hard to follow.

## Key Takeaways

Decorators let you add functionality to functions without changing their code. They're perfect for cross-cutting concerns like timing, logging, authentication, and caching.

Start with the simple patterns shown here. Once you're comfortable, you can create more sophisticated decorators for your specific needs. The key is understanding that decorators are just functions that wrap other functions – everything else is just clever applications of that basic concept.

Want to practice? Try adding the `@timer` decorator to some of your existing functions and see which ones are slower than you expected. You might be surprised at what you discover!

## Relevant Links

Add relevant internal documentation links below for further reading:

- <router-link to="/cheatsheet/decorators">Decorators (cheatsheet)</router-link>
- <router-link to="/cheatsheet/functions">Functions (cheatsheet)</router-link>
- <router-link to="/cheatsheet/args-and-kwargs">Args & kwargs (cheatsheet)</router-link>
- <router-link to="/cheatsheet/debugging">Debugging (cheatsheet)</router-link>
- <router-link to="/cheatsheet/oop-basics">OOP basics (cheatsheet)</router-link>
- <router-link to="/builtin/callable">callable() (builtin)</router-link>
- <router-link to="/builtin/staticmethod">staticmethod (builtin)</router-link>
- <router-link to="/blog/python-easy-args-kwargs">Python: Easy args & kwargs (blog)</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">Python comprehensions (blog)</router-link>
