---
title: 'Python データクラス - Python チートシート'
description: 'データクラスは Python クラスですが、データオブジェクトの格納に適しています。このモジュールは、ユーザー定義クラスに__init__() や__repr__() などの特殊メソッドを自動的に追加するためのデコレータと関数を提供します。'
labUrl: 'https://labex.io/ja/labs/python-python-dataclasses-633652?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Dataclasses
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

`Dataclasses` は Python のクラスですが、データオブジェクトを格納するのに適しています。
このモジュールは、ユーザー定義クラスに `__init__()` や `__repr__()` などの生成された特殊メソッドを自動的に追加するためのデコレータと関数を提供します。

## 特徴 (Features)

1. データオブジェクトを格納し、特定のデータ型を表します。例：数値。ORM に慣れている人にとって、モデルインスタンスはデータオブジェクトです。それは特定の種類のエンティティを表します。エンティティを定義または表す属性を保持します。

2. 同一タイプの他のオブジェクトと比較できます。例：数値は他の数値よりも大きい、小さい、または等しい場合があります。

Python 3.7 は、クラスを dataclass に変換するために使用される `dataclass` デコレータを提供します。

```python
class Number:
    def __init__(self, val):
        self.val = val

obj = Number(2)
obj.val
```

```output
2
```

dataclass を使用した場合

```python
# Dataclass: __init__ および __repr__ メソッドを自動生成
from dataclasses import dataclass

@dataclass  # デコレータがクラスを dataclass に変換
class Number:
    val: int  # 型アノテーションが必要

obj = Number(2)  # __init__ が自動的に作成される
obj.val
```

```output
2
```

## デフォルト値 (Default values)

データクラスのフィールドにデフォルト値を追加するのは簡単です。

```python
# デフォルト値を持つ Dataclass: デフォルト値を持つフィールドは必須フィールドの後に来る必要があります
@dataclass
class Product:
    name: str        # 必須フィールド
    count: int = 0   # デフォルト値を持つオプションフィールド
    price: float = 0.0  # デフォルト値を持つオプションフィールド

obj = Product("Python")  # name のみ必須、他はデフォルト値を使用
obj.name
```

```output
Python
```

```python
obj.count
```

```output
0
```

```python
obj.price
```

```output
0.0
```

## 型ヒント (Type hints)

dataclass ではデータ型を定義することが必須です。ただし、データ型を指定したくない場合は、`typing.Any` を使用します。

```python
from dataclasses import dataclass
from typing import Any

@dataclass
class WithoutExplicitTypes:
   name: Any
   value: Any = 42
```

## 関連リンク (Relevant links)

- <router-link to="/cheatsheet/oop-basics">OOP の基礎 (OOP Basics)</router-link>
- <router-link to="/cheatsheet/decorators">デコレータ (Decorators)</router-link>
- <router-link to="/blog/python-data-types">Python データ型ブログ投稿 (Python Data Types Blog Post)</router-link>
- <router-link to="/builtin/object">object()</router-link>
- <router-link to="/builtin/repr">repr()</router-link>
- <router-link to="/builtin/type">type()</router-link>
