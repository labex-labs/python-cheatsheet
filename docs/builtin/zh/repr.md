---
title: 'Python repr() 内置函数 - Python 速查表'
description: '返回一个包含对象可打印表示形式的字符串。对于许多类型，此函数会尝试返回一个字符串，当该字符串传递给 eval() 时会产生具有相同值的对象；否则，该表示形式是一个用尖括号括起来的字符串，其中包含对象的类型名称以及通常包括对象名称和地址的附加信息。类可以通过定义 __repr__() 方法来控制此函数对其实例的返回内容。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python repr() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#repr">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   返回一个包含对象可打印表示形式的字符串。对于许多类型，此函数会尝试返回一个字符串，当它被传递给 eval() 时，会生成一个具有相同值的对象；否则，该表示形式是一个用尖括号括起来的字符串，其中包含对象的类型名称以及通常包括对象名称和地址的其他信息。类可以通过定义 __repr__() 方法来控制此函数对其实例返回的内容。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

`repr()` 函数返回一个包含对象可打印表示形式的字符串。`repr()` 的目标是明确无歧义。对于许多类型，`repr()` 返回的字符串可以通过 <router-link to="/builtin/eval">eval()</router-link> 执行以创建相同的对象。

这与旨在供人类阅读的 <router-link to="/builtin/str">str()</router-link> 不同。

### 示例

```python
import datetime

# 对于字符串，repr() 会添加引号
print(repr("hello"))

# 对于 datetime 对象，它是明确无歧义的
now = datetime.datetime.now()
print(repr(now))

# 你可以为自己的类定义 __repr__
class Person:
    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return f"Person(name='{self.name}')"

p = Person("John")
print(repr(p))
```

输出：

```plaintext
'hello'
datetime.datetime(2023, 10, 27, 10, 0, 0, 123456)
Person(name='John')
```

## 相关链接

- <router-link to="/cheatsheet/oop-basics">备忘单：OOP 基础</router-link>
- <router-link to="/cheatsheet/debugging">备忘单：调试</router-link>
- <router-link to="/cheatsheet/string-formatting">备忘单：字符串格式化</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/ascii">ascii()</router-link>
- <router-link to="/builtin/eval">eval()</router-link>
- <router-link to="/builtin/format">format()</router-link>
