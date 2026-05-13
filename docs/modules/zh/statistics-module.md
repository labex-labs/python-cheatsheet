---
title: "Python Statistics 模块 - Python 速查表"
description: "`statistics` 模块提供了用于计算平均数、中位数和其他描述性统计量的简单工具。"
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Statistics 模块
</base-title>

`statistics` 模块提供了用于计算平均数、中位数和其他描述性统计量的简单工具。

该模块从 Python 3.4 开始加入标准库。

```python
import statistics
```

当你需要对一小组数字做常见统计计算时，可以使用 `statistics`。如果是更高级的数据分析，NumPy 和 pandas 更强大，但它们不属于标准库。

## mean()

```python
import statistics

scores = [80, 90, 95, 100]
print(statistics.mean(scores))
```

```output
91.25
```

`fmean` 会返回浮点数平均值，处理数字数据时通常更快：

```python
import statistics

print(statistics.fmean([1, 2, 3]))
```

```output
2.0
```

## median()

```python
import statistics

values = [1, 3, 5, 100]
print(statistics.median(values))
```

```output
4.0
```

## mode()

`mode` 会返回最常见的值。

```python
import statistics

print(statistics.mode(['python', 'python', 'rust']))
```

```output
python
```

如果有多个值并列最常见，`multimode` 会把它们全部返回：

```python
import statistics

print(statistics.multimode(['red', 'blue', 'red', 'blue']))
```

```output
['red', 'blue']
```

## stdev()

`stdev` 用于计算样本标准差。

```python
import statistics

print(round(statistics.stdev([2, 4, 4, 4, 5, 5, 7, 9]), 2))
```

```output
2.14
```

## 处理空数据

对于空输入，大多数函数都会抛出 `StatisticsError`。

```python
import statistics

try:
    statistics.mean([])
except statistics.StatisticsError as error:
    print(type(error).__name__)
```

```output
StatisticsError
```

## 相关链接

- <router-link to="/modules/math-module">模块：math</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">速查表：列表和元组</router-link>
- <router-link to="/builtin/round">round()</router-link>
