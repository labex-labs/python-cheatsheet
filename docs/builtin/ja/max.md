---
title: 'Python 組み込み関数 max() - Python チートシート'
description: 'イテラブル内の最大項目、または 2 つ以上の引数の中で最大のものを返します。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python max() 組み込み関数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#max">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   イテラブル内の最大の項目、または 2 つ以上の引数の中で最大のものを返します。
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

`max()` 関数は 2 通りの方法で使用できます。

1. イテラブル（<router-link to="/builtin/list">リスト</router-link>や<router-link to="/builtin/tuple">タプル</router-link>など）と共に使用する場合、最大の項目を返します。
2. 2 つ以上の引数と共に使用する場合、それらの中で最大のものを返します。

### Examples

**イテラブル内の最大値を見つける：**

```python
numbers = [1, 2, 10, 40, 5]
print(max(numbers))

letters = ('a', 'b', 'z')
print(max(letters))
```

```output
40
z
```

**複数の引数の中から最大値を見つける：**

```python
print(max(10, 20, 5))
```

```output
20
```

## Relevant links

- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: Lists and Tuples</router-link>
- <router-link to="/builtin/min">min()</router-link>
- <router-link to="/builtin/sorted">sorted()</router-link>
- <router-link to="/builtin/sum">sum()</router-link>
