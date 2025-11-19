---
title: 'Python 組み込み関数 chr() - Python チートシート'
description: "整数 i に対応する Unicode コードポイントを持つ文字を表す文字列を返します。例えば、chr(97) は文字列'a'を返し、chr(8364) は文字列'€'を返します。これは ord() の逆関数です。"
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python chr() ビルトイン関数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#chr">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
   整数 i に対応する文字を表す文字列を返します。例えば、chr(97) は文字列 'a' を返し、chr(8364) は文字列 '€' を返します。これは ord() の逆の操作です。
  </base-disclaimer-content>
</base-disclaimer>

## 導入

Python の `chr()` 関数は、整数を引数に取り、対応する Unicode 文字を表す文字列を返すビルトイン関数です。

`chr()` 関数に渡される整数は、有効な Unicode 文字の範囲である 0 から 65535 の範囲内である必要があります。

```python
print(chr(97))
print(chr(65))
print(chr(120))
```

```output
a
A
x
```

`chr()` 関数は、単一の文字を引数に取り対応する整数を返す `ord()` 関数の逆の操作です。

```python
print(ord('a'))
print(ord('A'))
print(ord('x'))
```

```output
97
65
120
```

`chr()` 関数は、特に Unicode 文字を扱う際に、テキストや文字データを扱う場合に役立ちます。例えば、Unicode コードポイントを表す整数を対応する文字に変換したり、整数の範囲から文字の文字列を生成したりするために使用できます。

## 関連リンク

- <router-link :to="'/builtin/ord'">ord()</router-link>
- <router-link :to="'/builtin/ascii'">ascii()</router-link>
- <router-link :to="'/cheatsheet/manipulating-strings'">文字列の操作</router-link>
- <router-link :to="'/blog/python-data-types'">Python データ型</router-link>
