---
title: 'Python Shelve 模块 - Python 速查表'
description: 'Shelf（存储）是一个持久化的、类似字典的对象。Shelf 中可以存放任意 Python 对象，即 pickle 模块可以处理的任何内容。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Shelve 模块
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/shelve.html">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   一个“shelf”（搁架）是一个持久化的、类似字典的对象。它与“dbm”数据库的区别在于，shelf 中的值（而不是键！）本质上可以是任意 Python 对象——任何 pickle 模块可以处理的对象。这包括大多数类实例、递归数据类型和包含大量共享子对象的对象。键是普通的字符串。
  </base-disclaimer-content>
</base-disclaimer>

## 保存变量

```python
import shelve

wife = ['Pretty', 'Lovely', 'Nice']
# 打开 shelf 文件并保存数据
with shelve.open('mydata') as shelf_file:
    shelf_file['wife'] = wife
```

## 打开并读取变量

```python
# 打开 shelf 文件并读取数据
with shelve.open('mydata') as shelf_file:
    print(type(shelf_file))
    # 通过键访问存储的值
    print(shelf_file['wife'])
```

```output
<class 'shelve.DbfilenameShelf'>
['Pretty', 'Lovely', 'Nice']
```

就像字典一样，`shelf` 值具有 `keys()` 和 `values()` 方法，它们将返回 shelf 中键和值的类列表值。由于这些方法返回的是类列表值而不是真正的列表，您应该将它们传递给 `list()` 函数以获取列表形式的值。

```python
# 访问 shelf 中的所有键和值
with shelve.open('mydata') as shelf_file:
    print(list(shelf_file.keys()))
    print(list(shelf_file.values()))
```

```output
['wife']
[['Pretty', 'Lovely', 'Nice']]
```

## 相关链接

- <router-link to="/cheatsheet/reading-and-writing-files">备忘单：文件读写</router-link>
- <router-link to="/cheatsheet/dictionaries">备忘单：字典</router-link>
- <router-link to="/cheatsheet/context-manager">备忘单：上下文管理器</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
