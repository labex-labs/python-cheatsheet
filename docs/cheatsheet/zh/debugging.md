---
title: 'Python 调试 - Python 速查表'
description: '在计算机编程和软件开发中，调试是查找和解决计算机程序、软件或系统中错误（缺陷或阻止正确运行的问题）的过程。'
labUrl: 'https://labex.io/zh/labs/python-python-debugging-633653?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 调试 - Python 速查表
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://en.wikipedia.org/wiki/Debugging">查找和解决错误</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    在计算机编程和软件开发中，调试是查找和解决计算机程序、软件或系统中错误的（缺陷或阻止正确运行的问题）的过程。
  </base-disclaimer-content>
</base-disclaimer>

## 抛出异常

使用 `raise` 语句抛出异常。在代码中，`raise` 语句包含以下内容：

- `raise` 关键字
- 对 `Exception()` 函数的调用
- 传递给 `Exception()` 函数的包含有用错误消息的字符串

```python
# raise 语句：使用自定义消息手动抛出异常
raise Exception('This is the error message.')
```

输出：

```plaintext
Traceback (most recent call last):
  File "<pyshell#191>", line 1, in <module>
    raise Exception('This is the error message.')
Exception: This is the error message.
```

通常，调用函数的代码（而不是函数本身）才知道如何处理异常。因此，您通常会在函数内部看到 `raise` 语句，而在调用函数的代码中看到 `try` 和 `except` 语句。

```python
# 在函数中抛出异常，在调用代码中处理它们
def box_print(symbol, width, height):
    if len(symbol) != 1:
      raise Exception('Symbol must be a single character string.')
    if width <= 2:
      raise Exception('Width must be greater than 2.')
    if height <= 2:
      raise Exception('Height must be greater than 2.')
    print(symbol * width)
    for i in range(height - 2):
        print(symbol + (' ' * (width - 2)) + symbol)
    print(symbol * width)

# 调用函数时处理异常
for sym, w, h in (('*', 4, 4), ('O', 20, 5), ('x', 1, 3), ('ZZ', 3, 3)):
    try:
        box_print(sym, w, h)
    except Exception as err:  # 捕获异常并打印错误消息
        print('An exception happened: ' + str(err))
```

输出：

```plaintext
****
*  *
*  *
****
OOOOOOOOOOOOOOOOOOOO
O                  O
O                  O
O                  O
OOOOOOOOOOOOOOOOOOOO
An exception happened: Width must be greater than 2.
An exception happened: Symbol must be a single character string.
```

阅读更多关于 [异常处理](/cheatsheet/exception-handling) 的信息。

## 将回溯信息作为字符串获取

当抛出的异常未被处理时，Python 会显示 `traceback`（回溯信息）。但也可以通过调用 `traceback.format_exc()` 将其作为字符串获取。如果您想要异常回溯信息，但又希望 `except` 语句能优雅地处理异常，那么此函数非常有用。在调用此函数之前，您需要导入 Python 的 `traceback` 模块。

```python
# traceback.format_exc()：获取回溯信息作为字符串用于日志记录/调试
import traceback

try:
    raise Exception('This is the error message.')
except:
    with open('errorInfo.txt', 'w') as error_file:
        error_file.write(traceback.format_exc())  # 将回溯信息写入文件
    print('The traceback info was written to errorInfo.txt.')
```

输出：

```plaintext
116
The traceback info was written to errorInfo.txt.
```

116 是 `write()` 方法的返回值，因为有 116 个字符被写入文件。`traceback` 文本已写入 errorInfo.txt。

    Traceback (most recent call last):
      File "<pyshell#28>", line 2, in <module>
    Exception: This is the error message.

## 断言

断言是对代码进行健全性检查，以确保代码没有做明显错误的事情。这些健全性检查由 `assert` 语句执行。如果健全性检查失败，则会引发 `AssertionError` 异常。在代码中，`assert` 语句包含以下内容：

- `assert` 关键字
- 一个条件（即，一个评估为 `True` 或 `False` 的表达式）
- 一个逗号
- 当条件为 `False` 时显示的 `string`

```python
# assert 语句：检查条件，如果为 False 则抛出 AssertionError
pod_bay_door_status = 'open'
assert pod_bay_door_status == 'open', 'The pod bay doors need to be "open".'  # 通过

pod_bay_door_status = 'I\'m sorry, Dave. I\'m afraid I can\'t do that.'
assert pod_bay_door_status == 'open', 'The pod bay doors need to be "open".'  # 抛出 AssertionError
```

输出：

```plaintext
Traceback (most recent call last):
  File "<pyshell#10>", line 1, in <module>
    assert pod_bay_door_status == 'open', 'The pod bay doors need to be "open".'
AssertionError: The pod bay doors need to be "open".
```

