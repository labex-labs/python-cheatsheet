---
title: 'Python 内包表記 - Python チートシート'
description: 'リスト内包表記はリストを簡潔に作成する手段です'
labUrl: 'https://labex.io/ja/labs/python-python-comprehensions-633649?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 内包表記
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

リスト内包表記は、他のリストからリストを作成できる特殊な構文であり、数値や 1 つまたは 2 つのネストされた for ループを扱う場合に非常に役立ちます。

<base-disclaimer>
  <base-disclaimer-title>
    Python 3 の<a target="_blank" href="https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions">チュートリアル</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
    リスト内包表記は、リストを作成するための簡潔な方法を提供します。[...] または、特定の条件を満たすそれらの要素のサブシーケンスを作成します。
  </base-disclaimer-content>
</base-disclaimer>

より詳細な入門については、<router-link to="/blog/python-comprehensions-step-by-step">Python 内包表記：ステップバイステップ入門</router-link>をお読みください。

## リスト内包表記

既存のコレクションから for ループを使って新しいリストを作成する方法は次のとおりです。

```python
# 従来の方式：for ループを使用してリストを作成
names = ['Charles', 'Susan', 'Patrick', 'George']

new_list = []
for n in names:
    new_list.append(n)

new_list
```

出力：

```plaintext
['Charles', 'Susan', 'Patrick', 'George']
```

リスト内包表記で同じことを行う方法は次のとおりです。

```python
# リスト内包表記：新しいリストを作成するための簡潔な方法
# 構文：[expression for item in iterable]
names = ['Charles', 'Susan', 'Patrick', 'George']

new_list = [n for n in names]  # すべての名前でリストを作成
new_list
```

出力：

```plaintext
['Charles', 'Susan', 'Patrick', 'George']
```

数値で同じことを行うことができます。

```python
# ネストされたリスト内包表記：2 つの range からタプルを作成
# ネストされた for ループと同等
n = [(a, b) for a in range(1, 3) for b in range(1, 3)]
n
```

出力：

```plaintext
[(1, 1), (1, 2), (2, 1), (2, 2)]
```

## 条件の追加

for ループを使って、先頭が C で始まる名前だけを`new_list`に入れたい場合、次のように行います。

```python
# 従来の方式：if 条件でフィルタリング
names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']

new_list = []
for n in names:
    if n.startswith('C'):  # 'C'で始まる名前をフィルタリング
        new_list.append(n)

print(new_list)
```

出力：

```plaintext
['Charles', 'Carol']
```

リスト内包表記では、`if`文を末尾に追加します。

```python
# 条件付きリスト内包表記：アイテムをフィルタリング
# 構文：[expression for item in iterable if condition]
new_list = [n for n in names if n.startswith('C')]
print(new_list)
```

出力：

```plaintext
['Charles', 'Carol']
```

リスト内包表記で`if-else`文を使用するには：

```python
# if-else 付きリスト内包表記：条件付き式
# 構文：[expression_if_true if condition else expression_if_false for item in iterable]
nums = [1, 2, 3, 4, 5, 6]
new_list = [num*2 if num % 2 == 0 else num for num in nums]  # 偶数を 2 倍にする
print(new_list)
```

出力：

```plaintext
[1, 4, 3, 8, 5, 12]
```

<base-disclaimer>
  <base-disclaimer-title>
    セット内包表記と辞書内包表記
  </base-disclaimer-title>
  <base-disclaimer-content>
    `list` 内包表記の基本は、<b>set</b>と<b>dictionary</b>にも適用されます。
  </base-disclaimer-content>
</base-disclaimer>

## セット内包表記

```python
# セット内包表記：内包表記の構文を使用してセットを作成
# 構文：{expression for item in iterable}
b = {"abc", "def"}
{s.upper() for s in b}  # すべての文字列を大文字に変換
```

出力：

```plaintext
{"ABC", "DEF"}
```

## 辞書内包表記

```python
# 辞書内包表記：キーと値を入れ替える
# 構文：{key_expression: value_expression for item in iterable}
c = {'name': 'Pooka', 'age': 5}
{v: k for k, v in c.items()}  # キーと値のペアを反転
```

出力：

```plaintext
{'Pooka': 'name', 5: 'age'}
```

辞書からリスト内包表記を生成できます。

```python
# 辞書からのリスト内包表記：フォーマットされた文字列を作成
c = {'name': 'Pooka', 'age': 5}
["{}:{}".format(k.upper(), v) for k, v in c.items()]  # "KEY:value"形式でフォーマット
```

出力：

```plaintext
['NAME:Pooka', 'AGE:5']
```

## 関連リンク

- <router-link to="/blog/python-comprehensions-step-by-step">Python 内包表記：ステップバイステップ入門</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Python のリストとタプル</router-link>
- <router-link to="/cheatsheet/sets">Python のセット</router-link>
- <router-link to="/cheatsheet/dictionaries">Python の辞書</router-link>
- <router-link to="/blog/python-sets-what-why-how">Python のセット：何、なぜ、どのように</router-link>
- <router-link to="/blog/python-data-types">Python データ型ブログ記事</router-link>
