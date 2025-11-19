---
title: 'Python 組み込み関数 hasattr() - Python チートシート'
description: '引数はオブジェクトと文字列です。文字列がオブジェクトの属性名であれば True、そうでなければ False を返します。（これは getattr(object, name) を呼び出し、AttributeError が発生するかどうかを確認することで実装されます。）'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python hasattr() ビルトイン関数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#hasattr">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
   引数はオブジェクトと文字列です。結果は、文字列がオブジェクトの属性の 1 つである場合は True、そうでない場合は False になります。（これは、<router-link to="/builtin/getattr">getattr(object, name)</router-link> を呼び出し、AttributeError が発生するかどうかを確認することによって実装されます。）
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

`hasattr()` 関数は、オブジェクトが指定された属性を持っているかどうかをチェックします。引数としてオブジェクトと属性名（文字列として）を取り、属性が存在する場合は `True` を返し、そうでない場合は `False` を返します。

### Example

```python
class Person:
    name = "John"
    age = 30

p = Person()

print(hasattr(p, 'name'))
print(hasattr(p, 'age'))
print(hasattr(p, 'email'))
```

```output
True
True
False
```

## Relevant links

- <router-link :to="'/builtin/getattr'">`getattr()`</router-link>
- <router-link :to="'/builtin/setattr'">`setattr()`</router-link>
- <router-link :to="'/builtin/delattr'">`delattr()`</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP Basics</router-link>
- <router-link :to="'/builtin/dir'">`dir()`</router-link>
