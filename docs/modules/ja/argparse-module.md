---
title: Python Argparse モジュール - Python チートシート
description: `argparse` モジュールを使うと、位置引数、オプション、フラグ、ヘルプメッセージを持つコマンドラインインターフェースを作成できます。
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Argparse モジュール
</base-title>

`argparse` モジュールを使うと、位置引数、オプション、フラグ、ヘルプメッセージを持つコマンドラインインターフェースを作成できます。

このモジュールは Python 3.2 で追加されました。Python 3.14 を使っている場合、`ArgumentParser` は `suggest_on_error` と `color` パラメータもサポートします。

```python
import argparse
```

Python ファイルを小さなターミナルプログラムのように動かしたいときは、`argparse` を使います。

```bash
python greet.py Ada --count 2
```

このモジュールはスクリプト名の後ろにあるテキストを読み取り、検証して、解析結果を含む Python オブジェクトを返します。

## パーサーの作成

`ArgumentParser` は、プログラムが受け付ける引数を保持します。

```python
import argparse

parser = argparse.ArgumentParser(
    prog='greet',
    description='Greet a user from the command line',
)

parser.print_help()
```

```output
usage: greet [-h]

Greet a user from the command line

options:
  -h, --help  show this help message and exit
```

## 位置引数

位置引数はデフォルトで必須です。

```python
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('name')

args = parser.parse_args(['Ada'])
print(args.name)
```

```output
Ada
```

## オプション引数とフラグ

オプション引数は通常 `-` または `--` で始まります。

```python
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--count', type=int, default=1)
parser.add_argument('-v', '--verbose', action='store_true')

args = parser.parse_args(['--count', '3', '--verbose'])
print(args.count)
print(args.verbose)
```

```output
3
True
```

## 選択肢と型変換

値は解析時に検証できます。

```python
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--mode', choices=['dev', 'prod'])
parser.add_argument('--port', type=int, default=8000)

args = parser.parse_args(['--mode', 'dev', '--port', '9000'])
print(args.mode)
print(args.port)
```

```output
dev
9000
```

## サブコマンド

サブコマンドは `git commit` や `docker run` のようなツールで便利です。

```python
import argparse

parser = argparse.ArgumentParser()
subparsers = parser.add_subparsers(dest='command', required=True)

build_parser = subparsers.add_parser('build')
build_parser.add_argument('--release', action='store_true')

args = parser.parse_args(['build', '--release'])
print(args.command)
print(args.release)
```

```output
build
True
```

## 小さな完全例

この例では名前を受け取り、挨拶を繰り返します。

```python
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('name')
parser.add_argument('--count', type=int, default=1)

args = parser.parse_args(['Ada', '--count', '2'])

for _ in range(args.count):
    print(f'Hello {args.name}!')
```

```output
Hello Ada!
Hello Ada!
```

## 関連リンク

- <router-link to="/modules/sys-module">モジュール: sys</router-link>
- <router-link to="/cheatsheet/functions">チートシート: 関数</router-link>
- <router-link to="/cheatsheet/control-flow">チートシート: 制御フロー</router-link>
