---
title: 'Python Itertools 模块 - Python 速查表'
description: 'itertools 模块是一组工具，旨在高效处理迭代器（如列表或字典）时实现快速和内存优化。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Itertools 模块
</base-title>

_itertools_ 模块是一组旨在高效处理迭代器（如 <router-link to="/cheatsheet/lists-and-tuples">列表</router-link> 或 <router-link to="/cheatsheet/dictionaries">字典</router-link>）的工具，它们在速度和内存使用方面都非常高效。

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a href="https://docs.python.org/3/library/itertools.html">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    该模块标准化了一套核心的快速、内存高效的工具，它们本身或组合使用都很有用。
    它们共同构成了一个“迭代器代数”，使得能够用纯 Python 简洁高效地构建专业工具。
  </base-disclaimer-content>
</base-disclaimer>

_itertools_ 模块包含在标准库中，必须导入。一些示例也使用了 `operator` 模块。

```python
import itertools
import operator
```

## accumulate()

创建一个迭代器，返回一个函数的结果。

```python
itertools.accumulate(iterable[, func])
```

示例：

```python
data = [1, 2, 3, 4, 5]
# 使用乘法函数进行累积
result = itertools.accumulate(data, operator.mul)
for each in result:
    print(each)
```

```output
1
2
6
24
120
```

operator.mul 接收两个数字并将其相乘：

```python
operator.mul(1, 2)
# 2

operator.mul(2, 3)
# 6

operator.mul(6, 4)
# 24

operator.mul(24, 5)
# 120
```

传递函数是可选的：

```python
data = [5, 2, 6, 4, 5, 9, 1]
# 不带函数进行累积，默认为加法
result = itertools.accumulate(data)
for each in result:
    print(each)
```

```output
5
7
13
17
22
31
32
```

如果没有指定函数，则对元素求和：

```python
5
5 + 2 = 7
7 + 6 = 13
13 + 4 = 17
17 + 5 = 22
22 + 9 = 31
31 + 1 = 32
```

## combinations()

接收一个可迭代对象和一个整数 $r$。它将创建所有包含 $r$ 个成员的唯一组合。

```python
itertools.combinations(iterable, r)
```

示例：

```python
shapes = ['circle', 'triangle', 'square',]
# 生成所有 2 个元素的组合
result = itertools.combinations(shapes, 2)
for each in result:
    print(each)
```

```output
('circle', 'triangle')
('circle', 'square')
('triangle', 'square')
```

## combinations_with_replacement()

与 combinations() 类似，但允许单个元素重复出现多次。

```python
itertools.combinations_with_replacement(iterable, r)
```

示例：

```python
shapes = ['circle', 'triangle', 'square']
# 生成允许重复元素的组合
result = itertools.combinations_with_replacement(shapes, 2)
for each in result:
    print(each)
```

```output
('circle', 'circle')
('circle', 'triangle')
('circle', 'square')
('triangle', 'triangle')
('triangle', 'square')
('square', 'square')
```

## count()

创建一个迭代器，从数字 start 开始，以固定的步长生成等距的值。

```python
itertools.count(start=0, step=1)
```

示例：

```python
# 从 10 开始计数，步长为 3
for i in itertools.count(10,3):
    print(i)
    if i > 20:
        break
```

```output
10
13
16
19
22
```

## cycle()

此函数会无限循环遍历一个可迭代对象。

```python
itertools.cycle(iterable)
```

示例：

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet']
# 无限循环遍历颜色
for color in itertools.cycle(colors):
    print(color)
```

```output
red
orange
yellow
green
blue
violet
red
orange
```

当到达可迭代对象的末尾时，它会从头重新开始。

## chain()

将一系列可迭代对象连接起来，并将其作为一个长迭代器返回。

```python
itertools.chain(*iterables)
```

示例：

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue']
shapes = ['circle', 'triangle', 'square', 'pentagon']
# 将多个可迭代对象链接成一个
result = itertools.chain(colors, shapes)
for each in result:
    print(each)
```

```output
red
orange
yellow
green
blue
circle
triangle
square
pentagon
```

## compress()

使用另一个可迭代对象来过滤一个可迭代对象。

```python
itertools.compress(data, selectors)
```

示例：

```python
shapes = ['circle', 'triangle', 'square', 'pentagon']
selections = [True, False, True, False]
# 根据布尔选择过滤形状
result = itertools.compress(shapes, selections)
for each in result:
    print(each)
```

```output
circle
square
```

## dropwhile()

创建一个迭代器，它会丢弃可迭代对象中谓词（predicate）为真的元素；之后，返回所有剩余的元素。

```python
itertools.dropwhile(predicate, iterable)
```

示例：

```python
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]
# 当条件为真时丢弃元素，然后返回所有剩余元素
result = itertools.dropwhile(lambda x: x<5, data)
for each in result:
    print(each)
```

```output
5
6
7
8
9
10
1
```

## filterfalse()

创建一个迭代器，它从可迭代对象中过滤元素，只返回那些谓词为 False 的元素。

```python
itertools.filterfalse(predicate, iterable)
```

示例：

```python
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]
# 返回谓词为 False 的元素
result = itertools.filterfalse(lambda x: x<5, data)
for each in result:
    print(each)
```

```output
5
6
7
8
9
10
```

