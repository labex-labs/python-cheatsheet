---
title: 'Python 組み込み関数 staticmethod() - Python チートシート'
description: 'メソッドを静的メソッドに変換します。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python staticmethod() ビルトイン関数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#staticmethod">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
    メソッドをスタティックメソッドに変換します。
  </base-disclaimer-content>
</base-disclaimer>

## 導入

`@staticmethod` デコレータは、メソッドをクラスに属するものに変換しますが、クラスやインスタンスを最初の引数として受け取りません。これは、クラスとの論理的な関連性を持つものの、クラスの状態やインスタンスの状態に依存しないユーティリティ関数を作成する場合に役立ちます。

スタティックメソッドは、クラス自体から、またはインスタンスから呼び出すことができます。

### 例

スタティックメソッドを定義して呼び出す方法は次のとおりです。

```python
class MathHelper:
    @staticmethod
    def add(x, y):
        return x + y

# クラスから呼び出す
result1 = MathHelper.add(5, 3)
print(result1)

# インスタンスから呼び出す
helper = MathHelper()
result2 = helper.add(10, 20)
print(result2)
```

```output
8
30
```

スタティックメソッドは、クラス (`cls`) やインスタンス (`self`) にアクセスできません。本質的には、クラス内に名前空間が設定された通常の関数です。

## 関連リンク

- <router-link to="/cheatsheet/oop-basics">チートシート：OOP の基本</router-link>
- <router-link to="/cheatsheet/decorators">チートシート：デコレータ</router-link>
- <router-link to="/cheatsheet/functions">チートシート：関数</router-link>
- <router-link to="/builtin/classmethod">classmethod()</router-link>
- <router-link to="/builtin/property">property()</router-link>
