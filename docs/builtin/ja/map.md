---
title: 'Python 組み込み関数 map() - Python チートシート'
description: 'イテラブルの全要素に関数を適用し、結果を生成するイテレータを返します。追加のイテラブル引数が渡された場合、関数は引数の数だけ引数をとり、すべてのイテラブルから並行して要素が適用されます。複数のイテラブルがある場合、最も短いイテラブルが尽きた時点でイテレータは停止します。関数の入力がすでに引数タプルとして配置されている場合にも使用できます。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 組み込み関数 map()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#map">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
   関数をイテラブルのすべての項目に適用し、結果を生成するイテレータを返します。追加のイテラブル引数が渡された場合、関数はその数の引数を取る必要があり、すべてのイテラブルからの項目に並行して適用されます。複数のイテラブルがある場合、イテレータは最短のイテラブルが尽きた時点で停止します。関数の入力がすでに引数の<router-link to="/builtin/tuple">タプル</router-link>として整理されている場合のケース。
  </base-disclaimer-content>
</base-disclaimer>

## 導入

`map`関数、_map(function, iterable)_ は、1 つ以上のイテラブルと、「コールバック関数」（多くの場合ラムダ式）を受け取り、「Map オブジェクト」を返します。マップオブジェクトには、マップ関数がコールバックを各イテラブル引数の要素に適用した結果が含まれます。マップは、提供されたイテラブルオブジェクトを同時に反復処理します。つまり、マップ関数の各ステップ「i」で、各イテラブルのインデックス「i」の要素がその時点でマップ関数で利用可能になります。マッピングが完了したら、結果のマップオブジェクトを<router-link to="/builtin/list">リスト</router-link>、<router-link to="/builtin/tuple">タプル</router-link>、または作業により便利な別の形式のオブジェクトにキャストしたくなるでしょう。

\*\*\*重要な注意点：Python 3 のリリース以降、map に供給されたイテラブルの長さが異なる場合、マップは最短のイテラブルの長さに対応するステップ数に達した時点で停止し、返されます。

## 入力パラメータ

Function: マップの現在のステップに対応するインデックスにある項目（複数可）を受け取り、返された結果をマップオブジェクトに格納する項目として与えます。マップオブジェクトに格納される要素の型は、関数から返される型と同一になります。

Iterable(s): `<router-link to="/builtin/tuple">タプル</router-link>`、`<router-link to="/builtin/list">リスト</router-link>`、`<router-link to="/builtin/range">range</router-link>`、`<router-link to="/builtin/dict">辞書</router-link>`、`<router-link to="/builtin/set">セット</router-link>`、`<router-link to="/builtin/str">文字列</router-link>`。

## 非常に簡単な例

```python
def double_map(func, iter):
    my_map = map(func, iter)
    return list(my_map)

def double(element):
    return element * 2

nums = [1, 2, 3, 4]

print(double_map(double, nums))
```

```output
[2, 4, 6, 8]
```

## 少し複雑な例

### この例では、ラムダ式として記述されたコールバック関数を使用しています

```python
def multi_map(func, *iters):
    my_map = map(func, *iters)
    return list(my_map)

list1 = [1, 2, 3]
list2 = [4, 5, 6]

print(multi_map((lambda item1, item2: item1 * item2), list1, list2))
```

```output
[4, 10, 18]
```

## map が異なるイテラブル長を処理する方法を示す例

```python
def max(a, b):
    if a > b:
        return a
    else:
        return b

list1 = [1, 1, 1]
list2 = [0, 0, 0, 1, 1, 1, 1, 1, 1, 1]

result = list(map(max, list1, list2))

print(result)
```

```output
[1, 1, 1]
```

結果のリストの長さが list1 の長さに等しいことに注目してください。

## 関連リンク

- <router-link to="/cheatsheet/functions">チートシート：関数（ラムダを含む）</router-link>
- <router-link to="/cheatsheet/comprehensions">チートシート：内包表記</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">ブログ：Python 内包表記 ステップバイステップ</router-link>
- <router-link to="/modules/itertools-module">モジュール：itertools</router-link>
- <router-link to="/builtin/filter">filter()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