## groupby()

简单来说，这个函数用于将元素分组。

```python
itertools.groupby(iterable, key=None)
```

示例：

```python
robots = [
    {"name": "blaster", "faction": "autobot"},
    {"name": "galvatron", "faction": "decepticon"},
    {"name": "jazz", "faction": "autobot"},
    {"name": "metroplex", "faction": "autobot"},
    {"name": "megatron", "faction": "decepticon"},
    {"name": "starcream", "faction": "decepticon"},
]
# 按派系分组机器人（可迭代对象必须先排序才能正确分组）
for key, group in itertools.groupby(robots, key=lambda x: x['faction']):
    print(key)
    print(list(group))
```

```output
autobot
[{'name': 'blaster', 'faction': 'autobot'}]
decepticon
[{'name': 'galvatron', 'faction': 'decepticon'}]
autobot
[{'name': 'jazz', 'faction': 'autobot'}, {'name': 'metroplex', 'faction': 'autobot'}]
decepticon
[{'name': 'megatron', 'faction': 'decepticon'}, {'name': 'starcream', 'faction': 'decepticon'}]
```

## islice()

此函数非常类似于切片操作。它允许你从一个可迭代对象中截取一部分。

```python
itertools.islice(iterable, start, stop[, step])
```

示例：

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue',]
# 切片可迭代对象以获取前 2 个元素
few_colors = itertools.islice(colors, 2)
for each in few_colors:
    print(each)
```

```output
red
orange
```

## permutations()

```python
itertools.permutations(iterable, r=None)
```

示例：

```python
alpha_data = ['a', 'b', 'c']
# 生成元素的所有排列
result = itertools.permutations(alpha_data)
for each in result:
    print(each)
```

```output
('a', 'b', 'c')
('a', 'c', 'b')
('b', 'a', 'c')
('b', 'c', 'a')
('c', 'a', 'b')
('c', 'b', 'a')
```

## product()

创建一系列可迭代对象的笛卡尔积。

```python
num_data = [1, 2, 3]
alpha_data = ['a', 'b', 'c']
# 生成可迭代对象的笛卡尔积
result = itertools.product(num_data, alpha_data)
for each in result:
    print(each)
```

```output
(1, 'a')
(1, 'b')
(1, 'c')
(2, 'a')
(2, 'b')
(2, 'c')
(3, 'a')
(3, 'b')
(3, 'c')
```

## repeat()

此函数会一遍又一遍地重复一个对象。除非指定了 `times` 参数。

```python
itertools.repeat(object[, times])
```

示例：

```python
# 重复对象 3 次
for i in itertools.repeat("spam", 3):
    print(i)
```

```output
spam
spam
spam
```

## starmap()

创建一个迭代器，它使用从可迭代对象中获取的参数来计算函数。

```python
itertools.starmap(function, iterable)
```

示例：

```python
data = [(2, 6), (8, 4), (7, 3)]
# 将函数应用于从每个元组中解包的参数
result = itertools.starmap(operator.mul, data)
for each in result:
    print(each)
```

```output
12
32
21
```

## takewhile()

与 dropwhile() 相反。创建一个迭代器，只要谓词为真，就从可迭代对象中返回元素。

```python
itertools.takewhile(predicate, iterable)
```

示例：

```python
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]
# 当条件为真时取元素，然后停止
result = itertools.takewhile(lambda x: x<5, data)
for each in result:
    print(each)
```

```output
1
2
3
4
```

## tee()

从单个可迭代对象返回 $n$ 个独立的迭代器。

```python
itertools.tee(iterable, n=2)
```

示例：

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue']
# 将可迭代对象分成两个独立的迭代器
alpha_colors, beta_colors = itertools.tee(colors)
for each in alpha_colors:
    print(each)
```

```output
red
orange
yellow
green
blue
```

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue']
alpha_colors, beta_colors = itertools.tee(colors)
for each in beta_colors:
    print(each)
```

```output
red
orange
yellow
green
blue
```

## zip_longest()

创建一个迭代器，它聚合来自每个可迭代对象的元素。如果可迭代对象的长度不相等，则用 `fillvalue` 填充缺失的值。迭代持续到最长的可迭代对象耗尽为止。

```python
itertools.zip_longest(*iterables, fillvalue=None)
```

示例：

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue',]
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]
# 压缩可迭代对象，用 None 填充缺失值
for each in itertools.zip_longest(colors, data, fillvalue=None):
    print(each)
```

```output
('red', 1)
('orange', 2)
('yellow', 3)
('green', 4)
('blue', 5)
(None, 6)
(None, 7)
(None, 8)
(None, 9)
(None, 10)
```

## 相关链接

- <router-link to="/cheatsheet/control-flow">速查表：控制流 (for 循环)</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">速查表：列表和元组</router-link>
- <router-link to="/cheatsheet/comprehensions">速查表：推导式</router-link>
- <router-link to="/cheatsheet/functions">速查表：函数 (生成器)</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">博客：Python 推导式分步指南</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
- <router-link to="/builtin/next">next()</router-link>
- <router-link to="/builtin/map">map()</router-link>
- <router-link to="/builtin/filter">filter()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
- <router-link to="/builtin/enumerate">enumerate()</router-link>
- <router-link to="/builtin/range">range()</router-link>
