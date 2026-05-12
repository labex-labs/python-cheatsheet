---
title: Python Statistics Module - Python Cheatsheet
description: The statistics module provides simple tools for calculating averages, medians, and other descriptive statistics.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Statistics Module
</base-title>

The `statistics` module provides simple tools for calculating averages, medians, and other descriptive statistics.

The module was added in Python 3.4.

```python
import statistics
```

Use `statistics` when you need common calculations for a small list of numbers. For advanced data analysis, libraries like NumPy and pandas are more powerful, but they are not part of the standard library.

## mean()

```python
import statistics

scores = [80, 90, 95, 100]
print(statistics.mean(scores))
```

```output
91.25
```

`fmean` returns a floating-point mean and is often faster for numeric data:

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

`mode` returns the most common value.

```python
import statistics

print(statistics.mode(['python', 'python', 'rust']))
```

```output
python
```

If more than one value is common, `multimode` returns all of them:

```python
import statistics

print(statistics.multimode(['red', 'blue', 'red', 'blue']))
```

```output
['red', 'blue']
```

## stdev()

`stdev` calculates the sample standard deviation.

```python
import statistics

print(round(statistics.stdev([2, 4, 4, 4, 5, 5, 7, 9]), 2))
```

```output
2.14
```

## Handling empty data

Most functions raise `StatisticsError` for empty input.

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

## Relevant links

- <router-link to="/modules/math-module">Module: math</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: Lists and Tuples</router-link>
- <router-link to="/builtin/round">round()</router-link>
