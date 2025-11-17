---
title: 'Python aiter() 内置函数 - Python 速查表'
description: '返回异步可迭代对象的异步迭代器。等同于调用 x.__aiter__()。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python aiter() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#aiter">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    返回一个异步可迭代对象的异步迭代器。等同于调用 x.__aiter__()。aiter() 是 iter() 的异步等价物
  </base-disclaimer-content>
</base-disclaimer>

## 简介

`aiter()` 函数从一个异步可迭代对象返回一个异步迭代器。它是 `iter()` 函数的异步等价物。

通常在使用 `async for` 循环时会隐式使用 `aiter()`，但如果你需要手动处理迭代器（通常与 `anext()` 结合使用），你可以直接调用它。

## 示例

这是一个异步可迭代对象的示例。`async for` 循环会自动在 `AsyncCounter` 对象上调用 `aiter()` 来获取一个迭代器。

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

# 在真实环境中运行：
# asyncio.run(main())
```

输出：

```plaintext
0
1
2
```

## 相关链接

- <router-link to="/cheatsheet/control-flow">速查表：控制流 (async for)</router-link>
- <router-link to="/cheatsheet/functions">速查表：函数 (async def)</router-link>
- <router-link to="/modules/itertools-module">模块：itertools</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
- <router-link to="/builtin/next">next()</router-link>
