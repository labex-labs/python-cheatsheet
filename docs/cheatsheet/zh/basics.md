---
title: 'Python 基础 - Python 速查表'
description: 'Python 基础知识。我们都需要一个起点，不如从这里开始吧。'
labUrl: 'https://labex.io/zh/labs/python-python-basics-633647?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 基础
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

我们都需要从某个地方开始，那么从这里开始怎么样呢。

<base-disclaimer>
  <base-disclaimer-title>
    源自 <a href="https://docs.python.org/3/tutorial/index.html">Python 3 教程</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Python 是一种易于学习、功能强大的编程语言 [...] Python 优雅的语法和动态类型，以及其解释器的特性，使其成为脚本编写和快速应用程序开发的理想语言。
  </base-disclaimer-content>
</base-disclaimer>

## 数学运算符

从**最高**到**最低**的优先级：

| 运算符 | 操作      | 示例            |
| :----- | :-------- | :-------------- |
| \*\*   | 幂运算    | `2 ** 3 = 8`    |
| %      | 取模/余数 | `22 % 8 = 6`    |
| //     | 整除      | `22 // 8 = 2`   |
| /      | 除法      | `22 / 8 = 2.75` |
| \*     | 乘法      | `3 * 3 = 9`     |
| -      | 减法      | `5 - 2 = 3`     |
| +      | 加法      | `2 + 2 = 4`     |

表达式示例：

```python
# 乘法优先级高于加法
# 所以这评估为：2 + (3 * 6) = 2 + 18 = 20
2 + 3 * 6
```

输出：

```plaintext
20
```

```python
# 括号覆盖运算符优先级
# 这评估为：5 * 6 = 30
(2 + 3) * 6
```

输出：

```plaintext
30
```

```python
2 ** 8
```

输出：

```plaintext
256
```

```python
23 // 7
```

输出：

```plaintext
3
```

```python
23 % 7
```

输出：

```plaintext
2
```

```python
(5 - 1) * ((7 + 1) / (3 - 1))
```

输出：

```plaintext
16.0
```

## 增强赋值运算符

| 运算符      | 等效于           |
| :---------- | :--------------- |
| `var += 1`  | `var = var + 1`  |
| `var -= 1`  | `var = var - 1`  |
| `var *= 1`  | `var = var * 1`  |
| `var /= 1`  | `var = var / 1`  |
| `var //= 1` | `var = var // 1` |
| `var %= 1`  | `var = var % 1`  |
| `var **= 1` | `var = var ** 1` |

示例：

```python
# 增强赋值：等同于 greeting = greeting + ' world!'
greeting = 'Hello'
greeting += ' world!'
greeting
```

输出：

```plaintext
'Hello world!'
```

```python
# 数字加 1
number = 1
number += 1
number
```

输出：

```plaintext
2
```

```python
# 复制列表元素：等同于 my_list = my_list * 3
my_list = ['item']
my_list *= 3
my_list
```

输出：

```plaintext
['item', 'item', 'item']
```

## 海象运算符 (Walrus Operator)

海象运算符允许在表达式中赋值变量，同时返回该变量的值。

示例：

```python
# 海象运算符在一个表达式中赋值并返回一个值
# my_var 被赋值为 "Hello World!" 然后被打印
print(my_var:="Hello World!")
```

输出：

```plaintext
Hello World!
```

```python
my_var="Yes"
print(my_var)
```

输出：

```plaintext
Yes
```

```python
print(my_var:="Hello")
```

输出：

```plaintext
Hello
```

