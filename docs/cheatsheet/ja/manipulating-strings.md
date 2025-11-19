---
title: 'Python チートシート：文字列操作'
description: "エスケープ文字は、バックスラッシュ（\\）の後に挿入したい文字を入力することで作成されます。"
labUrl: 'https://labex.io/ja/labs/python-python-string-manipulation-633668?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
文字列の操作
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

## エスケープ文字

エスケープ文字は、バックスラッシュ `\` の後に挿入したい文字を入力することで作成されます。

| エスケープ文字 | 表示内容           |
| :------------- | :----------------- |
| `\'`           | シングルクォート   |
| `\"`           | ダブルクォート     |
| `\t`           | タブ               |
| `\n`           | 改行               |
| `\\`           | バックスラッシュ   |
| `\b`           | バックスペース     |
| `\ooo`         | 8 進数表現         |
| `\r`           | キャリッジリターン |

```python
# エスケープ文字：バックスラッシュを使用して特殊文字を挿入
# \n = 改行，\' = シングルクォート
print("Hello there!\nHow are you?\nI\'m doing fine.")
```

```output
Hello there!
How are you?
I'm doing fine.
```

## Raw 文字列 (生文字列)

Raw 文字列は、すべてエスケープ文字を完全に無視し、文字列内に現れるバックスラッシュをそのまま出力します。

```python
# Raw 文字列 (r プレフィックス): バックスラッシュをリテラル文字として扱う
print(r"Hello there!\nHow are you?\nI\'m doing fine.")  # \n がそのまま出力される
```

```output
Hello there!\nHow are you?\nI\'m doing fine.
```

Raw 文字列は、主に <router-link to="/cheatsheet/regular-expressions">正規表現</router-link> の定義に使用されます。

## 複数行文字列

```python
print(
"""Dear Alice,

Eve's cat has been arrested for catnapping,
cat burglary, and extortion.

Sincerely,
Bob"""
)
```

```output
Dear Alice,

Eve's cat has been arrested for catnapping,
cat burglary, and extortion.

Sincerely,
Bob
```

## 文字列のインデックス指定とスライス

    H   e   l   l   o       w   o   r   l   d    !
    0   1   2   3   4   5   6   7   8   9   10   11

### インデックス指定

```python
# 文字列インデックス指定：位置 (0 から始まる) で文字にアクセス
spam = 'Hello world!'

spam[0]  # 最初の文字を返す：'H'
```

```output
'H'
```

```python
spam[4]
```

```output
'o'
```

```python
spam[-1]
```

```output
'!'
```

### スライス

```python
# 文字列スライス：[開始：終了] 構文を使用して部分文字列を抽出
spam = 'Hello world!'

spam[0:5]  # インデックス 0 から 4 までの文字を返す：'Hello'
```

```output
'Hello'
```

```python
spam[:5]
```

```output
'Hello'
```

```python
spam[6:]
```

```output
'world!'
```

```python
spam[6:-1]
```

```output
'world'
```

```python
spam[:-1]
```

```output
'Hello world'
```

```python
spam[::-1]
```

```output
'!dlrow olleH'
```

```python
fizz = spam[0:5]
fizz
```

```output
'Hello'
```

## in および not in 演算子

```python
'Hello' in 'Hello World'
```

```output
True
```

```python
'Hello' in 'Hello'
```

```output
True
```

```python
'HELLO' in 'Hello World'
```

```output
False
```

```python
'' in 'spam'
```

```output
True
```

```python
'cats' not in 'cats and dogs'
```

```output
False
```

## upper(), lower() および title()

文字列を大文字、小文字、タイトルケースに変換します：

```python
greet = 'Hello world!'
greet.upper()
```

```output
'HELLO WORLD!'
```

```python
greet.lower()
```

```output
'hello world!'
```

```python
greet.title()
```

```output
'Hello World!'
```

## isupper() および islower() メソッド

文字列が大文字または小文字であるかどうかを評価し、`True` または `False` を返します：

```python
spam = 'Hello world!'
spam.islower()
```

```output
False
```

```python
spam.isupper()
```

```output
False
```

```python
'HELLO'.isupper()
```

```output
True
```

```python
'abc12345'.islower()
```

```output
True
```

```python
'12345'.islower()
```

```output
False
```

```python
'12345'.isupper()
```

```output
False
```

## isX 文字列メソッド

| メソッド    | 説明                                                                                                 |
| :---------- | :--------------------------------------------------------------------------------------------------- |
| isalpha()   | 文字列が文字のみで構成されている場合に `True` を返します。                                           |
| isalnum()   | 文字列が文字と数字のみで構成されている場合に `True` を返します。                                     |
| isdecimal() | 文字列が数字のみで構成されている場合に `True` を返します。                                           |
| isspace()   | 文字列がスペース、タブ、改行のみで構成されている場合に `True` を返します。                           |
| istitle()   | 文字列が、大文字で始まり、その後に小文字のみが続く単語のみで構成されている場合に `True` を返します。 |

