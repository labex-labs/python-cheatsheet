---
title: 'Python リストとタプル - Python チートシート'
description: 'Python におけるリストは、データのコレクションを格納するために使用される 4 つのデータ型の一つです。'
labUrl: 'https://labex.io/ja/labs/python-python-lists-and-tuples-633660?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python リスト
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

リストは、Python にある 4 つのデータ型のうちの 1 つで、データのコレクションを格納するために使用されます。

```python
# List: 角括弧で囲まれた順序付けられたアイテムのコレクション
['John', 'Peter', 'Debora', 'Charles']
```

## インデックスを使用した値の取得

```python
# インデックスを使用してリスト要素にアクセス (0 から始まり、最初の要素はインデックス 0)
furniture = ['table', 'chair', 'rack', 'shelf']

furniture[0]  # 最初の要素を返します：'table'
```

Output:

```plaintext
'table'
```

```python
furniture[1]
```

Output:

```plaintext
'chair'
```

```python
furniture[2]
```

Output:

```plaintext
'rack'
```

```python
furniture[3]
```

Output:

```plaintext
'shelf'
```

## 負のインデックス

```python
# 負のインデックス：リストの末尾から要素にアクセス
furniture = ['table', 'chair', 'rack', 'shelf']

furniture[-1]  # 最後の要素を返します：'shelf'
```

Output:

```plaintext
'shelf'
```

```python
furniture[-3]
```

Output:

```plaintext
'chair'
```

```python
f'The {furniture[-1]} is bigger than the {furniture[-3]}'
```

Output:

```plaintext
'The shelf is bigger than the chair'
```

## スライスを使用したサブリストの取得

```python
# Slicing: [start:end] 構文を使用してサブリストを取得します (end は含まれません)
furniture = ['table', 'chair', 'rack', 'shelf']

furniture[0:4]  # インデックス 0 から 3 までの要素を返します (4 は含まれない)
```

Output:

```plaintext
['table', 'chair', 'rack', 'shelf']
```

```python
furniture[1:3]
```

Output:

```plaintext
['chair', 'rack']
```

```python
furniture[0:-1]
```

Output:

```plaintext
['table', 'chair', 'rack']
```

```python
# 最初からのスライス：start インデックスを省略します (デフォルトは 0)
furniture[:2]  # 最初の 2 つの要素を返します
```

Output:

```plaintext
['table', 'chair']
```

```python
# 最後までのスライス：end インデックスを省略します (デフォルトはリストの最後まで)
furniture[1:]  # インデックス 1 から最後まで全ての要素を返します
```

Output:

```plaintext
['chair', 'rack', 'shelf']
```

```python
furniture[:]
```

Output:

```plaintext
['table', 'chair', 'rack', 'shelf']
```

リスト全体のスライスはコピーを作成します：

```python
# スライスはコピーを作成します：[:] はリストのシャローコピーを作成します
spam = ['cat', 'bat', 'rat', 'elephant']
spam2 = spam[:]  # 参照ではなくコピーを作成
spam2
```

Output:

```plaintext
['cat', 'bat', 'rat', 'elephant']
```

```python
spam.append('dog')
spam
```

Output:

```plaintext
['cat', 'bat', 'rat', 'elephant', 'dog']
```

```python
spam2
```

Output:

```plaintext
['cat', 'bat', 'rat', 'elephant']
```

## len() を使用したリスト長の取得

```python
# len() はリスト内のアイテム数を返します
furniture = ['table', 'chair', 'rack', 'shelf']
len(furniture)  # 4 を返します
```

Output:

```plaintext
4
```

## インデックスを使用した値の変更

```python
# インデックスに新しい値を割り当てることでリスト要素を変更します
furniture = ['table', 'chair', 'rack', 'shelf']

furniture[0] = 'desk'  # 最初の要素を置き換えます
furniture
```

Output:

```plaintext
['desk', 'chair', 'rack', 'shelf']
```

```python
furniture[2] = furniture[1]
furniture
```

Output:

```plaintext
['desk', 'chair', 'chair', 'shelf']
```

```python
furniture[-1] = 'bed'
furniture
```

Output:

```plaintext
['desk', 'chair', 'chair', 'bed']
```

## 連結と複製

