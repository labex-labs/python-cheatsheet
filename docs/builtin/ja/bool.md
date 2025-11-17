---
title: 'Python bool() 組み込み関数 - Python チートシート'
description: 'ブール値（True または False）を返します。x は標準の真偽判定手順を使用して変換されます。x が偽または省略された場合、False を返します。それ以外の場合は True を返します。bool クラスは int のサブクラスです。これ以上サブクラス化することはできません。その唯一のインスタンスは False と True です。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 組み込み関数 bool()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#bool">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
    ブール値 (True または False) を返します。x は標準の真偽値テスト手順を使用して変換されます。x が偽または省略された場合、これは False を返します。それ以外の場合は True を返します。bool クラスは int のサブクラスです。これ以上サブクラス化することはできません。そのインスタンスは False と True のみです。
  </base-disclaimer-content>
</base-disclaimer>

## 導入

Python の `bool()` 関数は、値をブール値 (`True` または `False`) に変換する組み込み関数です。これは標準の真偽値テスト手順に従い、`0`、`None`、空のコレクションなどの値は `False` と見なされ、ほとんどの他の値は `True` と見なされます。これは、条件文でプログラムの流れを制御するために不可欠です。

## 例

### 偽の値 (Falsy Values)

これらの値は `False` と見なされます。

```python
bool(False)
bool(None)
bool(0)
bool(0.0)
bool('')      # 空の文字列
bool([])      # 空のリスト
bool({})      # 空の辞書
bool(set())   # 空のセット
```

出力：

```plaintext
False
False
False
False
False
False
False
False
```

### 真の値 (Truthy Values)

その他のほとんどの値は `True` と見なされます。

```python
bool(True)
bool(1)
bool(-1)
bool('hello')
bool([1, 2])
bool({'a': 1})
```

出力：

```plaintext
True
True
True
True
True
True
```

## 関連リンク

- <router-link to="/cheatsheet/control-flow">チートシート：制御フロー</router-link>
- <router-link to="/blog/python-data-types">ブログ：Python データ型</router-link>
- <router-link to="/builtin/all">all()</router-link>
- <router-link to="/builtin/any">any()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/str">str()</router-link>
