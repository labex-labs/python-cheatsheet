---
title: 'Python min() 内置函数 - Python 速查表'
description: '返回可迭代对象中的最小项或两个或多个参数中的最小值。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python min() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#min">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   返回可迭代对象中的最小项，或两个或多个参数中的最小值。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

`min()` 函数是 <router-link to="/builtin/max">max()</router-link> 的对应函数。它有两种用法：

1. 配合可迭代对象（如 <router-link to="/builtin/list">列表</router-link> 或 <router-link to="/builtin/tuple">元组</router-link>）使用时，它返回最小的项。
2. 传入两个或多个参数时，它返回其中最小的一个。

### 示例

**在可迭代对象中查找最小值：**

```python
numbers = [10, 2, 1, 40, 5]
print(min(numbers))

letters = ('z', 'b', 'a')
print(min(letters))
```

```output
1
a
```

**在多个参数中查找最小值：**

```python
print(min(10, 20, 5))
```

```output
5
```

## 相关链接

- <router-link to="/cheatsheet/lists-and-tuples">速查表：列表和元组</router-link>
- <router-link to="/builtin/max">max()</router-link>
- <router-link to="/builtin/sorted">sorted()</router-link>
- <router-link to="/builtin/sum">sum()</router-link>
