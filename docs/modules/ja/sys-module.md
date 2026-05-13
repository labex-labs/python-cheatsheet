---
title: "Python Sys モジュール - Python チートシート"
description: "`sys` モジュールは、コマンドライン引数、インポートパス、現在のインタープリターのバージョンなど、Python の実行時情報にアクセスできます。"
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Sys モジュール
</base-title>

`sys` モジュールは、コマンドライン引数、インポートパス、現在のインタープリターのバージョンなど、Python の実行時情報にアクセスできます。

```python
import sys
```

自分のアプリケーションオブジェクトだけでなく、Python インタープリター自体とやり取りしたいときに `sys` を使います。

## コマンドライン引数

`sys.argv` は、現在のスクリプトに渡された引数の一覧です。

```python
import sys

sys.argv = ['main.py', '--debug', 'app']
print(sys.argv[0])
print(sys.argv[1:])
```

```output
main.py
['--debug', 'app']
```

本格的なコマンドラインアプリケーションでは <router-link to="/modules/argparse-module">argparse</router-link> を使う方がよいです。同じ考え方をベースにしつつ、検証やヘルプメッセージを提供します。

## Python のバージョン

```python
import sys

print(sys.version_info.major)
print(sys.version_info.minor)
```

```output
3
14
```

## インポート検索パス

`sys.path` は、Python がモジュールを探す場所を制御します。

```python
import sys

print(type(sys.path).__name__)
print(len(sys.path) > 0)
```

```output
list
True
```

`sys.path` の最初の要素には通常、現在のプロジェクトが含まれるため、ローカルモジュールをインポートできます。

## 標準入力と標準出力

`sys.stdin`、`sys.stdout`、`sys.stderr` は、インタープリターが使うファイル風オブジェクトです。

```python
import sys

print(sys.stdout.writable())
print(sys.stderr.writable())
```

```output
True
True
```

## プログラムを終了する

```python
import sys

try:
    sys.exit(0)
except SystemExit as exc:
    print(exc.code)
```

```output
0
```

## 関連リンク

- <router-link to="/modules/argparse-module">モジュール: argparse</router-link>
- <router-link to="/modules/subprocess-module">モジュール: subprocess</router-link>
- <router-link to="/cheatsheet/main">チートシート: Main: トップレベルスクリプト</router-link>
