---
title: 'Python Zipfile Modul - Python Spickzettel'
description: 'Dieses Modul bietet Werkzeuge zum Erstellen, Lesen, Schreiben, Anhängen und Auflisten von ZIP-Dateien.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Zipfile Modul
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/zipfile.html">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Dieses Modul bietet Werkzeuge zum Erstellen, Lesen, Schreiben, Anhängen und Auflisten einer ZIP-Datei.
  </base-disclaimer-content>
</base-disclaimer>

## ZIP-Dateien lesen

```python
import zipfile

# ZIP-Datei öffnen und ihren Inhalt lesen
with zipfile.ZipFile('example.zip') as example_zip:
    # Alle Dateien und Verzeichnisse im ZIP auflisten
    print(example_zip.namelist())
    # Metadaten für eine bestimmte Datei abrufen
    spam_info = example_zip.getinfo('spam.txt')
    # Ursprüngliche Dateigröße ausgeben
    print(spam_info.file_size)
    # Komprimierte Dateigröße ausgeben
    print(spam_info.compress_size)
    # Kompressionsverhältnis berechnen
    print('Komprimierte Datei ist %sx kleiner!' % (round(spam_info.file_size / spam_info.compress_size, 2)))
```

Ausgabe:

```plaintext
['spam.txt', 'cats/', 'cats/catnames.txt', 'cats/zophie.jpg']
13908
3828
Komprimierte Datei ist 3.63x kleiner!
```

## Aus ZIP-Dateien extrahieren

Die Methode `extractall()` für ZipFile-Objekte extrahiert alle Dateien und Ordner aus einer ZIP-Datei in das aktuelle Arbeitsverzeichnis.

```python
# Alle Dateien aus ZIP in das aktuelle Verzeichnis extrahieren
with zipfile.ZipFile('example.zip') as example_zip:
    example_zip.extractall()
```

Die Methode `extract()` für ZipFile-Objekte extrahiert eine einzelne Datei aus der ZIP-Datei:

```python
# Eine einzelne Datei aus ZIP extrahieren
with zipfile.ZipFile('example.zip') as example_zip:
    # In das aktuelle Verzeichnis extrahieren (gibt Pfad zurück)
    print(example_zip.extract('spam.txt'))
    # In ein bestimmtes Verzeichnis extrahieren
    print(example_zip.extract('spam.txt', '/tmp/some/new/folders'))
```

Ausgabe:

```plaintext
/tmp/spam.txt
/tmp/some/new/folders/spam.txt
```

## ZIP-Dateien erstellen und hinzufügen

```python
import zipfile

# Eine neue ZIP-Datei erstellen und eine Datei hinzufügen
with zipfile.ZipFile('new.zip', 'w') as new_zip:
    # Datei mit Kompression hinzufügen
    new_zip.write('spam.txt', compress_type=zipfile.ZIP_DEFLATED)
```

Dieser Code erstellt eine neue ZIP-Datei namens new.zip, die den komprimierten Inhalt von spam.txt enthält.

## Metadaten von ZIP-Dateien lesen

### Dateinamen mit namelist() abrufen

```python
import zipfile

# ZIP-Datei lesen und alle Dateinamen auflisten
with zipfile.ZipFile('example.zip', 'r') as zf:
    print(zf.namelist())
```

Ausgabe:

```plaintext
['README.txt']
```

### Alle Metadaten mit infolist() abrufen

```python
import datetime
import zipfile

# Detaillierte Metadaten für alle Dateien in ZIP abrufen
with zipfile.ZipFile('example.zip') as zf:
    for info in zf.infolist():
        # Betriebssystem bestimmen (0 = Windows, 3 = Unix)
        system = 'Windows' if info.create_system == 0 else 'Unix'
        # date_time Tupel in datetime Objekt umwandeln
        modified = datetime.datetime(*info.date_time)
        print(info.filename)
        print(f'Kommentar     : {info.comment}')
        print(f'Geändert    : {modified}')
        print(f'System      : {system}')
        print(f'ZIP Version : {info.create_version}')
        print(f'Komprimiert  : {info.compress_size} Bytes')
        print(f'Unkomprimiert: {info.file_size} Bytes')
```

Ausgabe:

```plaintext
README.txt
Kommentar     : b''
Geändert    : 2022-11-15 06:48:02
System      : Unix
ZIP Version : 30
Komprimiert  : 65 Bytes
Unkomprimiert: 76 Bytes
```

## Relevante Links

- <router-link to="/cheatsheet/reading-and-writing-files">Cheatsheet: Dateien lesen und schreiben</router-link>
- <router-link to="/cheatsheet/file-directory-path">Cheatsheet: Datei- & Verzeichnispfad</router-link>
- <router-link to="/cheatsheet/context-manager">Cheatsheet: Context Manager</router-link>
- <router-link to="/modules/os-module">Modul: os</router-link>
- <router-link to="/modules/pathlib-module">Modul: pathlib</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/bytes">bytes()</router-link>
