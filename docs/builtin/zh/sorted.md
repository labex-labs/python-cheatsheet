---
title: 'Python sorted() 内置函数 - Python 速查表'
description: '从可迭代对象中的元素返回一个新排序的列表。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python sorted() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#sorted">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   从可迭代对象中的元素返回一个新的已排序列表。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

`sorted()` 函数从可迭代对象中的元素返回一个新的已排序列表。它不会修改原始可迭代对象。

您也可以使用 `reverse` 参数以降序排序。

### 示例

**排序数字列表：**

```python
numbers = [3, 1, 4, 1, 5, 9, 2, 6]
sorted_numbers = sorted(numbers)
print(sorted_numbers)
```

输出：

```plaintext
[1, 1, 2, 3, 4, 5, 6, 9]
```

**排序字符串列表：**

```python
words = ["banana", "apple", "cherry"]
sorted_words = sorted(words)
print(sorted_words)
```

输出：

```plaintext
['apple', 'banana', 'cherry']
```

**降序排序：**

```python
numbers = [3, 1, 4, 1, 5, 9, 2, 6]
sorted_numbers_desc = sorted(numbers, reverse=True)
print(sorted_numbers_desc)
```

输出：

```plaintext
[9, 6, 5, 4, 3, 2, 1, 1]
```

## 相关链接

- <router-link to="/cheatsheet/lists-and-tuples">备忘单：列表和元组</router-link>
- <router-link to="/cheatsheet/dictionaries">备忘单：字典</router-link>
- <router-link to="/cheatsheet/functions">备忘单：函数 (关于 key 参数)</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/reversed">reversed()</router-link>
- <router-link to="/builtin/min">min()</router-link>
- <router-link to="/builtin/max">max()</router-link>
