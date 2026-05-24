---
title: 'Python 字典 - Python 速查表'
description: '在 Python 中，字典是键值对的有序集合（Python > 3.7 版本中保持插入顺序）。'
labUrl: 'https://labex.io/zh/labs/python-python-dictionaries-633655?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 字典
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

在 Python 中，字典是 `key`: `value` 对的*有序*（Python > 3.7 起）集合。

<base-disclaimer>
  <base-disclaimer-title>
    来自 Python 3 <a target="_blank" href="https://docs.python.org/3/tutorial/datastructures.html#dictionaries">文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    字典的主要操作是使用某个键存储一个值，以及给定一个键来提取该值。也可以使用 <code>del</code> 删除一个键：值对。
  </base-disclaimer-content>
</base-disclaimer>

示例字典：

```python
# 字典：键值对的集合
my_cat = {
    'size': 'fat',          # 键：'size', 值：'fat'
    'color': 'gray',         # 键：'color', 值：'gray'
    'disposition': 'loud'    # 键：'disposition', 值：'loud'
}
```

## 使用下标运算符 `[]` 设置键、值

```python
# 使用下标运算符添加或更新字典条目
my_cat = {
 'size': 'fat',
 'color': 'gray',
 'disposition': 'loud',
}
my_cat['age_years'] = 2  # 添加新的键值对
print(my_cat)
```

```output
{'size': 'fat', 'color': 'gray', 'disposition': 'loud', 'age_years': 2}
```

## 使用下标运算符 `[]` 获取值

如果字典中不存在该键，则会引发 <a target="_blank" href="https://docs.python.org/3/library/exceptions.html#KeyError">`KeyError`</a>。

```python
my_cat = {
 'size': 'fat',
 'color': 'gray',
 'disposition': 'loud',
}
print(my_cat['size'])
```

```output
fat
```

```python
print(my_cat['eye_color'])
```

```output
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
KeyError: 'eye_color'
```

## values()

`values()` 方法获取字典的**值**：

```python
# 使用 .values() 方法迭代字典值
pet = {'color': 'red', 'age': 42}
for value in pet.values():  # 遍历所有值
    print(value)
```

```output
red
42
```

## keys()

`keys()` 方法获取字典的**键**：

```python
# 使用 .keys() 方法迭代字典键
pet = {'color': 'red', 'age': 42}
for key in pet.keys():  # 遍历所有键
    print(key)
```

```output
color
age
```

由于默认情况下您将遍历键，因此没有必要使用 **.keys()**：

```python
# 直接迭代字典会遍历键（默认行为）
pet = {'color': 'red', 'age': 42}
for key in pet:  # 等同于 for key in pet.keys()
    print(key)
```

```output
color
age
```

## items()

`items()` 方法获取字典的**项**，并将它们作为 <router-link to=/cheatsheet/lists-and-tuples#the-tuple-data-type>元组 (Tuple)</router-link> 返回：

```python
pet = {'color': 'red', 'age': 42}
for item in pet.items():
    print(item)
```

```output
('color', 'red')
('age', 42)
```

使用 `keys()`、`values()` 和 `items()` 方法，`for` 循环可以分别迭代字典中的键、值或键值对。

```python
# 使用 .items() 方法迭代键值对
pet = {'color': 'red', 'age': 42}
for key, value in pet.items():  # 将元组解包为键和值
    print(f'Key: {key} Value: {value}')
```

```output
Key: color Value: red
Key: age Value: 42
```

## get()

`get()` 方法返回具有给定键的项的值。如果键不存在，它返回 `None`：

```python
# .get() 方法：安全地检索值，如果键不存在则返回 None
wife = {'name': 'Rose', 'age': 33}

f'My wife name is {wife.get("name")}'  # 返回 'Rose'
```

```output
'My wife name is Rose'
```

```python
f'She is {wife.get("age")} years old.'
```

```output
'She is 33 years old.'
```

```python
f'She is deeply in love with {wife.get("husband")}'
```

```output
'She is deeply in love with None'
```

您也可以将默认的 `None` 值更改为您选择的任何值：

```python
wife = {'name': 'Rose', 'age': 33}

f'She is deeply in love with {wife.get("husband", "lover")}'
```

```output
'She is deeply in love with lover'
```

## 使用 setdefault() 添加项

可以通过这种方式向字典添加一个项：

```python
wife = {'name': 'Rose', 'age': 33}
if 'has_hair' not in wife:
    wife['has_hair'] = True
```

使用 `setdefault` 方法，我们可以使相同的代码更简洁：

```python
wife = {'name': 'Rose', 'age': 33}
wife.setdefault('has_hair', True)
wife
```

