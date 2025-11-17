---
title: 'Python dict() 内置函数 - Python 速查表'
description: '创建新字典。dict 对象是字典类。有关此类文档，请参阅 dict 和 Mapping Types — dict。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python dict() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/stdtypes.html#dict">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    创建一个新的字典。`dict` 对象是字典类。
  </base-disclaimer-content>
</base-disclaimer>

Python 中的 `dict()` 构造函数是创建字典的多功能方法。

你可以创建一个空字典，或者根据关键字参数或键值对的可<router-link to="/builtin/iter">迭代器</router-link>来创建字典。

## 示例

**创建一个空字典：**

```python
my_dict = dict()
print(my_dict)
```

输出：

```plaintext
{}
```

**使用关键字参数创建字典：**

```python
# 使用关键字参数
my_dict = dict(name="John", age=30)
print(my_dict)
```

输出：

```plaintext
{'name': 'John', 'age': 30}
```

**根据可迭代对象创建字典：**

```python
my_list = [('name', 'Jane'), ('age', 25)]
my_dict = dict(my_list)
print(my_dict)
```

输出：

```plaintext
{'name': 'Jane', 'age': 25}
```

创建一个空字典：

```python
a = dict()
type(a)
```

输出：

```plaintext
<class 'dict'>
```

## 相关链接

- <router-link :to="'/builtin/iter'">`iter()`</router-link>
- <router-link :to="'/cheatsheet/dictionaries'">字典 (Dictionaries)</router-link>
- <router-link :to="'/blog/python-data-types'">Python 数据类型</router-link>
- <router-link :to="'/builtin/len'">`len()`</router-link>
- <router-link :to="'/builtin/list'">`list()`</router-link>
- <router-link :to="'/builtin/tuple'">`tuple()`</router-link>
