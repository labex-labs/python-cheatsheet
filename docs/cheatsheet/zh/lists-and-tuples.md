---
title: 'Python 列表与元组 - Python 速查表'
description: '在 Python 中，列表是用于存储数据集合的四种数据类型之一。'
labUrl: 'https://labex.io/zh/labs/python-python-lists-and-tuples-633660?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 列表和元组 - Python 速查表
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

列表是 Python 中的 4 种数据类型之一，用于存储数据集合。

```python
# 列表：用方括号括起来的有序项目集合
['John', 'Peter', 'Debora', 'Charles']
```

## 使用索引获取值

```python
# 使用索引（从 0 开始，第一个元素是索引 0）访问列表元素
furniture = ['table', 'chair', 'rack', 'shelf']

furniture[0]  # 返回第一个元素：'table'
```

输出：

```plaintext
'table'
```

```python
furniture[1]
```

输出：

```plaintext
'chair'
```

```python
furniture[2]
```

输出：

```plaintext
'rack'
```

```python
furniture[3]
```

输出：

```plaintext
'shelf'
```

## 负数索引

```python
# 负数索引：从列表末尾访问元素
furniture = ['table', 'chair', 'rack', 'shelf']

furniture[-1]  # 返回最后一个元素：'shelf'
```

输出：

```plaintext
'shelf'
```

```python
furniture[-3]
```

输出：

```plaintext
'chair'
```

```python
f'The {furniture[-1]} is bigger than the {furniture[-3]}'
```

输出：

```plaintext
'The shelf is bigger than the chair'
```

## 使用切片获取子列表

```python
# 切片：使用 [start:end] 语法获取子列表（end 不包含）
furniture = ['table', 'chair', 'rack', 'shelf']

furniture[0:4]  # 返回索引 0 到 3 的元素（不包含 4）
```

输出：

```plaintext
['table', 'chair', 'rack', 'shelf']
```

```python
furniture[1:3]
```

输出：

```plaintext
['chair', 'rack']
```

```python
furniture[0:-1]
```

输出：

```plaintext
['table', 'chair', 'rack']
```

```python
# 从开头切片：省略起始索引（默认为 0）
furniture[:2]  # 返回前两个元素
```

输出：

```plaintext
['table', 'chair']
```

```python
# 切片到末尾：省略结束索引（默认为列表末尾）
furniture[1:]  # 返回从索引 1 到末尾的所有元素
```

输出：

```plaintext
['chair', 'rack', 'shelf']
```

```python
furniture[:]
```

输出：

```plaintext
['table', 'chair', 'rack', 'shelf']
```

切片整个列表将执行复制：

```python
# 切片创建副本：[:] 创建列表的浅拷贝
spam = ['cat', 'bat', 'rat', 'elephant']
spam2 = spam[:]  # 创建一个副本，而不是引用
spam2
```

输出：

```plaintext
['cat', 'bat', 'rat', 'elephant']
```

```python
spam.append('dog')
spam
```

输出：

```plaintext
['cat', 'bat', 'rat', 'elephant', 'dog']
```

```python
spam2
```

输出：

```plaintext
['cat', 'bat', 'rat', 'elephant']
```

## 使用 len() 获取列表长度

```python
# len() 返回列表中项目的数量
furniture = ['table', 'chair', 'rack', 'shelf']
len(furniture)  # 返回 4
```

输出：

```plaintext
4
```

## 使用索引更改值

```python
# 通过向索引分配新值来修改列表元素
furniture = ['table', 'chair', 'rack', 'shelf']

furniture[0] = 'desk'  # 替换第一个元素
furniture
```

输出：

```plaintext
['desk', 'chair', 'rack', 'shelf']
```

```python
furniture[2] = furniture[1]
furniture
```

输出：

```plaintext
['desk', 'chair', 'chair', 'shelf']
```

```python
furniture[-1] = 'bed'
furniture
```

输出：

```plaintext
['desk', 'chair', 'chair', 'bed']
```

## 连接和复制

```python
# 列表连接：使用 + 运算符组合两个列表
[1, 2, 3] + ['A', 'B', 'C']  # 返回 [1, 2, 3, 'A', 'B', 'C']
```

