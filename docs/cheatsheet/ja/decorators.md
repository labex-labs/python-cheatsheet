---
title: 'Python デコレータ - Python チートシート'
description: 'Python デコレータは、関数やクラスを拡張するための簡潔で再利用可能な構文を提供する記法です。'
labUrl: 'https://labex.io/ja/labs/python-python-decorators-633654?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python デコレータ
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Python のデコレータは、関数やクラスを拡張するための簡潔で再利用可能な方法を提供します。実践的な例とパターンについては、関連する記事「<router-link to="/blog/python-decorators-for-beginners">Python デコレータ：コードをレベルアップするためのシンプルなパターン</router-link>」をお読みください。

## ベアボーンデコレータ

最も単純な形のデコレータは、別の関数を引数として受け取り、ラッパーを返す関数です。次の例は、デコレータの作成とその使用方法を示しています。

```python
# デコレータ：別の関数を受け取り、ラッパーを返す関数
def your_decorator(func):
  def wrapper():
    # func...の前に何かを行う
    print("Before func!")
    func()  # 元の関数を呼び出す
    # func...の後に何かを行う
    print("After func!")
  return wrapper  # ラッパー関数を返す

# @your_decorator は、foo = your_decorator(foo) のシンタックスシュガーです
@your_decorator
def foo():
  print("Hello World!")

foo()  # ラッパーを呼び出し、追加の動作を持つ foo が呼び出される
```

```output
Before func!
Hello World!
After func!
```

## パラメータを持つ関数のデコレータ

```python
# パラメータを持つ関数で動作するデコレータ
def your_decorator(func):
  def wrapper(*args,**kwargs):  # あらゆる引数を受け入れる
    # func...の前に何かを行う
    print("Before func!")
    func(*args,**kwargs)  # 引数を元の関数に渡す
    # func...の後に何かを行う
    print("After func!")
  return wrapper

@your_decorator
def foo(bar):
  print("My name is " + bar)

foo("Jack")  # 引数はラッパー経由で渡される
```

```output
Before func!
My name is Jack
After func!
```

## 基本的なデコレータのテンプレート

このテンプレートは、ほとんどのデコレータの使用例に役立ちます。パラメータの有無、戻り値の有無にかかわらず、関数に対して有効です。

```python
import functools

# ベストプラクティスデコレータテンプレート：関数のメタデータと戻り値を保持する
def your_decorator(func):
  @functools.wraps(func)  # 関数名、docstring などを保持する
  def wrapper(*args,**kwargs):
    # func...の前に何かを行う
    result = func(*args,**kwargs)  # 関数を呼び出し、戻り値をキャプチャする
    # func...の後に何かを行う
    return result  # 元の関数の戻り値を返す
  return wrapper
```

## パラメータを持つデコレータ

デコレータにパラメータを定義することもできます。

```python
import functools

# デコレータファクトリ：パラメータに基づいてデコレータを返す
def your_decorator(arg):
  def decorator(func):
    @functools.wraps(func)  # 関数のメタデータを保持する
    def wrapper(*args,**kwargs):
      # func...の前に何かを行う（arg を使用する可能性がある）
      result = func(*args,**kwargs)
      # func...の後に何かを行う（arg を使用する可能性がある）
      return result
    return wrapper
  return decorator  # 実際のデコレータ関数を返す
```

このデコレータを使用するには：

```python
# パラメータを持つデコレータの使用法：@your_decorator(arg='x') は your_decorator('x') を呼び出し、
# それがデコレータを返し、foo に適用される
@your_decorator(arg = 'x')
def foo(bar):
  return bar
```

## クラスベースのデコレータ

クラスのメソッドをデコレートするには、デコレータをクラス内で定義する必要があります。暗黙的な引数 `self` のみがメソッドに渡され、明示的な追加引数がない場合、引数なしのメソッド専用のデコレータを別途定義する必要があります。例として、特定の例外をキャッチして表示したい場合などが挙げられます。

```python
# クラスメソッドデコレータ：クラス内で定義される
class DecorateMyMethod:

  # 'self'パラメータのみを持つメソッド用のスタティックメソッドデコレータ
  def decorator_for_class_method_with_no_args(method):
    def wrapper_for_class_method(self):  # self のみを受け取る
      try:
        return method(self)  # 元のメソッドを呼び出す
      except Exception as e:
        print("\nWARNING: Please make note of the following:\n")
        print(e)
    return wrapper_for_class_method

  def __init__(self,succeed:bool):
    self.succeed = succeed

  @decorator_for_class_method_with_no_args
  def class_action(self):
    if self.succeed:
      print("You succeeded by choice.")
    else:
      raise Exception("Epic fail of your own creation.")

test_succeed = DecorateMyMethod(True)
test_succeed.class_action()
```

```output
You succeeded by choice.
```

```python
test_fail = DecorateMyMethod(False)
test_fail.class_action()
```

```output
Exception: Epic fail of your own creation.
```

デコレータは、メソッドの代わりにクラスとして定義することもできます。これは、呼び出し回数をカウントする例のように、状態を維持および更新する場合に役立ちます。

```python
# クラスベースデコレータ：呼び出し間で状態を維持する
class CountCallNumber:

  def __init__(self, func):
    self.func = func  # デコレートする関数を格納
    self.call_number = 0  # 呼び出しカウンターを初期化

  def __call__(self, *args, **kwargs):  # インスタンスを呼び出し可能にする
    self.call_number += 1  # カウンターをインクリメント
    print("This is execution number " + str(self.call_number))
    return self.func(*args, **kwargs)  # 元の関数を呼び出す

@CountCallNumber  # CountCallNumber のインスタンスを作成する
def say_hi(name):
  print("Hi! My name is " + name)

say_hi("Jack")  # CountCallNumber.__call__() を呼び出す
```

```output
This is execution number 1
Hi! My name is Jack
```

```python
say_hi("James")
```

```output
This is execution number 2
Hi! My name is James
```

<base-disclaimer>
  <base-disclaimer-title>
    カウントの例
  </base-disclaimer-title>
  <base-disclaimer-content>
  このカウントの例は、Patrick Loeber の<a href="https://youtu.be/HGOBQPFzWKo?si=IUvFzeQbzTmeEgKV" target="_blank">YouTube チュートリアル</a>に触発されています。
  </base-disclaimer-content>
</base-disclaimer>

## 関連リンク

- <router-link to="/blog/python-decorators-for-beginners">Python デコレータ：コードをレベルアップするためのシンプルなパターン</router-link>
- <router-link to="/blog/python-easy-args-kwargs">Python \*args と \*\*kwargs を簡単に</router-link>
- <router-link to="/cheatsheet/functions">関数</router-link>
- <router-link to="/cheatsheet/args-and-kwargs">Args と Kwargs</router-link>
- <router-link to="/builtin/classmethod">classmethod()</router-link>
- <router-link to="/builtin/staticmethod">staticmethod()</router-link>
- <router-link to="/builtin/property">property()</router-link>
- <router-link to="/builtin/callable">callable()</router-link>
