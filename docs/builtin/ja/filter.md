---
title: 'Python 組み込み関数 filter() - Python チートシート'
description: 'イテラブルの要素のうち、関数が真を返すものからイテレータを構築します。イテラブルはシーケンス、イテレーションをサポートするコンテナ、またはイテレータのいずれかです。関数が None の場合、恒等関数（つまり、偽となるイテラブルの全要素が削除される）が想定されます。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python filter() ビルトイン関数のチートシート
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#filter">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
   関数が真を返すイテラブルの要素からイテレータを構築します。iterable は、シーケンス、イテレーションをサポートするコンテナ、またはイテレータのいずれかです。関数が None の場合、恒等関数（identity function）が想定されます。つまり、iterable の偽であるすべての要素が削除されます。
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Python の `filter()` 関数は、イテラブルを処理し、特定の条件を満たす項目を抽出するためのビルトイン関数です。条件を満たす要素を持つ <router-link to="/builtin/iter">イテレータ</router-link>を返します。

## Syntax

```python
filter(function, iterable)
```

- **function**: イテラブルの各項目に対して実行される関数。各項目に対して `True` または `False` を返す必要があります。
- **iterable**: フィルタリングするイテラブル（リスト、タプル、文字列など）。

## Description

`filter()` 関数は、関数が `True` を返すイテラブルの要素からイテレータを構築します。関数が `None` の場合、イテラブルの偽であるすべての要素を削除します。

## Example

```python
def is_even(num):
    return num % 2 == 0

numbers = [1, 2, 3, 4, 5, 6]
even_numbers = list(filter(is_even, numbers))
print(even_numbers)
```

```output
[2, 4, 6]
```

この例では、数値が偶数かどうかを判定するために `is_even` 関数が定義されています。filter メソッドは `2 つの引数`を取ります。`最初の引数`はリストの各要素に適用される関数であり、`2番目の引数`はフィルタリングされるリストです。filter メソッドは <router-link to="/builtin/iter">イテレータ</router-link>を返し、これはリストに変換され、even_numbers 変数に格納されます。最終的な出力は、元のリストからの偶数のリストです。

## Relevant links

- <router-link :to="'/builtin/map'">map()</router-link>: イテラブルのすべての項目に関数を適用し、結果のイテレータを返します。
- <router-link :to="'/builtin/iter'">iter()</router-link>: イテレータオブジェクトを返します。
- <router-link :to="'/blog/python-comprehensions-step-by-step'">List Comprehensions</router-link>: リストを作成するための簡潔な方法であり、`filter()` の代替としてよく使用されます。
- <router-link :to="'/cheatsheet/comprehensions'">Comprehensions</router-link>
- <router-link :to="'/cheatsheet/functions'">Functions</router-link>
- <router-link :to="'/builtin/reduce'">reduce()</router-link>
