---
title: Python Tempfile モジュール - Python チートシート
description: `tempfile` モジュールは、テンポラリファイルとテンポラリディレクトリを安全に作成します。
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Tempfile モジュール
</base-title>

`tempfile` モジュールは、テンポラリファイルとテンポラリディレクトリを安全に作成します。

```python
import tempfile
```

`tempfile` は、テスト出力、ダウンロード、中間ファイルのように、プログラムの実行中だけ存在すればよいデータに使います。

## TemporaryFile()

`TemporaryFile` は、自動的に片付けられるファイルオブジェクトを作成します。

```python
import tempfile

with tempfile.TemporaryFile(mode='w+t') as temp:
    temp.write('hello')
    temp.seek(0)
    print(temp.read())
```

```output
hello
```

`with` ブロックが終わると、ファイルは自動的に削除されます。

## NamedTemporaryFile()

`NamedTemporaryFile` は、ディスク上のパスを返します。

```python
import tempfile

with tempfile.NamedTemporaryFile(mode='w+t') as temp:
    print(bool(temp.name))
```

```output
True
```

これは、別の API がファイルオブジェクトではなくファイル名を必要とするときに便利です。

## TemporaryDirectory()

テンポラリディレクトリは、テストや短命の作業領域に便利です。

```python
import tempfile
from pathlib import Path

with tempfile.TemporaryDirectory() as directory:
    file_path = Path(directory) / 'notes.txt'
    file_path.write_text('draft')
    print(file_path.exists())
```

```output
True
```

ディレクトリ内のファイルは、ブロック終了時にディレクトリと一緒に削除されます。

## テンポラリの場所を選ぶ

`gettempdir()` は、Python がデフォルトで使うディレクトリを返します。

```python
import tempfile

print(bool(tempfile.gettempdir()))
```

```output
True
```

## 関連リンク

- <router-link to="/modules/pathlib-module">モジュール: pathlib</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">チートシート: ファイルの読み書き</router-link>
- <router-link to="/builtin/open">open()</router-link>
