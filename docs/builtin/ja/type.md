---
title: 'Python 組み込み関数 type() - Python チートシート'
description: '引数が 1 つの場合、オブジェクトの型を返します。戻り値は型オブジェクトであり、通常 object.__class__ によって返されるものと同じオブジェクトです。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python の組み込み関数 type()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#type">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
    引数が 1 つの場合、オブジェクトの型を返します。戻り値は型オブジェクトであり、通常は object.__class__ によって返されるものと同じオブジェクトです。
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Python の `type()` 関数は、オブジェクトの型を返す組み込み関数です。これは、Python で扱っているデータ型を理解するための基本的なツールです。

## Examples

```python
type('span')
type(99)
type(1.1)
type([1, 2])
type((1, 2))
type({1, 2})
type({'a': 1, 'b': 2})
```

```output
<class 'str'>
<class 'int'>
<class 'float'>
<class 'list'>
<class 'tuple'>
<class 'set'>
<class 'dict'>
```

## Relevant links

- <router-link to="/blog/python-data-types/">Python Data Types</router-link>
- <router-link to="/builtin/isinstance/">isinstance()</router-link>
- <router-link to="/builtin/issubclass/">issubclass()</router-link>
- <router-link to="/builtin/str/">str()</router-link>
- <router-link to="/builtin/int/">int()</router-link>
- <router-link to="/builtin/float/">float()</router-link>
- <router-link to="/builtin/list/">list()</router-link>
- <router-link to="/builtin/tuple/">tuple()</router-link>
- <router-link to="/builtin/dict/">dict()</router-link>
- <router-link to="/builtin/set/">set()</router-link>
