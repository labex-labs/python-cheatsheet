---
title: 'Python 組み込み関数 slice() - Python チートシート'
description: 'range(start, stop, step) で指定されたインデックスのセットを表すスライスオブジェクトを返します。start と step 引数はデフォルトで None になります。スライスオブジェクトは、引数の値（またはそのデフォルト値）を返す読み取り専用のデータ属性 start、stop、step を持ちます。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python slice() 組み込み関数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#slice">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
   range(start, stop, step) によって指定されたインデックスのセットを表す slice オブジェクトを返します。start および step 引数は None でデフォルトされます。Slice オブジェクトは、引数の値（またはそのデフォルト値）を単に返す、読み取り専用のデータ属性 start、stop、および step を持ちます。
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Python の `slice()` 関数は、リスト、タプル、または文字列などのシーケンスをスライスするために使用できるスライスオブジェクトを返します。スライスオブジェクトは、`start`、`stop`、および `step` によって指定されたインデックスのセットを表します。

## Examples

```python
furniture = ['table', 'chair', 'rack', 'shelf']

print(furniture[0:4])
print(furniture[1:3])
print(furniture[0:-1])
print(furniture[:2])
print(furniture[1:])
print(furniture[:])
```

Output:

```plaintext
['table', 'chair', 'rack', 'shelf']
['chair', 'rack']
['table', 'chair', 'rack']
['table', 'chair']
['chair', 'rack', 'shelf']
['table', 'chair', 'rack', 'shelf']
```

リスト全体をスライスすると、コピーが実行されます。

```python
spam = ['cat', 'bat', 'rat', 'elephant']
spam2 = spam[:]
print(spam2)

spam.append('dog')
print(spam)
print(spam2)
```

Output:

```plaintext
['cat', 'bat', 'rat', 'elephant']
['cat', 'bat', 'rat', 'elephant', 'dog']
['cat', 'bat', 'rat', 'elephant']
```

## Relevant links

- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: リストとタプル</router-link>
- <router-link to="/cheatsheet/manipulating-strings">Cheatsheet: 文字列の操作</router-link>
- <router-link to="/cheatsheet/comprehensions">Cheatsheet: 内包表記</router-link>
- <router-link to="/modules/itertools-module">Module: itertools (islice)</router-link>
- <router-link to="/builtin/range">range()</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/reversed">reversed()</router-link>
- <router-link to="/builtin/sorted">sorted()</router-link>
- <router-link to="/builtin/enumerate">enumerate()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
- <router-link to="/builtin/map">map()</router-link>
- <router-link to="/builtin/filter">filter()</router-link>
