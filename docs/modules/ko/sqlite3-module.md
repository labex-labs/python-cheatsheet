---
title: "Python SQLite3 모듈 - Python 치트시트"
description: "`sqlite3` 모듈은 별도의 데이터베이스 서버 없이 Python에서 바로 SQLite 데이터베이스를 사용할 수 있게 해줍니다."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python SQLite3 모듈
</base-title>

`sqlite3` 모듈은 별도의 데이터베이스 서버 없이 Python에서 바로 SQLite 데이터베이스를 사용할 수 있게 해줍니다.

```python
import sqlite3
```

SQLite는 작은 앱, 로컬 도구, 테스트, SQL 학습에 좋은 선택입니다. 데이터베이스는 하나의 파일에 두거나 `':memory:'`로 메모리에만 둘 수 있습니다.

## 데이터베이스에 연결하기

SQLite는 데이터베이스 파일이 없으면 자동으로 만들 수 있습니다.

```python
import sqlite3

connection = sqlite3.connect(':memory:')
print(type(connection).__name__)
```

```output
Connection
```

## 테이블 만들기와 행 삽입하기

```python
import sqlite3

connection = sqlite3.connect(':memory:')
cursor = connection.cursor()

cursor.execute('CREATE TABLE users (name TEXT, age INTEGER)')
cursor.execute('INSERT INTO users VALUES (?, ?)', ('Ada', 36))
cursor.execute('INSERT INTO users VALUES (?, ?)', ('Grace', 40))
connection.commit()
```

SQL 문자열을 직접 포맷하는 대신 플레이스홀더를 사용하세요.

<base-warning>
  <base-warning-title>
    WARNING
  </base-warning-title>
  <base-warning-content>
    사용자 입력을 이어 붙여 SQL 쿼리를 만들지 마세요. SQL 인젝션을 피하려면 <code>?</code> 같은 플레이스홀더를 사용합니다.
  </base-warning-content>
</base-warning>

## 행 조회하기

```python
rows = cursor.execute('SELECT name, age FROM users ORDER BY age').fetchall()
print(rows)
```

```output
[('Ada', 36), ('Grace', 40)]
```

## Row 객체 사용하기

`Row`를 사용하면 열 이름으로 접근할 수 있습니다.

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

## 컨텍스트 매니저 사용하기

연결은 `with`와 함께 사용할 수 있으며, 오류가 없으면 변경 사항이 자동으로 커밋됩니다.

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

## 관련 링크

- <router-link to="/modules/json-module">모듈: json</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">치트시트: 파일 읽기와 쓰기</router-link>
- <router-link to="/builtin/open">open()</router-link>
