---
title: 'Python 組み込み関数 all() - Python チートシート'
description: 'イテラブルの全要素が真である場合に True を返す（イテラブルが空の場合も True）。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python all() ビルトイン関数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#all">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
    イテラブルのすべての要素が真である場合（またはイテラブルが空の場合）に True を返します。
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Python の `all()` 関数は、イテラブル内のすべての要素が `True` であるかどうかをチェックするビルトイン関数です。すべての要素が真と評価される場合、またはイテラブルが空の場合に `True` を返します。これは、リスト内のすべての数値が正であるか、フォーム内のすべての必須フィールドが入力されているかなど、コレクション全体の状態を検証する場合に役立ちます。

## Examples

```python
# すべての値が真値 (truthy)
all([1, 2, 3])

# 偽値 (falsy) (0) を含む
all([1, 0, 3])

# 偽値 (空文字列) を含む
all(['a', '', 'c'])

# 空のイテラブルは True と見なされる
all([])
```

```output
True
False
False
True
```

## Relevant links

- <router-link to="/cheatsheet/control-flow">Cheatsheet: Control Flow</router-link>
- <router-link to="/cheatsheet/comprehensions">Cheatsheet: Comprehensions</router-link>
- <router-link to="/blog/python-data-types">Blog: Python Data Types</router-link>
- <router-link to="/builtin/any">any()</router-link>
- <router-link to="/builtin/bool">bool()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