```output
{'name': 'Rose', 'age': 33, 'has_hair': True}
```

## 移除项

### pop()

`pop()` 方法根据给定的键移除并返回一个项。

```python
wife = {'name': 'Rose', 'age': 33, 'hair': 'brown'}
wife.pop('age')
```

```output
33
```

```python
wife
```

```output
{'name': 'Rose', 'hair': 'brown'}
```

<BaseQuiz id="cheatsheet-dictionaries-1" correct="B">
<template #question>
当在字典上调用 <code>pop()</code> 时，它会做什么？
</template>

<BaseQuizOption value="A">A. 只移除键值对</BaseQuizOption>
<BaseQuizOption value="B" correct>B. 移除并返回指定键的值</BaseQuizOption>
<BaseQuizOption value="C">C. 只返回值而不移除它</BaseQuizOption>
<BaseQuizOption value="D">D. 移除字典中的所有项</BaseQuizOption>
<BaseQuizAnswer><code>pop()</code> 方法会移除指定键的键值对并返回该值。如果键不存在，它会引发 <code>KeyError</code>（除非您提供一个默认值）。</BaseQuizAnswer>
</BaseQuiz>

### popitem()

`popitem()` 方法移除字典中的最后一个项并返回它。

```python
wife = {'name': 'Rose', 'age': 33, 'hair': 'brown'}
wife.popitem()
```

```output
('hair', 'brown')
```

```python
wife
```

```output
{'name': 'Rose', 'age': 33}
```

### del

`del` 方法根据给定的键移除一个项。

```python
wife = {'name': 'Rose', 'age': 33, 'hair': 'brown'}
del wife['age']
wife
```

```output
{'name': 'Rose', 'hair': 'brown'}
```

### clear()

`clear()` 方法移除字典中的所有项。

```python
wife = {'name': 'Rose', 'age': 33, 'hair': 'brown'}
wife.clear()
wife
```

```output
{}
```

## 在字典中检查键

```python
person = {'name': 'Rose', 'age': 33}

'name' in person.keys()
```

```output
True
```

```python
'height' in person.keys()
```

```output
False
```

```python
'skin' in person # 可以省略 keys()
```

```output
False
```

## 在字典中检查值

```python
person = {'name': 'Rose', 'age': 33}

'Rose' in person.values()
```

```output
True
```

```python
33 in person.values()
```

```output
True
```

## 漂亮打印 (Pretty Printing)

```python
import pprint

wife = {'name': 'Rose', 'age': 33, 'has_hair': True, 'hair_color': 'brown', 'height': 1.6, 'eye_color': 'brown'}
pprint.pprint(wife)
```

```output
{'age': 33,
 'eye_color': 'brown',
 'hair_color': 'brown',
 'has_hair': True,
 'height': 1.6,
 'name': 'Rose'}
```

## 合并两个字典

对于 Python 3.5+：

```python
dict_a = {'a': 1, 'b': 2}
dict_b = {'b': 3, 'c': 4}
dict_c = {**dict_b, **dict_a}
dict_c
```

```output
{'b': 2, 'c': 4, 'a': 1}
```

<BaseQuiz id="cheatsheet-dictionaries-2" correct="B">
<template #question>
当使用 <code>{**dict_b, **dict_a}</code> 合并两个字典时，如果两个字典具有相同的键，会发生什么？
</template>

<BaseQuizOption value="A">A. <code>dict_b</code> 中的值会覆盖 <code>dict_a</code> 中的值</BaseQuizOption>
<BaseQuizOption value="B" correct>B. <code>dict_a</code> 中的值会覆盖 <code>dict_b</code> 中的值</BaseQuizOption>
<BaseQuizOption value="C">C. 两个值都会被保留在一个列表中</BaseQuizOption>
<BaseQuizOption value="D">D. 引发错误</BaseQuizOption>
<BaseQuizAnswer>当使用 <code>\*\*</code> 解包运算符合并字典时，如果两个字典具有相同的键，后出现的字典（在本例中为 <code>dict_a</code>）中的值会覆盖先出现的字典中的值。</BaseQuizAnswer>
</BaseQuiz>

## 相关链接

- <router-link to="/blog/python-data-types">Python 数据类型博客文章</router-link>
- <router-link to="/blog/python-easy-args-kwargs">Python \*args 和 \*\*kwargs 变得简单</router-link>
- <router-link to="/cheatsheet/comprehensions">推导式 (Comprehensions)</router-link>
- <router-link to="/cheatsheet/args-and-kwargs">Args 和 Kwargs</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">Python 推导式分步指南</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
