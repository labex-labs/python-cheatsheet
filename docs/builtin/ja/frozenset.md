---
title: 'Python 組み込み関数 frozenset() - Python チートシート'
description: 'イテラブルから要素を取得した新しい frozenset オブジェクトを返します。frozenset は組み込みクラスです。このクラスに関するドキュメントは frozenset と Set 型 — set, frozenset を参照してください。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python frozenset() ビルトイン関数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#frozenset">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
   新しい frozenset オブジェクトを返します。イテラブルから要素を取得することもできます。<router-link to="/builtin/frozenset">frozenset</router-link> はビルトインクラスです。このクラスに関するドキュメントについては、<router-link to="/builtin/frozenset">frozenset</router-link> および Set Types — <router-link to="/builtin/set">set</router-link>, <router-link to="/builtin/frozenset">frozenset</router-link> を参照してください。
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Python の `frozenset()` 関数は、イテラブルから不変でハッシュ可能なセットを作成するためのビルトイン関数です。通常の `set` とは異なり、`frozenset` は作成後に変更できず、要素の追加や削除はできません。この不変性により、辞書のキーとして、または別のセットの要素として使用するのに適しています。

## Examples

```python
frozenset([1, 2, 3])
frozenset({1, 2, 3})
frozenset((1, 2, 3))
```

Output:

```plaintext
frozenset({1, 2, 3})
frozenset({1, 2, 3})
frozenset({1, 2, 3})
```

## Relevant links

- <router-link :to="'/builtin/set'">`set()`</router-link>
- <router-link :to="'/cheatsheet/sets'">Sets</router-link>
- <router-link :to="'/blog/python-sets-what-why-how'">Python Sets: What, Why, and How</router-link>
- <router-link :to="'/builtin/tuple'">`tuple()`</router-link>
- <router-link :to="'/builtin/hash'">`hash()`</router-link>
