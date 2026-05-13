---
title: "Python Hashlib モジュール - Python チートシート"
description: "`hashlib` モジュールは、SHA-256 や MD5 のような安全なハッシュ関数を提供します。"
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Hashlib モジュール
</base-title>

`hashlib` モジュールは、SHA-256 や MD5 のような安全なハッシュ関数を提供します。

```python
import hashlib
```

ハッシュ関数はデータを固定長のダイジェストに変換します。入力が少し変わるだけで、ダイジェストは大きく変わります。

## ハッシュを作成する

通常は、アルゴリズムを選んで bytes を渡すところから始めます。

```python
import hashlib

digest = hashlib.sha256(b'hello world')
print(digest.hexdigest())
```

```output
b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9
```

文字列は先に bytes にエンコードする必要があります。

```python
import hashlib

message = 'hello world'
digest = hashlib.sha256(message.encode('utf-8')).hexdigest()
print(digest)
```

```output
b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9
```

## 増分更新する

ハッシュはチャンクごとに更新できます。

```python
hasher = hashlib.sha256()
hasher.update(b'hello ')
hasher.update(b'world')
print(hasher.hexdigest())
```

```output
b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9
```

## アルゴリズムを比較する

アルゴリズムが違えば、ダイジェストのサイズも異なります。

```python
print(hashlib.md5(b'abc').hexdigest())
print(hashlib.sha1(b'abc').hexdigest())
print(hashlib.sha256(b'abc').hexdigest())
```

```output
900150983cd24fb0d6963f7d28e17f72
a9993e364706816aba3e25717850c26c9cd0d89d
ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad
```

## ファイルをハッシュ化する

大きなファイルを一度にメモリへ読み込まないよう、チャンク単位で読みます。

```python
import hashlib
from pathlib import Path

path = Path('example.txt')
path.write_text('hello world')

hasher = hashlib.sha256()
with path.open('rb') as file:
    for chunk in iter(lambda: file.read(8192), b''):
        hasher.update(chunk)

print(hasher.hexdigest())
path.unlink()
```

```output
b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9
```

<base-warning>
  <base-warning-title>
    WARNING
  </base-warning-title>
  <base-warning-content>
    新しいコードでは、SHA-256 や SHA-512 のような現代的なアルゴリズムを優先してください。MD5 や SHA-1 はチェックサムにはまだ有用ですが、セキュリティが重要な用途には向きません。
  </base-warning-content>
</base-warning>

## 関連リンク

- <router-link to="/modules/pathlib-module">Module: pathlib</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">チートシート: ファイルの読み書き</router-link>
- <router-link to="/builtin/open">open()</router-link>
