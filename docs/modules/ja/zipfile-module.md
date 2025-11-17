---
title: 'Python Zipfile モジュール - Python チートシート'
description: 'ZIP ファイルの作成、読み取り、書き込み、追加、一覧表示を行うツールを提供します。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Zipfile モジュール
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/zipfile.html">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
   このモジュールは、ZIP ファイルを作成、読み取り、書き込み、追加、および一覧表示するためのツールを提供します。
  </base-disclaimer-content>
</base-disclaimer>

## ZIP ファイルの読み取り

```python
import zipfile

# ZIP ファイルを開き、その内容を読み取る
with zipfile.ZipFile('example.zip') as example_zip:
    # ZIP 内のすべてのファイルとディレクトリを一覧表示
    print(example_zip.namelist())
    # 特定のファイルのメタデータを取得
    spam_info = example_zip.getinfo('spam.txt')
    # 元のファイルサイズを出力
    print(spam_info.file_size)
    # 圧縮後のファイルサイズを出力
    print(spam_info.compress_size)
    # 圧縮率を計算
    print('Compressed file is %sx smaller!' % (round(spam_info.file_size / spam_info.compress_size, 2)))
```

出力：

```plaintext
['spam.txt', 'cats/', 'cats/catnames.txt', 'cats/zophie.jpg']
13908
3828
Compressed file is 3.63x smaller!
```

## ZIP ファイルからの抽出

ZipFile オブジェクトの `extractall()` メソッドは、ZIP ファイル内のすべてのファイルとフォルダを現在の作業ディレクトリに抽出します。

```python
# ZIP から現在のディレクトリへすべてのファイルを抽出
with zipfile.ZipFile('example.zip') as example_zip:
    example_zip.extractall()
```

ZipFile オブジェクトの `extract()` メソッドは、ZIP ファイルから単一のファイルを抽出します。

```python
# ZIP から単一のファイルを抽出
with zipfile.ZipFile('example.zip') as example_zip:
    # 現在のディレクトリに抽出 (パスを返す)
    print(example_zip.extract('spam.txt'))
    # 特定のディレクトリに抽出
    print(example_zip.extract('spam.txt', '/tmp/some/new/folders'))
```

出力：

```plaintext
/tmp/spam.txt
/tmp/some/new/folders/spam.txt
```

## ZIP ファイルの作成と追加

```python
import zipfile

# 新しい ZIP ファイルを作成し、ファイルを追加する
with zipfile.ZipFile('new.zip', 'w') as new_zip:
    # 圧縮を指定してファイルを追加
    new_zip.write('spam.txt', compress_type=zipfile.ZIP_DEFLATED)
```

このコードは、spam.txt の圧縮された内容を持つ new.zip という新しい ZIP ファイルを作成します。

## ZIP ファイルのメタデータの読み取り

### `namelist()` を使用したファイル名の取得

```python
import zipfile

# ZIP ファイルを読み取り、すべてのファイル名を一覧表示
with zipfile.ZipFile('example.zip', 'r') as zf:
    print(zf.namelist())
```

出力：

```plaintext
['README.txt']
```

### `infolist()` を使用したすべてのメタデータの取得

```python
import datetime
import zipfile

# ZIP 内のすべてのファイルの詳細なメタデータを取得
with zipfile.ZipFile('example.zip') as zf:
    for info in zf.infolist():
        # オペレーティングシステムを判別 (0 = Windows, 3 = Unix)
        system = 'Windows' if info.create_system == 0 else 'Unix'
        # date_time タプルを datetime オブジェクトに変換
        modified = datetime.datetime(*info.date_time)
        print(info.filename)
        print(f'Comment     : {info.comment}')
        print(f'Modified    : {modified}')
        print(f'System      : {system}')
        print(f'ZIP version : {info.create_version}')
        print(f'Compressed  : {info.compress_size} bytes')
        print(f'Uncompressed: {info.file_size} bytes')
```

出力：

```plaintext
README.txt
Comment     : b''
Modified    : 2022-11-15 06:48:02
System      : Unix
ZIP version : 30
Compressed  : 65 bytes
Uncompressed: 76 bytes
```

## 関連リンク

- <router-link to="/cheatsheet/reading-and-writing-files">チートシート：ファイルの読み書き</router-link>
- <router-link to="/cheatsheet/file-directory-path">チートシート：ファイルとディレクトリのパス</router-link>
- <router-link to="/cheatsheet/context-manager">チートシート：コンテキストマネージャ</router-link>
- <router-link to="/modules/os-module">モジュール：os</router-link>
- <router-link to="/modules/pathlib-module">モジュール：pathlib</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/bytes">bytes()</router-link>
