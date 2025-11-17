---
title: 'Python sum() 内置函数 - Python 速查表'
description: '从左到右对起始值和可迭代对象中的元素求和并返回总和。可迭代对象的元素通常是数字，起始值不允许是字符串。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python sum() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#func-sum">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    求和从 start 和可迭代对象的项从左到右开始，并返回总和。可迭代对象的项通常是数字，并且不允许 start 值是字符串。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

`sum()` 函数计算可迭代对象（如列表或元组）中所有项的总和。你也可以提供一个可选的 `start` 值，该值将被加到总和中。

### 示例

**对数字列表求和：**

```python
numbers = [1, 2, 3, 4, 5]
print(sum(numbers))
```

输出：

```plaintext
15
```

**带起始值的求和：**

```python
numbers = [1, 2, 3]
print(sum(numbers, 10))  # 10 + 1 + 2 + 3
```

输出：

```plaintext
16
```

## 相关链接

- <router-link to="/cheatsheet/lists-and-tuples">速查表：列表和元组</router-link>
- <router-link to="/cheatsheet/comprehensions">速查表：推导式</router-link>
- <router-link to="/blog/python-data-types">博客：Python 数据类型</router-link>
- <router-link to="/modules/itertools-module">模块：itertools</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/min">min()</router-link>
- <router-link to="/builtin/max">max()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/float">float()</router-link>
