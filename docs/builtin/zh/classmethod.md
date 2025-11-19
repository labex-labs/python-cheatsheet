---
title: 'Python 内置函数 classmethod() - Python 速查表'
description: '将方法转换为类方法。类方法接收类作为隐式的第一个参数，就像实例方法接收实例一样。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python classmethod() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#classmethod">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   将一个方法转换为一个类方法。类方法接收类作为隐式的第一个参数，就像实例方法接收实例一样。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

`classmethod` 是一个绑定到类而不是类实例的方法。它将类本身作为其第一个参数，通常命名为 `cls`。这与接收实例作为第一个参数（`self`）的常规实例方法形成对比。

它们通常用于以特定方式创建类实例的工厂方法。

## 示例

这是一个常见的用例：创建一个可以从不同数据格式（如字典）实例化类的工厂方法。

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    @classmethod
    def from_dict(cls, data):
        # 这是一个工厂方法，从字典创建 Person 实例
        return cls(data['name'], data['age'])

    def display(self):
        print(f"Name: {self.name}, Age: {self.age}")

# 新人员的数据
person_data = {'name': 'John', 'age': 30}

# 使用类方法创建 Person 实例
p = Person.from_dict(person_data)

p.display()
```

```output
Name: John, Age: 30
```

## 相关链接

- <router-link to="/cheatsheet/oop-basics">Cheatsheet: OOP 基础</router-link>
- <router-link to="/cheatsheet/decorators">Cheatsheet: 装饰器</router-link>
- <router-link to="/cheatsheet/functions">Cheatsheet: 函数</router-link>
- <router-link to="/builtin/staticmethod">staticmethod()</router-link>
- <router-link to="/builtin/property">property()</router-link>
- <router-link to="/builtin/object">object()</router-link>
