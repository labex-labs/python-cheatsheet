---
title: 'Python zip() 内置函数 - Python 速查表'
description: '并行迭代多个可迭代对象，生成包含每个对象中一个元素的元组。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python zip() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#zip">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    并行迭代多个可迭代对象，生成包含来自每个可迭代对象的项的元组。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

Python 中的 `zip()` 函数是一个内置函数，它接受两个或多个可迭代对象（如列表、元组或字符串），并将它们聚合为单个元组的迭代器。每个元组包含所有输入可迭代对象在相同位置的元素。

## 示例

```python
furniture = ['table', 'chair', 'rack', 'shelf']
price = [100, 50, 80, 40]

for item, amount in zip(furniture, price):
    print(f'The {item} costs ${amount}')
```

输出：

```plaintext
The table costs $100
The chair costs $50
The rack costs $80
The shelf costs $40
```

## 其他用例

Python 中的 zip 函数将多个可迭代对象合并为元组。

```python
# 组合三个列表
list1 = [1, 2, 3]
list2 = ['a', 'b', 'c']
list3 = [True, False, True]

zipped = zip(list1, list2, list3)
print(list(zipped))
```

输出：

```plaintext
[(1, 'a', True), (2, 'b', False), (3, 'c', True)]
```

### 解压 (Unzipping)

```python
# 解压一个已 zip 的对象
zipped = [(1, 'a'), (2, 'b'), (3, 'c')]
list1, list2 = zip(*zipped)
print(list1)
print(list2)
```

输出：

```plaintext
(1, 2, 3)
('a', 'b', 'c')
```

## 更多示例

### 长度不同的列表进行 zip

当最短的可迭代对象耗尽时，zip 停止生成元组。

```python
numbers = [1, 2, 3]
letters = ['a', 'b']

for num, letter in zip(numbers, letters):
    print(f'{num} -> {letter}')
```

输出：

```plaintext
1 -> a
2 -> b
```

### zip 与字典一起使用

您可以使用 zip 将两个列表的键和值组合成一个字典。

```python
keys = ['name', 'age', 'city']
values = ['Alice', 25, 'New York']

my_dict = dict(zip(keys, values))
print(my_dict)
```

输出：

```plaintext
{'name': 'Alice', 'age': 25, 'city': 'New York'}
```

### zip 与列表推导式一起使用

您可以在列表推导式中使用 zip 以实现更简洁的代码。

```python
list1 = [1, 2, 3]
list2 = [4, 5, 6]

summed = [x + y for x, y in zip(list1, list2)]
print(summed)
```

输出：

```plaintext
[5, 7, 9]
```

## 相关链接

- <router-link to="/cheatsheet/lists-and-tuples/">列表和元组</router-link>
- <router-link to="/cheatsheet/comprehensions/">推导式</router-link>
- <router-link to="/builtin/slice/">slice()</router-link>
- <router-link to="/builtin/sorted/">sorted()</router-link>
- <router-link to="/builtin/sum/">sum()</router-link>
- <router-link to="/builtin/map/">map()</router-link>
- <router-link to="/builtin/filter/">filter()</router-link>
- <router-link to="/builtin/enumerate/">enumerate()</router-link>
- <router-link to="/modules/itertools-module/">Itertools 模块</router-link>
