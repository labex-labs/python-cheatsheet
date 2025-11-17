---
title: 'Python 組み込み関数 zip() - Python チートシート'
description: '複数のイテラブルを並行して反復処理し、それぞれから要素を含むタプルを生成します。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python zip() ビルトイン関数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#zip">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
    複数のイテラブルを並行して反復処理し、それぞれのイテラブルから要素を取り出してタプルを生成します。
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Python の `zip()` 関数はビルトイン関数であり、2 つ以上のイテラブル（リスト、タプル、文字列など）を受け取り、それらを単一のタプルのイテレータに集約します。各タプルには、入力されたすべてのイテラブルの同じ位置の要素が含まれます。

## Examples

```python
furniture = ['table', 'chair', 'rack', 'shelf']
price = [100, 50, 80, 40]

for item, amount in zip(furniture, price):
    print(f'The {item} costs ${amount}')
```

Output:

```plaintext
The table costs $100
The chair costs $50
The rack costs $80
The shelf costs $40
```

## Other Use Cases

Python の zip 関数は、複数のイテラブルをタプルに結合します。

```python
# 3 つのリストを結合
list1 = [1, 2, 3]
list2 = ['a', 'b', 'c']
list3 = [True, False, True]

zipped = zip(list1, list2, list3)
print(list(zipped))
```

Output:

```plaintext
[(1, 'a', True), (2, 'b', False), (3, 'c', True)]
```

### Unzipping (アンジップ)

```python
# zip されたオブジェクトのアンジップ
zipped = [(1, 'a'), (2, 'b'), (3, 'c')]
list1, list2 = zip(*zipped)
print(list1)
print(list2)
```

Output:

```plaintext
(1, 2, 3)
('a', 'b', 'c')
```

## More Examples

### 長さが異なるイテラブルとの zip

zip は、最も短いイテラブルが尽きた時点でタプルの生成を停止します。

```python
numbers = [1, 2, 3]
letters = ['a', 'b']

for num, letter in zip(numbers, letters):
    print(f'{num} -> {letter}')
```

Output:

```plaintext
1 -> a
2 -> b
```

### zip と辞書の使用

zip を使用して、2 つのリストからキーと値を結合し、辞書を作成できます。

```python
keys = ['name', 'age', 'city']
values = ['Alice', 25, 'New York']

my_dict = dict(zip(keys, values))
print(my_dict)
```

Output:

```plaintext
{'name': 'Alice', 'age': 25, 'city': 'New York'}
```

### zip とリスト内包表記の使用

リスト内包表記で zip を使用すると、より簡潔なコードになります。

```python
list1 = [1, 2, 3]
list2 = [4, 5, 6]

summed = [x + y for x, y in zip(list1, list2)]
print(summed)
```

Output:

```plaintext
[5, 7, 9]
```

## Relevant links

- <router-link to="/cheatsheet/lists-and-tuples/">リストとタプル</router-link>
- <router-link to="/cheatsheet/comprehensions/">内包表記</router-link>
- <router-link to="/builtin/slice/">slice()</router-link>
- <router-link to="/builtin/sorted/">sorted()</router-link>
- <router-link to="/builtin/sum/">sum()</router-link>
- <router-link to="/builtin/map/">map()</router-link>
- <router-link to="/builtin/filter/">filter()</router-link>
- <router-link to="/builtin/enumerate/">enumerate()</router-link>
- <router-link to="/modules/itertools-module/">Itertools モジュール</router-link>