用通俗的话来说，`assert` 语句的意思是：“我断言这个条件成立，如果不是，那么程序中就有一个错误。”与异常不同，您的代码不应该使用 `try` 和 `except` 来处理断言；如果断言失败，您的程序应该崩溃。通过这种快速失败的方式，可以缩短从错误的原始原因到您首次注意到错误的之间的时间。这将减少您需要检查以找到导致错误的程序的代码量。

### 禁用断言

通过在运行 Python 时传递 `-O` 选项可以禁用断言。

## 日志记录

要使 `logging` 模块能够在程序运行时在屏幕上显示日志消息，请将以下内容复制到程序的顶部：

```python
import logging
logging.basicConfig(level=logging.DEBUG, format=' %(asctime)s - %(levelname)s- %(message)s')
```

假设您编写了一个函数来计算一个数的阶乘。在数学中，4 的阶乘是 1 × 2 × 3 × 4，即 24。7 的阶乘是 1 × 2 × 3 × 4 × 5 × 6 × 7，即 5,040。打开一个新的文件编辑器窗口并输入以下代码。它有一个错误，但您还将输入几条日志消息以帮助您找出哪里出了问题。将程序保存为 factorialLog.py。

```python
import logging
logging.basicConfig(level=logging.DEBUG, format=' %(asctime)s - %(levelname)s- %(message)s')
logging.debug('Start of program')

def factorial(n):
    logging.debug('Start of factorial(%s)' % (n))
    total = 1
    for i in range(1, n + 1):
        total *= i
        logging.debug('i is ' + str(i) + ', total is ' + str(total))
    logging.debug('End of factorial(%s)' % (n))
    return total

print(factorial(5))
logging.debug('End of program')
```

输出：

```plaintext
2015-05-23 16:20:12,664 - DEBUG - Start of program
2015-05-23 16:20:12,664 - DEBUG - Start of factorial(5)
2015-05-23 16:20:12,665 - DEBUG - i is 0, total is 0
2015-05-23 16:20:12,668 - DEBUG - i is 1, total is 0
2015-05-23 16:20:12,670 - DEBUG - i is 2, total is 0
2015-05-23 16:20:12,673 - DEBUG - i is 3, total is 0
2015-05-23 16:20:12,675 - DEBUG - i is 4, total is 0
2015-05-23 16:20:12,678 - DEBUG - i is 5, total is 0
2015-05-23 16:20:12,680 - DEBUG - End of factorial(5)
0
2015-05-23 16:20:12,684 - DEBUG - End of program
```

## 日志级别

日志级别提供了一种按重要性对日志消息进行分类的方法。有五个日志级别，如表 10-1 所示，从最不重要到最重要。可以使用不同的日志记录函数以每个级别记录消息。

| 级别       | 日志记录函数         | 描述                                                           |
| :--------- | :------------------- | :------------------------------------------------------------- |
| `DEBUG`    | `logging.debug()`    | 最低级别。用于小细节。通常只有在诊断问题时才关心这些消息。     |
| `INFO`     | `logging.info()`     | 用于记录程序中一般事件的信息，或确认程序在特定位置按预期工作。 |
| `WARNING`  | `logging.warning()`  | 用于指示潜在问题，该问题不会阻止程序运行，但将来可能会。       |
| `ERROR`    | `logging.error()`    | 用于记录导致程序未能执行某些操作的错误。                       |
| `CRITICAL` | `logging.critical()` | 最高级别。用于指示已导致或即将导致程序完全停止运行的致命错误。 |

## 禁用日志记录

在调试完程序后，您可能不希望所有这些日志消息都充斥屏幕。`logging.disable()` 函数可以禁用它们，这样您就不必手动进入程序中删除所有日志调用。

```python
import logging

logging.basicConfig(level=logging.INFO, format=' %(asctime)s -%(levelname)s - %(message)s')
logging.critical('Critical error! Critical error!')
```

输出：

```plaintext
2015-05-22 11:10:48,054 - CRITICAL - Critical error! Critical error!
```

```python
logging.disable(logging.CRITICAL)
logging.critical('Critical error! Critical error!')
logging.error('Error! Error!')
```

## 日志记录到文件

您可以将日志消息写入文本文件，而不是将它们显示到屏幕上。`logging.basicConfig()` 函数接受一个 `filename` 关键字参数，如下所示：

```python
import logging
logging.basicConfig(filename='myProgramLog.txt', level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s')
```

## 相关链接

- <router-link to="/cheatsheet/exception-handling">异常处理</router-link>
- <router-link to="/builtin/breakpoint">breakpoint()</router-link>
