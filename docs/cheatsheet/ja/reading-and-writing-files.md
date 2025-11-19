---
title: 'Python ファイル操作チートシート：読み書き'
description: 'Python でファイルを読み書きするには、with ステートメントを使用します。これにより、処理完了後にファイルが自動的に閉じられ、リソース管理が効率化されます。'
labUrl: 'https://labex.io/ja/labs/python-python-reading-and-writing-files-633663?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
ファイルの読み書き
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

ファイルとディレクトリパス操作の詳細については、<router-link to="/cheatsheet/file-directory-path">ファイルとディレクトリのパス</router-link> ページを参照してください。

## ファイルの読み書きプロセス

Python でファイルへの読み書きを行うには、`with` ステートメントを使用するのが最適です。これにより、処理が完了した後にファイルが自動的に閉じられ、利用可能なリソースが管理されます。

## ファイルのオープンと読み取り

`open` 関数はファイルをオープンし、対応するファイルオブジェクトを返します。

```python
# 'with' ステートメントを使用してファイルを読み取る：完了するとファイルが自動的に閉じられる
with open('/home/labex/project/hi.txt') as hello_file:
    hello_content = hello_file.read()  # ファイルの内容全体を読み取る

hello_content
```

```output
'Hello World!'
```

あるいは、_readlines()_ メソッドを使用して、ファイルから文字列のリストを取得することもできます。これは、テキストの各行に対して 1 つの文字列となります。

```python
# readlines() メソッド：各行に対して 1 つの文字列を含むリストを返す
with open('sonnet29.txt') as sonnet_file:
    sonnet_file.readlines()  # 各行を文字列として含むリストを返す
```

```output
['When, in disgrace with fortune and men's eyes,\n',
 ' I all alone beweep my  outcast state,\n',
 "And trouble deaf heaven with my bootless cries,\n",
 "And look upon myself and curse my fate,']
```

ファイルを 1 行ずつ反復処理することもできます。

```python
# ファイルを 1 行ずつ反復処理する (大きなファイルに対してメモリ効率が良い)
with open('sonnet29.txt') as sonnet_file:
    for line in sonnet_file:  # ファイルオブジェクトは反復可能
        print(line, end='')  # 余分な改行なしで出力
```

```output
When, in disgrace with fortune and men's eyes,
I all alone beweep my outcast state,
And trouble deaf heaven with my bootless cries,
And look upon myself and curse my fate,
```

## ファイルへの書き込み

```python
# ファイルへの書き込み：'w' モードは既存のファイルを上書きする
with open('bacon.txt', 'w') as bacon_file:  # 'w' = 書き込みモード
    bacon_file.write('Hello world!\n')  # 書き込まれた文字数を返す
```

```output
13
```

```python
# ファイルへの追記：'a' モードは既存のファイルに追記する
with open('bacon.txt', 'a') as bacon_file:  # 'a' = 追記モード
    bacon_file.write('Bacon is not a vegetable.')
```

```output
25
```

```python
with open('bacon.txt') as bacon_file:
    content = bacon_file.read()

print(content)
```

```output
Hello world!
Bacon is not a vegetable.
```

## 関連リンク

- <router-link to="/cheatsheet/file-directory-path">ファイルとディレクトリのパス</router-link>
- <router-link to="/cheatsheet/json-yaml">JSON と YAML</router-link>
- <router-link to="/blog/python-pathlib-essentials">すべての開発者が知っておくべき 10 の必須ファイルシステム操作</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/print">print()</router-link>
