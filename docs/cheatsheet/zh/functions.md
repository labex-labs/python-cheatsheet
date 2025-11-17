---
title: 'Python 函数 - Python 速查表'
description: '在 Python 中，函数是一段组织好的代码块，用于执行单个任务。'
labUrl: 'https://labex.io/zh/labs/python-python-functions-633658?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 函数
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://en.wikiversity.org/wiki/Programming_Fundamentals/Functions">编程函数</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    函数是一段组织好的代码块，用于执行单个任务。它们为您的应用程序提供了更好的模块化和可重用性。
  </base-disclaimer-content>
</base-disclaimer>

## 函数参数

函数可以接受 `参数` 和 `返回值`:

在下面的示例中，函数 **say_hello** 接收参数 "name" 并打印问候语：

```python
# 定义一个接受一个参数的函数
def say_hello(name):
   print(f'Hello {name}')

# 使用字符串参数调用函数
say_hello('Carlos')
```

输出：

```plaintext
Hello Carlos
```

```python
say_hello('Wanda')
```

输出：

```plaintext
Hello Wanda
```

```python
say_hello('Rose')
```

输出：

```plaintext
Hello Rose
```

## 关键字参数

为了提高代码的可读性，我们应该尽可能明确。我们可以通过使用 `关键字参数` 在函数中实现这一点：

```python
# 带有多个参数的函数
def say_hi(name, greeting):
   print(f"{greeting} {name}")

# 位置参数：顺序很重要
say_hi('John', 'Hello')
```

输出：

```plaintext
Hello John
```

```python
# 关键字参数：顺序不重要，更具可读性
say_hi(name='Anna', greeting='Hi')
```

输出：

```plaintext
Hi Anna
```

## 返回值

使用 `def` 语句创建函数时，您可以使用 `return` 语句指定返回值。返回语句包括以下内容：

- `return` 关键字。

- 函数应返回的值或表达式。

```python
# 使用 return 语句返回一个值的函数
def sum_two_numbers(number_1, number_2):
   return number_1 + number_2

# 调用函数并存储返回值
result = sum_two_numbers(7, 8)
print(result)
```

输出：

```plaintext
15
```

## 局部和全局作用域

- 全局作用域中的代码不能使用任何局部变量。

- 但是，局部作用域可以访问全局变量。

- 函数局部作用域中的代码不能使用任何其他局部作用域中的变量。

- 您可以使用相同的名称表示不同的变量，前提是它们位于不同的作用域中。也就是说，可以有一个名为 spam 的局部变量和一个也名为 spam 的全局变量。

```python
# 全局变量：随处可访问
global_variable = 'I am available everywhere'

def some_function():
    print(global_variable)  # 可以访问全局变量
    # 局部变量：仅在此函数内可用
    local_variable = "only available within this function"
    print(local_variable)

# 这将引发 NameError：local_variable 在全局作用域中不存在
print(local_variable)
```

输出：

```plaintext
Traceback (most recent call last):
  File "<stdin>", line 10, in <module>
NameError: name 'local_variable' is not defined
```

## global 语句

如果您需要在函数内部修改全局变量，请使用 global 语句：

```python
# 使用 'global' 关键字在函数内部修改全局变量
def spam():
    global eggs  # 声明我们将修改全局变量
    eggs = 'spam'  # 这会更改全局变量

eggs = 'global'
spam()  # 函数修改全局变量
print(eggs)  # 打印 'spam'，而不是 'global'
```

输出：

```plaintext
spam
```

有四个规则可以判断一个变量是在局部作用域还是全局作用域：

1. 如果一个变量在全局作用域中使用（即在所有函数之外），那么它总是全局变量。

1. 如果函数中有该变量的 global 语句，那么它是全局变量。

1. 否则，如果在函数中对该变量进行了赋值语句，那么它是局部变量。

1. 但如果该变量没有在赋值语句中使用，那么它是全局变量。

## Lambda 函数

在 Python 中，lambda 函数是单行、匿名函数，可以有任意数量的参数，但只能有一个表达式。

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/ast.html?highlight=lambda#function-and-class-definitions">Python 3 教程</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    lambda 是一个最小的函数定义，可以在表达式中使用。与 FunctionDef 不同，body 包含单个节点。
  </base-disclaimer-content>
</base-disclaimer>

<base-warning>
  <base-warning-title>
    单行表达式
  </base-warning-title>
  <base-warning-content>
    Lambda 函数只能评估一个表达式，例如单行代码。
  </base-warning-content>
</base-warning>

这个函数：

```python
# 常规函数定义
def add(x, y):
    return x + y

add(5, 3)
```

输出：

```plaintext
8
```

等同于 _lambda_ 函数：

```python
# Lambda 函数：单行定义的匿名函数
# 语法：lambda 参数：表达式
add = lambda x, y: x + y
add(5, 3)
```

输出：

```plaintext
8
```

与常规的嵌套函数一样，lambda 也可以作为词法闭包：

```python
# Lambda 闭包：捕获外部作用域变量的 lambda 函数
def make_adder(n):
    return lambda x: x + n  # Lambda 捕获外部函数的 'n'

# 创建添加不同数量的函数
plus_3 = make_adder(3)  # 返回一个加 3 的 lambda
plus_5 = make_adder(5)  # 返回一个加 5 的 lambda

plus_3(4)  # 返回 4 + 3 = 7
```

输出：

```plaintext
7
```

```python
plus_5(4)
```

输出：

```plaintext
9
```

## 相关链接

- <router-link to="/blog/python-easy-args-kwargs">\*args 和 \*\*kwargs 解释</router-link>
- <router-link to="/cheatsheet/args-and-kwargs">Args 和 Kwargs</router-link>
- <router-link to="/cheatsheet/decorators">装饰器</router-link>
- <router-link to="/cheatsheet/control-flow">控制流</router-link>
- <router-link to="/cheatsheet/basics">基础知识</router-link>
- <router-link to="/builtin">内置函数</router-link>
