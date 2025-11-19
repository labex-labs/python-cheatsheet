---
title: 'Python 控制流 - Python 速查表'
description: '控制流是单个语句、指令或函数调用执行或评估的顺序。Python 程序的控制流由条件语句、循环和函数调用控制。'
labUrl: 'https://labex.io/zh/labs/python-python-control-flow-633651?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 控制流 - Python 速查表
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    Python 控制流
  </base-disclaimer-title>
  <base-disclaimer-content>
  控制流是单个语句、指令或函数调用被执行或评估的顺序。Python 程序的控制流由条件语句、循环和函数调用来调节。
  </base-disclaimer-content>
</base-disclaimer>

## 比较运算符

| 运算符 | 含义       |
| ------ | ---------- |
| `==`   | 等于       |
| `!=`   | 不等于     |
| `<`    | 小于       |
| `>`    | 大于       |
| `<=`   | 小于或等于 |
| `>=`   | 大于或等于 |

这些运算符根据您提供的值评估为 True 或 False。

示例：

```python
42 == 42
```

```output
True
```

```python
40 == 42
```

```output
False
```

```python
'hello' == 'hello'
```

```output
True
```

```python
'hello' == 'Hello'
```

```output
False
```

```python
'dog' != 'cat'
```

```output
True
```

```python
42 == 42.0
```

```output
True
```

```python
42 == '42'
```

```output
False
```

## 布尔运算符

有三个布尔运算符：`and`、`or` 和 `not`。
按优先级从高到低依次是 `not`、`and` 和 `or`。

`and` 运算符的真值表：

| 表达式            | 评估结果 |
| ----------------- | -------- |
| `True and True`   | `True`   |
| `True and False`  | `False`  |
| `False and True`  | `False`  |
| `False and False` | `False`  |

`or` 运算符的真值表：

| 表达式           | 评估结果 |
| ---------------- | -------- |
| `True or True`   | `True`   |
| `True or False`  | `True`   |
| `False or True`  | `True`   |
| `False or False` | `False`  |

`not` 运算符的真值表：

| 表达式      | 评估结果 |
| ----------- | -------- |
| `not True`  | `False`  |
| `not False` | `True`   |

## 混合运算符

您可以混合使用布尔运算符和比较运算符：

```python
(4 < 5) and (5 < 6)
```

```output
True
```

```python
(4 < 5) and (9 < 6)
```

```output
False
```

```python
(1 == 2) or (2 == 2)
```

```output
True
```

此外，您可以在表达式中混合使用多个布尔运算符以及比较运算符：

```python
2 + 2 == 4 and not 2 + 2 == 5 and 2 * 2 == 2 + 2
```

```output
True
```

```python
# 在下面的语句中，3 < 4 and 5 > 5 首先被执行，评估为 False
# 然后 5 > 4 返回 True，所以 True or False 的结果是 True
5 > 4 or 3 < 4 and 5 > 5
```

```output
True
```

```python
# 现在括号内的语句首先被执行，所以 True and False 返回 False。
(5 > 4 or 3 < 4) and 5 > 5
```

```output
False
```

## if 语句

`if` 语句评估一个表达式，如果该表达式为 `True`，则执行接下来的缩进代码：

```python
# if 语句：当条件为 True 时执行代码块
name = 'Debora'

if name == 'Debora':  # 检查 name 是否等于 'Debora'
   print('Hi, Debora')  # 如果条件为 True，则执行此行
```

```output
Hi, Debora
```

```python
if name != 'George':
   print('You are not George')
```

```output
You are not George
```

只有当 `if` 和所有 `elif` 表达式的评估结果都为 `False` 时，`else` 语句才会执行：

```python
# if-else：根据条件执行不同的代码
name = 'Debora'

if name == 'George':
   print('Hi, George.')
else:  # 如果 if 条件为 False，则执行
   print('You are not George')
```

```output
You are not George
```

只有在 `if` 语句表达式为 `False` 之后，才会评估并执行 `elif` 语句：

```python
# if-elif：按顺序检查多个条件
name = 'George'

if name == 'Debora':
   print('Hi Debora!')
elif name == 'George':  # 仅在前一个条件为 False 时检查
   print('Hi George!')
```

