---
title: 'Python itertools モジュール - Python チートシート'
description: 'itertools モジュールは、イテレータ（リストや辞書など）を扱う際に高速かつメモリ効率の良いツール群です。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Itertools モジュール
</base-title>

*itertools*モジュールは、イテレータ（<router-link to="/cheatsheet/lists-and-tuples">リスト</router-link>や<router-link to="/cheatsheet/dictionaries">辞書</router-link>など）を扱う際に、高速でメモリ効率の良い処理を目的としたツールのコレクションです。

<base-disclaimer>
  <base-disclaimer-title>
    <a href="https://docs.python.org/3/library/itertools.html">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
    このモジュールは、単独でも組み合わせて使用しても役立つ、高速でメモリ効率の良いツールのコアセットを標準化しています。
    これらを組み合わせることで「イテレータ代数」が形成され、純粋な Python で特殊なツールを簡潔かつ効率的に構築することが可能になります。
  </base-disclaimer-content>
</base-disclaimer>

*itertools*モジュールは標準ライブラリに含まれており、インポートする必要があります。いくつかの例では`operator`モジュールも使用します。

```python
import itertools
import operator
```

## accumulate()

関数の結果を返すイテレータを作成します。

```python
itertools.accumulate(iterable[, func])
```

例：

```python
data = [1, 2, 3, 4, 5]
# 乗算関数で累積
result = itertools.accumulate(data, operator.mul)
for each in result:
    print(each)
```

```output
1
2
6
24
120
```

operator.mul は 2 つの数値を引数に取り、それらを乗算します：

```python
operator.mul(1, 2)
# 2

operator.mul(2, 3)
# 6

operator.mul(6, 4)
# 24

operator.mul(24, 5)
# 120
```

関数の指定はオプションです：

```python
data = [5, 2, 6, 4, 5, 9, 1]
# 関数を指定せずに累積（デフォルトは加算）
result = itertools.accumulate(data)
for each in result:
    print(each)
```

```output
5
7
13
17
22
31
32
```

関数が指定されていない場合、要素は合計されます：

```python
5
5 + 2 = 7
7 + 6 = 13
13 + 4 = 17
17 + 5 = 22
22 + 9 = 31
31 + 1 = 32
```

## combinations()

イテラブルと整数を受け取ります。これは、r 個の要素を持つすべてのユニークな組み合わせを作成します。

```python
itertools.combinations(iterable, r)
```

例：

```python
shapes = ['circle', 'triangle', 'square',]
# 2 要素のすべての組み合わせを生成
result = itertools.combinations(shapes, 2)
for each in result:
    print(each)
```

```output
('circle', 'triangle')
('circle', 'square')
('triangle', 'square')
```

## combinations_with_replacement()

combinations() と似ていますが、個々の要素が複数回繰り返されることを許可します。

```python
itertools.combinations_with_replacement(iterable, r)
```

例：

```python
shapes = ['circle', 'triangle', 'square']
# 要素の繰り返しを許可する組み合わせを生成
result = itertools.combinations_with_replacement(shapes, 2)
for each in result:
    print(each)
```

```output
('circle', 'circle')
('circle', 'triangle')
('circle', 'square')
('triangle', 'triangle')
('triangle', 'square')
('square', 'square')
```

## count()

数値 start から始まる等間隔の値を返すイテレータを作成します。

```python
itertools.count(start=0, step=1)
```

例：

```python
# 10 から始まり、3 ずつ増加しながらカウント
for i in itertools.count(10,3):
    print(i)
    if i > 20:
        break
```

```output
10
13
16
19
22
```

## cycle()

この関数は、イテレータを無限に循環させます。

```python
itertools.cycle(iterable)
```

例：

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet']
# 色を無限に循環
for color in itertools.cycle(colors):
    print(color)
```

```output
red
orange
yellow
green
blue
violet
red
orange
```

イテラブルの終わりに達すると、最初から再び開始します。

## chain()

一連のイテラブルを受け取り、それらを 1 つの長いイテラブルとして返します。

```python
itertools.chain(*iterables)
```

例：

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue']
shapes = ['circle', 'triangle', 'square', 'pentagon']
# 複数のイテラブルを 1 つに連結
result = itertools.chain(colors, shapes)
for each in result:
    print(each)
```

```output
red
orange
yellow
green
blue
circle
triangle
square
pentagon
```

## compress()

別のイテラブルを使って 1 つのイテラブルをフィルタリングします。

```python
itertools.compress(data, selectors)
```

例：

```python
shapes = ['circle', 'triangle', 'square', 'pentagon']
selections = [True, False, True, False]
# ブール値の選択に基づいて図形をフィルタリング
result = itertools.compress(shapes, selections)
for each in result:
    print(each)
```

```output
circle
square
```

## dropwhile()

述語（predicate）が真である間はイテラブルから要素を破棄し、その後はすべての要素を返すイテレータを作成します。

```python
itertools.dropwhile(predicate, iterable)
```

例：

```python
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]
# 条件が真である間は要素を破棄し、残りをすべて返す
result = itertools.dropwhile(lambda x: x<5, data)
for each in result:
    print(each)
```

```output
5
6
7
8
9
10
1
```

## filterfalse()

イテラブルから要素をフィルタリングし、述語が偽（False）である要素のみを返すイテレータを作成します。

```python
itertools.filterfalse(predicate, iterable)
```

例：

```python
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]
# 述語が偽である要素を返す
result = itertools.filterfalse(lambda x: x<5, data)
for each in result:
    print(each)
```

