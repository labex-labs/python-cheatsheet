---
title: 'Python 組み込み関数 compile() - Python チートシート'
description: 'ソースコードをコードオブジェクトまたは AST オブジェクトにコンパイルします。コードオブジェクトは exec() または eval() で実行できます。source は通常の文字列、バイト文字列、または AST オブジェクトのいずれかです。AST オブジェクトの操作については、ast モジュールのドキュメントを参照してください。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 組み込み関数 compile()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#compile">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
   ソースをコードオブジェクトまたは AST オブジェクトにコンパイルします。コードオブジェクトは<router-link to="/builtin/exec">exec()</router-link>または<router-link to="/builtin/eval">eval()</router-link>によって実行できます。source は、通常の文字列、バイト文字列、または AST オブジェクトのいずれかです。AST オブジェクトの操作については、ast モジュールのドキュメントを参照してください。
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Python の`compile()`関数は、文字列または抽象構文木（AST）オブジェクトをコードオブジェクトに変換するために使用される組み込み関数です。<router-link to="/builtin/exec">exec()</router-link>や<router-link to="/builtin/eval">eval()</router-link>などの関数によって、このコードオブジェクトを実行できます。

## Example

動作を示す基本的な例を次に示します。

```python
code_string = """
def hello_world():
    print('Hello, world!')

hello_world()
"""

# 文字列をコードオブジェクトにコンパイル
# 'exec'モードは一連のステートメントに使用されます。
# 'eval'モードは単一の式に使用されます。
# 'single'モードは単一の対話型ステートメントに使用されます。
code_object = compile(code_string, '<string>', 'exec')

# コードオブジェクトを実行
exec(code_object)
```

Output:

```plaintext
Hello, world!
```

## Relevant links

- <router-link to="/cheatsheet/debugging">Cheatsheet: デバッグ</router-link>
- <router-link to="/builtin/exec">exec()</router-link>
- <router-link to="/builtin/eval">eval()</router-link>
- <router-link to="/builtin/breakpoint">breakpoint()</router-link>
