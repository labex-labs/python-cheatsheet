---
title: Python aiter() built-in function - Python Cheatsheet
description: Return an asynchronous iterator for an asynchronous iterable. Equivalent to calling x.__aiter__().
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python aiter() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#aiter">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Return an asynchronous iterator for an asynchronous iterable. Equivalent to calling x.__aiter__(). aiter() is an async equivalent of iter()
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `aiter()` function returns an asynchronous iterator from an asynchronous iterable object. It's the asynchronous equivalent of the `iter()` function.

You'll typically use `aiter()` implicitly when using an `async for` loop, but you can call it directly if you need to work with the iterator manually, often in conjunction with `anext()`.

## Example

Here's an example of an asynchronous iterable. The `async for` loop automatically calls `aiter()` on the `AsyncCounter` object to get an iterator.

```python
import asyncio

class AsyncCounter:
    def __init__(self, stop):
        self.stop = stop
        self.current = 0

    def __aiter__(self):
        return self

    async def __anext__(self):
        if self.current < self.stop:
            await asyncio.sleep(0.1)
            value = self.current
            self.current += 1
            return value
        else:
            raise StopAsyncIteration

async def main():
    async for number in AsyncCounter(3):
        print(number)

# To run this in a real environment:
# asyncio.run(main())
```

Output:

```plaintext
0
1
2
```

## Relevant links

- <router-link to="/cheatsheet/control-flow">Cheatsheet: Control Flow (async for)</router-link>
- <router-link to="/cheatsheet/functions">Cheatsheet: Functions (async def)</router-link>
- <router-link to="/modules/itertools-module">Module: itertools</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
- <router-link to="/builtin/next">next()</router-link>
