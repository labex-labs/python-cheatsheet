---
title: 'Python bytes() 組み込み関数 - Python チートシート'
description: '範囲内の整数からなる不変のシーケンスである新しい「bytes」オブジェクトを返します。bytes は bytearray の不変バージョンであり、同じ非変更メソッド、同じインデックス指定およびスライス動作を持ちます。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python bytes() 組み込み関数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#bytes">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
    新しい「bytes」オブジェクトを返します。これは、範囲内の整数のイミュータブル（変更不可能）なシーケンスです [...]. bytes は bytearray のイミュータブルバージョンであり、同じ非変更メソッドと、同じインデックス指定およびスライス動作を持ちます。
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Python において、`bytes` 型は単一バイトのイミュータブル（変更不可能）なシーケンスです。これは、0 から 255 の範囲内の整数のシーケンスを表し、画像、音声、またはその他の種類のファイルなどのバイナリデータを表現するために使用できます。

bytes オブジェクトを作成するにはいくつかの方法があります。一つの方法は、`bytes()` コンストラクタを使用し、それに文字列、bytearray オブジェクト、または bytes オブジェクトを渡すことです。例えば：

```python
data = "Hello, World!"
bytes_obj = bytes(data, "utf-8")
print(bytes_obj)
```

```output
b'Hello, World!'
```

別の方法は、文字列の前に `b` または `B` をプレフィックスとして付けるリテラル表記を使用することです：

```python
data = b"Hello, World!"
print(data)
```

```output
b'Hello, World!'
```

## Relevant links

- <router-link :to="'/builtin/bytearray'">bytearray()</router-link>
- <router-link :to="'/builtin/memoryview'">memoryview()</router-link>
- <router-link :to="'/cheatsheet/reading-and-writing-files'">ファイルの読み書き</router-link>
- <router-link :to="'/blog/python-data-types'">Python データ型</router-link>
