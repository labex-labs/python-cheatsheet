---
title: 'Python super() 内置函数 - Python 速查表'
description: '返回一个代理对象，将方法调用委托给类型的父类或同级类。这对于访问已被类覆盖的继承方法非常有用。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python super() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#super">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    返回一个代理对象，该对象将方法调用委托给类型（type）的父类或同级类。这对于访问被类覆盖的继承方法非常有用。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

`super()` 函数用于调用父类的方法。这在继承中特别有用，当你希望扩展父类方法的功能而不是完全覆盖它时。

### 示例

```python
class Parent:
    def greet(self):
        print("Hello from Parent")

class Child(Parent):
    def greet(self):
        # Call the parent's greet method
        super().greet()
        print("Hello from Child")

c = Child()
c.greet()
```

输出：

```plaintext
Hello from Parent
Hello from Child
```

## 相关链接

- <router-link to="/cheatsheet/oop-basics">备忘单：OOP 基础</router-link>
- <router-link to="/cheatsheet/decorators">备忘单：装饰器</router-link>
- <router-link to="/cheatsheet/functions">备忘单：函数</router-link>
- <router-link to="/builtin/object">object()</router-link>
- <router-link to="/builtin/isinstance">isinstance()</router-link>
- <router-link to="/builtin/issubclass">issubclass()</router-link>
- <router-link to="/builtin/classmethod">classmethod()</router-link>
- <router-link to="/builtin/staticmethod">staticmethod()</router-link>
- <router-link to="/builtin/property">property()</router-link>
