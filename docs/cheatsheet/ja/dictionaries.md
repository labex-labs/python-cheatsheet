---
title: 'Python 辞書 - Python チートシート'
description: 'Python の辞書は、キーと値のペアを順序付けて格納するコレクションです（Python 3.7 以降、挿入順序が保持されます）。'
labUrl: 'https://labex.io/ja/labs/python-python-dictionaries-633655?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 辞書
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Python において、辞書（dictionary）は、_順序付けられた_（Python > 3.7 以降）`key`: `value` ペアのコレクションです。

<base-disclaimer>
  <base-disclaimer-title>
    Python 3 の <a target="_blank" href="https://docs.python.org/3/tutorial/datastructures.html#dictionaries">ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
    辞書に対する主な操作は、あるキーに関連付けられた値を格納することと、キーが与えられたときにその値を取り出すことです。また、<code>del</code> を使ってキー:値のペアを削除することも可能です。
  </base-disclaimer-content>
</base-disclaimer>

辞書の例：

```python
# 辞書：キーと値のペアのコレクション
my_cat = {
    'size': 'fat',          # key: 'size', value: 'fat'
    'color': 'gray',         # key: 'color', value: 'gray'
    'disposition': 'loud'    # key: 'disposition', value: 'loud'
}
```

## サブスクリプト演算子 `[]` を使用したキーと値の設定

```python
# サブスクリプト演算子を使用して辞書のエントリを追加または更新
my_cat = {
 'size': 'fat',
 'color': 'gray',
 'disposition': 'loud',
}
my_cat['age_years'] = 2  # 新しいキーと値のペアを追加
print(my_cat)
```

```output
{'size': 'fat', 'color': 'gray', 'disposition': 'loud', 'age_years': 2}
```

## サブスクリプト演算子 `[]` を使用した値の取得

キーが辞書内に存在しない場合、<a target="_blank" href="https://docs.python.org/3/library/exceptions.html#KeyError">`KeyError`</a> が発生します。

```python
my_cat = {
 'size': 'fat',
 'color': 'gray',
 'disposition': 'loud',
}
print(my_cat['size'])
```

```output
fat
```

```python
print(my_cat['eye_color'])
```

```output
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
KeyError: 'eye_color'
```

## values()

`values()` メソッドは、辞書の**値**を取得します。

```python
# .values() メソッドを使用して辞書の値のイテレーション
pet = {'color': 'red', 'age': 42}
for value in pet.values():  # すべての値に対してループ
    print(value)
```

```output
red
42
```

## keys()

`keys()` メソッドは、辞書の**キー**を取得します。

```python
# .keys() メソッドを使用して辞書のキーのイテレーション
pet = {'color': 'red', 'age': 42}
for key in pet.keys():  # すべてのキーに対してループ
    print(key)
```

```output
color
age
```

デフォルトではキーをループするため、**.keys()** を使用する必要はありません。

```python
# 辞書を直接イテレートするとキーがループされる (デフォルトの動作)
pet = {'color': 'red', 'age': 42}
for key in pet:  # for key in pet.keys() と同等
    print(key)
```

```output
color
age
```

## items()

`items()` メソッドは、辞書の**アイテム**を取得し、それらを <router-link to=/cheatsheet/lists-and-tuples#the-tuple-data-type>タプル</router-link> として返します。

```python
pet = {'color': 'red', 'age': 42}
for item in pet.items():
    print(item)
```

```output
('color', 'red')
('age', 42)
```

`keys()`, `values()`, および `items()` メソッドを使用すると、for ループでそれぞれキー、値、またはキーと値のペアを辞書内でイテレートできます。

```python
# .items() メソッドを使用してキーと値のペアのイテレーション
pet = {'color': 'red', 'age': 42}
for key, value in pet.items():  # タプルを key と value にアンパック
    print(f'Key: {key} Value: {value}')
```

```output
Key: color Value: red
Key: age Value: 42
```

## get()

`get()` メソッドは、指定されたキーを持つアイテムの値を返します。キーが存在しない場合は、`None` を返します。

```python
# .get() メソッド：値を安全に取得し、キーが存在しない場合は None を返す
wife = {'name': 'Rose', 'age': 33}

f'My wife name is {wife.get("name")}'  # 'Rose' を返す
```

```output
'My wife name is Rose'
```

```python
f'She is {wife.get("age")} years old.'
```

```output
'She is 33 years old.'
```

```python
f'She is deeply in love with {wife.get("husband")}'
```

```output
'She is deeply in love with None'
```

デフォルトの `None` 値を任意のデフォルト値に変更することもできます。

```python
wife = {'name': 'Rose', 'age': 33}

f'She is deeply in love with {wife.get("husband", "lover")}'
```

```output
'She is deeply in love with lover'
```

## setdefault() を使用したアイテムの追加

次のような方法で辞書にアイテムを追加できます。

```python
wife = {'name': 'Rose', 'age': 33}
if 'has_hair' not in wife:
    wife['has_hair'] = True
```

`setdefault` メソッドを使用すると、同じコードをより短く記述できます。

