---
title: 'Python データ型解説：初心者向けビジュアルガイド'
description: 'Python の組み込みデータ型、その特性、および使用例を包括的に解説するガイドです。'
date: 'Jul 20, 2025'
updated: 'Jul 20, 2025'
tags: 'python, beginner, data types'
socialImage: '/blog/python-data-types.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "Python データ型解説：初心者向けビジュアルガイド"
    description: "Python の組み込みデータ型、その特性、および使用例を包括的に解説するガイドです。"
    date: "Jul 20, 2025"
    updated: "Jul 20, 2025"
    tags: "python, beginner, data types"
    socialImage: "/blog/python-data-types.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="Pythonデータ型解説：初心者向けビジュアルガイド" />

Python には、必要なもののほぼすべてをカバーする 9 つのコアデータ型が付属しています。適切な型を選択すると、コードがより明確になり、高速になり、安全になります。このガイドでは、各型がどのように機能するか、いつ使用するか、注意すべき点を示します。簡単な概要については、<router-link to="/cheatsheet/basics#data-types">基本ガイド</router-link>も確認してください。

Python の組み込みデータ型のカテゴリと変更可能性の図。

## 1. 数値 – `int`, `float`, `complex`

Python には、数値を扱うための 3 つの型があり、それぞれ異なる状況に合わせて設計されています。

### まずは基本的な例

```python
# 整数 - 整数
age = 25
score = 100
negative = -10

# 浮動小数点数 - 小数点を持つ数値
price = 19.99
temperature = 98.6
pi = 3.14159

# 複素数 - 実部と虚部を持つ数値 (高度な数学)
z = 2 + 3j  # j は Python における虚数単位を表す
```

| 型                                                         | 一般的なリテラル       | 主な特徴                                                                                         | 使用するタイミング                     | 便利なメソッド/演算子                      |
| :--------------------------------------------------------- | :--------------------- | :----------------------------------------------------------------------------------------------- | :------------------------------------- | :----------------------------------------- |
| <router-link to='/builtin/int'>`int`</router-link>         | `42`, `0xFF`           | メモリが許す限り大きくなる整数。バイナリ `0b`、八進数 `0o`、十六進数 `0x` リテラルをサポートする | カウント、インデックス指定、数量の保存 | `bit_length()`, `to_bytes()`               |
| <router-link to='/builtin/float'>`float`</router-link>     | `3.14`, `1.2e3`        | 小数点を持つ数値。計算でわずかな丸め誤差が発生する可能性がある                                   | 測定、平均、科学計算                   | `.is_integer()`, `.hex()`, math モジュール |
| <router-link to='/builtin/complex'>`complex`</router-link> | `2+3j`, `complex(a,b)` | 実部と虚部を持つ数値（高度な数学で使用）。`.real`, `.imag`, `.conjugate()`                       | 高度な数学、工学、信号処理             | すべての算術演算、`abs()`で大きさを取得    |

### その他の例

```python
# 整数を扱う
items = 5
total_items = items * 3  # 15

# 浮動小数点数を扱う
radius = 2.5
area = 3.14159 * radius * radius  # 19.634...

# 浮動小数点数の精度に注意
result = 0.1 + 0.2  # 0.30000000000000004 (正確には 0.3 ではない!)

# 複素数 (初心者にはあまり必要ないかもしれません)
z = complex(2, 3)     # 2+3j と同じ
magnitude = abs(z)    # 3.605...
```

## 2. 文字列 – `str`

文字列はテキストを保持し、使用する最も重要な型の一つです。より詳細な文字列操作については、<router-link to="/cheatsheet/manipulating-strings">文字列操作ガイド</router-link>を参照してください。

### 基本的な例

```python
# 文字列の作成
name = "Alice"
message = 'Hello world'
long_text = """これは
複数行の文字列です"""

# 基本的な操作
greeting = "Hello, " + name  # "Hello, Alice"
repeated = "Ha" * 3          # "HaHaHa"
length = len(message)        # 11
```

**主な特徴：**

- 不変 (Immutable): 作成後は変更できません（ただし、新しいものを作成することは可能）
- シングルクォート `'` またはダブルクォート `"` を使用
- 複数行テキストにはトリプルクォート `"""` を使用
- Unicode (絵文字、国際文字) をサポート

### 一般的な文字列操作