```output
Hi George!
```

`elif` 和 `else` 部分是可选的。

```python
name = 'Antony'

if name == 'Debora':
   print('Hi Debora!')
elif name == 'George':
   print('Hi George!')
else:
   print('Who are you?')
```

```output
Who are you?
```

## 三元条件运算符

许多编程语言都有一个三元运算符，用于定义一个条件表达式。最常见的用法是创建一个简洁的简单条件赋值语句。换句话说，如果条件为真，它提供单行代码来评估第一个表达式，否则评估第二个表达式。

```plaintext
<expression1> if <condition> else <expression2>
```

示例：

```python
age = 15

# 这个 if 语句：
if age < 18:
   print('kid')
else:
   print('adult')
```

```output
kid
```

```python
# 三元运算符：单行条件表达式
# 语法：value_if_true if condition else value_if_false
print('kid' if age < 18 else 'adult')
```

```output
kid
```

三元运算符可以链式使用：

```python
age = 15

# 这个三元运算符：
print('kid' if age < 13 else 'teen' if age < 18 else 'adult')
```

```output
teen
```

```python
# 等同于这个 if 语句：
if age < 13:
    print('kid')
else:
    if age < 18:
        print('teen')
    else:
        print('adult')
```

```output
teen
```

## Switch-Case 语句

<base-disclaimer>
  <base-disclaimer-title>
    Switch-Case 语句
  </base-disclaimer-title>
  <base-disclaimer-content>
  在计算机编程语言中，switch 语句是一种选择控制机制，用于通过搜索和映射允许变量或表达式的值改变程序的控制流。
  </base-disclaimer-content>
</base-disclaimer>

