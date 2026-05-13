---
title: Python Tempfile Modul - Python Spickzettel
description: Das `tempfile`-Modul erstellt temporäre Dateien und Verzeichnisse sicher.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Tempfile Modul
</base-title>

Das `tempfile`-Modul erstellt temporäre Dateien und Verzeichnisse sicher.

```python
import tempfile
```

Verwende `tempfile` für Daten, die nur während der Laufzeit deines Programms existieren sollen, etwa Testergebnisse, Downloads oder Zwischendateien.

## TemporaryFile()

`TemporaryFile` erstellt ein Dateiobjekt, das automatisch aufgeräumt wird.

```python
import tempfile

with tempfile.TemporaryFile(mode='w+t') as temp:
    temp.write('hello')
    temp.seek(0)
    print(temp.read())
```

```output
hello
```

Die Datei wird automatisch entfernt, wenn der `with`-Block endet.

## NamedTemporaryFile()

`NamedTemporaryFile` gibt dir einen Pfad auf der Festplatte.

```python
import tempfile

with tempfile.NamedTemporaryFile(mode='w+t') as temp:
    print(bool(temp.name))
```

```output
True
```

Das ist nützlich, wenn eine andere API einen Dateinamen statt eines Dateiobjekts benötigt.

## TemporaryDirectory()

Temporäre Verzeichnisse sind nützlich für Tests und kurzlebige Arbeitsbereiche.

```python
import tempfile
from pathlib import Path

with tempfile.TemporaryDirectory() as directory:
    file_path = Path(directory) / 'notes.txt'
    file_path.write_text('draft')
    print(file_path.exists())
```

```output
True
```

Dateien im Verzeichnis werden zusammen mit dem Verzeichnis entfernt, wenn der Block endet.

## Einen temporären Speicherort wählen

`gettempdir()` zeigt das Verzeichnis, das Python standardmäßig verwendet.

```python
import tempfile

print(bool(tempfile.gettempdir()))
```

```output
True
```

## Relevante Links

- <router-link to="/modules/pathlib-module">Modul: pathlib</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">Spickzettel: Lesen und Schreiben von Dateien</router-link>
- <router-link to="/builtin/open">open()</router-link>
