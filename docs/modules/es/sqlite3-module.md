---
title: "Módulo SQLite3 de Python - Hoja de trucos de Python"
description: "El módulo `sqlite3` te permite usar bases de datos SQLite directamente desde Python, sin un servidor de base de datos aparte."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo SQLite3 de Python
</base-title>

El módulo `sqlite3` te permite usar bases de datos SQLite directamente desde Python, sin un servidor de base de datos aparte.

```python
import sqlite3
```

SQLite es una buena opción para aplicaciones pequeñas, herramientas locales, pruebas y para aprender SQL. La base de datos puede vivir en un solo archivo o solo en memoria con `':memory:'`.

## Conectarse a una base de datos

SQLite puede crear automáticamente el archivo de la base de datos si no existe.

```python
import sqlite3

connection = sqlite3.connect(':memory:')
print(type(connection).__name__)
```

```output
Connection
```

## Crear una tabla e insertar filas

```python
import sqlite3

connection = sqlite3.connect(':memory:')
cursor = connection.cursor()

cursor.execute('CREATE TABLE users (name TEXT, age INTEGER)')
cursor.execute('INSERT INTO users VALUES (?, ?)', ('Ada', 36))
cursor.execute('INSERT INTO users VALUES (?, ?)', ('Grace', 40))
connection.commit()
```

Usa marcadores de posición en lugar de formatear cadenas SQL manualmente.

<base-warning>
  <base-warning-title>
    WARNING
  </base-warning-title>
  <base-warning-content>
    No construyas consultas SQL concatenando la entrada del usuario. Usa marcadores de posición como <code>?</code> para evitar errores de inyección SQL.
  </base-warning-content>
</base-warning>

## Consultar filas

```python
rows = cursor.execute('SELECT name, age FROM users ORDER BY age').fetchall()
print(rows)
```

```output
[('Ada', 36), ('Grace', 40)]
```

## Usar objetos Row

`Row` te permite acceder a las columnas por nombre.

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

## Usar un gestor de contexto

La conexión puede usarse con `with` para que los cambios se confirmen automáticamente si no hay errores.

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

## Enlaces relacionados

- <router-link to="/modules/json-module">Módulo: json</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">Hoja de trucos: Leer y escribir archivos</router-link>
- <router-link to="/builtin/open">open()</router-link>
