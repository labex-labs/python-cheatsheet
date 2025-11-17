---
title: 'Python 組み込み関数 callable() - Python チートシート'
description: 'オブジェクト引数が呼び出し可能であれば True を返します。呼び出し可能でない場合は False を返します。True の場合でも呼び出しが失敗する可能性はありますが、False の場合はオブジェクトを呼び出すことは決して成功しません。クラスは呼び出し可能であり（クラスを呼び出すと新しいインスタンスが返されます）、クラスに__call__() メソッドがある場合、インスタンスも呼び出し可能です。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python callable() ビルトイン関数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#callable">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
    オブジェクト引数が呼び出し可能（callable）であれば True を、そうでなければ False を返します。これが True を返す場合でも、呼び出しが失敗する可能性はありますが、False の場合は object を呼び出しても決して成功しません。クラスは呼び出し可能であること（クラスを呼び出すと新しいインスタンスが返されます）、インスタンスはクラスに __call__() メソッドがある場合に呼び出し可能であることに注意してください。
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Python において、`callable()` 関数は、オブジェクトが呼び出し可能であるかどうか（関数として呼び出すことができるかどうか）を判断するために使用できるビルトイン関数です。

これは、渡されたオブジェクトが呼び出し可能であれば `True` を、そうでなければ `False` を返します。例えば、関数、メソッド、クラス、ラムダ関数、ジェネレータはすべて Python において呼び出し可能なオブジェクトです。

`callable()` 関数の使用例を以下に示します。

```python
def my_function():
    pass

class MyClass:
    def __call__(self):
        pass

x = 5
y = my_function
z = MyClass()
a = lambda: None

print(callable(x))
print(callable(y))
print(callable(z))
print(callable(a))
```

出力：

```plaintext
False
True
True
True
```

上記の例では、`my_function` は関数であり呼び出し可能であり、`MyClass` はクラスであり `__call__` メソッドを持っているため呼び出し可能です。`z` はクラス `MyClass` のインスタンスであり、`__call__` メソッドを持っているため呼び出し可能です。また、`a` はラムダ関数であり呼び出し可能です。

`callable()` 関数は、コールバックやその他の種類の関数ポインタを扱う場合など、オブジェクトを関数として呼び出す必要がある状況で役立ちます。

## Relevant links

- <router-link :to="'/builtin/hasattr'">hasattr()</router-link>
- <router-link :to="'/cheatsheet/functions'">Functions</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP Basics</router-link>
- <router-link :to="'/builtin/getattr'">getattr()</router-link>
- <router-link :to="'/builtin/isinstance'">isinstance()</router-link>
