---
title: 'Python 組み込み関数 complex() - Python チートシート'
description: '値 real + imag*1j の複素数を返すか、文字列や数値を複素数に変換します。[...] 各引数は任意の数値型（複素数を含む）にできます。imag が省略された場合、デフォルトはゼロになり、コンストラクタは int や float のような数値変換として機能します。両方の引数が省略された場合、0j を返します。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python complex() 組み込み関数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#complex">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
   実部が real、虚部が imag*1j である複素数を返すか、文字列または数値を複素数に変換します。[...] 各引数は任意の数値型（複素数を含む）にすることができます。imag が省略された場合、デフォルトはゼロになり、コンストラクタは <router-link to="/builtin/int">`int()`</router-link> や <router-link to="/builtin/float">`float()`</router-link> のような数値変換として機能します。両方の引数が省略された場合、0j を返します。
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

`complex()` 関数は複素数を生成します。引数として実部と虚部を取ることができます。引数が 1 つだけ指定された場合、それは実部と見なされ、虚部はゼロになります。

## Examples

```python
# 実部と虚部を持つ複素数を生成
print(complex(3, 4))

# 実部のみを持つ複素数を生成
print(complex(5))

# 文字列から複素数を生成
print(complex("2+3j"))
```

```output
(3+4j)
(5+0j)
(2+3j)
```

## Relevant links

- <router-link to="/blog/python-data-types">ブログ：Python データ型</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/float">float()</router-link>
- <router-link to="/builtin/abs">abs()</router-link>
- <router-link to="/builtin/pow">pow()</router-link>
