---
title: 'Python 組み込み関数 ord() - Python チートシート'
description: '1 つの Unicode 文字を表す文字列が与えられた場合、その文字の Unicode コードポイントを表す整数を返します。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python ord() ビルトイン関数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#ord">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
   1 文字を表す文字列が与えられた場合、その文字の Unicode コードポイントを表す整数を返します。
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

`ord()` 関数は、<router-link to="/builtin/chr">chr()</router-link> の逆の操作を行います。これは、単一文字の文字列を受け取り、その Unicode コードポイント（整数）を返します。

### Examples

```python
# 文字の Unicode コードポイントを取得する
print(ord('A'))
print(ord('€'))
print(ord('1'))
print(ord('a'))
```

Output:

```plaintext
65
8364
49
97
```

## Relevant links

- <router-link to="/cheatsheet/manipulating-strings">チートシート：文字列の操作</router-link>
- <router-link to="/blog/python-data-types">ブログ：Python のデータ型</router-link>
- <router-link to="/builtin/chr">chr()</router-link>
- <router-link to="/builtin/ascii">ascii()</router-link>
