---
title: 'Python vars() 内置函数 - Python 速查表'
description: '返回模块、类、实例或任何具有 __dict__ 属性的对象的 __dict__ 属性。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python vars() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#vars">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    返回模块、类、实例或任何其他具有 __dict__ 属性的对象的 __dict__ 属性。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

`vars()` 函数返回对象的 `__dict__` 属性。该字典包含对象的**可写**属性。这是一种一次性查看对象所有属性的便捷方法。

如果不带参数调用 `vars()`，它的作用类似于 `locals()`，返回局部符号表的字典。

### 示例

**获取对象的属性：**

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

my_person = Person("Dwight", 35)
print(vars(my_person))
```

输出：

```plaintext
{'name': 'Dwight', 'age': 35}
```

**不带参数使用 `vars()`：**

```python
def my_function():
    x = 10
    print(vars())

my_function()
```

输出：

```plaintext
{'x': 10}
```

## 相关链接

- <router-link to="/cheatsheet/oop-basics">备忘单：OOP 基础</router-link>
- <router-link to="/cheatsheet/debugging">备忘单：调试</router-link>
- <router-link to="/cheatsheet/dictionaries">备忘单：字典</router-link>
- <router-link to="/builtin/dir">dir()</router-link>
- <router-link to="/builtin/object">object()</router-link>
- <router-link to="/builtin/globals">globals()</router-link>
- <router-link to="/builtin/locals">locals()</router-link>
