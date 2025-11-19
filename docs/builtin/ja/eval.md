---
title: 'Python 組み込み関数 eval() - Python チートシート'
description: '引数は文字列とオプションの globals、locals です。指定する場合、globals は辞書である必要があります。指定する場合、locals はいかなるマッピングオブジェクトでも構いません。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python eval() 内蔵関数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#eval">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
   引数は、文字列とオプションの globals および locals です。指定された場合、globals は辞書である必要があります。指定された場合、locals は任意のマッピングオブジェクトにすることができます。
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Python の `eval()` 関数は、文字列を Python の式として解析し、評価する内蔵関数です。文字列から任意の Python コードを実行するために使用でき、これは強力であると同時に危険性も伴います。動的に生成された式を評価する必要がある場合によく使用されますが、潜在的なセキュリティ脆弱性のため、注意して使用する必要があります。

## Examples

```python
eval('1 + 4')
```

```output
5
```

```python
eval('print("Hello World!")')
```

```output
Hello World!
```

```python
x = 10
eval('x == 10')
```

```output
True
```

`eval()` 関数は、<router-link to="/builtin/print">print()</router-link> 関数と組み合わせて、コンソールに出力を表示するためにも使用できます。

## Relevant links

- <router-link :to="'/builtin/compile'">`compile()`</router-link>
- <router-link :to="'/builtin/exec'">`exec()`</router-link>
- <router-link :to="'/builtin/globals'">`globals()`</router-link>
- <router-link :to="'/builtin/locals'">`locals()`</router-link>
- <router-link :to="'/cheatsheet/debugging'">Debugging</router-link>
