---
title: 'Python map() 内置函数 - Python 速查表'
description: '返回一个迭代器，将函数应用于可迭代对象的每个元素并产生结果。如果提供了额外的可迭代对象参数，函数必须接受相应数量的参数，并并行应用于所有可迭代对象中的元素。使用多个可迭代对象时，迭代器在最短的可迭代对象耗尽时停止。适用于函数输入已按参数元组排列的情况。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python map() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#map">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   返回一个迭代器，它将函数应用于可迭代对象的每个项目，并产生结果。如果提供了额外的可迭代对象参数，函数必须接受该数量的参数，并并行应用于所有可迭代对象的项目。对于多个可迭代对象，当最短的可迭代对象耗尽时，迭代器停止。对于函数输入已按 <router-link to="/builtin/tuple">元组</router-link> 排列的情况。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

`map` 函数，_map(function, iterable)_ 接受一个或多个可迭代对象，一个“回调函数”（通常是 lambda），并返回一个“Map 对象”。该 map 对象包含 `map` 函数将回调函数应用于每个可迭代对象元素的后的结果。Map 同时迭代提供的可迭代对象。也就是说，在 map 函数的每一步“i”中，每个可迭代对象索引“i”处的元素将可供 map 函数在当时使用。在完成映射后，您通常会希望将结果 map 对象转换为 <router-link to="/builtin/list">列表</router-link>、<router-link to="/builtin/tuple">元组</router-link> 或另一种更方便处理的对象形式。

\*\*\*重要提示：从 Python 3 发布以来，如果提供给 map 的可迭代对象的长度不同，map 将在达到与最短可迭代对象长度相等的步数时停止并返回。

## 输入参数

Function: 接受 Map 当前步数对应的项目（或项目），并以函数返回的结果作为要存储在 Map 对象中的项目。存储到 map 对象中的元素的类型将与函数返回的类型相同。

Iterable(s): `<router-link to="/builtin/tuple">元组</router-link>`、`<router-link to="/builtin/list">列表</router-link>`、`<router-link to="/builtin/range">范围</router-link>`、`<router-link to="/builtin/dict">字典</router-link>`、`<router-link to="/builtin/set">集合</router-link>`、`<router-link to="/builtin/str">字符串</router-link>`。

## 一个非常简单的例子

```python
def double_map(func, iter):
    my_map = map(func, iter)
    return list(my_map)

def double(element):
    return element * 2

nums = [1, 2, 3, 4]

print(double_map(double, nums))
```

```output
[2, 4, 6, 8]
```

## 一个不那么简单的例子

### 此示例使用了写为 lambda 的回调函数，以及

```python
def multi_map(func, *iters):
    my_map = map(func, *iters)
    return list(my_map)

list1 = [1, 2, 3]
list2 = [4, 5, 6]

print(multi_map((lambda item1, item2: item1 * item2), list1, list2))
```

```output
[4, 10, 18]
```

## 一个演示 map 如何处理不同可迭代对象长度的示例

```python
def max(a, b):
    if a > b:
        return a
    else:
        return b

list1 = [1, 1, 1]
list2 = [0, 0, 0, 1, 1, 1, 1, 1, 1, 1]

result = list(map(max, list1, list2))

print(result)
```

```output
[1, 1, 1]
```

注意结果列表的长度与 list1 的长度相同？

## 相关链接

- <router-link to="/cheatsheet/functions">备忘单：函数（包括 Lambdas）</router-link>
- <router-link to="/cheatsheet/comprehensions">备忘单：推导式</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">博客：Python 推导式分步指南</router-link>
- <router-link to="/modules/itertools-module">模块：itertools</router-link>
- <router-link to="/builtin/filter">filter()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
