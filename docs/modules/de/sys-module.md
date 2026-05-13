---
title: Python Sys Modul - Python Spickzettel
description: Das `sys`-Modul bietet Zugriff auf Laufzeitdetails von Python wie Kommandozeilenargumente, den Importpfad und die aktuelle Interpreter-Version.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Sys Modul
</base-title>

Das `sys`-Modul bietet Zugriff auf Laufzeitdetails von Python wie Kommandozeilenargumente, den Importpfad und die aktuelle Interpreter-Version.

```python
import sys
```

Verwende `sys`, wenn dein Code mit dem Python-Interpreter selbst sprechen muss und nicht nur mit deinen eigenen Anwendungsobjekten.

## Kommandozeilenargumente

`sys.argv` ist eine Liste von Argumenten, die an das aktuelle Skript übergeben werden.

```python
import sys

sys.argv = ['main.py', '--debug', 'app']
print(sys.argv[0])
print(sys.argv[1:])
```

```output
main.py
['--debug', 'app']
```

Für echte Kommandozeilenanwendungen solltest du <router-link to="/modules/argparse-module">argparse</router-link> bevorzugen. Es baut auf derselben Idee auf, liefert aber Validierung und Hilfetexte.

## Python-Version

```python
import sys

print(sys.version_info.major)
print(sys.version_info.minor)
```

```output
3
14
```

## Importsuchpfad

`sys.path` steuert, wo Python nach Modulen sucht.

```python
import sys

print(type(sys.path).__name__)
print(len(sys.path) > 0)
```

```output
list
True
```

Die ersten Einträge in `sys.path` enthalten normalerweise dein aktuelles Projekt, weshalb lokale Module importiert werden können.

## Standard-Ein- und Ausgabe

`sys.stdin`, `sys.stdout` und `sys.stderr` sind dateiähnliche Objekte, die der Interpreter verwendet.

```python
import sys

print(sys.stdout.writable())
print(sys.stderr.writable())
```

```output
True
True
```

## Ein Programm beenden

```python
import sys

try:
    sys.exit(0)
except SystemExit as exc:
    print(exc.code)
```

```output
0
```

## Relevante Links

- <router-link to="/modules/argparse-module">Modul: argparse</router-link>
- <router-link to="/modules/subprocess-module">Modul: subprocess</router-link>
- <router-link to="/cheatsheet/main">Spickzettel: Main: Top-Level-Skript</router-link>
