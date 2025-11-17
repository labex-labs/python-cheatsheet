---
title: 'Python 内包表記：ステップバイステップ入門 - Python チートシート'
description: 'この記事では、for ループを作成し、それをステップバイステップで内包表記に書き換える方法を解説します。'
date: 'March 22, 2019'
updated: 'July 3, 2022'
tags: 'python, basics'
socialImage: '/blog/python-comprehensions.png'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "Python 内包表記：ステップバイステップ入門 - Python チートシート"
    description: "この記事では、for ループを作成し、それをステップバイステップで内包表記に書き換える方法を解説します。"
    date: "March 22, 2019"
    updated: "July 3, 2022"
    tags: "python, basics"
    socialImage: "/blog/python-comprehensions.png"
</route>

<blog-title-header :frontmatter="frontmatter" title="Python内包表記：ステップバイステップ入門 - Pythonチートシート" />

_List Comprehensions_ は、他のリストからリストを作成するための特殊な構文です（[Wikipedia](https://en.wikipedia.org/wiki/List_comprehension)、[The Python Tutorial](https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions)）。これらは、数値や、1 つまたは 2 つのレベルのネストされた _for loops_ を扱う場合に非常に役立ちますが、それ以上になると、読みにくくなりすぎる可能性があります。

この記事では、いくつかの _For Loops_ を作成し、それらを段階的に _Comprehensions_ に書き直していきます。

## Basics

実際には、_List Comprehensions_ はそれほど複雑ではありませんが、最初は少し奇妙に見えるため、理解するのがまだ少し難しいです。なぜでしょうか？それは、記述される順序が、通常 _For Loop_ で見る順序と**逆**になっているからです。

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
>>> for n in names:
...     print(n)
# Charles
# Susan
# Patrick
# George
# Carol
```

これを _List Comprehension_ で行うには、_loop_ の一番最後から始めます。

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
>>> [print(n) for n in names]
# Charles
# Susan
# Patrick
# George
# Carol
```

順序が反転していることに注目してください。

- 最初に、ループの結果がどうなるか `[print(n) ...]`。
- 次に、各アイテムを格納する変数を定義し、作業対象となる `List`、`Set`、または `Dictionary` を指し示します `[... for n in names]`。

## Creating a new List with a Comprehension

> これは _List Comprehension_ の主な用途です。他の用途は、あなたや他の人にとって読みにくいコードになる可能性があります。

_For Loop_ を使用して既存のコレクションから新しいリストを作成する方法は次のとおりです。

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']

>>> new_list = []
>>> for n in names:
...     new_list.append(n)

>>> print(new_list)
# ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
```

そして、_List Comprehension_ で同じことを行う方法は次のとおりです。

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
>>> new_list = [n for n in names]
>>> print(new_list)
# ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
```

これが可能な理由は、_List Comprehension_ の標準動作がリストを返すことだからです。

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
>>> [n for n in names]
# ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
```

## Adding Conditionals

もし `new_list` に 'C' で始まる名前だけを含めたい場合はどうでしょうか？_For Loop_ では、次のように行います。

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']

>>> new_list = []
>>> for n in names:
...     if n.startswith('C'):
...         new_list.append(n)

>>> print(new_list)
# ['Charles', 'Carol']
```

_List Comprehension_ では、if ステートメントを末尾に追加します。

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
>>> new_list = [n for n in names if n.startswith('C')]
>>> print(new_list)
# ['Charles', 'Carol']
```

ずっと読みやすくなります。

## Formatting long List Comprehensions

今回は、`new_list` に 'C' で始まる名前だけでなく、'e' で終わる名前や 'k' を含む名前も含まれるようにしたいとします。

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
>>> new_list = [n for n in names if n.startswith('C') or n.endswith('e') or 'k' in n]
>>> print(new_list)
# ['Charles', 'Patrick', 'George', 'Carol']
```

これはかなり煩雑です。幸いなことに、_Comprehensions_ を異なる行に分割することが可能です。

```python
new_list = [
    n
    for n in names
    if n.startswith("C")
    or n.endswith("e")
    or "k" in n
]
```

## Set and Dict Comprehensions

_List Comprehensions_ の基本を学んだなら...おめでとうございます！あなたはそれを <router-link to="/cheatsheet/sets">Sets</router-link> と <router-link to="/cheatsheet/dictionaries">Dictionaries</router-link> でも行ったことになります。

### Set comprehension

```python
>>> my_set = {"abc", "def"}

>>> # ここでは、for loop を使って大文字の要素を持つ新しいセットを作成します
>>> new_set = set()
>>> for s in my_set:
...    new_set.add(s.upper())
>>> print(new_set)
# {'DEF', 'ABC'}

>>> # 同じことを、set comprehension で行います
>>> new_set = {s.upper() for s in my_set}
>>> print(new_set)
# {'DEF', 'ABC'}
```

### Dict comprehension

```python
>>> my_dict = {'name': 'Christine', 'age': 98}

>>> # for loop を使って既存の辞書から新しい辞書を作成します
>>> new_dict = {}
>>> for key, value in my_dict.items():
...     new_dict[key] = value
>>> print(new_dict)
# {'name': 'Christine', 'age': 98}

# dict comprehension を使用
>>> new_dict = {key: value for key, value in my_dict.items()}  # ":" に注目
>>> print(new_dict)
# {'name': 'Christine', 'age': 98}
```

> 推奨記事：[Python Sets: What, Why and How ](https://www.pythoncheatsheet.org/blog/python-sets-what-why-how).

## Conclusion

新しいことを学ぶたびに、それをすぐに使いたいという衝動に駆られます。そうなったとき、私は立ち止まって一瞬考えるように自分に言い聞かせます... この大きく、ネストされ、すでに煩雑に見える _For Loop_ を _List Comprehension_ に変更すべきでしょうか？おそらくそうではありません。

> 可読性は重要です。[The Zen of Python](https://www.python.org/dev/peps/pep-0020/).
