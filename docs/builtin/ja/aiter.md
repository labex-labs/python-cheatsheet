---
title: 'Python 組み込み関数 aiter() - Python チートシート'
description: '非同期イテラブルの非同期イテレータを返します。x.__aiter__() の呼び出しと同等です。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python aiter() ビルトイン関数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#aiter">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
    非同期イテラブルの非同期イテレータを返します。x.__aiter__() を呼び出すことと同等です。aiter() は iter() の async 版です。
  </base-disclaimer-content>
</base-disclaimer>

## 導入

`aiter()` 関数は、非同期イテラブルオブジェクトから非同期イテレータを返します。これは `iter()` 関数の非同期版です。

通常、`async for` ループを使用する際に `aiter()` は暗黙的に呼び出されますが、イテレータを手動で操作する場合（多くの場合 `anext()` と組み合わせて）は直接呼び出すことができます。

## 例

非同期イテラブルの例を以下に示します。`async for` ループは、イテレータを取得するために `AsyncCounter` オブジェクトに対して自動的に `aiter()` を呼び出します。

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

# 実際の環境で実行するには：
# asyncio.run(main())
```

出力：

```plaintext
0
1
2
```

## 関連リンク

- <router-link to="/cheatsheet/control-flow">チートシート：制御フロー (async for)</router-link>
- <router-link to="/cheatsheet/functions">チートシート：関数 (async def)</router-link>
- <router-link to="/modules/itertools-module">モジュール：itertools</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
- <router-link to="/builtin/next">next()</router-link>
