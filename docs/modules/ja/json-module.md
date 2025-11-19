---
title: 'Python JSON モジュール - Python チートシート'
description: 'Python には、JSON（JavaScript Object Notation）データを扱うための組み込みモジュール json があります。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python JSON モジュール
</base-title>

JSON は JavaScript Object Notation の略で、データを保存および転送するための軽量な形式です。JSON は、データがサーバーから Web ページに送信される際によく使用されます。

Python には、JSON データを操作できる組み込みモジュール`json`があります。

```python
import json
```

## JSON データ型

JSON オブジェクトは Python の辞書に似ていますが、次の違いがあります。

- JSON キーは常に文字列です。
- 文字列は常に二重引用符で囲まれます。
- JSON ブール値は小文字で始まります。
- `null`は Python の`None`に相当する JSON です。

JSON がサポートするデータ型は次のとおりです。

- String (文字列)
- Number (数値)
- boolean (ブール値)
- null
- Object (オブジェクト)
- Array (配列)

例：

```json
{
  "name": "Charles",
  "age": 33,
  "has_hair": false,
  "hobbies": ["photography", "running"],
  "appearance": {
    "eyes": "brown",
    "hair_color": null
  }
}
```

## JSON loads() メソッド

`json.loads`メソッドを使用すると、JSON オブジェクトを解析し、Python の辞書に変換できます。

```python
import json

# 解析する JSON 文字列
json_person = '{"name": "Charles", "age": 33, "has_hair": false, "hobbies": ["photography", "running"]}'
# JSON 文字列を Python 辞書に解析
python_person = json.loads(json_person)
python_person
```

```output
{'name': 'Charles', 'age': 33, 'has_hair': False, 'hobbies': ['photography', 'running']}
```

```python
type(python_person)
```

```output
<class 'dict'>
```

```python
# get メソッドを使用して辞書の値にアクセス
python_person.get("name")
```

```output
'Charles'
```

## JSON dumps() メソッド

その逆の操作です。`dumps()`メソッドは Python オブジェクトを JSON 文字列に変換します。

```python
import json

# 変換する Python 辞書
python_person = {'name': 'Charles', 'age': 33, 'has_hair': False, 'hobbies': ['photography', 'running']}
# Python オブジェクトを JSON 文字列に変換
json_person = json.dumps(python_person)

json_person
```

```output
'{"name": "Charles", "age": 33, "has_hair": false, "hobbies": ["photography", "running"]}'
```

```python
type(json_person)
```

```output
<class 'str'>
```

## JSON ファイルの読み書き

### JSON ファイルの読み込み

```python
import json
# JSON ファイルを読み込む
with open("filename.json", "r") as f:
    json_content = json.loads(f.read())

# 注：この行は冗長に見えます - json_content はすでに解析されています
json.loads(json_content)
```

```output
{'name': 'Charles', 'age': 33, 'has_hair': False}
```

### JSON ファイルの書き込み

```python
import json

person = {'name': 'Charles', 'age': 33}

# Python 辞書を JSON ファイルに書き込む
with open("filename.json", "w") as f:
    f.write(json.dumps(person))
```

## 関連リンク

- <router-link to="/cheatsheet/json-yaml">チートシート：JSON と YAML</router-link>
- <router-link to="/cheatsheet/dictionaries">チートシート：辞書</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">チートシート：ファイルの読み書き</router-link>
- <router-link to="/blog/python-data-types">ブログ：Python データ型</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/open">open()</router-link>
