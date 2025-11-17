---
title: 'Python の*args と**kwargs を簡単に理解する - Python チートシート'
description: '*args と**kwargs は難しそうに見えますが、実際は理解しやすく、関数に大きな柔軟性を与える力を持っています。'
date: 'March 08, 2019'
updated: 'July 1, 2022'
tags: 'python, intermediate'
socialImage: '/blog/kwargs.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "Python の*args と**kwargs を簡単に理解する - Python チートシート"
    description: "*args と**kwargs は難しそうに見えますが、実際は理解しやすく、関数に大きな柔軟性を与える力を持っています。"
    date: "March 08, 2019"
    updated: "July 1, 2022"
    tags: "python, intermediate"
    socialImage: "/blog/kwargs.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="Python の\*args と\*\*kwargs を簡単に理解する - Python チートシート" />

私についてはわかりませんが、`*args` と `**kwargs` を引数として持つ関数を見るたびに、少し怖くなりました。Django を使ったバックエンド作業で、何も理解せずに「使用」したことさえあります。私のような独学のデベロッパーなら、あなたも同じ経験をしたことがあるはずです。

数ヶ月前、私は怠けるのをやめてリサーチを始めました。驚いたことに、それらはインタープリタで試すときは理解しやすかったのですが、それらについて読むときはそうではありませんでした。私は、誰かに説明してほしかった方法で、[args と kwargs](https://www.pythoncheatsheet.org/#args-and-kwargs) を説明しようと、この記事を書きました。

## 基本

最初に知っておくべきことは、`*args` と `**kwargs` を使うと、[関数](https://www.pythoncheatsheet.org/#Functions) を呼び出す際に、未定義の数の `arguments` と `keywords` を渡せるということです。

```python
def some_function(*args, **kwargs):
    pass

# あらゆる数の引数で some_function を呼び出す
some_function(arg1, arg2, arg3)

# あらゆる数のキーワードで some_function を呼び出す
some_function(key1=arg1, key2=arg2, key3=arg3)

# 引数とキーワードの両方を呼び出す
some_function(arg, key1=arg1)

# または何もない
some_function()
```

第二に、`args` と `kwargs` という単語は慣習です。これは、インタープリタによって強制されるものではなく、Python コミュニティ内で良い習慣と見なされていることを意味します。

```python
# この関数は問題なく動作します
def some_function(*arguments, **keywords):
    pass
```

<base-warning>
  <base-warning-title>
    慣習についての注意
  </base-warning-title>
  <base-warning-content>
    上記の関数は動作しますが、そうしないでください。慣習は、あなた自身やあなたのプロジェクトに関心を持つ可能性のある誰にとっても、読みやすいコードを書くのに役立つために存在します。
    その他の慣習には、4 スペースのインデント、コメント、インポートがあります。<a target="_blank" href="https://www.python.org/dev/peps/pep-0008/">PEP 8 -- Python コードのスタイルガイド</a>を読むことを強くお勧めします。
  </base-warning-content>
</base-warning>

では、Python はどのようにして、関数が複数の引数とキーワードを受け入れることを知るのでしょうか？はい、答えは `*` と `**` 演算子です。

基本をカバーしたので、それらを使って作業しましょう👊。

## args

これで、`*args` を関数へのパラメーターとして使用して複数の引数を渡す方法がわかりましたが、それらをどのように扱うのでしょうか？簡単です。すべての引数は、`args` 変数内に [タプル](https://www.pythoncheatsheet.org/#Tuple-Data-Type) として格納されています。

```python
def some_function(*args):
    print(f'Arguments passed: {args} as {type(args)}')


some_function('arg1', 'arg2', 'arg3')
# Arguments passed: ('arg1', 'arg2', 'arg3') as <class 'tuple'>
```

それらを反復処理できます。

```python
def some_function(*args):
    for a in args:
        print(a)


some_function('arg1', 'arg2', 'arg3')
# arg1
# arg2
# arg3
```

インデックスで要素にアクセスします。

```python
def some_function(*args):
    print(args[1])


some_function('arg1', 'arg2', 'arg3')  # arg2
```

スライスします。

```python
def some_function(*args):
    print(args[0:2])


some_function('arg1', 'arg2', 'arg3')
# ('arg1', 'arg2')
```

[タプル](https://www.pythoncheatsheet.org/#Tuple-Data-Type) でできることは何でも、`args` で実行できます。

## kwargs

引数は `args` 変数内にありますが、キーワードは `kwargs` 内にあり、今回はキーがキーワードとなる [辞書](https://www.pythoncheatsheet.org/#Dictionaries-and-Structuring-Data) として格納されます。

```python
def some_function(**kwargs):
    print(f'keywords: {kwargs} as {type(kwargs)}')


some_function(key1='arg1', key2='arg2', key3='arg3')
# keywords: {'key1': 'arg1', 'key2': 'arg2', 'key3': 'arg3'} as <class 'dict'>
```

ここでも、`kwargs` に対して、任意の [辞書](https://www.pythoncheatsheet.org/#Dictionaries-and-Structuring-Data) に対して行うのと同じことを行うことができます。

反復処理します。

```python
def some_function(**kwargs):
    for key, value in kwargs.items():
        print(f'{key}: {value}')


some_function(key1='arg1', key2='arg2', key3='arg3')
# key1: arg1
# key2: arg2
# key3: arg3
```

`get()` メソッドを使用します。

```python
def some_function(key, **kwargs):
    print(kwargs.get(key))


some_function('key3', key1='arg1', key2='arg2', key3='arg3')
# arg3
```

そして、[もっとたくさん](https://www.pythoncheatsheet.org/#Dictionaries-and-Structuring-Data) あります =)。

## 結論

`*args` と `**kwargs` は恐ろしく見えるかもしれませんが、実際には理解するのはそれほど難しくなく、関数に多くの柔軟性を与える力を持っています。[タプル](https://www.pythoncheatsheet.org/#Tuple-Data-Type) と [辞書](https://www.pythoncheatsheet.org/#Dictionaries-and-Structuring-Data) について知っていれば、準備完了です。

args と kwargs を試してみたいですか？[こちら](https://mybinder.org/v2/gh/wilfredinni/python-cheatsheet/master?filepath=jupyter_notebooks) は、試すためのオンライン Jupyter Notebook です。

いくつかの例では、Python 3.6 以降で文字列をフォーマットする比較的新しい方法である `f-string` を使用しています。それについてもっと読むには[こちら](https://www.pythoncheatsheet.org/#Formatted-String-Literals-or-f-strings)をご覧ください。
