---
title: 'Python 組み込み関数 id() - Python チートシート'
description: 'オブジェクトの「同一性」を返します。これは、オブジェクトの生存期間中、一意で不変であることが保証される整数です。生存期間が重複しない 2 つのオブジェクトは、同じ id() 値を持つ場合があります。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 組み込み関数 id()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#id">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
   オブジェクトの「アイデンティティ」を返します。これは、オブジェクトの存続期間中、一意であり定数であることが保証される整数です。存続期間が重複しない 2 つのオブジェクトは、同じ id() 値を持つことがあります。
  </base-disclaimer-content>
</base-disclaimer>

## はじめに

`id()` 関数は、メモリ内のオブジェクトを識別する一意の整数を返します。この ID は、オブジェクトの存続期間中、一意であることが保証されます。これは本質的にオブジェクトのメモリアドレスです。

### 例

```python
x = 10
y = 10
z = 20

print(id(x))
print(id(y))  # Python は小さい整数をキャッシュするため、id(x) と同じになる
print(id(z))
print(id(1))
print(id('1'))
print(id([1, 2]))
```

出力：

```plaintext
4331368528
4331368528
4331368560
4331368496
4331368560
4331368560
```

## 関連リンク

- <router-link :to="'/builtin/hash'">hash()</router-link>
- <router-link :to="'/builtin/object'">object()</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP の基本</router-link>
- <router-link :to="'/blog/python-data-types'">Python のデータ型</router-link>
- <router-link :to="'/builtin/type'">type()</router-link>
