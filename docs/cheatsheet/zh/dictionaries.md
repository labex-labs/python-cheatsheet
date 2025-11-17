---
title: 'Python 字典 - Python 速查表'
description: '在 Python 中，字典是键值对的插入有序（Python > 3.7 起）集合。'
labUrl: 'https://labex.io/zh/labs/python-python-dictionaries-633655?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 字典
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

在 Python 中，字典是键 (`key`)、值 (`value`) 对的**有序**（Python > 3.7 起）集合。

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

输出：

```plaintext
{'size': 'fat', 'color': 'gray', 'disposition': 'loud', 'age_years': 2}
```

## 使用下标运算符 `[]` 获取值

如果字典中不存在该键，将引发 <a target="_blank" href="https://docs.python.org/3/library/exceptions.html#KeyError">`KeyError`</a>。

```python
my_cat = {
 'size': 'fat',
 'color': 'gray',
 'disposition': 'loud',
}
print(my_cat['size'])
```

输出：

```plaintext
fat
```

```python
print(my_cat['eye_color'])
```

输出：

```plaintext
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
KeyError: 'eye_color'
```

## values()

`values()` 方法获取字典的**值**：

```python
# 使用 .values() 方法遍历字典值
pet = {'color': 'red', 'age': 42}
for value in pet.values():  # 遍历所有值
    print(value)
```

输出：

```plaintext
red
42
```

## keys()

`keys()` 方法获取字典的**键**：

```python
# 使用 .keys() 方法遍历字典键
pet = {'color': 'red', 'age': 42}
for key in pet.keys():  # 遍历所有键
    print(key)
```

输出：

```plaintext
color
age
```

默认情况下，直接遍历字典会遍历键，因此不需要使用 **.keys()**：

```python
# 默认行为：直接迭代字典会遍历键
pet = {'color': 'red', 'age': 42}
for key in pet:  # 等同于 for key in pet.keys()
    print(key)
```

输出：

```plaintext
color
age
```

## items()

`items()` 方法获取字典的**项**（键值对），并以 <router-link to=/cheatsheet/lists-and-tuples#the-tuple-data-type>元组 (Tuple)</router-link> 的形式返回：

```python
pet = {'color': 'red', 'age': 42}
for item in pet.items():
    print(item)
```

输出：

```plaintext
('color', 'red')
('age', 42)
```

使用 `keys()`、`values()` 和 `items()` 方法，`for` 循环可以分别迭代字典中的键、值或键值对。

```python
# 使用 .items() 方法遍历键值对
pet = {'color': 'red', 'age': 42}
for key, value in pet.items():  # 将元组解包为键和值
    print(f'键：{key} 值：{value}')
```

输出：

```plaintext
键: color 值: red
键: age 值: 42
```

## get()

`get()` 方法根据给定的键返回项的值。如果键不存在，则返回 `None`：

```python
# .get() 方法：安全地检索值，如果键不存在则返回 None
wife = {'name': 'Rose', 'age': 33}

f'我妻子叫 {wife.get("name")}'  # 返回 'Rose'
```

输出：

```plaintext
'我妻子叫 Rose'
```

```python
f'她 {wife.get("age")} 岁了。'
```

输出：

```plaintext
'她 33 岁了。'
```

```python
f'她深爱着 {wife.get("husband")}'
```

输出：

```plaintext
'她深爱着 None'
```

您也可以将默认的 `None` 值更改为您选择的任何值：

```python
wife = {'name': 'Rose', 'age': 33}

f'她深爱着 {wife.get("husband", "情人")}'
```

输出：

```plaintext
'她深爱着 情人'
```

## 使用 setdefault() 添加项

可以通过这种方式向字典添加一个项：

```python
wife = {'name': 'Rose', 'age': 33}
if 'has_hair' not in wife:
    wife['has_hair'] = True
```

使用 `setdefault` 方法，可以使相同的代码更简洁：

```python
wife = {'name': 'Rose', 'age': 33}
wife.setdefault('has_hair', True)
wife
```

输出：

```plaintext
{'name': 'Rose', 'age': 33, 'has_hair': True}
```

## 删除项

### pop()

`pop()` 方法根据给定的键删除并返回一个项。

```python
wife = {'name': 'Rose', 'age': 33, 'hair': 'brown'}
wife.pop('age')
```

输出：

```plaintext
33
```

```python
wife
```

输出：

```plaintext
{'name': 'Rose', 'hair': 'brown'}
```

### popitem()

`popitem()` 方法删除字典中的最后一个项并返回它。

```python
wife = {'name': 'Rose', 'age': 33, 'hair': 'brown'}
wife.popitem()
```

输出：

```plaintext
('hair', 'brown')
```

```python
wife
```

输出：

```plaintext
{'name': 'Rose', 'age': 33}
```

### del()

`del()` 方法根据给定的键删除一个项。

```python
wife = {'name': 'Rose', 'age': 33, 'hair': 'brown'}
del wife['age']
wife
```

输出：

```plaintext
{'name': 'Rose', 'hair': 'brown'}
```

### clear()

`clear()` 方法删除字典中的所有项。

```python
wife = {'name': 'Rose', 'age': 33, 'hair': 'brown'}
wife.clear()
wife
```

输出：

```plaintext
{}
```

## 在字典中检查键

```python
person = {'name': 'Rose', 'age': 33}

'name' in person.keys()
```

输出：

```plaintext
True
```

```python
'height' in person.keys()
```

输出：

```plaintext
False
```

```python
'skin' in person # 可以省略 keys()
```

输出：

```plaintext
False
```

## 在字典中检查值

```python
person = {'name': 'Rose', 'age': 33}

'Rose' in person.values()
```

输出：

```plaintext
True
```

```python
33 in person.values()
```

输出：

```plaintext
True
```

## 漂亮打印 (Pretty Printing)

```python
import pprint

wife = {'name': 'Rose', 'age': 33, 'has_hair': True, 'hair_color': 'brown', 'height': 1.6, 'eye_color': 'brown'}
pprint.pprint(wife)
```

输出：

```plaintext
{'age': 33,
 'eye_color': 'brown',
 'hair_color': 'brown',
 'has_hair': True,
 'height': 1.6,
 'name': 'Rose'}
```

## 合并两个字典

Python 3.5+:

```python
dict_a = {'a': 1, 'b': 2}
dict_b = {'b': 3, 'c': 4}
dict_c = {**dict_a, **dict_b}
dict_c
```

输出：

```plaintext
{'a': 1, 'b': 3, 'c': 4}
```

## 相关链接

- <router-link to="/blog/python-data-types">Python 数据类型博客文章</router-link>
- <router-link to="/blog/python-easy-args-kwargs">Python \*args 和 \*\*kwargs 轻松掌握</router-link>
- <router-link to="/cheatsheet/comprehensions">列表推导式 (Comprehensions)</router-link>
- <router-link to="/cheatsheet/args-and-kwargs">Args 和 Kwargs</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">Python 推导式分步指南</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
