---
title: 'Python range() 内置函数 - Python 速查表'
description: 'range() 并非函数，而是一个不可变序列类型，如“Ranges and Sequence Types — list, tuple, range”文档所述。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python range() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#range">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   range 实际上不是一个函数，而是一个不可变序列类型，如 Ranges and Sequence Types — list, tuple, range 中所述。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

`range` 类型通常用于 `for` 循环中以循环特定的次数。`range` 接受三个参数：`start`、`stop` 和 `step`。每个参数必须是整数（内置的 <router-link to="/builtin/int">int</router-link> 或任何实现了 **index**() 特殊方法的对象）。

如果只有一个参数，它代表 `stop` 参数。如果完全省略了 `step` 参数，它将默认为 `1`。如果省略了 `start` 参数，它将默认为 `0`。

Range 支持负数索引，但这被解释为从由正数索引确定的序列末尾开始索引。

\*\*\*与常规的 <router-link to="/builtin/list">list</router-link> 或 <router-link to="/builtin/tuple">tuple</router-link> 相比，range 类型的优势在于，无论它表示的范围有多大，range 对象始终占用相同的（较小的）内存量。

## 输入参数

Range 实现所有常见的序列操作，但不包括连接和重复（因为 range 对象只能表示遵循严格模式的序列，而重复和连接通常会违反该模式）。

`start`:

- start 参数的值
- 如果未提供，参数将默认为 0
- 参数值是*包含的*

`stop`

- stop 参数的值
- 唯一必需的参数
- 参数值是*不包含的*

`step`

- step 参数的值
- 如果未提供，参数将默认为 1

## 示例

仅指定 `stop` 参数的 Range

```python
for i in range(5):
    print(i)
```

```output
0
1
2
3
4
```

指定了 `start` 和 `stop` 参数的 Range

```python
for i in range(1, 8):
    print(i)
```

```output
1
2
3
4
5
6
7
```

指定了所有参数的 Range

```python
for i in range(0, 30, 5):
    print(i)
```

```output
0
5
10
15
20
25
```

指定了所有参数的 Range，其中 `stop` 参数不能被 `step` 参数整除

```python
for i in range(0, 10, 3):
    print(i)
```

```output
0
3
6
9
```

指定了所有参数的 Range，其中 `stop` 和 `step` 参数为负数

```python
for i in range(0, -6, -1):
    print(i)
```

```output
0
-1
-2
-3
-4
-5
```

`stop` 参数设置为 0 的两个示例

```python
for i in range(0):
    print(i)
```

```output
(no output)
```

```python
for i in range(1, 0):
    print(i)
```

```output
(no output)
```

## 相关链接

- <router-link to="/cheatsheet/control-flow">备忘单：控制流 (for 循环)</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">备忘单：列表和元组</router-link>
- <router-link to="/modules/itertools-module">模块：itertools</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/reversed">reversed()</router-link>
- <router-link to="/builtin/enumerate">enumerate()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/int">int()</router-link>
