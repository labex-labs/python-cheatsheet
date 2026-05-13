---
title: Python re 模块 - Python 速查表
description: `re` 模块可以使用正则表达式搜索、匹配、拆分和替换文本。
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python re 模块
</base-title>

`re` 模块可以使用正则表达式来搜索、匹配、拆分和替换文本。

```python
import re
```

正则表达式是一种用于描述文本模式的语法。请使用原始字符串，例如 `r'\d+'`，这样反斜杠才能正确传给正则引擎。

## search()

`search` 会在字符串中的任意位置查找第一个匹配项。

```python
import re

match = re.search(r'\d+', 'Order #12345 shipped')
print(match.group())
```

```output
12345
```

## findall()

`findall` 会返回所有不重叠的匹配结果。

```python
import re

emails = re.findall(r'[\w.-]+@[\w.-]+', 'a@example.com b@example.com')
print(emails)
```

```output
['a@example.com', 'b@example.com']
```

## sub()

`sub` 会替换匹配到的文本。

```python
import re

message = re.sub(r'\s+', ' ', 'too    many   spaces')
print(message)
```

```output
too many spaces
```

## 编译模式

当你需要重复使用同一个表达式时，预编译模式会更方便。

```python
import re

pattern = re.compile(r'^python', re.IGNORECASE)
print(bool(pattern.match('Python Cheatsheet')))
```

```output
True
```

## 捕获组

圆括号可以捕获匹配结果中的一部分。

```python
import re

match = re.search(r'(\w+)=(\d+)', 'count=42')
print(match.group(1))
print(match.group(2))
```

```output
count
42
```

## 处理未匹配到的情况

在调用 `group()` 之前，务必先检查是否存在匹配结果。

```python
import re

match = re.search(r'\d+', 'no number here')
if match:
    print(match.group())
else:
    print('No match')
```

```output
No match
```

## 相关链接

- <router-link to="/cheatsheet/regular-expressions">速查表：正则表达式</router-link>
- <router-link to="/cheatsheet/manipulating-strings">速查表：字符串处理</router-link>
- <router-link to="/builtin/str">str()</router-link>
