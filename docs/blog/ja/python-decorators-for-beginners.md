---
title: 'Python デコレータ：コードをレベルアップするシンプルなパターン - Python チートシート'
description: '関数が書ければデコレータも書けます。タイマーやロガーなどの機能を、初心者向けの簡単なパターンでコードに追加する方法を学びましょう。'
date: 'Aug 16, 2025'
updated: 'Aug 16, 2025'
tags: 'python, intermediate, decorators'
socialImage: '/blog/python-decorators.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "Python デコレータ：コードをレベルアップするシンプルなパターン - Python チートシート"
    description: "関数が書ければデコレータも書けます。タイマーやロガーなどの機能を、初心者向けの簡単なパターンでコードに追加する方法を学びましょう。"
    date: "Aug 16, 2025"
    updated: "Aug 16, 2025"
    tags: "python, intermediate, decorators"
    socialImage: "/blog/python-decorators.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="Pythonデコレータ：コードをレベルアップするシンプルなパターン - Pythonチートシート" />

関数の上に `@something` と書かれているのを見て、どんな魔法が起こっているのか疑問に思ったことはありませんか？私もそうでした。デコレータは、基本的なことを理解すれば、Python の最もエレガントな機能の 1 つですが、最初は難しく見えるかもしれません — 簡潔なリファレンスについては、<router-link to="/cheatsheet/decorators">デコレータ (チートシート)</router-link> を参照してください。

デコレータを関数のギフトラッピングだと考えてください。中の関数は変わりませんが、デコレータが上に素敵なリボンを追加します。つまり、元のコードを変更せずに、追加の機能が提供されます。

## 最もシンプルなデコレータ

何が起こっているのかを理解するために、最も基本的な例から始めましょう。

```python
def my_decorator(func):
    def wrapper():
        print("Something happens before!")
        func()
        print("Something happens after!")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()
# Something happens before!
# Hello!
# Something happens after!
```

これだけです！デコレータは、別の関数を受け取り、追加の動作でそれをラップする単なる関数です。`@my_decorator` 構文は、`say_hello = my_decorator(say_hello)` と書くための、よりクリーンな方法にすぎません。

## 最初の役立つデコレータ：タイマー

これは実際に使いたくなるデコレータです。関数の実行にかかった時間を教えてくれます。

```python
import time
import functools

def timer(func):
    @functools.wraps(func)  # 元の関数の名前とドキュメントを保持する
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end - start:.4f} seconds")
        return result
    return wrapper

@timer
def slow_function():
    time.sleep(1)
    return "Done!"

result = slow_function()
# slow_function took 1.0041 seconds
print(result)  # Done!
```

追加のデコレータのテンプレートと一般的なパターンについては、<router-link to="/cheatsheet/decorators">デコレータ (チートシート)</router-link> を参照してください。

`*args` と `**kwargs` ( <router-link to="/cheatsheet/args-and-kwargs">Args & kwargs</router-link> を参照) を使用していることに注目してください。これにより、デコレータは引数の数に関係なく、あらゆる関数で機能するようになります。

## コードのデバッグ：ロガーデコレータ

何がうまくいかないのかを突き止めようとするとき、このデコレータは非常に便利です。補完的なヒントやテクニックについては、<router-link to="/cheatsheet/debugging">デバッグ (チートシート)</router-link> も確認してください。

```python
def debug(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        args_str = ', '.join(repr(arg) for arg in args)
        kwargs_str = ', '.join(f"{k}={v!r}" for k, v in kwargs.items())
        all_args = ', '.join(filter(None, [args_str, kwargs_str]))
        print(f"Calling {func.__name__}({all_args})")

        result = func(*args, **kwargs)
        print(f"{func.__name__} returned {result!r}")
        return result
    return wrapper

@debug
def add_numbers(a, b, multiply_by=1):
    return (a + b) * multiply_by

result = add_numbers(5, 3, multiply_by=2)
# Calling add_numbers(5, 3, multiply_by=2)
# add_numbers returned 16
```

## アクセスの制御：認証デコレータ

特定のユーザーのみが関数を実行できるようにしたいですか？方法は次のとおりです。

```python
def requires_auth(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        # 実際のアプリでは、実際の認証を確認します
        user_logged_in = True  # これは認証システムから提供されます

        if not user_logged_in:
            return "Access denied! Please log in."

        return func(*args, **kwargs)
    return wrapper

@requires_auth
def delete_everything():
    return "💥 Everything deleted! (just kidding)"

result = delete_everything()
print(result)  # 💥 Everything deleted! (just kidding)
```

## 速度向上：キャッシュデコレータ

同じ入力で計算コストの高い関数を実行する場合、結果をキャッシュします。

```python
def cache(func):
    cached_results = {}

    @functools.wraps(func)
    def wrapper(*args):
        if args in cached_results:
            print(f"Cache hit for {func.__name__}{args}")
            return cached_results[args]

        print(f"Computing {func.__name__}{args}")
        result = func(*args)
        cached_results[args] = result
        return result

    return wrapper

@cache
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(10))
# Computing fibonacci(10)
# Computing fibonacci(9)
# Computing fibonacci(8)
# ... (lots of computation)
# Cache hit for fibonacci(2)
# Cache hit for fibonacci(3)
# ... (cache hits)
# 55
```

## 失敗した操作の再試行

ネットワークエラーや一時的な問題により、関数が失敗することがあります。このデコレータは自動的に再試行します。

```python
import random

def retry(max_attempts=3):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            for attempt in range(max_attempts):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    print(f"Attempt {attempt + 1} failed: {e}")
                    if attempt == max_attempts - 1:
                        print("All attempts failed!")
                        raise
        return wrapper
    return decorator

@retry(max_attempts=3)
def unreliable_api_call():
    if random.random() < 0.7:  # 70% の確率で失敗
        raise Exception("Network error")
    return "Success!"

# 失敗した場合、これは最大 3 回再試行されます
result = unreliable_api_call()
```

