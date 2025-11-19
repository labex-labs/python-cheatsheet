---
title: 'Python 組み込み関数 sorted() - Python チートシート'
description: 'イテラブルの要素から新しいソート済みリストを返します。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python sorted() ビルトイン関数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#sorted">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
   イテラブルの要素から新しいソート済みリストを返します。
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

`sorted()` 関数は、イテラブルの要素から新しいソート済みリストを返します。元のイテラブルは変更されません。

`reverse` パラメータを使用して、降順にソートすることもできます。

### Examples

**数値のリストのソート：**

```python
numbers = [3, 1, 4, 1, 5, 9, 2, 6]
sorted_numbers = sorted(numbers)
print(sorted_numbers)
```

```output
[1, 1, 2, 3, 4, 5, 6, 9]
```

**文字列のリストのソート：**

```python
words = ["banana", "apple", "cherry"]
sorted_words = sorted(words)
print(sorted_words)
```

```output
['apple', 'banana', 'cherry']
```

**逆順のソート：**

```python
numbers = [3, 1, 4, 1, 5, 9, 2, 6]
sorted_numbers_desc = sorted(numbers, reverse=True)
print(sorted_numbers_desc)
```

```output
[9, 6, 5, 4, 3, 2, 1, 1]
```

## Relevant links

- <router-link to="/cheatsheet/lists-and-tuples">チートシート：リストとタプル</router-link>
- <router-link to="/cheatsheet/dictionaries">チートシート：辞書</router-link>
- <router-link to="/cheatsheet/functions">チートシート：関数 (key 引数について)</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/reversed">reversed()</router-link>
- <router-link to="/builtin/min">min()</router-link>
- <router-link to="/builtin/max">max()</router-link>
