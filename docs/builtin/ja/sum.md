---
title: 'Python 組み込み関数 sum() - Python チートシート'
description: '左から右へイテラブルの合計と要素を合計し、総和を返します。イテラブルの要素は通常数値であり、開始値に文字列を指定することはできません。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python sum() ビルトイン関数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#func-sum">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
    合計は start とイテラブルの要素を左から右へ加算し、合計を返します。イテラブルの要素は通常数値であり、start 値に文字列を指定することはできません。
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

`sum()` 関数は、イテラブル（リストやタプルなど）内のすべての要素の合計を計算します。オプションで `start` 値を指定でき、これは合計に加算されます。

### Examples

**数値のリストの合計：**

```python
numbers = [1, 2, 3, 4, 5]
print(sum(numbers))
```

出力：

```plaintext
15
```

**開始値を使用した合計：**

```python
numbers = [1, 2, 3]
print(sum(numbers, 10))  # 10 + 1 + 2 + 3
```

出力：

```plaintext
16
```

## Relevant links

- <router-link to="/cheatsheet/lists-and-tuples">チートシート：リストとタプル</router-link>
- <router-link to="/cheatsheet/comprehensions">チートシート：内包表記</router-link>
- <router-link to="/blog/python-data-types">ブログ：Python データ型</router-link>
- <router-link to="/modules/itertools-module">モジュール：itertools</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/min">min()</router-link>
- <router-link to="/builtin/max">max()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/float">float()</router-link>