## レート制限：コードの速度を落とす

API やデータベースに優しくする必要がある場合があります。

```python
import time
import functools

def rate_limit(seconds):
    """
    関数の呼び出し頻度を制限するためのデコレータ。
    """
    def decorator(func):
        # 最後に呼び出された時刻を保持するためにリストを使用します。
        # これにより、内部のラッパー関数がそれを変更できるようになります。
        last_called_at = [0.0]

        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            # 最後に呼び出されてからの経過時間を計算
            elapsed = time.time() - last_called_at[0]
            wait_time = seconds - elapsed

            # 十分な時間が経過していない場合は、残りの時間だけスリープします
            if wait_time > 0:
                time.sleep(wait_time)

            # 最終呼び出し時刻を更新し、関数を実行します
            last_called_at[0] = time.time()
            return func(*args, **kwargs)

        return wrapper
    return decorator

@rate_limit(1)  # 1 秒あたり最大 1 回の呼び出しを許可
def call_api():
    print(f"API called at {time.time():.2f}")

# これらの呼び出しは約 1 秒間隔で間隔が空けられます
call_api()
call_api()
call_api()

# 期待される出力：
# API called at 1723823038.50
# API called at 1723823039.50
# API called at 1723823040.50
```

## 入力の検証

関数が正しい種類のデータを受け取っていることを確認します。

```python
def validate_types(**expected_types):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            # 関数パラメータ名を取得
            import inspect
            sig = inspect.signature(func)
            bound_args = sig.bind(*args, **kwargs)
            bound_args.apply_defaults()

            for param_name, expected_type in expected_types.items():
                if param_name in bound_args.arguments:
                    value = bound_args.arguments[param_name]
                    if not isinstance(value, expected_type):
                        raise TypeError(
                            f"{param_name} must be {expected_type.__name__}, "
                            f"got {type(value).__name__}"
                        )

            return func(*args, **kwargs)
        return wrapper
    return decorator

@validate_types(name=str, age=int)
def create_user(name, age):
    return f"User {name}, age {age}"

# これは動作します
user1 = create_user("Alice", 25)
print(user1)  # User Alice, age 25

# これは TypeError を発生させます
try:
    user2 = create_user("Bob", "twenty-five")
except TypeError as e:
    print(e)  # age must be int, got str
```

## 各デコレータを使用するタイミング

| デコレータの種類    | 最適な用途                   | 使用例                                       |
| :------------------ | :--------------------------- | :------------------------------------------- |
| **タイマー**        | パフォーマンス監視           | 遅い関数の特定、最適化                       |
| **デバッグ/ロガー** | 開発とトラブルシューティング | 関数呼び出しの理解、デバッグ                 |
| **認証**            | セキュリティとアクセス制御   | 管理関数の保護、ユーザー権限                 |
| **キャッシュ**      | コストの高い計算             | データベースクエリ、API 呼び出し、複雑な計算 |
| **再試行**          | 信頼性の低い操作             | ネットワークリクエスト、ファイル操作         |
| **レート制限**      | 頻度の制御                   | API 呼び出し、スパムの防止                   |
| **検証**            | データ整合性                 | ユーザー入力、API パラメータ                 |

## デコレータを使用するためのヒント

**必ず `@functools.wraps` を使用する** — これにより、元の関数の名前とドキュメントが保持され、デバッグが容易になります (例については、<router-link to="/cheatsheet/decorators">デコレータチートシート</router-link> を参照してください)。

**シンプルに保つ** — デコレータが複雑になりすぎている場合は、クラスまたは別の関数にする必要があるかどうかを検討してください。

**順序を考える** — デコレータを積み重ねる場合、関数に最も近いものが最初に実行されます。

```python
@timer
@debug
def my_function():
    pass

# これは次と同じです：
# my_function = timer(debug(my_function))
```

**使いすぎない** — デコレータは強力ですが、多すぎるとコードの追跡が困難になる可能性があります。

## 主要なポイント

デコレータを使用すると、関数のコードを変更せずに機能を追加できます。タイミング、ロギング、認証、キャッシングなどのクロスカーティングな懸念事項に最適です。

ここで示されたシンプルなパターンから始めてください。慣れたら、特定のニーズに合わせて、より洗練されたデコレータを作成できます。重要なのは、デコレータは他の関数をラップする単なる関数であるということを理解することです。それ以外はすべて、その基本的な概念の巧妙な応用です。

練習しますか？既存の関数のいくつかに `@timer` デコレータを追加してみて、どれが予想よりも遅いかを確認してください。驚くような発見があるかもしれません！

## 関連リンク

さらに詳しく読むために、関連する内部ドキュメントリンクを以下に追加します。

- <router-link to="/cheatsheet/decorators">デコレータ (チートシート)</router-link>
- <router-link to="/cheatsheet/functions">関数 (チートシート)</router-link>
- <router-link to="/cheatsheet/args-and-kwargs">Args & kwargs (チートシート)</router-link>
- <router-link to="/cheatsheet/debugging">デバッグ (チートシート)</router-link>
- <router-link to="/cheatsheet/oop-basics">OOP の基本 (チートシート)</router-link>
- <router-link to="/builtin/callable">callable() (組み込み)</router-link>
- <router-link to="/builtin/staticmethod">staticmethod (組み込み)</router-link>
- <router-link to="/blog/python-easy-args-kwargs">Python: 簡単な args & kwargs (ブログ)</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">Python のコンプリヘンション (ブログ)</router-link>