输出：

```plaintext
[1, 2, 3, 'A', 'B', 'C']
```

```python
# 列表复制：使用 * 运算符多次重复列表
['X', 'Y', 'Z'] * 3  # 返回 ['X', 'Y', 'Z', 'X', 'Y', 'Z', 'X', 'Y', 'Z']
```

输出：

```plaintext
['X', 'Y', 'Z', 'X', 'Y', 'Z', 'X', 'Y', 'Z']
```

```python
my_list = [1, 2, 3]
my_list = my_list + ['A', 'B', 'C']
my_list
```

输出：

```plaintext
[1, 2, 3, 'A', 'B', 'C']
```

## 使用 for 循环处理列表

```python
# 使用 for 循环遍历列表元素
furniture = ['table', 'chair', 'rack', 'shelf']

for item in furniture:  # 遍历每个项目
    print(item)
```

输出：

```plaintext
table
chair
rack
shelf
```

## 使用 enumerate() 在循环中获取索引

```python
# enumerate() 在循环中同时返回索引和值
furniture = ['table', 'chair', 'rack', 'shelf']

for index, item in enumerate(furniture):  # 同时获取索引和项目
    print(f'index: {index} - item: {item}')
```

输出：

```plaintext
index: 0 - item: table
index: 1 - item: chair
index: 2 - item: rack
index: 3 - item: shelf
```

## 使用 zip() 在多个列表中循环

```python
# zip() 按元素组合多个列表
furniture = ['table', 'chair', 'rack', 'shelf']
price = [100, 50, 80, 40]

for item, amount in zip(furniture, price):  # 配对两个列表的元素
    print(f'The {item} costs ${amount}')
```

输出：

```plaintext
The table costs $100
The chair costs $50
The rack costs $80
The shelf costs $40
```

## in 和 not in 运算符

```python
# in 运算符：检查项目是否存在于列表中
'rack' in ['table', 'chair', 'rack', 'shelf']  # 返回 True
```

输出：

```plaintext
True
```

```python
'bed' in ['table', 'chair', 'rack', 'shelf']
```

输出：

```plaintext
False
```

```python
furniture = ['table', 'chair', 'rack', 'shelf']
'bed' not in furniture
```

输出：

```plaintext
True
```

```python
'rack' not in furniture
```

输出：

```plaintext
False
```

## 多重赋值技巧

多重赋值技巧是一种快捷方式，它允许您在一行代码中用列表中的值给多个变量赋值。所以，而不是这样做：

```python
furniture = ['table', 'chair', 'rack', 'shelf']
table = furniture[0]
chair = furniture[1]
rack = furniture[2]
shelf = furniture[3]
```

您可以输入这一行代码：

```python
furniture = ['table', 'chair', 'rack', 'shelf']
table, chair, rack, shelf = furniture

table
```

输出：

```plaintext
'table'
```

```python
chair
```

输出：

```plaintext
'chair'
```

```python
rack
```

输出：

```plaintext
'rack'
```

```python
shelf
```

输出：

```plaintext
'shelf'
```

多重赋值技巧也可用于交换两个变量的值：

```python
a, b = 'table', 'chair'
a, b = b, a
print(a)
```

输出：

```plaintext
chair
```

```python
print(b)
```

输出：

```plaintext
table
```

## index 方法

`index` 方法允许您通过传递其名称来查找值的索引：

```python
furniture = ['table', 'chair', 'rack', 'shelf']
furniture.index('chair')
```

输出：

```plaintext
1
```

## 添加值

### append()

`append` 将一个元素添加到 `list` 的末尾：

```python
furniture = ['table', 'chair', 'rack', 'shelf']
furniture.append('bed')
furniture
```

输出：

```plaintext
['table', 'chair', 'rack', 'shelf', 'bed']
```

### insert()

`insert` 在给定位置向 `list` 添加一个元素：

```python
furniture = ['table', 'chair', 'rack', 'shelf']
furniture.insert(1, 'bed')
furniture
```

输出：