```python
text = "  Python Programming  "

# 便利なメソッド
clean_text = text.strip()           # "Python Programming"
words = clean_text.split()          # ["Python", "Programming"]
joined = "-".join(words)            # "Python-Programming"
upper_text = clean_text.upper()     # "PYTHON PROGRAMMING"
replaced = clean_text.replace("Python", "Java")  # "Java Programming"

# 内容の確認
starts_with_p = clean_text.startswith("Python")  # True
has_gram = "gram" in clean_text                   # True

# 最新のフォーマット (推奨)
age = 25
formatted = f"I am {age} years old"  # "I am 25 years old"
```

## 3. ブール値 – `bool`

ブール値は True または False の値を表し、コード内で決定を下すために不可欠です。<router-link to="/builtin/bool">bool() 関数</router-link>について詳しく学びましょう。

### 基本的な例

```python
# 単純なブール値
is_student = True
is_graduated = False

# ブール演算
has_degree = is_student or is_graduated  # True
ready_to_work = is_graduated and not is_student  # False
```

**真理値 (Truthiness)**: Python では、条件式において多くの値が True または False として扱われます。

```python
# これらは「真 (truthy)」です (True のように振る舞う)
if "hello":     # 空でない文字列
if [1, 2, 3]:   # 空でないリスト
if 42:          # ゼロ以外の数値

# これらは「偽 (falsy)」です (False のように振る舞う)
if "":          # 空文字列
if []:          # 空リスト
if 0:           # ゼロ
if None:        # None 値
```

### 実用的な例

```python
items = []
if items:
    print("We have items!")
else:
    print("No items found")  # これが出力される

score = 85
passed = score >= 60  # True
```

## 4. None 型 – `NoneType`

`None` は「何もない」または「値がない」ことを表し、Python の至る所で見られます。

### 基本的な例

```python
# まだ値を持っていない変数
result = None
user_input = None

# 関数はデフォルトで None を返す
def greet(name):
    print(f"Hello, {name}")

return_value = greet("Alice")  # return_value は None

# None のチェック
if result is None:
    print("No result yet")

# 一般的なパターン：オプションの値
def find_user(username):
    # ... 検索ロジック ...
    if user_found:
        return user_data
    else:
        return None  # 何も見つからなかった
```

**重要**: None と比較するときは、常に `is` と `is not` を使用し、`==` は使用しないでください。

```python
# 正しい
if value is None:
    # 何かを行う

# 間違い (ただし機能はする)
if value == None:
    # 何かを行う
```

## 5. リスト – `list`

リストは複数のアイテムを順序付けて格納し、作成後に変更できます。包括的なリスト操作については、<router-link to="/cheatsheet/lists-and-tuples">リストとタプルガイド</router-link>を参照してください。

### 基本的な例

```python
# リストの作成
fruits = ["apple", "banana", "orange"]
numbers = [1, 2, 3, 4, 5]
mixed = ["hello", 42, True, None]  # リストは異なる型を保持できる
empty = []

# アイテムへのアクセス (インデックスは 0 から始まる)
first_fruit = fruits[0]      # "apple"
last_fruit = fruits[-1]      # "orange"
```

### 一般的な操作

```python
shopping_list = ["milk", "bread"]

# アイテムの追加
shopping_list.append("eggs")         # ["milk", "bread", "eggs"]
shopping_list.insert(0, "butter")    # ["butter", "milk", "bread", "eggs"]
shopping_list.extend(["cheese", "ham"])  # 複数のアイテムを追加

# アイテムの削除
shopping_list.remove("milk")         # 最初の出現を削除
last_item = shopping_list.pop()      # 最後のアイテムを削除して返す
first_item = shopping_list.pop(0)    # 最初のアイテムを削除して返す

# 便利な操作
length = len(shopping_list)
has_bread = "bread" in shopping_list
```

### リストを使用するタイミング

- 変更される可能性のある順序付けられたデータが必要な場合
- アイテムを一つずつ構築する場合
- 位置によってアイテムにアクセスする必要がある場合

```python
# 良い使用例
grades = [85, 92, 78, 96]
todo_items = ["wash dishes", "walk dog", "study Python"]

# リストの処理
total = sum(grades)
average = total / len(grades)

for item in todo_items:
    print(f"Task: {item}")
```

## 6. 辞書 – `dict`

辞書はキーと値のペアとしてデータを格納します。実際の辞書のように、単語（キー）を検索して定義（値）を見つけるようなものです。包括的な辞書操作については、<router-link to="/cheatsheet/dictionaries">辞書ガイド</router-link>を参照してください。

