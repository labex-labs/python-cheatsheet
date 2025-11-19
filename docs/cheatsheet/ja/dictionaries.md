---
title: 'Python 辞書 - Python チートシート'
description: 'Python の辞書は、キーと値のペアを順序付けて格納するコレクションです（Python 3.7 以降、挿入順序が保持されます）。'
labUrl: 'https://labex.io/ja/labs/python-python-dictionaries-633655?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 辞書
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Python では、辞書は`key`: `value`ペアの**順序付けられた**（Python > 3.7 以降）コレクションです。

<base-disclaimer>
  <base-disclaimer-title>
    Python 3 の<a target="_blank" href="https://docs.python.org/3/tutorial/datastructures.html#dictionaries">ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
    辞書に対する主な操作は、あるキーに関連付けられた値を格納することと、キーが与えられたときにその値を取り出すことです。また、<code>del</code>を使ってキー:値のペアを削除することも可能です。
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
# サブスクリプト演算子を使用した辞書エントリの追加または更新
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

キーが辞書内に存在しない場合、<a target="_blank" href="https://docs.python.org/3/library/exceptions.html#KeyError">`KeyError`</a>が発生します。

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

`values()`メソッドは辞書の**値**を取得します。

```python
# .values() メソッドを使用した辞書の値の反復処理
pet = {'color': 'red', 'age': 42}
for value in pet.values():  # すべての値に対してループ
    print(value)
```

```output
red
42
```

## keys()

`keys()`メソッドは辞書の**キー**を取得します。

```python
# .keys() メソッドを使用した辞書のキーの反復処理
pet = {'color': 'red', 'age': 42}
for key in pet.keys():  # すべてのキーに対してループ
    print(key)
```

```output
color
age
```

デフォルトではキーをループするため、**.keys()**を使用する必要はありません。

```python
# 辞書を直接反復処理するとキーがループされる (デフォルトの動作)
pet = {'color': 'red', 'age': 42}
for key in pet:  # for key in pet.keys() と同等
    print(key)
```

```output
color
age
```

## items()

`items()`メソッドは辞書の**アイテム**を取得し、それらを<router-link to=/cheatsheet/lists-and-tuples#the-tuple-data-type>タプル</router-link>として返します。

```python
pet = {'color': 'red', 'age': 42}
for item in pet.items():
    print(item)
```

```output
('color', 'red')
('age', 42)
```

`keys()`、`values()`、`items()`メソッドを使用すると、for ループはそれぞれキー、値、またはキーと値のペアを辞書内で反復処理できます。

```python
# .items() メソッドを使用したキーと値のペアの反復処理
pet = {'color': 'red', 'age': 42}
for key, value in pet.items():  # タプルをキーと値にアンパック
    print(f'Key: {key} Value: {value}')
```

```output
Key: color Value: red
Key: age Value: 42
```

## get()

`get()`メソッドは、指定されたキーを持つアイテムの値を返します。キーが存在しない場合は、`None`を返します。

```python
# .get() メソッド：値を安全に取得し、キーが存在しない場合は None を返す
wife = {'name': 'Rose', 'age': 33}

f'My wife name is {wife.get("name")}'  # 'Rose'を返す
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

デフォルトの`None`値を任意の指定した値に変更することもできます。

```python
wife = {'name': 'Rose', 'age': 33}

f'She is deeply in love with {wife.get("husband", "lover")}'
```

```output
'She is deeply in love with lover'
```

## setdefault() を使用したアイテムの追加

このようにして辞書にアイテムを追加することが可能です。

```python
wife = {'name': 'Rose', 'age': 33}
if 'has_hair' not in wife:
    wife['has_hair'] = True
```

`setdefault`メソッドを使用すると、同じコードをより短く記述できます。

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

`pop()`メソッドは、指定されたキーに基づいてアイテムを削除し、その値を返します。

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

### popitem()

`popitem()`メソッドは、辞書内の最後のアイテムを削除し、それを返します。

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

### del()

`del()`メソッドは、指定されたキーに基づいてアイテムを削除します。

```python
wife = {'name': 'Rose', 'age': 33, 'hair': 'brown'}
del wife['age']
wife
```

```output
{'name': 'Rose', 'hair': 'brown'}
```

### clear()

`clear()`メソッドは、辞書内のすべてのアイテムを削除します。

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

Python 3.5 以降：

```python
dict_a = {'a': 1, 'b': 2}
dict_b = {'b': 3, 'c': 4}
dict_c = {**dict_a, **dict_b}
dict_c
```

```output
{'a': 1, 'b': 3, 'c': 4}
```

## 関連リンク

- <router-link to="/blog/python-data-types">Python データ型ブログ投稿</router-link>
- <router-link to="/blog/python-easy-args-kwargs">Python \*args と\*\*kwargs の簡単な使い方</router-link>
- <router-link to="/cheatsheet/comprehensions">内包表記</router-link>
- <router-link to="/cheatsheet/args-and-kwargs">Args と Kwargs</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">Python 内包表記のステップバイステップ</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