```plaintext
['table', 'bed', 'chair', 'rack', 'shelf']
```

## 移除值

### del()

`del` 使用索引删除一个项：

```python
furniture = ['table', 'chair', 'rack', 'shelf']
del furniture[2]
furniture
```

输出：

```plaintext
['table', 'chair', 'shelf']
```

```python
del furniture[2]
furniture
```

输出：

```plaintext
['table', 'chair']
```

### remove()

`remove` 使用其实际值删除一个项：

```python
furniture = ['table', 'chair', 'rack', 'shelf']
furniture.remove('chair')
furniture
```

输出：

```plaintext
['table', 'rack', 'shelf']
```

<base-warning>
  <base-warning-title>
    移除重复项
  </base-warning-title>
  <base-warning-content>
    如果该值在列表中出现多次，则只删除该值的第一个实例。
  </base-warning-content>
</base-warning>

### pop()

默认情况下，`pop` 将删除并返回列表的最后一个项目。您也可以将元素的索引作为可选参数传递：

```python
animals = ['cat', 'bat', 'rat', 'elephant']

animals.pop()
```

输出：

```plaintext
'elephant'
```

```python
animals
```

输出：

```plaintext
['cat', 'bat', 'rat']
```

```python
animals.pop(0)
```

输出：

```plaintext
'cat'
```

```python
animals
```

输出：

```plaintext
['bat', 'rat']
```

## 使用 sort() 对值进行排序

```python
numbers = [2, 5, 3.14, 1, -7]
numbers.sort()
numbers
```

输出：

```plaintext
[-7, 1, 2, 3.14, 5]
```

```python
furniture = ['table', 'chair', 'rack', 'shelf']
furniture.sort()
furniture
```

输出：

```plaintext
['chair', 'rack', 'shelf', 'table']
```

您还可以为 `reverse` 关键字参数传递 `True`，以便 `sort()` 以相反的顺序对值进行排序：

```python
furniture.sort(reverse=True)
furniture
```

输出：

```plaintext
['table', 'shelf', 'rack', 'chair']
```

如果您需要按常规字母顺序对值进行排序，请在 `sort()` 方法调用中为 `key` 关键字参数传递 `str.lower`：

```python
letters = ['a', 'z', 'A', 'Z']
letters.sort(key=str.lower)
letters
```

输出：

```plaintext
['a', 'A', 'z', 'Z']
```

您可以使用内置函数 `sorted` 返回一个新列表：

```python
furniture = ['table', 'chair', 'rack', 'shelf']
sorted(furniture)
```

输出：

```plaintext
['chair', 'rack', 'shelf', 'table']
```

## 元组数据类型

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://stackoverflow.com/questions/1708510/list-vs-tuple-when-to-use-each">元组 vs 列表</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    元组和列表之间的关键区别在于，<code>元组</code>是<i>不可变</i>对象，而<code>列表</code>是<i>可变</i>对象。这意味着元组不能被更改，而列表可以被修改。元组比列表更节省内存。
  </base-disclaimer-content>
</base-disclaimer>

```python
furniture = ('table', 'chair', 'rack', 'shelf')

furniture[0]
```

输出：

```plaintext
'table'
```

```python
furniture[1:3]
```

输出：

```plaintext
('chair', 'rack')
```

```python
len(furniture)
```

输出：

```plaintext
4
```

元组与列表的主要区别在于，元组像字符串一样是不可变的。

## 在 list() 和 tuple() 之间转换

```python
tuple(['cat', 'dog', 5])
```

输出：

```plaintext
('cat', 'dog', 5)
```

```python
list(('cat', 'dog', 5))
```

输出：

```plaintext
['cat', 'dog', 5]
```

```python
list('hello')
```

输出：

```plaintext
['h', 'e', 'l', 'l', 'o']
```

## 相关链接

- <router-link to="/blog/python-data-types">Python 数据类型：初学者的视觉指南</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">Python 推导式分步指南</router-link>
- <router-link to="/cheatsheet/comprehensions">Python 推导式</router-link>
- <router-link to="/modules/itertools-module">itertools 模块</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/len">len()</router-link>
