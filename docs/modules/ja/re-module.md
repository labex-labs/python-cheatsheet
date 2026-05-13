---
title: "Python re モジュール - Python チートシート"
description: "`re` モジュールを使うと、正規表現でテキストの検索、照合、分割、置換ができます。"
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python re モジュール
</base-title>

`re` モジュールを使うと、正規表現でテキストの検索、照合、分割、置換ができます。

```python
import re
```

正規表現は、テキストのパターンを表します。`r'\d+'` のような raw string を使うと、バックスラッシュが正しく正規表現エンジンに渡されます。

## search()

`search` は、文字列のどこかにある最初の一致を見つけます。

```python
import re

match = re.search(r'\d+', 'Order #12345 shipped')
print(match.group())
```

```output
12345
```

## findall()

`findall` は、重なりのない一致をすべて返します。

```python
import re

emails = re.findall(r'[\w.-]+@[\w.-]+', 'a@example.com b@example.com')
print(emails)
```

```output
['a@example.com', 'b@example.com']
```

## sub()

`sub` は一致したテキストを置換します。

```python
import re

message = re.sub(r'\s+', ' ', 'too    many   spaces')
print(message)
```

```output
too many spaces
```

## パターンをコンパイルする

同じ式を繰り返し使う場合、コンパイル済みパターンが便利です。

```python
import re

pattern = re.compile(r'^python', re.IGNORECASE)
print(bool(pattern.match('Python Cheatsheet')))
```

```output
True
```

## キャプチャグループ

丸括弧は一致した部分の一部をキャプチャします。

```python
import re

match = re.search(r'(\w+)=(\d+)', 'count=42')
print(match.group(1))
print(match.group(2))
```

```output
count
42
```

## 一致しない場合の処理

`group()` を呼ぶ前に、まず一致があるかどうかを確認してください。

```python
import re

match = re.search(r'\d+', 'no number here')
if match:
    print(match.group())
else:
    print('No match')
```

```output
No match
```

## 関連リンク

- <router-link to="/cheatsheet/regular-expressions">チートシート: 正規表現</router-link>
- <router-link to="/cheatsheet/manipulating-strings">チートシート: 文字列操作</router-link>
- <router-link to="/builtin/str">str()</router-link>
