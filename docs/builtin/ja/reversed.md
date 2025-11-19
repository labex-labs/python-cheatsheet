---
title: 'Python 組み込み関数 reversed() - Python チートシート'
description: '__reversed__() メソッドを持つオブジェクト、またはシーケンスプロトコル（__len__() メソッドと整数引数で 0 から始まる__getitem__() メソッド）をサポートするオブジェクトから、逆順イテレータを返します。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python reversed() ビルトイン関数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#reversed">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
   逆順イテレータを返します。seq は __reversed__() メソッドを持つオブジェクト、またはシーケンスプロトコル（__len__() メソッドと、0 から始まる整数引数による __getitem__() メソッド）をサポートするオブジェクトでなければなりません。
  </base-disclaimer-content>
</base-disclaimer>

## 導入

`reversed()` 関数は逆順イテレータを返します。これは、シーケンス（<router-link to="/builtin/list">リスト</router-link>、<router-link to="/builtin/tuple">タプル</router-link>、または <router-link to="/builtin/str">文字列</router-link>など）を逆順にループするために使用できることを意味します。元のシーケンスを変更するのではなく、末尾から先頭へ要素を生成する新しいイテレータを提供します。

### 例

逆順のリストを取得するには、イテレータをリストに変換できます。

```python
my_list = [1, 2, 3, 4, 5]
reversed_list = list(reversed(my_list))
print(reversed_list)
```

```output
[5, 4, 3, 2, 1]
```

`for` ループで直接イテレートすることもできます。

```python
for char in reversed("hello"):
    print(char)
```

```output
o
l
l
e
h
```

イテレータの動作を示す別の例を次に示します。

```python
i = reversed([1, 2, 3])
print(next(i))
print(next(i))
print(next(i))
```

```output
3
2
1
```

## 関連リンク

- <router-link to="/cheatsheet/control-flow">チートシート：制御フロー (for ループ)</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">チートシート：リストとタプル</router-link>
- <router-link to="/builtin/sorted">sorted()</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/next">next()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