## startswith() および endswith()

```python
'Hello world!'.startswith('Hello')
```

```output
True
```

```python
'Hello world!'.endswith('world!')
```

```output
True
```

```python
'abc123'.startswith('abcdef')
```

```output
False
```

```python
'abc123'.endswith('12')
```

```output
False
```

```python
'Hello world!'.startswith('Hello world!')
```

```output
True
```

```python
'Hello world!'.endswith('Hello world!')
```

```output
True
```

## join() および split()

### join()

`join()` メソッドは、<router-link to="/cheatsheet/lists-and-tuples">リスト</router-link>、<router-link to="/cheatsheet/dictionaries">辞書</router-link>、<router-link to="/cheatsheet/lists-and-tuples#the-tuple-data-type">タプル</router-link>、または <router-link to="/cheatsheet/sets">セット</router-link> などのイテラブル内のすべての要素を取得し、それらを文字列に結合します。区切り文字を指定することもできます。

```python
''.join(['My', 'name', 'is', 'Simon'])
```

```output
'MynameisSimon'
```

```python
', '.join(['cats', 'rats', 'bats'])
```

```output
'cats, rats, bats'
```

```python
' '.join(['My', 'name', 'is', 'Simon'])
```

```output
'My name is Simon'
```

```python
'ABC'.join(['My', 'name', 'is', 'Simon'])
```

```output
'MyABCnameABCisABCSimon'
```

### split()

`split()` メソッドは、`string` を `list` に分割します。デフォルトでは空白文字を区切り文字として使用しますが、選択した別の文字を設定することもできます：

```python
'My name is Simon'.split()
```

```output
['My', 'name', 'is', 'Simon']
```

```python
'MyABCnameABCisABCSimon'.split('ABC')
```

```output
['My', 'name', 'is', 'Simon']
```

```python
'My name is Simon'.split('m')
```

```output
['My na', 'e is Si', 'on']
```

```python
' My  name is  Simon'.split()
```

```output
['My', 'name', 'is', 'Simon']
```

```python
' My  name is  Simon'.split(' ')
```

```output
['', 'My', '', 'name', 'is', '', 'Simon']
```

## rjust(), ljust() および center() によるテキストの配置調整

```python
'Hello'.rjust(10)
```

```output
'     Hello'
```

```python
'Hello'.rjust(20)
```

```output
'               Hello'
```

```python
'Hello World'.rjust(20)
```

```output
'         Hello World'
```

```python
'Hello'.ljust(10)
```

```output
'Hello     '
```

```python
'Hello'.center(20)
```

```output
'       Hello       '
```

`rjust()` および `ljust()` のオプションの 2 番目の引数は、スペース文字以外の埋め文字を指定できます：

```python
'Hello'.rjust(20, '*')
```

```output
'***************Hello'
```

```python
'Hello'.ljust(20, '-')
```

```output
'Hello---------------'
```

```python
'Hello'.center(20, '=')
```

```output
'=======Hello========'
```

## strip(), rstrip(), および lstrip() による空白の削除

```python
spam = '    Hello World     '
spam.strip()
```

```output
'Hello World'
```

```python
spam.lstrip()
```

```output
'Hello World     '
```

```python
spam.rstrip()
```

```output
'    Hello World'
```

```python
spam = 'SpamSpamBaconSpamEggsSpamSpam'
spam.strip('ampS')
```

```output
'BaconSpamEggs'
```

## Count メソッド

適用された文字列内で、指定された文字または部分文字列の出現回数を数えます。オプションで開始インデックスと終了インデックスを指定できます。

```python
sentence = 'one sheep two sheep three sheep four'
sentence.count('sheep')
```

```output
3
```

```python
sentence.count('e')
```

```output
9
```

```python
# 文字列の先頭から 6 文字以降の 'e' の数を返す
sentence.count('e', 6)
```

```output
8
```

```python
sentence.count('e', 7)
```

```output
7
```

## Replace メソッド

指定された部分文字列のすべての出現を別の部分文字列に置き換えます。オプションで 3 番目の引数を使用して置換回数を制限できます。新しい文字列を返します。

```python
text = "Hello, world!"
text.replace("world", "planet")
```

```output
'Hello, planet!'
```

```python
fruits = "apple, banana, cherry, apple"
fruits.replace("apple", "orange", 1)
```

```output
'orange, banana, cherry, apple'
```

```python
sentence = "I like apples, Apples are my favorite fruit"
sentence.replace("apples", "oranges")
```

```output
'I like oranges, Apples are my favorite fruit'
```

## 関連リンク

- <router-link to="/builtin/format">format()</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/repr">repr()</router-link>
- <router-link to="/builtin/input">input()</router-link>
- <router-link to="/cheatsheet/string-formatting">文字列のフォーマット</router-link>
- <router-link to="/cheatsheet/regular-expressions">正規表現</router-link>
