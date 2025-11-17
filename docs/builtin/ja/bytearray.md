---
title: 'Python 組み込み関数 bytearray() - Python チートシート'
description: '新しいバイト配列を返します。bytearray クラスは、範囲内の整数のミュータブル（変更可能）なシーケンスです。[...].ミュータブルシーケンス型に記載されている、ミュータブルシーケンスのほとんどの標準メソッドと、bytes 型が持つほとんどのメソッドを持っています。[...]'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python bytearray() ビルトイン関数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#bytearray">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    新しいバイト配列を返します。bytearray クラスは、範囲 [... ] 内の整数のミュータブルなシーケンスです。ミュータブルシーケンス型で説明されている、ミュータブルシーケンスのほとんどの通常のメソッドと、bytes 型が持つほとんどのメソッドを備えています [...].
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

`bytearray()` 関数は、新しいバイト配列を返します。このオブジェクトは、0 <= x < 256 の範囲内の整数のミュータブル（変更可能）なシーケンスです。これは本質的に `bytes` オブジェクトのミュータブル版であり、作成後にその内容を変更できることを意味します。これは、インプレースで変更する必要があるバイナリデータを扱う場合に役立ちます。

## Examples

```python
# 特定のエンコーディングを持つ文字列から bytearray を作成
ba1 = bytearray("hello", "utf-8")
print(ba1)
```

Output:

```plaintext
bytearray(b'hello')
```

```python
# 整数のリストから bytearray を作成
ba2 = bytearray([72, 101, 108, 108, 111])
print(ba2)
```

Output:

```plaintext
bytearray(b'Hello')
```

```python
# bytearray を変更する（ミュータブルであるため）
ba2[0] = 104  # 'h' の ASCII
ba2.append(33)  # '!' の ASCII
print(ba2)
```

Output:

```plaintext
bytearray(b'hello!')
```

## Relevant links

- <router-link to="/cheatsheet/reading-and-writing-files">Cheatsheet: ファイルの読み書き</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: リストとタプル</router-link>
- <router-link to="/blog/python-data-types">Blog: Python データ型</router-link>
- <router-link to="/builtin/bytes">bytes()</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/memoryview">memoryview()</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/int">int()</router-link>
