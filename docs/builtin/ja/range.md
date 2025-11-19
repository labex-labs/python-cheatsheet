---
title: 'Python 組み込み関数 range() - Python チートシート'
description: 'range() は関数ではなく、実際にはイミュータブルなシーケンス型です。これは「Ranges and Sequence Types — list, tuple, range」で文書化されています。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python range() ビルトイン関数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#range">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
   range は関数ではなく、実際にはイミュータブルなシーケンス型であり、Ranges and Sequence Types — list, tuple, range で文書化されています。
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

`range` 型は、通常 `for` ループで特定の回数だけループするために使用されます。`range` は `start`、`stop`、`step` の 3 つのパラメーターを受け取ります。各パラメーターは整数である必要があります（ビルトインの <router-link to="/builtin/int">int</router-link> または **index**() 特殊メソッドを実装する任意のオブジェクト）。

パラメーターが 1 つしかない場合、それは `stop` パラメーターを表します。`step` パラメーターが省略された場合、デフォルトは `1` になります。`start` パラメーターが省略された場合、デフォルトは `0` になります。

range は負のインデックスをサポートしますが、これらは正のインデックスによって決定されるシーケンスの末尾からのインデックス指定として解釈されます。

**_range 型が通常の <router-link to="/builtin/list">list</router-link> や <router-link to="/builtin/tuple">tuple</router-link> よりも優れている点は、range が表すサイズに関係なく、range オブジェクトは常に同じ（小さい）量のメモリしか消費しないことです_**

## Input Parameters

range は、連結と繰り返しを除くすべての一般的なシーケンス操作を実装します（range オブジェクトは厳密なパターンに従うシーケンスのみを表すことができ、繰り返しと連結はそのパターンを通常違反するため）。

`start`:

- start パラメーターの値
- 指定されない場合、パラメーターは 0 にデフォルト設定されます
- パラメーター値は**包括的**です

`stop`

- stop パラメーターの値
- 必須の唯一のパラメーターです
- パラメーター値は**排他的**です

`step`

- step パラメーターの値
- 指定されない場合、パラメーターは 1 にデフォルト設定されます

## Examples

`stop` パラメーターのみを指定した range

```python
for i in range(5):
    print(i)
```

```output
0
1
2
3
4
```

`start` パラメーターと `stop` パラメーターの両方を指定した range

```python
for i in range(1, 8):
    print(i)
```

```output
1
2
3
4
5
6
7
```

すべてのパラメーターを指定した range

```python
for i in range(0, 30, 5):
    print(i)
```

```output
0
5
10
15
20
25
```

すべてのパラメーターを指定したが、`stop` パラメーターが `step` パラメーターで割り切れない range

```python
for i in range(0, 10, 3):
    print(i)
```

```output
0
3
6
9
```

すべてのパラメーターを指定し、`stop` パラメーターと `step` パラメーターが負である range

```python
for i in range(0, -6, -1):
    print(i)
```

```output
0
-1
-2
-3
-4
-5
```

`stop` パラメーターが 0 に設定されている 2 つの例

```python
for i in range(0):
    print(i)
```

```output
(no output)
```

```python
for i in range(1, 0):
    print(i)
```

```output
(no output)
```

## Relevant links

- <router-link to="/cheatsheet/control-flow">Cheatsheet: 制御フロー (for ループ)</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: リストとタプル</router-link>
- <router-link to="/modules/itertools-module">モジュール：itertools</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/reversed">reversed()</router-link>
- <router-link to="/builtin/enumerate">enumerate()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/int">int()</router-link>