```python
# リストの連結：+ 演算子を使用して 2 つのリストを結合します
[1, 2, 3] + ['A', 'B', 'C']  # [1, 2, 3, 'A', 'B', 'C'] を返します
```

Output:

```plaintext
[1, 2, 3, 'A', 'B', 'C']
```

```python
# リストの複製：* 演算子を使用してリストを複数回繰り返します
['X', 'Y', 'Z'] * 3  # ['X', 'Y', 'Z', 'X', 'Y', 'Z', 'X', 'Y', 'Z'] を返します
```

Output:

```plaintext
['X', 'Y', 'Z', 'X', 'Y', 'Z', 'X', 'Y', 'Z']
```

```python
my_list = [1, 2, 3]
my_list = my_list + ['A', 'B', 'C']
my_list
```

Output:

```plaintext
[1, 2, 3, 'A', 'B', 'C']
```

## for ループとリストの使用

```python
# for ループを使用してリスト要素を反復処理します
furniture = ['table', 'chair', 'rack', 'shelf']

for item in furniture:  # 各アイテムをループします
    print(item)
```

Output:

```plaintext
table
chair
rack
shelf
```

## enumerate() を使用したループでのインデックスの取得

```python
# enumerate() はループ内でインデックスと値の両方を返します
furniture = ['table', 'chair', 'rack', 'shelf']

for index, item in enumerate(furniture):  # インデックスとアイテムを一緒に取得
    print(f'index: {index} - item: {item}')
```

Output:

```plaintext
index: 0 - item: table
index: 1 - item: chair
index: 2 - item: rack
index: 3 - item: shelf
```

## zip() を使用した複数のリストのループ

```python
# zip() は複数のリストを要素ごとにループで結合します
furniture = ['table', 'chair', 'rack', 'shelf']
price = [100, 50, 80, 40]

for item, amount in zip(furniture, price):  # 両方のリストの要素をペアにします
    print(f'The {item} costs ${amount}')
```

Output:

```plaintext
The table costs $100
The chair costs $50
The rack costs $80
The shelf costs $40
```

## in および not in 演算子

```python
# in 演算子：アイテムがリスト内に存在するかどうかを確認します
'rack' in ['table', 'chair', 'rack', 'shelf']  # True を返します
```

Output:

```plaintext
True
```

```python
'bed' in ['table', 'chair', 'rack', 'shelf']
```

Output:

```plaintext
False
```

```python
furniture = ['table', 'chair', 'rack', 'shelf']
'bed' not in furniture
```

Output:

```plaintext
True
```

```python
'rack' not in furniture
```

Output:

```plaintext
False
```

## Multiple Assignment Trick (複数代入のトリック)

複数代入のトリックは、1 行のコードでリスト内の値に複数の変数を割り当てるショートカットです。したがって、次のようにする代わりに：

```python
furniture = ['table', 'chair', 'rack', 'shelf']
table = furniture[0]
chair = furniture[1]
rack = furniture[2]
shelf = furniture[3]
```

次のコード行を入力できます：

```python
furniture = ['table', 'chair', 'rack', 'shelf']
table, chair, rack, shelf = furniture

table
```

Output:

```plaintext
'table'
```

```python
chair
```

Output:

```plaintext
'chair'
```

```python
rack
```

Output:

```plaintext
'rack'
```

```python
shelf
```

Output:

```plaintext
'shelf'
```

複数代入のトリックは、2 つの変数の値を交換するためにも使用できます：

```python
a, b = 'table', 'chair'
a, b = b, a
print(a)
```

Output:

```plaintext
chair
```

```python
print(b)
```

Output:

```plaintext
table
```

## index メソッド

`index` メソッドを使用すると、値の名前を渡すことでそのインデックスを見つけることができます：

```python
furniture = ['table', 'chair', 'rack', 'shelf']
furniture.index('chair')
```

Output:

```plaintext
1
```

## 値の追加

### append()

`append` は要素を `list` の末尾に追加します：

```python
furniture = ['table', 'chair', 'rack', 'shelf']
furniture.append('bed')
furniture
```

Output:

```plaintext
['table', 'chair', 'rack', 'shelf', 'bed']
```

### insert()

`insert` は指定された位置に要素を `list` に追加します：

```python
furniture = ['table', 'chair', 'rack', 'shelf']
furniture.insert(1, 'bed')
furniture
```

Output:

```plaintext
['table', 'bed', 'chair', 'rack', 'shelf']
```

