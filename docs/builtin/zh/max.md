---
title: 'Python max() 内置函数 - Python 速查表'
description: '返回可迭代对象中的最大项或两个或多个参数中的最大值。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python max() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#max">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   返回可迭代对象中最大的项，或返回两个或多个参数中最大的一个。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

`max()` 函数有两种用法：

1. 配合可迭代对象（如 <router-link to="/builtin/list">列表</router-link> 或 <router-link to="/builtin/tuple">元组</router-link>）使用时，它返回最大的项。
2. 配合两个或多个参数使用时，它返回其中最大的那个。

### 示例

**在可迭代对象中查找最大值：**

```python
numbers = [1, 2, 10, 40, 5]
print(max(numbers))

letters = ('a', 'b', 'z')
print(max(letters))
```

输出：

```plaintext
40
z
```

**在多个参数中查找最大值：**

```python
print(max(10, 20, 5))
```

输出：

```plaintext
20
```

## 相关链接

- <router-link to="/cheatsheet/lists-and-tuples">备忘单：列表和元组</router-link>
- <router-link to="/builtin/min">min()</router-link>
- <router-link to="/builtin/sorted">sorted()</router-link>
- <router-link to="/builtin/sum">sum()</router-link>
