---
title: 'Python 組み込み関数 isinstance() - Python チートシート'
description: 'オブジェクト引数がクラス情報引数のインスタンスである場合、またはその（直接的、間接的、仮想的な）サブクラスである場合に True を返します。オブジェクトが指定された型のインスタンスでない場合、関数は常に False を返します。classinfo が型オブジェクトのタプル（または再帰的に他のそのようなタプル）または複数の型の Union 型である場合、オブジェクトがいずれかの型のインスタンスであれば True を返します。classinfo が型または型のタプルやそのようなタプルでない場合、TypeError 例外が発生します。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python isinstance() ビルトイン関数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#isinstance">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
   object 引数が classinfo 引数のクラスのインスタンスである場合、またはその (直接的、間接的、または仮想的な) サブクラスである場合に True を返します。object が指定された型のオブジェクトでない場合、この関数は常に False を返します。classinfo が型オブジェクトのタプル (または再帰的に、他のそのようなタプル) または複数の型の Union Type である場合、object がそれらの型のいずれかのインスタンスであれば True を返します。classinfo が型または型のタプルおよびそのようなタプルでない場合、TypeError 例外が発生します。
  </base-disclaimer-content>
</base-disclaimer>

## 導入

`isinstance()` 関数は、オブジェクトが特定のクラスまたはそのサブクラスのインスタンスであるかどうかをチェックします。オブジェクトが指定された型であれば `True` を返し、そうでなければ `False` を返します。

型のタプルに対してチェックすることもできます。

### 例

**オブジェクトの型をチェックする：**

```python
my_list = [1, 2, 3]
print(isinstance(my_list, list))
print(isinstance(my_list, tuple))
```

出力：

```plaintext
True
False
```

**複数の型に対してチェックする：**

```python
print(isinstance("hello", (int, str, list)))
```

出力：

```plaintext
True
```

```python
isinstance(1, int)
isinstance(1, str)
```

出力：

```plaintext
True
False
```

## 関連リンク

- <router-link :to="'/builtin/issubclass'">`issubclass()`</router-link>
- <router-link :to="'/builtin/type'">`type()`</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP の基礎</router-link>
- <router-link :to="'/blog/python-data-types'">Python のデータ型</router-link>
- <router-link :to="'/builtin/callable'">`callable()`</router-link>
