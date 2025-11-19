---
title: 'Python iter() 内置函数 - Python 速查表'
description: '返回一个迭代器对象。第一个参数的解释方式取决于第二个参数是否存在。如果没有第二个参数，object 必须是一个支持可迭代协议的集合对象，或者必须支持序列协议。如果它不支持任一协议，则引发 TypeError。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python iter() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#iter">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   返回一个迭代器对象。第一个参数的解释方式很大程度上取决于第二个参数是否存在。如果没有第二个参数，object 必须是一个支持可迭代协议的集合对象，或者它必须支持序列协议。如果它不支持这两种协议中的任何一种，则引发 TypeError。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

`iter()` 函数返回一个迭代器对象。迭代器是一个可以被迭代（循环）的对象。它是 Python 中 `for` 循环的底层实现。

您可以使用 `iter()` 从任何可迭代对象（如列表、元组或字符串）中获取一个迭代器。

### 示例

**从列表中获取迭代器：**

```python
my_list = [1, 2, 3]
my_iter = iter(my_list)

print(next(my_iter))
print(next(my_iter))
print(next(my_iter))
```

```output
1
2
3
```

```python
i = iter([1, 2, 3])
print(i)
print(i.__next__())
print(i.__next__())
print(i.__next__())
```

```output
<list_iterator object at 0x7f93158badc0>
1
2
3
```

## 相关链接

- <router-link :to="'/builtin/next'">`next()`</router-link>
- <router-link :to="'/cheatsheet/control-flow'">控制流</router-link>
- <router-link :to="'/cheatsheet/lists-and-tuples'">列表和元组</router-link>
- <router-link :to="'/builtin/enumerate'">`enumerate()`</router-link>
- <router-link :to="'/builtin/zip'">`zip()`</router-link>
- <router-link :to="'/builtin/map'">`map()`</router-link>
- <router-link :to="'/builtin/filter'">`filter()`</router-link>
