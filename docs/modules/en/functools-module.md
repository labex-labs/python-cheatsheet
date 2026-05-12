---
title: Python Functools Module - Python Cheatsheet
description: The functools module contains tools for higher-order functions such as partial, reduce, and lru_cache.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Functools Module
</base-title>

The `functools` module contains tools for higher-order functions such as `partial`, `reduce`, and `lru_cache`.

```python
import functools
```

Higher-order functions are functions that work with other functions. Beginners most often use `functools` to reuse a function with some arguments fixed, or to cache expensive results.

## partial()

`partial` creates a new callable with some arguments already filled in.

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

This is helpful when another function expects a callable with fewer arguments:

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

`reduce` combines an iterable into a single value.

```python
from functools import reduce

total = reduce(lambda acc, item: acc + item, [1, 2, 3, 4])
print(total)
```

```output
10
```

For simple sums, prefer the built-in `sum()` function. `reduce` is more useful when the combining operation is custom.

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

`lru_cache` memoizes function results.

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

You can inspect cache usage:

```python
print(fibonacci.cache_info().hits > 0)
```

```output
True
```

## Relevant links

- <router-link to="/cheatsheet/functions">Cheatsheet: Functions</router-link>
- <router-link to="/cheatsheet/decorators">Cheatsheet: Decorators</router-link>
- <router-link to="/modules/itertools-module">Module: itertools</router-link>
