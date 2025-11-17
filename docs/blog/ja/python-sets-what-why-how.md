---
title: 'Python セット：概要、利点、使い方 - Python チートシート'
description: 'コード記述には複数の方法があります。中には悪いとされる方法もあれば、明確で簡潔、保守性の高い、つまり Python らしい方法もあります。本記事では、Python のセットがコードの可読性だけでなく、プログラムの実行速度向上にどのように役立つかを解説します。'
date: 'July 27, 2018'
updated: 'July 3, 2022'
tags: 'python, basics'
socialImage: '/blog/sets.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "Python セット：概要、利点、使い方 - Python チートシート"
    description: "コード記述には複数の方法があります。中には悪いとされる方法もあれば、明確で簡潔、保守性の高い、つまり Python らしい方法もあります。本記事では、Python のセットがコードの可読性だけでなく、プログラムの実行速度向上にどのように役立つかを解説します。"
    date: "July 27, 2018"
    updated: "July 3, 2022"
    tags: "python, basics"
    socialImage: "/blog/sets.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="Pythonセット：概要、利点、使い方 - Pythonチートシート" />

Python には、データを整理するのに役立ついくつかの組み込みデータ型が用意されています。これらの構造には、`lists`、`dictionaries`、`tuples`、`sets` が含まれます。

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/tutorial/datastructures.html#sets">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
    <code>set</code> は、**重複する要素を持たない** <b>順序付けられていないコレクション</b>です。基本的な用途には、<b>メンバーシップテスト</b>や<b>重複エントリの削除</b>があります。セットオブジェクトは、<b>和集合</b>、<b>積集合</b>、<b>差集合</b>、<b>対称差</b>などの数学的な操作もサポートします。
  </base-disclaimer-content>
</base-disclaimer>

この記事では、上記の定義にリストされているすべての要素をレビューします。早速始めて、それらをどのように作成できるかを見てみましょう。

## セットの初期化

セットを作成するには 2 つの方法があります。1 つは組み込み関数 `set()` を使用して要素の `list` を渡す方法、もう 1 つは波括弧 `{}` を使用する方法です。

### `set()` 組み込み関数を使用したセットの初期化

```python
>>> s1 = set([1, 2, 3])
>>> s1
{1, 2, 3}
>>> type(s1)
<class 'set'>
```

### 波括弧 `{}` を使用したセットの初期化

```python
>>> s2 = {3, 4, 5}
>>> s2
{3, 4, 5}
>>> type(s2)
<class 'set'>
>>>
```

<base-warning>
  <base-warning-title>
    空のセット
  </base-warning-title>
  <base-warning-content>
    セットを作成する際は、空の波括弧 <code>{}</code> を使用しないように注意してください。そうしないと、代わりに空の辞書が作成されます。
  </base-warning-content>
</base-warning>

```python
>>> s = {}
>>> type(s)
<class 'dict'>
```

