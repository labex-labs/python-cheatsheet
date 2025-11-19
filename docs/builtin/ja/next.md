---
title: 'Python 組み込み関数 next() - Python チートシート'
description: 'イテレータの next() メソッドを呼び出して次のアイテムを取得します。デフォルトが指定されている場合、イテレータが枯渇したときに返され、指定されていない場合は StopIteration が発生します。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python next() ビルトイン関数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#next">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
   イテレータの __next__() メソッドを呼び出して、イテレータから次の項目を取得します。default が指定されている場合、イテレータが枯渇するとそれが返されます。指定されていない場合は、StopIteration が送出されます。
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

`next()` 関数は、イテレータから次の項目を取得します。イテレータが枯渇すると、`StopIteration` 例外が発生します。

イテレータが枯渇した場合に返されるデフォルト値を指定することもでき、これにより `StopIteration` 例外を防ぐことができます。

### Examples

**イテレータを使用した `next()` の使用:**

```python
my_list = [1, 2]
my_iter = iter(my_list)

print(next(my_iter))
print(next(my_iter))

try:
    print(next(my_iter))
except StopIteration:
    print("Iterator is exhausted")
```

```output
1
2
Iterator is exhausted
```

**デフォルト値を使用した `next()` の使用:**

```python
my_iter = iter([1])
print(next(my_iter, "default"))
print(next(my_iter, "default"))
```

```output
1
default
```

その他の例：

```python
i = iter([1, 2, 3])
print(next(i))
print(next(i))
print(next(i))
```

```output
1
2
3
```

## Relevant links

- <router-link to="/cheatsheet/control-flow">Cheatsheet: Control Flow (for loops)</router-link>
- <router-link to="/modules/itertools-module">Module: itertools</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
- <router-link to="/builtin/map">map()</router-link>
- <router-link to="/builtin/filter">filter()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
