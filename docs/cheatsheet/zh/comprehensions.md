---
title: 'Python 列表推导式 - Python 速查表'
description: '列表推导式提供了一种简洁的创建列表的方法'
labUrl: 'https://labex.io/zh/labs/python-python-comprehensions-633649?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 列表推导式
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

列表推导式是一种特殊的语法，它允许我们从其他列表中创建新列表，在处理数字和包含一两个嵌套 for 循环时非常有用。

<base-disclaimer>
  <base-disclaimer-title>
    来自 Python 3 <a target="_blank" href="https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions">教程</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    列表推导式提供了一种简洁的创建列表的方式。[...] 或者创建满足特定条件的那些元素的子序列。
  </base-disclaimer-content>
</base-disclaimer>

阅读 <router-link to="/blog/python-comprehensions-step-by-step">Python 列表推导式：分步介绍</router-link> 以获得更深入的介绍。

## 列表推导式

这是我们使用 For 循环从现有集合创建新列表的方式：

```python
# 传统方法：使用 for 循环创建列表
names = ['Charles', 'Susan', 'Patrick', 'George']

new_list = []
for n in names:
    new_list.append(n)

new_list
```

输出：

```plaintext
['Charles', 'Susan', 'Patrick', 'George']
```

这是我们使用列表推导式完成相同操作的方式：

```python
# 列表推导式：创建新列表的简洁方法
# 语法：[表达式 for 元素 in 可迭代对象]
names = ['Charles', 'Susan', 'Patrick', 'George']

new_list = [n for n in names]  # 创建包含所有名字的列表
new_list
```

输出：

```plaintext
['Charles', 'Susan', 'Patrick', 'George']
```

我们也可以对数字做同样的事情：

```python
# 嵌套列表推导式：从两个范围创建元组
# 等同于嵌套的 for 循环
n = [(a, b) for a in range(1, 3) for b in range(1, 3)]
n
```

输出：

```plaintext
[(1, 1), (1, 2), (2, 1), (2, 2)]
```

## 添加条件判断

如果我们希望 `new_list` 只包含以 C 开头的名字，使用 for 循环，我们会这样做：

```python
# 传统方法：使用 if 条件过滤
names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']

new_list = []
for n in names:
    if n.startswith('C'):  # 过滤以 'C' 开头的名字
        new_list.append(n)

print(new_list)
```

输出：

```plaintext
['Charles', 'Carol']
```

在列表推导式中，我们将 `if` 语句添加到末尾：

```python
# 带条件的列表推导式：过滤元素
# 语法：[表达式 for 元素 in 可迭代对象 if 条件]
new_list = [n for n in names if n.startswith('C')]
print(new_list)
```

输出：

```plaintext
['Charles', 'Carol']
```

要在列表推导式中使用 `if-else` 语句：

```python
# 带 if-else 的列表推导式：条件表达式
# 语法：[如果为真时的表达式 if 条件 else 如果为假时的表达式 for 元素 in 可迭代对象]
nums = [1, 2, 3, 4, 5, 6]
new_list = [num*2 if num % 2 == 0 else num for num in nums]  # 将偶数翻倍
print(new_list)
```

输出：

```plaintext
[1, 4, 3, 8, 5, 12]
```

<base-disclaimer>
  <base-disclaimer-title>
    集合和字典推导式
  </base-disclaimer-title>
  <base-disclaimer-content>
    `列表` 推导式的基础知识也适用于 **集合** 和 **字典**。
  </base-disclaimer-content>
</base-disclaimer>

## 集合推导式

```python
# 集合推导式：使用推导式语法创建集合
# 语法：{表达式 for 元素 in 可迭代对象}
b = {"abc", "def"}
{s.upper() for s in b}  # 将所有字符串转换为大写
```

输出：

```plaintext
{"ABC", "DEF"}
```

## 字典推导式

```python
# 字典推导式：交换键和值
# 语法：{键表达式：值表达式 for 元素 in 可迭代对象}
c = {'name': 'Pooka', 'age': 5}
{v: k for k, v in c.items()}  # 反转键值对
```

输出：

```plaintext
{'Pooka': 'name', 5: 'age'}
```

列表推导式可以从字典生成：

```python
# 从字典生成的列表推导式：创建格式化字符串
c = {'name': 'Pooka', 'age': 5}
["{}:{}".format(k.upper(), v) for k, v in c.items()]  # 格式化为 "键：值"
```

输出：

```plaintext
['NAME:Pooka', 'AGE:5']
```

## 相关链接

- <router-link to="/blog/python-comprehensions-step-by-step">Python 列表推导式：分步介绍</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Python 列表和元组</router-link>
- <router-link to="/cheatsheet/sets">Python 集合</router-link>
- <router-link to="/cheatsheet/dictionaries">Python 字典</router-link>
- <router-link to="/blog/python-sets-what-why-how">Python 集合：是什么、为什么以及如何使用</router-link>
- <router-link to="/blog/python-data-types">Python 数据类型博客文章</router-link>
