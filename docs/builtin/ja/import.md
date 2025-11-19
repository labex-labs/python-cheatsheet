---
title: 'Python 組み込み関数 __import__() - Python チートシート'
description: 'この関数は import 文によって呼び出されます。import 文のセマンティクスを変更するために置き換えることができますが、インポートフックを使用する方が簡単な場合が多いため、強く推奨されません。また、importlib.import_module() の代わりに __import__() を直接使用することも推奨されません。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python の組み込み関数 `__import__`
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#import__">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
    この関数は import 文によって呼び出されます。import 文のセマンティクスを変更するために置き換えることも可能ですが、通常は import hook を使用する方が簡単であるため、強く非推奨です。[...] `__import__()` を直接使用することも、`importlib.import_module()` を使用する方が推奨されるため、非推奨です。
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

`__import__()` 関数は、`import` 文によって呼び出される基盤となる関数です。直接使用することも可能ですが、一般的には推奨されません。モジュールを動的にインポートするには、`importlib.import_module()` 関数を使用することが推奨されます。

### Example

`__import__()` を使用して `math` モジュールを動的にインポートする方法を以下に示します。

```python
# 'math' モジュールを動的にインポート
math_module = __import__('math')

# これで通常のインポートのように使用できます
print(math_module.sqrt(4))
```

```output
2.0
```

しかし、`importlib` を使用した推奨される方法は次のとおりです。

```python
import importlib

math_module = importlib.import_module('math')
print(math_module.sqrt(4))
```

```output
2.0
```

## Relevant links

- <router-link :to="'/modules/importlib'">importlib モジュール</router-link>
- <router-link :to="'/cheatsheet/setup-py'">setup.py</router-link>
- <router-link :to="'/blog/python-projects-with-poetry-and-vscode-part-1'">Poetry と VS Code を使った Python プロジェクト（パート 1）</router-link>
- <router-link :to="'/builtin/globals'">globals()</router-link>
- <router-link :to="'/builtin/locals'">locals()</router-link>
