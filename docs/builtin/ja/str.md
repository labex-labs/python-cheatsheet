---
title: 'Python 組み込み関数 str() - Python チートシート'
description: 'オブジェクトの文字列バージョンを返します。オブジェクトが指定されていない場合は、空文字列を返します。それ以外の場合、str() の動作はエンコーディングまたはエラーが指定されているかによって異なります。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python str() ビルトイン関数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#func-str">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
    オブジェクトの文字列バージョンを返します。オブジェクトが指定されていない場合、空の文字列を返します。それ以外の場合、str() の動作はエンコーディングまたは errors が指定されているかどうかに依存します。
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Python の `str()` 関数は、オブジェクトの文字列バージョンを返すビルトイン関数です。オブジェクトが提供されない場合、空の文字列を返します。これは、他のデータ型を文字列に変換するための多用途な関数です。

## Examples

```python
# transform an integer to a string
from_integer = str(29)
print(from_integer)
print(type(from_integer))
```

Output:

```plaintext
29
<class 'str'>
```

```python
# transform a float to string
from_float = str(-3.14)
print(from_float)
print(type(from_float))
```

Output:

```plaintext
-3.14
<class 'str'>
```

```python
# return an empty string
str()
```

Output:

```plaintext
''
```

## Relevant links

- <router-link to="/cheatsheet/manipulating-strings">Cheatsheet: 文字列の操作</router-link>
- <router-link to="/cheatsheet/string-formatting">Cheatsheet: 文字列のフォーマット</router-link>
- <router-link to="/blog/python-data-types">Blog: Python データ型</router-link>
- <router-link to="/builtin/repr">repr()</router-link>
- <router-link to="/builtin/ascii">ascii()</router-link>
- <router-link to="/builtin/bytes">bytes()</router-link>
- <router-link to="/builtin/format">format()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/float">float()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/set">set()</router-link>
