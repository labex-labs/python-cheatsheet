---
title: 'Встроенная функция Python aiter() - Шпаргалка по Python'
description: 'Возвращает асинхронный итератор для асинхронного итерируемого объекта. Эквивалентно вызову x.__aiter__().'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python aiter()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#aiter">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Возвращает асинхронный итератор для асинхронного итерируемого объекта. Эквивалентно вызову x.__aiter__(). aiter() — это асинхронный эквивалент iter()
  </base-disclaimer-content>
</base-disclaimer>

## Введение

Функция `aiter()` возвращает асинхронный итератор из асинхронного итерируемого объекта. Это асинхронный эквивалент функции `iter()`.

Обычно вы используете `aiter()` неявно при использовании цикла `async for`, но вы можете вызвать ее напрямую, если вам нужно работать с итератором вручную, часто в сочетании с `anext()`.

## Пример

Вот пример асинхронного итерируемого объекта. Цикл `async for` автоматически вызывает `aiter()` для объекта `AsyncCounter`, чтобы получить итератор.

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

```output
0
1
2
```

## Связанные ссылки

- <router-link to="/cheatsheet/control-flow">Шпаргалка: Управление потоком (async for)</router-link>
- <router-link to="/cheatsheet/functions">Шпаргалка: Функции (async def)</router-link>
- <router-link to="/modules/itertools-module">Модуль: itertools</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
- <router-link to="/builtin/next">next()</router-link>
