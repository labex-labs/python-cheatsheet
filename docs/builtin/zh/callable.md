---
title: 'Python callable() 内置函数 - Python 速查表'
description: '判断对象参数是否可调用。如果返回 True，调用仍可能失败；如果返回 False，调用对象将永远不会成功。类是可调用的（调用类会返回一个新实例）；如果实例的类具有 __call__() 方法，则实例是可调用的。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python callable() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#callable">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    如果对象参数似乎是可调用的，则返回 True，否则返回 False。如果返回 True，调用对象仍有可能失败，但如果返回 False，调用 object 将永远不会成功。请注意，类是可调用的（调用一个类会返回一个新实例）；如果其实例的类具有 `__call__()` 方法，则该实例是可调用的。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

在 Python 中，`callable()` 函数是一个内置函数，可用于确定一个对象是否是可调用的，即它是否可以像函数一样被调用。

如果传递给它的对象是可调用的，它返回 `True`，否则返回 `False`。例如，函数、方法、类、lambda 函数和生成器都是 Python 中可调用的对象。

以下是使用 `callable()` 函数的示例：

```python
def my_function():
    pass

class MyClass:
    def __call__(self):
        pass

x = 5
y = my_function
z = MyClass()
a = lambda: None

print(callable(x))
print(callable(y))
print(callable(z))
print(callable(a))
```

```output
False
True
True
True
```

在上面的示例中，`my_function` 是一个函数，它是可调用的；`MyClass` 是一个类，它也是可调用的，因为它有一个 `__call__` 方法；`z` 是 `MyClass` 类的实例，它也是可调用的，因为它有一个 `__call__` 方法；`a` 是一个 lambda 函数，它是可调用的。

在需要确定一个对象是否可以像函数一样被调用时，例如在处理回调或其他类型的函数指针时，`callable()` 函数会很有用。

## 相关链接

- <router-link :to="'/builtin/hasattr'">hasattr()</router-link>
- <router-link :to="'/cheatsheet/functions'">函数</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP 基础</router-link>
- <router-link :to="'/builtin/getattr'">getattr()</router-link>
- <router-link :to="'/builtin/isinstance'">isinstance()</router-link>
