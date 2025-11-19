---
title: 'Python 組み込み関数 enumerate() - Python チートシート'
description: 'enumerate オブジェクトを返します。iterable はシーケンス、イテレータ、またはイテレーションをサポートするその他のオブジェクトである必要があります。enumerate() によって返されるイテレータの__next__() メソッドは、カウント（デフォルトは 0 から開始）と iterable から取得した値を含むタプルを返します。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python enumerate() ビルトイン関数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#enumerate">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
   enumerate オブジェクトを返します。iterable はシーケンス、イテレータ、またはイテレーションをサポートするその他のオブジェクトである必要があります。enumerate() によって返されるイテレータの __next__() メソッドは、カウント（start から、デフォルトは 0）と iterable から取得した値を含むタプルを返します。
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Python の `enumerate()` 関数は、イテラブルにカウンターを追加するビルトイン関数です。これは enumerate オブジェクトを返し、カウント（開始インデックスから、デフォルトは 0）とイテラブルからの対応する値をペアにして返します。これは、シーケンスをループ処理しながらインデックスとアイテムの両方が必要な場合に特に役立ちます。

## Examples

```python
l = enumerate([1, 2, 3, 4, 5])
print(l)
print(l.__next__())
print(l.__next__())
print(l.__next__())
print(l.__next__())
print(l.__next__())
```

```output
<enumerate object at 0x7fcac409cc40>
(0, 1)
(1, 2)
(2, 3)
(3, 4)
(4, 5)
```

`enumerate` は通常、アイテムのインデックスを取得するために `for` ループで使用されます。

```python
for i, item in enumerate([1, 2, 3, 4, 5]):
    print(f"Index: {i}, Item: {item}")
```

```output
Index: 0, Item: 1
Index: 1, Item: 2
Index: 2, Item: 3
Index: 3, Item: 4
Index: 4, Item: 5
```

## Relevant links

- <router-link :to="'/cheatsheet/control-flow'">Control Flow</router-link>
- <router-link :to="'/builtin/iter'">iter()</router-link>
- <router-link :to="'/builtin/next'">next()</router-link>
- <router-link :to="'/cheatsheet/lists-and-tuples'">Lists and Tuples</router-link>
- <router-link :to="'/builtin/zip'">zip()</router-link>
- <router-link :to="'/builtin/range'">range()</router-link>
