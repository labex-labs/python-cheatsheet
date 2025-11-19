---
title: 'Python delattr() 組み込み関数 - Python チートシート'
description: "setattr() の関連関数です。引数はオブジェクトと文字列です。文字列はオブジェクトの属性名のいずれかでなければなりません。オブジェクトが許可する場合、この関数は指定された属性を削除します。例えば、delattr(x, 'foobar') は del x.foobar と同等です。"
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python delattr() ビルトイン関数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#delattr">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
   これは `setattr()` の仲間です。引数はオブジェクトと文字列です。文字列はオブジェクトの属性のいずれかの名前でなければなりません。この関数は、オブジェクトが許可する場合、指定された属性を削除します。例えば、`delattr(x, 'foobar')` は `del x.foobar` と同等です。
  </base-disclaimer-content>
</base-disclaimer>

## 導入

Python の `delattr()` 関数は、オブジェクトから属性を削除するために使用されます。これは `setattr()` および <router-link to="/builtin/getattr">`getattr()`</router-link> の対応する関数です。

## 構文

```python
delattr(object, name)
```

- **object**: 属性を削除する対象のオブジェクト。
- **name**: 削除する属性の名前。文字列として指定します。

## 例

### オブジェクトから属性を削除する

```python
class Person:
    name = "John"
    age = 30

person = Person()
print(person.__dict__)
delattr(person, "age")
print(person.__dict__)
```

```output
{'name': 'John', 'age': 30}
{'name': 'John'}
```

### 存在しない属性を削除する

```python
class Person:
    name = "John"

person = Person()
try:
    delattr(person, "age")
except AttributeError as e:
    print(f"Error: {e}")
```

```output
Error: age
```

## 関連リンク

- <router-link :to="'/builtin/setattr'">`setattr()`</router-link>
- <router-link :to="'/builtin/getattr'">`getattr()`</router-link>
- <router-link :to="'/builtin/hasattr'">`hasattr()`</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP の基礎</router-link>
