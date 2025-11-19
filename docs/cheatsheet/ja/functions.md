---
title: 'Python 関数 - Python チートシート'
description: 'Python では、関数は単一のタスクを実行するために使用される、整理されたコードブロックです。'
labUrl: 'https://labex.io/ja/labs/python-python-functions-633658?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 関数
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://en.wikiversity.org/wiki/Programming_Fundamentals/Functions">Programming Functions</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    関数とは、単一のタスクを実行するために使用される、整理されたコードのブロックです。これらはアプリケーションに優れたモジュール性と再利用性を提供します。
  </base-disclaimer-content>
</base-disclaimer>

## Function Arguments

関数は `arguments` と `return values` を受け取ることができます。

次の例では、関数 **say_hello** は引数 "name" を受け取り、挨拶を出力します。

```python
# 1 つの引数を受け取る関数を定義
def say_hello(name):
   print(f'Hello {name}')

# 文字列引数で関数を呼び出す
say_hello('Carlos')
```

```output
Hello Carlos
```

```python
say_hello('Wanda')
```

```output
Hello Wanda
```

```python
say_hello('Rose')
```

```output
Hello Rose
```

## Keyword Arguments

コードの可読性を向上させるために、できる限り明示的であるべきです。これは、関数で `Keyword Arguments` を使用することで実現できます。

```python
# 複数のパラメータを持つ関数
def say_hi(name, greeting):
   print(f"{greeting} {name}")

# 位置引数：順序が重要
say_hi('John', 'Hello')
```

```output
Hello John
```

```python
# キーワード引数：順序は重要ではなく、より読みやすい
say_hi(name='Anna', greeting='Hi')
```

```output
Hi Anna
```

## Return Values

`def` ステートメントを使用して関数を作成する場合、`return` ステートメントで返される値を指定できます。return ステートメントは以下で構成されます。

- `return` キーワード。

- 関数が返す値または式。

```python
# return ステートメントを使用して値を返す関数
def sum_two_numbers(number_1, number_2):
   return number_1 + number_2

# 関数を呼び出し、返された値を格納する
result = sum_two_numbers(7, 8)
print(result)
```

```output
15
```

## Local and Global Scope

- グローバルスコープのコードはローカル変数を使用できません。

- ただし、ローカルスコープはグローバル変数にアクセスできます。

- 関数のローカルスコープ内のコードは、他のローカルスコープの変数を使用できません。

- 異なるスコープにある場合、異なる変数に同じ名前を使用できます。つまり、spam という名前のローカル変数と、同じく spam という名前のグローバル変数が存在できます。

```python
# グローバル変数：どこからでもアクセス可能
global_variable = 'I am available everywhere'

def some_function():
    print(global_variable)  # グローバル変数にアクセス可能
    # ローカル変数：この関数内でのみ存在する
    local_variable = "only available within this function"
    print(local_variable)

# これは NameError を発生させます：local_variable はグローバルスコープに存在しません
print(local_variable)
```

```output
Traceback (most recent call last):
  File "<stdin>", line 10, in <module>
NameError: name 'local_variable' is not defined
```

## The global Statement

関数内でグローバル変数を変更する必要がある場合は、global ステートメントを使用します。

```python
# 関数内からグローバル変数を変更するために 'global' キーワードを使用
def spam():
    global eggs  # グローバル変数を変更することを宣言
    eggs = 'spam'  # これによりグローバル変数が変更される

eggs = 'global'
spam()  # 関数がグローバル変数を変更する
print(eggs)  # 'spam' と出力され、'global' ではない
```

```output
spam
```

変数がローカルスコープにあるかグローバルスコープにあるかを判断するには、4 つのルールがあります。

1. 変数がグローバルスコープ（つまり、すべての関数の外側）で使用されている場合、それは常にグローバル変数です。

1. 関数内でその変数に対して global ステートメントがある場合、それはグローバル変数です。

1. それ以外の場合、関数内でその変数が代入ステートメントで使用されている場合、それはローカル変数です。

1. ただし、変数が代入ステートメントで使用されていない場合、それはグローバル変数です。

## Lambda Functions

Python では、ラムダ関数は単一行の無名関数であり、任意の数の引数を取ることができますが、式は 1 つしか持つことができません。

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/ast.html?highlight=lambda#function-and-class-definitions">Python 3 チュートリアル</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
    lambda は、式の中で使用できる最小限の関数定義です。FunctionDef とは異なり、body は単一のノードを保持します。
  </base-disclaimer-content>
</base-disclaimer>

<base-warning>
  <base-warning-title>
    単一行の式
  </base-warning-title>
  <base-warning-content>
    ラムダ関数は、単一行のコードのような式のみを評価できます。
  </base-warning-content>
</base-warning>

この関数：

```python
# 通常の関数定義
def add(x, y):
    return x + y

add(5, 3)
```

```output
8
```

は、_lambda_ 関数と等価です。

```python
# ラムダ関数：1 行で定義される無名関数
# 構文：lambda 引数：式
add = lambda x, y: x + y
add(5, 3)
```

```output
8
```

通常のネストされた関数と同様に、ラムダも辞書的クロージャとして機能します。

```python
# ラムダクロージャ：外部スコープから変数をキャプチャするラムダ関数
def make_adder(n):
    return lambda x: x + n  # ラムダは外部関数から 'n' をキャプチャする

# 異なる量の加算を行う関数を作成
plus_3 = make_adder(3)  # 3 を加算するラムダを返す
plus_5 = make_adder(5)  # 5 を加算するラムダを返す

plus_3(4)  # 4 + 3 = 7 を返す
```

```output
7
```

```python
plus_5(4)
```

```output
9
```

## Relevant links

- <router-link to="/blog/python-easy-args-kwargs">\*args と \*\*kwargs の解説</router-link>
- <router-link to="/cheatsheet/args-and-kwargs">Args と Kwargs</router-link>
- <router-link to="/cheatsheet/decorators">デコレータ</router-link>
- <router-link to="/cheatsheet/control-flow">制御フロー</router-link>
- <router-link to="/cheatsheet/basics">基本</router-link>
- <router-link to="/builtin">組み込み関数</router-link>
