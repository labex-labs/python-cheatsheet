---
title: 'Python 組み込み関数 setattr() - Python チートシート'
description: "これは getattr() の対となる関数です。引数はオブジェクト、文字列、任意の値を指定します。文字列は既存の属性名または新しい属性名を指定でき、オブジェクトが許可する場合、その属性に値を代入します。例：setattr(x, 'foobar', 123) は x.foobar = 123 と同等です。"
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python の組み込み関数 `setattr()`
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#setattr">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
   これは<router-link to="/builtin/getattr">getattr()</router-link>の対になる関数です。引数は、オブジェクト、文字列、および任意の値を指定します。文字列には既存の属性名または新しい属性名を指定できます。オブジェクトが許可する場合、関数はその属性に値を割り当てます。例えば、`setattr(x, 'foobar', 123)` は `x.foobar = 123` と同等です。
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

`setattr()` 関数は、オブジェクトの属性の値を設定するために使用できる Python の組み込み関数です。この関数は、オブジェクト、属性の名前（文字列として）、およびその属性に割り当てたい値の 3 つの引数を取ります。

これは、属性名が実行時に動的に決定される場合に特に役立ちます。属性名を事前に知っている必要があるドット表記 (`object.attribute = value`) の代わりに、`setattr()` を使用すると変数で属性名を指定できます。

### Examples

`setattr()` を使用して属性を追加または変更する方法を以下に示します。

```python
class Person:
    name = "John"

p = Person()

# 'age' 属性を 30 に設定
setattr(p, 'age', 30)

print(p.age)

# 'name' 属性を変更
setattr(p, 'name', 'Jane')
print(p.name)
```

Output:

```plaintext
30
Jane
```

## Relevant links

- <router-link to="/cheatsheet/oop-basics">Cheatsheet: OOP Basics</router-link>
- <router-link to="/builtin/object">object()</router-link>
- <router-link to="/builtin/dir">dir()</router-link>
- <router-link to="/builtin/getattr">getattr()</router-link>
- <router-link to="/builtin/hasattr">hasattr()</router-link>
- <router-link to="/builtin/delattr">delattr()</router-link>
