---
title: 'Python 装饰器 - Python 速查表'
description: 'Python 装饰器是一种语法，为扩展函数或类提供了一种简洁且可重用的方式。'
labUrl: 'https://labex.io/zh/labs/python-python-decorators-633654?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 装饰器
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Python 装饰器提供了一种简洁且可重用的方式来扩展
函数或类。阅读配套文章 <router-link to="/blog/python-decorators-for-beginners">Python 装饰器：提升代码水平的简单模式</router-link> 以获取实用的示例和模式。

## 基础装饰器

最简单的装饰器形式是一个接受另一个函数作为参数并返回一个包装器的函数。以下示例展示了装饰器的创建及其用法。

```python
# 装饰器：一个接受另一个函数并返回一个包装器的函数
def your_decorator(func):
  def wrapper():
    # 在 func 之前执行操作...
    print("Before func!")
    func()  # 调用原始函数
    # 在 func 之后执行操作...
    print("After func!")
  return wrapper  # 返回包装器函数

# @your_decorator 是 @foo = your_decorator(foo) 的语法糖
@your_decorator
def foo():
  print("Hello World!")

foo()  # 调用 wrapper，它会调用带有额外行为的 foo
```

输出：

```plaintext
Before func!
Hello World!
After func!
```

## 带有参数的函数的装饰器

```python
# 适用于带有参数的函数的装饰器
def your_decorator(func):
  def wrapper(*args,**kwargs):  # 接受任何参数
    # 在 func 之前执行操作...
    print("Before func!")
    func(*args,**kwargs)  # 将参数传递给原始函数
    # 在 func 之后执行操作...
    print("After func!")
  return wrapper

@your_decorator
def foo(bar):
  print("My name is " + bar)

foo("Jack")  # 参数通过 wrapper 传递
```

输出：

```plaintext
Before func!
My name is Jack
After func!
```

## 基础装饰器模板

此模板适用于大多数装饰器用例。它适用于带参数或不带参数，以及有返回值或无返回值的函数。

```python
import functools

# 最佳实践装饰器模板：保留函数元数据和返回值
def your_decorator(func):
  @functools.wraps(func)  # 保留函数名、文档字符串等
  def wrapper(*args,**kwargs):
    # 在 func 之前执行操作...
    result = func(*args,**kwargs)  # 调用函数并捕获返回值
    # 在 func 之后执行操作..
    return result  # 返回原始函数的返回值
  return wrapper
```

## 带参数的装饰器

您也可以为装饰器定义参数。

```python
import functools

# 装饰器工厂：根据参数返回一个装饰器
def your_decorator(arg):
  def decorator(func):
    @functools.wraps(func)  # 保留函数元数据
    def wrapper(*args,**kwargs):
      # 在 func 之前执行操作，可能使用 arg...
      result = func(*args,**kwargs)
      # 在 func 之后执行操作，可能使用 arg...
      return result
    return wrapper
  return decorator  # 返回实际的装饰器函数
```

使用此装饰器的方法如下：

```python
# 使用带参数的装饰器：@your_decorator(arg='x') 调用 your_decorator('x')
# 然后返回一个装饰器，该装饰器应用于 foo
@your_decorator(arg = 'x')
def foo(bar):
  return bar
```

## 基于类的装饰器

要装饰类方法，必须在类内部定义装饰器。当只向方法传递隐式参数 `self` 而没有其他显式参数时，您必须为那些没有其他附加参数的方法单独定义一个装饰器。如下例所示，当您想以某种特定方式捕获和打印异常时，就会出现这种情况。

```python
# 类方法装饰器：在类内部定义
class DecorateMyMethod:

  # 仅包含 'self' 参数的类方法的静态方法装饰器
  def decorator_for_class_method_with_no_args(method):
    def wrapper_for_class_method(self):  # 只接受 self
      try:
        return method(self)  # 调用原始方法
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

输出：

```plaintext
You succeeded by choice.
```

```python
test_fail = DecorateMyMethod(False)
test_fail.class_action()
```

输出：

```plaintext
Exception: Epic fail of your own creation.
```

装饰器也可以定义为一个类而不是一个方法。这对于维护和更新状态很有用，如以下示例所示，我们计算对某个方法的调用次数：

```python
# 基于类的装饰器：在调用之间维护状态
class CountCallNumber:

  def __init__(self, func):
    self.func = func  # 存储要装饰的函数
    self.call_number = 0  # 初始化调用计数器

  def __call__(self, *args, **kwargs):  # 使实例可调用
    self.call_number += 1  # 增加计数器
    print("This is execution number " + str(self.call_number))
    return self.func(*args, **kwargs)  # 调用原始函数

@CountCallNumber  # 创建 CountCallNumber 的实例
def say_hi(name):
  print("Hi! My name is " + name)

say_hi("Jack")  # 调用 CountCallNumber.__call__()
```

输出：

```plaintext
This is execution number 1
Hi! My name is Jack
```

```python
say_hi("James")
```

输出：

```plaintext
This is execution number 2
Hi! My name is James
```

<base-disclaimer>
  <base-disclaimer-title>
    计数示例
  </base-disclaimer-title>
  <base-disclaimer-content>
  此计数示例的灵感来源于 Patrick Loeber 的 <a href="https://youtu.be/HGOBQPFzWKo?si=IUvFzeQbzTmeEgKV" target="_blank">YouTube 教程</a>。
  </base-disclaimer-content>
</base-disclaimer>

## 相关链接

- <router-link to="/blog/python-decorators-for-beginners">Python 装饰器：提升代码水平的简单模式</router-link>
- <router-link to="/blog/python-easy-args-kwargs">Python \*args 和 \*\*kwargs 轻松掌握</router-link>
- <router-link to="/cheatsheet/functions">函数</router-link>
- <router-link to="/cheatsheet/args-and-kwargs">Args 和 Kwargs</router-link>
- <router-link to="/builtin/classmethod">classmethod()</router-link>
- <router-link to="/builtin/staticmethod">staticmethod()</router-link>
- <router-link to="/builtin/property">property()</router-link>
- <router-link to="/builtin/callable">callable()</router-link>