海象运算符，或**赋值表达式运算符**，首次通过 [PEP 572](https://peps.python.org/pep-0572/) 引入于 2018 年，随后于 2019 年 10 月随 **Python 3.8** 正式发布。

<base-disclaimer>
  <base-disclaimer-title>
    语法语义与示例
  </base-disclaimer-title>
  <base-disclaimer-content>
  <a href="https://peps.python.org/pep-0572/" target="_blank">PEP 572</a> 为海象运算符提供了语法、语义和示例。
  </base-disclaimer-content>
</base-disclaimer>

## 数据类型

Python 有九种核心内置数据类型，几乎涵盖了您需要的所有内容：

| 数据类型                                                   | 示例                                     | 描述                 |
| :--------------------------------------------------------- | :--------------------------------------- | :------------------- |
| **数字**                                                   |                                          |                      |
| <router-link to='/builtin/int'>`int`</router-link>         | `-2, -1, 0, 1, 2, 3, 4, 5`               | 整数                 |
| <router-link to='/builtin/float'>`float`</router-link>     | `-1.25, -1.0, -0.5, 0.0, 0.5, 1.0, 1.25` | 带小数点的数字       |
| <router-link to='/builtin/complex'>`complex`</router-link> | `2+3j, complex(1, 4)`                    | 具有实部和虚部的数字 |
| **文本**                                                   |                                          |                      |
| <router-link to='/builtin/str'>`str`</router-link>         | `'a', 'Hello!', "Python"`                | 文本和字符           |
| **布尔值**                                                 |                                          |                      |
| <router-link to='/builtin/bool'>`bool`</router-link>       | `True, False`                            | 真或假的值           |
| **None**                                                   |                                          |                      |
| `NoneType`                                                 | `None`                                   | 表示“无值”或“空”     |
| **集合**                                                   |                                          |                      |
| <router-link to='/builtin/list'>`list`</router-link>       | `[1, 2, 3], ['a', 'b', 'c']`             | 有序、可变集合       |
| <router-link to='/builtin/dict'>`dict`</router-link>       | `{'name': 'Alice', 'age': 30}`           | 键值对               |
| <router-link to='/builtin/tuple'>`tuple`</router-link>     | `(1, 2, 3), ('a', 'b')`                  | 有序、不可变集合     |
| <router-link to='/builtin/set'>`set`</router-link>         | `{1, 2, 3}, {'a', 'b', 'c'}`             | 无序的唯一项集合     |

### 快速示例

```python
# 数字
age = 25                    # int (整数)
price = 19.99              # float (浮点数)
coordinate = 2 + 3j        # complex (复数)

# 文本
name = "Alice"             # str (字符串)

# 布尔值
is_student = True          # bool (布尔值)

# None
result = None              # NoneType (空类型)

# 集合
scores = [85, 92, 78]      # list (列表)
person = {'name': 'Bob', 'age': 30}  # dict (字典)
coordinates = (10, 20)     # tuple (元组)
unique_ids = {1, 2, 3}     # set (集合)
```

有关包含视觉示例和每种类型使用时机的详细解释，请参阅：<router-link to="/blog/python-data-types">Python 数据类型：初学者的视觉指南</router-link>。

## 拼接和复制

字符串拼接：

```python
# 字符串拼接：相邻的字符串会自动连接
'Alice' 'Bob'
```

输出：

```plaintext
'AliceBob'
```

字符串复制：

```python
# 字符串复制：将字符串重复多次
'Alice' * 5
```

输出：

```plaintext
'AliceAliceAliceAliceAlice'
```

## 变量

只要遵循以下规则，变量名可以任意命名：

1. 只能是一个单词。

```python
# 错误
my variable = 'Hello'

# 正确
var = 'Hello'
```

2. 只能使用字母、数字和下划线 (`_`) 字符。

```python
# 错误
%$@variable = 'Hello'

# 正确
my_var = 'Hello'

# 正确
my_var_2 = 'Hello'
```

3. 不能以数字开头。

```python
# 这将不起作用
23_var = 'hello'
```

4. 变量名以下划线 (`_`) 开头被认为是“不常用”的。

```python
# _spam 在代码中不应再次使用
_spam = 'Hello'
```

## 注释

行内注释：

```python
# 这是一个注释
```

多行注释：

```python
# 这是一个
# 多行注释
```

带注释的代码：

```python
a = 1  # 初始化
```

请注意注释前有两个空格。

函数文档字符串：

```python
def foo():
    """
    这是一个函数文档字符串
    你也可以使用：
    ''' 函数文档字符串 '''
    """
```

## print() 函数

`print()` 函数会输出它所接收到的参数的值。[...] 它处理多个参数、浮点数和字符串。字符串打印时没有引号，并且项之间会插入一个空格，因此您可以很好地格式化输出：

```python
print('Hello world!')
```

输出：

```plaintext
Hello world!
```

```python
a = 1
print('Hello world!', a)
```

输出：

```plaintext
Hello world! 1
```

### end 关键字

可以使用关键字参数 `end` 来避免输出后的换行符，或用不同的字符串结束输出：

```python
# 使用 end 参数来改变每个 print 语句之后的内容
phrase = ['printed', 'with', 'a', 'dash', 'in', 'between']
for word in phrase:
    print(word, end='-')  # 使用 '-' 代替换行符
```

输出：

```plaintext
printed-with-a-dash-in-between-
```

### sep 关键字

如果提供了多个参数，关键字 `sep` 指定了对象之间的分隔方式：

```python
# 使用 sep 参数指定多个参数之间的分隔符
print('cats', 'dogs', 'mice', sep=',')  # 逗号分隔的输出
```

输出：

```plaintext
cats,dogs,mice
```

## input() 函数

此函数从用户处获取输入并将其转换为字符串：

```python
# input() 读取用户输入并将其作为字符串返回
print('What is your name?')   # 询问他们的名字
my_name = input()  # 等待用户输入并按 Enter 键
print('Hi, {}'.format(my_name))
```

输出：

```plaintext
What is your name?
Martha
Hi, Martha
```

`input()` 也可以在不使用 `print()` 的情况下设置默认消息：

```python
my_name = input('What is your name? ')  # 提示信息和读取在一次调用中
print('Hi, {}'.format(my_name))
```

输出：

```plaintext
What is your name? Martha
Hi, Martha
```

也可以使用格式化字符串来避免使用 .format：

```python
# input() 可以直接显示提示信息
my_name = input('What is your name? ')  # 提示和读取合二为一
print(f'Hi, {my_name}')  # f-string 用于字符串格式化
```

输出：

```plaintext
What is your name? Martha
Hi, Martha
```

## len() 函数

评估字符串、列表、字典等的字符数或项目数的整数值：

```python
# len() 返回字符串中的字符数
len('hello')  # 返回 5
```

输出：

```plaintext
5
```

```python
# len() 返回列表中项目的数量
len(['cat', 3, 'dog'])  # 返回 3 (三个项目)
```

输出：

```plaintext
3
```

<base-warning>
  <base-warning-title>空值测试</base-warning-title>
  <base-warning-content>
    对字符串、列表、字典等的空值测试不应使用
    <code>len</code>，而应优先使用直接的布尔值评估。
  </base-warning-content>
</base-warning>

空值测试示例：

```python
a = [1, 2, 3]

# 错误：不必要的 len() 检查
if len(a) > 0:  # 评估为 True
    print("the list is not empty!")
```

输出：

```plaintext
the list is not empty!
```

```python
# 正确：直接布尔值评估 (Pythonic 方式)
if a:  # 如果列表不为空，则评估为 True
    print("the list is not empty!")
```

输出：

```plaintext
the list is not empty!
```

## str(), int(), 和 float() 函数

这些函数允许您更改变量的类型。例如，您可以将 `整数` 或 `浮点数` 转换为 `字符串`：

```python
# 整数转字符串
str(29)  # 返回 '29'
```

输出：

```plaintext
'29'
```

```python
str(-3.14)
```

输出：

```plaintext
'-3.14'
```

或者从 `字符串` 转换为 `整数` 或 `浮点数`：

```python
# 字符串转整数
int('11')  # 返回 11
```

输出：

```plaintext
11
```

```python
# 字符串转浮点数
float('3.14')  # 返回 3.14
```

输出：

```plaintext
3.14
```

## 相关链接

- <router-link to="/blog/python-data-types">Python 数据类型：初学者的视觉指南</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">Python 推导式分步指南</router-link>
- <router-link to="/cheatsheet/control-flow">控制流</router-link>
- <router-link to="/cheatsheet/functions">函数</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">列表和元组</router-link>
- <router-link to="/cheatsheet/dictionaries">字典</router-link>
- <router-link to="/cheatsheet/sets">集合</router-link>
- <router-link to="/cheatsheet/string-formatting">字符串格式化</router-link>
