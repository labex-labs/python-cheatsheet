---
title: 'Python 数据类 - Python 速查表'
description: '数据类是 Python 类，但更适合存储数据对象。此模块提供了一个装饰器和函数，用于自动向用户定义的类添加生成的特殊方法，如 __init__() 和 __repr__()。'
labUrl: 'https://labex.io/zh/labs/python-python-dataclasses-633652?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 数据类
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

`Dataclasses` 是 Python 类，但更适合存储数据对象。
此模块提供了一个装饰器和函数，用于自动向用户定义的类添加生成的特殊方法，例如 `__init__()` 和 `__repr__()`。

## 特性

1. 它们存储数据并代表某种数据类型。例如：一个数字。对于熟悉 ORM 的人来说，模型实例是一个数据对象。它代表一种特定类型的实体。它包含定义或表示该实体的属性。

2. 它们可以与相同类型的其他对象进行比较。例如：一个数字可以大于、小于或等于另一个数字。

Python 3.7 提供了一个装饰器 `dataclass`，用于将一个类转换为数据类。

```python
class Number:
    def __init__(self, val):
        self.val = val

obj = Number(2)
obj.val
```

输出：

```plaintext
2
```

使用数据类

```python
# Dataclass: 自动生成 __init__ 和 __repr__ 方法
from dataclasses import dataclass

@dataclass  # 装饰器将类转换为数据类
class Number:
    val: int  # 必须提供类型注解

obj = Number(2)  # 自动创建 __init__
obj.val
```

输出：

```plaintext
2
```

## 默认值

可以很容易地为数据类的字段添加默认值。

```python
# 带有默认值的数据类：带有默认值的字段必须出现在必需字段之后
@dataclass
class Product:
    name: str        # 必需字段
    count: int = 0   # 带有默认值的可选字段
    price: float = 0.0  # 带有默认值的可选字段

obj = Product("Python")  # 只需要 name，其他使用默认值
obj.name
```

输出：

```plaintext
Python
```

```python
obj.count
```

输出：

```plaintext
0
```

```python
obj.price
```

输出：

```plaintext
0.0
```

## 类型提示

在数据类中定义数据类型是强制性的。但是，如果您不想指定数据类型，请使用 `typing.Any`。

```python
from dataclasses import dataclass
from typing import Any

@dataclass
class WithoutExplicitTypes:
   name: Any
   value: Any = 42
```

## 相关链接

- <router-link to="/cheatsheet/oop-basics">OOP 基础</router-link>
- <router-link to="/cheatsheet/decorators">装饰器</router-link>
- <router-link to="/blog/python-data-types">Python 数据类型博客文章</router-link>
- <router-link to="/builtin/object">object()</router-link>
- <router-link to="/builtin/repr">repr()</router-link>
- <router-link to="/builtin/type">type()</router-link>
