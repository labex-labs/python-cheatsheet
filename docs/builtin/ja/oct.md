---
title: 'Python 組み込み関数 oct() - Python チートシート'
description: '整数を接頭辞「0o」付きの八進数文字列に変換します。結果は有効な Python 式です。x が Python の int オブジェクトでない場合、整数を返す__index__() メソッドを定義する必要があります。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 組み込み関数 oct()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#oct">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
   整数を接頭辞 "0o" の八進数文字列に変換します。結果は有効な Python 式になります。x が Python の <router-link to="/builtin/int">int</router-link> オブジェクトでない場合、整数を返す __index__() メソッドを定義している必要があります。
  </base-disclaimer-content>
</base-disclaimer>

## 導入

`oct()` 関数は、整数をその八進数表現に変換します。結果の文字列には、それが八進数であることを示すために "0o" が接頭辞として付きます。

### 例

`oct()` の使用例をいくつか示します。

```python
# 整数を八進数に変換
print(oct(8))
print(oct(10))
print(oct(100))
print(oct(1))
print(oct(1000))
```

```output
0o10
0o12
0o144
0o1
0o1750
```

## 関連リンク

- <router-link to="/blog/python-data-types">ブログ：Python データ型</router-link>
- <router-link to="/cheatsheet/string-formatting">チートシート：文字列フォーマット</router-link>
- <router-link to="/builtin/bin">bin()</router-link>
- <router-link to="/builtin/hex">hex()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/format">format()</router-link>
