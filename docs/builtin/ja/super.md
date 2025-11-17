---
title: 'Python 組み込み関数 super() - Python チートシート'
description: '型（クラス）の親または兄弟クラスにメソッド呼び出しを委任するプロキシオブジェクトを返します。これは、クラス内でオーバーライドされた継承メソッドにアクセスするのに役立ちます。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python super() 組み込み関数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#super">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
    型（type）の親クラスまたは兄弟クラスへのメソッド呼び出しを委任するプロキシオブジェクトを返します。これは、クラス内でオーバーライドされた継承メソッドにアクセスする場合に役立ちます。
  </base-disclaimer-content>
</base-disclaimer>

## 導入 (Introduction)

`super()` 関数は、親クラスのメソッドを呼び出すために使用されます。これは、親のメソッドの機能を完全にオーバーライドすることなく拡張したい場合に、継承において特に役立ちます。

### 例 (Example)

```python
class Parent:
    def greet(self):
        print("Hello from Parent")

class Child(Parent):
    def greet(self):
        # Call the parent's greet method
        super().greet()
        print("Hello from Child")

c = Child()
c.greet()
```

出力 (Output):

```plaintext
Hello from Parent
Hello from Child
```

## 関連リンク (Relevant links)

- <router-link to="/cheatsheet/oop-basics">Cheatsheet: OOP の基本</router-link>
- <router-link to="/cheatsheet/decorators">Cheatsheet: デコレータ</router-link>
- <router-link to="/cheatsheet/functions">Cheatsheet: 関数</router-link>
- <router-link to="/builtin/object">object()</router-link>
- <router-link to="/builtin/isinstance">isinstance()</router-link>
- <router-link to="/builtin/issubclass">issubclass()</router-link>
- <router-link to="/builtin/classmethod">classmethod()</router-link>
- <router-link to="/builtin/staticmethod">staticmethod()</router-link>
- <router-link to="/builtin/property">property()</router-link>