## 値の削除

### del()

`del` はインデックスを使用してアイテムを削除します：

```python
furniture = ['table', 'chair', 'rack', 'shelf']
del furniture[2]
furniture
```

Output:

```plaintext
['table', 'chair', 'shelf']
```

```python
del furniture[2]
furniture
```

Output:

```plaintext
['table', 'chair']
```

### remove()

`remove` は実際の値を使用してアイテムを削除します：

```python
furniture = ['table', 'chair', 'rack', 'shelf']
furniture.remove('chair')
furniture
```

Output:

```plaintext
['table', 'rack', 'shelf']
```

<base-warning>
  <base-warning-title>
    繰り返し出現するアイテムの削除
  </base-warning-title>
  <base-warning-content>
    値がリスト内に複数回出現する場合、その値の最初のインスタンスのみが削除されます。
  </base-warning-content>
</base-warning>

### pop()

デフォルトでは、`pop` はリストの最後のアイテムを削除して返します。オプションのパラメーターとして要素のインデックスを渡すこともできます：

```python
animals = ['cat', 'bat', 'rat', 'elephant']

animals.pop()
```

Output:

```plaintext
'elephant'
```

```python
animals
```

Output:

```plaintext
['cat', 'bat', 'rat']
```

```python
animals.pop(0)
```

Output:

```plaintext
'cat'
```

```python
animals
```

Output:

```plaintext
['bat', 'rat']
```

## sort() を使用した値のソート

```python
numbers = [2, 5, 3.14, 1, -7]
numbers.sort()
numbers
```

Output:

```plaintext
[-7, 1, 2, 3.14, 5]
```

```python
furniture = ['table', 'chair', 'rack', 'shelf']
furniture.sort()
furniture
```

Output:

```plaintext
['chair', 'rack', 'shelf', 'table']
```

`reverse` キーワード引数に `True` を渡すことで、`sort()` に値を逆順にソートさせることもできます：

```python
furniture.sort(reverse=True)
furniture
```

Output:

```plaintext
['table', 'shelf', 'rack', 'chair']
```

通常のアルファベット順で値をソートする必要がある場合は、sort() メソッド呼び出しで key キーワード引数に `str.lower` を渡します：

```python
letters = ['a', 'z', 'A', 'Z']
letters.sort(key=str.lower)
letters
```

Output:

```plaintext
['a', 'A', 'z', 'Z']
```

組み込み関数 `sorted` を使用して新しいリストを返すことができます：

```python
furniture = ['table', 'chair', 'rack', 'shelf']
sorted(furniture)
```

Output:

```plaintext
['chair', 'rack', 'shelf', 'table']
```

## タプル (Tuple) データ型

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://stackoverflow.com/questions/1708510/list-vs-tuple-when-to-use-each">タプルとリスト</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    タプルとリストの主な違いは、<code>タプル</code>が<i>イミュータブル</i>（変更不可能）なオブジェクトであるのに対し、<code>リスト</code>は<i>ミュータブル</i>（変更可能）であるという点です。これは、リストは変更できますが、タプルは変更できないことを意味します。タプルはリストよりもメモリ効率が良いです。
  </base-disclaimer-content>
</base-disclaimer>

```python
furniture = ('table', 'chair', 'rack', 'shelf')

furniture[0]
```

Output:

```plaintext
'table'
```

```python
furniture[1:3]
```

Output:

```plaintext
('chair', 'rack')
```

```python
len(furniture)
```

Output:

```plaintext
4
```

タプルがリストと異なる主な点は、タプルは文字列と同様にイミュータブルであることです。

## list() と tuple() の変換

```python
tuple(['cat', 'dog', 5])
```

Output:

```plaintext
('cat', 'dog', 5)
```

```python
list(('cat', 'dog', 5))
```

Output:

```plaintext
['cat', 'dog', 5]
```

```python
list('hello')
```

Output:

```plaintext
['h', 'e', 'l', 'l', 'o']
```

## 関連リンク

- <router-link to="/blog/python-data-types">Python データ型：初心者向けビジュアルガイド</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">Python 内包表記 ステップバイステップ</router-link>
- <router-link to="/cheatsheet/comprehensions">Python 内包表記</router-link>
- <router-link to="/modules/itertools-module">itertools モジュール</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/len">len()</router-link>