```python
wife = {'name': 'Rose', 'age': 33}
wife.setdefault('has_hair', True)
wife
```

```output
{'name': 'Rose', 'age': 33, 'has_hair': True}
```

## アイテムの削除

### pop()

`pop()` メソッドは、指定されたキーに基づいてアイテムを削除し、その値を返します。

```python
wife = {'name': 'Rose', 'age': 33, 'hair': 'brown'}
wife.pop('age')
```

```output
33
```

```python
wife
```

```output
{'name': 'Rose', 'hair': 'brown'}
```

<BaseQuiz id="cheatsheet-dictionaries-1" correct="B">
<template #question>
辞書に対して <code>pop()</code> が呼び出された場合、何が起こりますか？
</template>

<BaseQuizOption value="A">A. キーと値のペアのみが削除される</BaseQuizOption>
<BaseQuizOption value="B" correct>B. 指定されたキーの値が削除され、その値が返される</BaseQuizOption>
<BaseQuizOption value="C">C. 値が返されるだけで、削除はされない</BaseQuizOption>
<BaseQuizOption value="D">D. 辞書内のすべてのアイテムが削除される</BaseQuizOption>
<BaseQuizAnswer><code>pop()</code> メソッドは、指定されたキーのキーと値のペアを削除し、その値を返します。キーが存在しない場合は、<code>KeyError</code> が発生します (デフォルト値が指定されていない限り)。</BaseQuizAnswer>
</BaseQuiz>

### popitem()

`popitem()` メソッドは、辞書内の最後のアイテムを削除し、それを返します。

```python
wife = {'name': 'Rose', 'age': 33, 'hair': 'brown'}
wife.popitem()
```

```output
('hair', 'brown')
```

```python
wife
```

```output
{'name': 'Rose', 'age': 33}
```

### del

`del` メソッドは、指定されたキーに基づいてアイテムを削除します。

```python
wife = {'name': 'Rose', 'age': 33, 'hair': 'brown'}
del wife['age']
wife
```

```output
{'name': 'Rose', 'hair': 'brown'}
```

### clear()

`clear()` メソッドは、辞書内のすべてのアイテムを削除します。

```python
wife = {'name': 'Rose', 'age': 33, 'hair': 'brown'}
wife.clear()
wife
```

```output
{}
```

## 辞書内のキーの確認

```python
person = {'name': 'Rose', 'age': 33}

'name' in person.keys()
```

```output
True
```

```python
'height' in person.keys()
```

```output
False
```

```python
'skin' in person # keys() を省略可能
```

```output
False
```

## 辞書内の値の確認

```python
person = {'name': 'Rose', 'age': 33}

'Rose' in person.values()
```

```output
True
```

```python
33 in person.values()
```

```output
True
```

## 整形して表示 (Pretty Printing)

```python
import pprint

wife = {'name': 'Rose', 'age': 33, 'has_hair': True, 'hair_color': 'brown', 'height': 1.6, 'eye_color': 'brown'}
pprint.pprint(wife)
```

```output
{'age': 33,
 'eye_color': 'brown',
 'hair_color': 'brown',
 'has_hair': True,
 'height': 1.6,
 'name': 'Rose'}
```

## 2 つの辞書の結合

Python 3.5 以降の場合：

```python
dict_a = {'a': 1, 'b': 2}
dict_b = {'b': 3, 'c': 4}
dict_c = {**dict_b, **dict_a}
dict_c
```

```output
{'b': 2, 'c': 4, 'a': 1}
```

<BaseQuiz id="cheatsheet-dictionaries-2" correct="B">
<template #question>
<code>{**dict_b, **dict_a}</code> を使用して 2 つの辞書を結合する場合、両方の辞書に同じキーがある場合、どうなりますか？
</template>

<BaseQuizOption value="A">A. <code>dict_b</code> の値が <code>dict_a</code> の値を上書きする</BaseQuizOption>
<BaseQuizOption value="B" correct>B. <code>dict_a</code> の値が <code>dict_b</code> の値を上書きする</BaseQuizOption>
<BaseQuizOption value="C">C. 両方の値がリストに保持される</BaseQuizOption>
<BaseQuizOption value="D">D. エラーが発生する</BaseQuizOption>
<BaseQuizAnswer><code>\*\*</code> アンパッキング演算子を使用して辞書を結合する場合、両方の辞書に同じキーがある場合、後に出てくる辞書 (この場合は <code>dict_a</code>) の値が、先に出てくる辞書の値よりも優先されます (上書きされます)。</BaseQuizAnswer>
</BaseQuiz>

## 関連リンク

- <router-link to="/blog/python-data-types">Python データ型ブログ記事</router-link>
- <router-link to="/blog/python-easy-args-kwargs">Python \*args と \*\*kwargs の簡単な使い方</router-link>
- <router-link to="/cheatsheet/comprehensions">内包表記</router-link>
- <router-link to="/cheatsheet/args-and-kwargs">Args と Kwargs</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">Python 内包表記 ステップバイステップ</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
