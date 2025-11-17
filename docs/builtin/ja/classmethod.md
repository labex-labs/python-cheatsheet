---
title: 'Python 組み込み関数 classmethod() - Python チートシート'
description: 'メソッドをクラスメソッドに変換します。クラスメソッドは、インスタンスメソッドがインスタンスを暗黙の最初の引数として受け取るのと同じように、クラスを暗黙の最初の引数として受け取ります。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python classmethod() ビルトイン関数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#classmethod">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
   メソッドをクラスメソッドに変換します。クラスメソッドは、インスタンスメソッドがインスタンスを暗黙的な最初の引数として受け取るのと同様に、クラス自体を暗黙的な最初の引数として受け取ります。
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

`classmethod` は、クラスにバインドされ、クラスのインスタンスにはバインドされないメソッドです。インスタンスメソッドが最初の引数としてインスタンス（`self`）を受け取るのとは対照的に、クラス自身を最初の引数として受け取ります。慣習的に `cls` と名付けられます。

これらは、特定の形式でクラスのインスタンスを作成するファクトリメソッドとしてよく使用されます。

## Example

辞書など、異なるデータ形式からクラスをインスタンス化できるファクトリメソッドを作成する一般的な使用例を以下に示します。

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    @classmethod
    def from_dict(cls, data):
        # これは辞書から Person インスタンスを作成するファクトリメソッドです
        return cls(data['name'], data['age'])

    def display(self):
        print(f"Name: {self.name}, Age: {self.age}")

# 新しい人物のデータ
person_data = {'name': 'John', 'age': 30}

# クラスメソッドを使用して Person インスタンスを作成
p = Person.from_dict(person_data)

p.display()
```

Output:

```plaintext
Name: John, Age: 30
```

## Relevant links

- <router-link to="/cheatsheet/oop-basics">Cheatsheet: OOP Basics</router-link>
- <router-link to="/cheatsheet/decorators">Cheatsheet: Decorators</router-link>
- <router-link to="/cheatsheet/functions">Cheatsheet: Functions</router-link>
- <router-link to="/builtin/staticmethod">staticmethod()</router-link>
- <router-link to="/builtin/property">property()</router-link>
- <router-link to="/builtin/object">object()</router-link>
