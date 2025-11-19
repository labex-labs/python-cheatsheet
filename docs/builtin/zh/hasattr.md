---
title: 'Python hasattr() 内置函数 - Python 速查表'
description: '参数为一个对象和一个字符串。如果字符串是对象属性的名称，则返回 True；否则返回 False。（此功能通过调用 getattr(object, name) 并检查是否引发 AttributeError 来实现。）'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python hasattr() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#hasattr">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   参数是一个对象和一个字符串。如果该字符串是对象某个属性的名称，则结果为 True，否则为 False。（这是通过调用 <router-link to="/builtin/getattr">getattr(object, name)</router-link> 并检查它是否引发 AttributeError 来实现的。）
  </base-disclaimer-content>
</base-disclaimer>

## 简介

`hasattr()` 函数检查一个对象是否具有给定的属性。它接受对象和属性名称（作为字符串）作为参数，如果属性存在则返回 `True`，否则返回 `False`。

### 示例

```python
class Person:
    name = "John"
    age = 30

p = Person()

print(hasattr(p, 'name'))
print(hasattr(p, 'age'))
print(hasattr(p, 'email'))
```

```output
True
True
False
```

## 相关链接

- <router-link :to="'/builtin/getattr'">`getattr()`</router-link>
- <router-link :to="'/builtin/setattr'">`setattr()`</router-link>
- <router-link :to="'/builtin/delattr'">`delattr()`</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP 基础</router-link>
- <router-link :to="'/builtin/dir'">`dir()`</router-link>
