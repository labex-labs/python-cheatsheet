---
title: 'Python reversed() 内置函数 - Python 速查表'
description: '返回一个反向迭代器。seq 必须是一个具有 __reversed__() 方法或支持序列协议（__len__() 方法和支持整数参数从 0 开始的 __getitem__() 方法）的对象。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python reversed() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#reversed">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   返回一个反向迭代器。seq 必须是一个具有 __reversed__() 方法或支持序列协议（__len__() 方法和从 0 开始的整数参数的 __getitem__() 方法）的对象。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

`reversed()` 函数返回一个反向迭代器。这意味着它可以用于反向遍历一个序列（如 <router-link to="/builtin/list">列表</router-link>、<router-link to="/builtin/tuple">元组</router-link> 或 <router-link to="/builtin/str">字符串</router-link>）。它不会修改原始序列，而是提供一个新的迭代器，从后向前产生元素。

### 示例

要获取一个反向列表，您可以将迭代器转换为列表：

```python
my_list = [1, 2, 3, 4, 5]
reversed_list = list(reversed(my_list))
print(reversed_list)
```

```output
[5, 4, 3, 2, 1]
```

您也可以在 `for` 循环中直接遍历它：

```python
for char in reversed("hello"):
    print(char)
```

```output
o
l
l
e
h
```

这是一个演示迭代器行为的另一个示例：

```python
i = reversed([1, 2, 3])
print(next(i))
print(next(i))
print(next(i))
```

```output
3
2
1
```

## 相关链接

- <router-link to="/cheatsheet/control-flow">备忘单：控制流 (for 循环)</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">备忘单：列表和元组</router-link>
- <router-link to="/builtin/sorted">sorted()</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/next">next()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
