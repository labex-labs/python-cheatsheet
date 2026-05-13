---
title: Python SQLite3 モジュール - Python チートシート
description: `sqlite3` モジュールを使うと、別のデータベースサーバーなしで Python から直接 SQLite データベースを利用できます。
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python SQLite3 モジュール
</base-title>

`sqlite3` モジュールを使うと、別のデータベースサーバーなしで Python から直接 SQLite データベースを利用できます。

```python
import sqlite3
```

SQLite は、小さなアプリ、ローカルツール、テスト、SQL の学習に向いています。データベースは 1 つのファイルに置くことも、`':memory:'` でメモリ上だけに持つこともできます。

## データベースに接続する

SQLite は、存在しない場合にデータベースファイルを自動で作成できます。

```python
import sqlite3

connection = sqlite3.connect(':memory:')
print(type(connection).__name__)
```

```output
Connection
```

## テーブルを作成して行を挿入する

```python
import sqlite3

connection = sqlite3.connect(':memory:')
cursor = connection.cursor()

cursor.execute('CREATE TABLE users (name TEXT, age INTEGER)')
cursor.execute('INSERT INTO users VALUES (?, ?)', ('Ada', 36))
cursor.execute('INSERT INTO users VALUES (?, ?)', ('Grace', 40))
connection.commit()
```

SQL 文字列を手で組み立てる代わりに、プレースホルダーを使ってください。

<base-warning>
  <base-warning-title>
    WARNING
  </base-warning-title>
  <base-warning-content>
    ユーザー入力を連結して SQL クエリを作らないでください。SQL インジェクションを避けるため、<code>?</code> のようなプレースホルダーを使います。
  </base-warning-content>
</base-warning>

## 行を問い合わせる

```python
rows = cursor.execute('SELECT name, age FROM users ORDER BY age').fetchall()
print(rows)
```

```output
[('Ada', 36), ('Grace', 40)]
```

## Row オブジェクトを使う

`Row` を使うと、列名でアクセスできます。

```python
connection = sqlite3.connect(':memory:')
connection.row_factory = sqlite3.Row
cursor = connection.cursor()
cursor.execute('CREATE TABLE projects (name TEXT)')
cursor.execute('INSERT INTO projects VALUES (?)', ('python-cheatsheet',))
row = cursor.execute('SELECT name FROM projects').fetchone()
print(row['name'])
```

```output
python-cheatsheet
```

## コンテキストマネージャーを使う

接続は `with` と一緒に使えます。エラーがなければ変更は自動で確定されます。

```python
import sqlite3

with sqlite3.connect(':memory:') as connection:
    connection.execute('CREATE TABLE notes (body TEXT)')
    connection.execute('INSERT INTO notes VALUES (?)', ('Learn sqlite3',))
    rows = connection.execute('SELECT body FROM notes').fetchall()

print(rows)
```

```output
[('Learn sqlite3',)]
```

## 関連リンク

- <router-link to="/modules/json-module">モジュール: json</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">チートシート: ファイルの読み書き</router-link>
- <router-link to="/builtin/open">open()</router-link>
