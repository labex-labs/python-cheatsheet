---
title: 'Python next() 内置函数 - Python 速查表'
description: '调用迭代器的 __next__() 方法获取下一个项。如果提供了 default 值，则在迭代器耗尽时返回该值，否则引发 StopIteration 异常。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python next() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#next">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   通过调用其 __next__() 方法检索迭代器的下一个项。如果提供了 default，则在迭代器耗尽时返回它，否则引发 StopIteration。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

`next()` 函数从迭代器中检索下一个项。如果迭代器耗尽，它会引发 `StopIteration` 异常。

您也可以提供一个默认值，在迭代器耗尽时返回该值，从而避免 `StopIteration` 异常。

### 示例

**使用 `next()` 和迭代器：**

```python
my_list = [1, 2]
my_iter = iter(my_list)

print(next(my_iter))
print(next(my_iter))

try:
    print(next(my_iter))
except StopIteration:
    print("Iterator is exhausted")
```

```output
1
2
Iterator is exhausted
```

**使用 `next()` 和默认值：**

```python
my_iter = iter([1])
print(next(my_iter, "default"))
print(next(my_iter, "default"))
```

```output
1
default
```

更多示例：

```python
i = iter([1, 2, 3])
print(next(i))
print(next(i))
print(next(i))
```

```output
1
2
3
```

## 相关链接

- <router-link to="/cheatsheet/control-flow">速查表：控制流 (for 循环)</router-link>
- <router-link to="/modules/itertools-module">模块：itertools</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
- <router-link to="/builtin/map">map()</router-link>
- <router-link to="/builtin/filter">filter()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
