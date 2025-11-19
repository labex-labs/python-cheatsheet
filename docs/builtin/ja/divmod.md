---
title: 'Python 組み込み関数 divmod() - Python チートシート'
description: '2 つの（非複素）数値を引数に取り、整数除算における商と余りからなるペアを返します。オペランドの型が混在する場合、二項演算子のルールが適用されます。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 組み込み関数 divmod()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#divmod">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
   2 つの（複素数でない）数値を引数として受け取り、整数除算における商と剰余からなるペアを返します。オペランドの型が混在する場合、二項算術演算子のルールが適用されます。
  </base-disclaimer-content>
</base-disclaimer>

## 導入

`divmod()` 関数は、2 つの数値を引数として受け取り、それらの整数除算の商と剰余を含むタプルを返します。これは、単一の呼び出しで両方の結果を取得するための便利な方法です。

### 例

```python
# 商と剰余を取得
quotient, remainder = divmod(10, 3)
print(quotient)
print(remainder)
print(divmod(2, 2))
print(divmod(10, 2))
print(divmod(7, 2))
```

```output
3
1
(1, 0)
(5, 0)
(3, 1)
```

## 関連リンク

- <router-link :to="'/cheatsheet/lists-and-tuples'">リストとタプル</router-link>
- <router-link :to="'/blog/python-data-types'">Python のデータ型</router-link>
- <router-link :to="'/builtin/int'">`int()`</router-link>
- <router-link :to="'/builtin/float'">`float()`</router-link>
- <router-link :to="'/builtin/tuple'">`tuple()`</router-link>
