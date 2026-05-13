---
title: "Python Functools モジュール - Python チートシート"
description: "`functools` モジュールには、`partial`、`reduce`、`lru_cache` などの高階関数向けのツールがあります。"
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Functools モジュール
</base-title>

`functools` モジュールには、`partial`、`reduce`、`lru_cache` などの高階関数向けのツールがあります。

```python
import functools
```

高階関数は、ほかの関数と一緒に使う関数です。初心者が `functools` をよく使う場面は、いくつかの引数を固定して関数を再利用する場合や、コストの高い結果をキャッシュする場合です。

## partial()

`partial` は、いくつかの引数をあらかじめ埋めた新しい callable を作成します。

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

別の関数がより少ない引数の callable を期待しているときに便利です。

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

`reduce` はイテラブルを 1 つの値にまとめます。

```python
from functools import reduce

total = reduce(lambda acc, item: acc + item, [1, 2, 3, 4])
print(total)
```

```output
10
```

単純な合計なら、組み込みの `sum()` を使う方がよいです。`reduce` は、結合処理が独自のときにより役立ちます。

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

`lru_cache` は関数の結果をメモ化します。

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

キャッシュの使用状況を確認できます。

```python
print(fibonacci.cache_info().hits > 0)
```

```output
True
```

## 関連リンク

- <router-link to="/cheatsheet/functions">チートシート: 関数</router-link>
- <router-link to="/cheatsheet/decorators">チートシート: デコレータ</router-link>
- <router-link to="/modules/itertools-module">モジュール: itertools</router-link>