### 基本的な例

```python
# 辞書の作成
person = {"name": "Alice", "age": 30, "city": "New York"}
grades = {"math": 85, "english": 92, "science": 78}
empty = {}

# 値へのアクセス
name = person["name"]        # "Alice"
age = person.get("age")      # 30 (より安全な方法)
height = person.get("height", "unknown")  # キーが存在しない場合は "unknown"
```

### 一般的な操作

```python
student = {"name": "Bob", "grade": 85}

# 値の追加/更新
student["age"] = 20           # 新しいキーと値のペアを追加
student["grade"] = 90         # 既存の値を更新

# 便利なメソッド
keys = student.keys()         # dict_keys(['name', 'grade', 'age'])
values = student.values()     # dict_values(['Bob', 90, 20])
items = student.items()       # dict_items([('name', 'Bob'), ...])

# キーの確認
if "name" in student:
    print(f"Student name: {student['name']}")

# アイテムの削除
age = student.pop("age")      # 値を削除して返す
student.pop("height", None)   # 安全な削除 (キーがなくてもエラーにならない)
```

### 辞書を使用するタイミング

- 一意の識別子で値をルックアップする必要がある場合
- 構造化データ（レコードなど）の格納
- 何かをカウントする場合
- キャッシュ/メモ化

```python
# 良い使用例
inventory = {"apples": 50, "bananas": 30, "oranges": 25}
user_profile = {
    "username": "alice123",
    "email": "alice@example.com",
    "is_premium": True
}

# カウントの例
text = "hello world"
char_count = {}
for char in text:
    char_count[char] = char_count.get(char, 0) + 1
# 結果：{'h': 1, 'e': 1, 'l': 3, 'o': 2, ' ': 1, 'w': 1, 'r': 1, 'd': 1}
```

## 7. タプル – `tuple`

タプルはリストに似ていますが、作成後に変更できません。作成後に「ロックされた」リストだと考えてください。<router-link to="/cheatsheet/lists-and-tuples">リストとタプルガイド</router-link>でタプルについて詳しく学びましょう。

### 基本的な例

```python
# タプルの作成
coordinates = (10, 20)
rgb_color = (255, 0, 128)
single_item = (42,)    # 単一アイテムタプルの場合はカンマに注意
empty = ()

# 丸括弧は省略可能
point = 5, 10          # (5, 10) と同じ
name_age = "Alice", 25 # ("Alice", 25) と同じ

# アイテムへのアクセス (リストと同じ)
x = coordinates[0]     # 10
y = coordinates[1]     # 20
```

### タプルのアンパック

```python
# アンパックは非常に便利です
point = (100, 200)
x, y = point          # x=100, y=200

# 値の交換
a = 5
b = 10
a, b = b, a           # a=10, b=5 になる

# 複数の値を返す関数
def get_name_age():
    return "Bob", 25

name, age = get_name_age()
```

### タプルを使用するタイミング

- 変更されない固定されたコレクションがある場合
- 関数から複数の値を返す場合
- 辞書のキーとして (不変であるため)
- 座標、RGB 値などを表現する場合

```python
# 良い使用例
WINDOW_SIZE = (800, 600)        # 定数
DEFAULT_COLOR = (255, 255, 255) # RGB の白

# タプルキーを持つ辞書
locations = {
    (0, 0): "origin",
    (1, 1): "northeast",
    (-1, -1): "southwest"
}
```

## 8. セット – `set`

セットは重複がなく、特定の順序もない一意のアイテムを格納します。メンバーシップのテストや重複の削除に最適です。包括的なセット操作については、<router-link to="/cheatsheet/sets">セットガイド</router-link>を参照してください。

### 基本的な例

```python
# セットの作成
colors = {"red", "green", "blue"}
numbers = {1, 2, 3, 4, 5}
empty = set()  # 注意：{} は空の辞書を作成し、セットは作成しません！

# リストからの作成 (重複を削除)
mixed_list = [1, 2, 2, 3, 3, 3]
unique_numbers = set(mixed_list)  # {1, 2, 3}
```

### 一般的な操作

