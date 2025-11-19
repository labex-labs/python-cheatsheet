---
title: 'Python 組み込み関数 bin() - Python チートシート'
description: '整数を「0b」で始まるバイナリ文字列に変換します。結果は有効な Python 式です。x が Python の int オブジェクトでない場合、整数を返す__index__() メソッドを定義する必要があります。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 組み込み関数 bin()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#bin">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
    整数をプレフィックス "0b" を付けたバイナリ文字列に変換します。結果は有効な Python 式になります。x が Python の int オブジェクトでない場合、整数を返す<code>__index__()</code>メソッドを定義している必要があります。
  </base-disclaimer-content>
</base-disclaimer>

## はじめに

`bin()`関数は、整数をそのバイナリ表現に変換します。結果の文字列には、それがバイナリ数であることを示すために "0b" プレフィックスが付きます。

### 例

`bin()`の使用方法の例をいくつか示します。

```python
# 整数をバイナリに変換
print(bin(2))
print(bin(7))
print(bin(1))
print(bin(10))
print(bin(100))
print(bin(1000))
```

```output
0b10
0b111
0b1
0b1010
0b1100100
0b1111101000
```

## 関連リンク

- <router-link to="/blog/python-data-types">ブログ：Python データ型</router-link>
- <router-link to="/cheatsheet/string-formatting">チートシート：文字列フォーマット</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/hex">hex()</router-link>
- <router-link to="/builtin/oct">oct()</router-link>
- <router-link to="/builtin/format">format()</router-link>
