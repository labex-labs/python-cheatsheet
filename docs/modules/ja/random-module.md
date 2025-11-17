---
title: 'Python ランダムモジュール - Python チートシート'
description: 'random モジュールは、ランダムな要素を生成できる Python の組み込みモジュールです。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Random モジュール
</base-title>

[random](https://docs.python.org/3/library/random.html)モジュールは、ランダムな要素を生成できるようにする組み込みモジュールです。

```python
import random
```

## seed()

`seed`メソッドは、乱数ジェネレータを初期化するために使用されます。

```python
# 再現性のある乱数を設定
random.seed(1)
random.random()
```

出力：

```plaintext
0.13436424411240122
```

シードを数値に設定すると、常に同じ乱数が返されます。

```python
random.seed(1)
random.random()
```

出力：

```plaintext
0.13436424411240122
```

```python
random.seed(1)
random.random()
```

出力：

```plaintext
0.13436424411240122
```

```python
random.seed(1)
random.random()
```

出力：

```plaintext
0.13436424411240122
```

```python
random.seed(1)
random.random()
```

出力：

```plaintext
0.13436424411240122
```

```python
random.seed(1)
random.random()
```

出力：

```plaintext
0.13436424411240122
```

`seed`メソッドのデフォルト値は*現在のシステム時刻*であるため、常に異なる数値が生成されます。

```python
# シードを設定せずに乱数を生成（システム時刻を使用）
random.random()
```

出力：

```plaintext
0.8474337369372327
```

```python
random.random()
```

出力：

```plaintext
0.763774618976614
```

```python
random.random()
```

出力：

```plaintext
0.2550690257394217
```

## randint()

```python
random.randint(start: int, stop: int)
```

このメソッドは、指定された開始パラメータと停止パラメータの間の乱数を返します。

```python
random.randint(1, 5)
```

出力：

```plaintext
3
```

```python
random.randint(1, 5)
```

出力：

```plaintext
2
```

```python
random.randint(1, 5)
```

出力：

```plaintext
5
```

```python
random.randint(1, 5)
```

出力：

```plaintext
1
```

```python
random.randint(1, 5)
```

出力：

```plaintext
3
```

```python
random.randint(1, 5)
```

出力：

```plaintext
1
```

## choice()

`choice`メソッドは、`list`、`set`、`str`などのイテラブルからランダムに選択された要素を返します。

```python
random.choice([1, 2, 3, 4])
```

出力：

```plaintext
1
```

```python
random.choice([1, 2, 3, 4])
```

出力：

```plaintext
2
```

```python
random.choice([1, 2, 3, 4])
```

出力：

```plaintext
4
```

```python
random.choice([1, 2, 3, 4])
```

出力：

```plaintext
4
```

## shuffle()

`shuffle`メソッドは、イテラブルを受け取り、それをシャッフルします。

```python
my_list = [1, 2, 3, 4]

# リストをインプレースでシャッフル
random.shuffle(my_list)
my_list
```

出力：

```plaintext
[1, 4, 3, 2]
```

```python
random.shuffle(my_list)
my_list
```

出力：

```plaintext
[2, 4, 3, 1]
```

```python
random.shuffle(my_list)
my_list
```

出力：

```plaintext
[4, 2, 3, 1]
```

## sample()

```python
random.sample(iterable, k: int)
```

`sample`は、イテラブルからランダムに選択された要素を含むリストを返します。返される要素の数は`k`パラメータと等しくなります。

```python
# リストから k 個の要素をランダムにサンプリング
random.sample([1, 2, 3, 4], 1)
```

出力：

```plaintext
[3]
```

```python
random.sample([1, 2, 3, 4], 2)
```

出力：

```plaintext
[3, 4]
```

```python
random.sample([1, 2, 3, 4], 3)
```

出力：

```plaintext
[4, 3, 2]
```

```python
random.sample([1, 2, 3, 4], 4)
```

出力：

```plaintext
[1, 2, 4, 3]
```

## random()

`random`メソッドは、0.0 から 1.0 の間の乱数の浮動小数点数を返します。

```python
random.random()
```

出力：

```plaintext
0.4143139993007743
```

```python
random.random()
```

出力：

```plaintext
0.17300740157905092
```

```python
random.random()
```

出力：

```plaintext
0.548798761388153
```

```python
random.random()
```

出力：

```plaintext
0.7030407620656315
```

## uniform()

`uniform`メソッドは`randint`に似ていますが、浮動小数点数を返します。

```python
random.uniform(1, 5)
```

出力：

```plaintext
3.697943322009309
```

```python
random.uniform(1, 5)
```

出力：

```plaintext
2.498812082006561
```

```python
random.uniform(1, 5)
```

出力：

```plaintext
2.7558465201782525
```

```python
random.uniform(1, 5)
```

出力：

```plaintext
3.0337059529999273
```

## 関連リンク

- <router-link to="/cheatsheet/lists-and-tuples">チートシート：リストとタプル</router-link>
- <router-link to="/blog/python-data-types">ブログ：Python データ型</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/float">float()</router-link>
