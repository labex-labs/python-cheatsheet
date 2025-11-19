---
title: 'Python 내장 함수 aiter() - Python 치트 시트'
description: '비동기 이터러블 (asynchronous iterable) 에 대한 비동기 이터레이터 (asynchronous iterator) 를 반환합니다. x.__aiter__() 호출과 동일합니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python aiter() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#aiter">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
    비동기 반복 가능한 객체에 대한 비동기 반복자 (asynchronous iterator) 를 반환합니다. 이는 x.__aiter__() 를 호출하는 것과 동일합니다. aiter() 는 iter() 의 비동기 버전입니다.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

`aiter()` 함수는 비동기 반복 가능한 객체로부터 비동기 반복자를 반환합니다. 이는 `iter()` 함수의 비동기 버전입니다.

일반적으로 `async for` 루프를 사용할 때 `aiter()`를 암시적으로 사용하지만, 종종 `anext()`와 함께 수동으로 반복자를 다루어야 할 때 직접 호출할 수 있습니다.

## 예시

다음은 비동기 반복 가능한 객체의 예시입니다. `async for` 루프는 `AsyncCounter` 객체에서 `aiter()`를 자동으로 호출하여 반복자를 얻습니다.

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

## 관련 링크

- <router-link to="/cheatsheet/control-flow">치트시트: 제어 흐름 (async for)</router-link>
- <router-link to="/cheatsheet/functions">치트시트: 함수 (async def)</router-link>
- <router-link to="/modules/itertools-module">모듈: itertools</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
- <router-link to="/builtin/next">next()</router-link>
