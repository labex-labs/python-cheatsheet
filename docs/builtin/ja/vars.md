---
title: 'Python 組み込み関数 vars() - Python チートシート'
description: 'モジュール、クラス、インスタンス、または__dict__属性を持つ任意のオブジェクトの__dict__属性を返します。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python vars() ビルトイン関数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#vars">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
    モジュール、クラス、インスタンス、または __dict__ 属性を持つその他のオブジェクトの __dict__ 属性を返します。
  </base-disclaimer-content>
</base-disclaimer>

## 導入

`vars()` 関数は、オブジェクトの `__dict__` 属性を返します。この辞書には、オブジェクトの書き込み可能な属性が含まれています。これは、オブジェクトのすべての属性を一度に確認するための便利な方法です。

引数なしで呼び出された場合、`vars()` は `locals()` と同様に機能し、ローカルシンボルテーブルの辞書を返します。

### 例

**オブジェクトの属性を取得する：**

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

my_person = Person("Dwight", 35)
print(vars(my_person))
```

```output
{'name': 'Dwight', 'age': 35}
```

**引数なしで `vars()` を使用する:**

```python
def my_function():
    x = 10
    print(vars())

my_function()
```

```output
{'x': 10}
```

## 関連リンク

- <router-link to="/cheatsheet/oop-basics">チートシート：OOP の基本</router-link>
- <router-link to="/cheatsheet/debugging">チートシート：デバッグ</router-link>
- <router-link to="/cheatsheet/dictionaries">チートシート：辞書</router-link>
- <router-link to="/builtin/dir">dir()</router-link>
- <router-link to="/builtin/object">object()</router-link>
- <router-link to="/builtin/globals">globals()</router-link>
- <router-link to="/builtin/locals">locals()</router-link>
