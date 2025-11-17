---
title: 'Python CSV モジュール - Python チートシート'
description: 'Python の csv モジュールを使えば、CSV ファイルを簡単に操作できます。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python CSV モジュール
</base-title>

`csv` モジュールは、データ交換で一般的に使用される CSV ファイルの読み書きのためのツールを提供します。

<base-disclaimer>
  <base-disclaimer-title>
    csv モジュール 対 手動ファイル読み書き
  </base-disclaimer-title>
  <base-disclaimer-content>
    基本的なファイル操作と文字列メソッド（`read` または `write` および `split()` を使用した <code>open()</code> など）を使用して CSV ファイルを読み書きすることは可能ですが、<code>csv</code> モジュールは、引用符付きフィールド、埋め込みデリミタ、異なる改行コードなどのエッジケースを処理するように設計されています。これにより、他のプログラム（Excel など）によって生成された CSV ファイルとの互換性が確保され、解析エラーのリスクが軽減されます。ほとんどの CSV タスクでは、手動解析よりも <code>csv</code> モジュールを使用することを推奨します。
    <br>
    ファイル操作の基本については、<router-link to="/cheatsheet/file-directory-path">ファイルとディレクトリのパス</router-link> ページを参照してください。
  </base-disclaimer-content>
</base-disclaimer>

始めるには、モジュールをインポートします。

```python
import csv
```

## csv.reader()

この関数は、[文字列のイテラブル](https://docs.python.org/3/library/csv.html#id4:~:text=A%20csvfile%20must%20be%20an%20iterable%20of%20strings%2C%20each%20in%20the%20reader%E2%80%99s%20defined%20csv%20format)であるファイルを受け取ります。つまり、開いたファイルがそれに該当する必要があります。

```python
import csv

file_path = 'file.csv'

# CSV ファイルを読み込む
with open(file_path, 'r', newline='') as csvfile:
  reader = csv.reader(csvfile)

  # 各行を反復処理する
  for line in reader:
    print(line)
```

この関数はリーダーオブジェクトを返し、それを簡単に反復処理することで各行を取得できます。対応する行の各列には、組み込み関数 [`split()`](https://www.pythoncheatsheet.org/cheatsheet/manipulating-strings#split) を使用する必要なく、インデックスでアクセスできます。

## csv.writer()

この関数は、CSV ファイルとして書き込むファイルを受け取ります。リーダー関数と同様に、次のように呼び出す必要があります。

```python
import csv

file_path = 'file.csv'

# CSV 書き込み用にファイルを開く
with open(file_path, 'w', newline='') as csvfile:
  writer = csv.writer(csvfile)

  # 何かを行う
```

「何かを行う」ブロックは、次の関数を使用して置き換えることができます。

### writer.writerow()

単一行を CSV ファイルに書き込みます。

```python
# ヘッダー行を書き込む
writer.writerow(['name', 'age', 'city'])
# データ行を書き込む
writer.writerow(['Alice', 30, 'London'])
```

### writer.writerows()

複数の行を一度に書き込みます。

```python
# 複数の行を準備する
rows = [
    ['name', 'age', 'city'],
    ['Bob', 25, 'Paris'],
    ['Carol', 28, 'Berlin']
]
# すべての行を一度に書き込む
writer.writerows(rows)
```

## csv.DictReader

CSV ファイルを読み込み、ファイルの最初の行をキー（列ヘッダー）として使用して、各行を辞書としてアクセスできるようにします。

```python
import csv

# CSV を辞書として読み込む（最初の行がキーになる）
with open('people.csv', 'r', newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    # インデックスではなく名前で列にアクセスする
    for row in reader:
        print(row['name'], row['age'])
```

- 各 `row` は `OrderedDict`（Python 3.8 以降では通常の `dict`）です。
- CSV にヘッダーがない場合は、`fieldnames` パラメータで指定できます。

  ```python
  reader = csv.DictReader(csvfile, fieldnames=['name', 'age', 'city'])
  ```

## csv.DictWriter

辞書を CSV ファイルの行として書き込むことができます。ライターを作成する際に、フィールド名（列ヘッダー）を指定する必要があります。

```python
import csv

fieldnames = ['name', 'age', 'city']
rows = [
    {'name': 'Alice', 'age': 30, 'city': 'London'},
    {'name': 'Bob', 'age': 25, 'city': 'Paris'}
]

# 辞書を CSV に書き込む
with open('people_dict.csv', 'w', newline='') as csvfile:
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()  # ヘッダー行を書き込む
    writer.writerows(rows)
```

- `writer.writeheader()` を使用して、列ヘッダーを最初の行として書き込みます。
- `writer.writerows()` の各辞書は、ライター作成時に指定された `fieldnames` と一致するキーを持つ必要があります。

## csv.reader() および csv.writer() への追加パラメータ

### delimiter

フィールドを区切るために使用される文字を指定します。ファイルタイプが示すように、デフォルトはコンマ `,` です。ロケールによっては、Excel がセミコロンをデリミタとして CSV ファイルを生成することがあります。

```python
import csv

# セミコロンデリミタで CSV を読み込む
with open('data_semicolon.csv', newline='') as csvfile:
    reader = csv.reader(csvfile, delimiter=';')
    for row in reader:
        print(row)
```

### lineterminator

行を終了するために使用される文字または文字シーケンス。最も一般的なのは "\r\n" ですが、"\n" の場合もあります。

### quotechar

特殊文字を含むフィールドを引用符で囲むために使用される文字（デフォルトは `"` です）。

```python
# 引用符として一重引用符を使用する
reader = csv.reader(csvfile, quotechar="'")
```

詳細については、<a href="https://docs.python.org/3/library/csv.html" target="_blank" rel="noopener">公式 Python csv モジュールのドキュメント</a>を参照してください。
