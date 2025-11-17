---
title: 'Python 組み込み関数 min() - Python チートシート'
description: 'イテラブル内の最小の要素、または 2 つ以上の引数の中で最小のものを返します。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python min() 組み込み関数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#min">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
   イテラブル内の最小の項目、または 2 つ以上の引数の中で最小のものを返します。
  </base-disclaimer-content>
</base-disclaimer>

## 導入

`min()` 関数は、<router-link to="/builtin/max">max()</router-link> の対となる関数です。使用方法は 2 通りあります。

1. イテラブル（<router-link to="/builtin/list">リスト</router-link> や <router-link to="/builtin/tuple">タプル</router-link> など）と共に使用する場合、最小の項目を返します。
2. 2 つ以上の引数を指定して使用する場合、それらの中で最小のものを返します。

### 例

**イテラブル内の最小値を見つける：**

```python
numbers = [10, 2, 1, 40, 5]
print(min(numbers))

letters = ('z', 'b', 'a')
print(min(letters))
```

出力：

```plaintext
1
a
```

**複数の引数の中から最小値を見つける：**

```python
print(min(10, 20, 5))
```

出力：

```plaintext
5
```

## 関連リンク

- <router-link to="/cheatsheet/lists-and-tuples">チートシート：リストとタプル</router-link>
- <router-link to="/builtin/max">max()</router-link>
- <router-link to="/builtin/sorted">sorted()</router-link>
- <router-link to="/builtin/sum">sum()</router-link>
