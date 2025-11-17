---
title: 'Python 組み込み関数 tuple() - Python チートシート'
description: 'tuple は関数ではなく、タプルとシーケンス型（list、tuple、range）で文書化されている不変のシーケンス型です。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python tuple() ビルトイン関数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#tuple">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
    tuple は関数というより、実際にはイミュータブルなシーケンス型であり、Tuples and Sequence Types — list, tuple, range で文書化されています。
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

`tuple` は技術的には型ですが、タプルを作成するために関数のように使用できます。タプルはイミュータブルなシーケンスであり、一度作成されると変更できません。

`tuple()` コンストラクタを使用して、空のタプルを作成したり、イテラブル（リストなど）をタプルに変換したりできます。

### Examples

**空のタプルを作成する：**

```python
empty_tuple = tuple()
print(empty_tuple)
```

Output:

```plaintext
()
```

**リストからタプルを作成する：**

```python
my_list = [1, 2, 3]
my_tuple = tuple(my_list)
print(my_tuple)
```

Output:

```plaintext
(1, 2, 3)
```

## Relevant links

- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: リストとタプル</router-link>
- <router-link to="/cheatsheet/args-and-kwargs">Cheatsheet: \*args と \*\*kwargs</router-link>
- <router-link to="/blog/python-data-types">Blog: Python データ型</router-link>
- <router-link to="/blog/python-easy-args-kwargs">Blog: \*args と \*\*kwargs の解説</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/sorted">sorted()</router-link>
- <router-link to="/builtin/reversed">reversed()</router-link>
- <router-link to="/builtin/enumerate">enumerate()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
