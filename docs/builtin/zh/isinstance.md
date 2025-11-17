---
title: 'Python 内置函数 isinstance() 速查表'
description: '检查对象是否是指定类或其子类的实例。如果对象不是给定类型，则返回 False。如果指定类信息是类型元组或联合类型，则检查对象是否是其中任一类型的实例。否则，引发 TypeError。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 内置函数 isinstance()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#isinstance">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   如果 object 参数是 classinfo 参数的实例，或者 classinfo 参数的（直接、间接或虚拟）子类的实例，则返回 True。如果 object 不是给定类型的对象，该函数始终返回 False。如果 classinfo 是一个类型对象元组（或递归地，其他此类元组）或多个类型的 Union Type，如果 object 是任一类型的实例，则返回 True。如果 classinfo 不是类型或类型元组和此类元组，则引发 TypeError 异常。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

`isinstance()` 函数检查一个对象是否是特定类或其子类的实例。如果对象是指定类型，它返回 `True`，否则返回 `False`。

您也可以针对一个类型元组进行检查。

### 示例

**检查对象的类型：**

```python
my_list = [1, 2, 3]
print(isinstance(my_list, list))
print(isinstance(my_list, tuple))
```

输出：

```plaintext
True
False
```

**针对多种类型进行检查：**

```python
print(isinstance("hello", (int, str, list)))
```

输出：

```plaintext
True
```

```python
isinstance(1, int)
isinstance(1, str)
```

输出：

```plaintext
True
False
```

## 相关链接

- <router-link :to="'/builtin/issubclass'">`issubclass()`</router-link>
- <router-link :to="'/builtin/type'">`type()`</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP 基础</router-link>
- <router-link :to="'/blog/python-data-types'">Python 数据类型</router-link>
- <router-link :to="'/builtin/callable'">`callable()`</router-link>
