---
title: "Python Typing モジュール - Python チートシート"
description: "`typing` モジュールは、関数の引数、戻り値、データ構造に型ヒントを提供します。"
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Typing モジュール
</base-title>

`typing` モジュールは、関数の引数、戻り値、データ構造に型ヒントを提供します。

```python
from typing import TypedDict
```

型ヒントは、Python の実行方法を変えません。エディタ、リンター、読み手が、コードがどのような値を期待しているかを理解する助けになります。

## 関数シグネチャに型を付ける

```python
def greet(name: str) -> str:
    return f'Hello {name}'

print(greet('Ada'))
```

```output
Hello Ada
```

`name: str` という注釈は、関数が文字列を期待することを意味します。`-> str` は、文字列を返すべきことを意味します。

## よく使うコレクション型

型ヒントでデータの形を表現できます。

```python
def average(values: list[float]) -> float:
    return sum(values) / len(values)

print(average([1.0, 2.0, 3.0]))
```

```output
2.0
```

`list[str]` 形式の注釈は Python 3.9 以上が必要です。

## オプションの値

値が存在しない可能性があるときは `| None` を使います。

```python
def find_user(user_id: int) -> str | None:
    if user_id == 1:
        return 'Ada'
    return None

print(find_user(1))
print(find_user(2))
```

```output
Ada
None
```

`X | Y` の Union 構文は Python 3.10 以上が必要です。

## TypedDict

`TypedDict` は、キーが固定された辞書のようなオブジェクトを表します。

```python
from typing import TypedDict

class User(TypedDict):
    name: str
    active: bool

user: User = {'name': 'Ada', 'active': True}
print(user['name'])
```

```output
Ada
```

## 型エイリアス

型エイリアスは、より複雑な型に読みやすい名前を付けます。

```python
Coordinates = tuple[float, float]

def show_location(point: Coordinates) -> str:
    return f'{point[0]}, {point[1]}'

print(show_location((12.5, 35.8)))
```

```output
12.5, 35.8
```

## 関連リンク

- <router-link to="/cheatsheet/functions">チートシート: 関数</router-link>
- <router-link to="/cheatsheet/dictionaries">チートシート: 辞書</router-link>
- <router-link to="/cheatsheet/dataclasses">チートシート: データクラス</router-link>
