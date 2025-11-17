---
title: 'Python 内置函数 object() - Python 速查表'
description: '返回一个无特征的新对象。object 是所有类的基类，它包含所有 Python 类实例的通用方法。此函数不接受任何参数。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python object() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#object">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   返回一个新的无特征对象。object 是所有类的基类。它具有所有 Python 类实例共有的方法。此函数不接受任何参数。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

`object()` 函数返回一个新的、空的、无特征的对象。这个对象是 Python 中所有类的基础。它没有任何特殊的属性或方法。

虽然你可以创建 `object` 实例，但这在日常编程中并不常见。它更多是 Python 对象模型的根本构建块。

### 示例

```python
# Create a new object
o = object()

# See its type
print(type(o))
```

输出：

```plaintext
<class 'object'>
```

注意：它没有任何可以设置的属性。`o.name = "test"` 会引发 AttributeError。

## 相关链接

- <router-link to="/cheatsheet/oop-basics">备忘单：OOP 基础</router-link>
- <router-link to="/blog/python-data-types">博客：Python 数据类型</router-link>
- <router-link to="/builtin/isinstance">isinstance()</router-link>
- <router-link to="/builtin/issubclass">issubclass()</router-link>
- <router-link to="/builtin/dir">dir()</router-link>
- <router-link to="/builtin/hasattr">hasattr()</router-link>
- <router-link to="/builtin/getattr">getattr()</router-link>
- <router-link to="/builtin/delattr">delattr()</router-link>
