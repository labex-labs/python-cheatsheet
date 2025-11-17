---
title: 'Python 异常处理 - Python 速查表'
description: '在 Python 中，异常处理是响应异常发生的过程。'
labUrl: 'https://labex.io/zh/labs/python-python-exception-handling-633656?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 异常处理
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://en.wikipedia.org/wiki/Exception_handling">异常处理</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    在计算和计算机编程中，异常处理是对发生异常——需要特殊处理的异常或非正常情况——的响应过程。
  </base-disclaimer-content>
</base-disclaimer>

Python 有许多[内置异常](https://docs.python.org/3/library/exceptions.html)，当程序遇到错误时会引发这些异常，并且大多数外部库，如流行的 [Requests](https://requests.readthedocs.io/en/latest)，都包含其[自定义异常](https://requests.readthedocs.io/en/latest/user/quickstart/#errors-and-exceptions)，我们需要处理这些异常。

## 基本异常处理

你不能除以零，这是一个数学真理，如果你在 Python 中尝试这样做，解释器将引发内置异常 [ZeroDivisionError](https://docs.python.org/3/library/exceptions.html#ZeroDivisionError)：

```python
def divide(dividend , divisor):
    print(dividend / divisor)

divide(dividend=10, divisor=5)
```

输出：

```plaintext
2
```

```python
divide(dividend=10, divisor=0)
```

输出：

```plaintext
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ZeroDivisionError: division by zero
```

假设我们不希望程序停止执行或向用户显示他们无法理解的输出。假设我们想打印一条有用且清晰的消息，那么我们需要使用 `try` 和 `except` 关键字来**_处理_**异常：

```python
# try-except: 优雅地处理异常
def divide(dividend , divisor):
    try:  # 尝试执行此代码
        print(dividend / divisor)
    except ZeroDivisionError:  # 捕获特定异常类型
        print('你不能除以 0')

divide(dividend=10, divisor=5)
```

输出：

```plaintext
2
```

```python
divide(dividend=10, divisor=0)
```

输出：

```plaintext
你不能除以 0
```

## 使用一个异常块处理多个异常

你也可以像下面这样在一行中处理多个异常，而无需创建多个异常块。

```python
# 在一个 except 块中处理多个异常
def divide(dividend , divisor):
    try:
        if (dividend == 10):
          var = 'str' + 1  # 这将引发 TypeError
        else:
          print(dividend / divisor)
    except (ZeroDivisionError, TypeError) as error:  # 捕获多种异常类型
        print(error)  # 打印错误消息

divide(dividend=20, divisor=5)
```

输出：

```plaintext
4
```

```python
divide(dividend=10, divisor=5)
```

输出：

```plaintext
can only concatenate str (not "int") to str
```

```python
divide(dividend=10, divisor=0)
```

输出：

```plaintext
division by zero
```

## 异常处理中的 Finally 代码

无论是否发生异常，`finally` 部分中的代码始终执行：

```python
# finally 块：无论是否发生异常，都会执行
def divide(dividend , divisor):
    try:
        print(dividend / divisor)
    except ZeroDivisionError:
        print('你不能除以 0')
    finally:  # 无论是否发生异常，都会执行
        print('执行完毕')

divide(dividend=10, divisor=5)
```

输出：

```plaintext
2.0
执行完毕
```

```python
divide(dividend=10, divisor=0)
```

输出：

```plaintext
你不能除以 0
执行完毕
```

## 自定义异常

自定义异常通过创建继承自 Python 基类 `Exception` 的 `class` 来初始化，并使用 `raise` 关键字引发：

```python
# 自定义异常：通过继承 Exception 类创建
class MyCustomException(Exception):
    pass

raise MyCustomException  # 引发自定义异常
```

输出：

```plaintext
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
__main__.MyCustomException
```

要声明自定义异常消息，可以将其作为参数传递：

```python
class MyCustomException(Exception):
    pass

raise MyCustomException('我的自定义异常的自定义消息')
```

输出：

```plaintext
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
__main__.MyCustomException: 我的自定义异常的自定义消息
```

处理自定义异常与其他任何异常一样：

```python
try:
    raise MyCustomException('我的自定义异常的自定义消息')
except MyCustomException:
    print('引发了我的自定义异常')
```

输出：

```plaintext
引发了我的自定义异常
```

## 相关链接

- <router-link to="/cheatsheet/control-flow">控制流</router-link>
- <router-link to="/builtin/breakpoint">breakpoint()</router-link>
- <router-link to="/builtin/isinstance">isinstance()</router-link>
- <router-link to="/builtin/issubclass">issubclass()</router-link>
