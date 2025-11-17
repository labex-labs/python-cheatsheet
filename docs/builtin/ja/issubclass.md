---
title: 'Python 組み込み関数 issubclass() - Python チートシート'
description: 'クラスが classinfo のサブクラス（直接的、間接的、仮想的）である場合に True を返します。クラスはそれ自体のサブクラスと見なされます。classinfo はクラスオブジェクトのタプル（または再帰的に他のそのようなタプル）または Union 型の場合があり、その場合は class が classinfo のいずれかのエントリのサブクラスであれば True を返します。それ以外の場合は TypeError 例外が発生します。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 組み込み関数 issubclass()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#issubclass">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
   class が classinfo のサブクラス（直接的、間接的、または仮想的）である場合に True を返します。クラスはそれ自体のサブクラスと見なされます。classinfo はクラスオブジェクトのタプル（または再帰的に他のそのようなタプル）または Union Type にすることができ、その場合、class が classinfo のいずれかのエントリのサブクラスであれば True を返します。それ以外の場合は、TypeError 例外が発生します。
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Python の `issubclass()` 関数は、指定されたクラスが別のクラスまたはクラスのタプルのサブクラスであるかどうかをチェックする組み込み関数です。最初の引数が 2 番目の引数のサブクラスである場合に `True` を返し、そうでない場合は `False` を返します。この関数はオブジェクト指向プログラミングにおいて、クラス間の関係を確認し、継承に基づいてポリモーフィックな動作を実装するのに役立ちます。

## Examples

```python
class First:
    pass

class Second(First):
    pass

print(issubclass(Second, First))
print(issubclass(First, Second))
```

Output:

```plaintext
True
False
```

## Relevant links

- <router-link :to="'/builtin/isinstance'">`isinstance()`</router-link>
- <router-link :to="'/builtin/type'">`type()`</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP Basics</router-link>
- <router-link :to="'/builtin/object'">`object()`</router-link>
