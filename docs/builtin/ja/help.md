---
title: 'Python 組み込み関数 help() - Python チートシート'
description: '組み込みヘルプシステムを呼び出します。 (この関数は対話型での使用を意図しています。) 引数がない場合、インタープリタコンソールで対話型ヘルプシステムが起動します。引数が文字列の場合、その文字列はモジュール、関数、クラス、メソッド、キーワード、またはドキュメントトピックの名前として検索され、ヘルプページがコンソールに出力されます。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 組み込み関数 help()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#help">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
   組み込みのヘルプシステムを呼び出します。（この関数は対話型での使用を意図しています。）引数なしで呼び出された場合、インタープリタコンソールで対話型ヘルプシステムが開始されます。引数が文字列である場合、その文字列はモジュール、関数、クラス、メソッド、キーワード、またはドキュメントトピックの名前として検索され、ヘルプページがコンソールに出力されます。
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Python の`help()`関数は、Python の広範なヘルプシステムへのアクセスを提供する組み込みユーティリティです。これは、対話的な探索や学習に特に役立ちます。Python インタープリタ内でモジュール、関数、クラス、キーワードのドキュメントを直接取得できるためです。引数なしで呼び出されると対話型ヘルプセッションが開始され、それ以外の場合は指定されたオブジェクトのヘルプが出力されます。

## Examples

```python
help(type)
```

Output:

```plaintext
Help on class type in module builtins:

class type(object)
 |  type(object_or_name, bases, dict)
 |  type(object) -> the object's type
 |  type(name, bases, dict) -> a new type
 |
 |  Methods defined here:
 |
 |  __call__(self, /, *args, **kwargs)
 |      Call self as a function.
 |
 |  __delattr__(self, name, /)
 |      Implement delattr(self, name).
 |
 |  __dir__(self, /)
 |      Specialized __dir__ implementation for types.
 |
 |  __getattribute__(self, name, /)
 :
```

```python
help(str)
```

Output:

```plaintext
Help on class str in module builtins:

class str(object)
 |  str(object='') -> str
 |  str(bytes_or_buffer[, encoding[, errors]]) -> str
 |
 |  Create a new string object from the given object. If encoding or
 |  errors is specified, then the object must expose a data buffer
 |  that will be decoded using the given encoding and error handler.
 |  Otherwise, returns the result of object.__str__() (if defined)
 |  or repr(object).
 |  encoding defaults to sys.getdefaultencoding().
 |  errors defaults to 'strict'.
 |
 |  Methods defined here:
 :
```

```python
help(help)
```

Output:

```plaintext
Help on _Helper in module _sitebuiltins object:

class _Helper(builtins.object)
 |  Define the builtin 'help'.
 |
 |  This is a wrapper around pydoc.help that provides a helpful message
 |  when 'help' is typed at the Python interactive prompt.
 |
 |  Calling help() at the Python prompt starts an interactive help session.
 |  Calling help(thing) prints help for the python object 'thing'.
 |
 |  Methods defined here:
 |
 |  __call__(self, *args, **kwds)
 |      Call self as a function.
 :
```

## Relevant links

- <router-link :to="'/builtin/dir'">dir()</router-link>
- <router-link :to="'/builtin/globals'">globals()</router-link>
- <router-link :to="'/builtin/locals'">locals()</router-link>
- <router-link :to="'/builtin/type'">type()</router-link>
- <router-link :to="'/builtin/vars'">vars()</router-link>
- <router-link :to="'/cheatsheet/debugging'">Debugging</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP Basics</router-link>
