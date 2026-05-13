---
title: "Python urllib.request Modul - Python Spickzettel"
description: "Das `urllib.request`-Modul erlaubt dir, Daten von URLs mit der Python-Standardbibliothek abzurufen."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python urllib.request Modul
</base-title>

Das `urllib.request`-Modul erlaubt dir, Daten von URLs mit der Python-Standardbibliothek abzurufen.

```python
from urllib import request
```

Für viele Projekte sind Drittanbieterbibliotheken wie Requests bequemer. Verwende `urllib.request`, wenn du eine Lösung nur mit der Standardbibliothek möchtest.

## Eine URL öffnen

`urlopen` gibt ein Antwortobjekt zurück.

```python
from urllib import request

response = request.urlopen('data:text/plain,Hello%20Python')
print(response.headers.get_content_type())
```

```output
text/plain
```

## Antwortdaten lesen

Antwortinhalte werden als Bytes zurückgegeben.

```python
from urllib import request

response = request.urlopen('data:text/plain,Hello%20Python')
content = response.read()
print(type(content).__name__)
print(content.decode('utf-8'))
```

```output
bytes
Hello Python
```

## Ein Timeout hinzufügen

Wenn du echte Netzwerk-URLs öffnest, setze ein Timeout, damit dein Programm nicht ewig wartet.

```python
from urllib import request

response = request.urlopen('data:text/plain,ok', timeout=5)
print(response.read().decode('utf-8'))
```

```output
ok
```

<base-warning>
  <base-warning-title>
    WARNING
  </base-warning-title>
  <base-warning-content>
    Netzwerkaufrufe können aus vielen Gründen fehlschlagen. Behandle Ausnahmen wie <code>urllib.error.URLError</code> und sei vorsichtig beim Abrufen nicht vertrauenswürdiger URLs.
  </base-warning-content>
</base-warning>

## Relevante Links

- <router-link to="/modules/json-module">Modul: json</router-link>
- <router-link to="/cheatsheet/exception-handling">Spickzettel: Fehlerbehandlung</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">Spickzettel: Lesen und Schreiben von Dateien</router-link>
