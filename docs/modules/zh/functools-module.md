---
title: Python Functools 模块 - Python 速查表
description: `functools` 模块包含处理高阶函数的工具，例如 `partial`、`reduce` 和 `lru_cache`。
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Functools 模块
</base-title>

`functools` 模块提供了处理高阶函数的工具，例如 `partial`、`reduce` 和 `lru_cache`。

```python
import functools
```

高阶函数是指与其他函数配合使用的函数。初学者最常用 `functools` 的场景，是固定部分参数后复用函数，或者缓存代价较高的计算结果。

## partial()

`partial` 会创建一个新的可调用对象，并预先填入部分参数。

```python
from functools import partial

def power(base, exponent):
    return base ** exponent

square = partial(power, exponent=2)
print(square(5))
```

```output
25
```

当另一个函数需要一个参数更少的可调用对象时，这会很有用：

```python
from functools import partial

def greet(greeting, name):
    return f'{greeting}, {name}!'

say_hello = partial(greet, 'Hello')
print(say_hello('Ada'))
```

```output
Hello, Ada!
```

## reduce()

`reduce` 会把一个可迭代对象合并成单个值。

```python
from functools import reduce

total = reduce(lambda acc, item: acc + item, [1, 2, 3, 4])
print(total)
```

```output
10
```

对于简单求和，优先使用内置的 `sum()`。当合并方式是自定义的时，`reduce` 才更有用。

```python
from functools import reduce

words = ['Python', 'Cheatsheet']
title = reduce(lambda left, right: f'{left} {right}', words)
print(title)
```

```output
Python Cheatsheet
```

## lru_cache()

`lru_cache` 会缓存函数结果。

```python
from functools import lru_cache

@lru_cache(maxsize=None)
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(10))
```

```output
55
```

你可以查看缓存的使用情况：

```python
print(fibonacci.cache_info().hits > 0)
```

```output
True
```

## 相关链接

- <router-link to="/cheatsheet/functions">速查表：函数</router-link>
- <router-link to="/cheatsheet/decorators">速查表：装饰器</router-link>
- <router-link to="/modules/itertools-module">模块：itertools</router-link>
