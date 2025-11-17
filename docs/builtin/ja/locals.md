---
title: 'Python 組み込み関数 locals() - Python チートシート'
description: '現在のローカルシンボルテーブルを更新し、辞書を返します。locals() は関数ブロック内で呼び出された場合、自由変数を返しますが、クラスブロック内では返しません。モジュールレベルでは、locals() と globals() は同じ辞書です。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python locals() 組み込み関数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#locals">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
   現在のローカルシンボルテーブルを表す辞書を更新して返します。locals() は関数ブロックで呼び出された場合、クラスブロックではない場合に自由変数を返します。モジュールレベルでは、locals() と <router-link to="/builtin/globals">globals()</router-link> は同じ辞書であることに注意してください。
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

`locals()` 関数は、現在のローカルシンボルテーブルを表す辞書を返します。これには、現在のスコープ内のすべてのローカル変数、引数、その他のオブジェクトが含まれます。

ローカル名前空間を検査するための便利なツールです。

### Example

```python
def my_function(arg1, arg2):
    local_var = "I am local"
    print(locals())

my_function("hello", "world")
```

Output:

```plaintext
{'arg1': 'hello', 'arg2': 'world', 'local_var': 'I am local'}
```

## Relevant links

- <router-link to="/cheatsheet/debugging">チートシート：デバッグ</router-link>
- <router-link to="/cheatsheet/functions">チートシート：関数</router-link>
- <router-link to="/cheatsheet/dictionaries">チートシート：辞書</router-link>
- <router-link to="/builtin/globals">globals()</router-link>
- <router-link to="/builtin/dir">dir()</router-link>
