---
title: 'Python 組み込み関数 len() - Python チートシート'
description: 'オブジェクトの長さ（アイテム数）を返します。引数には、シーケンス（文字列、バイト、タプル、リスト、範囲など）またはコレクション（辞書、セット、フローズンセットなど）を指定できます。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python len() ビルトイン関数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#len">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
   オブジェクトの長さ（アイテム数）を返します。引数は、シーケンス（文字列、バイト、<router-link to="/builtin/tuple">tuple</router-link>、<router-link to="/builtin/list">list</router-link>、または<router-link to="/builtin/range">range</router-link>など）またはコレクション（<router-link to="/builtin/dict">dictionary</router-link>、<router-link to="/builtin/set">set</router-link>、または<router-link to="/builtin/frozenset">frozen set</router-link>など）のいずれかです。
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Python の `len()` 関数は、オブジェクト内のアイテム数（長さ）を返すビルトイン関数です。オブジェクトは、シーケンス（文字列、リスト、タプルなど）またはコレクション（辞書やセットなど）のいずれかです。

## Example

オブジェクトのアイテム数を返します：

```python
len('hello')
len(['cat', 3, 'dog'])
```

```output
5
3
```

## Test of emptiness

<base-warning>
  <base-warning-title>空のテスト</base-warning-title>
    <base-warning-content>
      文字列、リスト、辞書などの空のテストには
    <code>len</code> を使用せず、直接的なブール値評価を優先すべきです。
  </base-warning-content>
</base-warning>

```python
a = [1, 2, 3]

# bad
if len(a) > 0:  # True と評価される
    print("the list is not empty!")

# good
if a:  # True と評価される
    print("the list is not empty!")
```

```output
the list is not empty!
the list is not empty!
```

## Relevant links

- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: Lists and Tuples</router-link>
- <router-link to="/cheatsheet/dictionaries">Cheatsheet: Dictionaries</router-link>
- <router-link to="/cheatsheet/sets">Cheatsheet: Sets</router-link>
- <router-link to="/blog/python-data-types">Blog: Python Data Types</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/set">set()</router-link>
