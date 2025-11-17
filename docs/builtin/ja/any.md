---
title: 'Python 組み込み関数 any() - Python チートシート'
description: 'イテラブルの要素のいずれかが真であれば True を返します。イテラブルが空の場合は False を返します。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python any() ビルトイン関数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#any">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
    イテラブルの要素のいずれかが真であれば True を返します。イテラブルが空の場合は False を返します。
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Python の `any()` 関数はビルトイン関数であり、イテラブル内の少なくとも 1 つの要素が `True` であるかどうかをチェックします。いずれかの要素が真と評価されれば `True` を返し、イテラブルが空であるか、すべての要素が偽である場合は `False` を返します。これは、コレクション内のいずれかの項目によって条件が満たされているかどうかを素早く判断する場合に役立ちます。

## Examples

```python
# すべての値が偽 (falsy)
any([0, '', False])

# 1 つの真 (truthy) の値 (2) を含む
any([0, 2, False])

# 空のイテラブルは False と見なされる
any([])
```

Output:

```plaintext
False
True
False
```

## Relevant links

- <router-link to="/cheatsheet/control-flow">Cheatsheet: Control Flow</router-link>
- <router-link to="/cheatsheet/comprehensions">Cheatsheet: Comprehensions</router-link>
- <router-link to="/blog/python-data-types">Blog: Python Data Types</router-link>
- <router-link to="/builtin/all">all()</router-link>
- <router-link to="/builtin/bool">bool()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
