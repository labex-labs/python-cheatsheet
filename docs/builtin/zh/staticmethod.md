---
title: 'Python staticmethod() 内置函数 - Python 速查表'
description: '将方法转换为静态方法。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python staticmethod() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#staticmethod">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    将一个方法转换为静态方法。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

`@staticmethod` 装饰器将一个方法转换为静态方法，使其属于一个类，但不会接收类或实例作为第一个参数。这对于创建与类有逻辑关联但又不依赖于类或实例状态的工具函数非常有用。

静态方法可以对类本身调用，也可以对实例调用。

### 示例

以下是定义和调用静态方法的方式：

```python
class MathHelper:
    @staticmethod
    def add(x, y):
        return x + y

# 在类上调用
result1 = MathHelper.add(5, 3)
print(result1)

# 在实例上调用
helper = MathHelper()
result2 = helper.add(10, 20)
print(result2)
```

输出：

```plaintext
8
30
```

静态方法无法访问类 (`cls`) 或实例 (`self`)。它本质上是一个在类中进行命名空间的常规函数。

## 相关链接

- <router-link to="/cheatsheet/oop-basics">备忘单：OOP 基础</router-link>
- <router-link to="/cheatsheet/decorators">备忘单：装饰器</router-link>
- <router-link to="/cheatsheet/functions">备忘单：函数</router-link>
- <router-link to="/builtin/classmethod">classmethod()</router-link>
- <router-link to="/builtin/property">property()</router-link>
