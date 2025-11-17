---
title: 'Python set() 組み込み関数 - Python チートシート'
description: 'イテラブルから要素を取得した新しいセットオブジェクトを返します。set は組み込みクラスです。このクラスに関するドキュメントについては、set および Set 型 — set, frozenset を参照してください。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python set() ビルトイン関数のチートシート
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#set">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
   新しい set オブジェクトを返します。オプションで、イテラブルから要素を取得できます。set はビルトインクラスです。このクラスに関するドキュメントについては、<router-link to="/cheatsheet/sets">set</router-link> および Set Types — set, frozenset を参照してください。
  </base-disclaimer-content>
</base-disclaimer>

## 導入

`set()` コンストラクタは新しいセットを作成します。セットは一意な要素の順序付けられていないコレクションです。空のセットを作成することも、イテラブルからセットを作成することもできます。

### 例

**空のセットを作成する：**

```python
my_set = set()
print(my_set)
```

出力：

```plaintext
set()
```

**リストからセットを作成する（重複は削除される）:**

```python
my_list = [1, 2, 2, 3, 3, 3]
my_set = set(my_list)
print(my_set)
```

出力：

```plaintext
{1, 2, 3}
```

## 関連リンク

- <router-link to="/cheatsheet/sets">チートシート：セット</router-link>
- <router-link to="/cheatsheet/comprehensions">チートシート：内包表記</router-link>
- <router-link to="/blog/python-sets-what-why-how">ブログ：Python セット - 何を、なぜ、どのように</router-link>
- <router-link to="/blog/python-data-types">ブログ：Python データ型</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/frozenset">frozenset()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
