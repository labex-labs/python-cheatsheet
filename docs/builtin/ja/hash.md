---
title: 'Python 組み込み関数 hash() - Python チートシート'
description: 'オブジェクトのハッシュ値（持っている場合）を返します。ハッシュ値は整数であり、辞書検索時にキーを素早く比較するために使用されます。値が等しい数値は、型が異なっても（例：1 と 1.0）、同じハッシュ値を持つ必要があります。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python の組み込み関数 hash()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#hash">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
   オブジェクトのハッシュ値（持っている場合）を返します。ハッシュ値は整数です。これらは、辞書ルックアップ中に辞書のキーをすばやく比較するために使用されます。比較して等しい数値値は、同じハッシュ値を持つようになります（1 と 1.0 のように型が異なる場合でも）。
  </base-disclaimer-content>
</base-disclaimer>

## 導入

`hash()` 関数は、オブジェクトのハッシュ値を表す整数を返します。これは主に、キーをすばやく検索するために辞書によって使用されます。

「ハッシュ可能 (hashable)」なオブジェクトのみを `hash()` に渡すことができます。オブジェクトは、その存続期間中ハッシュ値が変わらない場合にハッシュ可能と見なされます。Python のすべての組み込みイミュータブル型（文字列、数値、タプルなど）はハッシュ可能ですが、ミュータブルなコンテナ（リストや辞書など）はハッシュ可能ではありません。

### 例

```python
# 整数のハッシュ値はその整数自体
print(hash(1))
print(hash(1.0))  # 1 と 1.0 は等しい

# 文字列のハッシュ値 (出力は変動します)
print(hash('hello'))

# タプルのハッシュ値 (出力は変動します)
print(hash((1, 2, 3)))

# リストをハッシュしようとすると TypeError が発生します
try:
    hash([1, 2, 3])
except TypeError as e:
    print(e)
```

```output
1
1
-1182655621190490452
529344067295497451
unhashable type: 'list'
```

## 関連リンク

- <router-link :to="'/cheatsheet/dictionaries'">辞書 (Dictionaries)</router-link>
- <router-link :to="'/builtin/id'">id()</router-link>
- <router-link :to="'/cheatsheet/sets'">セット (Sets)</router-link>
- <router-link :to="'/blog/python-sets-what-why-how'">Python セット：何を、なぜ、どのように</router-link>
- <router-link :to="'/builtin/frozenset'">frozenset()</router-link>
- <router-link :to="'/builtin/object'">object()</router-link>
