---
title: 'Python id() 内置函数 - Python 速查表'
description: '返回对象的“身份标识”。这是一个整数，保证在对象生命周期内是唯一的且恒定的。生命周期不重叠的两个对象可能具有相同的 id() 值。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python id() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#id">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   返回对象的“身份”。这是一个整数，保证在对象的生命周期内对该对象是唯一的且恒定的。生命周期不重叠的两个对象可能具有相同的 id() 值。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

`id()` 函数返回一个唯一的整数，用于标识对象在内存中的位置。保证此 ID 在对象的生命周期内是唯一的。它本质上是对象的内存地址。

### 示例

```python
x = 10
y = 10
z = 20

print(id(x))
print(id(y))  # same as id(x) because Python caches small integers
print(id(z))
print(id(1))
print(id('1'))
print(id([1, 2]))
```

输出：

```plaintext
4331368528
4331368528
4331368560
4331368496
4331368560
4331368560
```

## 相关链接

- <router-link :to="'/builtin/hash'">hash()</router-link>
- <router-link :to="'/builtin/object'">object()</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP 基础</router-link>
- <router-link :to="'/blog/python-data-types'">Python 数据类型</router-link>
- <router-link :to="'/builtin/type'">type()</router-link>
