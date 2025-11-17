---
title: 'Python 組み込み関数 getattr() - Python チートシート'
description: 'オブジェクトの指定された名前の属性の値を返します。name は文字列である必要があります。文字列がオブジェクトの属性名である場合、結果はその属性の値になります。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python getattr() ビルトイン関数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#getattr">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
   オブジェクトの指定された名前の属性の値を返します。name は文字列でなければなりません。文字列がオブジェクトの属性の 1 つの名前である場合、結果はその属性の値になります。
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Python の `getattr()` 関数は、文字列として提供された名前によってオブジェクトの属性にアクセスできるようにするビルトイン関数です。これは動的プログラミングにとって強力な機能であり、属性名が実行時まで不明な場合にその属性を取得できるようにします。また、属性が存在しない場合に返されるデフォルト値を指定することもでき、エラーを回避するのに役立ちます。

## Syntax

```python
getattr(object, name)
```

または

```python
getattr(object, name, default)
```

-`object`: 属性にアクセスしたいオブジェクト。

-`name`: 取得したい属性の名前。

-`default`: (オプション) 属性が見つからなかった場合に返される値。指定しない場合、`None` が返されます。

## Example

```python
class Example:
    attribute = "Hello, World!"

# クラスのインスタンスを作成
obj = Example()

# getattr を使用して属性にアクセス
value = getattr(obj, 'attribute', 'Nothing found')

print(value)
```

Output:

```plaintext
Hello, World!
```

Note: 'attribute' が存在しない場合、'Nothing found' が出力されます。

## Relevant links

- <router-link :to="'/builtin/hasattr'">`hasattr()`</router-link>
- <router-link :to="'/builtin/delattr'">`delattr()`</router-link>
- <router-link :to="'/builtin/setattr'">`setattr()`</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP Basics</router-link>
- <router-link :to="'/builtin/dir'">`dir()`</router-link>
