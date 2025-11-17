---
title: 'Python 組み込み関数 exec() - Python チートシート'
description: 'この関数は Python コードの動的実行をサポートします。object は文字列またはコードオブジェクトである必要があります。文字列の場合、構文エラーが発生しない限り、その文字列は Python ステートメントのスイートとして解析され、実行されます。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python exec() ビルトイン関数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#exec">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
   この関数は、Python コードの動的実行をサポートします。object は文字列またはコードオブジェクトのいずれかでなければなりません。文字列の場合、その文字列は Python ステートメントのスイートとして解析され、その後実行されます（構文エラーが発生しない限り）[...].
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Python の `exec()` 関数は、文字列に格納されている Python コードを動的に実行できるようにするビルトイン関数です。これは、ユーザーから提供されたコードを実行したい場合、実行時にコードを生成して実行したい場合、あるいはアプリケーション内にミニインタープリタやスクリプト環境を構築したい場合など、非常に強力です。ただし、適切に処理されない場合、セキュリティリスクを引き起こす可能性があるため、注意して使用する必要があります。

## Syntax

```python
exec(object[, globals[, locals]])
```

- `object`: 実行する Python コードを含む文字列。
- `globals` (オプション): グローバル名前空間を表す辞書。指定しない場合、現在のグローバル名前空間を使用します。
- `locals` (オプション): ローカル名前空間を表す辞書。指定しない場合、現在のローカル名前空間を使用します。

## Basic Usage

```python
code_to_execute = "print('Hello, exec()!')"
exec(code_to_execute)
```

Output:

```plaintext
Hello, exec()!
```

`exec()` 関数は、<router-link to="/builtin/print">print()</router-link> 関数と組み合わせて、コンソールに出力を表示するためにも使用できます。

## Executing Multiple Statements

```python
code = """
for i in range(5):
    print(i)
"""
exec(code)
```

Output:

```plaintext
0
1
2
3
4
```

この例では、`exec()` 関数を使用して for ループを実行し、<router-link to="/builtin/range">range</router-link> の数値を反復処理して、各数値をコンソールに<router-link to="/builtin/print">出力</router-link>します。

## Modifying Variables

```python
x = 10
code = "x += 5"
exec(code)
print(x)
```

Output:

```plaintext
15
```

## Using `globals` and `locals`

```python
x = 5
code = "x = x * 2"
globals_dict = {"x": 10}
locals_dict = {"x": 20}
exec(code, globals_dict, locals_dict)
print(x)
print(globals_dict)
print(locals_dict)
```

Output:

```plaintext
5
{'x': 10}
{'x': 40}
```

## Dynamic Function Creation

```python
def create_dynamic_function(name, args):
    code = f"def {name}({', '.join(args)}): return sum({args})"
    exec(code)

create_dynamic_function("add_numbers", ["a", "b", "c"])
result = add_numbers(2, 3, 5)
print(result)
```

Output:

```plaintext
10
```

この例では、`exec()` 関数を使用して動的関数を作成し、引数のリストを受け取り、それらの<router-link to="/builtin/sum">合計</router-link>を返します。

## Error Handling

```python
code = """
try:
    print(undefined_variable)
except NameError as e:
    print(f"Error: {e}")
"""
exec(code)
```

Output:

```plaintext
Error: name 'undefined_variable' is not defined
```

## Security Note

```python
user_input = input("Enter code to execute: ")
exec(user_input)  # Caution: This can be a security risk if not properly sanitized.
```

## Relevant links

- <router-link :to="'/builtin/compile'">`compile()`</router-link>
- <router-link :to="'/builtin/eval'">`eval()`</router-link>
- <router-link :to="'/builtin/globals'">`globals()`</router-link>
- <router-link :to="'/builtin/locals'">`locals()`</router-link>
- <router-link :to="'/cheatsheet/exception-handling'">Exception Handling</router-link>
- <router-link :to="'/cheatsheet/debugging'">Debugging</router-link>
