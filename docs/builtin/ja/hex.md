---
title: 'Python 組み込み関数 hex() - Python チートシート'
description: '整数を「0x」プレフィックス付きの小文字の 16 進数文字列に変換します。x が Python の int オブジェクトでない場合、整数を返す__index__() メソッドを定義する必要があります。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python の組み込み関数 hex()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#hex">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
   整数を小文字の 16 進数文字列に変換し、接頭辞 "0x" を付けます。x が Python の int オブジェクトでない場合、整数を返す__index__() メソッドを定義している必要があります。
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Python の`hex()`関数は、整数を対応する 16 進数表現に変換する組み込み関数です。結果の文字列には、それが 16 進数値であることを示すために "0x" が接頭辞として付きます。この関数は、メモリのアドレスや色のコードを扱う場合など、低レベルプログラミングで一般的な 16 進数を扱う必要がある場合に役立ちます。

## Examples

```python
hex(1)
hex(10)
hex(100)
hex(1000)
```

Output:

```plaintext
'0x1'
'0xa'
'0x64'
'0x3e8'
```

## Relevant links

- <router-link :to="'/builtin/bin'">bin()</router-link>
- <router-link :to="'/builtin/int'">int()</router-link>
- <router-link :to="'/builtin/oct'">oct()</router-link>
- <router-link :to="'/cheatsheet/string-formatting'">文字列のフォーマット</router-link>
- <router-link :to="'/blog/python-data-types'">Python のデータ型</router-link>
- <router-link :to="'/builtin/format'">format()</router-link>