ここで、簡潔にするために、この記事で提供されるすべての例では一桁の整数を使用しますが、セットには Python がサポートするすべての [hashable](https://docs.python.org/3/glossary.html#term-hashable) データ型を含めることができることに言及しておくのは良い機会です。つまり、整数、文字列、タプルですが、*リスト*や*辞書*のような *ミュータブル*な項目は含まれません。

```python
>>> s = {1, 'coffee', [4, 'python']}
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: unhashable type: 'list'
```

セットの作成方法と含めることができる要素の種類がわかったので、次に、なぜ常にそれらを武器庫に持っておくべきなのかを見ていきましょう。

## セットを使用すべき理由

コードは複数の方法で記述できます。一部はかなり悪いと見なされ、その他は、*明確で、簡潔で、保守可能*です。または「[_Pythonic_](http://docs.python-guide.org/en/latest/writing/style/)」です。

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="http://docs.python-guide.org/en/latest/">The Hitchhiker’s Guide to Python</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
    ベテランの Python 開発者 (Pythonista) がコードの一部を「Pythonic ではない」と呼ぶ場合、通常、それらのコード行が一般的なガイドラインに従っておらず、意図を最良の方法（つまり、最も読みやすい方法）で表現できていないことを意味します。
  </base-disclaimer-content>
</base-disclaimer>

Python のセットが可読性だけでなく、プログラムの実行時間にもどのように役立つかを探り始めましょう。

## 要素の順序付けられていないコレクション

まず最初に、`set` オブジェクトにインデックスを使用してアクセスすることはできません。

```python
>>> s = {1, 2, 3}
>>> s[0]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'set' object does not support indexing
```

スライスで変更することもできません。

```python
>>> s[0:2]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'set' object is not subscriptable
```

しかし、重複を削除したり、リストを結合したりする (和集合など) 数学的な操作を行う必要がある場合は、セットを使用でき、常にそう**すべき**です。

**反復処理**に関しては、リストはセットよりも優れていることに言及する必要があります。したがって、それが必要な場合はリストを優先してください。なぜでしょうか？さて、この記事ではセットの内部動作を説明するつもりはありませんが、それについて読むことができるいくつかのリンクを次に示します。

- [Time Complexity](https://wiki.python.org/moin/TimeComplexity)
- [How is set() implemented?](https://stackoverflow.com/questions/3949310/how-is-set-implemented)
- [Python Sets vs Lists](https://stackoverflow.com/questions/2831212/python-sets-vs-lists)
- [Is there any advantage or disadvantage to using sets over list comps to ensure a list of unique entries?](https://mail.python.org/pipermail/python-list/2011-June/606738.html)

## 重複する項目なし

これを書いている間、リスト内の重複する要素をチェックして削除するために、_for_ ループと _if_ ステートメントをどれだけ使用したかを考えずにはいられません。私は、次のようなものを書いたことを思い出すと顔が赤くなります。

```python
>>> my_list = [1, 2, 3, 2, 3, 4]
>>> no_duplicate_list = []
>>> for item in my_list:
...     if item not in no_duplicate_list:
...             no_duplicate_list.append(item)
...
>>> no_duplicate_list
[1, 2, 3, 4]
```

またはリスト内包表記を使用しました。

```python
>>> my_list = [1, 2, 3, 2, 3, 4]
>>> no_duplicate_list = []
>>> [no_duplicate_list.append(item) for item in my_list if item not in no_duplicate_list]
[None, None, None, None]
>>> no_duplicate_list
[1, 2, 3, 4]
```

しかし、大丈夫です。セットがあるので、それらはもう重要ではありません。

```python
>>> my_list = [1, 2, 3, 2, 3, 4]
>>> no_duplicate_list = list(set(my_list))
>>> no_duplicate_list
[1, 2, 3, 4]
```

## セットのパフォーマンス

次に、_timeit_ モジュールを使用して、重複を削除するときのリストとセットの実行時間を見てみましょう。

```python
>>> from timeit import timeit
>>> def no_duplicates(list):
...     no_duplicate_list = []
...     [no_duplicate_list.append(item) for item in list if item not in no_duplicate_list]
...     return no_duplicate_list
...
>>> # まず、リストのパフォーマンスを確認します。
>>> print(timeit('no_duplicates([1, 2, 3, 1, 7])', globals=globals(), number=1000))
0.0018683355819786227
```

```python
>>> from timeit import timeit
>>> # 次に、セットです。
>>> print(timeit('list(set([1, 2, 3, 1, 2, 3, 4]))', number=1000))
0.0010220493243764395
>>> # より高速でクリーン =)
```

セットを使用すると、リスト内包表記よりも**コードの記述行数が少なく**なり、より**読みやすく**、より**パフォーマンスの高い**コードが得られます。

<base-warning>
  <base-warning-title>
    セットは順序付けられていないことを覚えておいてください
  </base-warning-title>
  <base-warning-content>
    リストに変換し直したときに要素の順序が保持される保証はありません。
  </base-warning-content>
</base-warning>

[Zen of Python](https://www.python.org/dev/peps/pep-0020/)より：

> 美しいことは醜いことよりも良い。 <br>
> 明示的であることは暗黙的であることよりも良い。<br>
> シンプルであることは複雑であることよりも良い。<br>
> フラットであることはネストされていることよりも良い。

セットは、これらすべてではないでしょうか？

## メンバーシップテスト

リスト内に要素があるかどうかを、たとえば _if_ ステートメントを使用して確認するたびに、メンバーシップテストを実行しています。

```python
my_list = [1, 2, 3]
>>> if 2 in my_list:
...     print('Yes, this is a membership test!')
...
# Yes, this is a membership test!
```

そして、メンバーシップテストを実行する場合、セットはリストよりもパフォーマンスが高くなります。

```python
>>> from timeit import timeit
>>> def in_test(iterable):
...     for i in range(1000):
...             if i in iterable:
...                     pass
...
>>> timeit('in_test(iterable)', setup="from __main__ import in_test; iterable = list(range(1000))", number=1000)
# 12.459663048726043
```

```python
>>> from timeit import timeit
>>> def in_test(iterable):
...     for i in range(1000):
...             if i in iterable:
...                     pass
...
>>> timeit('in_test(iterable)', setup="from __main__ import in_test; iterable = set(range(1000))", number=1000)
# 0.12354438152988223
```

上記のテストは、この [Stack Overflow スレッド](https://stackoverflow.com/questions/2831212/python-sets-vs-lists)からのものです。

したがって、大規模なリストでこのような比較を行っている場合は、そのリストをセットに変換すると、かなりの速度向上が見られるはずです。

## 要素の追加

追加する要素の数に応じて、`add()` と `update()` メソッドのどちらを選択するかを決定する必要があります。

`add()` は単一の要素を追加します。

```python
>>> s = {1, 2, 3}
>>> s.add(4)
>>> s
{1, 2, 3, 4}
```

そして `update()` は複数の要素を追加します。

```python
>>> s = {1, 2, 3}
>>> s.update([2, 3, 4, 5, 6])
>>> s
{1, 2, 3, 4, 5, 6}
```

セットは重複を削除することを忘れないでください。

## 要素の削除

コードがセット内に存在しない要素を削除しようとしたときに警告を受けたい場合は、`remove()` を使用します。そうでない場合は、`discard()` が適切な代替手段を提供します。

```python
>>> s = {1, 2, 3}
>>> s.remove(3)
>>> s
{1, 2}
>>> s.remove(3)
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# KeyError: 3
```

`discard()` はエラーを発生させません。

```python
>>> s = {1, 2, 3}
>>> s.discard(3)
>>> s
{1, 2}
>>> s.discard(3)
>>> # 何も起こりません！
```

`pop()` を使用して要素をランダムに破棄することもできます。

```python
>>> s = {1, 2, 3, 4, 5}
>>> s.pop()  # 任意の要素を削除
1
>>> s
{2, 3, 4, 5}
```

または `clear()` を使用してセットからすべての値を削除します。

```python
>>> s = {1, 2, 3, 4, 5}
>>> s.clear()  # すべての項目を破棄
>>> s
set()
```

## union() メソッド

`union()` または `|` は、提供するセットのすべての要素を含む新しいセットを作成します。

```python
>>> s1 = {1, 2, 3}
>>> s2 = {3, 4, 5}
>>> s1.union(s2)  # または 's1 | s2'
{1, 2, 3, 4, 5}
```

## intersection() メソッド

`intersection` または `&` は、すべてのセットに共通する要素のみを含むセットを返します。

```python
>>> s1 = {1, 2, 3}
>>> s2 = {2, 3, 4}
>>> s3 = {3, 4, 5}
>>> s1.intersection(s2, s3)  # または 's1 & s2 & s3'
{3}
```

## difference() メソッド

Difference は、「s1」には存在するが「s2」には存在しない値を持つ新しいセットを作成します。

```python
>>> s1 = {1, 2, 3}
>>> s2 = {2, 3, 4}
>>> s1.difference(s2)  # または 's1 - s2'
{1}
```

## symmetric_difference()

`symmetric_difference` または `^` は、セット間で共通しないすべての値を返します。

```python
>>> s1 = {1, 2, 3}
>>> s2 = {2, 3, 4}
>>> s1.symmetric_difference(s2)  # または 's1 ^ s2'
{1, 4}
```

## 結論

この記事を読んだ後、セットとは何か、要素をどのように操作するか、実行できる操作について理解していただけたことを願っています。いつセットを使用すべきかを知ることは、よりクリーンなコードを書き、プログラムを高速化するのに間違いなく役立ちます。
