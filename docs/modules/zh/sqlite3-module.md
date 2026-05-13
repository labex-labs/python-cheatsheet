---
title: "Python SQLite3 模块 - Python 速查表"
description: "`sqlite3` 模块可以让你直接在 Python 中使用 SQLite 数据库，而不需要单独的数据库服务器。"
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python SQLite3 模块
</base-title>

`sqlite3` 模块可以让你直接在 Python 中使用 SQLite 数据库，而不需要单独的数据库服务器。

```python
import sqlite3
```

SQLite 很适合小型应用、本地工具、测试和学习 SQL。数据库可以放在单个文件中，也可以用 `':memory:'` 只保存在内存里。

## 连接数据库

如果数据库文件不存在，SQLite 可以自动创建它。

```python
import sqlite3

connection = sqlite3.connect(':memory:')
print(type(connection).__name__)
```

```output
Connection
```

## 创建表并插入行

```python
import sqlite3

connection = sqlite3.connect(':memory:')
cursor = connection.cursor()

cursor.execute('CREATE TABLE users (name TEXT, age INTEGER)')
cursor.execute('INSERT INTO users VALUES (?, ?)', ('Ada', 36))
cursor.execute('INSERT INTO users VALUES (?, ?)', ('Grace', 40))
connection.commit()
```

请使用占位符，而不要手动拼接 SQL 字符串。

<base-warning>
  <base-warning-title>
    WARNING
  </base-warning-title>
  <base-warning-content>
    不要通过拼接用户输入来构造 SQL 查询。请使用 <code>?</code> 之类的占位符，避免 SQL 注入漏洞。
  </base-warning-content>
</base-warning>

## 查询行

```python
rows = cursor.execute('SELECT name, age FROM users ORDER BY age').fetchall()
print(rows)
```

```output
[('Ada', 36), ('Grace', 40)]
```

## 使用 Row 对象

`Row` 可以让你通过列名访问数据。

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

## 使用上下文管理器

连接对象可以配合 `with` 使用，这样在没有错误时会自动提交更改。

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

## 相关链接

- <router-link to="/modules/json-module">模块：json</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">速查表：读写文件</router-link>
- <router-link to="/builtin/open">open()</router-link>
