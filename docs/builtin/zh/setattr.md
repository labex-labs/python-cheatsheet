---
title: 'Python setattr() 内置函数 - Python 速查表'
description: "setattr() 是 getattr() 的对应函数。参数包括一个对象、一个字符串和一个任意值。该字符串可以命名现有属性或新属性。如果对象允许，函数会将值赋给该属性。例如，setattr(x, 'foobar', 123) 等同于 x.foobar = 123。"
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 内置函数 setattr()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#setattr">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   它是 <router-link to="/builtin/getattr">getattr()</router-link> 的对应函数。参数包括一个对象、一个字符串和一个任意值。该字符串可以命名一个现有属性或一个新属性。如果对象允许，该函数将值赋给该属性。例如，`setattr(x, 'foobar', 123)` 等同于 `x.foobar = 123`。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

`setattr()` 函数是 Python 的一个内置函数，它允许你设置对象的属性值。它接受三个参数：对象、属性的名称（作为字符串）以及你想要赋给该属性的值。

当属性名称需要在运行时动态确定时，这特别有用。与需要预先知道属性名称的点表示法（`object.attribute = value`）不同，`setattr()` 允许你使用变量。

### 示例

以下是如何使用 `setattr()` 来添加或修改属性的示例：

```python
class Person:
    name = "John"

p = Person()

# 将 'age' 属性设置为 30
setattr(p, 'age', 30)

print(p.age)

# 更改 'name' 属性
setattr(p, 'name', 'Jane')
print(p.name)
```

输出：

```plaintext
30
Jane
```

## 相关链接

- <router-link to="/cheatsheet/oop-basics">速查表：OOP 基础</router-link>
- <router-link to="/builtin/object">object()</router-link>
- <router-link to="/builtin/dir">dir()</router-link>
- <router-link to="/builtin/getattr">getattr()</router-link>
- <router-link to="/builtin/hasattr">hasattr()</router-link>
- <router-link to="/builtin/delattr">delattr()</router-link>
