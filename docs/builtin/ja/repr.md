---
title: 'Python 組み込み関数 repr() - Python チートシート'
description: 'オブジェクトの印刷可能な表現を含む文字列を返します。多くの型では、この関数は eval() に渡されたときに同じ値を持つオブジェクトを生成する文字列を返そうとします。そうでない場合は、オブジェクトの型名と、オブジェクト名やアドレスなどの追加情報を含む角括弧で囲まれた文字列が返されます。クラスは、__repr__() メソッドを定義することで、インスタンスに対してこの関数が返すものを制御できます。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python repr() ビルトイン関数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#repr">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
   オブジェクトの印字可能な表現を含む文字列を返します。多くの型について、この関数は `eval()` に渡されたときに同じ値を持つオブジェクトを生成するような文字列を返そうとします。そうでない場合、表現はオブジェクトの型名と、多くの場合オブジェクトの名前とアドレスを含む追加情報を含む山括弧で囲まれた文字列になります。クラスは、`__repr__()` メソッドを定義することで、そのインスタンスに対してこの関数が返すものを制御できます。
  </base-disclaimer-content>
</base-disclaimer>

## 導入

`repr()` 関数は、オブジェクトの印字可能な表現を含む文字列を返します。`repr()` の目的は曖昧さがないことです。多くの型について、`repr()` は <router-link to="/builtin/eval">eval()</router-link> によって実行されて同一のオブジェクトを作成できる文字列を返します。

これは、人間が読めることを意図している <router-link to="/builtin/str">str()</router-link> とは異なります。

### 例

```python
import datetime

# 文字列の場合、repr() は引用符を追加します
print(repr("hello"))

# datetime オブジェクトの場合、曖昧さがありません
now = datetime.datetime.now()
print(repr(now))

# 独自のクラスに対して __repr__ を定義できます
class Person:
    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return f"Person(name='{self.name}')"

p = Person("John")
print(repr(p))
```

出力：

```plaintext
'hello'
datetime.datetime(2023, 10, 27, 10, 0, 0, 123456)
Person(name='John')
```

## 関連リンク

- <router-link to="/cheatsheet/oop-basics">チートシート：OOP の基礎</router-link>
- <router-link to="/cheatsheet/debugging">チートシート：デバッグ</router-link>
- <router-link to="/cheatsheet/string-formatting">チートシート：文字列フォーマット</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/ascii">ascii()</router-link>
- <router-link to="/builtin/eval">eval()</router-link>
- <router-link to="/builtin/format">format()</router-link>
