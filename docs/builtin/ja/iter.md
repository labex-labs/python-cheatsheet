---
title: 'Python 組み込み関数 iter() - Python チートシート'
description: 'イテレータオブジェクトを返します。第 1 引数の解釈は、第 2 引数の有無によって大きく異なります。第 2 引数がない場合、オブジェクトはイテラブルプロトコルをサポートするコレクションオブジェクトであるか、シーケンスプロトコルをサポートしている必要があります。どちらのプロトコルもサポートしていない場合は、TypeError が発生します。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 組み込み関数 iter()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#iter">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
   イテレータオブジェクトを返します。最初の引数は、2 番目の引数の有無によって解釈が大きく異なります。2 番目の引数がない場合、object はイテラブルプロトコルをサポートするコレクションオブジェクトであるか、シーケンスプロトコルをサポートしている必要があります。どちらのプロトコルもサポートしていない場合は、TypeError が送出されます。
  </base-disclaimer-content>
</base-disclaimer>

## 導入

`iter()` 関数はイテレータオブジェクトを返します。イテレータとは、反復処理（ループ）が可能なオブジェクトのことです。これは Python の `for` ループを支えるものです。

`iter()` を使用して、リスト、タプル、文字列などの任意のイテラブルオブジェクトからイテレータを取得できます。

### 例

**リストからイテレータを取得する：**

```python
my_list = [1, 2, 3]
my_iter = iter(my_list)

print(next(my_iter))
print(next(my_iter))
print(next(my_iter))
```

```output
1
2
3
```

```python
i = iter([1, 2, 3])
print(i)
print(i.__next__())
print(i.__next__())
print(i.__next__())
```

```output
<list_iterator object at 0x7f93158badc0>
1
2
3
```

## 関連リンク

- <router-link :to="'/builtin/next'">`next()`</router-link>
- <router-link :to="'/cheatsheet/control-flow'">制御フロー</router-link>
- <router-link :to="'/cheatsheet/lists-and-tuples'">リストとタプル</router-link>
- <router-link :to="'/builtin/enumerate'">`enumerate()`</router-link>
- <router-link :to="'/builtin/zip'">`zip()`</router-link>
- <router-link :to="'/builtin/map'">`map()`</router-link>
- <router-link :to="'/builtin/filter'">`filter()`</router-link>
