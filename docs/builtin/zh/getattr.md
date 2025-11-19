---
title: 'Python getattr() 内置函数 - Python 速查表'
description: '返回对象命名属性的值。name 必须是字符串。如果该字符串是对象某个属性的名称，则结果为该属性的值。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python getattr() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#getattr">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   返回对象命名属性的值。name 必须是一个字符串。如果该字符串是对象某个属性的名称，则结果是该属性的值。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

Python 中的 `getattr()` 函数是一个内置函数，它允许你通过字符串形式提供的名称来访问对象的属性。这对于动态编程来说是一个强大的特性，因为它使你能够在属性名称直到运行时才确定的情况下检索该属性。你还可以提供一个默认值，以便在属性不存在时返回，这有助于避免错误。

## 语法

```python
getattr(object, name)
```

或

```python
getattr(object, name, default)
```

-`object`: 要访问其属性的对象。

-`name`: 要检索的属性的名称。

-`default`: (可选) 如果找不到属性时要返回的值。如果未提供，则返回 `None`。

## 示例

```python
class Example:
    attribute = "Hello, World!"

# 创建类的一个实例
obj = Example()

# 使用 getattr 访问属性
value = getattr(obj, 'attribute', 'Nothing found')

print(value)
```

```output
Hello, World!
```

注意：如果 'attribute' 不存在，则会打印 'Nothing found'。

## 相关链接

- <router-link :to="'/builtin/hasattr'">`hasattr()`</router-link>
- <router-link :to="'/builtin/delattr'">`delattr()`</router-link>
- <router-link :to="'/builtin/setattr'">`setattr()`</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP 基础</router-link>
- <router-link :to="'/builtin/dir'">`dir()`</router-link>
