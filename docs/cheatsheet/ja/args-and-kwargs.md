---
title: 'Python の Args と Kwargs - Python チートシート'
description: 'args と kwargs は難しそうに見えるかもしれませんが、実際には理解が難しくなく、関数に柔軟性と可読性を与える力を持っています'
labUrl: 'https://labex.io/ja/labs/python-python-args-and-kwargs-633646?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Args と Kwargs
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    <a href="https://docs.python.org/3/tutorial/index.html">Python args and kwargs Made Easy</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    <code>*args</code> と <code>**kwargs</code> は恐ろしく見えるかもしれませんが、実際には習得が難しくなく、関数に多くの柔軟性を与える力を持っています。
  </base-disclaimer-content>
</base-disclaimer>

より深い入門については、記事 <router-link to="/blog/python-easy-args-kwargs">Python \*args と \*\*kwargs Made Easy</router-link> をお読みください。

## Args と Kwargs

`*args` と `**kwargs` を使用すると、関数を呼び出す際に、未定義の数の引数とキーワードを渡すことができます。

```python
# 任意の数の位置引数とキーワード引数を受け入れる関数を定義
def some_function(*args, **kwargs):
    pass

# 任意の数の位置引数で呼び出す
some_function(arg1, arg2, arg3)

# 任意の数のキーワード引数で呼び出す
some_function(key1=arg1, key2=arg2, key3=arg3)

# 位置引数とキーワード引数の両方で呼び出す
some_function(arg, key1=arg1)

# または、引数なしで呼び出す
some_function()
```

<base-warning>
  <base-warning-title>
    Python の慣習
  </base-warning-title>
  <base-warning-content>
    <code>*args</code> と <code>**kwargs</code> という単語は慣習です。インタープリタによって強制されるものではありませんが、Python コミュニティによって良い習慣と見なされています。
  </base-warning-content>
</base-warning>

## args

引数は `args` 変数を通じてアクセスできます。

```python
# *args は位置引数をタプルに収集します
def some_function(*args):
    print(f'Arguments passed: {args} as {type(args)}')

# 複数の引数を渡す - それらは args タプルに収集されます
some_function('arg1', 'arg2', 'arg3')
```

```output
Arguments passed: ('arg1', 'arg2', 'arg3') as <class 'tuple'>
```

## kwargs

キーワードは `kwargs` 変数を通じてアクセスされます。

```python
# **kwargs はキーワード引数を辞書に収集します
def some_function(**kwargs):
    print(f'keywords: {kwargs} as {type(kwargs)}')

# キーワード引数を渡す - それらは kwargs 辞書に収集されます
some_function(key1='arg1', key2='arg2')
```

```output
keywords: {'key1': 'arg1', 'key2': 'arg2'} as <class 'dict'>
```

## 関連リンク

- <router-link to="/cheatsheet/functions">Functions</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Lists and Tuples</router-link>
- <router-link to="/cheatsheet/dictionaries">Python Dictionaries</router-link>
- <router-link to="/blog/python-easy-args-kwargs">Python \*args と \*\*kwargs Made Easy</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
