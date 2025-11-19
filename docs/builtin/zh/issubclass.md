---
title: 'Python issubclass() 内置函数 - Python 速查表'
description: '如果类是 classinfo 的子类（直接、间接或虚拟），则返回 True。类被视为自身的子类。classinfo 可以是类对象的元组（或递归地，其他此类元组）或联合类型，在这种情况下，如果类是 classinfo 中任何条目的子类，则返回 True。在任何其他情况下，将引发 TypeError 异常。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python issubclass() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#issubclass">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   如果 class 是 classinfo 的子类（直接、间接或虚拟），则返回 True。类被认为是其自身的子类。classinfo 可以是类对象的元组（或递归地，其他此类元组）或 Union Type，在这种情况下，如果 class 是 classinfo 中任何条目的子类，则返回 True。在任何其他情况下，都会引发 TypeError 异常。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

Python 中的 `issubclass()` 函数是一个内置函数，用于检查给定类是否是另一个类或类元组的子类。如果第一个参数是第二个参数的子类，则返回 `True`，否则返回 `False`。此函数在面向对象编程中很有用，因为它允许您验证类关系并根据继承实现多态行为。

## 示例

```python
class First:
    pass

class Second(First):
    pass

print(issubclass(Second, First))
print(issubclass(First, Second))
```

```output
True
False
```

## 相关链接

- <router-link :to="'/builtin/isinstance'">`isinstance()`</router-link>
- <router-link :to="'/builtin/type'">`type()`</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP 基础知识</router-link>
- <router-link :to="'/builtin/object'">`object()`</router-link>
