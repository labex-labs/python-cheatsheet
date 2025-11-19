---
title: 'Python 組み込み関数 globals() - Python チートシート'
description: '現在のモジュール名前空間を実装する辞書を返します。関数内のコードの場合、これは関数が定義されたときに設定され、関数の呼び出し場所に関係なく同じままです。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 組み込み関数 globals()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#globals">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
   現在のモジュール名前空間を表す辞書を返します。関数内のコードの場合、これは関数が定義されたときに設定され、関数がどこから呼び出されても同じままです。
  </base-disclaimer-content>
</base-disclaimer>

## 導入

Python の`globals()`関数は、現在のグローバルシンボルテーブルを表す辞書を返します。これには、現在のスコープ内のすべてのグローバル変数、関数、その他のオブジェクトが含まれます。

グローバル名前空間を検査したり、文字列名でグローバル変数に動的にアクセスしたりする場合に役立ちます。

### 例

```python
# グローバル変数を定義
global_var = "I am global"

def my_function():
    # globals() を使用してグローバル変数にアクセス
    global_dict = globals()
    print(global_dict["global_var"])

    # グローバル変数を変更
    global_dict["global_var"] = "Modified global"

my_function()
print(global_var)
```

```output
I am global
Modified global
```

また、関数内から`globals()`を使用して新しいグローバル変数を作成することもできます。

```python
def create_global():
    globals()["new_global"] = "This was created dynamically"

create_global()
print(new_global)
```

```output
This was created dynamically
```

## 関連リンク

- <router-link :to="'/builtin/locals'">`locals()`</router-link>
- <router-link :to="'/builtin/dir'">`dir()`</router-link>
- <router-link :to="'/builtin/exec'">`exec()`</router-link>
- <router-link :to="'/builtin/eval'">`eval()`</router-link>
- <router-link :to="'/cheatsheet/functions'">Functions</router-link>
