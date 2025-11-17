---
title: 'Python 組み込み関数 list() - Python チートシート'
description: 'list は関数ではなく、リストとシーケンス型 — list、tuple、range で文書化されているように、ミュータブルなシーケンス型です。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python list() ビルトイン関数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#list">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
   list は関数ではなく、実際にはミュータブルなシーケンス型です。これは、Lists and Sequence Types — <router-link to="/builtin/list">list</router-link>, <router-link to="/builtin/tuple">tuple</router-link>, <router-link to="/builtin/range">range</router-link> で文書化されています。
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Python において、`list` は関数ではなく、ビルトインのミュータブルなシーケンス型です。これは、アイテムの順序付けられたコレクションを保持でき、その内容を変更できるデータ構造であることを意味します。リストは角括弧 `[]` または `list()` コンストラクタを使用して作成できます。

## Examples

```python
l = list()
print(l)
l.append(1)
l.append(2)
print(l)
```

Output:

```plaintext
[]
[1, 2]
```

## Relevant links

- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: リストとタプル</router-link>
- <router-link to="/cheatsheet/comprehensions">Cheatsheet: 内包表記</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">Blog: Python 内包表記 ステップバイステップ</router-link>
- <router-link to="/blog/python-data-types">Blog: Python データ型</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/len">len()</router-link>
