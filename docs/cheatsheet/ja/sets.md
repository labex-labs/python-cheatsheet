---
title: 'Python セット - Python チートシート'
description: 'Python には、データを整理するための組み込みデータ型がいくつか用意されています。これらの構造には、リスト、辞書、タプル、セットが含まれます。'
labUrl: 'https://labex.io/ja/labs/python-python-sets-633665?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python セット
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Python には、データを整理するためのいくつかの組み込みデータ型が用意されています。これらの構造には、リスト、辞書、タプル、そして**セット**が含まれます。

<base-disclaimer>
  <base-disclaimer-title>
    Python 3 の <a target="_blank" href="https://docs.python.org/3/tutorial/datastructures.html#sets">ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
    セットは、重複する要素のない順序付けられていないコレクションです。基本的な用途には、メンバーシップのテストや重複エントリの削除があります。
  </base-disclaimer-content>
</base-disclaimer>

より詳細な参照については、<router-link to="/blog/python-sets-what-why-how">Python Sets: What, Why and How</router-link> をお読みください。

## セットの初期化

セットを作成するには、波括弧 `{}` を使用する方法と、組み込み関数 `set()` を使用する方法の 2 つがあります。

<base-warning>
  <base-warning-title>
    空のセット
  </base-warning-title>
  <base-warning-content>
    セットを作成する際は、空の波括弧 <code>{}</code> を使用しないようにしてください。そうしないと、代わりに空の辞書になってしまいます。
  </base-warning-content>
</base-warning>

```python
# 波括弧または set() 関数を使用してセットを作成
s = {1, 2, 3}  # 波括弧を使用
s = set([1, 2, 3])  # set() コンストラクタを使用

# 警告：空の {} はセットではなく辞書を作成します
s = {}  # これはセットではなく辞書を作成します
type(s)  # <class 'dict'> を返します
```

出力：

```plaintext
<class 'dict'>
```

## 一意な要素の順序付けられていないコレクション

セットは重複する値を自動的に削除します。

```python
# セットは重複を自動的に削除します
s = {1, 2, 3, 2, 3, 4}  # 重複は削除されます
s  # {1, 2, 3, 4} を返します
```

出力：

```plaintext
{1, 2, 3, 4}
```

また、順序付けられていないデータ型であるため、インデックスを付けることはできません。

```python
s = {1, 2, 3}
s[0]
```

出力：

```plaintext
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'set' object does not support indexing
```

## set の追加と更新

`add()` メソッドを使用して、セットに単一の要素を追加できます。

```python
# add() メソッド：セットに単一の要素を追加
s = {1, 2, 3}
s.add(4)  # 要素 4 を追加
s
```

出力：

```plaintext
{1, 2, 3, 4}
```

そして `update()` を使用すると、複数の要素を追加できます。

```python
# update() メソッド：イテラブルから複数の要素を追加
s = {1, 2, 3}
s.update([2, 3, 4, 5, 6])  # 複数の要素を追加 (重複は無視されます)
s
```

出力：

```plaintext
{1, 2, 3, 4, 5, 6}
```

## set の削除と破棄

どちらのメソッドもセットから要素を削除しますが、`remove()` は値が存在しない場合に `key error` を発生させます。

```python
# remove() メソッド：要素を削除、見つからない場合は KeyError を発生
s = {1, 2, 3}
s.remove(3)  # 要素 3 を削除
s
```

出力：

```plaintext
{1, 2}
```

```python
s.remove(3)
```

出力：

```plaintext
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
KeyError: 3
```

`discard()` はエラーを発生させません。

```python
# discard() メソッド：要素を削除、見つからなくてもエラーなし
s = {1, 2, 3}
s.discard(3)  # 要素 3 を削除 (安全、欠落していてもエラーなし)
s
```

出力：

```plaintext
{1, 2}
```

```python
s.discard(3)
```

## set の和集合 (union)

`union()` または `|` は、提供されたセットのすべての要素を含む新しいセットを作成します。

```python
# union(): 複数のセットからすべての要素を結合 (重複なし)
s1 = {1, 2, 3}
s2 = {3, 4, 5}
s1.union(s2)  # または 's1 | s2' - {1, 2, 3, 4, 5} を返します
```

出力：

```plaintext
{1, 2, 3, 4, 5}
```

## set の積集合 (intersection)

`intersection()` または `&` は、すべてのセットに共通する要素のみを含むセットを返します。

```python
# intersection(): すべてのセットに共通する要素を返す
s1 = {1, 2, 3}
s2 = {2, 3, 4}
s3 = {3, 4, 5}
s1.intersection(s2, s3)  # または 's1 & s2 & s3' - {3} を返します
```

出力：

```plaintext
{3}
```

## set の差集合 (difference)

`difference()` または `-` は、最初のセット（呼び出し元のセット）に固有の要素のみを返します。

```python
# difference(): 最初のセットには存在するが、他のセットには存在しない要素を返す
s1 = {1, 2, 3}
s2 = {2, 3, 4}

s1.difference(s2)  # または 's1 - s2' - {1} を返します
```

出力：

```plaintext
{1}
```

```python
s2.difference(s1) # または 's2 - s1'
```

出力：

```plaintext
{4}
```

## set の対称差集合 (symmetric_difference)

`symmetric_difference()` または `^` は、両方に共通しないすべての要素を返します。

```python
# symmetric_difference(): いずれかのセットには存在するが、両方には存在しない要素を返す
s1 = {1, 2, 3}
s2 = {2, 3, 4}
s1.symmetric_difference(s2)  # または 's1 ^ s2' - {1, 4} を返します
```

出力：

```plaintext
{1, 4}
```

## 関連リンク

- <router-link to="/blog/python-data-types">Python データ型ブログ投稿</router-link>
- <router-link to="/blog/python-sets-what-why-how">Python Sets: What, Why and How</router-link>
- <router-link to="/cheatsheet/dictionaries">Python 辞書</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Python リストとタプル</router-link>
