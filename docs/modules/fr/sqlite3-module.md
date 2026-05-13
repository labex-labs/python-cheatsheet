---
title: Module SQLite3 Python - Aide-mémoire Python
description: Le module `sqlite3` vous permet d’utiliser des bases de données SQLite directement depuis Python, sans serveur de base de données séparé.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Module SQLite3 Python
</base-title>

Le module `sqlite3` vous permet d’utiliser des bases de données SQLite directement depuis Python, sans serveur de base de données séparé.

```python
import sqlite3
```

SQLite est un bon choix pour les petites applications, les outils locaux, les tests et l’apprentissage de SQL. La base de données peut tenir dans un seul fichier, ou uniquement en mémoire avec `':memory:'`.

## Se connecter à une base de données

SQLite peut créer automatiquement le fichier de base de données s’il n’existe pas.

```python
import sqlite3

connection = sqlite3.connect(':memory:')
print(type(connection).__name__)
```

```output
Connection
```

## Créer une table et insérer des lignes

```python
import sqlite3

connection = sqlite3.connect(':memory:')
cursor = connection.cursor()

cursor.execute('CREATE TABLE users (name TEXT, age INTEGER)')
cursor.execute('INSERT INTO users VALUES (?, ?)', ('Ada', 36))
cursor.execute('INSERT INTO users VALUES (?, ?)', ('Grace', 40))
connection.commit()
```

Utilisez des paramètres de substitution plutôt que de formater manuellement des chaînes SQL.

<base-warning>
  <base-warning-title>
    WARNING
  </base-warning-title>
  <base-warning-content>
    Ne construisez pas vos requêtes SQL en concaténant des entrées utilisateur. Utilisez des paramètres de substitution comme <code>?</code> pour éviter les injections SQL.
  </base-warning-content>
</base-warning>

## Interroger des lignes

```python
rows = cursor.execute('SELECT name, age FROM users ORDER BY age').fetchall()
print(rows)
```

```output
[('Ada', 36), ('Grace', 40)]
```

## Utiliser des objets Row

`Row` vous permet d’accéder aux colonnes par leur nom.

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

## Utiliser un gestionnaire de contexte

La connexion peut être utilisée avec `with` afin que les modifications soient validées automatiquement s’il n’y a pas d’erreur.

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

## Liens pertinents

- <router-link to="/modules/json-module">Module : json</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">Aide-mémoire : Lire et écrire des fichiers</router-link>
- <router-link to="/builtin/open">open()</router-link>
