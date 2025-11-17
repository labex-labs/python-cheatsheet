---
title: 'Python メイン関数 - Python チートシート'
description: 'トップレベルコードが実行されるスコープ名。標準入力、スクリプト、またはインタラクティブプロンプトから読み込まれる際、モジュールの名前は main に設定されます。'
labUrl: 'https://labex.io/ja/labs/python-python-main-function-633661?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
メインのトップレベルスクリプト環境
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

## What is it

`__main__` は、トップレベルのコードが実行されるスコープの名前です。
モジュールの**名前**は、標準入力、スクリプト、または対話型プロンプトから読み込まれるときに `__main__` に設定されます。

モジュールは、自身の `__name__` をチェックすることで、メインスコープで実行されているかどうかを判別でき、これによりモジュール内でコードを条件付きで実行するための一般的なイディオムが可能になります。インポートされたときではなく、スクリプトとして、または `python -m` で実行された場合に適用されます。

```python
# __name__ == "__main__": スクリプトが直接実行されているか（インポートされていないか）を確認
if __name__ == "__main__":  # スクリプトとして実行された場合に True、インポートされた場合に False
    # スクリプトとして実行された場合にのみ実行
    main()
```

パッケージの場合、同じ効果は **main**.py モジュールを含めることで実現でき、このモジュールのコンテンツは、モジュールが -m で実行されたときに実行されます。

例えば、モジュールとして使用されることを意図したスクリプトを開発している場合、次のように記述します。

```python
# 例：関数はインポート可能だが、テストコードは直接実行された場合にのみ実行される
def add(a, b):
    return a+b

if __name__ == "__main__":  # ファイルが直接実行された場合にのみ実行され、インポートされた場合には実行されない
    add(3, 5)
```

## Advantages

1. すべての Python モジュールには `__name__` が定義されており、これが `__main__` の場合、そのモジュールがユーザーによってスタンドアロンで実行されていることを意味し、それに応じて適切なアクションを実行できます。
2. このスクリプトを別のスクリプトでモジュールとしてインポートすると、**名前**はスクリプト/モジュールの名前に設定されます。
3. Python ファイルは、再利用可能なモジュールとしても、スタンドアロンプログラムとしても機能できます。
4. `if __name__ == "__main__":` は、ファイルが直接実行された場合にのみ特定のコードを実行するために使用され、インポートされた場合には実行されません。

## Relevant links

- <router-link to="/cheatsheet/functions">Functions</router-link>
- <router-link to="/cheatsheet/setup-py">setup.py</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">Python projects with Poetry and VSCode. Part 1</router-link>
- <router-link to="/builtin/import">import()</router-link>
