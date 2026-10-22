---
title: 'Python コンテキストマネージャ - Python チートシート'
description: 'Python のコンテキストマネージャは広く使われていますが、その使用目的を理解している人は少ないです。ファイル読み書きで一般的に使用されるこれらのステートメントは、特定のプロセスでのみリソースが使用されることを保証し、システムメモリの節約とリソース管理の改善を支援します。'
labUrl: 'https://labex.io/ja/labs/python-python-context-manager-633650?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python コンテキストマネージャ
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Python のコンテキストマネージャは広く使用されていますが、その使用目的を理解している人はほとんどいません。ファイル読み書きで一般的に使用されるこれらのステートメントは、特定のプロセスでのみリソースが使用されることを保証することで、アプリケーションがシステムメモリを節約し、リソース管理を改善するのに役立ちます。

## with ステートメント

コンテキストマネージャとは、コンテキスト（コードブロック）の開始時と終了時に通知を受けるオブジェクトのことです。通常、`with`ステートメントと共に使用されます。これは通知の処理を担当します。

例えば、ファイルオブジェクトはコンテキストマネージャです。コンテキストが終了すると、ファイルオブジェクトは自動的に閉じられます。

```python
# コンテキストマネージャ：リソースのクリーンアップを自動的に処理
# 'with'ブロックを抜けるときにファイルは自動的に閉じられる
with open(filename) as f:  # 'f' はファイルオブジェクト
    file_contents = f.read()

# エラーが発生した場合でも、ここでファイルは自動的に閉じられる
```

<BaseQuiz id="cheatsheet-context-manager-1" correct="A">
<template #question>
コンテキストマネージャ（<code>with</code>ステートメント）を使用する主な利点は何ですか？
</template>

<BaseQuizOption value="A" correct>A. エラーが発生した場合でも、リソースのクリーンアップを自動的に処理する</BaseQuizOption>
<BaseQuizOption value="B">B. コードの実行速度を向上させる</BaseQuizOption>
<BaseQuizOption value="C">C. 複数のファイルを同時に開くことができる</BaseQuizOption>
<BaseQuizOption value="D">D. すべてのエラーを防ぐ</BaseQuizOption>
<BaseQuizAnswer>コンテキストマネージャは、例外が発生した場合でも、リソース（ファイルなど）がブロックを終了するときに適切にクリーンアップされることを保証します。これにより、リソースリークやデータ損失を防ぎます。</BaseQuizAnswer>
</BaseQuiz>

ブロックの実行が終了するものは何でも、コンテキストマネージャの終了メソッドが呼び出されます。これには例外が含まれ、エラーによって開いているファイルや接続から予期せず終了する場合に役立ちます。ファイルを閉じたり接続を切断したりせずにスクリプトを終了するのは悪い考えであり、データ損失やその他の問題を引き起こす可能性があります。コンテキストマネージャを使用することで、このようにして損害や損失を防ぐための予防措置が常に取られることを保証できます。

## 独自のコンテキストマネージャの記述

`contextlib.contextmanager`デコレータのおかげで、ジェネレータ構文を使用してコンテキストマネージャを記述することも可能です。

```python
# contextlib デコレータを使用した関数ベースのコンテキストマネージャ
import contextlib
@contextlib.contextmanager
def context_manager(num):
    print('Enter')  # yield の前のコードは__enter__で実行される
    try:
        yield num + 1   # yield された値が'cm'変数になる
    finally:
        print('Exit')    # yield の後のコードは__exit__で実行される

with context_manager(2) as cm:  # cm は yield された値 (3) を受け取る
    print('Right in the middle with cm = {}'.format(cm))
```

```output
Enter
Right in the middle with cm = 3
Exit
```

## クラスベースのコンテキストマネージャ

クラスベースのコンテキストマネージャを定義できます。主要なメソッドは`__enter__`と`__exit__`です。

```python
# クラスベースのコンテキストマネージャ：__enter__および__exit__メソッドを実装する
class ContextManager:
    def __enter__(self, *args, **kwargs):  # 'with'ブロックに入るときに呼び出される
        print("--enter--")
        return self  # 'as'変数として使用するオブジェクトを返すことができる

    def __exit__(self, *args):  # 'with'ブロックを抜けるときに呼び出される
        print("--exit--")

with ContextManager():  # 終了時に__enter__が呼び出され、次に__exit__が呼び出される
    print("test")
```

```output
--enter--
test
--exit--
```

<BaseQuiz id="cheatsheet-context-manager-2" correct="B">
<template #question>
クラスがコンテキストマネージャとして使用されるために実装しなければならないメソッドは何ですか？
</template>

<BaseQuizOption value="A">A. <code>**init**</code> および <code>**del**</code></BaseQuizOption>
<BaseQuizOption value="B" correct>B. <code>**enter**</code> および <code>**exit**</code></BaseQuizOption>
<BaseQuizOption value="C">C. <code>open</code> および <code>close</code></BaseQuizOption>
<BaseQuizOption value="D">D. <code>start</code> および <code>stop</code></BaseQuizOption>
<BaseQuizAnswer>クラスベースのコンテキストマネージャは、<code>**enter**</code>（<code>with</code>ブロックに入るときに呼び出される）と<code>**exit**</code>（ブロックを抜けるときに呼び出される）を実装する必要があります。</BaseQuizAnswer>
</BaseQuiz>

## 関連リンク

- <router-link to="/cheatsheet/reading-and-writing-files">ファイルの読み書き</router-link>
- <router-link to="/cheatsheet/exception-handling">例外処理</router-link>
- <router-link to="/cheatsheet/decorators">デコレータ</router-link>
- <router-link to="/blog/python-pathlib-essentials">すべての開発者が知っておくべき 10 の必須ファイルシステム操作</router-link>
- <router-link to="/builtin/open">open()</router-link>
