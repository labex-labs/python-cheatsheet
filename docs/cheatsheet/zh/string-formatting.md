---
title: 'Python 字符串格式化 - Python 速查表'
description: '如果您使用 Python 3.6+，推荐使用字符串 f-string 来格式化字符串。'
labUrl: 'https://labex.io/zh/labs/python-python-string-formatting-633667?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 字符串格式化
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a href="https://docs.python.org/3/library/stdtypes.html?highlight=sprintf#printf-style-string-formatting">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    这里描述的格式化操作（<b>% 运算符</b>）表现出各种怪癖，导致许多常见错误 [...]。使用较新的 <a href="#formatted-string-literals-or-f-strings">格式化字符串字面量</a> [...] 有助于避免这些错误。这些替代方案还为文本格式化提供了更强大、更灵活和可扩展的方法。
  </base-disclaimer-content>
</base-disclaimer>

## % 运算符

<base-warning>
  <base-warning-title>
    首选字符串字面量
  </base-warning-title>
  <base-warning-content>
    对于新代码，强烈建议使用 <a href="#strformat">str.format</a> 或 <a href="#formatted-string-literals-or-f-strings">格式化字符串字面量</a> (Python 3.6+) 而不是 <code>%</code> 运算符。
  </base-warning-content>
</base-warning>

```python
# % 运算符：旧式字符串格式化（新代码不推荐）
name = 'Pete'
'Hello %s' % name  # %s = 字符串占位符
```

输出：

```plaintext
"Hello Pete"
```

我们可以使用 `%d` 格式说明符将 int 值转换为字符串：

```python
num = 5
'I have %d apples' % num
```

输出：

```plaintext
"I have 5 apples"
```

## str.format

Python 3 引入了一种新的字符串格式化方式，后来向后移植到 Python 2.7。这使得字符串格式化的语法更加规范。

```python
# str.format() 方法：现代字符串格式化 (Python 2.7+)
name = 'John'
age = 20

"Hello I'm {}, my age is {}".format(name, age)  # {} = 占位符
```

输出：

```plaintext
"Hello I'm John, my age is 20"
```

```python
"Hello I'm {0}, my age is {1}".format(name, age)
```

输出：

```plaintext
"Hello I'm John, my age is 20"
```

## 格式化字符串字面量或 f-Strings

如果使用 Python 3.6+，字符串 `f-Strings` 是格式化字符串的推荐方法。

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a href="https://docs.python.org/3/reference/lexical_analysis.html#f-strings">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    格式化字符串字面量或 f 字符串是以 <code>f</code> 或 <code>F</code> 为前缀的字符串字面量。这些字符串可能包含替换字段，即由花括号 {} 分隔的表达式。虽然其他字符串字面量总是具有恒定值，但格式化字符串实际上是在运行时求值的表达式。
  </base-disclaimer-content>
</base-disclaimer>

```python
# f-string：格式化字符串的推荐方法 (Python 3.6+)
name = 'Elizabeth'
f'Hello {name}!'  # f 前缀允许在 {} 中使用表达式
```

输出：

```plaintext
'Hello Elizabeth!'
```

甚至可以在其中进行内联算术运算：

```python
# f-strings 支持表达式：可以在 {} 中包含计算
a = 5
b = 10
f'Five plus ten is {a + b} and not {2 * (a + b)}.'  # 评估表达式
```

输出：

```plaintext
'Five plus ten is 15 and not 30.'
```

### 多行 f-Strings

```python
name = 'Robert'
messages = 12
(
f'Hi, {name}. '
f'You have {messages} unread messages'
)
```

输出：

```plaintext
'Hi, Robert. You have 12 unread messages'
```

### `=` 说明符

这将打印表达式及其值：

```python
# = 说明符：打印变量名和值 (Python 3.8+)
from datetime import datetime
now = datetime.now().strftime("%b/%d/%Y - %H:%M:%S")
f'date and time: {now=}'  # 打印 "now='Nov/14/2022 - 20:50:01'"
```

输出：

```plaintext
"date and time: now='Nov/14/2022 - 20:50:01'"
```

### 添加空格或字符

```python
name = 'Robert'
f"{name.upper() = :-^20}"
```

输出：

```plaintext
'name.upper() = -------ROBERT-------'
```

```python
f"{name.upper() = :^20}"
```

输出：

```plaintext
'name.upper() =        ROBERT       '
```

```python
f"{name.upper() = :20}"
```

输出：

```plaintext
'name.upper() = ROBERT              '
```

## 格式化数字

添加千位分隔符

```python
a = 10000000
f"{a:,}"
```

输出：

```plaintext
'10,000,000'
```

四舍五入

```python
a = 3.1415926
f"{a:.2f}"
```

输出：

```plaintext
'3.14'
```

显示为百分比

```python
a = 0.816562
f"{a:.2%}"
```

输出：

```plaintext
'81.66%'
```

### 数字格式化表

| 数字       | 格式    | 输出      | 描述                                  |
| ---------- | ------- | --------- | ------------------------------------- |
| 3.1415926  | {:.2f}  | 3.14      | 格式化浮点数，保留 2 位小数           |
| 3.1415926  | {:+.2f} | +3.14     | 格式化浮点数，保留 2 位小数并显示符号 |
| -1         | {:+.2f} | -1.00     | 格式化浮点数，保留 2 位小数并显示符号 |
| 2.71828    | {:.0f}  | 3         | 格式化浮点数，不保留小数位            |
| 4          | {:0>2d} | 04        | 用零填充数字（左填充，宽度为 2）      |
| 4          | {:x<4d} | 4xxx      | 用 x 填充数字（右填充，宽度为 4）     |
| 10         | {:x<4d} | 10xx      | 用 x 填充数字（右填充，宽度为 4）     |
| 1000000    | {:,}    | 1,000,000 | 带逗号分隔符的数字格式                |
| 0.35       | {:.2%}  | 35.00%    | 格式化百分比                          |
| 1000000000 | {:.2e}  | 1.00e+09  | 指数表示法                            |
| 11         | {:11d}  | 11        | 右对齐（默认，宽度为 10）             |
| 11         | {:<11d} | 11        | 左对齐（宽度为 10）                   |
| 11         | {:^11d} | 11        | 居中对齐（宽度为 10）                 |

## 模板字符串

一种更简单、功能较弱的机制，但在处理用户生成的字符串时推荐使用。由于其复杂性较低，模板字符串是更安全的选择。

```python
from string import Template
name = 'Elizabeth'
t = Template('Hey $name!')
t.substitute(name=name)
```

输出：

```plaintext
'Hey Elizabeth!'
```

## 相关链接

- <router-link to="/cheatsheet/manipulating-strings">操作字符串</router-link>
- <router-link to="/blog/python-data-types">Python 数据类型博客文章</router-link>
- <router-link to="/builtin/format">format()</router-link>
- <router-link to="/builtin/print">print()</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/repr">repr()</router-link>
- <router-link to="/builtin/ascii">ascii()</router-link>
