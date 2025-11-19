---
title: 'Python 組み込み関数 round() - Python チートシート'
description: '小数点以下 ndigits の精度に丸められた数値を返します。ndigits が省略されるか None の場合、入力値に最も近い整数を返します。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python round() 組み込み関数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#round">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
   小数点以下 ndigits の精度に数値を丸めます。ndigits が省略されるか None の場合、入力値に最も近い整数を返します。
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

`round()` 関数は、数値を指定された小数点以下の桁数に丸めます。小数点以下の桁数が指定されていない場合は、最も近い整数に丸められます。

`round()` は、.5 で終わる数値に対して「偶数への丸め（round half to even）」を使用することに注意してください。これは、最も近い偶数の整数に丸められることを意味します。

### Examples

```python
# 最も近い整数への丸め
print(round(3.14))
print(round(3.8))

# 指定された小数点以下の桁数への丸め
print(round(3.14159, 2))

# 「偶数への丸め」
print(round(2.5))
print(round(3.5))
```

```output
3
4
3.14
2
4
```

## Relevant links

- <router-link to="/blog/python-data-types">ブログ：Python データ型</router-link>
- <router-link to="/cheatsheet/string-formatting">チートシート：文字列のフォーマット</router-link>
- <router-link to="/builtin/format">format()</router-link>
- <router-link to="/builtin/abs">abs()</router-link>
- <router-link to="/builtin/float">float()</router-link>
- <router-link to="/builtin/int">int()</router-link>
