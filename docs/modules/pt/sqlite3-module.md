---
title: "Módulo SQLite3 do Python - Folha de Referência Python"
description: "O módulo `sqlite3` permite usar bancos de dados SQLite diretamente do Python, sem um servidor de banco de dados separado."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo SQLite3 do Python
</base-title>

O módulo `sqlite3` permite usar bancos de dados SQLite diretamente do Python, sem um servidor de banco de dados separado.

```python
import sqlite3
```

SQLite é uma boa escolha para apps pequenos, ferramentas locais, testes e aprendizado de SQL. O banco pode ficar em um único arquivo ou apenas na memória com `':memory:'`.

## Conectando a um banco de dados

SQLite pode criar o arquivo do banco automaticamente se ele não existir.

```python
import sqlite3

connection = sqlite3.connect(':memory:')
print(type(connection).__name__)
```

```output
Connection
```

## Criando uma tabela e inserindo linhas

```python
import sqlite3

connection = sqlite3.connect(':memory:')
cursor = connection.cursor()

cursor.execute('CREATE TABLE users (name TEXT, age INTEGER)')
cursor.execute('INSERT INTO users VALUES (?, ?)', ('Ada', 36))
cursor.execute('INSERT INTO users VALUES (?, ?)', ('Grace', 40))
connection.commit()
```

Use placeholders em vez de montar strings SQL manualmente.

<base-warning>
  <base-warning-title>
    WARNING
  </base-warning-title>
  <base-warning-content>
    Não construa consultas SQL concatenando entrada do usuário. Use placeholders como <code>?</code> para evitar problemas de SQL injection.
  </base-warning-content>
</base-warning>

## Consultando linhas

```python
rows = cursor.execute('SELECT name, age FROM users ORDER BY age').fetchall()
print(rows)
```

```output
[('Ada', 36), ('Grace', 40)]
```

## Usando objetos Row

`Row` permite acessar colunas pelo nome.

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

## Usando um gerenciador de contexto

A conexão pode ser usada com `with`, então as mudanças são confirmadas automaticamente se não houver erro.

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

## Links relacionados

- <router-link to="/modules/json-module">Módulo: json</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">Folha de Referência: Leitura e escrita de arquivos</router-link>
- <router-link to="/builtin/open">open()</router-link>
