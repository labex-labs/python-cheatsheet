---
title: "Python Hashlib Modul - Python Spickzettel"
description: "Das `hashlib`-Modul stellt sichere Hashfunktionen wie SHA-256 und MD5 bereit."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Hashlib Modul
</base-title>

Das `hashlib`-Modul stellt sichere Hashfunktionen wie SHA-256 und MD5 bereit.

```python
import hashlib
```

Hashfunktionen verwandeln Daten in einen Digest fester Länge. Eine kleine Änderung der Eingabe erzeugt einen sehr anderen Digest.

## Einen Hash erstellen

In der Regel wählst du zuerst einen Algorithmus aus und übergibst Bytes.

```python
import hashlib

digest = hashlib.sha256(b'hello world')
print(digest.hexdigest())
```

```output
b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9
```

Zeichenketten müssen zuerst in Bytes codiert werden:

```python
import hashlib

message = 'hello world'
digest = hashlib.sha256(message.encode('utf-8')).hexdigest()
print(digest)
```

```output
b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9
```

## Inkrementell aktualisieren

Hashes können in Blöcken aktualisiert werden.

```python
hasher = hashlib.sha256()
hasher.update(b'hello ')
hasher.update(b'world')
print(hasher.hexdigest())
```

```output
b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9
```

## Algorithmen vergleichen

Verschiedene Algorithmen erzeugen unterschiedlich große Digests.

```python
print(hashlib.md5(b'abc').hexdigest())
print(hashlib.sha1(b'abc').hexdigest())
print(hashlib.sha256(b'abc').hexdigest())
```

```output
900150983cd24fb0d6963f7d28e17f72
a9993e364706816aba3e25717850c26c9cd0d89d
ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad
```

## Eine Datei hashen

Lies Dateien blockweise, damit große Dateien nicht auf einmal in den Speicher geladen werden müssen.

```python
import hashlib
from pathlib import Path

path = Path('example.txt')
path.write_text('hello world')

hasher = hashlib.sha256()
with path.open('rb') as file:
    for chunk in iter(lambda: file.read(8192), b''):
        hasher.update(chunk)

print(hasher.hexdigest())
path.unlink()
```

```output
b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9
```

<base-warning>
  <base-warning-title>
    WARNING
  </base-warning-title>
  <base-warning-content>
    Für neuen Code solltest du moderne Algorithmen wie SHA-256 oder SHA-512 bevorzugen. MD5 und SHA-1 sind weiterhin für Prüfsummen nützlich, aber nicht für sicherheitskritische Einsätze geeignet.
  </base-warning-content>
</base-warning>

## Relevante Links

- <router-link to="/modules/pathlib-module">Module: pathlib</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">Spickzettel: Lesen und Schreiben von Dateien</router-link>
- <router-link to="/builtin/open">open()</router-link>
