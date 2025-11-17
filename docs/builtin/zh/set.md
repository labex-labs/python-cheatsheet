---
title: 'Python set() 内置函数 - Python 速查表'
description: '返回一个新的 set 对象，可选地包含来自可迭代对象的元素。set 是一个内置类。有关此类文档，请参阅 set 和 Set 类型 — set, frozenset。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python set() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#set">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   返回一个新的 set 对象，可选地包含从可迭代对象中获取的元素。set 是一个内置类。有关此类文档，请参阅 <router-link to="/cheatsheet/sets">set</router-link> 和 Set Types — set, frozenset。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

`set()` 构造函数创建一个新的 set。Set 是唯一元素的无序集合。您可以创建一个空 set，或者从可迭代对象创建 set。

### 示例

**创建一个空 set：**

```python
my_set = set()
print(my_set)
```

输出：

```plaintext
set()
```

**从列表中创建一个 set（移除重复项）：**

```python
my_list = [1, 2, 2, 3, 3, 3]
my_set = set(my_list)
print(my_set)
```

输出：

```plaintext
{1, 2, 3}
```

## 相关链接

- <router-link to="/cheatsheet/sets">备忘单：Set</router-link>
- <router-link to="/cheatsheet/comprehensions">备忘单：推导式</router-link>
- <router-link to="/blog/python-sets-what-why-how">博客：Python Set - 是什么、为什么、如何使用</router-link>
- <router-link to="/blog/python-data-types">博客：Python 数据类型</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/frozenset">frozenset()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
