---
title: 'Python 装饰器：提升代码的简单模式 - Python 速查表'
description: '会写函数就能写装饰器。通过这些简单、适合初学者的模式，学习为代码添加计时器和日志记录等功能。'
date: 'Aug 16, 2025'
updated: 'Aug 16, 2025'
tags: 'python, intermediate, decorators'
socialImage: '/blog/python-decorators.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "Python 装饰器：提升代码的简单模式 - Python 速查表"
    description: "会写函数就能写装饰器。通过这些简单、适合初学者的模式，学习为代码添加计时器和日志记录等功能。"
    date: "Aug 16, 2025"
    updated: "Aug 16, 2025"
    tags: "python, intermediate, decorators"
    socialImage: "/blog/python-decorators.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="Python 装饰器：提升代码的简单模式 - Python 速查表" />

当你在函数上方看到 `@something` 时，是否会好奇其中隐藏着什么魔法？我也有过同样的感受。装饰器（Decorators）可能看起来令人生畏，但一旦你理解了基础知识，它们实际上是 Python 最优雅的特性之一——请参阅 <router-link to="/cheatsheet/decorators">装饰器（速查表）</router-link> 获取简洁参考。

将装饰器想象成给你的函数进行礼品包装。里面的函数保持不变，但装饰器在顶部加了一个漂亮的蝴蝶结——在不改变原始代码的情况下增加了额外功能。

## 最简单的装饰器

让我们从最基本的例子开始，以理解正在发生的事情：

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

就是这样！装饰器只是一个接受另一个函数并为其包装额外行为的函数。`@my_decorator` 语法只是 `say_hello = my_decorator(say_hello)` 的一种更简洁的写法。

## 你的第一个有用的装饰器：计时器

这是一个你真正想使用的装饰器——一个告诉你函数运行耗时的装饰器：

```python
import time
import functools

def timer(func):
    @functools.wraps(func)  # 保留原始函数的名称和文档
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

请参阅 <router-link to="/cheatsheet/decorators">装饰器（速查表）</router-link> 以获取额外的装饰器模板和常见模式。

注意我们如何使用 `*args` 和 `**kwargs`（参见 <router-link to="/cheatsheet/args-and-kwargs">Args & kwargs（速查表）</router-link>）？这使得我们的装饰器可以与任何函数配合使用，无论它接受多少参数。

## 调试你的代码：日志记录装饰器

当你想弄清楚哪里出了问题时，这个装饰器非常方便——另请查看 <router-link to="/cheatsheet/debugging">调试（速查表）</router-link> 以获取补充技巧和技术：

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

## 控制访问：身份验证装饰器

想确保只有特定用户才能运行函数？方法如下：

```python
def requires_auth(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        # 在真实应用中，你会检查实际的身份验证
        user_logged_in = True  # 这将来自你的身份验证系统

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

## 加速：缓存装饰器

如果你有一个函数使用相同的输入进行昂贵的计算，请缓存结果：

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

## 重试失败的操作

有时函数会因网络问题或临时问题而失败。此装饰器会自动重试：

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

# 如果失败，这将重试最多 3 次
result = unreliable_api_call()
```

## 速率限制：减慢你的代码速度

有时你需要对 API 或数据库保持温和：

```python
import time
import functools

def rate_limit(seconds):
    """
    一个限制函数调用频率的装饰器。
    """
    def decorator(func):
        # 使用列表存储一个可变的浮点值，表示上次调用时间。
        # 这使得内部 wrapper 函数可以修改它。
        last_called_at = [0.0]

        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            # 计算自上次调用以来经过的时间
            elapsed = time.time() - last_called_at[0]
            wait_time = seconds - elapsed

            # 如果时间不足，则休眠剩余时间
            if wait_time > 0:
                time.sleep(wait_time)

            # 更新上次调用时间并执行函数
            last_called_at[0] = time.time()
            return func(*args, **kwargs)

        return wrapper
    return decorator

@rate_limit(1)  # 每秒最多允许调用一次
def call_api():
    print(f"API called at {time.time():.2f}")

# 这些调用将大约相隔 1 秒
call_api()
call_api()
call_api()

# 预期输出：
# API called at 1723823038.50
# API called at 1723823039.50
# API called at 1723823040.50
```

## 验证你的输入

确保你的函数接收到正确类型的数据：

```python
def validate_types(**expected_types):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            # 获取函数参数名称
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

# 这可以工作
user1 = create_user("Alice", 25)
print(user1)  # User Alice, age 25

# 这会引发 TypeError
try:
    user2 = create_user("Bob", "twenty-five")
except TypeError as e:
    print(e)  # age must be int, got str
```

## 何时使用每种装饰器

| 装饰器类型    | 最适合         | 示例用途                       |
| :------------ | :------------- | :----------------------------- |
| **计时器**    | 性能监控       | 查找慢速函数，优化             |
| **调试/日志** | 开发与故障排除 | 理解函数调用，调试             |
| **身份验证**  | 安全与访问控制 | 保护管理员函数，用户权限       |
| **缓存**      | 昂贵的计算     | 数据库查询，API 调用，复杂计算 |
| **重试**      | 不可靠的操作   | 网络请求，文件操作             |
| **速率限制**  | 控制频率       | API 调用，防止垃圾信息         |
| **验证**      | 数据完整性     | 用户输入，API 参数             |

## 使用装饰器的技巧

**始终使用 `@functools.wraps`**——这会保留原始函数的名称和文档，使调试更容易（参见 <router-link to="/cheatsheet/decorators">装饰器速查表</router-link> 中的示例）。

**保持简洁**——如果你的装饰器变得复杂，请考虑它是否应该是一个类或单独的函数。

**考虑顺序**——堆叠装饰器时，最靠近函数的那一个最先运行：

```python
@timer
@debug
def my_function():
    pass

# 这与以下相同：
# my_function = timer(debug(my_function))
```

**不要过度使用**——装饰器很强大，但过多的装饰器会使代码难以理解。

## 关键要点

装饰器允许你在不更改代码的情况下向函数添加功能。它们非常适合横切关注点，如计时、日志记录、身份验证和缓存。

从这里展示的简单模式开始。一旦你感到舒适，你就可以为你特定的需求创建更复杂的装饰器。关键在于理解装饰器只是包装其他函数的函数——其他一切都是对该基本概念的巧妙应用。

想练习一下吗？尝试将 `@timer` 装饰器添加到你现有的某些函数中，看看哪些函数的运行速度比你预期的慢。你可能会发现一些意想不到的东西！

## 相关链接

在下方添加相关的内部文档链接以供进一步阅读：

- <router-link to="/cheatsheet/decorators">装饰器（速查表）</router-link>
- <router-link to="/cheatsheet/functions">函数（速查表）</router-link>
- <router-link to="/cheatsheet/args-and-kwargs">Args & kwargs（速查表）</router-link>
- <router-link to="/cheatsheet/debugging">调试（速查表）</router-link>
- <router-link to="/cheatsheet/oop-basics">OOP 基础（速查表）</router-link>
- <router-link to="/builtin/callable">callable() (内置)</router-link>
- <router-link to="/builtin/staticmethod">staticmethod (内置)</router-link>
- <router-link to="/blog/python-easy-args-kwargs">Python: 简单的 args & kwargs (博客)</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">Python 推导式（分步指南） (博客)</router-link>
