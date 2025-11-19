---
title: 'Python dict() 組み込み関数 - Python チートシート'
description: '新しい辞書を作成します。dict オブジェクトは辞書クラスです。このクラスに関するドキュメントについては、dict および Mapping Types — dict を参照してください。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python dict() 組み込み関数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/stdtypes.html#dict">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
    新しい辞書を作成します。`dict` オブジェクトは辞書クラスです。
  </base-disclaimer-content>
</base-disclaimer>

Python の `dict()` コンストラクタは、辞書を作成するための多用途な方法です。

空の辞書を作成したり、キーワード引数から、またはキーと値のペアの<router-link to="/builtin/iter">イテラブル</router-link>から辞書を作成したりできます。

## 例

**空の辞書の作成：**

```python
my_dict = dict()
print(my_dict)
```

```output
{}
```

**キーワード引数を使用した辞書の作成：**

```python
# キーワード引数を使用
my_dict = dict(name="John", age=30)
print(my_dict)
```

```output
{'name': 'John', 'age': 30}
```

**イテラブルから辞書を作成：**

```python
my_list = [('name', 'Jane'), ('age', 25)]
my_dict = dict(my_list)
print(my_dict)
```

```output
{'name': 'Jane', 'age': 25}
```

空の辞書の作成：

```python
a = dict()
type(a)
```

```output
<class 'dict'>
```

## 関連リンク

- <router-link :to="'/builtin/iter'">`iter()`</router-link>
- <router-link :to="'/cheatsheet/dictionaries'">辞書 (Dictionaries)</router-link>
- <router-link :to="'/blog/python-data-types'">Python データ型</router-link>
- <router-link :to="'/builtin/len'">`len()`</router-link>
- <router-link :to="'/builtin/list'">`list()`</router-link>
- <router-link :to="'/builtin/tuple'">`tuple()`</router-link>