_Switch-Case 语句_，或**结构化模式匹配**，首次通过 [PEP 622](https://peps.python.org/pep-0622/) 引入于 2020 年，并于 2022 年 9 月随 **Python 3.10** 正式发布。

<base-disclaimer>
  <base-disclaimer-title>
    官方教程
  </base-disclaimer-title>
  <base-disclaimer-content>
  <a href="https://peps.python.org/pep-0636/" target="_blank">PEP 636</a> 提供了 Python 模式匹配或 Switch-Case 语句的官方教程。
  </base-disclaimer-content>
</base-disclaimer>

### 匹配单个值

```python
response_code = 201
match response_code:
    case 200:
        print("OK")
    case 201:
        print("Created")
    case 300:
        print("Multiple Choices")
    case 307:
        print("Temporary Redirect")
    case 404:
        print("404 Not Found")
    case 500:
        print("Internal Server Error")
    case 502:
        print("502 Bad Gateway")
```

```output
Created
```

### 使用或模式匹配

在此示例中，管道字符 (`|` 或 `or`) 允许 Python 为两个或多个情况返回相同的响应。

```python
response_code = 502
match response_code:
    case 200 | 201:
        print("OK")
    case 300 | 307:
        print("Redirect")
    case 400 | 401:
        print("Bad Request")
    case 500 | 502:
        print("Internal Server Error")
```

```output
Internal Server Error
```

### 按可迭代对象的长度匹配

```python
today_responses = [200, 300, 404, 500]
match today_responses:
    case [a]:
            print(f"One response today: {a}")
    case [a, b]:
            print(f"Two responses today: {a} and {b}")
    case [a, b, *rest]:
            print(f"All responses: {a}, {b}, {rest}")
```

```output
All responses: 200, 300, [404, 500]
```

### 默认值

下划线符号 (`_`) 用于定义默认情况：

```python
response_code = 800
match response_code:
    case 200 | 201:
        print("OK")
    case 300 | 307:
        print("Redirect")
    case 400 | 401:
        print("Bad Request")
    case 500 | 502:
        print("Internal Server Error")
    case _:
        print("Invalid Code")
```

```output
Invalid Code
```

### 匹配内置类

```python
response_code = "300"
match response_code:
    case int():
            print('Code is a number')
    case str():
            print('Code is a string')
    case _:
            print('Code is neither a string nor a number')
```

```output
Code is a string
```

### 保护 Match-Case 语句

```python
response_code = 300
match response_code:
    case int():
            if response_code > 99 and response_code < 500:
                print('Code is a valid number')
    case _:
            print('Code is an invalid number')
```

```output
Code is a valid number
```

## while 循环语句

当一个表达式为 `True` 时，while 语句用于重复执行，直到该表达式为 `False`：

```python
# while 循环：只要条件为 True，就重复执行代码
spam = 0
while spam < 5:  # 只要 spam 小于 5，就继续
    print('Hello, world.')
    spam = spam + 1  # 增加计数器以避免无限循环
```

```output
Hello, world.
Hello, world.
Hello, world.
Hello, world.
Hello, world.
```

## break 语句

如果执行到达 `break` 语句，它会立即退出 `while` 循环的子句：

```python
# break 语句：遇到时立即退出循环
while True:  # 无限循环
    name = input('Please type your name: ')
    if name == 'your name':
        break  # 立即退出循环

print('Thank you!')
```

```output
Please type your name: your name
Thank you!
```

## continue 语句

当程序执行到达 `continue` 语句时，程序执行立即跳回到循环的开始。

```python
# continue 语句：跳过循环迭代的其余部分并开始下一次迭代
while True:
    name = input('Who are you? ')
    if name != 'Joe':
        continue  # 跳到下一次迭代，不询问密码
    password = input('Password? (It is a fish.): ')
    if password == 'swordfish':
        break  # 密码正确时退出循环

print('Access granted.')
```

```output
Who are you? Charles
Who are you? Debora
Who are you? Joe
Password? (It is a fish.): swordfish
Access granted.
```

## For 循环

`for` 循环遍历 `list`、`tuple`、`dictionary`、`set` 或 `string`：

```python
# for 循环：遍历序列中的每个项
pets = ['Bella', 'Milo', 'Loki']
for pet in pets:  # 遍历列表中的每只宠物
    print(pet)  # 打印每只宠物的名字
```

```output
Bella
Milo
Loki
```

## range() 函数

`range()` 函数返回一个数字序列。它从 0 开始，以 1 递增，并在指定的数字之前停止：

```python
for i in range(5):
    print(f'Will stop at 5! or 4? ({i})')
```

```output
Will stop at 5! or 4? (0)
Will stop at 5! or 4? (1)
Will stop at 5! or 4? (2)
Will stop at 5! or 4? (3)
Will stop at 5! or 4? (4)
```

`range()` 函数也可以修改其 3 个默认参数。前两个是 `start` 和 `stop` 值，第三个是 `step` 参数。`step` 是每次迭代后变量增加的量。

```python
# range(start, stop, step)
for i in range(0, 10, 2):
   print(i)
```

```output
0
2
4
6
8
```

您甚至可以使用负数作为 step 参数，使 for 循环倒数而不是递增。

```python
for i in range(5, -1, -1):
    print(i)
```

```output
5
4
3
2
1
0
```

## For else 语句

这允许指定一个语句在循环完全执行时执行。仅在循环中可能发生 `break` 条件时才有用：

```python
for i in [1, 2, 3, 4, 5]:
   if i == 3:
       break
else:
   print("only executed when no item is equal to 3")
```

## 使用 sys.exit() 结束程序

`exit()` 函数允许退出 Python。

```python
import sys

while True:
    feedback = input('Type exit to exit: ')
    if feedback == 'exit':
        print(f'You typed {feedback}.')
        sys.exit()
```

```output
Type exit to exit: open
Type exit to exit: close
Type exit to exit: exit
You typed exit.
```

## 相关链接

- <router-link to="/cheatsheet/basics">基础知识</router-link>
- <router-link to="/cheatsheet/functions">函数</router-link>
- <router-link to="/cheatsheet/exception-handling">异常处理</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">列表和元组</router-link>
- <router-link to="/cheatsheet/sets">集合</router-link>
- <router-link to="/cheatsheet/dictionaries">字典</router-link>
- <router-link to="/cheatsheet/comprehensions">推导式</router-link>
