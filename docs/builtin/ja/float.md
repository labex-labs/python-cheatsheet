---
title: 'Python 組み込み関数 float() - Python チートシート'
description: '数値または文字列 x から浮動小数点数を返します。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python float() 組み込み関数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#float">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   数値または文字列 x から浮動小数点数を返します。
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Python の `float()` 関数は、数値または数を含む文字列を浮動小数点数に変換するための組み込み関数です。これは、小数点の精度を必要とする算術演算を実行する場合に特に役立ちます。

<router-link to="/builtin/float">float()</router-link> 関数は、数値または文字列から浮動小数点数を返します。

## Examples

```python
float('10')
float(10)
```

Output:

```plaintext
10.0
10.0
```

## Relevant links

- <router-link :to="'/builtin/int/'">int()</router-link>
- <router-link :to="'/builtin/complex/'">complex()</router-link>
- <router-link :to="'/blog/python-data-types/'">Python Data Types</router-link>
- <router-link :to="'/builtin/str'">str()</router-link>
- <router-link :to="'/builtin/round'">round()</router-link>
- <router-link :to="'/cheatsheet/string-formatting'">String Formatting</router-link>