```python
tags = {"python", "programming", "beginner"}

# アイテムの追加
tags.add("tutorial")
tags.update(["coding", "learning"])  # 複数のアイテムを追加

# アイテムの削除
tags.remove("beginner")     # アイテムが存在しない場合はエラー
tags.discard("advanced")    # アイテムが存在しなくてもエラーにならない

# メンバーシップのテスト (非常に高速!)
if "python" in tags:
    print("This is about Python!")

# セット演算
set1 = {1, 2, 3}
set2 = {3, 4, 5}
union = set1 | set2         # {1, 2, 3, 4, 5}
intersection = set1 & set2   # {3}
difference = set1 - set2     # {1, 2}
```

### セットを使用するタイミング

- コレクションから重複を削除する場合
- 高速なメンバーシップテスト
- 数学的なセット演算
- ユニークな訪問者、ID などを追跡する場合

```python
# 良い使用例
unique_visitors = set()
unique_visitors.add("user123")
unique_visitors.add("user456")
unique_visitors.add("user123")  # 重複は追加されない
print(len(unique_visitors))     # 2

# リストから重複を削除
items = ["apple", "banana", "apple", "orange", "banana"]
unique_items = list(set(items))  # ['apple', 'banana', 'orange']
```

## 適切な型の選択 – 実世界のヒント

| シナリオ                                       | 最適な型                                                         | 理由                                  |
| :--------------------------------------------- | :--------------------------------------------------------------- | :------------------------------------ |
| ユーザーの年齢を保存する                       | <router-link to='/builtin/int'>`int`</router-link>               | 整数、小数部は不要                    |
| 製品価格                                       | <router-link to='/builtin/float'>`float`</router-link>           | 小数点が必要                          |
| ユーザーのログイン状態                         | <router-link to='/builtin/bool'>`bool`</router-link>             | 単純な真偽値                          |
| ユーザーのミドルネーム（存在しない可能性あり） | <router-link to='/builtin/str'>`str`</router-link> または `None` | 欠落している可能性がある              |
| ショッピングカートのアイテム                   | <router-link to='/builtin/list'>`list`</router-link>             | 順序があり、アイテムの追加/削除が可能 |
| ユーザープロファイルデータ                     | <router-link to='/builtin/dict'>`dict`</router-link>             | キーと値のペア（名前、メールなど）    |
| GPS 座標                                       | <router-link to='/builtin/tuple'>`tuple`</router-link>           | 変更されない固定ペア                  |
| ユニークな製品カテゴリ                         | <router-link to='/builtin/set'>`set`</router-link>               | 重複なし、高速ルックアップ            |

## 変更可能性とハッシュ可能性のチートシート

| 型                                                                                                                                                                     | 変更可能？ | ハッシュ可能？ | 辞書のキーにできる？ |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------- | :------------- | :------------------- |
| <router-link to='/builtin/int'>`int`</router-link>, <router-link to='/builtin/float'>`float`</router-link>, <router-link to='/builtin/complex'>`complex`</router-link> | いいえ     | はい           | ✔                   |
| <router-link to='/builtin/str'>`str`</router-link>                                                                                                                     | いいえ     | はい           | ✔                   |
| <router-link to='/builtin/bool'>`bool`</router-link>                                                                                                                   | いいえ     | はい           | ✔                   |
| `None`                                                                                                                                                                 | いいえ     | はい           | ✔                   |
| <router-link to='/builtin/tuple'>`tuple`</router-link> (不変アイテムを含む場合)                                                                                        | いいえ     | はい           | ✔                   |
| <router-link to='/builtin/list'>`list`</router-link>                                                                                                                   | はい       | いいえ         | ✘                    |
| <router-link to='/builtin/dict'>`dict`</router-link>                                                                                                                   | はい       | いいえ         | ✘                    |
| <router-link to='/builtin/set'>`set`</router-link>                                                                                                                     | はい       | いいえ         | ✘                    |

## 初心者向けの重要なポイント

1. **シンプルに始める**: 整数には `int`、小数には `float`、テキストには `str`、真偽値には `bool`、値がないことには `None` を使用します。

2. **コレクションを簡単に**: 変更が必要な場合は `list`、不要な場合は `tuple`、キーと値のペアには `dict`、一意のアイテムには `set` を使用します。

3. **迷ったら**: 初心者にとって、ほとんどのコレクションのニーズは `list` と `dict` でカバーできます。

4. **複雑なユースケースに進む前に**、単純な例で練習します。

5. **覚えておくこと**: Python は寛容です。必要に応じて互換性のある型間でいつでも変換できます。
