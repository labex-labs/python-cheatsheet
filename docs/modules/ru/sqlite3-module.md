---
title: Модуль SQLite3 Python - Шпаргалка Python
description: Модуль `sqlite3` позволяет использовать базы данных SQLite прямо из Python без отдельного сервера баз данных.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Модуль SQLite3 Python
</base-title>

Модуль `sqlite3` позволяет использовать базы данных SQLite прямо из Python без отдельного сервера баз данных.

```python
import sqlite3
```

SQLite — хороший выбор для небольших приложений, локальных инструментов, тестов и изучения SQL. База данных может храниться в одном файле или только в памяти с `':memory:'`.

## Подключение к базе данных

SQLite может автоматически создать файл базы данных, если его нет.

```python
import sqlite3

connection = sqlite3.connect(':memory:')
print(type(connection).__name__)
```

```output
Connection
```

## Создание таблицы и вставка строк

```python
import sqlite3

connection = sqlite3.connect(':memory:')
cursor = connection.cursor()

cursor.execute('CREATE TABLE users (name TEXT, age INTEGER)')
cursor.execute('INSERT INTO users VALUES (?, ?)', ('Ada', 36))
cursor.execute('INSERT INTO users VALUES (?, ?)', ('Grace', 40))
connection.commit()
```

Используйте placeholders вместо ручного форматирования SQL-строк.

<base-warning>
  <base-warning-title>
    WARNING
  </base-warning-title>
  <base-warning-content>
    Не собирайте SQL-запросы, склеивая ввод пользователя. Используйте placeholders вроде <code>?</code>, чтобы избежать SQL injection.
  </base-warning-content>
</base-warning>

## Запрос строк

```python
rows = cursor.execute('SELECT name, age FROM users ORDER BY age').fetchall()
print(rows)
```

```output
[('Ada', 36), ('Grace', 40)]
```

## Использование объектов Row

`Row` позволяет обращаться к столбцам по имени.

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

## Использование контекстного менеджера

Соединение можно использовать с `with`, чтобы изменения автоматически фиксировались при отсутствии ошибок.

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

## Ссылки по теме

- <router-link to="/modules/json-module">Модуль: json</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">Шпаргалка: чтение и запись файлов</router-link>
- <router-link to="/builtin/open">open()</router-link>
