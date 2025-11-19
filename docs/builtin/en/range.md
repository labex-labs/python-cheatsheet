---
title: Python range() built-in function - Python Cheatsheet
description: Rather than being a function, range is actually an immutable sequence type, as documented in Ranges and Sequence Types — list, tuple, range.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python range() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#range">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Rather than being a function, range is actually an immutable sequence type, as documented in Ranges and Sequence Types — list, tuple, range.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `range` type is commonly used in `for` loops to loop a specific number of times. `range` takes in three parameters, `start`, `stop` and `step`. Each parameter must be integers (either built-in <router-link to="/builtin/int">int</router-link> or any object that implements the **index**() special method).

If there is only one parameter, it represents the `stop` parameter. If the `step` parameter is omitted at all, it will default to `1`. If the `start` parameter is omitted, it will default to `0`.

Ranges do support negative indices, but these are interpreted as indexing from the end of the sequence determined by the positive indices.

\*\*\*The advantage of the range type over a regular <router-link to="/builtin/list">list</router-link> or <router-link to="/builtin/tuple">tuple</router-link> is that a range object will always take the same (small) amount of memory, no matter the size of the range it represents

## Input Parameters

Ranges implement all of the common sequence operations except concatenation and repetition (due to the fact that range objects can only represent sequences that follow a strict pattern and repetition and concatenation will usually violate that pattern).

`start`:

- The value of the start parameter
- If not supplied, parameter will default to 0
- Parameter value is _inclusive_

`stop`

- The value of the stop parameter
- The only parameter that is required
- Parameter value is _exclusive_

`step`

- The value of the step parameter
- If not supplied, parameter will default to 1

## Examples

Range with only `stop` parameter specified

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

Range with both `start` and `stop` parameters

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

Range with all parameters specified

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

Range with all parameters, where the `stop` parameter is not divisible by the `step` parameter

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

Range with all parameters, where the `stop` and `step` parameters are negative

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

Two examples where the `stop` parameter is set to 0

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

## Relevant links

- <router-link to="/cheatsheet/control-flow">Cheatsheet: Control Flow (for loops)</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: Lists and Tuples</router-link>
- <router-link to="/modules/itertools-module">Module: itertools</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/reversed">reversed()</router-link>
- <router-link to="/builtin/enumerate">enumerate()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/int">int()</router-link>
