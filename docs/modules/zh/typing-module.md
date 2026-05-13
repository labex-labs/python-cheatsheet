---
title: "Python Typing 模块 - Python 速查表"
description: "`typing` 模块为函数参数、返回值和数据结构提供类型提示。"
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Typing 模块
</base-title>

`typing` 模块为函数参数、返回值和数据结构提供类型提示。

```python
from typing import TypedDict
```

类型提示不会改变 Python 的运行方式。它们只是帮助编辑器、静态检查工具和读者理解代码期望的值类型。

## 标注函数签名

```python
def greet(name: str) -> str:
    return f'Hello {name}'

print(greet('Ada'))
```

```output
Hello Ada
```

`name: str` 表示函数期望接收字符串。`-> str` 表示它应该返回字符串。

## 常见容器类型

可以使用类型提示来描述数据结构的形状。

```python
def average(values: list[float]) -> float:
    return sum(values) / len(values)

print(average([1.0, 2.0, 3.0]))
```

```output
2.0
```

`list[str]` 这种写法需要 Python 3.9 及以上版本。

## 可选值

当某个值可能缺失时，可以使用 `| None`。

```python
def find_user(user_id: int) -> str | None:
    if user_id == 1:
        return 'Ada'
    return None

print(find_user(1))
print(find_user(2))
```

```output
Ada
None
```

`X | Y` 这种联合类型语法需要 Python 3.10 及以上版本。

## TypedDict

`TypedDict` 用来描述键名固定的类字典对象。

```python
from typing import TypedDict

class User(TypedDict):
    name: str
    active: bool

user: User = {'name': 'Ada', 'active': True}
print(user['name'])
```

```output
Ada
```

## 类型别名

类型别名可以为更复杂的类型提供一个更易读的名字。

```python
Coordinates = tuple[float, float]

def show_location(point: Coordinates) -> str:
    return f'{point[0]}, {point[1]}'

print(show_location((12.5, 35.8)))
```

```output
12.5, 35.8
```

## 相关链接

- <router-link to="/cheatsheet/functions">速查表：函数</router-link>
- <router-link to="/cheatsheet/dictionaries">速查表：字典</router-link>
- <router-link to="/cheatsheet/dataclasses">速查表：数据类</router-link>
