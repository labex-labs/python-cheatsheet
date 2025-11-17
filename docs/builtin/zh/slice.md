---
title: 'Python slice() 内置函数 - Python 速查表'
description: '返回一个切片对象，表示由 range(start, stop, step) 指定的索引集合。start 和 step 参数默认为 None。切片对象具有只读数据属性 start、stop 和 step，它们仅返回参数值（或其默认值）。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python slice() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#slice">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   返回一个表示由 range(start, stop, step) 指定的索引集的 slice 对象。start 和 step 参数默认为 None。Slice 对象具有只读数据属性 start, stop, 和 step，它们仅返回参数值（或其默认值）。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

Python 中的 `slice()` 函数返回一个 slice 对象，可用于对列表、元组或字符串等序列进行切片。slice 对象表示由 `start`、`stop` 和 `step` 指定的一组索引。

## 示例

```python
furniture = ['table', 'chair', 'rack', 'shelf']

print(furniture[0:4])
print(furniture[1:3])
print(furniture[0:-1])
print(furniture[:2])
print(furniture[1:])
print(furniture[:])
```

输出：

```plaintext
['table', 'chair', 'rack', 'shelf']
['chair', 'rack']
['table', 'chair', 'rack']
['table', 'chair']
['chair', 'rack', 'shelf']
['table', 'chair', 'rack', 'shelf']
```

对完整列表进行切片将执行复制操作：

```python
spam = ['cat', 'bat', 'rat', 'elephant']
spam2 = spam[:]
print(spam2)

spam.append('dog')
print(spam)
print(spam2)
```

输出：

```plaintext
['cat', 'bat', 'rat', 'elephant']
['cat', 'bat', 'rat', 'elephant', 'dog']
['cat', 'bat', 'rat', 'elephant']
```

## 相关链接

- <router-link to="/cheatsheet/lists-and-tuples">备忘单：列表和元组</router-link>
- <router-link to="/cheatsheet/manipulating-strings">备忘单：字符串操作</router-link>
- <router-link to="/cheatsheet/comprehensions">备忘单：推导式</router-link>
- <router-link to="/modules/itertools-module">模块：itertools (islice)</router-link>
- <router-link to="/builtin/range">range()</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/reversed">reversed()</router-link>
- <router-link to="/builtin/sorted">sorted()</router-link>
- <router-link to="/builtin/enumerate">enumerate()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
- <router-link to="/builtin/map">map()</router-link>
- <router-link to="/builtin/filter">filter()</router-link>