```output
5
6
7
8
9
10
```

## groupby()

簡単に言えば、この関数は要素をグループ化します。

```python
itertools.groupby(iterable, key=None)
```

例：

```python
robots = [
    {"name": "blaster", "faction": "autobot"},
    {"name": "galvatron", "faction": "decepticon"},
    {"name": "jazz", "faction": "autobot"},
    {"name": "metroplex", "faction": "autobot"},
    {"name": "megatron", "faction": "decepticon"},
    {"name": "starcream", "faction": "decepticon"},
]
# 派閥（faction）でロボットをグループ化（適切なグループ化のためにはイテラブルがソートされている必要があります）
for key, group in itertools.groupby(robots, key=lambda x: x['faction']):
    print(key)
    print(list(group))
```

```output
autobot
[{'name': 'blaster', 'faction': 'autobot'}]
decepticon
[{'name': 'galvatron', 'faction': 'decepticon'}]
autobot
[{'name': 'jazz', 'faction': 'autobot'}, {'name': 'metroplex', 'faction': 'autobot'}]
decepticon
[{'name': 'megatron', 'faction': 'decepticon'}, {'name': 'starcream', 'faction': 'decepticon'}]
```

## islice()

この関数はスライスと非常によく似ています。イテラブルの一部を切り出すことができます。

```python
itertools.islice(iterable, start, stop[, step])
```

例：

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue',]
# イテラブルをスライスして最初の 2 つの要素を取得
few_colors = itertools.islice(colors, 2)
for each in few_colors:
    print(each)
```

```output
red
orange
```

## permutations()

```python
itertools.permutations(iterable, r=None)
```

例：

```python
alpha_data = ['a', 'b', 'c']
# 要素のすべての順列を生成
result = itertools.permutations(alpha_data)
for each in result:
    print(each)
```

```output
('a', 'b', 'c')
('a', 'c', 'b')
('b', 'a', 'c')
('b', 'c', 'a')
('c', 'a', 'b')
('c', 'b', 'a')
```

## product()

一連のイテラブルからデカルト積を作成します。

```python
num_data = [1, 2, 3]
alpha_data = ['a', 'b', 'c']
# イテラブルのデカルト積を生成
result = itertools.product(num_data, alpha_data)
for each in result:
    print(each)
```

```output
(1, 'a')
(1, 'b')
(1, 'c')
(2, 'a')
(2, 'b')
(2, 'c')
(3, 'a')
(3, 'b')
(3, 'c')
```

## repeat()

この関数は、オブジェクトを繰り返し返します。ただし、`times`引数がある場合はその回数だけ繰り返します。

```python
itertools.repeat(object[, times])
```

例：

```python
# オブジェクトを 3 回繰り返す
for i in itertools.repeat("spam", 3):
    print(i)
```

```output
spam
spam
spam
```

## starmap()

イテラブルから取得した引数を使用して関数を計算するイテレータを作成します。

```python
itertools.starmap(function, iterable)
```

例：

```python
data = [(2, 6), (8, 4), (7, 3)]
# 各タプルからのアンパックされた引数に関数を適用
result = itertools.starmap(operator.mul, data)
for each in result:
    print(each)
```

```output
12
32
21
```

## takewhile()

dropwhile() の逆です。述語が真である間、イテラブルから要素を返します。

```python
itertools.takewhile(predicate, iterable)
```

例：

```python
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]
# 条件が真である間は要素を取得し、その後停止
result = itertools.takewhile(lambda x: x<5, data)
for each in result:
    print(each)
```

```output
1
2
3
4
```

## tee()

単一のイテラブルから n 個の独立したイテレータを返します。

```python
itertools.tee(iterable, n=2)
```

例：

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue']
# イテラブルを 2 つの独立したイテレータに分割
alpha_colors, beta_colors = itertools.tee(colors)
for each in alpha_colors:
    print(each)
```

```output
red
orange
yellow
green
blue
```

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue']
alpha_colors, beta_colors = itertools.tee(colors)
for each in beta_colors:
    print(each)
```

```output
red
orange
yellow
green
blue
```

## zip_longest()

各イテラブルから要素を集約するイテレータを作成します。イテラブルの長さが不均一な場合、欠落した値は`fillvalue`で埋められます。最も長いイテラブルが尽きるまでイテレーションが続行されます。

```python
itertools.zip_longest(*iterables, fillvalue=None)
```

例：

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue',]
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]
# None で欠損値を埋めてイテラブルを zip
for each in itertools.zip_longest(colors, data, fillvalue=None):
    print(each)
```

```output
('red', 1)
('orange', 2)
('yellow', 3)
('green', 4)
('blue', 5)
(None, 6)
(None, 7)
(None, 8)
(None, 9)
(None, 10)
```

## 関連リンク

- <router-link to="/cheatsheet/control-flow">チートシート：制御フロー (for ループ)</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">チートシート：リストとタプル</router-link>
- <router-link to="/cheatsheet/comprehensions">チートシート：内包表記</router-link>
- <router-link to="/cheatsheet/functions">チートシート：関数 (ジェネレータ)</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">ブログ：Python 内包表記 ステップバイステップ</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
- <router-link to="/builtin/next">next()</router-link>
- <router-link to="/builtin/map">map()</router-link>
- <router-link to="/builtin/filter">filter()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
- <router-link to="/builtin/enumerate">enumerate()</router-link>
- <router-link to="/builtin/range">range()</router-link>
