---
title: 'Python 例外処理 - Python チートシート'
description: 'Python における例外処理とは、例外の発生に対応するプロセスです。'
labUrl: 'https://labex.io/ja/labs/python-python-exception-handling-633656?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 例外処理
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://en.wikipedia.org/wiki/Exception_handling">例外処理</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    コンピューティングおよびコンピュータプログラミングにおける例外処理とは、特別な処理を必要とする異常な、または例外的な状態である例外の発生に対応するプロセスです。
  </base-disclaimer-content>
</base-disclaimer>

Python には、プログラムがエラーに遭遇したときに発生する多くの[組み込み例外](https://docs.python.org/3/library/exceptions.html)があり、人気の[Requests](https://requests.readthedocs.io/en/latest)のようなほとんどの外部ライブラリには、私たちが対処する必要がある独自の[カスタム例外](https://requests.readthedocs.io/en/latest/user/quickstart/#errors-and-exceptions)が含まれています。

## 基本的な例外処理

ゼロによる除算は数学的に真実であり、Python でそれを試みると、インタープリタは組み込み例外 [ZeroDivisionError](https://docs.python.org/3/library/exceptions.html#ZeroDivisionError) を発生させます。

```python
def divide(dividend , divisor):
    print(dividend / divisor)

divide(dividend=10, divisor=5)
```

出力：

```plaintext
2
```

```python
divide(dividend=10, divisor=0)
```

出力：

```plaintext
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ZeroDivisionError: division by zero
```

プログラムの実行を停止させたくない、またはユーザーに理解できない出力を表示したくないとします。代わりに、明確で役立つメッセージを出力したいとします。その場合、`try` キーワードと `except` キーワードを使用して例外を**_処理_**する必要があります。

```python
# try-except: 例外を優雅に処理する
def divide(dividend , divisor):
    try:  # このコードを実行してみる
        print(dividend / divisor)
    except ZeroDivisionError:  # 特定の例外型をキャッチする
        print('You can not divide by 0')

divide(dividend=10, divisor=5)
```

出力：

```plaintext
2
```

```python
divide(dividend=10, divisor=0)
```

出力：

```plaintext
You can not divide by 0
```

## 1 つの例外ブロックを使用した複数の例外の処理

複数の例外を 1 行で処理することもでき、複数の例外ブロックを作成する必要はありません。

```python
# 1 つの except ブロックで複数の例外を処理する
def divide(dividend , divisor):
    try:
        if (dividend == 10):
          var = 'str' + 1  # これは TypeError を発生させる
        else:
          print(dividend / divisor)
    except (ZeroDivisionError, TypeError) as error:  # 複数の例外型をキャッチする
        print(error)  # エラーメッセージを出力する

divide(dividend=20, divisor=5)
```

出力：

```plaintext
4
```

```python
divide(dividend=10, divisor=5)
```

出力：

```plaintext
can only concatenate str (not "int") to str
```

```python
divide(dividend=10, divisor=0)
```

出力：

```plaintext
division by zero
```

## 例外処理における finally コード

`finally` セクション内のコードは、例外が発生したかどうかにかかわらず、常に実行されます。

```python
# finally ブロック：例外の発生に関係なく常に実行される
def divide(dividend , divisor):
    try:
        print(dividend / divisor)
    except ZeroDivisionError:
        print('You can not divide by 0')
    finally:  # 例外が発生しても常に実行される
        print('Execution finished')

divide(dividend=10, divisor=5)
```

出力：

```plaintext
2.0
Execution finished
```

```python
divide(dividend=10, divisor=0)
```

出力：

```plaintext
You can not divide by 0
Execution finished
```

## カスタム例外

カスタム例外は、Python の基本 `Exception` クラスを継承する `class` を作成することによって初期化され、`raise` キーワードを使用して発生させます。

```python
# カスタム例外：Exception クラスから継承して作成
class MyCustomException(Exception):
    pass

raise MyCustomException  # カスタム例外を発生させる
```

出力：

```plaintext
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
__main__.MyCustomException
```

カスタム例外メッセージを宣言するには、それをパラメーターとして渡すことができます。

```python
class MyCustomException(Exception):
    pass

raise MyCustomException('A custom message for my custom exception')
```

出力：

```plaintext
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
__main__.MyCustomException: A custom message for my custom exception
```

カスタム例外の処理は、他の例外と同じです。

```python
try:
    raise MyCustomException('A custom message for my custom exception')
except MyCustomException:
    print('My custom exception was raised')
```

出力：

```plaintext
My custom exception was raised
```

## 関連リンク

- <router-link to="/cheatsheet/control-flow">制御フロー</router-link>
- <router-link to="/builtin/breakpoint">breakpoint()</router-link>
- <router-link to="/builtin/isinstance">isinstance()</router-link>
- <router-link to="/builtin/issubclass">issubclass()</router-link>
