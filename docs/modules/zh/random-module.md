---
title: 'Python 随机模块 - Python 速查表'
description: 'random 模块是 Python 内置模块，用于生成随机元素。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Random 模块
</base-title>

[random](https://docs.python.org/3/library/random.html) 模块是一个内置模块，允许我们生成随机元素。

```python
import random
```

## seed()

`seed` 方法用于初始化随机数生成器。

```python
# 设置种子以获得可复现的随机数
random.seed(1)
random.random()
```

```output
0.13436424411240122
```

将种子设置为一个数字将始终返回相同的随机数：

```python
random.seed(1)
random.random()
```

```output
0.13436424411240122
```

```python
random.seed(1)
random.random()
```

```output
0.13436424411240122
```

```python
random.seed(1)
random.random()
```

```output
0.13436424411240122
```

```python
random.seed(1)
random.random()
```

```output
0.13436424411240122
```

```python
random.seed(1)
random.random()
```

```output
0.13436424411240122
```

`seed` 方法的默认值是*当前系统时间*，这就是我们总是得到不同数字的原因：

```python
# 不设置种子生成随机数（使用系统时间）
random.random()
```

```output
0.8474337369372327
```

```python
random.random()
```

```output
0.763774618976614
```

```python
random.random()
```

```output
0.2550690257394217
```

## randint()

```python
random.randint(start: int, stop: int)
```

此方法返回一个在给定起始和停止参数之间的随机数：

```python
random.randint(1, 5)
```

```output
3
```

```python
random.randint(1, 5)
```

```output
2
```

```python
random.randint(1, 5)
```

```output
5
```

```python
random.randint(1, 5)
```

```output
1
```

```python
random.randint(1, 5)
```

```output
3
```

```python
random.randint(1, 5)
```

```output
1
```

## choice()

`choice` 方法从可迭代对象（如 `list`、`set` 或 `str`）中返回一个随机选择的元素：

```python
random.choice([1, 2, 3, 4])
```

```output
1
```

```python
random.choice([1, 2, 3, 4])
```

```output
2
```

```python
random.choice([1, 2, 3, 4])
```

```output
4
```

```python
random.choice([1, 2, 3, 4])
```

```output
4
```

## shuffle()

`shuffle` 方法接受一个可迭代对象并将其打乱：

```python
my_list = [1, 2, 3, 4]

# 就地打乱列表
random.shuffle(my_list)
my_list
```

```output
[1, 4, 3, 2]
```

```python
random.shuffle(my_list)
my_list
```

```output
[2, 4, 3, 1]
```

```python
random.shuffle(my_list)
my_list
```

```output
[4, 2, 3, 1]
```

## sample()

```python
random.sample(iterable, k: int)
```

`sample` 返回一个包含从可迭代对象中随机选择的元素的列表。返回元素的数量等于 `k` 参数：

```python
# 从列表中随机抽取 k 个元素
random.sample([1, 2, 3, 4], 1)
```

```output
[3]
```

```python
random.sample([1, 2, 3, 4], 2)
```

```output
[3, 4]
```

```python
random.sample([1, 2, 3, 4], 3)
```

```output
[4, 3, 2]
```

```python
random.sample([1, 2, 3, 4], 4)
```

```output
[1, 2, 4, 3]
```

## random()

`random` 方法返回一个介于 0.0 和 1.0 之间的随机浮点数：

```python
random.random()
```

```output
0.4143139993007743
```

```python
random.random()
```

```output
0.17300740157905092
```

```python
random.random()
```

```output
0.548798761388153
```

```python
random.random()
```

```output
0.7030407620656315
```

## uniform()

`uniform` 方法类似于 `randint`，但返回一个浮点数：

```python
random.uniform(1, 5)
```

```output
3.697943322009309
```

```python
random.uniform(1, 5)
```

```output
2.498812082006561
```

```python
random.uniform(1, 5)
```

```output
2.7558465201782525
```

```python
random.uniform(1, 5)
```

```output
3.0337059529999273
```

## 相关链接

- <router-link to="/cheatsheet/lists-and-tuples">备忘单：列表和元组</router-link>
- <router-link to="/blog/python-data-types">博客：Python 数据类型</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/float">float()</router-link>
