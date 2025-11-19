---
title: 'Python コピーモジュール - Python チートシート'
description: 'コピーモジュールは、リスト、オブジェクト、配列などの異なる要素のコピーに関連する一連の関数です。浅いコピーと深いコピーの両方を作成するために使用できます。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Copy モジュール
</base-title>

Copy モジュールは、リスト、オブジェクト、配列などのさまざまな要素のコピーに関連する関数のセットです。浅いコピーと深いコピーの両方を作成するために使用できます。

<base-disclaimer>
  <base-disclaimer-title>
    Python 3 の <a target="_blank" href="https://docs.python.org/3/library/copy.html">ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
    Python の代入文はオブジェクトをコピーせず、ターゲットとオブジェクトの間にバインディングを作成します。ミュータブルなコレクション、またはミュータブルなアイテムを含むコレクションの場合、一方のコピーを変更しても他方に影響を与えないように、コピーが必要になることがあります。このモジュールは、一般的な<b>浅い</b>コピー操作と<b>深い</b>コピー操作を提供します。
  </base-disclaimer-content>
</base-disclaimer>

## 浅いコピー操作 (Shallow copy operations)

浅いコピーは、新しい複合オブジェクトを構築し、次に（可能な限り）元のオブジェクトで見つかったオブジェクトへの参照をその中に挿入します。

copy.copy(x)
x の浅いコピーを返します。

```python
import copy
a = [[1],[2],[3]]
# 浅いコピーを作成 (ネストされたリストはまだ参照されている)
b = copy.copy(a)

a
```

```output
[[1], [2], [3]]
```

```python
b
```

```output
[[1], [2], [3]]
```

### copy モジュールをインポートしない場合、使用できません

```output
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'copy' is not defined
```

## 深いコピー操作 (Deep copy operations)

深いコピーは、新しい複合オブジェクトを構築し、次に、元のオブジェクトで見つかったオブジェクトのコピーを再帰的に挿入します。

copy.deepcopy(x[, memo])
x の深いコピーを返します。

```python
import copy
a = [[1],[2],[3]]
# 深いコピーを作成 (完全に独立したコピー)
b = copy.deepcopy(a)

# オリジナルを変更
a[0][0] = 0
a[1] = None

a
```

```output
[[0], None, [3]]
```

```python
b
```

```output
[[1], [2], [3]]
```

## 関連リンク (Relevant links)

- <router-link to="/cheatsheet/oop-basics">Cheatsheet: OOP の基本</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: リストとタプル</router-link>
- <router-link to="/cheatsheet/dictionaries">Cheatsheet: 辞書</router-link>
- <router-link to="/blog/python-data-types">Blog: Python のデータ型</router-link>
- <router-link to="/builtin/object">object()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/slice">slice()</router-link>
