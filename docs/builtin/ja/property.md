---
title: 'Python 組み込み関数 property() - Python チートシート'
description: 'プロパティ属性を返します。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python property() ビルトイン関数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#property">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
   プロパティ属性を返します。
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

`property()` 関数は、プロパティ属性を作成するために使用されます。プロパティ属性とは、getter、setter、および delete メソッドを持つ特殊な種類の属性です。これにより、属性の値の取得、設定、または削除にロジックを追加できます。

`property()` を使用するより一般的な方法は、`@property` デコレータを使用することです。これは `property()` を使用するより便利な方法です。

### Example

`property()` を使用して読み取り専用属性を作成する例を次に示します。

```python
class Person:
    def __init__(self, name):
        self._name = name

    def get_name(self):
        print("Getting name")
        return self._name

    # プロパティを作成
    name = property(get_name)

p = Person("John")
print(p.name)  # これは get_name() を呼び出します
```

```output
Getting name
John
```

注：セッターがないため、`p.name = "Jane"` は AttributeError を発生させます。

そして、`@property` デコレータを使用した、より一般的な方法は次のとおりです。

```python
class Person:
    def __init__(self, name):
        self._name = name

    @property
    def name(self):
        print("Getting name")
        return self._name

p = Person("John")
print(p.name)
```

```output
Getting name
John
```

## Relevant links

- <router-link to="/cheatsheet/oop-basics">Cheatsheet: OOP の基本</router-link>
- <router-link to="/cheatsheet/decorators">Cheatsheet: デコレータ</router-link>
- <router-link to="/cheatsheet/dataclasses">Cheatsheet: データクラス</router-link>
- <router-link to="/builtin/getattr">getattr()</router-link>
- <router-link to="/builtin/setattr">setattr()</router-link>
- <router-link to="/builtin/delattr">delattr()</router-link>
