---
title: Python SQLite3 Module - Python Cheatsheet
description: The sqlite3 module lets you use SQLite databases directly from Python without a separate database server.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python SQLite3 Module
</base-title>

The `sqlite3` module lets you use SQLite databases directly from Python without a separate database server.

```python
import sqlite3
```

SQLite is a good choice for small apps, local tools, tests, and learning SQL. The database can live in a single file, or only in memory with `':memory:'`.

## Connecting to a database

SQLite can create the database file automatically if it does not exist.

```python
import sqlite3

connection = sqlite3.connect(':memory:')
print(type(connection).__name__)
```

```output
Connection
```

## Creating a table and inserting rows

```python
import sqlite3

connection = sqlite3.connect(':memory:')
cursor = connection.cursor()

cursor.execute('CREATE TABLE users (name TEXT, age INTEGER)')
cursor.execute('INSERT INTO users VALUES (?, ?)', ('Ada', 36))
cursor.execute('INSERT INTO users VALUES (?, ?)', ('Grace', 40))
connection.commit()
```

Use placeholders instead of formatting SQL strings manually.

<base-warning>
  <base-warning-title>
    WARNING
  </base-warning-title>
  <base-warning-content>
    Do not build SQL queries by concatenating user input. Use placeholders like <code>?</code> to avoid SQL injection bugs.
  </base-warning-content>
</base-warning>

## Querying rows

```python
rows = cursor.execute('SELECT name, age FROM users ORDER BY age').fetchall()
print(rows)
```

```output
[('Ada', 36), ('Grace', 40)]
```

## Using Row objects

`Row` lets you access columns by name.

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

## Using a context manager

The connection can be used with `with` so changes are committed automatically if there is no error.

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

## Relevant links

- <router-link to="/modules/json-module">Module: json</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">Cheatsheet: Reading and Writing Files</router-link>
- <router-link to="/builtin/open">open()</router-link>
