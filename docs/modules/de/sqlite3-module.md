---
title: Python SQLite3 Modul - Python Spickzettel
description: Das `sqlite3`-Modul erlaubt dir, SQLite-Datenbanken direkt aus Python zu verwenden, ohne einen separaten Datenbankserver.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python SQLite3 Modul
</base-title>

Das `sqlite3`-Modul erlaubt dir, SQLite-Datenbanken direkt aus Python zu verwenden, ohne einen separaten Datenbankserver.

```python
import sqlite3
```

SQLite ist eine gute Wahl für kleine Anwendungen, lokale Werkzeuge, Tests und zum Lernen von SQL. Die Datenbank kann in einer einzelnen Datei liegen oder nur im Speicher mit `':memory:'`.

## Mit einer Datenbank verbinden

SQLite kann die Datenbankdatei automatisch erstellen, wenn sie nicht existiert.

```python
import sqlite3

connection = sqlite3.connect(':memory:')
print(type(connection).__name__)
```

```output
Connection
```

## Eine Tabelle erstellen und Zeilen einfügen

```python
import sqlite3

connection = sqlite3.connect(':memory:')
cursor = connection.cursor()

cursor.execute('CREATE TABLE users (name TEXT, age INTEGER)')
cursor.execute('INSERT INTO users VALUES (?, ?)', ('Ada', 36))
cursor.execute('INSERT INTO users VALUES (?, ?)', ('Grace', 40))
connection.commit()
```

Verwende Platzhalter statt SQL-Strings manuell zusammenzusetzen.

<base-warning>
  <base-warning-title>
    WARNING
  </base-warning-title>
  <base-warning-content>
    Baue SQL-Abfragen nicht durch das Verketten von Benutzereingaben. Verwende Platzhalter wie <code>?</code>, um SQL-Injection-Fehler zu vermeiden.
  </base-warning-content>
</base-warning>

## Zeilen abfragen

```python
rows = cursor.execute('SELECT name, age FROM users ORDER BY age').fetchall()
print(rows)
```

```output
[('Ada', 36), ('Grace', 40)]
```

## Row-Objekte verwenden

`Row` erlaubt dir, Spalten über ihren Namen anzusprechen.

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

## Einen Kontextmanager verwenden

Die Verbindung kann mit `with` verwendet werden, damit Änderungen bei Fehlerfreiheit automatisch übernommen werden.

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

## Relevante Links

- <router-link to="/modules/json-module">Modul: json</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">Spickzettel: Dateien lesen und schreiben</router-link>
- <router-link to="/builtin/open">open()</router-link>
