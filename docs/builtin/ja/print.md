---
title: 'Python print() 組み込み関数 - Python チートシート'
description: 'オブジェクトをテキストストリームファイルに出力します。引数 sep で区切り、end で終了します。sep、end、file、flush はキーワード引数として指定する必要があります。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python print() 組み込み関数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#print">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
   オブジェクトを指定されたテキストストリームファイルに出力します。オブジェクト間は sep で区切られ、末尾には end が付きます。sep、end、file、および flush が指定された場合は、キーワード引数として渡す必要があります。
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

`print()` 関数は、渡された引数の値を書き出します。[...] 複数の引数、浮動小数点数、および文字列を処理します。文字列は引用符なしで出力され、項目間にはスペースが挿入されるため、きれいに整形できます。

```python
print('Hello world!')
```

出力：

```plaintext
Hello world!
```

```python
a = 1
print('Hello world!', a)
```

出力：

```plaintext
Hello world! 1
```

## The end keyword

キーワード引数 `end` を使用すると、出力後の改行を回避したり、出力を別の文字列で終了させたりできます。

```python
phrase = ['printed', 'with', 'a', 'dash', 'in', 'between']
for word in phrase:
    print(word, end='-')
```

出力：

```plaintext
printed-with-a-dash-in-between-
```

## The sep keyword

キーワード `sep` は、オブジェクトが複数ある場合に、それらをどのように区切るかを指定します。

```python
print('cats', 'dogs', 'mice', sep=',')
```

出力：

```plaintext
cats,dogs,mice
```

## Relevant links

- <router-link to="/cheatsheet/string-formatting">Cheatsheet: 文字列のフォーマット</router-link>
- <router-link to="/cheatsheet/manipulating-strings">Cheatsheet: 文字列の操作</router-link>
- <router-link to="/builtin/format">format()</router-link>
- <router-link to="/builtin/input">input()</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/repr">repr()</router-link>
