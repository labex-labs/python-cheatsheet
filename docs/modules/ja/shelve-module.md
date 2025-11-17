---
title: 'Python Shelve モジュール - Python チートシート'
description: '「シェルフ」は永続的な辞書のようなオブジェクトです。シェルフ内には、pickle モジュールで処理できる任意の Python オブジェクトを格納できます。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Shelve モジュール
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/shelve.html">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
   「シェルフ（shelf）」は永続的な辞書のようなオブジェクトです。「dbm」データベースとの違いは、シェルフ内の値（キーではなく！）は、本質的に任意の Python オブジェクトにできることです。これは pickle モジュールが処理できるものであれば何でもよく、ほとんどのクラスインスタンス、再帰的なデータ型、および多くの共有サブオブジェクトを含むオブジェクトが含まれます。キーは通常の文字列です。
  </base-disclaimer-content>
</base-disclaimer>

## 変数の保存

```python
import shelve

wife = ['Pretty', 'Lovely', 'Nice']
# シェルフファイルを開き、データを保存
with shelve.open('mydata') as shelf_file:
    shelf_file['wife'] = wife
```

## 変数のオープンと読み取り

```python
# シェルフファイルを開き、データを読み取る
with shelve.open('mydata') as shelf_file:
    print(type(shelf_file))
    # キーで保存された値にアクセス
    print(shelf_file['wife'])
```

Output:

```plaintext
<class 'shelve.DbfilenameShelf'>
['Pretty', 'Lovely', 'Nice']
```

辞書と同様に、`shelf` 値には `keys()` および `values()` メソッドがあり、シェルフ内のキーと値のリストのような値を返します。これらのメソッドは真のリストではなくリストのような値を返すため、`list()` 関数に渡してリスト形式で取得する必要があります。

```python
# シェルフ内のすべてのキーと値にアクセス
with shelve.open('mydata') as shelf_file:
    print(list(shelf_file.keys()))
    print(list(shelf_file.values()))
```

Output:

```plaintext
['wife']
[['Pretty', 'Lovely', 'Nice']]
```

## 関連リンク

- <router-link to="/cheatsheet/reading-and-writing-files">チートシート：ファイルの読み書き</router-link>
- <router-link to="/cheatsheet/dictionaries">チートシート：辞書</router-link>
- <router-link to="/cheatsheet/context-manager">チートシート：コンテキストマネージャ</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
